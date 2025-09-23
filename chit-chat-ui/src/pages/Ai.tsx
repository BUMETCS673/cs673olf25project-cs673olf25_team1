import '../App.css';
import { useState, useRef, useEffect } from 'react';
import socket from '../hooks/socket';

function Ai() {
  const [messages, setMessages] = useState<{ from: 'user' | 'ai', text: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleAiAnswer = (data: { reply: string }) => {
      setMessages((msgs) => [...msgs, { from: 'ai', text: data.reply }]);
      setLoading(false);
      setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    };

    socket.on('ai_answer', handleAiAnswer);

    return () => {
      socket.off('ai_answer', handleAiAnswer);
    };
  }, []);

  const sendMessage = () => {
    if (!input.trim() || loading) return;
    const userMessage = input;
    setMessages((msgs) => [...msgs, { from: 'user', text: userMessage }]);
    setInput('');
    setLoading(true);

    // Emit the message to the backend via socket
    socket.emit('ask_ai', { message: userMessage });
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <>
      <h1>Talk to AI</h1>

      <div className="card">
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
          {messages.map((msg, idx) => (
            <div key={idx} style={{ margin: '6px 0', color: msg.from === 'user' ? '#1976d2' : '#333' }}>
              <b>{msg.from === 'user' ? 'You' : 'AI'}:</b> {msg.text}
            </div>
          ))}

          {/* AI is thinking indicator */}
          {loading && (
            <div style={{ color: '#888', margin: '8px 0 0 4px', fontStyle: 'italic' }}>
              AI is thinking...
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>



        <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
          <input
            type="text"
            placeholder="Type a message..."
            style={{ flex: 1 }}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleInputKeyDown}
            disabled={loading}
          />
          <button onClick={sendMessage} disabled={loading || !input.trim()}>
            {loading ? '...' : 'Send'}
          </button>
        </div>
      </div>

      <p className="footer">This app is made by Team 1.</p>
    </>
  )
}

export default Ai;