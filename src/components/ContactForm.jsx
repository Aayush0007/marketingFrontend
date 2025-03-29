import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Send } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  const maxWords = 100;
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const getWordCount = (message) => message.trim().split(/\s+/).length;
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!validateEmail(formData.email)) newErrors.email = "Invalid email address";
    if (!validatePhone(formData.phone)) newErrors.phone = "Phone number must be 10 digits";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (getWordCount(formData.message) > maxWords) newErrors.message = `Max ${maxWords} words allowed`;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/service-contact`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.data.success) {
        setStatus("Message sent successfully! 🎉");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => setStatus(""), 3000);
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Failed to send message. Please try again.";
      setStatus(`Error: ${errorMessage}`);
      console.error("Submission error:", err);
    }
  };

  const wordCount = getWordCount(formData.message);
  const isFormValid = wordCount <= maxWords;

  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <motion.section
        className="max-w-7xl mx-auto p-10 bg-[#FFFAFA] rounded-lg mt-24 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#2F6B47] opacity-10 rounded-full transform -translate-x-20 -translate-y-20 animate-pulseSlow"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#D4A017] opacity-10 rounded-full transform translate-x-28 translate-y-28 animate-pulseSlow"></div>

        <div className="relative z-10">
          <motion.h2
            className="text-4xl font-extrabold mb-10 text-center text-[#2F6B47] font-[Orbitron] animate-gradientText bg-gradient-to-r from-green-600 via-yellow-500 to-orange-400 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in Touch
            <span className="block w-16 h-1 bg-[#D4A017] rounded-full mx-auto mt-2 animate-expandLine"></span>
          </motion.h2>
          <p className="text-[#5A8033] text-lg text-center mb-12 animate-fadeInUp">
            Have questions or want to work with us? Fill out the form below, and our team will get back to you promptly.
          </p>

          <motion.form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[#2F6B47] text-sm font-bold mb-2">Your Name</label>
              <motion.input
                className={`w-full p-4 border border-[#2F6B47] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017] ${errors.name ? "border-[#D4A017]" : ""}`}
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-[#D4A017] mt-2">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-[#2F6B47] text-sm font-bold mb-2">Your Email</label>
              <motion.input
                className={`w-full p-4 border border-[#2F6B47] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017] ${errors.email ? "border-[#D4A017]" : ""}`}
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-[#D4A017] mt-2">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-[#2F6B47] text-sm font-bold mb-2">Phone Number</label>
              <motion.input
                className={`w-full p-4 border border-[#2F6B47] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017] ${errors.phone ? "border-[#D4A017]" : ""}`}
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                placeholder="Enter your contact number"
                required
              />
              {errors.phone && <p className="text-[#D4A017] mt-2">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-[#2F6B47] text-sm font-bold mb-2">Subject</label>
              <motion.input
                className={`w-full p-4 border border-[#2F6B47] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017] ${errors.subject ? "border-[#D4A017]" : ""}`}
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                placeholder="Regarding Marketing Services"
              />
              {errors.subject && <p className="text-[#D4A017] mt-2">{errors.subject}</p>}
            </div>

            <div className="relative">
              <label className="block text-[#2F6B47] text-sm font-bold mb-2">Message</label>
              <motion.textarea
                className={`w-full p-4 border border-[#2F6B47] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017] ${errors.message ? "border-[#D4A017]" : ""}`}
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                placeholder="Tell us about your project..."
                required
              />
              <div className={`absolute bottom-2 right-2 text-sm ${wordCount > maxWords ? "text-[#D4A017]" : "text-[#5A8033]"}`}>
                {wordCount}/{maxWords} words
              </div>
              {errors.message && <p className="text-[#D4A017] mt-2">{errors.message}</p>}
            </div>

            <motion.button
              className={`w-full py-3 rounded-lg font-medium relative overflow-hidden transition-all duration-300 ${isFormValid ? "bg-[#2F6B47] text-white group" : "bg-[#F0EFE7] cursor-not-allowed text-[#5A8033]"}`}
              type="submit"
              whileTap={{ scale: isFormValid ? 0.95 : 1 }}
              disabled={!isFormValid}
            >
              <div className="flex items-center justify-center gap-2 relative z-10">
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </div>
              {isFormValid && <span className="absolute inset-0 bg-[#D4A017] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-lg"></span>}
            </motion.button>

            {status && (
              <p className={`text-center mt-4 text-sm animate-fadeInUp ${status.includes("🎉") ? "text-[#5A8033]" : "text-[#D4A017]"}`}>
                {status}
              </p>
            )}
          </motion.form>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-[#2F6B47] relative">
              Other Ways to Reach Us
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#D4A017] rounded-full animate-expandLine"></span>
            </h3>
            <p className="text-[#5A8033] mt-4">
              Email: <a href="mailto:connectmarketingbirbal@gmail.com" className="text-[#D4A017] hover:underline">connectmarketingbirbal@gmail.com</a>
            </p>
            <p className="text-[#5A8033] mt-2">
              Phone: <a href="tel:+917691863302" className="text-[#D4A017] hover:underline">+91-7691863302</a>
            </p>
          </motion.div>
        </div>
      </motion.section>
      <Footer scrollToSection={scrollToSection} />
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
        @keyframes expandLine {
          0% { width: 0; }
          100% { width: 3rem; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-gradientText {
          background-size: 200% 200%;
          animation: gradientText 6s ease infinite;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default ContactForm;