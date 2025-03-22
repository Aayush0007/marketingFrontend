import React, { useState } from "react";

const Register = ({ showNotification, onRegister }) => {
  const [step, setStep] = useState(1); // 1: Registration, 2: OTP Verification
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Step 1: Register and send OTP
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
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, phone, password })
      });

      const data = await response.json();
      if (response.ok) {
        showNotification("OTP sent to your email!", "success");
        setStep(2); // Move to OTP verification step
      } else {
        showNotification(data.message, "error");
      }
    } catch (error) {
      console.error("Register Error:", error);
      showNotification("Error registering!", "error");
    }
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp })
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
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      {step === 1 ? (
        <>
          <h2 className="text-3xl font-bold text-center mb-6 text-green-600">Register</h2>
          <div className="space-y-4">
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500" />
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500" />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500" />
            <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500" />
            <div className="relative">
              <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} 
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500" />
              <button type="button" className="absolute right-3 top-3 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <input type="password" placeholder="Confirm Password" value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500" />
            <button onClick={handleRegister}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-500">
              Register
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-center mb-6 text-green-600">Verify OTP</h2>
          <p className="text-gray-600 text-center mb-4">An OTP has been sent to {email}</p>
          <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 text-center text-lg" />
          <button onClick={handleVerifyOtp}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-500">
            Verify OTP
          </button>
        </>
      )}
    </div>
  );
};

export default Register;
