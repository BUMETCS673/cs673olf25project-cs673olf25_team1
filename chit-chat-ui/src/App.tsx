import { useState, useEffect } from 'react'
import io from 'socket.io-client';
import ChitChatLogo from './assets/chit_chat_logo.svg'
import './App.css'

const socket = io('http://localhost:3000');

function App() {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputText, setInputText] = useState("");





  const handleButtonClick = () => {
    if (inputText.trim() !== "") {
      setMessages([...messages, `You: ${inputText}`]); //add "you" at the begining of the self text
      setInputText(""); // clear input after sending
      socket.emit('chat-message', inputText);
    }
    
  };





  useEffect(() => {
    console.log("Setting up socket listeners");
    socket.on('connect', () => {
      setMessages((prevMessages) => [...prevMessages, `Connected to the server with Socket ID: ${socket.id}`]);
    });





    socket.on('chat-message', (result) => {
      if (result.data[0] != socket.id){ //only show data received from other users and ignore data from self 
        setMessages((prevMessages) => [...prevMessages, `${socket.id}: ${result.data[1]}`]);
      }
    });





    return () => {
      socket.off('connect');
      socket.off('chat-message');
    };
  }, []);










  return (
    <>
      <div>
        <img src={ChitChatLogo} className="logo" alt="Chit Chat logo" />
      </div>
      <h1>Chit Chat App</h1>
      <div className="card">
        
        <div style={{ display: "flex", gap: "8px" }}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={handleButtonClick}>Send</button>
        </div>


        <div className="messages-container" style={{ marginTop: "16px" }}>
          {messages.map((msg, index) => (
            <div key={index}>{msg}</div>
          ))}
        </div>
      </div>

      <p className="footer">
        This app is made by Team 1.
      </p>
    </>
  )
}

export default App
