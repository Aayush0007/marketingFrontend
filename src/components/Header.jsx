import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../assets/Marketing-Birbal-Logo.png";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Header = ({ activeSection, scrollToSection, user, toggleAccountPopup, logout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 1024;
      setIsMobile(newIsMobile);
      if (!newIsMobile && isMenuOpen) setIsMenuOpen(false);
      setIsDropdownOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  useEffect(() => {
    if (location.pathname !== "/") return;
    const handleScroll = () => {
      const sections = ["home", "about", "services", "blog", "contact"];
      let currentSection = "home";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
            break;
          }
        }
      }
      if (activeSection !== currentSection) scrollToSection(currentSection, false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, scrollToSection, location.pathname]);

  const menuItems = ["home", "about", "services", "blog", "contact"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#FFFAFA] shadow-md transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-[#2F6B47] opacity-10 rounded-full transform -translate-x-10 -translate-y-10 animate-pulseSlow"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#D4A017] opacity-10 rounded-full transform translate-x-12 translate-y-12 animate-pulseSlow"></div>

        <Link
          to="/#home"
          onClick={() => scrollToSection("home")}
          className="flex items-center space-x-2 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#D4A017] rounded z-10"
          aria-label="Go to Home"
        >
          <img
            src={Logo}
            alt="MarketingBirbal Logo"
            className="h-10 w-10 rounded-full border-2 border-[#D4A017] shadow-sm transition-transform duration-300 hover:rotate-6"
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-[Orbitron] animate-gradientText bg-gradient-to-r from-green-600 via-yellow-500 to-orange-400 bg-clip-text text-transparent"
          >
            MarketingBirbal
          </motion.div>
        </Link>

        <div className="flex items-center z-10">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-[#2F6B47] hover:text-[#D4A017] hover:bg-[#FFFAFA] focus:outline-none focus:ring-2 focus:ring-[#D4A017] transition-all duration-200"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item}
                to={`/#${item}`}
                onClick={() => scrollToSection(item)}
                className={`capitalize text-lg font-medium px-4 py-2 rounded-full transition-all duration-300 font-[Orbitron] ${
                  activeSection === item
                    ? "text-[#2F6B47] bg-[#D4A017] bg-opacity-20"
                    : "text-[#5A8033] hover:text-[#2F6B47] hover:bg-[#D4A017] hover:bg-opacity-10"
                } animate-fadeInUp`}
              >
                {item}
              </Link>
            ))}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center text-lg font-medium text-[#2F6B47] hover:text-[#D4A017] hover:bg-[#D4A017] hover:bg-opacity-10 px-4 py-2 rounded-full transition-all duration-300 font-[Orbitron] animate-fadeInUp"
                >
                  <span className="truncate max-w-[120px]">{user.name}</span>
                  <ChevronDown size={20} className="ml-2" />
                </button>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-[#FFFAFA] shadow-xl rounded-lg border border-[#2F6B47] p-2"
                  >
                    <Link
                      to="/#profile"
                      onClick={() => {
                        scrollToSection("profile");
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-[#5A8033] hover:text-[#2F6B47] hover:bg-[#D4A017] hover:bg-opacity-10 rounded-md font-[Orbitron] animate-fadeInUp"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-[#5A8033] hover:text-[#D4A017] hover:bg-[#2F6B47] hover:bg-opacity-10 rounded-md font-[Orbitron] animate-fadeInUp"
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </div>
            ) : (
              <button
                onClick={toggleAccountPopup}
                className="capitalize text-lg font-medium text-[#5A8033] hover:text-[#2F6B47] hover:bg-[#D4A017] hover:bg-opacity-10 px-4 py-2 rounded-full transition-all duration-300 font-[Orbitron] animate-fadeInUp"
              >
                Account
              </button>
            )}
          </div>
        </div>
      </nav>

      {isMobile && isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden absolute top-16 left-0 w-full bg-[#FFFAFA] shadow-lg border-t border-[#2F6B47] py-4 px-6 space-y-3 text-center"
        >
          {menuItems.map((item) => (
            <Link
              key={item}
              to={`/#${item}`}
              onClick={() => {
                scrollToSection(item);
                setIsMenuOpen(false);
              }}
              className={`block w-full text-base font-medium capitalize py-3 rounded-md transition-all duration-300 font-[Orbitron] ${
                activeSection === item
                  ? "text-[#2F6B47] bg-[#D4A017] bg-opacity-20"
                  : "text-[#5A8033] hover:text-[#2F6B47] hover:bg-[#D4A017] hover:bg-opacity-10"
              } animate-fadeInUp`}
            >
              {item}
            </Link>
          ))}
          {user ? (
            <div className="space-y-3">
              <Link
                to="/#profile"
                onClick={() => {
                  scrollToSection("profile");
                  setIsMenuOpen(false);
                }}
                className="block w-full text-base font-medium text-[#5A8033] hover:text-[#2F6B47] hover:bg-[#D4A017] hover:bg-opacity-10 py-3 rounded-md font-[Orbitron] animate-fadeInUp"
              >
                Profile
              </Link>
              <button
                onClick={() => {
                  logout();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-base font-medium text-[#5A8033] hover:text-[#D4A017] hover:bg-[#2F6B47] hover:bg-opacity-10 py-3 rounded-md font-[Orbitron] animate-fadeInUp"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                toggleAccountPopup();
                setIsMenuOpen(false);
              }}
              className="block w-full text-base font-medium text-[#5A8033] hover:text-[#2F6B47] hover:bg-[#D4A017] hover:bg-opacity-10 py-3 rounded-md font-[Orbitron] animate-fadeInUp"
            >
              Account
            </button>
          )}
        </motion.div>
      )}

      {/* Inline CSS for Animations */}
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
    </header>
  );
};

export default Header;
