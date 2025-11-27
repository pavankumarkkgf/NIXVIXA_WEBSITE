"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const savedState = localStorage.getItem("chatbot-open");
    if (savedState !== null) {
      setIsOpen(savedState === "true");
    }
  }, []);

  const toggleChat = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    localStorage.setItem("chatbot-open", newState.toString());

    if (newState) {
      setTimeout(() => {
        const iframe = document.querySelector(
          `iframe[src="${process.env.NEXT_PUBLIC_CHATBOT_URL}"]`
        ) as HTMLIFrameElement | null;

        if (iframe) iframe.src = iframe.src;
      }, 100);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition-all z-50 border-2 border-white"
        style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
      >
        {isOpen ? (
          // 🟥 CLOSE IMAGE (when bot is open)
          <Image
            src="/close.png"
            alt="Close"
            width={100}
            height={100}
            className="object-contain rounded-full"
          />
        ) : (
          // 🤖 BOT IMAGE (when bot is closed)
          <Image
            src="/bot.png"
            alt="Chatbot Icon"
            width={100}
            height={100}
            className="object-contain rounded-full"
          />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <iframe
          src={process.env.NEXT_PUBLIC_CHATBOT_URL}
          style={{
            position: "fixed",
            bottom: "80px",
            right: "24px",
            width: "400px",
            height: "500px",
            border: "none",
            borderRadius: "10px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            zIndex: 1000,
          }}
        />
      )}
    </>
  );
}
