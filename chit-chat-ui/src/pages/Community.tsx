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
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
      sx={{ p: { xs: 2, md: 4 } }}
    >
      <Typography variant="h4" fontWeight={700} mb={2}>
        Talk to the Community
      </Typography>

      {/* Chat Card */}
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: 700,
          display: "flex",
          flexDirection: "column",
          borderRadius: 3,
          overflow: "hidden",
          background: "linear-gradient(180deg, #fafafa 0%, #f5f7fb 100%)",
        }}
      >
        {/* Messages container */}
        <Box
          ref={messagesContainerRef}
          onScroll={handleScroll}
          sx={{
            flexGrow: 1,
            height: 400,
            overflowY: "auto",
            px: 2,
            py: 2,
            "&::-webkit-scrollbar": { width: "6px" },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#ccc",
              borderRadius: "4px",
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
                elevation={1}
                sx={{
                  p: 1.5,
                  maxWidth: "75%",
                  borderRadius: msg.startsWith("You:")
                    ? "16px 16px 0 16px"
                    : "16px 16px 16px 0",
                  bgcolor: msg.startsWith("You:") ? "#6a5acd" : "#e8e8ee",
                  color: msg.startsWith("You:") ? "#fff" : "#000",
                }}
              >
                <Typography variant="body1">{msg}</Typography>
              </Paper>
            </Box>
          ))}

          {/* Typing Indicator */}
          {typingUsers.size > 0 && (
            <Typography
              variant="body2"
              sx={{ fontStyle: "italic", color: "#666", mt: 1 }}
            >
              {typingUsers.size === 1
                ? "User is typing..."
                : "Users are typing..."}
            </Typography>
          )}
          <div ref={messagesEndRef} />
        </Box>

        <Divider />

        {/* Input and Send Button */}
        <Box display="flex" alignItems="center" p={1.5}>
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
          />
          <IconButton
            color="primary"
            onClick={handleButtonClick}
            sx={{ ml: 1 }}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Paper>

      {/* Help Button */}
      <Button
        variant="outlined"
        startIcon={<HelpOutlineIcon />}
        onClick={() => setHelpOpen(true)}
        sx={{ mt: 2 }}
      >
        Help
      </Button>

      <Typography variant="body2" color="text.secondary" mt={2}>
        This app is made by Team 1.
      </Typography>

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
