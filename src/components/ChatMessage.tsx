import React from "react";

interface ChatMessageProps {
  sender: string;
  text: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ sender, text }) => {
  return (
    <div style={styles.message}>
      <span>{sender}</span>
      <span>{text}</span>
    </div>
  );
};

// Styles
const styles: { [key: string]: React.CSSProperties } = {
  message: {
    display: "flex",
    flexDirection: "row",
  },
};

export default ChatMessage;
