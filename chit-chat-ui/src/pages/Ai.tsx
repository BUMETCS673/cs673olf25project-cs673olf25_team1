import '../App.css';
import ChitChatLogo from '../assets/chit_chat_logo.svg';

function Ai() {
 
  
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

        </div>

        {/* Input + send button BELOW */}
        <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
          <input
            type="text"
            placeholder="Type a message..."
            style={{ flex: 1 }}
          />
          <button>Send</button>
        </div>
      </div>

      <p className="footer">This app is made by Team 1.</p>
    </>
  )
}

export default Ai;
