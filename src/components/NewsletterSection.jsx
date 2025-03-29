import React, { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setMessage("Thank you for subscribing!");
      setEmail("");
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  return (
    <section className="py-20 px-6 bg-[#FFFAFA] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#2F6B47] opacity-10 rounded-full transform -translate-x-20 -translate-y-20 animate-pulseSlow"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#D4A017] opacity-10 rounded-full transform translate-x-28 translate-y-28 animate-pulseSlow"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#2F6B47] bg-gradient-to-r from-green-600 via-yellow-500 to-orange-400 bg-clip-text text-transparent mb-6 font-[Orbitron] animate-gradientText"
        >
          Subscribe to Our Newsletter
          <span className="block w-16 h-1 bg-[#D4A017] rounded-full mx-auto mt-2 animate-expandLine"></span>
        </h2>
        <p className="text-lg text-[#5A8033] mb-6 animate-fadeInUp">
          Stay updated with the latest trends and exclusive offers. Join our community today!
        </p>
        <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-1/2 p-3 rounded-lg border border-[#2F6B47] focus:ring-2 focus:ring-[#D4A017] focus:outline-none text-[#5A8033] bg-white animate-fadeInUp delay-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#2F6B47] text-white font-semibold rounded-lg relative overflow-hidden group animate-fadeInUp delay-300"
          >
            <span className="relative z-10">Subscribe</span>
            <span className="absolute inset-0 bg-[#D4A017] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-lg"></span>
          </button>
        </form>
        {message && (
          <p className="text-[#5A8033] font-semibold mt-4 animate-fadeInUp delay-400">
            {message}
          </p>
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
        @keyframes expandLine {
          0% { width: 0; }
          100% { width: 4rem; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-gradientText {
          background-size: 200% 200%;
          animation: gradientText 6s ease infinite;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
};

export default NewsletterSection;