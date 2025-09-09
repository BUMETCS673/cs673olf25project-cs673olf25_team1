import { useState, useEffect } from 'react'
import io from 'socket.io-client';
import ChitChatLogo from './assets/chit_chat_logo.svg'
import './App.css'

const socket = io('http://localhost:3000');

function App() {
  const [messages, setMessages] = useState<string[]>([]);

  const handleButtonClick = () => {
    socket.emit('request_event_test');
  };

  useEffect(() => {
    console.log("Setting up socket listeners");
    socket.on('connect', () => {
      setMessages((prevMessages) => [...prevMessages, `${socket.id} has been connected`]);
    });

    socket.on('request_event_test', (result) => {
      setMessages((prevMessages) => [...prevMessages, result.data]);
    });

    return () => {
      socket.off('connect');
      socket.off('request_event_test');
    };
  }, []);

  return (
    <>
      <div>
        <img src={ChitChatLogo} className="logo" alt="Chit Chat logo" />
      </div>
      <h1>Chit Chat App</h1>
      <div className="card">
        <button onClick={handleButtonClick}>
            Send an event
          </button>
        <div className="messages-container">
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
