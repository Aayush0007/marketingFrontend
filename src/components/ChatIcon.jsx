// ChatIcon.jsx
import React from "react";
import { MessageSquare } from "lucide-react";

const ChatIcon = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed bottom-5 right-5 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition"
  >
    <MessageSquare size={24} />
  </button>
);

export default ChatIcon;
