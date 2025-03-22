import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Added useNavigate for navigation
import {
  Signpost,
  Building,
  Monitor,
  Globe,
  Users,
  Search,
  MousePointerClickIcon,
  FileText,
  Mail,
  BarChart,
  Video,
  Palette,
  Megaphone,
  Calendar,
  Briefcase,
  Code,
  Cloud,
  TrendingUp,
} from "lucide-react";

const services = [
  
  // Digital Marketing
  {
    category: "Digital Marketing",
    items: [
      { id: 3, icon: <Globe className="w-8 h-8 text-blue-500" />, title: "Comprehensive Online Strategies", description: "Boost your online presence with result-driven digital marketing plans across social media, search engines, and websites." },
      { id: 4, icon: <Users className="w-8 h-8 text-blue-500" />, title: "Social Media Marketing", description: "Create impactful campaigns on Facebook, Instagram, Twitter, and LinkedIn to increase brand awareness." },
      { id: 5, icon: <Search className="w-8 h-8 text-blue-500" />, title: "Search Engine Optimization (SEO)", description: "Optimize your website to rank higher on Google and drive organic traffic." },
      { id: 6, icon: <MousePointerClickIcon className="w-8 h-8 text-blue-500" />, title: "Pay-Per-Click (PPC) Advertising", description: "Achieve cost-effective customer acquisition through targeted PPC campaigns." },
      { id: 7, icon: <FileText className="w-8 h-8 text-blue-500" />, title: "Content Marketing", description: "Tell your brand’s story with engaging blog posts, articles, videos, and infographics." },
      { id: 8, icon: <Mail className="w-8 h-8 text-blue-500" />, title: "Email Marketing", description: "Connect directly with your audience through personalized email campaigns." },
      { id: 9, icon: <TrendingUp className="w-8 h-8 text-blue-500" />, title: "Conversion Rate Optimization (CRO)", description: "Enhance your website’s performance to increase visitor actions and conversions." },
      { id: 10, icon: <Globe className="w-8 h-8 text-blue-500" />, title: "Online Reputation Management (ORM)", description: "Protect and manage your brand’s online image by addressing feedback." },
      
      { id: 12, icon: <BarChart className="w-8 h-8 text-blue-500" />, title: "Analytics and Reporting", description: "Track campaign performance with detailed analytics for data-driven decisions." },
    ],
  },
  // Brand Marketing
  {
    category: "Brand Marketing",
    items: [
      { id: 11, icon: <Video className="w-8 h-8 text-blue-500" />, title: "Video Marketing", description: "Create compelling video content that resonates with your audience." },
      { id: 13, icon: <Palette className="w-8 h-8 text-purple-500" />, title: "Brand Identity Development", description: "Stand out with a unique brand identity, including logo design and messaging." },
      { id: 14, icon: <Megaphone className="w-8 h-8 text-purple-500" />, title: "Campaign Management", description: "Execute impactful marketing campaigns across multiple channels." },
      { id: 15, icon: <Calendar className="w-8 h-8 text-purple-500" />, title: "Event Marketing", description: "Organize memorable events to enhance brand recognition and connections." },
      { id: 16, icon: <Briefcase className="w-8 h-8 text-purple-500" />, title: "Vendor Management", description: "Ensure seamless execution of marketing initiatives with reliable vendors." },
    ],
  },
  // Out-of-Home (OOH) Marketing
  {
    category: "Out-of-Home (OOH) Marketing",
    items: [
      { id: 0, icon: <Signpost className="w-8 h-8 text-green-500" />, title: "Billboard Advertising", description: "Maximize your brand’s reach with eye-catching, strategically placed billboards on highways, busy streets, and prime locations." },
      { id: 1, icon: <Building className="w-8 h-8 text-green-500" />, title: "Hoarding Advertising", description: "Make a bold statement with large outdoor hoardings on prominent buildings and open spaces, ensuring wide visibility." },
      { id: 2, icon: <Monitor className="w-8 h-8 text-green-500" />, title: "Digital Out-of-Home (DOOH)", description: "Engage your audience with dynamic, interactive digital displays like LED screens, video walls, and touch-screen kiosks." },
    ],
  },
  // Web & App Development
  {
    category: "Web & App Development",
    items: [
      { id: 17, icon: <Code className="w-8 h-8 text-teal-500" />, title: "Custom Digital Solutions", description: "Craft modern, responsive websites and mobile applications tailored to your needs." },
      { id: 18, icon: <Code className="w-8 h-8 text-teal-500" />, title: "Full-Stack Development", description: "Frontend and backend solutions using React, Node.js, and PostgreSQL." },
      { id: 19, icon: <Code className="w-8 h-8 text-teal-500" />, title: "E-commerce & SaaS Platforms", description: "Build scalable solutions for online businesses and SaaS applications." },
      { id: 20, icon: <Code className="w-8 h-8 text-teal-500" />, title: "Mobile App Development", description: "Develop native Android and cross-platform apps with React Native." },
      { id: 21, icon: <Palette className="w-8 h-8 text-teal-500" />, title: "UI/UX Design & Prototyping", description: "Create visually appealing and interactive designs with SEO optimization." },
    ],
  },
  // Cloud & DevOps Solutions
  {
    category: "Cloud & DevOps Solutions",
    items: [
      { id: 22, icon: <Cloud className="w-8 h-8 text-indigo-500" />, title: "Optimized Cloud Infrastructure", description: "Deliver scalable, secure, and cost-effective cloud solutions using AWS and Docker." },
      { id: 23, icon: <Cloud className="w-8 h-8 text-indigo-500" />, title: "Scalable System & Database Architecture", description: "Build robust backend systems for seamless performance." },
    ],
  },
  // Digital Growth & Automation
  {
    category: "Digital Growth & Automation",
    items: [
      { id: 24, icon: <TrendingUp className="w-8 h-8 text-orange-500" />, title: "Website Optimization", description: "Improve visibility and performance with optimization strategies." },
      // { id: 25, icon: <TrendingUp className="w-8 h-8 text-orange-500" />, title: "Marketing Automation & CRM Development", description: "Streamline client engagement with automated systems." },
      { id: 26, icon: <TrendingUp className="w-8 h-8 text-orange-500" />, title: "High-Resolution Image Processing & AI Integrations", description: "Enhance visual experiences with cutting-edge technology." },
    ],
  },
];

