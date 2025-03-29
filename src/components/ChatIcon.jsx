import React from "react";
import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const ChatIcon = ({ onClick }) => (
  <motion.button
    onClick={onClick}
    className="fixed bottom-8 right-8 bg-[#2F6B47] text-[#FFFAFA] p-5 rounded-full shadow-xl z-50 relative overflow-hidden group"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {/* Icon */}
    <MessageSquare size={28} className="relative z-10" />
    {/* Orbiting Rings */}
    <span className="absolute inset-0 w-full h-full bg-[#D4A017] opacity-20 rounded-full animate-orbit scale-150"></span>
    <span className="absolute inset-0 w-full h-full bg-[#2F6B47] opacity-30 rounded-full animate-orbit reverse delay-200"></span>
    {/* Hover Glow */}
    <span className="absolute inset-0 bg-[#D4A017] transform scale-0 group-hover:scale-125 transition-transform duration-300 rounded-full"></span>

    {/* Inline CSS */}
    <style jsx="true">{`
      @keyframes orbit {
        0% { transform: scale(1) rotate(0deg); opacity: 0.3; }
        50% { transform: scale(1.5) rotate(180deg); opacity: 0.1; }
        100% { transform: scale(1) rotate(360deg); opacity: 0.3; }
      }
      .animate-orbit {
        animation: orbit 4s infinite linear;
      }
      .reverse {
        animation-direction: reverse;
      }
      .delay-200 {
        animation-delay: 0.2s;
      }
    `}</style>
  </motion.button>
);

export default ChatIcon;
