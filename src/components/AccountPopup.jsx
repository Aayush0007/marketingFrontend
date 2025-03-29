import React, { useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import Login from "./Login";
import Register from "./Register";

const AccountPopup = ({ isVisible, onClose, onLogin, onRegister, showNotification }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-[#FFFAFA] p-8 rounded-2xl shadow-2xl relative max-w-md w-full border border-[#2F6B47]/20 overflow-hidden"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Holographic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2F6B47]/10 to-[#D4A017]/10 opacity-50 animate-gradientShift"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[#5A8033] hover:text-[#D4A017] transition-colors z-10"
        >
          <X size={28} />
        </button>

        {/* Toggle Buttons */}
        <div className="relative z-10 text-center mb-6">
          <div className="flex justify-center space-x-4 mb-4">
            <button
              onClick={() => setIsLogin(true)}
              className={`px-6 py-2 rounded-full font-[Orbitron] text-lg font-medium transition-all duration-300 relative overflow-hidden group ${
                isLogin
                  ? "bg-[#2F6B47] text-[#FFFAFA] shadow-md"
                  : "bg-[#FFFAFA] text-[#2F6B47] border border-[#2F6B47]/30"
              }`}
            >
              <span className="relative z-10">Login</span>
              {isLogin && (
                <span className="absolute inset-0 bg-[#D4A017] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
              )}
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`px-6 py-2 rounded-full font-[Orbitron] text-lg font-medium transition-all duration-300 relative overflow-hidden group ${
                !isLogin
                  ? "bg-[#2F6B47] text-[#FFFAFA] shadow-md"
                  : "bg-[#FFFAFA] text-[#2F6B47] border border-[#2F6B47]/30"
              }`}
            >
              <span className="relative z-10">Register</span>
              {!isLogin && (
                <span className="absolute inset-0 bg-[#D4A017] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
              )}
            </button>
          </div>
          <p className="text-[#5A8033] text-sm font-[Orbitron]">
            {isLogin ? "Access your AI-powered dashboard" : "Join the future of marketing"}
          </p>
        </div>

        {/* Content */}
        <div className="relative z-10 overflow-y-auto max-h-[70vh] px-2">
          {isLogin ? (
            <Login onLogin={onLogin} showNotification={showNotification} />
          ) : (
            <Register onRegister={onRegister} showNotification={showNotification} />
          )}
        </div>

        {/* Inline CSS */}
        <style jsx="true">{`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradientShift {
            background-size: 200% 200%;
            animation: gradientShift 8s ease infinite;
          }
        `}</style>
      </motion.div>
    </motion.div>
  );
};

export default AccountPopup;