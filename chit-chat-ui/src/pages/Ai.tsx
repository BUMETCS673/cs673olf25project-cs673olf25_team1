import { useState } from "react";
import "../App.css";
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  InputAdornment,
  Container,
  Paper,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SearchIcon from "@mui/icons-material/Search";

// Example FAQ content (same as Community.tsx)
const FAQS = [
  { question: "How do I send a message?", answer: "Type in the box and press Enter or click Send." },
  { question: "How do I know if others are typing?", answer: "A 'User is typing...' indicator will appear." },
  { question: "How do I report a problem?", answer: "Click the Help button and follow the instructions in the FAQ." },
];

function Ai() {
  // Help dialog state
  const [helpOpen, setHelpOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered FAQs
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
          Talk to AI
        </Typography>
      </Box>

      {/* Scrollable messages container */}
      <Container
        maxWidth="md"
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
      >
        {/* Message bubbles (placeholder for now) */}
        <Box display="flex" justifyContent="flex-start" mb={1.5}>
          <Paper
            elevation={0}
            sx={{
              p: 1.5,
              maxWidth: "75%",
              borderRadius: "18px 18px 18px 0",
              bgcolor: "#F5F6FA",
              color: "#000",
              border: "1px solid rgba(0,0,0,0.08)",
              overflowWrap: "break-word",
              wordBreak: "break-word",
              whiteSpace: "pre-wrap",
            }}
          >
            <Typography variant="body2">
              Hello! I’m your AI assistant. How can I help you today?
            </Typography>
          </Paper>
        </Box>
      </Container>

      {/* Fixed Input Bar */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: { xs: 0, md: 260 },
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

export default Ai;
