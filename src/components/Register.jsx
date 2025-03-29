import React, { useState } from "react";
import { motion } from "framer-motion";

const Register = ({ showNotification, onRegister }) => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleRegister = async () => {
    if (!validateEmail(email)) {
      showNotification("Please enter a valid email address.", "error");
      return;
    }
    if (password !== confirmPassword) {
      showNotification("Passwords do not match!", "error");
      return;
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, phone, password }),
      });
      const data = await response.json();
      if (response.ok) {
        showNotification("OTP sent to your email!", "success");
        setStep(2);
      } else {
        showNotification(data.message, "error");
      }
    } catch (error) {
      console.error("Register Error:", error);
      showNotification("Error registering!", "error");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
      const data = await response.json();
      if (response.ok) {
        onRegister(email, data.token);
        showNotification("Registration successful!", "success");
      } else {
        showNotification(data.message, "error");
      }
    } catch (error) {
      console.error("OTP Verification Error:", error);
      showNotification("Error verifying OTP!", "error");
    }
  };

  return (
    <motion.div
      className="p-4 bg-[#FFFAFA] rounded-xl shadow-lg border border-[#2F6B47]/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {step === 1 ? (
        <>
          <h2 className="text-2xl font-bold text-center mb-4 text-[#2F6B47] font-[Orbitron]">
            Register
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-3 rounded-full border border-[#2F6B47]/30 focus:ring-2 focus:ring-[#D4A017] text-[#5A8033] bg-white shadow-sm placeholder-[#5A8033]/50 font-[Orbitron]"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-3 rounded-full border border-[#2F6B47]/30 focus:ring-2 focus:ring-[#D4A017] text-[#5A8033] bg-white shadow-sm placeholder-[#5A8033]/50 font-[Orbitron]"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-full border border-[#2F6B47]/30 focus:ring-2 focus:ring-[#D4A017] text-[#5A8033] bg-white shadow-sm placeholder-[#5A8033]/50 font-[Orbitron]"
            />
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 rounded-full border border-[#2F6B47]/30 focus:ring-2 focus:ring-[#D4A017] text-[#5A8033] bg-white shadow-sm placeholder-[#5A8033]/50 font-[Orbitron]"
            />
            <button
              onClick={handleRegister}
              className="w-full bg-[#2F6B47] text-[#FFFAFA] py-3 rounded-full hover:bg-[#D4A017] transition-all font-[Orbitron] font-medium shadow-md"
            >
              Register
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-center mb-4 text-[#2F6B47] font-[Orbitron]">
            Verify OTP
          </h2>
          <p className="text-[#5A8033] text-center mb-4 font-[Orbitron]">
            OTP sent to {email}
          </p>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full p-3 rounded-full border border-[#2F6B47]/30 focus:ring-2 focus:ring-[#D4A017] text-[#5A8033] bg-white shadow-sm text-center font-[Orbitron]"
          />
          <button
            onClick={handleVerifyOtp}
            className="w-full bg-[#2F6B47] text-[#FFFAFA] py-3 rounded-full hover:bg-[#D4A017] transition-all font-[Orbitron] font-medium shadow-md mt-4"
          >
            Verify OTP
          </button>
        </>
      )}
    </motion.div>
  );
};

export default Register;
