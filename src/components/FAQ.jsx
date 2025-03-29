import React, { useState } from "react";
import { motion } from "framer-motion";

// Note: Add this to your app's <head> for Orbitron font:
// <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">

const faqData = [
  {
    question: "What services do you offer?",
    answer: "We offer a range of services including Web Design, Frontend Development, Backend Development, Graphic Design, Digital Marketing, Content Writing, SEO Services, E-commerce Solutions, App Development, and IT Support and Maintenance.",
  },
  {
    question: "How can I contact you for a project?",
    answer: "You can contact us through the Contact Us page on our website. Fill out the inquiry form with your details and project requirements, and we'll get back to you as soon as possible.",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer: "Yes, we offer ongoing IT support and maintenance services to ensure your website or application remains up-to-date, secure, and performs optimally.",
  },
  {
    question: "What technologies do you use for development?",
    answer: "We use a variety of modern technologies including React.js, Node.js, Express, PostgreSQL, Docker, and various CSS frameworks like Tailwind CSS and Bootstrap.",
  },
  {
    question: "Can you help with digital marketing?",
    answer: "Absolutely! Our digital marketing services include SEO, social media management, content marketing, and more to help you grow your online presence and reach your target audience.",
  },
  {
    question: "What is your process for starting a new project?",
    answer: "Our process begins with a discovery and planning phase, where we gather requirements, create wireframes, and design the database schema. This is followed by backend and frontend development, content integration, testing, and finally deployment and maintenance.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-[#FFFAFA] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#2F6B47] opacity-10 rounded-full transform -translate-x-20 -translate-y-20 animate-pulseSlow"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#D4A017] opacity-10 rounded-full transform translate-x-28 translate-y-28 animate-pulseSlow"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2
          className="text-4xl md:text-5xl text-center font-extrabold text-[#2F6B47] mb-10 font-[Orbitron] animate-gradientText bg-gradient-to-r from-green-600 via-yellow-500 to-orange-400 bg-clip-text text-transparent"
        >
          FAQ
          <span className="block w-16 h-1 bg-[#D4A017] rounded-full mx-auto mt-2 animate-expandLine"></span>
        </h2>
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className="faq-item bg-white p-6 rounded-xl cursor-pointer border border-[#2F6B47] hover:bg-[#F0EFE7] transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question flex justify-between items-center text-lg font-semibold text-[#2F6B47] group-hover:text-[#D4A017] transition-colors duration-300">
                <span>{item.question}</span>
                <span className="text-[#D4A017] text-2xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <motion.div
                  className="faq-answer mt-4 text-[#5A8033]"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
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
        @keyframes expandLine {
          0% { width: 0; }
          100% { width: 4rem; }
        }
        .animate-gradientText {
          background-size: 200% 200%;
          animation: gradientText 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default FAQ;
