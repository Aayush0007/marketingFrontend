import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, useInView } from "framer-motion";
import { blogs } from "../data/blogs"; // Import centralized data

const BlogSection = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const handleViewMore = (id) => {
    window.open(`/blog/${id}`, "_blank");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      id="blog"
      className="py-20 px-6 bg-[#FFFAFA] relative overflow-hidden"
      ref={ref}
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#2F6B47] opacity-10 rounded-full transform -translate-x-16 -translate-y-16 animate-pulseSlow"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#D4A017] opacity-10 rounded-full transform translate-x-24 translate-y-24 animate-pulseSlow"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold text-center text-[#2F6B47] mb-14 font-[Orbitron]"
        >
          <span className="bg-gradient-to-r from-green-600 via-yellow-500 to-orange-400 bg-clip-text text-transparent animate-gradientText">
            Latest Insights
          </span>
        </motion.h2>
        {isInView ? (
          <Slider {...settings}>
            {blogs.map((blog) => (
              <div key={blog.id} className="px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  onClick={() => handleViewMore(blog.id)}
                  className="blog-card bg-[#FFFAFA] p-6 rounded-2xl shadow-lg border border-[#2F6B47]/20 hover:border-[#D4A017] hover:shadow-xl transition-all duration-300 cursor-pointer group relative"
                >
                  {blog.imageUrl && blog.imageUrl !== "#" && (
                    <div className="relative w-full h-48 mb-4">
                      <img
                        src={blog.imageUrl}
                        alt={blog.title}
                        loading="lazy"
                        className="w-full h-full object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute -top-2 -left-2 w-12 h-12 bg-[#2F6B47] opacity-20 rounded-full animate-spinSlow"></div>
                      <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-[#D4A017] opacity-20 rounded-full animate-spinSlow reverse"></div>
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-[#2F6B47] mb-3 font-[Orbitron] group-hover:text-[#D4A017] transition-colors duration-300">
                    {blog.title}
                  </h3>
                  <p className="text-[#5A8033] text-base leading-relaxed">
                    {blog.summary}
                  </p>
                </motion.div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="h-48" /> // Placeholder for lazy-loaded content
        )}
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
        @keyframes spinSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-gradientText {
          background-size: 200% 200%;
          animation: gradientText 6s ease infinite;
        }
        .animate-spinSlow {
          animation: spinSlow 10s linear infinite;
        }
        .reverse {
          animation-direction: reverse;
        }
      `}</style>
    </section>
  );
};

export default BlogSection;
