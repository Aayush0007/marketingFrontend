import React, { useState, useEffect, useRef, useCallback } from "react";
import { X, Trash2, Send, HelpCircle, Mic } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import DOMPurify from "dompurify";
import { Bar } from "react-chartjs-2";
import { debounce } from "lodash";
import knowledgeBase, { getRandomResponse } from "../data/knowledgeBase";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChatWindow = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hey there, visionary! I’m BirbalBot, your guide to MarketingBirbal’s AI-powered solutions. Try speaking or typing your question! (Type ‘help’ for options)",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [conversationContext, setConversationContext] = useState([]);
  const [userProfile, setUserProfile] = useState({ name: "", email: "", language: "en", industry: "" });
  const [isOnboarding, setIsOnboarding] = useState(false);
  const [quizState, setQuizState] = useState(null);
  const chatContainerRef = useRef(null);
  const messageCountRef = useRef(0);
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  // Scroll to bottom on new messages
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Load conversation and user profile from localStorage
  useEffect(() => {
    try {
      const savedMessages = localStorage.getItem("chatMessages");
      if (savedMessages) {
        const parsedMessages = JSON.parse(savedMessages);
        const validatedMessages = parsedMessages.map((msg) => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        }));
        setMessages(validatedMessages.filter((msg) => msg.timestamp && !isNaN(msg.timestamp.getTime())));
      }
      const savedProfile = localStorage.getItem("userProfile");
      if (savedProfile) {
        setUserProfile(JSON.parse(savedProfile));
      } else {
        setIsOnboarding(true);
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Welcome! What’s your name? This helps me personalize our chat!",
            timestamp: new Date(),
          },
        ]);
      }
    } catch (error) {
      console.error("Error loading from localStorage:", error);
      setMessages([
        {
          sender: "bot",
          text: "Welcome back! Let’s start fresh. How can I assist you today?",
          timestamp: new Date(),
        },
      ]);
    }
  }, []);

  // Save conversation and user profile to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("chatMessages", JSON.stringify(messages));
      localStorage.setItem("userProfile", JSON.stringify(userProfile));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [messages, userProfile]);

  // Memoize sendMessage to stabilize debouncedSendMessage
  const sendMessage = useCallback(
    async (text = input) => {
      if (!text.trim()) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Oops, looks like you didn’t say or type anything! Try asking about our services or type ‘help’ for ideas.",
            timestamp: new Date(),
          },
        ]);
        return;
      }
      if (messageCountRef.current >= 10) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Whoa, you’re super chatty! Please wait a moment before sending more messages.",
            timestamp: new Date(),
          },
        ]);
        return;
      }
      messageCountRef.current += 1;
      const sanitizedText = DOMPurify.sanitize(text);
      const userMessage = { sender: "user", text: sanitizedText, timestamp: new Date() };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsTyping(true);

      setTimeout(async () => {
        const botResponseText = await getBotResponse(sanitizedText);
        if (botResponseText) {
          setMessages((prev) => [
            ...prev,
            { sender: "bot", text: botResponseText, timestamp: new Date() },
          ]);
        }
        setIsTyping(false);
        // Reset message count after 1 minute
        setTimeout(() => {
          messageCountRef.current = 0;
        }, 60000);
      }, 1200);

      trackEvent("message_sent", { text: sanitizedText });

      // Feedback prompt after 5 messages
      if (messageCountRef.current === 5) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Was this helpful? Click 👍 or 👎 below!",
            timestamp: new Date(),
          },
        ]);
      }
    },
    [input, messages, userProfile, conversationContext, quizState]
  );

  // Memoize debouncedSendMessage
  const debouncedSendMessage = useCallback(
    debounce((text) => sendMessage(text), 1000),
    [sendMessage]
  );

  // Handle voice transcript
  useEffect(() => {
    if (!listening && transcript) {
      const sanitizedTranscript = DOMPurify.sanitize(transcript);
      debouncedSendMessage(sanitizedTranscript);
      resetTranscript();
    }
  }, [listening, transcript, debouncedSendMessage, resetTranscript]);

  // Inline analytics logging
  const trackEvent = (event, data) => {
    console.log(`Analytics Event: ${event}`, data);
    try {
      const analyticsLog = JSON.parse(localStorage.getItem("analyticsLog") || "[]");
      analyticsLog.push({ event, data, timestamp: new Date().toISOString() });
      localStorage.setItem("analyticsLog", JSON.stringify(analyticsLog));
    } catch (error) {
      console.error("Error saving analytics log:", error);
    }
  };

  // Inline mock CRM integration
  const sendToCRM = (userData) => {
    try {
      const leads = JSON.parse(localStorage.getItem("leads") || "[]");
      leads.push({ ...userData, timestamp: new Date().toISOString() });
      localStorage.setItem("leads", JSON.stringify(leads));
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: `Thanks! I’ve noted your details. Please email connectmarketingbirbal@gmail.com or call +91-7691863302 to proceed!`,
          timestamp: new Date(),
        },
      ]);
      trackEvent("crm_lead_added", { email: userData.email });
    } catch (error) {
      console.error("Mock CRM Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Oops, something went wrong. Please email us at connectmarketingbirbal@gmail.com!",
          timestamp: new Date(),
        },
      ]);
    }
  };

  // Placeholder for xAI Grok 3 API
  const callGrok3API = async (query) => {
    try {
      return "AI response placeholder: Advanced NLP coming soon!";
    } catch (error) {
      console.error("Error calling Grok 3 API:", error);
      return "Sorry, I couldn’t process that. Try asking about our services!";
    }
  };

  const getBotResponse = async (userInput) => {
    const inputLower = userInput.toLowerCase().trim();
    // Handle onboarding
    if (isOnboarding) {
      if (inputLower.match(/[\w.-]+@[\w.-]+\.\w+/)) {
        setUserProfile((prev) => ({ ...prev, email: inputLower }));
        sendToCRM({ email: inputLower, message: userInput });
        setIsOnboarding(false);
        return "Thanks for sharing! I’ve noted your details. How can I help grow your business? Try ‘services’ or ‘help’!";
      } else if (inputLower.length > 0) {
        setUserProfile((prev) => ({ ...prev, name: inputLower }));
        setIsOnboarding(true);
        return `Nice to meet you, ${inputLower}! Want to share your email to stay updated? Or ask about our services!`;
      }
      return "Please share your name or email to continue!";
    }

    // Handle quiz
    if (quizState) {
      if (quizState.step === 1) {
        setQuizState((prev) => ({ ...prev, step: 2, answers: { ...prev.answers, goal: inputLower } }));
        return "Great! Question 2: What’s your budget range? (e.g., low, medium, high)";
      } else if (quizState.step === 2) {
        setQuizState((prev) => ({ ...prev, step: 3, answers: { ...prev.answers, budget: inputLower } }));
        return "Almost done! Question 3: Which industry are you in? (e.g., real estate, e-commerce)";
      } else if (quizState.step === 3) {
        setQuizState(null);
        setUserProfile((prev) => ({ ...prev, industry: inputLower }));
        return `Thanks for completing the quiz! Based on your answers, I recommend focusing on ${
          inputLower.includes("real estate") ? "local SEO and billboards" : "digital marketing"
        }. Email connectmarketingbirbal@gmail.com to start!`;
      }
    }

    // Check context for follow-up questions
    if (conversationContext.length > 0) {
      const lastTopic = conversationContext[conversationContext.length - 1];
      if (inputLower.includes("more") || inputLower.includes("details")) {
        return getRandomResponse(knowledgeBase[userProfile.language][lastTopic] || knowledgeBase[userProfile.language]["default"]);
      }
    }

    // Handle industry input
    if (messageCountRef.current === 3 && !userProfile.industry) {
      setUserProfile((prev) => ({ ...prev, industry: inputLower }));
      return `Got it! Your industry seems like ${inputLower}. How can I tailor our solutions for you?`;
    }

    // Match keywords
    for (const [key, value] of Object.entries(knowledgeBase[userProfile.language] || knowledgeBase["en"])) {
      const keywords = key.split("|");
      if (keywords.some((keyword) => inputLower.includes(keyword))) {
        setConversationContext((prev) => [...prev, key]);
        trackEvent("user_query", { query: inputLower, topic: key });
        // Add rich media for specific topics
        if (key.includes("ppc")) {
          setMessages((prev) => [
            ...prev,
            {
              sender: "bot",
              text: (
                <div>
                  <p>PPC can boost conversions significantly! Here’s a sample performance chart:</p>
                  <Bar
                    data={{
                      labels: ["Week 1", "Week 2", "Week 3"],
                      datasets: [
                        {
                          label: "PPC Conversions",
                          data: [50, 100, 150],
                          backgroundColor: "#2F6B47",
                          borderColor: "#2F6B47",
                          borderWidth: 1,
                        },
                      ],
                    }}
                    options={{
                      responsive: true,
                      scales: {
                        y: { beginAtZero: true, title: { display: true, text: "Conversions" } },
                        x: { title: { display: true, text: "Week" } },
                      },
                    }}
                  />
                </div>
              ),
              timestamp: new Date(),
            },
          ]);
          return "PPC campaigns drive instant results! Want to set one up or learn more?";
        }
        return getRandomResponse(value);
      }
    }

    // Fallback to AI API
    const aiResponse = await callGrok3API(inputLower);
    trackEvent("fallback_query", { query: inputLower });
    return aiResponse;
  };

  const handleQuickReply = (option) => {
    if (option === "start quiz") {
      setQuizState({ step: 1, answers: {} });
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Let’s create a marketing plan! Question 1: What’s your primary goal? (e.g., more website traffic, sales)",
          timestamp: new Date(),
        },
      ]);
    } else if (option === "👍" || option === "👎") {
      trackEvent("feedback", { rating: option });
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: `Thanks for your feedback! ${option === "👍" ? "Glad I could help!" : "Sorry, let’s try something else."} What’s next?`,
          timestamp: new Date(),
        },
      ]);
    } else {
      debouncedSendMessage(option);
    }
    trackEvent("quick_reply", { option });
  };

  const clearChat = () => {
    setMessages([
      {
        sender: "bot",
        text: "Fresh start, endless possibilities! How can BirbalBot help you today?",
        timestamp: new Date(),
      },
    ]);
    setConversationContext([]);
    setQuizState(null);
    try {
      localStorage.removeItem("chatMessages");
    } catch (error) {
      console.error("Error clearing localStorage:", error);
    }
    trackEvent("chat_cleared", {});
  };

  const formatTimestamp = (date) => {
    try {
      const validDate = date instanceof Date && !isNaN(date.getTime()) ? date : new Date();
      return validDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    } catch (error) {
      console.error("Error formatting timestamp:", error);
      return "Just now";
    }
  };

  const getQuickReplies = (lastMessage) => {
    const lastMessageText = lastMessage?.text?.toLowerCase() || "";
    if (lastMessageText.includes("digital marketing")) {
      return ["SEO Details", "PPC Options", "Social Media Plans"];
    } else if (lastMessageText.includes("website") || lastMessageText.includes("webpage")) {
      return ["View Portfolio", "Get a Quote", "Learn About UX"];
    } else if (lastMessageText.includes("billboard") || lastMessageText.includes("outdoor")) {
      return ["Billboard Locations", "DOOH Options", "Design Samples"];
    } else if (lastMessageText.includes("was this helpful")) {
      return ["👍", "👎"];
    }
    return ["Services", "Pricing", "Contact", "Start Quiz"];
  };

  const toggleListening = () => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, your browser doesn’t support voice input. Try typing your question!",
          timestamp: new Date(),
        },
      ]);
      trackEvent("voice_input_unsupported", {});
      return;
    }
    if (isListening) {
      SpeechRecognition.stopListening();
      setIsListening(false);
      trackEvent("voice_input_stopped", {});
    } else {
      SpeechRecognition.startListening({ continuous: false, language: userProfile.language === "hi" ? "hi-IN" : userProfile.language === "ta" ? "ta-IN" : userProfile.language === "te" ? "te-IN" : userProfile.language === "bn" ? "bn-IN" : "en-US" });
      setIsListening(true);
      trackEvent("voice_input_started", {});
    }
  };

  const switchLanguage = (lang) => {
    setUserProfile((prev) => ({ ...prev, language: lang }));
    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text: `Switched to ${lang === "hi" ? "Hindi" : lang === "ta" ? "Tamil" : lang === "te" ? "Telugu" : lang === "bn" ? "Bengali" : "English"}! How can I assist you now?`,
        timestamp: new Date(),
      },
    ]);
    trackEvent("language_switch", { language: lang });
  };

  return (
    <motion.div
      className="fixed bottom-24 right-8 w-96 max-w-[90vw] bg-[#FFFAFA] rounded-2xl shadow-2xl p-6 z-50 border border-[#2F6B47]/20 overflow-hidden relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      role="dialog"
      aria-label="Chat with BirbalBot"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#2F6B47]/10 to-[#D4A017]/10 opacity-50 animate-gradientShift" />
      <div className="flex justify-between items-center mb-5 relative z-10">
        <h3 className="text-xl font-bold text-[#2F6B47] font-[Orbitron] tracking-wide">
          <span className="bg-gradient-to-r from-green-600 via-yellow-500 to-orange-400 bg-clip-text text-transparent animate-gradientText">
            BirbalBot
          </span>
        </h3>
        <div className="flex space-x-3">
          <select
            onChange={(e) => switchLanguage(e.target.value)}
            value={userProfile.language}
            className="text-[#5A8033] bg-transparent border-none hover:text-[#D4A017] transition-colors"
            aria-label="Switch language"
          >
            <option value="en">EN</option>
            <option value="hi">हि</option>
            <option value="ta">த</option>
            <option value="te">తె</option>
            <option value="bn">বা</option>
          </select>
          <button
            onClick={clearChat}
            className="text-[#5A8033] hover:text-[#D4A017] transition-colors"
            title="Clear Chat"
            aria-label="Clear chat history"
          >
            <Trash2 size={20} />
          </button>
          <button
            onClick={() => handleQuickReply("help")}
            className="text-[#5A8033] hover:text-[#D4A017] transition-colors"
            title="Show Help Menu"
            aria-label="Show help menu"
          >
            <HelpCircle size={20} />
          </button>
          <button
            onClick={onClose}
            className="text-[#5A8033] hover:text-[#D4A017] transition-colors"
            title="Close Chat"
            aria-label="Close chat window"
          >
            <X size={22} />
          </button>
        </div>
      </div>
      <div
        ref={chatContainerRef}
        className="h-72 bg-white/80 backdrop-blur-sm rounded-xl p-4 overflow-y-auto space-y-4 shadow-inner border border-[#2F6B47]/10 relative"
        role="log"
        aria-live="polite"
      >
        <AnimatePresence>
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className={`flex ${msg.sender === "bot" ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-lg text-sm shadow-md ${
                  msg.sender === "bot"
                    ? "bg-[#2F6B47]/10 text-[#2F6B47] border border-[#2F6B47]/20"
                    : "bg-[#D4A017]/20 text-[#2F6B47] border border-[#D4A017]/30"
                }`}
              >
                {typeof msg.text === "string" ? (
                  <p className="leading-relaxed">{msg.text}</p>
                ) : (
                  msg.text
                )}
                <span className="text-xs opacity-60 block mt-1 font-[Orbitron]">
                  {formatTimestamp(msg.timestamp)}
                </span>
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-start"
            >
              <div className="bg-[#2F6B47]/10 text-[#5A8033] p-3 rounded-lg text-sm border border-[#2F6B47]/20">
                <span className="animate-pulse font-[Orbitron]">
                  BirbalBot is thinking...
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="mt-3 flex flex-wrap gap-2 relative z-10">
        {getQuickReplies(messages[messages.length - 1]).map((option) => (
          <button
            key={option}
            onClick={() => handleQuickReply(option.toLowerCase())}
            className="bg-[#2F6B47]/10 text-[#2F6B47] px-3 py-1 rounded-full text-sm hover:bg-[#D4A017]/20 transition-all"
            aria-label={`Ask about ${option}`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="mt-3 flex space-x-3 relative z-10">
        <input
          type="text"
          placeholder="Type or speak your query..."
          className="flex-grow border border-[#2F6B47]/30 rounded-full p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A017] bg-white/90 text-[#5A8033] shadow-sm placeholder-[#5A8033]/50 font-[Orbitron]"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && debouncedSendMessage()}
          aria-label="Type your message"
        />
        <button
          onClick={toggleListening}
          className={`p-2 rounded-full transition-all ${
            isListening ? "bg-[#D4A017] text-[#FFFAFA]" : "bg-[#2F6B47] text-[#FFFAFA]"
          } hover:bg-[#D4A017] relative overflow-hidden group`}
          aria-label={isListening ? "Stop voice input" : "Start voice input"}
        >
          <Mic size={20} className="relative z-10" />
          <span className="absolute inset-0 bg-[#D4A017] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
        </button>
        <button
          onClick={debouncedSendMessage}
          className="bg-[#2F6B47] text-[#FFFAFA] px-4 py-2 rounded-full hover:bg-[#D4A017] transition-all shadow-md relative overflow-hidden group"
          aria-label="Send message"
        >
          <Send size={20} className="relative z-10" />
          <span className="absolute inset-0 bg-[#D4A017] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
        </button>
      </div>
      <style jsx="true">{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes gradientText {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientShift {
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
        }
        .animate-gradientText {
          background-size: 200% 200%;
          animation: gradientText 6s ease infinite;
        }
      `}</style>
    </motion.div>
  );
};

export default ChatWindow;