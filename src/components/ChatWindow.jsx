import React, { useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";

const ChatWindow = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Send message to backend API
    try {
      const response = await axios.post("/api/chat", { message: input });
      const botMessage = { sender: "bot", text: response.data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat API error:", error);
      const errorMsg = { sender: "bot", text: "Sorry, something went wrong." };
      setMessages((prev) => [...prev, errorMsg]);
    }
  };

  return (
    <motion.div
      className="fixed bottom-20 right-5 w-80 bg-white rounded-lg shadow-2xl p-4 z-50"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-green-700">Chat with us</h3>
        <button onClick={onClose} className="text-gray-600 hover:text-red-500">
          <X size={20} />
        </button>
      </div>
      <div className="h-48 bg-gray-50 p-2 rounded mb-4 overflow-y-auto space-y-2">
        {messages.map((msg, index) => (
          <div key={index} className={`text-sm ${msg.sender === "bot" ? "text-green-700" : "text-gray-800"}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-grow border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage() }
        />
        <button onClick={sendMessage} className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700">
          Send
        </button>
      </div>
    </motion.div>
  );
};

export default ChatWindow;
