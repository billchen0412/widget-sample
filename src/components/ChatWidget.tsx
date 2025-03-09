import React, { useState } from "react";

import ChatDialog from "./ChatDialog";

interface ChatWidgetProps {
  title?: string;
  thumbnail?: string;
  questions?: string[];
}

const ChatWidget: React.FC<ChatWidgetProps> = ({
  title = "Chat with us",
  thumbnail,
  questions = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} style={styles.chatButton}>
          💬
        </button>
      )}

      {/* Chat Dialog */}
      {isOpen && (
        <ChatDialog
          title={title}
          thumbnail={thumbnail}
          questions={questions}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

// Styles
const styles: { [key: string]: React.CSSProperties } = {
  chatButton: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    background: "#007bff",
    color: "white",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    fontSize: "24px",
    zIndex: 1000,
  },
};

export default ChatWidget;
