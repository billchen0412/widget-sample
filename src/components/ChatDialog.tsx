import React, { useState } from "react";

import ChatMessage from "./ChatMessage";
import SuggestedQuestions from "./SuggestedQuestions";

interface ChatDialogProps {
  title: string;
  thumbnail?: string;
  questions: string[];
  onClose: () => void;
}

const ChatDialog: React.FC<ChatDialogProps> = ({
  title,
  thumbnail,
  questions,
  onClose,
}) => {
  const [messages, setMessages] = useState<
    { sender: "user" | "ai"; text: string }[]
  >([]);
  const [input, setInput] = useState("");

  const sendMessage = async (message: string) => {
    if (!message.trim()) return;
    setMessages((prev) => [...prev, { sender: "user", text: message }]);
    setInput("");

    // Simulated AI Response (Replace with API call)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "I'm AI Assistant. How can I help?" },
      ]);
    }, 1000);
  };

  return (
    <div style={styles.chatContainer}>
      {/* Header */}
      <div style={styles.header}>
        {thumbnail && (
          <img src={thumbnail} alt="Owner" style={styles.thumbnail} />
        )}
        <span>{title}</span>
        <button onClick={onClose} style={styles.closeButton}>
          ✖
        </button>
      </div>

      {/* Messages */}
      <div style={styles.messages}>
        {messages.map((msg, index) => (
          <ChatMessage key={index} sender={msg.sender} text={msg.text} />
        ))}
      </div>

      {/* Suggested Questions */}
      <SuggestedQuestions questions={questions} onClick={sendMessage} />

      {/* Input */}
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={styles.input}
        />
        <button onClick={() => sendMessage(input)} style={styles.sendButton}>
          ➤
        </button>
      </div>
    </div>
  );
};

// Styles
const styles: { [key: string]: React.CSSProperties } = {
  chatContainer: {
    position: "fixed",
    bottom: "90px",
    right: "20px",
    width: "350px",
    height: "450px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    zIndex: 1000,
  },
  header: {
    background: "#007bff",
    color: "white",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "10px 10px 0 0",
  },
  thumbnail: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    marginRight: "10px",
  },
  closeButton: {
    background: "none",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
  messages: { flexGrow: 1, overflowY: "auto", padding: "10px" },
  inputContainer: { display: "flex", borderTop: "1px solid #ddd" },
  input: { flexGrow: 1, padding: "10px", border: "none" },
  sendButton: {
    padding: "10px",
    background: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default ChatDialog;
