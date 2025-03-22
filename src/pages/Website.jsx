import React, { useState, useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import ServicesSection from "../components/ServicesSection";
import NewsletterSection from "../components/NewsletterSection";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import Notification from "../components/Notification";
import PopupModalContainer from "../components/PopupModalContainer";
import AccountPopup from "../components/AccountPopup";

// Lazy load the BlogSection component
const BlogSection = lazy(() => import("../components/BlogSection"));

function Website() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [notification, setNotification] = useState({ message: "", type: "" });
  const [showAccountPopup, setShowAccountPopup] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();

  const scrollToSection = (sectionId, shouldScroll = true) => {
    setActiveSection(sectionId);
    if (shouldScroll) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        console.warn(`Section with ID "${sectionId}" not found.`);
      }
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      scrollToSection(hash, true);
    } else {
      scrollToSection("home", true);
    }
  }, [location]);

  const handleLogin = (userData, receivedToken) => {
    const isAdmin = userData.email === "connectmarketingbirbal@gmail.com";
    setUser({ ...userData, isAdmin });
    localStorage.setItem("token", receivedToken);
    localStorage.setItem("user", JSON.stringify({ ...userData, isAdmin }));
    setShowAccountPopup(false);
  };

  const handleRegister = (userData, receivedToken) => {
    setUser({ ...userData, isAdmin: false });
    localStorage.setItem("token", receivedToken);
    localStorage.setItem("user", JSON.stringify({ ...userData, isAdmin: false }));
    setShowAccountPopup(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div className="bg-gradient-to-b from-yellow-50 to-green-50 min-h-screen">
      <Header
        isMenuOpen={isMenuOpen}
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        user={user}
        toggleAccountPopup={() => setShowAccountPopup(!showAccountPopup)}
        logout={logout}
      />

      <Notification
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ message: "", type: "" })}
      />

      {showAccountPopup && (
        <AccountPopup
          isVisible={showAccountPopup}
          onClose={() => setShowAccountPopup(false)}
          onLogin={handleLogin}
          onRegister={handleRegister}
          showNotification={(message, type) =>
            setNotification({ message, type })
          }
        />
      )}

      <main>
        <HeroSection scrollToSection={scrollToSection} />
        <AboutUs />
        <ServicesSection />
        <Suspense fallback={<div className="text-center py-10">Loading Blog Section...</div>}>
          <BlogSection />
        </Suspense>
        <ContactSection />
        <NewsletterSection />
        <FAQ />
      </main>
      <Footer scrollToSection={scrollToSection} />
      <PopupModalContainer />
    </div>
  );
}

export default Website;
