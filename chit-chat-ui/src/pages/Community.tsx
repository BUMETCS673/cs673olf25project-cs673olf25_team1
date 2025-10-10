import { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  InputAdornment,
  Avatar,
  AvatarGroup,
  Container,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SearchIcon from "@mui/icons-material/Search";
import socket from "../hooks/socket";
import type { Message } from "../types/message.type";

const USER_TYPING_TIMEOUT = 5000;
const EMOJIS = ["👍", "❤️", "😂", "😮", "🎉"];

const FAQS = [
  {
    question: "How do I send a message?",
    answer: "Type in the box and press Enter or click Send.",
  },
  {
    question: "How do I know if others are typing?",
    answer: "A 'User is typing...' indicator will appear.",
  },
  {
    question: "How do I report a problem?",
    answer: "Click the Help button and follow the instructions in the FAQ.",
  },
];

function Community() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [autoScroll, setAutoScroll] = useState(true);
  const [typingUsers, setTypingUsers] = useState<Set<string>>(new Set());
  const [helpOpen, setHelpOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const messagesContainerRef = useRef<HTMLDivElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const typingTimeoutsRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(
    new Map()
  );

  const [hoveredMsgId, setHoveredMsgId] = useState<number | null>(null);
  const [reactions, setReactions] = useState<{ [key: number]: string }>({});

  const handleButtonClick = () => {
    if (inputText.trim() !== "") {
      setInputText("");
      socket.emit("send-chat-message", inputText);
    }
  };

  const handleReaction = (id: number, emoji: string) => {
    setReactions((prev) => ({ ...prev, [id]: emoji }));
    socket.emit("send-reaction", { messageId: id, reaction: emoji });
  };

  useEffect(() => {
    socket.on("connect", () => {
      setMessages((prev) => [
        ...prev,
        {
          message_owner: "System",
          message_content: `Connected to the server with Socket ID: ${socket.id}`,
          id: -1,
          reactions: [],
        },
      ]);
    });

    socket.on("recieve-chat-message", (result) => {
      if (result.data[0] !== socket.id) {
        setMessages((prev) => [
          ...prev,
          {
            message_owner: result.data[0],
            message_content: result.data[1],
            id: result.data[2],
            reactions: [],
          },
        ]);
      }
    });

    socket.on("recieve-existing-messages", (result) => {
      const formattedMessages: Message[] = result.allMessages.map(
        (msg: Message) => ({
          message_owner: msg.message_owner,
          message_content: msg.message_content,
          id: msg.id,
          reactions: msg.reactions,
        })
      );
      setMessages((prev) => [...prev, ...formattedMessages]);
    });

    socket.on("user-typing", (result) => {
      const userId = result.data[0];
      if (userId === socket.id) return;

      setTypingUsers((prev) => new Set(prev).add(userId));

      if (typingTimeoutsRef.current.has(userId)) {
        clearTimeout(typingTimeoutsRef.current.get(userId)!);
      }

      const timeout = setTimeout(() => {
        setTypingUsers((prev) => {
          const newSet = new Set(prev);
          newSet.delete(userId);
          return newSet;
        });
        typingTimeoutsRef.current.delete(userId);
      }, USER_TYPING_TIMEOUT);

      typingTimeoutsRef.current.set(userId, timeout);
    });
    socket.on("recieve-reaction", (result) => {
      const { messageId, reactions } = result;
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === messageId
            ? {
                ...msg,
                reactions: reactions || [],
              }
            : msg
        )
      );
      console.log("Received reactions:", result);
    });

    return () => {
      socket.off("connect");
      socket.off("recieve-chat-message");
      socket.off("recieve-existing-messages");
      socket.off("user-typing");
      socket.off("recieve-reaction");
    };
  }, []);

  useEffect(() => {
    if (autoScroll && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, typingUsers, autoScroll]);

  const handleScroll = () => {
    const container = messagesContainerRef.current;
    if (!container) return;
    const isAtBottom =
      container.scrollHeight - container.scrollTop <=
      container.clientHeight + 5;
    setAutoScroll(isAtBottom);
  };

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Fixed Header */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: { xs: 0, md: 260 },
          right: 0,
          zIndex: 10,
          px: { xs: 2, sm: 3, md: 6 },
          py: { xs: 1, md: 2 },
          backgroundColor: "#fff",
          borderBottom: "1px solid #e0e0e0",
          width: { xs: "100%", md: `calc(100% - 260px)` },
        }}
      >
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{
            fontSize: { xs: "1rem", sm: "1.25rem" },
          }}
        >
          Talk to the Community
        </Typography>
      </Box>

      {/* Scrollable messages area */}
      <Container
        maxWidth="md"
        ref={messagesContainerRef}
        onScroll={handleScroll}
        sx={{
          flexGrow: 1,
          mt: { xs: "10px", md: "0px" },
          mb: { xs: "25px", md: "20px" },
          overflowY: "auto",
          py: 3,
          px: { xs: 2, md: 3 },
          "&::-webkit-scrollbar": { width: "6px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#c1c1c1",
            borderRadius: "8px",
          },
        }}
         data-testid="message-list"
      >
        {messages.map((msg, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent={
              msg.message_owner === "You" ? "flex-end" : "flex-start"
            }
            mb={msg.reactions && msg.reactions.length > 0 ? 3 : 1.5}
            onMouseEnter={() => setHoveredMsgId(msg.id)}
            onMouseLeave={() => setHoveredMsgId(null)}
            sx={{ position: "relative" }}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 1, sm: 1.5 },
                maxWidth: "80%",
                borderRadius:
                  msg.message_owner === "You"
                    ? "18px 18px 0 18px"
                    : "18px 18px 18px 0",
                bgcolor: msg.message_owner === "You" ? "#6a5acd" : "#F5F6FA",
                color: msg.message_owner === "You" ? "#fff" : "#000",
                border:
                  msg.message_owner === "You"
                    ? "none"
                    : "1px solid rgba(0,0,0,0.08)",
                overflowWrap: "break-word",
                wordBreak: "break-word",
                whiteSpace: "pre-wrap",
                position: "relative", // for absolute positioning of avatars
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  overflowWrap: "break-word",
                  wordBreak: "break-word",
                  whiteSpace: "pre-wrap",
                }}
              >
                {msg.message_owner}: {msg.message_content}
              </Typography>
              {/* Emoji Avatars peeking out at the bottom */}
              {msg.reactions && msg.reactions.length > 0 && (
                <AvatarGroup
                  max={5}
                  spacing="medium"
                  sx={{
                    position: "absolute",
                    left: msg.message_owner === "You" ? "auto" : 12,
                    right: msg.message_owner === "You" ? 12 : "auto",
                    bottom: -18,
                    zIndex: 2,
                    justifyContent: "flex-start",
                  }}
                  slotProps={{
                    additionalAvatar: {
                      sx: {
                        width: 28,
                        height: 28,
                        fontSize: "1.2rem",
                        bgcolor:
                          msg.message_owner === "You" ? "#6a5acd" : "#F5F6FA",
                        color: msg.message_owner === "You" ? "#fff" : "#222",
                        border: "1px solid #eee",
                        boxShadow: 1,
                      },
                    },
                  }}
                >
                  {msg.reactions.map((emoji: string, idx: number) => (
                    <Avatar
                      key={idx}
                      sx={{
                        width: 28,
                        height: 28,
                        fontSize: "1.2rem",
                        bgcolor:
                          msg.message_owner === "You" ? "#6a5acd" : "#F5F6FA",
                        color: msg.message_owner === "You" ? "#fff" : "#222",
                        border: "1px solid #eee",
                        boxShadow: 1,
                      }}
                    >
                      {emoji}
                    </Avatar>
                  ))}
                </AvatarGroup>
              )}
            </Paper>
            {/* Emoji reactions on hover */}
            {hoveredMsgId === msg.id && (
              <Box
                sx={{
                  position: "absolute",
                  top: "-36px",
                  left: msg.message_owner === "You" ? "auto" : 0,
                  right: msg.message_owner === "You" ? 0 : "auto",
                  zIndex: 2,
                  bgcolor: "#0f0101ff",
                  borderRadius: "20px",
                  px: 1,
                  py: 0.5,
                }}
              >
                <ToggleButtonGroup
                  exclusive
                  size="small"
                  value={reactions[msg.id] || null}
                  onChange={(_, emoji) =>
                    emoji && handleReaction(msg.id, emoji)
                  }
                >
                  {EMOJIS.map((emoji) => (
                    <ToggleButton
                      key={emoji}
                      value={emoji}
                      sx={{
                        minWidth: 24,
                        height: 36,
                        fontSize: "1rem",
                        color: "#000000",
                        backgroundColor: "transparent",
                        opacity: 1,
                        transition: "background 0.2s, color 0.2s",
                        "&:hover": {
                          backgroundColor: "#5a49c4",
                          color: "#5a49c4",
                          opacity: 1,
                        },
                        "&.Mui-selected": {
                          backgroundColor: "#5a49c4",
                          color: "#5a49c4",
                          opacity: 1,
                        },
                      }}
                    >
                      {emoji}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </Box>
            )}
          </Box>
        ))}

        {/* Typing indicator */}
        {typingUsers.size > 0 && (
          <Typography
            variant="body2"
            sx={{
              fontStyle: "italic",
              color: "#666",
              mt: 1,
              ml: 1,
            }}
            data-testid="typing-indicator"
          >
            {typingUsers.size === 1
              ? "User is typing..."
              : "Users are typing..."}
          </Typography>
        )}
        <div ref={messagesEndRef} />
      </Container>

      {/* Fixed Input Bar */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: { xs: 0, md: 260 }, // ✅ responsive sidebar offset
          right: 0,
          zIndex: 10,
          backgroundColor: "#fff",
          borderTop: "1px solid #e0e0e0",
          py: { xs: 1.2, md: 2 },
          width: { xs: "100%", md: `calc(100% - 260px)` },
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 1, sm: 1.5 },
          }}
        >
          <TextField
            fullWidth
            multiline
            minRows={1}
            maxRows={5}
            placeholder="Type a message..."
            variant="outlined"
            size="small"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
              socket.emit("user-typing", { data: [socket.id] });
            }}
            data-testid="chat-input"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleButtonClick();
              }
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
                backgroundColor: "#fafafa",
                fontSize: { xs: "0.85rem", sm: "0.95rem" },
              },
            }}
          />
          <IconButton
            color="primary"
            onClick={handleButtonClick}
            size="small"
            data-testid="send-button"
            sx={{
              bgcolor: "#6a5acd",
              color: "white",
              p: { xs: 0.8, sm: 1 },
              "&:hover": { bgcolor: "#5a49c4" },
            }}
          >
            <SendIcon sx={{ fontSize: { xs: 18, sm: 22 } }} />
          </IconButton>

          {/* Hide Help button on very small screens */}
          <Button
            variant="outlined"
            startIcon={<HelpOutlineIcon />}
            onClick={() => setHelpOpen(true)}
            sx={{
              display: { xs: "none", sm: "flex" },
              borderRadius: "20px",
              textTransform: "none",
              fontSize: "0.85rem",
            }}
            data-testid="help-button"
          >
            Help
          </Button>
        </Container>
      </Box>

      {/* Help Dialog */}
      <Dialog
        open={helpOpen}
        onClose={() => setHelpOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle data-testid="faq-header">FAQ</DialogTitle>
        <DialogContent dividers>
          <TextField
            placeholder="Search FAQs..."
            variant="outlined"
            fullWidth
            data-testid="faq-search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 2 }}
          />
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, i) => (
              <Box key={i} mb={2}>
                <Typography variant="subtitle1" fontWeight={600}>
                  {faq.question}
                </Typography>
                <Typography variant="body2">{faq.answer}</Typography>
              </Box>
            ))
          ) : (
            <Typography variant="body2">No results found.</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setHelpOpen(false)} data-testid="faq-close">Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Community;