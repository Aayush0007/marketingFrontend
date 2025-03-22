import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';
// import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Flattened services data from ServicesSection
const servicesData = [
  { id: 0, title: "Billboard Advertising", description: "Maximize your brand’s reach with eye-catching, strategically placed billboards on highways, busy streets, and prime locations.", details: "Our billboard advertising services are designed to maximize your brand’s reach by placing eye-catching billboards in strategic locations such as highways, busy streets, and prime urban areas. We focus on high-visibility spots to ensure your message reaches a wide audience, driving brand awareness and engagement." },
  { id: 1, title: "Hoarding Advertising", description: "Make a bold statement with large outdoor hoardings on prominent buildings and open spaces, ensuring wide visibility.", details: "Our hoarding advertising services allow you to make a bold statement with large-scale outdoor hoardings on prominent buildings and open spaces. We ensure wide visibility by selecting high-traffic locations, helping your brand stand out and capture the attention of potential customers." },
  { id: 2, title: "Digital Out-of-Home (DOOH)", description: "Engage your audience with dynamic, interactive digital displays like LED screens, video walls, and touch-screen kiosks.", details: "Our Digital Out-of-Home (DOOH) services engage your audience with dynamic and interactive digital displays, including LED screens, video walls, and touch-screen kiosks. We leverage cutting-edge technology to create captivating advertisements that drive engagement and leave a lasting impression." },
  { id: 3, title: "Comprehensive Online Strategies", description: "Boost your online presence with result-driven digital marketing plans across social media, search engines, and websites.", details: "Our comprehensive online strategies are designed to boost your online presence through result-driven digital marketing plans. We cover social media, search engines, and websites, ensuring a cohesive approach that maximizes your reach and delivers measurable results." },
  { id: 4, title: "Social Media Marketing", description: "Create impactful campaigns on Facebook, Instagram, Twitter, and LinkedIn to increase brand awareness.", details: "Our social media marketing services create impactful campaigns on platforms like Facebook, Instagram, Twitter, and LinkedIn. We focus on increasing brand awareness by crafting targeted content that resonates with your audience and drives engagement." },
  { id: 5, title: "Search Engine Optimization (SEO)", description: "Optimize your website to rank higher on Google and drive organic traffic.", details: "Our SEO services optimize your website to rank higher on Google, driving organic traffic through comprehensive strategies. We focus on keyword research, on-page and off-page optimization, and technical SEO to ensure your site performs at its best in search results." },
  { id: 6, title: "Pay-Per-Click (PPC) Advertising", description: "Achieve cost-effective customer acquisition through targeted PPC campaigns.", details: "Our Pay-Per-Click (PPC) advertising services help you achieve cost-effective customer acquisition through targeted campaigns. We optimize your ads for maximum ROI, ensuring you reach the right audience at the right time." },
  { id: 7, title: "Content Marketing", description: "Tell your brand’s story with engaging blog posts, articles, videos, and infographics.", details: "Our content marketing services tell your brand’s story through engaging blog posts, articles, videos, and infographics. We create high-quality, SEO-friendly content that informs, engages, and converts your audience." },
  { id: 8, title: "Email Marketing", description: "Connect directly with your audience through personalized email campaigns.", details: "Our email marketing services connect you directly with your audience through personalized campaigns. We design emails that resonate with your subscribers, driving engagement and conversions." },
  { id: 9, title: "Conversion Rate Optimization (CRO)", description: "Enhance your website’s performance to increase visitor actions and conversions.", details: "Our Conversion Rate Optimization (CRO) services enhance your website’s performance to increase visitor actions and conversions. We analyze user behavior and implement data-driven improvements to maximize your site’s effectiveness." },
  { id: 10, title: "Online Reputation Management (ORM)", description: "Protect and manage your brand’s online image by addressing feedback.", details: "Our Online Reputation Management (ORM) services protect and manage your brand’s online image by addressing feedback and reviews. We help you maintain a positive reputation across digital platforms." },
  { id: 11, title: "Video Marketing", description: "Create compelling video content that resonates with your audience.", details: "Our video marketing services create compelling video content that resonates with your audience. We produce high-quality videos that tell your brand’s story and drive engagement across platforms." },
  { id: 12, title: "Analytics and Reporting", description: "Track campaign performance with detailed analytics for data-driven decisions.", details: "Our analytics and reporting services track your campaign performance with detailed insights. We provide data-driven reports to help you make informed decisions and optimize your marketing strategies." },
  { id: 13, title: "Brand Identity Development", description: "Stand out with a unique brand identity, including logo design and messaging.", details: "Our brand identity development services help you stand out with a unique identity, including logo design, messaging, and visual elements. We create a cohesive brand image that resonates with your audience." },
  { id: 14, title: "Campaign Management", description: "Execute impactful marketing campaigns across multiple channels.", details: "Our campaign management services execute impactful marketing campaigns across multiple channels. We handle planning, execution, and optimization to ensure your campaigns deliver maximum results." },
  { id: 15, title: "Event Marketing", description: "Organize memorable events to enhance brand recognition and connections.", details: "Our event marketing services organize memorable events to enhance brand recognition and connections. We manage every detail to create experiences that leave a lasting impression on your audience." },
  { id: 16, title: "Vendor Management", description: "Ensure seamless execution of marketing initiatives with reliable vendors.", details: "Our vendor management services ensure seamless execution of marketing initiatives by working with reliable vendors. We coordinate all aspects to deliver high-quality results on time." },
  { id: 17, title: "Custom Digital Solutions", description: "Craft modern, responsive websites and mobile applications tailored to your needs.", details: "Our custom digital solutions craft modern, responsive websites and mobile applications tailored to your needs. We focus on functionality, design, and performance to deliver solutions that meet your business goals." },
  { id: 18, title: "Full-Stack Development", description: "Frontend and backend solutions using React, Node.js, and PostgreSQL.", details: "Our full-stack development services provide frontend and backend solutions using technologies like React, Node.js, and PostgreSQL. We build robust, scalable applications that integrate seamlessly." },
  { id: 19, title: "E-commerce & SaaS Platforms", description: "Build scalable solutions for online businesses and SaaS applications.", details: "Our e-commerce and SaaS platform services build scalable solutions for online businesses and applications. We focus on user experience, security, and performance to help you grow." },
  { id: 20, title: "Mobile App Development", description: "Develop native Android and cross-platform apps with React Native.", details: "Our mobile app development services develop native Android and cross-platform apps using React Native. We create feature-rich, user-friendly apps that perform flawlessly across devices." },
  { id: 21, title: "UI/UX Design & Prototyping", description: "Create visually appealing and interactive designs with SEO optimization.", details: "Our UI/UX design and prototyping services create visually appealing and interactive designs with SEO optimization. We focus on user experience to ensure your digital products are both beautiful and functional." },
  { id: 22, title: "Optimized Cloud Infrastructure", description: "Deliver scalable, secure, and cost-effective cloud solutions using AWS and Docker.", details: "Our optimized cloud infrastructure services deliver scalable, secure, and cost-effective solutions using AWS and Docker. We ensure your systems are reliable and ready to handle growth." },
  { id: 23, title: "Scalable System & Database Architecture", description: "Build robust backend systems for seamless performance.", details: "Our scalable system and database architecture services build robust backend systems for seamless performance. We design solutions that handle high traffic and ensure reliability." },
  { id: 24, title: "SEO & Website Optimization", description: "Improve visibility and performance with advanced SEO strategies.", details: "Our SEO and website optimization services improve visibility and performance with advanced strategies. We focus on technical SEO, content optimization, and user experience to drive results." },
  { id: 25, title: "Marketing Automation & CRM Development", description: "Streamline client engagement with automated systems.", details: "Our marketing automation and CRM development services streamline client engagement with automated systems. We help you manage leads and customers more effectively." },
  { id: 26, title: "High-Resolution Image Processing & AI Integrations", description: "Enhance visual experiences with cutting-edge technology.", details: "Our high-resolution image processing and AI integration services enhance visual experiences with cutting-edge technology. We leverage AI to create smarter, more engaging solutions." },
];

