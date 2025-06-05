import React from "react";
import DigitalMarketingElements from "./CreativeImageSection";
import AboutUsImg from "../assets/Marketing-Birbal-About-us-image.png";

const AboutUs = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about">
      <section className="py-16 px-4 bg-[#FFFAFA] min-h-[70vh] flex items-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#2F6B47] opacity-10 rounded-full -translate-x-20 -translate-y-20 animate-pulseSlow"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#D4A017] opacity-10 rounded-full translate-x-28 translate-y-28 animate-pulseSlow"></div>

        <div className="max-w-7xl mx-auto z-10 relative">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#2F6B47] mb-12 font-[Orbitron] animate-gradientText bg-gradient-to-r from-green-600 via-yellow-500 to-orange-400 bg-clip-text text-transparent">
            About MarketingBirbal
            <span className="block w-16 h-1 bg-[#D4A017] mx-auto mt-2 rounded-full animate-expandLine"></span>
          </h2>

          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Text Section */}
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div>
                <h3 className="text-2xl font-semibold text-[#2F6B47] relative animate-fadeInUp">
                  Our Journey
                  <span className="absolute -bottom-1 left-0 w-12 h-1 bg-[#D4A017] rounded-full animate-expandLine"></span>
                </h3>
                <p className="text-[#5A8033] text-base sm:text-lg leading-relaxed animate-fadeInUp delay-200">
                 From a professor’s classroom, MarketingBirbal was born to blend strategy and storytelling.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#2F6B47] relative animate-fadeInUp delay-300">
                  Meet the Digipreneurs
                  <span className="absolute -bottom-1 left-0 w-12 h-1 bg-[#D4A017] rounded-full animate-expandLine"></span>
                </h3>
                <p className="text-[#5A8033] text-base sm:text-lg leading-relaxed animate-fadeInUp delay-400">
                  Our team of marketers and tech experts crafts digital stories to elevate your brand.
                </p>
              </div>

              <button
                onClick={() => scrollToSection("contact")}
                className="relative group bg-[#2F6B47] text-white px-6 py-3 rounded-full text-base sm:text-lg font-medium overflow-hidden animate-fadeInUp delay-500"
              >
                <span className="relative z-10">Connect With Us</span>
                <span className="absolute inset-0 bg-[#D4A017] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></span>
              </button>
            </div>

            {/* Image Section */}
            <div className="flex-1 mt-10 md:mt-0 relative flex justify-center items-center">
              <div className="relative w-full max-w-[450px] md:max-w-[500px] lg:max-w-[600px] aspect-[4/3] mx-auto group">
                <img
                  src={AboutUsImg}
                  alt="Founders at MarketingBirbal"
                  className="w-full h-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105 "
                  loading="lazy"
                />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#2F6B47] opacity-20 rounded-full animate-spinSlow"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#D4A017] opacity-20 rounded-full animate-spinSlow reverse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DigitalMarketingElements />

      {/* Animations */}
      <style jsx="true">{`
        @keyframes pulseSlow {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes gradientText {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes expandLine {
          0% {
            width: 0;
          }
          100% {
            width: 3rem;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes spinSlow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
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
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
