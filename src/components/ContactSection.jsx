import React, { useState } from "react";
import { Send } from "lucide-react";
import axios from "axios";

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

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone); 
  const getWordCount = (message) =>
    message.trim().split(/\s+/).length;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Invalid email address",
      }));
      return;
    }
    if (!validatePhone(formData.phone)) {
      setErrors((prev) => ({
        ...prev,
        email: "Phone number must be 10 digits",
      }));
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
        {
          headers: { "Content-Type": "application/json" },
        }
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
  const wordCountClass =
    wordCount > maxWords ? "text-red-500" : "text-green-700";
  const isFormValid = wordCount <= maxWords;

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-r from-yellow-50 via-green-50 to-lime-50"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-green-800 mb-10">
          Start Your Marketing Journey with Us
        </h2>
        <p className="text-lg text-center text-gray-700 mb-12">
          Have an idea? Let’s bring it to life! Reach out to our team, and we’ll
          help you create a digital experience that resonates.
        </p>

        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div>
              <label
                className="block text-gray-800 text-lg mb-2"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white shadow-sm"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                className="block text-gray-800 text-lg mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white shadow-sm"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <p className="text-red-500 mt-2">{errors.email}</p>
              )}
            </div>

            {/* Phone Number Input */}
            <div>
              <label
                className="block text-gray-800 text-lg mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white shadow-sm"
                placeholder="Enter your contact number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Message Input */}
            <div className="relative">
              <label
                className="block text-gray-800 text-lg mb-2"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white shadow-sm"
                placeholder="Tell us about your project"
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
                <p className="text-red-500 mt-2">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-3 rounded-xl flex items-center justify-center space-x-2 font-semibold tracking-wide shadow-md transition-all duration-300 ${
                !isFormValid
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-yellow-500 to-green-600 text-white hover:shadow-lg transform hover:-translate-y-1"
              }`}
              disabled={!isFormValid}
            >
              <span>Send Message</span>
              <Send className="w-5 h-5" />
            </button>

            {status && (
              <p
                className={`text-center mt-4 text-sm ${
                  status.includes("🎉") ? "text-green-600" : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
