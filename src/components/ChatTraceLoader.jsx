import React, { useEffect } from 'react';

const ChatTraceLoader = () => {
  useEffect(() => {
    // Set a timer to load the ChatTrace script after 30 seconds
    const timer = setTimeout(() => {
      // Create the script element for ChatTrace
      const script = document.createElement("script");
      script.src = "https://chatrace.com/webchat/plugin.js?v=6";
      script.async = true;
      document.body.appendChild(script);

      // Once the script loads, initialize the chat widget
      script.onload = () => {
        if (window.ktt10 && typeof window.ktt10.setup === "function") {
          window.ktt10.setup({
            id: "oHCWl6zOsWbbeT6OMfcp",
            accountId: "1749881",
            color: "#006dff",
          });
        }
      };
    }); 

    // Clear the timer if the component unmounts before 30 seconds
    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default ChatTraceLoader;
