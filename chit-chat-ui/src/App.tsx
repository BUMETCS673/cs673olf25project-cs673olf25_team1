import { useState, useEffect, useRef } from 'react'
import io from 'socket.io-client';
import ChitChatLogo from './assets/chit_chat_logo.svg'
import './App.css'

const socket = io('http://localhost:3000');

function App() {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputText, setInputText] = useState("");

  // Ref for scrolling
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleButtonClick = () => {
    if (inputText.trim() !== "") {
      setMessages([...messages, `You: ${inputText}`]); //add "you" at the beginning of the self text
      setInputText(""); // clear input after sending
      socket.emit('chat-message', inputText);
    }
  };

  useEffect(() => {
    console.log("Setting up socket listeners");
    socket.on('connect', () => {
      setMessages((prevMessages) => [
        ...prevMessages,
        `Connected to the server with Socket ID: ${socket.id}`
      ]);
    });

    socket.on('chat-message', (result) => {
      if (result.data[0] !== socket.id) { 
        // only show data received from other users
        setMessages((prevMessages) => [
          ...prevMessages,
          `${result.data[0]}: ${result.data[1]}`
        ]);
      }
    });

    return () => {
      socket.off('connect');
      socket.off('chat-message');
    };
  }, []);

  // Auto scroll effect
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

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
          {/* Scroll target */}
          <div ref={messagesEndRef} />
        </div>

        {/* Input + send button BELOW */}
        <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
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

export default App
