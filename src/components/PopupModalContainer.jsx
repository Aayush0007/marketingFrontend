  import React, { useState, useEffect } from "react";
  import { motion } from "framer-motion";
  import { X } from "lucide-react"; // Importing an icon for the close button

  const EnhancedPopupModal = ({ onClose }) => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      contact: "",
      promotionalConsent: false,
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form submitted:", formData);
      setSubmitted(true);
    };

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
        <motion.div
          className="bg-white p-10 rounded-2xl shadow-2xl max-w-lg mx-auto relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition"
          >
            <X size={24} />
          </button>

          {submitted ? (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-green-700 mb-4">
                Thank You!
              </h2>
              <p className="text-gray-700 mb-6">
                We've received your details and will call you back soon.
              </p>
              <button
                onClick={onClose}
                className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-3xl font-bold text-green-700 text-center">
                Request a Callback
              </h2>

              <p className="text-gray-600 text-center">
                We'll call you back to tell you about the benefits and answer your
                questions.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-800 font-semibold mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-800 font-semibold mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-800 font-semibold mb-1">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Enter your contact number"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="promotionalConsent"
                    checked={formData.promotionalConsent}
                    onChange={handleChange}
                    className="h-5 w-5 text-green-600"
                  />
                  <label className="text-gray-700">
                    I agree to receive promotional emails
                  </label>
                </div>
                <p className="text-xs text-gray-500">
                  I hereby give my consent to processing of my personal data for
                  the purpose of receiving information.
                </p>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-all duration-300"
                >
                  Request a Call
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    );
  };

  const EnhancedPopupModalContainer = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowModal(true);
      }); 
      return () => clearTimeout(timer);
    }, []);

    return (
      <>
        {showModal && <EnhancedPopupModal onClose={() => setShowModal(false)} />}
      </>
    );
  };

  export default EnhancedPopupModalContainer;
