import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet"; // For SEO
import { blogs } from "../data/blogs"; // Import centralized data
import {  FaLinkedin, FaWhatsapp } from "react-icons/fa"; // For social sharing
import { FaXTwitter } from "react-icons/fa6";

// Sample Related Services (updated to use existing sections)
const relatedServices = [
  { id: 1, title: "SEO Optimization", description: "Boost your website ranking with our global SEO services.", sectionId: "services" },
  { id: 2, title: "Social Media Marketing", description: "Expand your audience reach worldwide with AI-driven strategies.", sectionId: "services" },
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));
  const navigate = useNavigate();

  // Define related blogs inside the component to use useParams
  const relatedBlogs = blogs.filter((b) => b.id !== parseInt(id)).slice(0, 3);

  useEffect(() => {
    if (!blog) {
      navigate("/#blog"); // Redirect to the blog section if blog not found
    }
  }, [blog, navigate]);

  // Updated scrollToSection to match ServiceDetail
  const scrollToSection = (sectionId) => {
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn(`Section with ID "${sectionId}" not found on homepage.`);
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  // Social Share URLs
  const shareUrl = `https://www.marketingbirbal.com/blog/${id}`;
  const shareText = `Check out this blog post: ${blog?.title} - ${blog?.summary} #DigitalMarketing #SEO`;

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-yellow-200 via-green-200 to-yellow-300 text-gray-800 text-xl font-semibold">
        Blog not found
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${blog.title} | MarketingBirbal - Best Global Digital Marketing Blog 2025`}</title>
        <meta
          name="description"
          content={`Read ${blog.title} on MarketingBirbal, a global digital marketing agency. Learn about AI-powered marketing, voice search optimization, video marketing strategies, and sustainable marketing for 2025.`}
        />
        <meta
          name="keywords"
          content={`digital marketing blog, ${blog.title.toLowerCase()}, AI-powered digital marketing, voice search optimization 2025, video marketing strategies 2025, sustainable marketing, e-commerce SEO services, global digital marketing agency, international SEO services, MarketingBirbal`}
        />
        <meta property="og:title" content={`${blog.title} | MarketingBirbal`} />
        <meta
          property="og:description"
          content={`Discover ${blog.title} and more global digital marketing insights on MarketingBirbal, serving all marketing types worldwide.`}
        />
        <meta property="og:image" content={blog.imageUrl || "%PUBLIC_URL%/og-image.png"} />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${blog.title} | MarketingBirbal`} />
        <meta
          name="twitter:description"
          content={`Discover ${blog.title} and more global digital marketing insights on MarketingBirbal.`}
        />
        <meta name="twitter:image" content={blog.imageUrl || "%PUBLIC_URL%/og-image.png"} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": blog.title,
            "description": blog.summary,
            "image": blog.imageUrl,
            "datePublished": "2025-03-21", // Replace with actual publish date
            "author": {
              "@type": "Organization",
              "name": "MarketingBirbal",
            },
            "publisher": {
              "@type": "Organization",
              "name": "MarketingBirbal",
              "logo": {
                "@type": "ImageObject",
                "url": "%PUBLIC_URL%/logo.png",
              },
            },
            "keywords": [
              "digital marketing blog",
              "AI-powered digital marketing",
              "voice search optimization 2025",
              "video marketing strategies 2025",
              "sustainable marketing",
              "e-commerce SEO services",
              "global digital marketing agency",
              "international SEO services",
            ],
          })}
        </script>
      </Helmet>
      <Header scrollToSection={scrollToSection} />
      <div className="max-w-5xl mx-auto px-6 py-10 bg-gradient-to-br from-yellow-100 via-green-50 to-yellow-200 text-gray-900 shadow-lg rounded-lg mt-24 transition-all duration-500 hover:shadow-xl">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate("/#blog")}
          className="flex items-center space-x-2 text-lg font-semibold text-gray-700 hover:text-green-700 transition-all duration-300 mb-6"
        >
          <ChevronLeft size={22} />
          <span>Back to Blogs</span>
        </motion.button>

        {/* Blog Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mb-8"
        >
          {blog.imageUrl && blog.imageUrl !== "#" ? (
            <img
              src={blog.imageUrl}
              alt={blog.title}
              loading="lazy"
              className="w-full h-80 object-cover rounded-xl shadow-lg"
            />
          ) : (
            <div className="w-full h-80 bg-gray-200 rounded-xl shadow-lg flex items-center justify-center text-gray-500">
              No Image Available
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 rounded-xl"></div>
        </motion.div>

        {/* Blog Content */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl font-extrabold text-green-900 mb-4"
        >
          {blog.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl font-semibold text-gray-700 mb-6"
        >
          {blog.summary}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white p-6 rounded-xl shadow-md space-y-6 leading-relaxed border-2 border-transparent hover:border-green-200 transition-all duration-300"
        >
          <p className="text-gray-700 text-lg">{blog.content}</p>
          {/* Internal Link Example */}
          <p className="text-gray-700 text-lg">
            Want to learn more about how AI can transform your marketing? Check out our blog on{" "}
            <a
              href="/blog/2"
              className="text-green-700 hover:underline"
              onClick={(e) => {
                e.preventDefault();
                navigate("/blog/2");
              }}
            >
              AI-Powered Digital Marketing Strategies for 2025
            </a>.
          </p>
        </motion.div>

        {/* Social Share Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 flex items-center space-x-4"
        >
          <h3 className="text-lg font-semibold text-gray-800">Share this post:</h3>
          <div className="flex space-x-3">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-100 p-3 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
              aria-label="Share on Twitter"
            >
              <FaXTwitter size={22} />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-100 p-3 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
              aria-label="Share on LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-100 p-3 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
              aria-label="Share on WhatsApp"
            >
              <FaWhatsapp size={22} />
            </a>
          </div>
        </motion.div>

        {/* Related Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 bg-yellow-50 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-3xl font-bold text-green-900 mb-4">Related Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {relatedServices.map((service) => (
              <div
                key={service.id}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-gray-800">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
                <button
                  onClick={() => scrollToSection(service.sectionId)}
                  className="mt-2 text-green-700 hover:text-green-900 font-semibold transition-all duration-300"
                >
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Related Blog Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 bg-yellow-50 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-3xl font-bold text-green-900 mb-4">Related Blog Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedBlogs.map((relatedBlog) => (
              <div
                key={relatedBlog.id}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-gray-800">{relatedBlog.title}</h4>
                <p className="text-gray-600 text-sm">{relatedBlog.summary}</p>
                <button
                  onClick={() => navigate(`/blog/${relatedBlog.id}`)}
                  className="mt-2 text-green-700 hover:text-green-900 font-semibold transition-all duration-300"
                >
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer scrollToSection={scrollToSection} />
    </>
  );
};

export default BlogDetail;
