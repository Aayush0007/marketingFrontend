import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";
import services from "../data/services"; // Import from centralized data

// Flattened services data
const servicesData = services.flatMap(category => category.items);

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const service = servicesData.find((s) => s.id === Number(id));

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [id]);

  const scrollToSection = (sectionId) => {
    if (window.location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
      else console.warn(`Section with ID "${sectionId}" not found on homepage.`);
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-6 bg-[#FFFAFA] mt-8 text-center">
        <h2 className="text-2xl font-semibold text-[#5A8033] animate-pulse">Loading...</h2>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto p-6 bg-[#FFFAFA] mt-8">
        <h2 className="text-2xl font-semibold text-[#D4A017] text-center">Service not found</h2>
      </div>
    );
  }

  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <motion.section
        className="max-w-7xl mx-auto p-10 bg-[#FFFAFA] rounded-lg mt-24 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#2F6B47] opacity-10 rounded-full transform -translate-x-20 -translate-y-20 animate-pulseSlow"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#D4A017] opacity-10 rounded-full transform translate-x-28 translate-y-28 animate-pulseSlow"></div>

        <div className="relative z-10">
          <h2 className="text-5xl font-extrabold mb-8 text-center text-[#2F6B47] font-[Orbitron] animate-gradientText bg-gradient-to-r from-green-600 via-yellow-500 to-orange-400 bg-clip-text text-transparent">
            {service.title}
            <span className="block w-16 h-1 bg-[#D4A017] rounded-full mx-auto mt-2 animate-expandLine"></span>
          </h2>
          <p className="text-[#5A8033] text-lg leading-relaxed mb-8 text-center animate-fadeInUp">{service.description}</p>

          <motion.div
            className="mt-10 p-8 bg-white rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-semibold mb-6 text-[#2F6B47] relative">
              Key Features
              <span className="absolute -bottom-1 left-0 w-12 h-1 bg-[#D4A017] rounded-full animate-expandLine"></span>
            </h3>
            <ul className="list-disc pl-8 space-y-4 text-[#5A8033]">
              <li>AI Powered content creation.</li>
              <li>Customizable solutions tailored to your needs.</li>
              <li>Seamless user experience with responsive designs.</li>
              <li>Ongoing support and maintenance.</li>
            </ul>
          </motion.div>

          <motion.div
            className="mt-12 p-8 bg-white rounded-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-semibold text-[#2F6B47] mb-6 relative">
              Detailed Overview
              <span className="absolute -bottom-1 left-0 w-12 h-1 bg-[#D4A017] rounded-full animate-expandLine"></span>
            </h3>
            <p className="text-[#5A8033] text-lg leading-relaxed">
              {service.details || "Explore how our " + service.title.toLowerCase() + " leverages cutting-edge technology to deliver exceptional results tailored to your business goals."}
            </p>
          </motion.div>

          <motion.div
            className="mt-16 p-8 bg-white rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-3xl font-semibold text-[#2F6B47] mb-6 text-center relative">
              Related Services
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#D4A017] rounded-full animate-expandLine"></span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData
                .filter((s) => s.id !== Number(id))
                .slice(0, 3)
                .map((relatedService) => (
                  <div
                    key={relatedService.id}
                    onClick={() => navigate(`/service/${relatedService.id}`)}
                    className="cursor-pointer p-6 bg-[#F0EFE7] hover:bg-[#D4A017] rounded-lg transition-all duration-300 group"
                  >
                    <h4 className="text-xl font-semibold text-[#2F6B47] group-hover:text-[#FFFAFA] transition-colors duration-300">{relatedService.title}</h4>
                    <p className="text-[#5A8033] text-sm mt-2 group-hover:text-[#FFFAFA] transition-colors duration-300">{relatedService.description}</p>
                  </div>
                ))}
            </div>
          </motion.div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#2F6B47] text-white px-10 py-4 rounded-full font-medium relative overflow-hidden group"
            >
              <span className="relative z-10">Book Your Appointment Now</span>
              <span className="absolute inset-0 bg-[#D4A017] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></span>
            </button>
          </motion.div>
        </div>
      </motion.section>
      <Footer scrollToSection={scrollToSection} />
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
      `}</style>
    </>
  );
};

export default ServiceDetail;
