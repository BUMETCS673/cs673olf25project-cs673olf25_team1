import { useState, useEffect, useRef } from 'react'
import io from 'socket.io-client';
import ChitChatLogo from './assets/chit_chat_logo.svg'
import './App.css'



const USER_TYPING_TIMEOUT = 5000;   //timeout for the "User is typing" message (ms)



const socket = io('http://localhost:3000');

function App() {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputText, setInputText] = useState("");
  const [autoScroll, setAutoScroll] = useState(true); 
  const [typing, setTyping] = useState(false); // track if someone is typing

  const messagesContainerRef = useRef<HTMLDivElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);




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
      setMessages((prevMessages) => [
        ...prevMessages,
        `Connected to the server with Socket ID: ${socket.id}`
      ]);
    });





    socket.on('chat-message', (result) => {
      if (result.data[0] !== socket.id) {
        setMessages((prevMessages) => [
          ...prevMessages,
          `${result.data[0]}: ${result.data[1]}`
        ]);
      }
    });



    let Last_typing_user_id="";
    // Typing event
    socket.on('user-typing', (result) => {

      if (result.data[0] !== socket.id) { //only if it is a different user typing
        setTyping(true);
        if (Last_typing_user_id == ""){ //if no last typing id stored 
          Last_typing_user_id = String(socket.id);
        }

        // reset timeout each time typing event arrives
        if (typingTimeoutRef.current) {
          clearTimeout(typingTimeoutRef.current);
        }
        typingTimeoutRef.current = setTimeout(() => {
          setTyping(false);
          Last_typing_user_id = "";
        }, USER_TYPING_TIMEOUT); 
      }
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
  }, [messages, typing, autoScroll]); 
  // include typing so the indicator triggers scroll too





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
          {typing && (
            <div style={{ fontStyle: "italic", color: "#666", marginTop: "4px" }}>
              User is typing...
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
              socket.emit('user-typing'); // send typing event
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

export default App
