import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import services from "../data/services"; // Adjust the path based on your folder structure

// Note: Add this to your app's <head> for Orbitron font:
// <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">

export default function ServicesSection() {
  const [visibleCategories, setVisibleCategories] = useState(3);
  const navigate = useNavigate();

  const handleSeeMore = () => {
    setVisibleCategories((prevCount) => Math.min(prevCount + 1, services.length));
  };

  const handleShowLess = () => {
    setVisibleCategories(3);
  };

  const handleViewDetails = (serviceId) => {
    navigate(`/service/${serviceId}`);
  };

  return (
    <section id="services" className="py-16 px-4 bg-[#FFFAFA] min-h-screen relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#2F6B47] opacity-10 rounded-full transform -translate-x-20 -translate-y-20 animate-pulseSlow"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#D4A017] opacity-10 rounded-full transform translate-x-28 translate-y-28 animate-pulseSlow"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-[#2F6B47] mb-4 font-[Orbitron] animate-gradientText bg-gradient-to-r from-green-600 via-yellow-500 to-orange-400 bg-clip-text text-transparent">
          Our Marketing Ministrations
          <span className="block w-16 h-1 bg-[#D4A017] rounded-full mx-auto mt-2 animate-expandLine"></span>
        </h2>
        <p className="text-center text-lg text-[#5A8033] mb-12 animate-fadeInUp">
          Ensure your brand growth with a range of services:
        </p>

        {/* Services Categories */}
        {services.slice(0, visibleCategories).map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-semibold text-center text-[#2F6B47] mb-8 relative animate-fadeInUp delay-200">
              {category.category}
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#D4A017] rounded-full animate-expandLine"></span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((service, index) => (
                <div
                  key={service.id}
                  className="bg-white p-6 rounded-xl hover:bg-[#F0EFE7] transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => handleViewDetails(service.id)}
                >
                  <div className="bg-[#e9fef2] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-[#D4A017] transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-[#2F6B47] group-hover:text-[#D4A017] transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-[#5A8033] text-base">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* See More / Show Less Button */}
        <div className="text-center mt-8 animate-fadeInUp delay-300">
          {visibleCategories < services.length ? (
            <button
              onClick={handleSeeMore}
              className="bg-[#2F6B47] text-white px-8 py-3 rounded-full font-medium relative overflow-hidden group"
            >
              <span className="relative z-10">See More</span>
              <span className="absolute inset-0 bg-[#D4A017] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></span>
            </button>
          ) : (
            <button
              onClick={handleShowLess}
              className="bg-[#2F6B47] text-white px-8 py-3 rounded-full font-medium relative overflow-hidden group"
            >
              <span className="relative z-10">Show Less</span>
              <span className="absolute inset-0 bg-[#D4A017] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></span>
            </button>
          )}
        </div>

        {/* Why Choose MarketingBirbal Section */}
        <div className="mt-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-[#2F6B47] mb-8 font-[Orbitron] animate-gradientText bg-gradient-to-r from-green-600 via-yellow-500 to-orange-400 bg-clip-text text-transparent">
            Why Choose Us?
            <span className="block w-12 h-1 bg-[#D4A017] rounded-full mx-auto mt-2 animate-expandLine"></span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Strategies Inspired by New-age AI Trends",
                description: "Just like the legendary Birbal’s wit and wisdom, we craft intelligent, innovative, and solution-driven marketing strategies tailored to your brand’s unique needs.",
              },
              {
                title: "Brand Transformation Partner",
                description: "Leveraging deep industry insights, extensive experience, and creative expertise, we craft a unique and compelling identity for your brand.",
              },
              {
                title: "Your All-In-One Growth Solution",
                description: "From enhancing online visibility to building a powerful brand reputation, we offer end-to-end strategies that drive high-quality lead generation and boost sales conversions.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl hover:bg-[#F0EFE7] transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h4 className="text-xl font-semibold mb-2 text-[#2F6B47]">{item.title}</h4>
                <p className="text-[#5A8033]">{item.description}</p>
              </div>
            ))}
          </div>
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
      `}</style>
    </section>
  );
}