// const testimonials = [
//   { id: 1, name: 'John Doe', feedback: 'Amazing service! Highly recommended for startups.' },
//   { id: 2, name: 'Jane Smith', feedback: 'Professional and timely delivery. Great team!' },
//   { id: 3, name: 'Mike Johnson', feedback: 'Our website traffic doubled within months!' },
// ];

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

  // Modified scrollToSection to avoid redirecting to homepage unless necessary
  const scrollToSection = (sectionId) => {
    // Check if we're already on the homepage
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn(`Section with ID "${sectionId}" not found on homepage.`);
      }
    } else {
      // If not on homepage, navigate to homepage with the section hash
      navigate(`/#${sectionId}`);
    }
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-500">Loading...</h2>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
        <h2 className="text-2xl font-semibold text-red-500">Service not found</h2>
      </div>
    );
  }

  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <motion.div
        className="max-w-7xl mx-auto p-10 bg-gradient-to-r from-yellow-100 to-green-200 shadow-xl rounded-lg mt-24 transform transition-transform hover:scale-105"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-extrabold mb-8 text-center text-green-800">{service.title}</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center">{service.description}</p>

        <motion.div
          className="mt-10 p-8 bg-white rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-semibold mb-6 text-green-700">Key Features</h3>
          <ul className="list-disc pl-8 space-y-4 text-gray-700">
            <li>Customizable solutions tailored to your needs.</li>
            <li>Cutting-edge technology for performance.</li>
            <li>Seamless user experience with responsive designs.</li>
            <li>Ongoing support and maintenance.</li>
          </ul>
        </motion.div>

        <motion.div
          className="mt-12 p-8 bg-white rounded-xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-semibold text-green-700 mb-6">Detailed Overview</h3>
          <p className="text-gray-700 text-lg leading-relaxed">{service.details}</p>
        </motion.div>

        {/* Testimonials Carousel */}
        {/* <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-3xl font-semibold text-green-700 mb-6 text-center">Client Testimonials</h3>
          <Carousel showArrows={false} showThumbs={false} autoPlay infiniteLoop>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="p-6">
                <p className="text-lg italic text-gray-600">"{testimonial.feedback}"</p>
                <h4 className="mt-4 font-semibold text-green-800">- {testimonial.name}</h4>
              </div>
            ))}
          </Carousel>
        </div> */}

        {/* Related Services */}
        <div className="mt-16 p-8 bg-white rounded-xl shadow-lg">
          <h3 className="text-3xl font-semibold text-green-700 mb-6 text-center">Related Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData
              .filter((s) => s.id !== Number(id))
              .slice(0, 3)
              .map((relatedService) => (
                <div
                  key={relatedService.id}
                  onClick={() => navigate(`/service/${relatedService.id}`)}
                  className="cursor-pointer p-6 bg-yellow-100 hover:bg-yellow-200 rounded-lg shadow-md transition duration-300"
                >
                  <h4 className="text-xl font-semibold text-green-800">{relatedService.title}</h4>
                  <p className="text-gray-700 text-sm mt-2">{relatedService.description}</p>
                </div>
              ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <button
            onClick={() => navigate('/contact')}
            className="bg-green-600 text-white px-10 py-4 rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all"
          >
            Book Your Appointment Now
          </button>
        </motion.div>
      </motion.div>
      <Footer scrollToSection={scrollToSection} />
    </>
  );
};

export default ServiceDetail;
