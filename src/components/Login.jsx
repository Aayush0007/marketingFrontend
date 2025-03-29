import React, { useState } from "react";
import { motion } from "framer-motion";

const Login = ({ onLogin, showNotification }) => {
  const [email, setEmail] = useState("");
 
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        onLogin(data.user.first_name, data.token);
        showNotification("Login successful!", "success");
      } else {
        showNotification(data.message, "error");
      }
    } catch (error) {
      console.error("Login Error:", error);
      showNotification("Error logging in!", "error");
    }
  };

  return (
    <motion.div
      className="p-4 bg-[#FFFAFA] rounded-xl shadow-lg border border-[#2F6B47]/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-center mb-4 text-[#2F6B47] font-[Orbitron]">
        Login
      </h2>
      <div className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-full border border-[#2F6B47]/30 focus:ring-2 focus:ring-[#D4A017] text-[#5A8033] bg-white shadow-sm placeholder-[#5A8033]/50 font-[Orbitron]"
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-full border border-[#2F6B47]/30 focus:ring-2 focus:ring-[#D4A017] text-[#5A8033] bg-white shadow-sm placeholder-[#5A8033]/50 font-[Orbitron]"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5A8033] hover:text-[#D4A017]"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-[#2F6B47] text-[#FFFAFA] py-3 rounded-full hover:bg-[#D4A017] transition-all font-[Orbitron] font-medium shadow-md"
        >
          Login
        </button>
      </div>
    </motion.div>
  );
};

export default Login;