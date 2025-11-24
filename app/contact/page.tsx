"use client";

import React from "react";
import { MessageSquare, Calendar as CalendarIcon, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24 relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Build Something <span className="text-purple-500">Amazing</span> with Nirvixa
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
Connect with Nirvixa for your project needs. We help businesses with design, development, and digital solutions.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Section */}
          <div className="space-y-6">

            {/* Chat Card */}
            <div className="glass-card rounded-xl p-6 hover:scale-103 transition-transform cursor-pointer group">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-purple-400" />
                </div>

                <a
                  href="https://cal.com/nirvixa-4pr2tg/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">Start a Conversation</h3>
                  <p className="text-gray-400">Get immediate assistance from our team</p>
                </a>

                <ArrowRight className="h-6 w-6 text-purple-400 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>

            {/* Call Schedule Card */}
            <a
              href="https://cal.com/nirvixa-4pr2tg/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-6 hover:scale-103 transition-transform cursor-pointer group block"
            >
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <CalendarIcon className="h-6 w-6 text-purple-400" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Schedule a Call</h3>
                  <p className="text-gray-400">Book a free consultation with our experts</p>
                </div>

                <ArrowRight className="h-6 w-6 text-purple-400 group-hover:translate-x-2 transition-transform" />
              </div>
            </a>

            {/* Benefits Card */}
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Schedule a Call?</h3>
              <ul className="space-y-4">
                {[
                  "Free consultation for your business needs",
                  "Personalized development and design strategy",
                  "Transparent timeline, pricing, and deliverables"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 h-6 w-6 bg-purple-900/30 rounded-full flex items-center justify-center">
                      <span className="text-purple-400 text-sm">✓</span>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section: Cal.com Embed */}
          <div className="glass-card rounded-xl p-6 h-[500px]" id="cal">
            <div
              className="cal-inline-container"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
            >
              <iframe
                src="https://cal.com/nirvixa-4pr2tg/30min"
                title="Book a call"
                style={{ width: "100%", height: "100%", border: "0" }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
