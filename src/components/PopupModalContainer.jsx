import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const EnhancedPopupModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    promotionalConsent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{10,15}$/;

    if (!formData.name.trim()) {
      setStatus("Please enter your name.");
      return false;
    }

    if (!emailRegex.test(formData.email)) {
      setStatus("Please enter a valid email (e.g., user@example.com).");
      return false;
    }

    if (!phoneRegex.test(formData.contact)) {
      setStatus("Please enter a valid phone number (10-15 digits, e.g., 9876543210 or +919876543210).");
      return false;
    }

    return true;
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
        formType: "popup", // Add formType to the payload
      };
      console.log("Sending payload from Popup Leads:", payload); // Add this log for debugging
  
      try {
         await fetch(
          "https://script.google.com/macros/s/AKfycbzdHawYeh6G28PCD0hPXdiRSJYcTeZRLZ2OLadY6UIBWpxLeFaQwDG8uNO2ATceRJiv/exec",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
            mode: "no-cors",
          }
        );
  
        setSubmitted(true);
        setStatus("Form submitted successfully!");
      } catch (error) {
        setStatus("Error submitting form. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <motion.div
        className="bg-[#FFFAFA] p-10 rounded-2xl shadow-2xl max-w-lg mx-auto relative overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-[#2F6B47] opacity-10 rounded-full transform -translate-x-12 -translate-y-12 animate-pulseSlow"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#D4A017] opacity-10 rounded-full transform translate-x-16 translate-y-16 animate-pulseSlow"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#2F6B47] hover:text-[#D4A017] transition-all duration-300 z-10"
        >
          <X size={24} />
        </button>

        {submitted ? (
          <div className="text-center relative z-10">
            <h2 className="text-3xl font-extrabold text-[#2F6B47] mb-4 font-[Orbitron] animate-fadeInUp">
              Thank You!
            </h2>
            <p className="text-[#5A8033] mb-6 text-lg animate-fadeInUp delay-200">
              We've received your details and will call you back soon.
            </p>
            {status && (
              <p
                className={`text-sm mb-4 ${
                  status.includes("Error") ? "text-red-600" : "text-green-600"
                }`}
              >
                {status}
              </p>
            )}
            <button
              onClick={onClose}
              className="bg-[#2F6B47] text-white px-6 py-3 rounded-full text-lg font-medium relative overflow-hidden group animate-fadeInUp delay-300"
            >
              <span className="relative z-10">Close</span>
              <span className="absolute inset-0 bg-[#D4A017] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <h2 className="text-3xl font-extrabold text-[#2F6B47] text-center font-[Orbitron] animate-gradientText bg-gradient-to-r from-green-600 via-yellow-500 to-orange-400 bg-clip-text text-transparent">
              Request a Callback
            </h2>
            <p className="text-[#5A8033] text-center text-lg animate-fadeInUp delay-200">
              We'll call you back to discuss benefits and answer your questions.
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-[#2F6B47] font-semibold mb-1 animate-fadeInUp delay-300">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full p-3 border border-[#2F6B47] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017] bg-[#FFFAFA] animate-fadeInUp delay-400"
                  required
                />
              </div>
              <div>
                <label className="block text-[#2F6B47] font-semibold mb-1 animate-fadeInUp delay-300">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full p-3 border border-[#2F6B47] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017] bg-[#FFFAFA] animate-fadeInUp delay-400"
                  required
                />
              </div>
              <div>
                <label className="block text-[#2F6B47] font-semibold mb-1 animate-fadeInUp delay-300">
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Enter your contact number"
                  className="w-full p-3 border border-[#2F6B47] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017] bg-[#FFFAFA] animate-fadeInUp delay-400"
                  required
                />
              </div>
              <div className="flex items-center space-x-2 animate-fadeInUp delay-500">
                <input
                  type="checkbox"
                  name="promotionalConsent"
                  checked={formData.promotionalConsent}
                  onChange={handleChange}
                  className="h-5 w-5 text-[#2F6B47] accent-[#D4A017]"
                />
                <label className="text-[#5A8033]">
                  I agree to receive promotional emails
                </label>
              </div>
              <p className="text-xs text-[#5A8033] animate-fadeInUp delay-600">
                I consent to processing my personal data for information purposes.
              </p>
            </div>
            {status && (
              <p className="text-center text-sm text-red-600">{status}</p>
            )}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-[#2F6B47] text-white px-8 py-3 rounded-full text-lg font-medium relative overflow-hidden group animate-fadeInUp delay-700 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <span className="relative z-10">
                  {isSubmitting ? "Submitting..." : "Request a Call"}
                </span>
                <span className="absolute inset-0 bg-[#D4A017] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></span>
              </button>
            </div>
          </form>
        )}
      </motion.div>

      {/* Inline CSS for Animations */}
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
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-500 { animation-delay: 0.5s; }
          .delay-600 { animation-delay: 0.6s; }
          .delay-700 { animation-delay: 0.7s; }
        `}
      </style>
    </div>
  );
};

const EnhancedPopupModalContainer = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 3000); // 3-second delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showModal && <EnhancedPopupModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default EnhancedPopupModalContainer;
