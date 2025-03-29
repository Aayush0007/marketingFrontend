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
        { id: 3, icon: <Globe className="w-8 h-8 text-[#2F6B47]" />, title: "Comprehensive Online Strategies", description: "Boost your online presence with result-driven digital marketing plans across social media, search engines, and websites." },
        { id: 4, icon: <Users className="w-8 h-8 text-[#2F6B47]" />, title: "Social Media Marketing", description: "Create impactful campaigns on Facebook, Instagram, Twitter, and LinkedIn to increase brand awareness." },
        { id: 5, icon: <Search className="w-8 h-8 text-[#2F6B47]" />, title: "Search Engine Optimization (SEO)", description: "Optimize your website to rank higher on Google and drive organic traffic." },
        { id: 6, icon: <MousePointerClickIcon className="w-8 h-8 text-[#2F6B47]" />, title: "Pay-Per-Click (PPC) Advertising", description: "Achieve cost-effective customer acquisition through targeted PPC campaigns." },
        { id: 7, icon: <FileText className="w-8 h-8 text-[#2F6B47]" />, title: "Content Marketing", description: "Tell your brand’s story with engaging blog posts, articles, videos, and infographics." },
        { id: 8, icon: <Mail className="w-8 h-8 text-[#2F6B47]" />, title: "Email Marketing", description: "Connect directly with your audience through personalized email campaigns." },
        { id: 9, icon: <TrendingUp className="w-8 h-8 text-[#2F6B47]" />, title: "Conversion Rate Optimization (CRO)", description: "Enhance your website’s performance to increase visitor actions and conversions." },
        { id: 10, icon: <Globe className="w-8 h-8 text-[#2F6B47]" />, title: "Online Reputation Management (ORM)", description: "Protect and manage your brand’s online image by addressing feedback." },
        { id: 12, icon: <BarChart className="w-8 h-8 text-[#2F6B47]" />, title: "Analytics and Reporting", description: "Track campaign performance with detailed analytics for data-driven decisions." },
      ],
    },
    // Brand Marketing
    {
      category: "Brand Marketing",
      items: [
        { id: 11, icon: <Video className="w-8 h-8 text-[#2F6B47]" />, title: "Video Marketing", description: "Create compelling video content that resonates with your audience." },
        { id: 13, icon: <Palette className="w-8 h-8 text-[#2F6B47]" />, title: "Brand Identity Development", description: "Stand out with a unique brand identity, including logo design and messaging." },
        { id: 14, icon: <Megaphone className="w-8 h-8 text-[#2F6B47]" />, title: "Campaign Management", description: "Execute impactful marketing campaigns across multiple channels." },
        { id: 15, icon: <Calendar className="w-8 h-8 text-[#2F6B47]" />, title: "Event Marketing", description: "Organize memorable events to enhance brand recognition and connections." },
        { id: 16, icon: <Briefcase className="w-8 h-8 text-[#2F6B47]" />, title: "Vendor Management", description: "Ensure seamless execution of marketing initiatives with reliable vendors." },
      ],
    },
    // Out-of-Home (OOH) Marketing
    {
      category: "Out-of-Home (OOH) Marketing",
      items: [
        { id: 0, icon: <Signpost className="w-8 h-8 text-[#2F6B47]" />, title: "Billboard Advertising", description: "Maximize your brand’s reach with eye-catching, strategically placed billboards on highways, busy streets, and prime locations." },
        { id: 1, icon: <Building className="w-8 h-8 text-[#2F6B47]" />, title: "Hoarding Advertising", description: "Make a bold statement with large outdoor hoardings on prominent buildings and open spaces, ensuring wide visibility." },
        { id: 2, icon: <Monitor className="w-8 h-8 text-[#2F6B47]" />, title: "Digital Out-of-Home (DOOH)", description: "Engage your audience with dynamic, interactive digital displays like LED screens, video walls, and touch-screen kiosks." },
      ],
    },
    // Web & App Development
    {
      category: "Web & App Development",
      items: [
        { id: 17, icon: <Code className="w-8 h-8 text-[#2F6B47]" />, title: "Custom Digital Solutions", description: "Craft modern, responsive websites and mobile applications tailored to your needs." },
        { id: 18, icon: <Code className="w-8 h-8 text-[#2F6B47]" />, title: "Full-Stack Development", description: "Frontend and backend solutions using React, Node.js, and PostgreSQL." },
        { id: 19, icon: <Code className="w-8 h-8 text-[#2F6B47]" />, title: "E-commerce & SaaS Platforms", description: "Build scalable solutions for online businesses and SaaS applications." },
        { id: 20, icon: <Code className="w-8 h-8 text-[#2F6B47]" />, title: "Mobile App Development", description: "Develop native Android and cross-platform apps with React Native." },
        { id: 21, icon: <Palette className="w-8 h-8 text-[#2F6B47]" />, title: "UI/UX Design & Prototyping", description: "Create visually appealing and interactive designs with SEO optimization." },
      ],
    },
    // Cloud & DevOps Solutions
    {
      category: "Cloud & DevOps Solutions",
      items: [
        { id: 22, icon: <Cloud className="w-8 h-8 text-[#2F6B47]" />, title: "Optimized Cloud Infrastructure", description: "Deliver scalable, secure, and cost-effective cloud solutions using AWS and Docker." },
        { id: 23, icon: <Cloud className="w-8 h-8 text-[#2F6B47]" />, title: "Scalable System & Database Architecture", description: "Build robust backend systems for seamless performance." },
      ],
    },
    // Digital Growth & Automation
    {
      category: "Digital Growth & Automation",
      items: [
        { id: 24, icon: <TrendingUp className="w-8 h-8 text-[#2F6B47]" />, title: "Website Optimization", description: "Improve visibility and performance with optimization strategies." },
        { id: 26, icon: <TrendingUp className="w-8 h-8 text-[#2F6B47]" />, title: "High-Resolution Image Processing & AI Integrations", description: "Enhance visual experiences with cutting-edge technology." },
      ],
    },
  ];
  
  export default services;