import React, { useState } from "react";
import { motion } from "framer-motion";

const LoginModal = ({ isVisible, onClose, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        onLogin(email, data.token);
        onClose();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        onLogin(email, data.token);
        onClose();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Register Error:", error);
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-[#FFFAFA] rounded-2xl shadow-xl p-6 w-full max-w-md border border-[#2F6B47]/20 relative overflow-hidden"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#2F6B47]/10 to-[#D4A017]/10 opacity-50 animate-gradientShift"></div>
        <div className="relative z-10">
          <div className="flex justify-center mb-4">
            <button
              onClick={() => setIsLogin(true)}
              className={`px-4 py-2 font-[Orbitron] ${
                isLogin ? "bg-[#2F6B47] text-[#FFFAFA]" : "bg-white text-[#2F6B47]"
              } rounded-full`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`px-4 py-2 font-[Orbitron] ${
                !isLogin ? "bg-[#2F6B47] text-[#FFFAFA]" : "bg-white text-[#2F6B47]"
              } rounded-full`}
            >
              Register
            </button>
          </div>
          <p className="text-center mb-4 text-[#5A8033] font-[Orbitron]">
            {isLogin ? "Access your account" : "Create a new account"}
          </p>
          {isLogin ? (
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-full border border-[#2F6B47]/30 focus:ring-2 focus:ring-[#D4A017] text-[#5A8033] bg-white"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-full border border-[#2F6B47]/30 focus:ring-2 focus:ring-[#D4A017] text-[#5A8033] bg-white"
              />
              <button
                onClick={handleLogin}
                className="w-full bg-[#2F6B47] text-[#FFFAFA] p-3 rounded-full hover:bg-[#D4A017] transition-all"
              >
                Login
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-full border border-[#2F6B47]/30 focus:ring-2 focus:ring-[#D4A017] text-[#5A8033] bg-white"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-full border border-[#2F6B47]/30 focus:ring-2 focus:ring-[#D4A017] text-[#5A8033] bg-white"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-full border border-[#2F6B47]/30 focus:ring-2 focus:ring-[#D4A017] text-[#5A8033] bg-white"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 rounded-full border border-[#2F6B47]/30 focus:ring-2 focus:ring-[#D4A017] text-[#5A8033] bg-white"
              />
              <button
                onClick={handleRegister}
                className="w-full bg-[#2F6B47] text-[#FFFAFA] p-3 rounded-full hover:bg-[#D4A017] transition-all"
              >
                Register
              </button>
            </div>
          )}
          <button
            onClick={onClose}
            className="w-full bg-[#D4A017] text-[#FFFAFA] p-3 rounded-full mt-4 hover:bg-[#2F6B47] transition-all"
          >
            Cancel
          </button>
        </div>
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

export default LoginModal;