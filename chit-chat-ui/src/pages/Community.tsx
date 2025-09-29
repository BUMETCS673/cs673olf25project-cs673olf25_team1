import { useEffect, useRef, useState } from "react";
import "../App.css";
import socket from "../hooks/socket";
import type { Message } from "../types/message.type";

const USER_TYPING_TIMEOUT = 5000;

// Example FAQ content
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

  // Help dialog state
  const [helpOpen, setHelpOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const messagesContainerRef = useRef<HTMLDivElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const typingTimeoutsRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(
    new Map()
  );

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

  // Filtered FAQs
  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1>Talk to the Community</h1>

      <div className="card">
        {/* Scrollable messages container */}
        <div
          className="messages-container"
          ref={messagesContainerRef}
          onScroll={handleScroll}
          style={{
            marginTop: "5px",
            height: "300px",
            overflowY: "auto",
            border: "3px solid #ccc",
            padding: "8px",
            borderRadius: "8px",
            background: "#d1e9f3ff",
            textAlign: "left",
          }}
        >
          {messages.map((msg, index) => (
            <div key={index}>{msg}</div>
          ))}

          {/* Typing indicator */}
          {typingUsers.size > 0 && (
            <div
              style={{ fontStyle: "italic", color: "#666", marginTop: "4px" }}
            >
              {typingUsers.size === 1
                ? "User is typing..."
                : "Users are typing..."}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input + send button BELOW */}
        <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
          <input
            type="text"
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
            placeholder="Type a message..."
            style={{ flex: 1 }}
          />
          <button onClick={handleButtonClick}>Send</button>
        </div>
      </div>

      {/* Help Button */}
      <button
        style={{ marginTop: "16px" }}
        onClick={() => setHelpOpen(true)}
      >
        Help
      </button>

      <p className="footer">This app is made by Team 1.</p>

      {/* Help Dialog */}
      {helpOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => setHelpOpen(false)}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "8px",
              padding: "20px",
              width: "400px",
              maxHeight: "80vh",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()} // prevent modal close on inner click
          >
            <h2>FAQ</h2>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search FAQs..."
              style={{ width: "100%", marginBottom: "12px" }}
            />
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, i) => (
                <div key={i} style={{ marginBottom: "12px" }}>
                  <strong>{faq.question}</strong>
                  <p>{faq.answer}</p>
                </div>
              ))
            ) : (
              <p>No results found.</p>
            )}
            <button onClick={() => setHelpOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Community;
