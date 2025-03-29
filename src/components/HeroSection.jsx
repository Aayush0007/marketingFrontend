import React from "react";
import HeroImg from "../assets/HeroSection.png";

// Note: Add this to your app's <head> to use Orbitron font:
// <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">

const HeroSection = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="pt-24 pb-16 px-4 bg-[#FFFAFA] min-h-[80vh] flex items-center relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#2F6B47] opacity-10 rounded-full transform -translate-x-16 -translate-y-16 animate-pulseSlow"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#D4A017] opacity-10 rounded-full transform translate-x-24 translate-y-24 animate-pulseSlow"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-8 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight relative font-[Orbitron]">
            <span className="bg-gradient-to-r from-green-600 via-yellow-500 to-orange-400 bg-clip-text text-transparent animate-gradientText">
              Expand Your Business
            </span>
            <br />
            <span className="text-[#2F6B47] relative">
              With Our AI Powered Strategies
              <span className="absolute -bottom-2 left-0 w-24 h-1 bg-[#D4A017] rounded-full animate-expandLine"></span>
            </span>
          </h1>
          <p className="text-[#5A8033] text-lg leading-relaxed max-w-xl mx-auto md:mx-0 animate-fadeInUp delay-200">
            We offer a fusion of effective media and technology to meet a wide range of clients and take your brand to new heights.
          </p>
          <p className="text-[#5A8033] text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 animate-fadeInUp delay-300">
            Let's collaboratively build a bright future for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#2F6B47] text-white px-6 py-3 rounded-full text-base sm:text-lg font-medium relative overflow-hidden group"
            >
              <span className="relative z-10">Get Started Today</span>
              <span className="absolute inset-0 bg-[#D4A017] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="border border-[#2F6B47] text-[#2F6B47] px-6 py-3 rounded-full text-base sm:text-lg font-medium hover:bg-[#2F6B47] hover:text-[#FFFAFA] transition-all duration-300 w-full sm:w-auto animate-pulseBorder"
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center relative">
          <div className="relative w-full max-w-md md:max-w-lg group">
            <img
              src={HeroImg}
              alt="AI-powered digital marketing solutions by MarketingBirbal"
              className="w-full h-auto rounded-lg object-cover transform transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Decorative Frame */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#2F6B47] opacity-20 rounded-full animate-spinSlow"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#D4A017] opacity-20 rounded-full animate-spinSlow reverse"></div>
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
          100% { width: 6rem; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseBorder {
          0% { border-color: #2F6B47; }
          50% { border-color: #D4A017; }
          100% { border-color: #2F6B47; }
        }
        @keyframes spinSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-gradientText {
          background-size: 200% 200%;
          animation: gradientText 6s ease infinite;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-spinSlow {
          animation: spinSlow 10s linear infinite;
        }
        .reverse {
          animation-direction: reverse;
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
};

export default HeroSection;