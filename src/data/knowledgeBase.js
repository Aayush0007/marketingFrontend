const knowledgeBase = {
    // Greetings and Basics
    "hi|hello|hey": "Hi there! Welcome to MarketingBirbal. I’m here to help you grow your business with our awesome marketing and tech solutions. What do you want to talk about today?",
    "who are you|what is this": "We’re MarketingBirbal, your go-to team for digital marketing and tech solutions! We use smart ideas—like billboards, websites, and online ads—to make your business stand out and bring in more customers. What’s on your mind?",
    "what do you do|what’s your job": "We do it all—big billboards, online ads, websites, apps, and more! Whether it’s getting your name out there with a cool sign or building a website that works like magic, we’ve got you covered. What sounds fun for your business?",
  
    // Real Estate and Business-Specific Questions
    "real estate|property|houses": "Running a real estate gig? We can help big time! Think billboards showing off your properties, a website with listings and virtual tours, or ads on Google and Instagram to find buyers fast. What’s your top priority—more sales or more visibility?",
    "how do i sell more|how to get more buyers|more customers": "To get more buyers, we’d mix things up! Eye-catching billboards in busy spots, Google ads for people searching ‘homes for sale,’ and a slick website to seal the deal. We can even post your listings on social media. What’s the first thing you want to try?",
    "how do i advertise|market my business": "Advertising’s our specialty! We can put up big hoardings or digital screens, run online ads, or optimize your website so people find you on Google. It’s all about getting the right eyes on your business. Where do you want to start?",
    "luxury|high-end|expensive": "For luxury stuff, we go all out—fancy billboards in rich areas, stunning videos for your brand, and targeted social media ads for big spenders. Plus, a premium website to match. Ready to wow some high-end clients?",
  
    // Website and Tech Questions
    "website|site|webpage": "Need a website? We’ll make you one that’s modern and easy to use! Think property listings, contact forms, or even a mobile app—all optimized to show up on Google. What do you want your site to do?",
    "how much is a website|cost of site": "Website costs depend on what you want—a simple one’s cheaper, while a fancy one with apps or videos costs more. We’ll keep it affordable and awesome. Want to chat about your budget?",
    "how long to build a website|how fast": "A basic website can be ready in a couple of weeks, but a big one with extras—like an app or cool designs—might take a month. Tell us your timeline, and we’ll make it work!",
    "app|mobile app": "We build apps too! Whether it’s for Android or both iPhone and Android, we use React Native to make them fast and RANDuser-friendly. Perfect for showing listings or chatting with clients. Want an app for your business?",
  
    // Service-Specific Questions
    "billboard|signs": "Our Billboard Advertising puts your brand on huge signs along highways or busy streets. We pick the best spots so tons of people see it—perfect for shouting out your business loud and clear. Want one near you?",
    "hoarding|big ad": "Hoarding Advertising means giant ads on buildings or open spaces. They’re bold, impossible to miss, and great for getting attention. Where do you want your brand to stand tall?",
    "dooh|digital out of home": "DOOH is cool digital billboards—like LED screens or video walls. They show moving ads that grab eyes in places like malls or downtown. Want to try something flashy for your business?",
    "online|digital marketing": "Our Comprehensive Online Strategies boost you online! We handle social media, Google ads, and websites to get you noticed everywhere. What’s your online goal—more clicks or more calls?",
    "social media|facebook|instagram|twitter": "Social Media Marketing means fun posts and ads on Facebook, Instagram, Twitter, or LinkedIn. We’ll make your brand pop and connect with the right people. Which platform’s your favorite?",
    "seo|google|search": "SEO gets your website to the top of Google! We use smart keywords—like ‘best real estate near me’—and tweak your site so more people find you without paying for ads. Want to be #1 in search?",
    "what is seo|explain seo": "SEO’s like a spotlight for your website. It makes Google show you when people search for what you offer. We fix your site with the right words and speed it up—more visitors, no ad costs! Cool, huh?",
    "ppc|ads|pay per click": "PPC is quick ads on Google or social media—you pay only when someone clicks. We target the perfect crowd, like home buyers, to get you leads fast. Want instant results?",
    "what is ppc|explain ppc": "PPC means Pay-Per-Click—online ads where you pay per click. It’s like a fast lane to customers; we show your ad to the right people, and you control the cost. Sound good?",
    "content|blogs|videos": "Gen AI Content Marketing is about telling your story with blogs, videos, or infographics. Think ‘Top Homes in Your City’ or a video tour—keeps people hooked and trusting you. What story do you want to share?",
    "email|emails": "Email Marketing sends personal messages—like ‘New Listings!’—to your customers. We design emails that get opened and turn readers into buyers. Ready to start emailing?",
    "cro|conversion": "Conversion Rate Optimization (CRO) makes your website better at turning visitors into customers. We tweak buttons or forms so more people act. Want more sales from your site?",
    "orm|reputation": "Online Reputation Management (ORM) keeps your brand looking good online. We handle reviews and feedback so people trust you. Worried about what’s out there?",
    "video|video marketing": "Video Marketing means awesome videos that show off your business. We make them catchy and shareable—great for properties or ads. Want a video that wows?",
    "analytics|reports": "Analytics and Reporting tracks how your ads or site are doing. We give you easy reports to see what’s working and what to tweak. Want to know your numbers?",
    "brand|branding": "Brand Identity Development gives you a unique look—logos, colors, and messages that stick. We make sure you stand out. Ready to refresh your brand?",
    "campaign|campaigns": "Campaign Management runs big marketing plans across channels—like ads and social media. We handle it all for max impact. Got a big idea in mind?",
    "event|events": "Event Marketing creates fun events to boost your brand. Think open houses or launches—we make them memorable. Want to throw an event?",
    "vendor|vendors": "Vendor Management means we work with trusted partners to get your marketing done right. No stress, just results. Need help with a big project?",
    "custom|digital solutions": "Custom Digital Solutions build websites or apps just for you. Modern, fast, and perfect for your goals. What tech do you need?",
    "full stack|development": "Full-Stack Development means we build everything—front and back of your site or app—using React, Node.js, and more. Want something sturdy?",
    "ecommerce|saas|online store": "E-commerce & SaaS Platforms create online shops or tools that grow with you. Secure and easy to use—perfect for selling. Thinking of going online?",
    "mobile app|app development": "Mobile App Development makes apps for Android or any phone with React Native. Fast, fun, and feature-packed. Want your own app?",
    "ui ux|design": "UI/UX Design & Prototyping makes your site or app look great and feel easy. We design with users in mind—plus SEO perks! Want a pretty design?",
    "cloud|aws|docker": "Optimized Cloud Infrastructure uses AWS and Docker for secure, scalable tech. It grows with you—no crashes! Need reliable systems?",
    "system|database": "Scalable System & Database Architecture builds strong backends that handle tons of users. Smooth and solid—ready for big traffic?",
    "seo website|optimization": "SEO & Website Optimization boosts your site’s speed and Google rank with advanced tricks. More visitors, better results. Want a faster site?",
    "automation|crm": "Marketing Automation & CRM Development saves time with smart systems for leads and clients. We streamline it all. Need an easier way to manage?",
    "image|ai|high resolution": "High-Resolution Image Processing & AI Integrations makes your visuals pop with smart tech. Think sharper pics or AI tools. Want something cutting-edge?",
  
    // General Business and About Us
    "grow|more money|success": "To grow, we’d use billboards, online ads, a killer website, or apps—whatever fits you! We focus on more leads and sales. What’s your big goal?",
    "cheap|low cost|budget": "We’ve got budget-friendly options! Start with social media or a simple site with SEO—big impact, small price. What’s your budget like?",
    "vision|goal": "Our vision is to rock marketing with AI, helping businesses like yours grow huge in the digital world. What’s your dream for your business?",
    "mission|purpose": "Our mission is to give you smart, AI-powered marketing and tech that boosts sales and makes life easy. Ready to level up?",
    "team|who runs|founder": "We’re led by a brilliant woman who knows marketing inside out. Her ideas and our team make your business shine. Want to see her magic for you?",
    "why you|why choose": "Choose us for AI-smart marketing, custom plans, and real results. We’re your all-in-one growth crew—billboards to apps! Ready for the difference?",
    "different|unique": "We mix classic stuff like signs with techy stuff like AI ads—all tailored for you. No boring templates here! Sound like your vibe?",
  
    // Contact and Next Steps
    "contact|talk|reach": "Let’s talk! Go to /contact, fill out the form, and we’ll reply fast with a plan for you. What do you want to discuss?",
    "start|next step": "Starting’s simple—tell us what you need (ads, site, app), and we’ll suggest the best move. Or hit /contact. What’s step one for you?",
    "price|cost|how much": "Costs vary—like a small ad’s cheap, a full app’s more—but we keep it fair. Tell us what you’re after, and we’ll give you a ballpark. What’s your budget?",
  
    // Fallback
    "default": "Oops, didn’t catch that! I can help with ads, websites, apps, or anything to grow your business. What’s on your mind?"
  };
  
  export default knowledgeBase;