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
  Divider,
  CircularProgress,
  Container,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SearchIcon from "@mui/icons-material/Search";
import socket from "../hooks/socket";
import type { Message } from "../types/message.type";

const USER_TYPING_TIMEOUT = 5000;

const FAQS = [
  { question: "How do I send a message?", answer: "Type in the box and press Enter or click Send." },
  { question: "How do I know if others are typing?", answer: "A 'User is typing...' indicator will appear." },
  { question: "How do I report a problem?", answer: "Click the Help button and follow the instructions in the FAQ." },
];

function Community() {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputText, setInputText] = useState("");
  const [autoScroll, setAutoScroll] = useState(true);
  const [typingUsers, setTypingUsers] = useState<Set<string>>(new Set());
  const [helpOpen, setHelpOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const messagesContainerRef = useRef<HTMLDivElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const typingTimeoutsRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  const handleButtonClick = () => {
    if (inputText.trim() !== "") {
      setMessages([...messages, `You: ${inputText}`]);
      setInputText("");
      socket.emit("send-chat-message", inputText);
    }
  };

  useEffect(() => {
    socket.on("connect", () => {
      setMessages((prev) => [
        ...prev,
        `Connected to the server with Socket ID: ${socket.id}`,
      ]);
    });

    socket.on("recieve-chat-message", (result) => {
      if (result.data[0] !== socket.id) {
        setMessages((prev) => [
          ...prev,
          `${result.data[0]}: ${result.data[1]}`,
        ]);
      }
    });

    socket.on("recieve-existing-messages", (result) => {
      const formattedMessages = result.allMessages.map(
        (msg: Message) => `${msg.message_owner}: ${msg.message_content}`
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

    return () => {
      socket.off("connect");
      socket.off("recieve-chat-message");
      socket.off("recieve-existing-messages");
      socket.off("user-typing");
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
          mt: { xs: "10px", md: "0px" }, // space for header
          mb: { xs: "25px", md: "20px" }, // space for input bar
          overflowY: "auto",
          py: 3,
          px: { xs: 2, md: 3 },
          "&::-webkit-scrollbar": { width: "6px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#c1c1c1",
            borderRadius: "8px",
          },
        }}
      >
        {messages.map((msg, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent={msg.startsWith("You:") ? "flex-end" : "flex-start"}
            mb={1.5}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 1, sm: 1.5 },
                maxWidth: "80%",
                borderRadius: msg.startsWith("You:")
                  ? "18px 18px 0 18px"
                  : "18px 18px 18px 0",
                bgcolor: msg.startsWith("You:") ? "#6a5acd" : "#F5F6FA",
                color: msg.startsWith("You:") ? "#fff" : "#000",
                border: msg.startsWith("You:")
                  ? "none"
                  : "1px solid rgba(0,0,0,0.08)",
                overflowWrap: "break-word",
                wordBreak: "break-word",
                whiteSpace: "pre-wrap",
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
                {msg}
              </Typography>
            </Paper>
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
            placeholder="Type a message..."
            variant="outlined"
            size="small"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
              socket.emit("user-typing", { data: [socket.id] });
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
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
        <DialogTitle>FAQ</DialogTitle>
        <DialogContent dividers>
          <TextField
            placeholder="Search FAQs..."
            variant="outlined"
            fullWidth
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
          <Button onClick={() => setHelpOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );



}

export default Community;
