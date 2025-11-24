"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does your company provide?",
    answer:
      "We provide complete end-to-end digital solutions for businesses of all sizes. Our services include web development, mobile app development, branding, SEO, digital marketing, and AI automation. We focus on building products that are modern, scalable, and business-focused. Our goal is to help companies grow digitally with high-quality services.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "The timeline fully depends on the project’s complexity and requirements. A basic business website usually takes between 7–20 days, while advanced sites or apps may require additional time. We follow a structured development process to maintain quality and speed. Before starting, we provide a clear timeline so clients know exactly what to expect.",
  },
  {
    question: "Do you build fully custom websites and applications?",
    answer:
      "Yes, every website and app we create is fully customized based on your brand and business goals. We do not use pre-made templates unless requested. Our team studies your target audience, design preferences, and functionality needs before starting. This helps us deliver products that look unique and perform smoothly.",
  },
  {
    question: "Do you offer digital marketing and brand growth support?",
    answer:
      "Yes, we provide complete digital marketing services including social media management, SEO, advertising, and content creation. We help businesses increase visibility, generate leads, and build trust with their audience. Our strategies are data-driven and tailored to each client. We focus on long-term brand growth, not just short-term results.",
  },
  {
    question: "How do I get started with your company?",
    answer:
      "Getting started is simple — just contact us through our website, WhatsApp, email, or phone. We will discuss your requirements and guide you with the best solution. Once everything is clear, we prepare a plan, pricing, and timeline. After your approval, the development or marketing work begins immediately.",
  },
];


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-3xl">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Frequently Asked Questions
        </motion.h2>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`text-gray-600 dark:text-gray-300 transform transition-all duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Answer dropdown animation */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 text-gray-600 dark:text-gray-300"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
