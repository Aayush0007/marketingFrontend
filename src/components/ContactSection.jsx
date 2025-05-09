import React, { useState } from "react";
import { Send } from "lucide-react";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const maxWords = 100;

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^\+?\d{10,15}$/.test(phone);
  const getWordCount = (message) => message.trim().split(/\s+/).filter(word => word.length > 0).length;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email (e.g., user@example.com).";
    }
    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (10-15 digits, e.g., 9351044351 or +919351044351).";
    }
    if (getWordCount(formData.message) > maxWords) {
      newErrors.message = `Max ${maxWords} words allowed`;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    // Convert timestamp to IST (Asia/Kolkata)
    const now = new Date();
    const istTimestamp = now
      .toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
      .replace(
        /(\d{2})\/(\d{2})\/(\d{4}), (\d{2}):(\d{2}):(\d{2})/,
        "$3-$2-$1 $4:$5:$6"
      );

    const payload = {
      ...formData,
      timestamp: istTimestamp,
      formType: "contactUs",
    };
    console.log("Sending payload from Contact Us:", payload); // Add this log

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzdHawYeh6G28PCD0hPXdiRSJYcTeZRLZ2OLadY6UIBWpxLeFaQwDG8uNO2ATceRJiv/exec", // Replace with the new Web app URL
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          mode: "no-cors",
        }
      );

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const wordCount = getWordCount(formData.message);
  const wordCountClass = wordCount > maxWords ? "text-red-500" : "text-[#5A8033]";
  const isFormValid = wordCount <= maxWords && formData.name.trim() && validateEmail(formData.email) && validatePhone(formData.phone) && formData.message.trim();

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-[#FFFAFA] relative overflow-hidden"
    >
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
                className={`w-full px-5 py-3 rounded-full border transition-all duration-300 text-[#5A8033] bg-white shadow-sm placeholder-[#5A8033]/50 ${
                  errors.name ? "border-red-500" : "border-[#2F6B47]/30 focus:ring-2 focus:ring-[#D4A017] focus:border-transparent"
                }`}
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && (
                <p className="text-red-500 mt-2 text-sm">{errors.name}</p>
              )}
            </div>

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
                className={`w-full px-5 py-3 rounded-full border transition-all duration-300 text-[#5A8033] bg-white shadow-sm placeholder-[#5A8033]/50 ${
                  errors.email ? "border-red-500" : "border-[#2F6B47]/30 focus:ring-2 focus:ring-[#D4A017] focus:border-transparent"
                }`}
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <p className="text-red-500 mt-2 text-sm">{errors.email}</p>
              )}
            </div>

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
                className={`w-full px-5 py-3 rounded-full border transition-all duration-300 text-[#5A8033] bg-white shadow-sm placeholder-[#5A8033]/50 ${
                  errors.phone ? "border-red-500" : "border-[#2F6B47]/30 focus:ring-2 focus:ring-[#D4A017] focus:border-transparent"
                }`}
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && (
                <p className="text-red-500 mt-2 text-sm">{errors.phone}</p>
              )}
            </div>

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
                className={`w-full px-5 py-3 rounded-xl border transition-all duration-300 text-[#5A8033] bg-white shadow-sm placeholder-[#5A8033]/50 ${
                  errors.message ? "border-red-500" : "border-[#2F6B47]/30 focus:ring-2 focus:ring-[#D4A017] focus:border-transparent"
                }`}
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

            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={`w-full py-3 rounded-full flex items-center justify-center space-x-2 font-medium font-[Orbitron] shadow-md transition-all duration-300 relative overflow-hidden group ${
                !isFormValid || isSubmitting
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-[#2F6B47] text-[#FFFAFA] hover:shadow-lg transform hover:-translate-y-1"
              }`}
            >
              <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
              <Send className="w-5 h-5 relative z-10" />
              <span
                className={`absolute inset-0 bg-[#D4A017] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full ${
                  !isFormValid || isSubmitting ? "hidden" : ""
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

      <style>
        {`
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
        `}
      </style>
    </section>
  );
};

export default ContactSection;
