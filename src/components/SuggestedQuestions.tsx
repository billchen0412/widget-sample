import React from "react";

interface SuggestedQuestionsProps {
  questions: string[];
  onClick: (question: string) => void;
}

const SuggestedQuestions: React.FC<SuggestedQuestionsProps> = ({
  questions,
  onClick,
}) => {
  return (
    <div style={styles.message}>
      {questions.map((question, idx) => (
        <div key={idx} onClick={() => onClick(question)}>
          {question}
        </div>
      ))}
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

export default SuggestedQuestions;
