import React, { useState, useEffect, useRef } from "react";
import { X, Trash2, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import knowledgeBase from "../data/knowledgeBase";

const ChatWindow = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Greetings, visionary! I’m MarketingBirbal’s AI assistant, here to propel your business into the future. What’s on your mind?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const getBotResponse = (userInput) => {
    const inputLower = userInput.toLowerCase().trim();
    for (const [key, value] of Object.entries(knowledgeBase)) {
      const keywords = key.split("|");
      if (keywords.some((keyword) => inputLower.includes(keyword))) {
        return value;
      }
    }
    return knowledgeBase["default"];
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input, timestamp: new Date() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    const botResponseText = getBotResponse(input);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: botResponseText, timestamp: new Date() },
      ]);
      setIsTyping(false);
    }, 1200);
  };

  const clearChat = () => {
    setMessages([
      {
        sender: "bot",
        text: "Chat reset—fresh start, infinite possibilities! How can I assist you?",
        timestamp: new Date(),
      },
    ]);
  };

  const formatTimestamp = (date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <motion.div
      className="fixed bottom-24 right-8 w-96 max-w-[90vw] bg-[#FFFAFA] rounded-2xl shadow-2xl p-6 z-50 border border-[#2F6B47]/20 overflow-hidden relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Holographic Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2F6B47]/10 to-[#D4A017]/10 opacity-50 animate-gradientShift"></div>

      {/* Header */}
      <div className="flex justify-between items-center mb-5 relative z-10">
        <h3 className="text-xl font-bold text-[#2F6B47] font-[Orbitron] tracking-wide">
          <span className="bg-gradient-to-r from-green-600 via-yellow-500 to-orange-400 bg-clip-text text-transparent animate-gradientText">
            AI Chat
          </span>
        </h3>
        <div className="flex space-x-3">
          <button
            onClick={clearChat}
            className="text-[#5A8033] hover:text-[#D4A017] transition-colors"
            title="Clear Chat"
          >
            <Trash2 size={20} />
          </button>
          <button
            onClick={onClose}
            className="text-[#5A8033] hover:text-[#D4A017] transition-colors"
          >
            <X size={22} />
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div
        ref={chatContainerRef}
        className="h-72 bg-white/80 backdrop-blur-sm rounded-xl p-4 overflow-y-auto space-y-4 shadow-inner border border-[#2F6B47]/10 relative"
      >
        <AnimatePresence>
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className={`flex ${
                msg.sender === "bot" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-lg text-sm shadow-md ${
                  msg.sender === "bot"
                    ? "bg-[#2F6B47]/10 text-[#2F6B47] border border-[#2F6B47]/20"
                    : "bg-[#D4A017]/20 text-[#2F6B47] border border-[#D4A017]/30"
                }`}
              >
                <p className="leading-relaxed">{msg.text}</p>
                <span className="text-xs opacity-60 block mt-1 font-[Orbitron]">
                  {formatTimestamp(msg.timestamp)}
                </span>
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-start"
            >
              <div className="bg-[#2F6B47]/10 text-[#5A8033] p-3 rounded-lg text-sm border border-[#2F6B47]/20">
                <span className="animate-pulse font-[Orbitron]">Processing...</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input Area */}
      <div className="mt-5 flex space-x-3 relative z-10">
        <input
          type="text"
          placeholder="Type your query..."
          className="flex-grow border border-[#2F6B47]/30 rounded-full p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A017] bg-white/90 text-[#5A8033] shadow-sm placeholder-[#5A8033]/50 font-[Orbitron]"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-[#2F6B47] text-[#FFFAFA] px-4 py-2 rounded-full hover:bg-[#D4A017] transition-all shadow-md relative overflow-hidden group"
        >
          <Send size={20} className="relative z-10" />
          <span className="absolute inset-0 bg-[#D4A017] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
        </button>
      </div>

      {/* Inline CSS */}
      <style jsx="true">{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes gradientText {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientShift {
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
        }
        .animate-gradientText {
          background-size: 200% 200%;
          animation: gradientText 6s ease infinite;
        }
      `}</style>
    </motion.div>
  );
};

export default ChatWindow;