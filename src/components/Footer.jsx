import React from "react";
import {
  FaMailBulk,
  FaPhone,
  FaMapPin,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

// Note: Add this to your app's <head> for Orbitron font:
// <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">

const Footer = ({ scrollToSection }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFFAFA] text-[#5A8033] pt-20 pb-10 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#2F6B47] opacity-10 rounded-full transform -translate-x-20 -translate-y-20 animate-pulseSlow"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#D4A017] opacity-10 rounded-full transform translate-x-28 translate-y-28 animate-pulseSlow"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="animate-fadeInUp">
            <h3 className="text-3xl font-extrabold text-[#2F6B47] mb-4 font-[Orbitron] animate-gradientText bg-gradient-to-r from-green-600 via-yellow-500 to-orange-400 bg-clip-text text-transparent">
              MarketingBirbal
              <span className="block w-16 h-1 bg-[#D4A017] rounded-full mt-2 animate-expandLine"></span>
            </h3>
            <p className="text-[#5A8033] text-lg mb-4 animate-fadeInUp delay-200">
              Your trusted partner for comprehensive marketing solutions, web design, and development.
            </p>
            <p className="text-[#5A8033] text-sm animate-fadeInUp delay-300">
              Ready to start your digital transformation? Let’s collaborate and take your business to the next level.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp delay-400">
            <h4 className="text-lg font-semibold text-[#2F6B47] mb-4 relative">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-12 h-1 bg-[#D4A017] rounded-full animate-expandLine"></span>
            </h4>
            <ul className="space-y-2">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About Us" },
                { id: "services", label: "Services" },
                { id: "blogs", label: "Blog" },
                { id: "contact", label: "Contact" },
              ].map((link, index) => (
                <li key={link.id} className="animate-fadeInUp" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-[#5A8033] hover:text-[#D4A017] transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="animate-fadeInUp" style={{ animationDelay: "1s" }}>
                <a
                  href="/terms-and-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5A8033] hover:text-[#D4A017] transition-colors duration-300"
                >
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fadeInUp delay-600">
            <h4 className="text-lg font-semibold text-[#2F6B47] mb-4 relative">
              Contact
              <span className="absolute -bottom-1 left-0 w-12 h-1 bg-[#D4A017] rounded-full animate-expandLine"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center animate-fadeInUp delay-700">
                <FaMailBulk size={20} className="mr-3 text-[#2F6B47]" />
                <a
                  href="mailto:connectmarketingbirbal@gmail.com"
                  className="text-[#5A8033] hover:text-[#D4A017] transition-colors duration-300"
                >
                  connectmarketingbirbal@gmail.com
                </a>
              </li>
              <li className="flex items-center animate-fadeInUp delay-800">
                <FaPhone size={20} className="mr-3 text-[#2F6B47]" />
                <a
                  href="tel:+917691863302"
                  className="text-[#5A8033] hover:text-[#D4A017] transition-colors duration-300"
                >
                  +91-7691863302
                </a>
              </li>
              <li className="flex items-center animate-fadeInUp delay-900">
                <FaMapPin size={20} className="mr-3 text-[#2F6B47]" />
                <span>Gurugram, Haryana, India</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="animate-fadeInUp delay-1000">
            <h4 className="text-lg font-semibold text-[#2F6B47] mb-4 relative">
              Follow Us
              <span className="absolute -bottom-1 left-0 w-12 h-1 bg-[#D4A017] rounded-full animate-expandLine"></span>
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/marketingbirbal2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2F6B47] p-3 rounded-full hover:bg-[#D4A017] transition-all duration-300 transform hover:scale-105 group"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} className="text-white group-hover:text-[#FFFAFA] transition-colors duration-300" />
              </a>
              <a
                href="https://www.facebook.com/share/1FUWsbfKfR/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2F6B47] p-3 rounded-full hover:bg-[#D4A017] transition-all duration-300 transform hover:scale-105 group"
                aria-label="Facebook"
              >
                <FaFacebook size={22} className="text-white group-hover:text-[#FFFAFA] transition-colors duration-300" />
              </a>
              <a
                href="https://www.instagram.com/marketingbirbal/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2F6B47] p-3 rounded-full hover:bg-[#D4A017] transition-all duration-300 transform hover:scale-105 group"
                aria-label="Instagram"
              >
                <FaInstagram size={22} className="text-white group-hover:text-[#FFFAFA] transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#2F6B47] pt-8 text-center text-[#5A8033] animate-fadeInUp delay-1200">
          <a
            href="/terms-and-conditions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-[#D4A017] transition-colors duration-300"
          >
            © {currentYear} MarketingBirbal. All rights reserved.
          </a>
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
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
        .delay-800 {
          animation-delay: 0.8s;
        }
        .delay-900 {
          animation-delay: 0.9s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-1200 {
          animation-delay: 1.2s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
