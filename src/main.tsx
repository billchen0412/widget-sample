import ChatWidget from "./components/ChatWidget.tsx";
import ReactDOM from "react-dom/client";

declare global {
  interface Window {
    renderAIWidget: (options: {
      title?: string;
      thumbnail?: string;
      questions?: string[];
    }) => void;
  }
}

window.renderAIWidget = (options) => {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = ReactDOM.createRoot(container);
  root.render(<ChatWidget {...options} />);
};
