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
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="blog" className="py-20 px-6 bg-gradient-to-r from-yellow-100 via-green-50 to-lime-100" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-extrabold text-center text-green-800 mb-14"
        >
          Our Blog
        </motion.h2>
        {isInView ? (
          <Slider {...settings}>
            {blogs.map((blog) => (
              <div key={blog.id} className="px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  onClick={() => handleViewMore(blog.id)} // Make the entire card clickable
                  className="blog-card bg-white p-8 rounded-3xl shadow-xl border-2 border-transparent hover:border-green-200 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  {blog.imageUrl && blog.imageUrl !== "#" && (
                    <img
                      src={blog.imageUrl}
                      alt={blog.title}
                      loading="lazy"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{blog.title}</h3>
                  <p className="text-gray-600 text-lg">{blog.summary}</p>
                </motion.div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="h-48" /> // Placeholder for lazy-loaded content
        )}
      </div>
    </section>
  );
};

export default BlogSection;