export default function ServicesSection() {
  const [visibleCategories, setVisibleCategories] = useState(3);
  const navigate = useNavigate(); // Added useNavigate for navigation

  const handleSeeMore = () => {
    setVisibleCategories((prevCount) => Math.min(prevCount + 1, services.length));
  };

  const handleShowLess = () => {
    setVisibleCategories(3);
  };

  const handleViewDetails = (serviceId) => {
    navigate(`/service/${serviceId}`); // Navigate to the service detail page using the service ID
  };

  return (
    <section id="services" className="py-16 px-4 bg-gradient-to-r from-yellow-50 via-green-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-4 text-gray-800">
          Our Marketing Ministrations
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Ensure your brand growth with a range of services:
        </p>

        {/* Services Categories */}
        {services.slice(0, visibleCategories).map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-8 text-gray-800">
              {category.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((service) => (
                <div
                  key={service.id}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => handleViewDetails(service.id)}
                >
                  <div className="bg-gradient-to-br from-yellow-100 to-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-800">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-base">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* See More / Show Less Button */}
        <div className="text-center mt-8">
          {visibleCategories < services.length ? (
            <button
              onClick={handleSeeMore}
              className="bg-gradient-to-r from-green-600 to-yellow-500 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              See More
            </button>
          ) : (
            <button
              onClick={handleShowLess}
              className="bg-gradient-to-r from-green-600 to-yellow-500 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              Show Less
            </button>
          )}
        </div>

        {/* Why Choose MarketingBirbal Section */}
        <div className="mt-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-8 text-gray-800">
            Why Choose Us?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold mb-2 text-gray-800">
                Smart Strategies Inspired by New-age AI Trends
              </h4>
              <p className="text-gray-600">
                Just like the legendary Birbal’s wit and wisdom, we craft intelligent, innovative, and solution-driven marketing strategies tailored to your brand’s unique needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold mb-2 text-gray-800">
                Brand Transformation Partner
              </h4>
              <p className="text-gray-600">
                Leveraging deep industry insights, extensive experience, and creative expertise, we craft a unique and compelling identity for your brand.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold mb-2 text-gray-800">
                Your All-In-One Growth Solution
              </h4>
              <p className="text-gray-600">
                From enhancing online visibility to building a powerful brand reputation, we offer end-to-end strategies that drive high-quality lead generation and boost sales conversions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}