const knowledgeBase = {
  en: {
    // Greetings and General Inquiries
    "hi|hello|greetings|hey|yo": [
      "Hey there! Welcome to MarketingBirbal, where AI-powered strategies turn your business dreams into reality. What’s on your mind today? Try asking about our services or type ‘help’ for ideas!",
      "Hello! I’m BirbalBot, your guide to MarketingBirbal’s innovative solutions. Ready to grow your business? Ask about digital marketing, billboards, or anything else!",
      "Hi! Excited to connect! MarketingBirbal specializes in everything from websites to ads. What’s your next big goal?"
    ],
    "what can you do|what do you offer|services|capabilities": [
      "We’re your growth partner! Our services include digital marketing (SEO, PPC, social media), billboard and DOOH advertising, web and app development, and AI-driven solutions. Want to explore one? Ask about SEO or our billboard campaigns!",
      "MarketingBirbal offers a full suite: digital marketing, outdoor ads, custom websites, mobile apps, and more. What’s the biggest challenge your business faces right now?",
      "From stunning websites to targeted ad campaigns, we’ve got you covered. Curious about a specific service? Try ‘social media’ or ‘AI solutions’!"
    ],
    "who are you|about us|team|founder|mission": [
      "MarketingBirbal, founded by a marketing visionary, blends creativity and AI to drive growth. Our digipreneur team crafts tailored solutions. Want to hear our story?",
      "We’re a passionate team of marketers and tech experts, led by a founder who loves education and innovation. Curious about our mission? Ask away!",
      "Our mission? Empower businesses with smart, AI-driven marketing. We’re a team of dreamers and doers. Want to know more about our journey?"
    ],
    "why choose|what sets you apart|unique|why you": [
      "We combine Birbal’s wit with cutting-edge AI for unmatched results. From billboards to apps, our tailored strategies shine. Ready to see the difference?",
      "What makes us special? Our blend of traditional and digital marketing, powered by AI and creativity. Want to hear a success story?",
      "We’re growth partners, not just marketers. Our data-driven, innovative solutions set us apart. Ask about our case studies!"
    ],

    // Industry-Specific Queries
    "real estate|property|houses|homes|listing": [
      "Real estate pro? We boost your listings with vibrant billboards, SEO for local searches, and virtual tour websites. Want to attract more buyers? Ask me how!",
      "Stand out in real estate with our targeted PPC ads, DOOH campaigns, and custom apps for property tours. What’s your market focus?",
      "Let’s sell those properties! We offer social media campaigns and SEO to drive leads. Interested in a strategy for luxury homes or rentals?"
    ],
    "ecommerce|online store|shop|retail": [
      "E-commerce is our jam! We build SEO-optimized online stores, run PPC campaigns, and add AI-driven personalization. Need cart recovery or product pages? Ask away!",
      "Grow your online store with our custom platforms, email marketing, and social ads. What’s your biggest e-commerce challenge?",
      "From Shopify integrations to conversion-focused UX, we scale your shop. Want to discuss checkout optimization or ad strategies?"
    ],
    "hospitality|restaurant|hotel|tourism|travel": [
      "Hospitality hero? We create stunning websites, local SEO, and billboard ads to attract guests. Promoting a new menu or hotel deal? Let’s talk!",
      "Drive bookings with our targeted digital ads, loyalty apps, and DOOH campaigns. What’s your hospitality goal—more guests or brand buzz?",
      "Make your restaurant or hotel the talk of the town with video marketing and social campaigns. Ask about our tourism-focused strategies!"
    ],
    "healthcare|hospital|clinic|doctor": [
      "In healthcare? We build trust with HIPAA-compliant websites, local SEO, and patient-focused social campaigns. Want to attract more patients? Ask me!",
      "Our healthcare marketing includes PPC for clinics, content for patient education, and apps for appointments. What’s your specialty?",
      "Grow your practice with our tailored strategies, from Google My Business optimization to video testimonials. Interested in a free audit?"
    ],
    "education|school|college|coaching|edtech": [
      "Educators, we’ve got you! We create engaging websites, run social media for student outreach, and optimize SEO for courses. Need enrollment boosts? Ask how!",
      "From edtech apps to billboard campaigns, we help schools and colleges shine. What’s your education marketing goal?",
      "Our education solutions include e-learning platforms and targeted ads. Want to promote a new course or campus event?"
    ],
    "startup|new business|entrepreneur": [
      "Starting up? We offer affordable websites, digital ads, and branding to get you noticed. Want a lean marketing plan? Let’s chat!",
      "Grow your startup with our SEO, social media, and app development services. What’s your biggest hurdle—funding or visibility?",
      "We love startups! From pitch deck designs to online presence, we help you scale. Ask about our startup-friendly packages!"
    ],

    // Marketing Services
    "digital marketing|online marketing|internet ads": [
      "Digital marketing is our superpower! We cover SEO, PPC, social media, and content to boost your brand. Want to focus on Instagram or Google Ads?",
      "Our digital strategies include targeted ads, SEO for organic growth, and analytics for insights. How can we elevate your online game?",
      "Ready to dominate online? We offer end-to-end digital marketing. Ask about our success stories or a free strategy session!"
    ],
    "social media|facebook|instagram|twitter|linkedin|tiktok": [
      "Social media is where brands thrive! We create posts and ads for Instagram, LinkedIn, TikTok, and more. Which platform do you want to own?",
      "Amplify your social presence with Reels, LinkedIn articles, or Twitter campaigns. Want a sample social media plan?",
      "From viral TikTok videos to professional LinkedIn posts, we grow your audience. Ask about our social media packages!"
    ],
    "seo|search engine optimization|google ranking|local seo": [
      "SEO puts you on Google’s first page! We optimize keywords, speed, and backlinks for organic traffic. Want a free SEO audit?",
      "Our SEO services boost rankings with on-page and technical tweaks. Curious about your site’s performance? Ask me!",
      "Local or global, our SEO drives traffic. We specialize in Google My Business and keyword strategies. Interested in local SEO?"
    ],
    "ppc|pay per click|google ads|meta ads": [
      "PPC delivers fast results! We run targeted campaigns on Google and Meta to drive clicks and sales. Got a budget in mind?",
      "Pay-per-click ads put your brand in front of the right eyes. We optimize bids and creatives. Want to try Google Ads?",
      "PPC maximizes ROI with smart campaigns. Ask about setting up a Google or Meta ad campaign today!"
    ],
    "content marketing|blogs|videos|articles|infographics": [
      "Content marketing tells your story! We create blogs, videos, and infographics that engage. Need a content plan? Ask me!",
      "Great content drives loyalty. We produce blogs, social posts, and videos for your audience. Want to see examples?",
      "From blog series to animated videos, our content converts. Ask about storytelling or our content process!"
    ],
    "email marketing|newsletters|email campaigns|automation": [
      "Email marketing builds connections! We design personalized campaigns to drive sales. Want a sample email template?",
      "Our email services include automated campaigns and newsletters. Perfect for promotions! What’s your email goal?",
      "Engage your audience with high-open-rate emails. Ask about our automation tools or campaign strategies!"
    ],
    "billboard|outdoor advertising|signs|hoarding": [
      "Billboards make your brand bold! We place eye-catching ads in high-traffic areas. Interested in local or nationwide campaigns?",
      "Our billboard ads grab attention on highways and streets. Want to discuss locations or designs?",
      "Outdoor advertising is powerful. We handle design to placement. Ask about our billboard portfolio!"
    ],
    "dooh|digital out of home|led screen|digital billboard": [
      "DOOH ads captivate with vibrant LED screens. Perfect for dynamic campaigns! Want to explore DOOH locations?",
      "Digital Out-of-Home brings ads to life with video displays. We target high-traffic areas. Ask about DOOH options!",
      "Our DOOH solutions include interactive screens and video walls. Curious about costs or creative ideas?"
    ],

    // Web and App Development
    "website|webpage|site|online presence": [
      "Your website is your digital storefront! We build responsive, SEO-optimized sites with e-commerce or bookings. What features do you need?",
      "Our web team creates modern, user-friendly sites using React and Node.js. Want to discuss design or functionality?",
      "A stunning website sets you apart. We build fast, scalable sites. Ask about our portfolio or a free mockup!"
    ],
    "app|mobile app|application|ios|android": [
      "Mobile apps engage customers! We develop Android and cross-platform apps with React Native. What app features do you want?",
      "Our app development creates seamless iOS and Android experiences. Interested in loyalty or e-commerce apps?",
      "Apps drive interaction. We build scalable, user-friendly solutions. Ask about timelines or costs!"
    ],
    "ui ux|design|user experience|interface": [
      "Great UI/UX makes your site or app delightful. We create intuitive, stunning designs. Need a redesign or UX tweaks?",
      "User experience drives conversions! Our UI/UX designs are SEO-friendly and engaging. Want to see our portfolio?",
      "We craft interfaces that wow users. Ask about our UI/UX process or prototyping services!"
    ],

    // Pricing, Process, and Objections
    "price|cost|how much|budget|quote": [
      "Pricing varies by project. A basic website or ad campaign is affordable, while custom apps are premium. Share your needs for a tailored quote!",
      "We offer flexible pricing to fit your budget. What’s your project, and what’s your budget range?",
      "Costs depend on scope. A simple site is budget-friendly; AI-powered apps are more involved. Want a ballpark estimate?"
    ],
    "how long|timeline|timeframe|duration": [
      "Timelines vary. A basic website takes 2-4 weeks, while apps or campaigns may take a month+. What’s your launch date?",
      "We work fast without cutting corners! Simple projects take weeks; complex ones need more. Want to discuss your timeline?",
      "From concept to launch, we streamline. Basic sites are quick; apps take longer. What’s your project scope?"
    ],
    "process|how it works|start project|next steps": [
      "Starting is easy! We discuss your goals, craft a plan, and execute with updates. Ready to kick off? Share your vision!",
      "Our process: consult, strategize, develop, launch. You’re in the loop every step. Want a free consultation?",
      "We begin with a chat, then build a custom plan. From design to delivery, we’ve got you. What’s your first step?"
    ],
    "too expensive|costly|budget concern|affordable": [
      "We get budget concerns! We offer scalable solutions to fit your wallet, from basic packages to premium. Want a cost-effective plan?",
      "No need to break the bank! We can start small with high-impact services like SEO or social ads. What’s your budget range?",
      "Our flexible pricing ensures value. Let’s find a solution that meets your goals and budget. Ask about our starter packages!"
    ],
    "why not cheaper|competitor pricing|better deal": [
      "We focus on quality and results, not just low prices. Our AI-driven strategies deliver higher ROI than budget competitors. Want to compare value?",
      "Cheaper isn’t always better! We offer tailored solutions with proven results. Curious about our success stories?",
      "Our pricing reflects expertise and innovation. Let’s discuss how we can maximize your budget’s impact!"
    ],

    // FAQs and Technical Queries
    "case study|success story|results|examples": [
      "Our case studies show real results! From doubling e-commerce sales to boosting real estate leads, we deliver. Want a specific example?",
      "We’ve helped businesses soar with SEO, PPC, and apps. Interested in a case study for your industry?",
      "Success stories? Plenty! Ask about our real estate billboard campaign or e-commerce SEO wins!"
    ],
    "analytics|tracking|roi|performance": [
      "We track every campaign with detailed analytics to measure ROI. Want to know how we monitor SEO or PPC performance?",
      "Our analytics tools show clicks, conversions, and more. Interested in a sample report for digital ads?",
      "ROI is key! We use data to optimize campaigns. Ask about our tracking process or tools!"
    ],
    "maintenance|support|updates": [
      "We offer ongoing maintenance for websites and apps, with updates and support. Need a maintenance plan? Ask me!",
      "Our support team keeps your site or campaign running smoothly. Want to know about our support packages?",
      "Post-launch, we provide updates and fixes. Curious about our website or app maintenance services?"
    ],
    "urgent|emergency|rush|asap": [
      "Need it fast? We prioritize urgent projects with expedited timelines. Share your deadline, and let’s make it happen!",
      "Got an ASAP need? We can fast-track websites or campaigns. What’s your urgency and goal?",
      "Urgent projects are our specialty! Tell me your timeline, and we’ll deliver. Ask about rush options!"
    ],

    // Contact and Support
    "contact|talk|reach out|get in touch|consultation": [
      "Let’s connect! Email connectmarketingbirbal@gmail.com or call +91-7691863302. Prefer a chat? Ask for a free consultation!",
      "Ready to talk? Reach us at connectmarketingbirbal@gmail.com or +91-7691863302. What’s your vision?",
      "We’re here! Email connectmarketingbirbal@gmail.com or call +91-7691863302 to start. Want to schedule a call?"
    ],
    "help|support|troubleshoot|issue": [
      "Need help? I can answer service questions or guide you to our team. What’s the issue?",
      "I’m here for you! Got a question about marketing or a tech problem? Let me know!",
      "Facing a problem? I can help with services or connect you with support. What’s up?"
    ],

    // Fallback and Help Menu
    "default|unknown|not sure|confused": [
      "Hmm, I might’ve missed that! I can help with marketing, websites, billboards, or apps. Try ‘services’ or ‘help’ for ideas!",
      "Not sure I got that. Ask about digital marketing, web development, or anything else! Type ‘help’ for topics!",
      "Let’s try again! I’m ready to answer about our services or guide you. Type ‘help’ for a list!"
    ],
    "help|menu|options|what can i ask": [
      "Here’s what I can do:\n- **Services**: SEO, PPC, social media, billboards, web/apps\n- **Industries**: Real estate, e-commerce, hospitality, more\n- **Pricing**: Costs and timelines\n- **About Us**: Our team and mission\n- **Contact**: Reach us\nAsk anything or try ‘SEO’ or ‘contact’!",
      "I’ve got answers for:\n- Digital marketing (SEO, PPC, social)\n- Outdoor ads (billboards, DOOH)\n- Web/app development\n- Costs and processes\n- Our story\nJust type a keyword or question!",
      "Not sure? Try:\n- Marketing services\n- Billboards/DOOH\n- Website/app creation\n- Pricing or timelines\n- Who we are\nPick a topic or ask away!"
    ]
  },
  hi: {
    // Greetings and General Inquiries
    "हाय|हेलो|नमस्ते|हायो": [
      "हाय! मार्केटिंग बिरबल में स्वागत है, जहां AI-संचालित रणनीतियां आपके बिजनेस के सपनों को सच करती हैं। आज क्या जानना चाहते हैं? ‘सेवाएं’ या ‘मदद’ आजमाएं!",
      "नमस्ते! मैं बिरबल बॉट हूँ, मार्केटिंग बिरबल का मार्गदर्शक। अपने बिजनेस को बढ़ाने के लिए तैयार? डिजिटल मार्केटिंग या बिलबोर्ड के बारे में पूछें!",
      "हाय! आपसे जुड़कर खुशी हुई! मार्केटिंग बिरबल वेबसाइट्स से लेकर विज्ञापनों तक सबकुछ करता है। आपका अगला लक्ष्य क्या है?"
    ],
    "what can you do|what do you offer|services|capabilities|सेवाएं|सर्विस|क्या कर सकते हो": [
      "हम आपके विकास के साथी हैं! हमारी सेवाओं में डिजिटल मार्केटिंग (SEO, PPC, सोशल मीडिया), बिलबोर्ड और DOOH विज्ञापन, वेब और ऐप डेवलपमेंट, और AI-संचालित समाधान शामिल हैं। किसी एक को जानना है? SEO या बिलबोर्ड पूछें!",
      "मार्केटिंग बिरबल सबकुछ देता है: डिजिटल मार्केटिंग, बाहरी विज्ञापन, कस्टम वेबसाइट्स, मोबाइल ऐप्स। आपके बिजनेस की सबसे बड़ी चुनौती क्या है?",
      "शानदार वेबसाइट्स से लेकर टारगेटेड विज्ञापनों तक, हम तैयार हैं। कोई खास सेवा जानना चाहते हैं? ‘सोशल मीडिया’ या ‘AI समाधान’ पूछें!"
    ],
    "who are you|about us|team|founder|mission|हम कौन हैं|टीम|संस्थापक": [
      "मार्केटिंग बिरबल की स्थापना एक मार्केटिंग दूरदर्शी ने की, जो रचनात्मकता और AI को मिलाता है। हमारी डिजीप्रेन्योर टीम अनुकूलित समाधान देती है। हमारी कहानी जानना चाहते हैं?",
      "हम मार्केटर्स और टेक विशेषज्ञों की उत्साही टीम हैं, जिसका नेतृत्व एक नवाचार प्रेमी करता है। हमारा मिशन जानना चाहते हैं?",
      "हमारा मिशन? स्मार्ट, AI-संचालित मार्केटिंग से बिजनेस को सशक्त करना। हम सपने देखने वाले और करने वाले हैं। हमारी यात्रा के बारे में और जानें?"
    ],
    "why choose|what sets you apart|unique|why you|हमें क्यों चुनें|खास क्या है": [
      "हम बिरबल की बुद्धि को AI के साथ मिलाते हैं। बिलबोर्ड से ऐप्स तक, हमारी रणनीतियां चमकती हैं। अंतर देखने को तैयार?",
      "हमारा खासपन? पारंपरिक और डिजिटल मार्केटिंग का मिश्रण, AI और रचनात्मकता के साथ। सफलता की कहानी सुनना चाहते हैं?",
      "हम सिर्फ मार्केटर्स नहीं, विकास साझेदार हैं। हमारी डेटा-संचालित रणनीतियां हमें अलग करती हैं। केस स्टडीज पूछें!"
    ],

    // Industry-Specific Queries
    "real estate|property|houses|homes|listing|रियल एस्टेट|प्रॉपर्टी|घर|लिस्टिंग": [
      "रियल एस्टेट में हैं? हम बिलबोर्ड्स, लोकल SEO, और वर्चुअल टूर वेबसाइट्स के साथ आपकी लिस्टिंग्स को चमकाते हैं। ज्यादा खरीदार चाहते हैं? पूछें कैसे!",
      "रियल एस्टेट में अलग दिखें! हम PPC विज्ञापन, DOOH, और प्रॉपर्टी टूर ऐप्स देते हैं। आपका मार्केट फोकस क्या है?",
      "प्रॉपर्टी बेचें! हम सोशल मीडिया और SEO से लीड्स लाते हैं। लग्जरी होम्स या किराए के लिए रणनीति चाहिए?"
    ],
    "ecommerce|online store|shop|retail|ई-कॉमर्स|ऑनलाइन स्टोर|दुकान": [
      "ई-कॉमर्स हमारा जुनून है! हम SEO-ऑप्टिमाइज़्ड स्टोर्स, PPC, और AI-पर्सनलाइज़ेशन बनाते हैं। कार्ट रिकवरी या प्रोडक्ट पेज चाहिए?",
      "कस्टम प्लेटफॉर्म्स, ईमेल मार्केटिंग, और सोशल विज्ञापनों से ऑनलाइन स्टोर बढ़ाएं। आपकी ई-कॉमर्स चुनौती क्या है?",
      "Shopify इंटीग्रेशन्स से लेकर कन्वर्जन-फोकस्ड UX तक, हम आपके स्टोर को स्केल करते हैं। चेकआउट ऑप्टिमाइज़ेशन पूछें?"
    ],
    "hospitality|restaurant|hotel|tourism|travel|हॉस्पिटैलिटी|रेस्तरां|होटल|पर्यटन": [
      "हॉस्पिटैलिटी में हैं? हम शानदार वेबसाइट्स, लोकल SEO, और बिलबोर्ड्स से मेहमानों को आकर्षित करते हैं। नया मेन्यू या होटल डील प्रमोट करें?",
      "टारगेटेड डिजिटल विज्ञापन, लॉयल्टी ऐप्स, और DOOH से बुकिंग्स बढ़ाएं। आपका हॉस्पिटैलिटी लक्ष्य क्या है?",
      "रेस्तरां या होटल को मशहूर करें! वीडियो मार्केटिंग और सोशल कैंपेन से। पर्यटन रणनीतियां पूछें!"
    ],
    "healthcare|hospital|clinic|doctor|हेल्थकेयर|अस्पताल|क्लिनिक|डॉक्टर": [
      "हेल्थकेयर में हैं? हम HIPAA-कंप्लायंट वेबसाइट्स, लोकल SEO, और सोशल कैंपेन से भरोसा बनाते हैं। ज्यादा मरीज चाहिए? पूछें!",
      "हमारी हेल्थकेयर मार्केटिंग में क्लिनिक्स के लिए PPC, पेशेंट एजुकेशन कंटेंट, और ऐप्स शामिल हैं। आपकी विशेषता क्या है?",
      "अपनी प्रैक्टिस बढ़ाएं! Google My Business ऑप्टिमाइज़ेशन से लेकर वीडियो टेस्टिमोनियल्स तक। मुफ्त ऑडिट चाहिए?"
    ],
    "education|school|college|coaching|edtech|शिक्षा|स्कूल|कॉलेज|कोचिंग|एडटेक": [
      "शिक्षक हैं? हम आकर्षक वेबसाइट्स, स्टूडेंट्स के लिए सोशल मीडिया, और SEO से मदद करते हैं। एनरोलमेंट बढ़ाना है? पूछें!",
      "एडटेक ऐप्स से लेकर बिलबोर्ड्स तक, हम स्कूलों को चमकाते हैं। आपका शिक्षा मार्केटिंग लक्ष्य क्या है?",
      "हम ई-लर्निंग प्लेटफॉर्म्स और टारगेटेड विज्ञापन देते हैं। नया कोर्स या कैंपस इवेंट प्रमोट करें?"
    ],
    "startup|new business|entrepreneur|स्टार्टअप|नया बिजनेस|उद्यमी": [
      "स्टार्टअप शुरू कर रहे हैं? हम किफायती वेबसाइट्स, डिजिटल विज्ञापन, और ब्रांडिंग देते हैं। लीन मार्केटिंग प्लान चाहिए?",
      "SEO, सोशल मीडिया, और ऐप डेवलपमेंट से स्टार्टअप बढ़ाएं। आपकी सबसे बड़ी बाधा क्या है—फंडिंग या दृश्यता?",
      "हमें स्टार्टअप्स पसंद हैं! पिच डेक डिज़ाइन्स से लेकर ऑनलाइन उपस्थिति तक। स्टार्टअप पैकेज पूछें!"
    ],

    // Marketing Services
    "digital marketing|online marketing|internet ads|डिजिटल मार्केटिंग|ऑनलाइन मार्केटिंग": [
      "डिजिटल मार्केटिंग हमारी ताकत है! हम SEO, PPC, सोशल मीडिया, और कंटेंट से आपका ब्रांड बढ़ाते हैं। Instagram या Google Ads पर फोकस करना चाहते हैं?",
      "हमारी डिजिटल रणनीतियां टारगेटेड विज्ञापन, SEO, और एनालिटिक्स देती हैं। आपके ऑनलाइन गेम को कैसे बेहतर करें?",
      "ऑनलाइन दबदबा बनाएं! हम पूरी डिजिटल मार्केटिंग देते हैं। सफलता की कहानियां या मुफ्त सत्र पूछें!"
    ],
    "social media|facebook|instagram|twitter|linkedin|tiktok|सोशल मीडिया": [
      "सोशल मीडिया वह जगह है जहां ब्रांड जीवंत होते हैं! हम Instagram, LinkedIn, TikTok के लिए पोस्ट और विज्ञापन बनाते हैं। कौन सा प्लेटफॉर्म जीतना चाहते हैं?",
      "Reels, LinkedIn लेख, या Twitter कैंपेन से सोशल उपस्थिति बढ़ाएं। सोशल मीडिया प्लान का नमूना चाहिए?",
      "वायरल TikTok वीडियो से लेकर प्रोफेशनल LinkedIn पोस्ट तक, हम आपके फॉलोअर्स बढ़ाते हैं। पैकेज पूछें!"
    ],
    "seo|search engine optimization|google ranking|local seo|एसईओ|गूगल रैंकिंग": [
      "SEO आपको Google के पहले पेज पर लाता है! हम कीवर्ड्स, स्पीड, और बैकलिंक्स ऑप्टिमाइज़ करते हैं। मुफ्त SEO ऑडिट चाहिए?",
      "हमारी SEO सेवाएं ऑन-पेज और टेक्निकल ट्वीक्स से रैंकिंग बढ़ाती हैं। आपकी साइट का प्रदर्शन जानना है?",
      "लोकल या ग्लोबल, हमारी SEO ट्रैफिक लाती है। Google My Business और कीवर्ड रणनीतियां। लोकल SEO चाहिए?"
    ],
    "ppc|pay per click|google ads|meta ads|पीपीसी|गूगल विज्ञापन": [
      "PPC तेज़ परिणाम देता है! हम Google और Meta पर टारगेटेड कैंपेन चलाते हैं। बजट तय है?",
      "पे-पर-क्लिक विज्ञापन आपके ब्रांड को सही लोगों तक पहुंचाते हैं। हम बोली और क्रिएटिव्स ऑप्टिमाइज़ करते हैं। Google Ads आजमाएं?",
      "PPC से ROI बढ़ता है। Google या Meta विज्ञापन कैंपेन सेटअप पूछें!"
    ],
    "content marketing|blogs|videos|articles|infographics|कंटेंट मार्केटिंग|ब्लॉग|वीडियो": [
      "कंटेंट मार्केटिंग आपकी कहानी सुनाता है! हम ब्लॉग, वीडियो, और इन्फोग्राफिक्स बनाते हैं। कंटेंट प्लान चाहिए?",
      "शानदार कंटेंट ग्राहकों को लाता है। हम ब्लॉग, सोशल पोस्ट, और वीडियो बनाते हैं। उदाहरण देखें?",
      "ब्लॉग सीरीज़ से लेकर एनिमेटेड वीडियो तक, हमारा कंटेंट कन्वर्ट करता है। स्टोरीटेलिंग पूछें!"
    ],
    "email marketing|newsletters|email campaigns|automation|ईमेल मार्केटिंग|न्यूज़लेटर": [
      "ईमेल मार्केटिंग से कनेक्शन बनता है! हम पर्सनलाइज़्ड कैंपेन डिज़ाइन करते हैं। ईमेल टेम्पलेट का नमूना चाहिए?",
      "हमारी ईमेल सेवाएं ऑटोमेटेड कैंपेन और न्यूज़लेटर देती हैं। आपका ईमेल लक्ष्य क्या है?",
      "हाई-ओपन-रेट ईमेल्स से जुड़ें। ऑटोमेशन टूल्स या कैंपेन रणनीतियां पूछें!"
    ],
    "billboard|outdoor advertising|signs|hoarding|बिलबोर्ड|आउटडोर विज्ञापन|होर्डिंग": [
      "बिलबोर्ड आपके ब्रांड को बोल्ड बनाते हैं! हम हाई-ट्रैफिक क्षेत्रों में विज्ञापन लगाते हैं। लोकल या नेशनवाइड कैंपेन चाहिए?",
      "हमारे बिलबोर्ड विज्ञापन सड़कों पर ध्यान खींचते हैं। लोकेशन या डिज़ाइन पूछें?",
      "आउटडोर विज्ञापन प्रभावी है। डिज़ाइन से लेकर प्लेसमेंट तक हम संभालते हैं। पोर्टफोलियो पूछें!"
    ],
    "dooh|digital out of home|led screen|digital billboard|डीओओएच|डिजिटल बिलबोर्ड": [
      "DOOH विज्ञापन LED स्क्रीन्स पर चमकते हैं। डायनामिक कैंपेन के लिए बेस्ट! DOOH लोकेशन पूछें?",
      "डिजिटल आउट-ऑफ-होम वीडियो डिस्प्ले के साथ विज्ञापन को जीवंत करता है। DOOH विकल्प पूछें!",
      "हमारे DOOH समाधान में इंटरैक्टिव स्क्रीन्स शामिल हैं। लागत या क्रिएटिव आइडिया जानना है?"
    ],

    // Web and App Development
    "website|webpage|site|online presence|वेबसाइट|वेबपेज|साइट": [
      "आपकी वेबसाइट आपका डिजिटल स्टोरफ्रंट है! हम SEO-ऑप्टिमाइज़्ड, रिस्पॉन्सिव साइट्स बनाते हैं। आपको कौन से फीचर्स चाहिए?",
      "हमारी वेब टीम React और Node.js से यूज़र-फ्रेंडली साइट्स बनाती है। डिज़ाइन या फंक्शनैलिटी पूछें?",
      "शानदार वेबसाइट आपको अलग करती है। हम तेज़, स्केलेबल साइट्स बनाते हैं। पोर्टफोलियो या मुफ्त मॉकअप पूछें!"
    ],
    "app|mobile app|application|ios|android|ऐप|मोबाइल ऐप": [
      "मोबाइल ऐप्स ग्राहकों को जोड़ते हैं! हम React Native से Android और क्रॉस-प्लेटफॉर्म ऐप्स बनाते हैं। कौन से फीचर्स चाहिए?",
      "हमारी ऐप डेवलपमेंट iOS और Android के लिए अनुभव देती है। लॉयल्टी या ई-कॉमर्स ऐप्स चाहिए?",
      "ऐप्स इंटरैक्शन बढ़ाते हैं। हम स्केलेबल, यूज़र-फ्रेंडली समाधान बनाते हैं। टाइमलाइन या लागत पूछें!"
    ],
    "ui ux|design|user experience|interface|यूआई यूएक्स|डिज़ाइन|उपयोगकर्ता अनुभव": [
      "शानदार UI/UX आपकी साइट या ऐप को आनंददायक बनाता है। हमें रीडिज़ाइन या UX ट्वीक्स चाहिए?",
      "उपयोगकर्ता अनुभव कन्वर्जन बढ़ाता है! हमारे UI/UX डिज़ाइन SEO-फ्रेंडली हैं। पोर्टफोलियो देखें?",
      "हम इंटरफेस बनाते हैं जो यूज़र्स को वाह करते हैं। UI/UX प्रक्रिया या प्रोटोटाइपिंग पूछें!"
    ],

    // Pricing, Process, and Objections
    "price|cost|how much|budget|quote|कीमत|लागत|कितना|बजट": [
      "कीमत प्रोजेक्ट के दायरे पर निर्भर करती है। बेसिक वेबसाइट या विज्ञापन किफायती हैं, कस्टम ऐप्स प्रीमियम हैं। अपनी ज़रूरतें बताएं!",
      "हम आपके बजट के लिए लचीली कीमत देते हैं। आपका प्रोजेक्ट और बजट रेंज क्या है?",
      "लागत स्कोप पर निर्भर करती है। साधारण साइट किफायती; AI ऐप्स में अधिक लागत। अनुमान चाहिए?"
    ],
    "how long|timeline|timeframe|duration|कितना समय|टाइमलाइन": [
      "टाइमलाइन प्रोजेक्ट पर निर्भर करती है। बेसिक वेबसाइट 2-4 हफ्ते, ऐप्स या कैंपेन को महीना+। आपकी लॉन्च डेट क्या है?",
      "हम तेज़ी से बिना गुणवत्ता खोए काम करते हैं! साधारण प्रोजेक्ट्स हफ्तों में; जटिल को समय चाहिए। टाइमलाइन पूछें?",
      "कॉन्सेप्ट से लॉन्च तक, हम सुव्यवस्थित करते हैं। बेसिक साइट्स जल्दी; ऐप्स को समय चाहिए। प्रोजेक्ट स्कोप क्या है?"
    ],
    "process|how it works|start project|next steps|प्रक्रिया|कैसे काम करता है|प्रोजेक्ट शुरू": [
      "शुरुआत आसान है! हम आपके लक्ष्य चर्चा करते हैं, प्लान बनाते हैं, और अपडेट्स के साथ काम करते हैं। शुरू करने को तैयार? अपनी दृष्टि बताएं!",
      "हमारी प्रक्रिया: परामर्श, रणनीति, डेवलपमेंट, लॉन्च। आप हर कदम पर साथ हैं। मुफ्त परामर्श चाहिए?",
      "हम चैट से शुरू करते हैं, फिर कस्टम प्लान बनाते हैं। डिज़ाइन से डिलीवरी तक, हम संभालते हैं। पहला कदम क्या है?"
    ],
    "too expensive|costly|budget concern|affordable|बहुत महंगा|बजट चिंता|किफायती": [
      "बजट की चिंता समझते हैं! हम आपके वॉलेट के लिए स्केलेबल समाधान देते हैं। किफायती प्लान चाहिए?",
      "बैंक तोड़ने की ज़रूरत नहीं! हम SEO या सोशल विज्ञापनों जैसे प्रभावी सर्विसेज से शुरू कर सकते हैं। बजट रेंज क्या है?",
      "हमारी लचीली कीमत मूल्य सुनिश्चित करती है। आपके लक्ष्य और बजट के लिए समाधान पूछें!"
    ],
    "why not cheaper|competitor pricing|better deal|सस्ता क्यों नहीं|प्रतियोगी कीमत": [
      "हम क्वालिटी और परिणामों पर फोकस करते हैं, न कि कम कीमत पर। हमारी AI रणनीतियां बेहतर ROI देती हैं। मूल्य की तुलना करें?",
      "सस्ता हमेशा बेहतर नहीं! हम सिद्ध परिणामों के साथ समाधान देते हैं। सफलता की कहानियां पूछें?",
      "हमारी कीमत विशेषज्ञता और नवाचार को दर्शाती है। अपने बजट का अधिकतम प्रभाव कैसे करें, पूछें!"
    ],

    // FAQs and Technical Queries
    "case study|success story|results|examples|केस स्टडी|सफलता की कहानी|उदाहरण": [
      "हमारी केस स्टडीज़ असली परिणाम दिखाती हैं! ई-कॉमर्स सेल्स दोगुनी करने से लेकर रियल एस्टेट लीड्स तक। खास उदाहरण चाहिए?",
      "हमने SEO, PPC, और ऐप्स से बिजनेस को उड़ान दी। अपनी इंडस्ट्री के लिए केस स्टडी पूछें?",
      "सफलता की कहानियां? बहुत हैं! रियल एस्टेट बिलबोर्ड या ई-कॉमर्स SEO जीत पूछें!"
    ],
    "analytics|tracking|roi|performance|एनालिटिक्स|ट्रैकिंग|आरओआई": [
      "हम हर कैंपेन को एनालिटिक्स से ट्रैक करते हैं ताकि ROI मापा जाए। SEO या PPC परफॉर्मेंस ट्रैकिंग जानना है?",
      "हमारे एनालिटिक्स टूल्स क्लिक्स, कन्वर्जन्स दिखाते हैं। डिजिटल विज्ञापनों के लिए सैंपल रिपोर्ट चाहिए?",
      "ROI महत्वपूर्ण है! हम डेटा से कैंपेन ऑप्टिमाइज़ करते हैं। ट्रैकिंग प्रक्रिया पूछें!"
    ],
    "maintenance|support|updates|मेंटेनेंस|सपोर्ट|अपडेट्स": [
      "हम वेबसाइट्स और ऐप्स के लिए मेंटेनेंस, अपडेट्स, और सपोर्ट देते हैं। मेंटेनेंस प्लान चाहिए?",
      "हमारी सपोर्ट टीम आपकी साइट या कैंपेन को सुचारु रखती है। सपोर्ट पैकेज जानना है?",
      "लॉन्च के बाद, हम अपडेट्स और फिक्सेस देते हैं। वेबसाइट या ऐप मेंटेनेंस पूछें?"
    ],
    "urgent|emergency|rush|asap|तत्काल|जल्दी|एएसएपी": [
      "जल्दी चाहिए? हम तत्काल प्रोजेक्ट्स को प्राथमिकता देते हैं। अपनी डेडलाइन बताएं, हम करेंगे!",
      "ASAP ज़रूरत? हम वेबसाइट्स या कैंपेन को फास्ट-ट्रैक करते हैं। आपकी तात्कालिकता क्या है?",
      "तत्काल प्रोजेक्ट्स हमारी खासियत हैं! टाइमलाइन बताएं, हम डिलीवर करेंगे। रश ऑप्शन्स पूछें!"
    ],

    // Contact and Support
    "contact|talk|reach out|get in touch|consultation|संपर्क|बात करें|परामर्श": [
      "चलो जुड़ें! connectmarketingbirbal@gmail.com पर ईमेल करें या +91-7691863302 पर कॉल करें। चैट चाहिए? मुफ्त परामर्श पूछें!",
      "बात करने को तैयार? connectmarketingbirbal@gmail.com या +91-7691863302 पर पहुंचें। आपका विज़न क्या है?",
      "हम आपके लिए हैं! connectmarketingbirbal@gmail.com पर ईमेल या +91-7691863302 पर कॉल करें। कॉल शेड्यूल करें?"
    ],
    "help|support|troubleshoot|issue|मदद|सपोर्ट|समस्या": [
      "मदद चाहिए? मैं सर्विस सवालों का जवाब दे सकता हूँ या आपको सही टीम से जोड़ सकता हूँ। क्या समस्या है?",
      "मैं आपके लिए हूँ! मार्केटिंग सवाल या टेक समस्या? मुझे बताएं!",
      "कोई समस्या? मैं सर्विसेज या सपोर्ट से मदद कर सकता हूँ। क्या हुआ?"
    ],

    // Fallback and Help Menu
    "default|unknown|not sure|confused|पता नहीं|समझ नहीं आया": [
      "हम्म, शायद मैंने समझा नहीं! मार्केटिंग, वेबसाइट्स, बिलबोर्ड्स, या ऐप्स में मदद कर सकता हूँ। ‘सेवाएं’ या ‘मदद’ आजमाएं!",
      "वह समझ नहीं आया। डिजिटल मार्केटिंग, वेब डेवलपमेंट, या कुछ और पूछें! ‘मदद’ टाइप करें!",
      "फिर से कोशिश करें! मैं सर्विसेज के बारे में जवाब दे सकता हूँ। ‘मदद’ के लिए लिस्ट देखें!"
    ],
    "help|menu|options|what can i ask|मदद|मेनू|विकल्प|क्या पूछ सकता हूँ": [
      "मैं इनमें मदद कर सकता हूँ:\n- **सेवाएं**: SEO, PPC, सोशल मीडिया, बिलबोर्ड्स, वेब/ऐप्स\n- **उद्योग**: रियल एस्टेट, ई-कॉमर्स, हॉस्पिटैलिटी\n- **कीमतें**: लागत और टाइमलाइन\n- **हमारे बारे में**: हमारी टीम\n- **संपर्क**: हमसे जुड़ें\nकुछ भी पूछें या ‘SEO’ या ‘संपर्क’ आजमाएं!",
      "मेरे पास जवाब हैं:\n- डिजिटल मार्केटिंग (SEO, PPC, सोशल)\n- बाहरी विज्ञापन (बिलबोर्ड्स, DOOH)\n- वेब/ऐप डेवलपमेंट\n- लागत और प्रक्रियाएं\n- हमारी कहानी\nकोई कीवर्ड या सवाल टाइप करें!",
      "कहां से शुरू करें? पूछें:\n- मार्केटिंग सर्विसेज\n- बिलबोर्ड्स/DOOH\n- वेबसाइट/ऐप निर्माण\n- कीमतें या टाइमलाइन\n- हम कौन हैं\nकोई टॉपिक चुनें!"
    ]
  },
  ta: {
    // Greetings and General Inquiries
    "வணக்கம்|ஹாய்|ஹலோ": [
      "வணக்கம்! மார்க்கெட்டிங் பிர்பல்-க்கு வரவேற்கிறோம், இங்கு AI-ஆல் இயக்கப்படும் உத்திகள் உங்கள் வணிக கனவுகளை நனவாக்கும். இன்று என்ன பற்றி அறிய விரும்புகிறீர்கள்? ‘சேவைகள்’ அல்லது ‘உதவி’ முயற்சிக்கவும்!",
      "ஹாய்! நான் பிர்பல் பாட், மார்க்கெட்டிங் பிர்பலின் வழிகாட்டி. உங்கள் வணிகத்தை வளர்க்க தயார்? டிஜிட்டல் மார்க்கெட்டிங் அல்லது பில்போர்டு பற்றி கேளுங்கள்!",
      "வணக்கம்! உங்களுடன் இணைவதில் மகிழ்ச்சி! மார்க்கெட்டிங் பிர்பல் வலைத்தளங்கள் முதல் விளம்பரங்கள் வரை அனைத்தையும் செய்கிறது. உங்கள் அடுத்த இலக்கு என்ன?"
    ],
    "what can you do|what do you offer|services|capabilities|சேவைகள்|என்ன செய்ய முடியும்": [
      "நாங்கள் உங்கள் வளர்ச்சி கூட்டாளி! டிஜிட்டல் மார்க்கெட்டிங் (SEO, PPC, சோஷியல் மீடியா), பில்போர்டு மற்றும் DOOH விளம்பரங்கள், வெப் மற்றும் ஆப் டெவலப்மென்ட், மற்றும் AI-ஆல் இயக்கப்படும் தீர்வுகள் உள்ளன. ஒரு சேவையை அறிய வேண்டுமா? SEO அல்லது பில்போர்டு கேளுங்கள்!",
      "மார்க்கெட்டிங் பிர்பல் அனைத்தையும் வழங்குகிறது: டிஜிட்டல் மார்க்கெட்டிங், வெளிப்புற விளம்பரங்கள், தனிப்பயன் வலைத்தளங்கள், மொபைல் ஆப்ஸ். உங்கள் வணிகத்தின் மிகப்பெரிய சவால் என்ன?",
      "அற்புதமான வலைத்தளங்கள் முதல் குறிவைக்கப்பட்ட விளம்பரங்கள் வரை, நாங்கள் தயார். குறிப்பிட்ட சேவை பற்றி அறிய வேண்டுமா? ‘சோஷியல் மீடியா’ அல்லது ‘AI தீர்வுகள்’ கேளுங்கள்!"
    ],
    // Add more Tamil responses as needed...
    "default|unknown|not sure|confused|தெரியவில்லை|புரியவில்லை": [
      "ஹ்ம்ம், நான் அதை புரிந்து கொள்ளவில்லை! மார்க்கெட்டிங், வலைத்தளங்கள், பில்போர்டுகள், அல்லது ஆப்ஸ் பற்றி உதவ முடியும். ‘சேவைகள்’ அல்லது ‘உதவி’ முயற்சிக்கவும்!",
      "அது புரியவில்லை. டிஜிட்டல் மார்க்கெட்டிங், வெப் டெவலப்மென்ட், அல்லது வேறு ஏதாவது கேளுங்கள்! ‘உதவி’ டைப் செய்யவும்!",
      "மீண்டும் முயற்சிக்கவும்! சேவைகள் பற்றி பதிலளிக்க முடியும். ‘உதவி’ என்று டைப் செய்து பட்டியலை பாருங்கள்!"
    ]
  },
  te: {
    // Greetings and General Inquiries
    "హాయ్|హలో|నమస్తే": [
      "హాయ్! మార్కెటింగ్ బిర్బల్‌కు స్వాగతం, ఇక్కడ AI-ఆధారిత వ్యూహాలు మీ వ్యాపార కలలను నిజం చేస్తాయి. ఈ రోజు ఏమి తెలుసుకోవాలనుకుంటున్నారు? ‘సేవలు’ లేదా ‘సహాయం’ ప్రయత్నించండి!",
      "హలో! నేను బిర్బల్ బాట్, మార్కెటింగ్ బిర్బల్ యొక్క గైడ్. మీ వ్యాపారాన్ని పెంచడానికి సిద్ధంగా ఉన్నారా? డిజిటల్ మార్కెటింగ్ లేదా బిల్‌బోర్డ్ గురించి అడగండి!",
      "హాయ్! మీతో కనెక్ట్ అవడం సంతోషంగా ఉంది! మార్కెటింగ్ బిర్బల్ వెబ్‌సైట్‌ల నుండి విజ్ఞాపనల వరకు అన్నీ చేస్తుంది. మీ తదుపరి లక్ష్యం ఏమిటి?"
    ],
    "what can you do|what do you offer|services|capabilities|సేవలు|ఏమి చేయగలవు": [
      "మేము మీ వృద్ధి భాగస్వామి! డిజిటల్ మార్కెటింగ్ (SEO, PPC, సోషల్ మీడియా), బిల్‌బోర్డ్ మరియు DOOH విజ్ఞాపనలు, వెబ్ మరియు యాప్ డెవలప్‌మెంట్, మరియు AI-ఆధారిత పరిష్కారాలు అందిస్తాము. ఒక సేవ గురించి తెలుసుకోవాలా? SEO లేదా బిల్‌బోర్డ్ అడగండి!",
      "మార్కెటింగ్ బిర్బల్ అన్నింటినీ అందిస్తుంది: డిజిటల్ మార్కెటింగ్, బాహ్య విజ్ఞాపనలు, కస్టమ్ వెబ్‌సైట్‌లు, మొబైల్ యాప్‌లు. మీ వ్యాపారం యొక్క అతిపెద్ద సవాలు ఏమిటి?",
      "అద్భుతమైన వెబ్‌సైట్‌ల నుండి టార్గెటెడ్ విజ్ఞాపనల వరకు, మేము సిద్ధం. నిర్దిష్ట సేవ గురించి తెలుసుకోవాలా? ‘సోషల్ మీడియా’ లేదా ‘AI పరిష్కారాలు’ అడగండి!"
    ],
    // Add more Telugu responses as needed...
    "default|unknown|not sure|confused|తెలియదు|అర్థం కాలేదు": [
      "హమ్మ, నేను దాన్ని అర్థం చేసుకోలేదు! మార్కెటింగ్, వెబ్‌సైట్‌లు, బిల్‌బోర్డ్‌లు, లేదా యాప్‌ల గురించి సహాయం చేయగలను. ‘సేవలు’ లేదా ‘సహాయం’ ప్రయత్నించండి!",
      "అది అర్థం కాలేదు. డిజిటల్ మార్కెటింగ్, వెబ్ డెవలప్‌మెంట్, లేదా ఇంకేదైనా అడగండి! ‘సహాయం’ టైప్ చేయండి!",
      "మళ్లీ ప్రయత్నించండి! సేవల గురించి సమాధానం ఇవ్వగలను. ‘సహాయం’ టైప్ చేసి జాబితా చూడండి!"
    ]
  },
  bn: {
    // Greetings and General Inquiries
    "হাই|হ্যালো|নমস্কার": [
      "হাই! মার্কেটিং বীরবল-এ স্বাগতম, যেখানে AI-চালিত কৌশল আপনার ব্যবসার স্বপ্নকে বাস্তবে রূপ দেয়। আজ কী জানতে চান? ‘সেবা’ বা ‘সাহায্য’ চেষ্টা করুন!",
      "হ্যালো! আমি বীরবল বট, মার্কেটিং বীরবলের গাইড। আপনার ব্যবসা বাড়াতে প্রস্তুত? ডিজিটাল মার্কেটিং বা বিলবোর্ড সম্পর্কে জিজ্ঞাসা করুন!",
      "হাই! আপনার সাথে সংযোগ করতে উৎসাহী! মার্কেটিং বীরবল ওয়েবসাইট থেকে বিজ্ঞাপন পর্যন্ত সবকিছু করে। আপনার পরবর্তী লক্ষ্য কী?"
    ],
    "what can you do|what do you offer|services|capabilities|সেবা|কী করতে পারেন": [
      "আমরা আপনার বৃদ্ধির সঙ্গী! আমাদের সেবার মধ্যে রয়েছে ডিজিটাল মার্কেটিং (SEO, PPC, সোশ্যাল মিডিয়া), বিলবোর্ড এবং DOOH বিজ্ঞাপন, ওয়েব এবং অ্যাপ ডেভেলপমেন্ট, এবং AI-চালিত সমাধান। একটি সেবা সম্পর্কে জানতে চান? SEO বা বিলবোর্ড জিজ্ঞাসা করুন!",
      "মার্কেটিং বীরবল সবকিছু দেয়: ডিজিটাল মার্কেটিং, বহিরঙ্গন বিজ্ঞাপন, কাস্টম ওয়েবসাইট, মোবাইল অ্যাপ। আপনার ব্যবসার সবচেয়ে বড় চ্যালেঞ্জ কী?",
      "অসাধারণ ওয়েবসাইট থেকে লক্ষ্যযুক্ত বিজ্ঞাপন পর্যন্ত, আমরা প্রস্তুত। নির্দিষ্ট সেবা সম্পর্কে জানতে চান? ‘সোশ্যাল মিডিয়া’ বা ‘AI সমাধান’ জিজ্ঞাসা করুন!"
    ],
    // Add more Bengali responses as needed...
    "default|unknown|not sure|confused|জানি না|বুঝতে পারছি না": [
      "হুম, আমি হয়তো বুঝতে পারিনি! মার্কেটিং, ওয়েবসাইট, বিলবোর্ড, বা অ্যাপ সম্পর্কে সাহায্য করতে পারি। ‘সেবা’ বা ‘সাহায্য’ চেষ্টা করুন!",
      "ওটা বুঝতে পারিনি। ডিজিটাল মার্কেটিং, ওয়েব ডেভেলপমেন্ট, বা অন্য কিছু জিজ্ঞাসা করুন! ‘সাহায্য’ টাইপ করুন!",
      "আবার চেষ্টা করুন! সেবা সম্পর্কে উত্তর দিতে পারি। ‘সাহায্য’ টাইপ করে তালিকা দেখুন!"
    ]
  }
};

// Helper function to get a random response from an array
const getRandomResponse = (responses) => {
  if (Array.isArray(responses)) {
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return responses;
};

export default knowledgeBase;
export { getRandomResponse };