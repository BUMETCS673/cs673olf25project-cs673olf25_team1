import { useState, useEffect, useRef } from 'react'
import ChitChatLogo from '../assets/chit_chat_logo.svg'
import '../App.css'
import socket from "../hooks/socket"

const USER_TYPING_TIMEOUT = 5000;   //timeout for the "User is typing" message (ms)

function Community() {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputText, setInputText] = useState("");
  const [autoScroll, setAutoScroll] = useState(true); 
  const [typingUsers, setTypingUsers] = useState<Set<string>>(new Set());



  const messagesContainerRef = useRef<HTMLDivElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const typingTimeoutsRef = useRef<Map<string, NodeJS.Timeout>>(new Map());




  const handleButtonClick = () => {
    if (inputText.trim() !== "") {
      setMessages([...messages, `You: ${inputText}`]);
      setInputText("");
      socket.emit('chat-message', inputText);
    }
  };



  useEffect(() => {
    console.log("Setting up socket listeners");

    socket.on('connect', () => {
      setMessages(prev => [
        ...prev,
        `Connected to the server with Socket ID: ${socket.id}`
      ]);
    });




    socket.on('chat-message', (result) => {
      if (result.data[0] !== socket.id) {
        setMessages(prev => [...prev, `${result.data[0]}: ${result.data[1]}`]);
      }
    });




    // Typing event
    socket.on('user-typing', (result) => {
      const userId = result.data[0];
      if (userId === socket.id) return; // ignore self

      // Add user to typingUsers set
      setTypingUsers(prev => new Set(prev).add(userId));

      // reset timeout for this user
      if (typingTimeoutsRef.current.has(userId)) {
        clearTimeout(typingTimeoutsRef.current.get(userId)!);
      }

      const timeout = setTimeout(() => {
        setTypingUsers(prev => {
          const newSet = new Set(prev);
          newSet.delete(userId);
          return newSet;
        });
        typingTimeoutsRef.current.delete(userId);
      }, USER_TYPING_TIMEOUT);

      typingTimeoutsRef.current.set(userId, timeout);
    });





    return () => {
      socket.off('connect');
      socket.off('chat-message');
      socket.off('user-typing');
    };
  }, []);





  // Auto scroll
  useEffect(() => {
    if (autoScroll && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, typingUsers, autoScroll]); // include typingUsers to scroll indicator





  // Handle user scrolling
  const handleScroll = () => {
    const container = messagesContainerRef.current;
    if (!container) return;

    const isAtBottom =
      container.scrollHeight - container.scrollTop <= container.clientHeight + 5;

    setAutoScroll(isAtBottom);
  };





  
  return (
    <>
      <div>
        <img src={ChitChatLogo} className="logo" alt="Chit Chat logo" />
      </div>
      <h1>Chit Chat App</h1>

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
            <div style={{ fontStyle: "italic", color: "#666", marginTop: "4px" }}>
              {typingUsers.size === 1 ? "User is typing..." : "Users are typing..."}
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
              socket.emit('user-typing', { data: [socket.id] });
            }}
            placeholder="Type a message..."
            style={{ flex: 1 }}
          />
          <button onClick={handleButtonClick}>Send</button>
        </div>
      </div>

      <p className="footer">This app is made by Team 1.</p>
    </>
  )
}

export default Community;
