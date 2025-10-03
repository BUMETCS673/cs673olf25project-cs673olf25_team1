import { useState } from "react";
import "../App.css";

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
    <>
      <h1>Talk to AI</h1>

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
        ></div>

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

      {/* Help Button */}
      <button style={{ marginTop: "16px" }} onClick={() => setHelpOpen(true)}>
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

export default Ai;
