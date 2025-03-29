import React, { useState } from "react";
import { Send } from "lucide-react";
import axios from "axios";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  const maxWords = 100;

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);
  const getWordCount = (message) => message.trim().split(/\s+/).length;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email address" }));
      return;
    }
    if (!validatePhone(formData.phone)) {
      setErrors((prev) => ({ ...prev, phone: "Phone number must be 10 digits" }));
      return;
    }
    if (getWordCount(formData.message) > maxWords) {
      setErrors((prev) => ({
        ...prev,
        message: `Max ${maxWords} words allowed`,
      }));
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/contact`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send message.");
    }
  };

  const wordCount = getWordCount(formData.message);
  const wordCountClass = wordCount > maxWords ? "text-red-500" : "text-[#5A8033]";
  const isFormValid = wordCount <= maxWords;

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-[#FFFAFA] relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#2F6B47] opacity-10 rounded-full transform -translate-x-16 -translate-y-16 animate-pulseSlow"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#D4A017] opacity-10 rounded-full transform translate-x-24 translate-y-24 animate-pulseSlow"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold text-center text-[#2F6B47] mb-6 font-[Orbitron]"
        >
          <span className="bg-gradient-to-r from-green-600 via-yellow-500 to-orange-400 bg-clip-text text-transparent animate-gradientText">
            Connect With Us
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-center text-[#5A8033] mb-12 max-w-2xl mx-auto"
        >
          Ready to supercharge your business with AI? Let’s collaborate to craft a digital strategy that shines.
        </motion.p>

        <div className="max-w-2xl mx-auto bg-[#FFFAFA] rounded-2xl shadow-xl p-8 border border-[#2F6B47]/20">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div>
              <label
                className="block text-[#2F6B47] text-lg mb-2 font-[Orbitron]"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-5 py-3 rounded-full border border-[#2F6B47]/30 focus:ring-2 focus:ring-[#D4A017] focus:border-transparent transition-all duration-300 text-[#5A8033] bg-white shadow-sm placeholder-[#5A8033]/50"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                className="block text-[#2F6B47] text-lg mb-2 font-[Orbitron]"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-5 py-3 rounded-full border border-[#2F6B47]/30 focus:ring-2 focus:ring-[#D4A017] focus:border-transparent transition-all duration-300 text-[#5A8033] bg-white shadow-sm placeholder-[#5A8033]/50"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <p className="text-red-500 mt-2 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Phone Number Input */}
            <div>
              <label
                className="block text-[#2F6B47] text-lg mb-2 font-[Orbitron]"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-5 py-3 rounded-full border border-[#2F6B47]/30 focus:ring-2 focus:ring-[#D4A017] focus:border-transparent transition-all duration-300 text-[#5A8033] bg-white shadow-sm placeholder-[#5A8033]/50"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && (
                <p className="text-red-500 mt-2 text-sm">{errors.phone}</p>
              )}
            </div>

            {/* Message Input */}
            <div className="relative">
              <label
                className="block text-[#2F6B47] text-lg mb-2 font-[Orbitron]"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-5 py-3 rounded-xl border border-[#2F6B47]/30 focus:ring-2 focus:ring-[#D4A017] focus:border-transparent transition-all duration-300 text-[#5A8033] bg-white shadow-sm placeholder-[#5A8033]/50"
                placeholder="Tell us about your vision"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <div
                className={`absolute bottom-2 right-3 text-sm ${wordCountClass}`}
              >
                {wordCount}/{maxWords} words
              </div>
              {errors.message && (
                <p className="text-red-500 mt-2 text-sm">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-3 rounded-full flex items-center justify-center space-x-2 font-medium font-[Orbitron] shadow-md transition-all duration-300 relative overflow-hidden group ${
                !isFormValid
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-[#2F6B47] text-[#FFFAFA] hover:shadow-lg transform hover:-translate-y-1"
              }`}
              disabled={!isFormValid}
            >
              <span className="relative z-10">Send Message</span>
              <Send className="w-5 h-5 relative z-10" />
              <span
                className={`absolute inset-0 bg-[#D4A017] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full ${
                  !isFormValid ? "hidden" : ""
                }`}
              ></span>
            </button>

            {status && (
              <p
                className={`text-center mt-4 text-sm ${
                  status.includes("successfully") ? "text-[#5A8033]" : "text-red-500"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Inline CSS for animations */}
      <style jsx="true">{`
        @keyframes pulseSlow {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        @keyframes gradientText {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientText {
          background-size: 200% 200%;
          animation: gradientText 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
