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
    <section className="py-20 px-6 bg-gradient-to-r from-yellow-50 via-green-50 to-lime-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-yellow-500 to-green-700 bg-clip-text mb-6">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Stay updated with the latest trends and exclusive offers. Join our community today!
        </p>
        <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-1/2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none text-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all"
          >
            Subscribe
          </button>
        </form>
        {message && <p className="text-green-600 font-semibold mt-4">{message}</p>}
      </div>
    </section>
  );
};

export default NewsletterSection;
