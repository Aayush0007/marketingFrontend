import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { blogs } from "../data/blogs";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const relatedServices = [
  { id: 1, title: "SEO Optimization", description: "Boost your website ranking with our global SEO services.", sectionId: "services" },
  { id: 2, title: "Social Media Marketing", description: "Expand your audience reach worldwide with AI-driven strategies.", sectionId: "services" },
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));
  const navigate = useNavigate();
  const relatedBlogs = blogs.filter((b) => b.id !== parseInt(id)).slice(0, 3);

  useEffect(() => {
    if (!blog) navigate("/#blog");
  }, [blog, navigate]);

  const scrollToSection = (sectionId) => {
    if (window.location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
      else console.warn(`Section with ID "${sectionId}" not found on homepage.`);
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const shareUrl = `https://www.marketingbirbal.com/blog/${id}`;
  const shareText = `Check out this blog post: ${blog?.title} - ${blog?.summary} #DigitalMarketing #SEO`;

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#FFFAFA] text-[#5A8033] text-xl font-semibold">
        Blog not found
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${blog.title} | MarketingBirbal - Best Global Digital Marketing Blog 2025`}</title>
        <meta name="description" content={`Read ${blog.title} on MarketingBirbal, a global digital marketing agency. Learn about AI-powered marketing, voice search optimization, video marketing strategies, and sustainable marketing for 2025.`} />
        <meta name="keywords" content={`digital marketing blog, ${blog.title.toLowerCase()}, AI-powered digital marketing, voice search optimization 2025, video marketing strategies 2025, sustainable marketing, e-commerce SEO services, global digital marketing agency, international SEO services, MarketingBirbal`} />
        <meta property="og:title" content={`${blog.title} | MarketingBirbal`} />
        <meta property="og:description" content={`Discover ${blog.title} and more global digital marketing insights on MarketingBirbal, serving all marketing types worldwide.`} />
        <meta property="og:image" content={blog.imageUrl || "%PUBLIC_URL%/og-image.png"} />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${blog.title} | MarketingBirbal`} />
        <meta name="twitter:description" content={`Discover ${blog.title} and more global digital marketing insights on MarketingBirbal.`} />
        <meta name="twitter:image" content={blog.imageUrl || "%PUBLIC_URL%/og-image.png"} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": blog.title,
          "description": blog.summary,
          "image": blog.imageUrl,
          "datePublished": "2025-03-21",
          "author": { "@type": "Organization", "name": "MarketingBirbal" },
          "publisher": { "@type": "Organization", "name": "MarketingBirbal", "logo": { "@type": "ImageObject", "url": "%PUBLIC_URL%/logo.png" } },
          "keywords": ["digital marketing blog", "AI-powered digital marketing", "voice search optimization 2025", "video marketing strategies 2025", "sustainable marketing", "e-commerce SEO services", "global digital marketing agency", "international SEO services"],
        })}</script>
      </Helmet>
      <Header scrollToSection={scrollToSection} />
      <motion.section
        className="max-w-5xl mx-auto px-6 py-10 bg-[#FFFAFA] rounded-lg mt-24 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#2F6B47] opacity-10 rounded-full transform -translate-x-20 -translate-y-20 animate-pulseSlow"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#D4A017] opacity-10 rounded-full transform translate-x-28 translate-y-28 animate-pulseSlow"></div>

        <div className="relative z-10">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate("/#blog")}
            className="flex items-center space-x-2 text-lg font-semibold text-[#5A8033] hover:text-[#D4A017] transition-all duration-300 mb-6"
          >
            <ChevronLeft size={22} />
            <span>Back to Blogs</span>
          </motion.button>

          {blog.imageUrl && blog.imageUrl !== "#" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <img
                src={blog.imageUrl}
                alt={blog.title}
                loading="lazy"
                className="w-full h-80 object-cover rounded-xl transform transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          )}

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-extrabold text-[#2F6B47] mb-4 font-[Orbitron] animate-gradientText bg-gradient-to-r from-green-600 via-yellow-500 to-orange-400 bg-clip-text text-transparent"
          >
            {blog.title}
            <span className="block w-16 h-1 bg-[#D4A017] rounded-full mt-2 animate-expandLine"></span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl font-semibold text-[#5A8033] mb-6"
          >
            {blog.summary}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-6 rounded-xl space-y-6 leading-relaxed border-2 border-[#2F6B47] hover:border-[#D4A017] transition-all duration-300"
          >
            <p className="text-[#5A8033] text-lg">{blog.content}</p>
            <p className="text-[#5A8033] text-lg">
              Want to learn more about how AI can transform your marketing? Check out our blog on{" "}
              <a
                href="/blog/2"
                className="text-[#D4A017] hover:underline"
                onClick={(e) => { e.preventDefault(); navigate("/blog/2"); }}
              >
                AI-Powered Digital Marketing Strategies for 2025
              </a>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 flex items-center space-x-4"
          >
            <h3 className="text-lg font-semibold text-[#2F6B47]">Share this post:</h3>
            <div className="flex space-x-3">
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2F6B47] p-3 rounded-full hover:bg-[#D4A017] transition-all duration-300 transform hover:scale-105"
                aria-label="Share on Twitter"
              >
                <FaXTwitter size={22} className="text-white" />
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2F6B47] p-3 rounded-full hover:bg-[#D4A017] transition-all duration-300 transform hover:scale-105"
                aria-label="Share on LinkedIn"
              >
                <FaLinkedin size={22} className="text-white" />
              </a>
              <a href={`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2F6B47] p-3 rounded-full hover:bg-[#D4A017] transition-all duration-300 transform hover:scale-105"
                aria-label="Share on WhatsApp"
              >
                <FaWhatsapp size={22} className="text-white" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 p-6 bg-white rounded-xl"
          >
            <h3 className="text-3xl font-semibold text-[#2F6B47] mb-4 relative">
              Related Services
              <span className="absolute -bottom-1 left-0 w-12 h-1 bg-[#D4A017] rounded-full animate-expandLine"></span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedServices.map((service) => (
                <div key={service.id} className="bg-[#F0EFE7] p-4 rounded-lg hover:bg-[#D4A017] transition-all duration-300 group">
                  <h4 className="text-xl font-semibold text-[#2F6B47] group-hover:text-[#FFFAFA] transition-colors duration-300">{service.title}</h4>
                  <p className="text-[#5A8033] text-sm group-hover:text-[#FFFAFA] transition-colors duration-300">{service.description}</p>
                  <button onClick={() => scrollToSection(service.sectionId)}
                    className="mt-2 text-[#D4A017] group-hover:text-[#FFFAFA] font-semibold transition-all duration-300"
                  >
                    Learn More →
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 p-6 bg-white rounded-xl"
          >
            <h3 className="text-3xl font-semibold text-[#2F6B47] mb-4 relative">
              Related Blog Posts
              <span className="absolute -bottom-1 left-0 w-12 h-1 bg-[#D4A017] rounded-full animate-expandLine"></span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <div key={relatedBlog.id} className="bg-[#F0EFE7] p-4 rounded-lg hover:bg-[#D4A017] transition-all duration-300 group">
                  <h4 className="text-xl font-semibold text-[#2F6B47] group-hover:text-[#FFFAFA] transition-colors duration-300">{relatedBlog.title}</h4>
                  <p className="text-[#5A8033] text-sm group-hover:text-[#FFFAFA] transition-colors duration-300">{relatedBlog.summary}</p>
                  <button onClick={() => navigate(`/blog/${relatedBlog.id}`)}
                    className="mt-2 text-[#D4A017] group-hover:text-[#FFFAFA] font-semibold transition-all duration-300"
                  >
                    Read More →
                  </button>
                </div>
              ))}
            </div>
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
      `}</style>
    </>
  );
};

export default BlogDetail;
