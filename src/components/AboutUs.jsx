import React from "react";
import DigitalMarketingElements from "./CreativeImageSection";

// Note: Add this to your app's <head> for Orbitron font:
// <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">

const AboutUs = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about">
      <section
        className="py-16 px-4 bg-[#FFFAFA] min-h-[70vh] flex items-center relative overflow-hidden"
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#2F6B47] opacity-10 rounded-full transform -translate-x-20 -translate-y-20 animate-pulseSlow"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#D4A017] opacity-10 rounded-full transform translate-x-28 translate-y-28 animate-pulseSlow"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-[#2F6B47] mb-12 font-[Orbitron] animate-gradientText bg-gradient-to-r from-green-600 via-yellow-500 to-orange-400 bg-clip-text text-transparent">
            About MarketingBirbal
            <span className="block w-16 h-1 bg-[#D4A017] rounded-full mx-auto mt-2 animate-expandLine"></span>
          </h2>

          {/* Content Layout */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Text Section */}
            <div className="flex-1 space-y-8 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-semibold text-[#2F6B47] relative animate-fadeInUp">
                Our Journey
                <span className="absolute -bottom-1 left-0 w-12 h-1 bg-[#D4A017] rounded-full animate-expandLine"></span>
              </h3>
              <p className="text-[#5A8033] leading-relaxed text-base sm:text-lg max-w-prose mx-auto md:mx-0 animate-fadeInUp delay-200">
                The journey started in the world of education, where the entrepreneurial leader worked as an assistant professor, passionate about teaching and literature. Over time, an interest in marketing sparked, slowly turning into a deep passion. With curiosity leading the way, new skills were learned, and knowledge in the marketing field expanded. After years of dedication and hard work, a vision took shape—to build a startup offering innovative marketing services. Driven by this goal, the entrepreneurial leader stepped into the world of business, combining past experiences to create a unique mark in the marketing industry.
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-[#2F6B47] relative mt-6 animate-fadeInUp delay-300">
                Meet the Digipreneurs
                <span className="absolute -bottom-1 left-0 w-12 h-1 bg-[#D4A017] rounded-full animate-expandLine"></span>
              </h3>
              <p className="text-[#5A8033] leading-relaxed text-base sm:text-lg max-w-prose mx-auto md:mx-0 animate-fadeInUp delay-400">
                We’re a team of dreamers, doers, and innovators who fuse tradition with cutting-edge technology to craft exceptional digital experiences. Our mission is to help your brand thrive in today’s dynamic digital landscape.
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-[#2F6B47] text-white px-6 py-3 rounded-full text-base sm:text-lg font-medium relative overflow-hidden group animate-fadeInUp delay-500"
                aria-label="Connect with MarketingBirbal"
              >
                <span className="relative z-10">Connect With Us</span>
                <span className="absolute inset-0 bg-[#D4A017] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></span>
              </button>
            </div>

            {/* Image Section */}
            <div className="flex-1 mt-8 md:mt-0 relative">
              <div className="relative w-full max-w-md md:max-w-lg lg:max-w-2xl mx-auto group">
                <img
                  src="https://media-hosting.imagekit.io//5868933aa3fb415b/WhatsApp%20Image%202025-03-22%20at%204.46.08%20PM.jpeg?Expires=1837253732&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qkIJSAqXRsCApxJcTjqJYN0VoQxrzaNIR3ALzY5q9slV2fcpbLiE9Hhlgcbnf7Qjt3pP0fNP5x7xirkArPTtcNwgmCvYwXZiwRWw0io-NVf-FopXEyNORRjic43QHegSwklEtYrH-kHVe9-QeRQtpGqvO-FgLVkpF-4l670o2G8G6TXUucinacLhpzWR~tCGfrtU0Bs5LfrnAPEAAhREr5HPn-f4urymJuCpcWVV7AmIl~R-5qSgQLFBq6Uicto5WrNzXyzhwcVbi77iO~jZmg05tNOrNyCPkuVBNLttgYydtt6fhDA3-fnC6GHbCxaCFPCuhV7Xxs2g9tDcF7pAQA__"
                  alt="MarketingBirbal founders crafting innovative digital strategies"
                  className="w-full h-auto rounded-lg object-cover transform transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Decorative Frame */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#2F6B47] opacity-20 rounded-full animate-spinSlow"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#D4A017] opacity-20 rounded-full animate-spinSlow reverse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DigitalMarketingElements />

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