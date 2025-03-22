import React from "react";
import TeamImage from "../assets/AboutUs.jpeg"; // Ensure the path is correct
import DigitalMarketingElements from "./CreativeImageSection";

const AboutUs = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about">
      <section
        
        className="py-16 px-4 bg-gradient-to-r from-green-50 via-yellow-50 to-green-100 min-h-[70vh] flex items-center"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
            About MarketingBirbal
          </h2>

          {/* Content Layout */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Text Section */}
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                Our Journey
              </h3>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg max-w-prose mx-auto md:mx-0">
              The journey started in the world of education, where the entrepreneurial leader worked as an assistant professor, passionate about teaching and literature. Over time, an interest in marketing sparked, slowly turning into a deep passion. With curiosity leading the way, new skills were learned, and knowledge in the marketing field expanded. After years of dedication and hard work, a vision took shape—to build a startup offering innovative marketing services. Driven by this goal, the entrepreneurial leader stepped into the world of business, combining past experiences to create a unique mark in the marketing industry.
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-6">
                Meet the Digipreneurs
              </h3>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg max-w-prose mx-auto md:mx-0">
                We’re a team of dreamers, doers, and innovators who fuse
                tradition with cutting-edge technology to craft exceptional
                digital experiences. Our mission is to help your brand thrive in
                today’s dynamic digital landscape.
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-green-500 to-yellow-500 text-white px-6 py-3 rounded-full text-base sm:text-lg font-medium hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300"
                aria-label="Connect with MarketingBirbal"
              >
                Connect With Us
              </button>
            </div>

            {/* Image Section */}
            <div className="flex-1 mt-8 md:mt-0">
              <div className="relative w-full max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
                <img
                  src={TeamImage}
                  alt="MarketingBirbal founders crafting innovative digital strategies"
                  className="w-full h-auto rounded-lg object-cover shadow-md"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <DigitalMarketingElements />
    </section>
  );
};

export default AboutUs;
