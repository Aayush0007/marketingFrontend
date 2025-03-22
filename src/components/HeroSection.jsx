import React from "react";
import HeroImg from "../assets/HeroSection.png";

const HeroSection = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="pt-24 pb-16 px-4 bg-gradient-to-b from-yellow-100 via-green-50 to-white min-h-[80vh] flex items-center"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-green-600 via-yellow-500 to-orange-400 bg-clip-text text-transparent">
            Expand Your Business 
            </span>
            <br />
            <span className="text-gray-800">
            Digitally With Our Newtech Strategies
            </span>
          </h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
          We offer a fusion of effective media and technology to meet a wide range of clients and take your brand to new heights.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
          Let's collaboratively build a bright future for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-green-600 to-yellow-500 text-white px-6 py-3 rounded-full text-base sm:text-lg font-medium hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              Get Started Today
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="border border-green-600 text-green-600 px-6 py-3 rounded-full text-base sm:text-lg font-medium hover:bg-green-600 hover:text-white transition-all duration-300 w-full sm:w-auto"
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="relative w-full max-w-md md:max-w-lg">
            <img
              src={HeroImg}
              alt="AI-powered digital marketing solutions by MarketingBirbal"
              className="w-full h-auto rounded-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;