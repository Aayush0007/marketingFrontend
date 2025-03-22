import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../assets/Logo.png"; // Ensure this path is correct for your project
import { motion } from "framer-motion";
import { Link, useLocation } from 'react-router-dom'; // Added useLocation to check the current route

const Header = ({
  isMenuOpen,
  toggleMenu,
  activeSection,
  scrollToSection,
  user,
  toggleAccountPopup,
  logout,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const location = useLocation(); // Added to check the current route

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        toggleMenu(false);
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [toggleMenu]);

  // Update active section based on scroll position, but only on the homepage
  useEffect(() => {
    // Only run this logic if the current route is the homepage
    if (location.pathname !== '/') return;

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

      if (activeSection !== currentSection) {
        scrollToSection(currentSection, false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, scrollToSection, location.pathname]); // Added location.pathname to the dependency array

  const menuItems = ["home", "about", "services", "blog", "contact"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        {/* Logo Section */}
        <Link
          to="/#home"
          onClick={() => scrollToSection("home")}
          className="flex items-center space-x-2 transition-all duration-300 hover:scale-105"
        >
          <div className="relative">
            <img
              src={Logo}
              alt="MarketingBirbal Logo"
              className="h-10 w-10 rounded-full border-2 border-yellow-500 shadow-sm transition-transform duration-300"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-wide drop-shadow-md transition-all duration-300 hover:scale-105 hover:drop-shadow-lg"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="text-green-600">Marketing</span>
            <span className="text-yellow-500">Birbal</span>
          </motion.div>
        </Link>

        {/* Mobile Navigation */}
        {isMobile ? (
          <>
            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => toggleMenu(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="absolute top-16 left-0 w-full bg-white shadow-lg border-t py-3 px-4 space-y-2 text-center transition-all duration-300">
                {menuItems.map((item) => (
                  <Link
                    key={item}
                    to={`/#${item}`}
                    onClick={() => {
                      scrollToSection(item);
                      toggleMenu(false);
                    }}
                    className={`block w-full text-base font-medium capitalize py-2 rounded-md transition-all duration-200 ${
                      activeSection === item
                        ? "text-green-700 bg-green-50"
                        : "text-gray-700 hover:text-green-600 hover:bg-yellow-50"
                    }`}
                  >
                    {item}
                  </Link>
                ))}
                {user ? (
                  <div className="space-y-2">
                    <Link
                      to="/#profile"
                      onClick={() => {
                        scrollToSection("profile");
                        toggleMenu(false);
                      }}
                      className="block w-full text-base font-medium text-gray-700 hover:text-green-600 hover:bg-yellow-50 py-2 rounded-md"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        toggleMenu(false);
                      }}
                      className="block w-full text-base font-medium text-gray-700 hover:text-red-500 hover:bg-red-50 py-2 rounded-md"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      toggleAccountPopup();
                      toggleMenu(false);
                    }}
                    className="block w-full text-base font-medium text-gray-700 hover:text-green-600 hover:bg-yellow-50 py-2 rounded-md"
                  >
                    Account
                  </button>
                )}
              </div>
            )}
          </>
        ) : (
          /* Desktop Navigation */
          <div className="flex items-center space-x-4 lg:space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item}
                to={`/#${item}`}
                onClick={() => scrollToSection(item)}
                className={`capitalize text-base lg:text-lg font-medium px-3 py-2 rounded-md transition-all duration-200 ${
                  activeSection === item
                    ? "text-green-700 bg-green-50"
                    : "text-gray-700 hover:text-green-600 hover:bg-yellow-50"
                }`}
              >
                {item}
              </Link>
            ))}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center text-base lg:text-lg font-medium text-green-700 hover:text-green-900 transition-all duration-200"
                  aria-label="User account options"
                >
                  Welcome, {user.name} <ChevronDown size={20} className="ml-1" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-lg border p-2">
                    <Link
                      to="/#profile"
                      onClick={() => {
                        scrollToSection("profile");
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-md"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={toggleAccountPopup}
                className="capitalize text-base lg:text-lg font-medium text-gray-700 hover:text-green-600 hover:bg-yellow-50 px-3 py-2 rounded-md transition-all duration-200"
              >
                Account
              </button>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
