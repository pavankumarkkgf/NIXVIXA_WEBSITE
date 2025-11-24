"use client";

import React from "react";
import { motion } from "framer-motion";
import { Megaphone, Search, TrendingUp, ArrowRight, Zap, BarChart, Target, Users, Globe, MessageCircle, DollarSign, PieChart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DigitalMarketing = () => {
  const services = [
    {
      icon: <Search size={28} />,
      title: "SEO Optimization",
      description: "Comprehensive search engine optimization to improve your website's visibility and organic rankings.",
      color: "#3B82F6",
      deliverables: ["Keyword Research", "On-Page SEO", "Technical SEO", "Local SEO"]
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Social Media Marketing",
      description: "Strategic social media management to build brand presence and engage with your audience.",
      color: "#8B5CF6",
      deliverables: ["Content Strategy", "Community Management", "Paid Social Ads", "Analytics & Reporting"]
    },
    {
      icon: <DollarSign size={28} />,
      title: "PPC Advertising",
      description: "Data-driven paid advertising campaigns on Google, Meta, and other platforms for maximum ROI.",
      color: "#10B981",
      deliverables: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Retargeting Campaigns"]
    },
    {
      icon: <MessageCircle size={28} />,
      title: "Content Marketing",
      description: "Strategic content creation and distribution to attract, engage, and convert your target audience.",
      color: "#EC4899",
      deliverables: ["Content Strategy", "Blog Management", "Email Marketing", "Lead Magnets"]
    },
    {
      icon: <BarChart size={28} />,
      title: "Analytics & Reporting",
      description: "Comprehensive performance tracking and data-driven insights to optimize your marketing efforts.",
      color: "#F59E0B",
      deliverables: ["Google Analytics", "Conversion Tracking", "Performance Reports", "ROI Analysis"]
    },
    {
      icon: <Target size={28} />,
      title: "Conversion Rate Optimization",
      description: "Optimize your website and landing pages to increase conversions and maximize revenue.",
      color: "#EF4444",
      deliverables: ["A/B Testing", "Landing Page Optimization", "User Experience", "Funnel Analysis"]
    }
  ];

  const platforms = [
    {
      icon: <Globe size={24} />,
      name: "Google",
      services: ["Google Ads", "SEO", "Google Analytics", "Google My Business"]
    },
    {
      icon: <MessageCircle size={24} />,
      name: "Meta",
      services: ["Facebook Ads", "Instagram Marketing", "WhatsApp Business", "Meta Analytics"]
    },
    {
      icon: <Users size={24} />,
      name: "LinkedIn",
      services: ["LinkedIn Ads", "B2B Marketing", "Lead Generation", "Professional Networking"]
    },
    {
      icon: <TrendingUp size={24} />,
      name: "Other Platforms",
      services: ["Twitter/X", "YouTube", "TikTok", "Pinterest"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Strategy & Planning",
      description: "Define goals, target audience, and marketing objectives"
    },
    {
      step: "02",
      title: "Research & Analysis",
      description: "Market research, competitor analysis, and audience insights"
    },
    {
      step: "03",
      title: "Campaign Setup",
      description: "Implement marketing campaigns across chosen channels"
    },
    {
      step: "04",
      title: "Execution & Management",
      description: "Ongoing campaign management and optimization"
    },
    {
      step: "05",
      title: "Monitoring & Analysis",
      description: "Track performance metrics and campaign results"
    },
    {
      step: "06",
      title: "Optimization & Scaling",
      description: "Refine strategies and scale successful campaigns"
    }
  ];

  const stats = [
    { number: "300%", label: "Average ROI" },
    { number: "5M+", label: "Monthly Impressions" },
    { number: "50%", label: "Cost Reduction" },
    { number: "24/7", label: "Campaign Monitoring" }
  ];

  const results = [
    {
      metric: "Increase in Website Traffic",
      value: "200-400%",
      description: "Organic and paid traffic growth"
    },
    {
      metric: "Improvement in Conversion Rates",
      value: "35-60%",
      description: "Higher lead generation and sales"
    },
    {
      metric: "Reduction in Customer Acquisition Cost",
      value: "40-70%",
      description: "More efficient marketing spend"
    },
    {
      metric: "Growth in Social Engagement",
      value: "300-500%",
      description: "Increased brand interaction"
    }
  ];

  return (
    <>
    <Navbar />
    <section id="digitalmarketing" className="py-24 bg-[#0F172A] px-6 md:px-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#3B82F6] rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8B5CF6] rounded-full blur-3xl opacity-5"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#10B981] rounded-full blur-3xl opacity-5"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#1E293B] border border-[#334155] px-4 py-2 rounded-full mb-6"
          >
            <Megaphone size={16} className="text-[#3B82F6]" />
            <span className="text-sm text-[#CBD5E1]">Growth Marketing</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Digital <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">Marketing</span>
          </h2>

          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
            We help businesses grow online through performance-driven digital marketing strategies. 
            From social media to SEO to paid ads — we create campaigns that bring real, measurable results.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-[#94A3B8] text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-8 rounded-3xl border border-[#334155] hover:border-[#3B82F6] duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
            >
              {/* Background Glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 duration-300"
                style={{ backgroundColor: service.color }}
              ></div>

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 flex items-center justify-center rounded-2xl mb-6 shadow-lg group-hover:shadow-xl duration-300"
                style={{ 
                  backgroundColor: service.color + "20", 
                  color: service.color 
                }}
              >
                {service.icon}
              </motion.div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-[#3B82F6] duration-300">
                  {service.title}
                </h3>

                <p className="text-[#94A3B8] leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2 pt-2">
                  {service.deliverables.map((deliverable, deliverableIndex) => (
                    <div key={deliverableIndex} className="flex items-center gap-3 text-sm">
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: service.color }}
                      ></div>
                      <span className="text-[#CBD5E1]">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Border Effect */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 duration-300 border-2 pointer-events-none"
                style={{
                  borderColor: service.color,
                  background: `linear-gradient(135deg, ${service.color}10, transparent)`
                }}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Platforms & Process */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Platforms */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Platform Expertise</h3>
            <div className="space-y-6">
              {platforms.map((platform, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#3B82F6] text-white rounded-xl flex items-center justify-center flex-shrink-0">
                    {platform.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{platform.name}</h4>
                    <div className="flex flex-wrap gap-2">
                      {platform.services.map((service, serviceIndex) => (
                        <span key={serviceIndex} className="bg-[#334155] text-[#CBD5E1] px-2 py-1 rounded-lg text-xs">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Process */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Marketing Process</h3>
            <div className="space-y-4">
              {process.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{step.title}</h4>
                    <p className="text-[#94A3B8] text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Results Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-[#1E293B] to-[#0F172A] border border-[#334155] rounded-3xl p-8 mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Expected Results
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <div key={index} className="text-center p-6 bg-[#0F172A] border border-[#334155] rounded-2xl">
                <div className="text-2xl font-bold text-white mb-2">{result.value}</div>
                <h4 className="text-white font-semibold mb-2">{result.metric}</h4>
                <p className="text-[#94A3B8] text-sm">{result.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default DigitalMarketing;