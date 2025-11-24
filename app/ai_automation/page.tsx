"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, Workflow, BrainCircuit, Cpu, Zap, ArrowRight, BarChart3, Clock, Shield, Users, MessageCircle, Database } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AIAutomation = () => {
  const features = [
    {
      icon: <Cpu size={28} />,
      title: "Smart Workflow Automation",
      description: "Automate repetitive tasks using AI-powered systems and intelligent integrations that learn from your workflows.",
      color: "#3B82F6",
      benefits: ["Reduce manual work by 80%", "24/7 operation", "Error-free execution"]
    },
    {
      icon: <BrainCircuit size={28} />,
      title: "AI Decision Making",
      description: "Intelligent systems that analyze data patterns and make accurate predictions for better business outcomes.",
      color: "#8B5CF6",
      benefits: ["Data-driven insights", "Predictive analytics", "Real-time decision making"]
    },
    {
      icon: <Workflow size={28} />,
      title: "Business Process Automation",
      description: "End-to-end automation of marketing, sales, finance, and customer support processes.",
      color: "#10B981",
      benefits: ["Cross-department integration", "Scalable solutions", "Process optimization"]
    },
    {
      icon: <Bot size={28} />,
      title: "AI Chatbots & Assistants",
      description: "Smart conversational AI that provides instant customer support and guidance 24/7.",
      color: "#EC4899",
      benefits: ["Instant response", "Multi-language support", "Context-aware conversations"]
    },
    {
      icon: <Database size={28} />,
      title: "Data Processing & Analysis",
      description: "Automated data extraction, processing, and analysis for actionable business intelligence.",
      color: "#F59E0B",
      benefits: ["Real-time analytics", "Automated reporting", "Data visualization"]
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Predictive Analytics",
      description: "Machine learning models that forecast trends and help you make proactive business decisions.",
      color: "#EF4444",
      benefits: ["Trend forecasting", "Risk assessment", "Opportunity identification"]
    }
  ];

  const stats = [
    { number: "80%", label: "Reduction in Manual Work" },
    { number: "24/7", label: "Automated Operation" },
    { number: "3x", label: "Faster Processing" },
    { number: "99%", label: "Accuracy Rate" }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      solutions: ["Inventory management", "Customer service bots", "Personalized recommendations"]
    },
    {
      industry: "Healthcare",
      solutions: ["Patient data processing", "Appointment scheduling", "Medical diagnosis support"]
    },
    {
      industry: "Finance",
      solutions: ["Fraud detection", "Risk assessment", "Automated reporting"]
    },
    {
      industry: "Manufacturing",
      solutions: ["Quality control", "Supply chain optimization", "Predictive maintenance"]
    }
  ];

  return (
    <>
    <Navbar />
    <section id="ai-automation" className="py-24 bg-[#0F172A] px-6 md:px-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#3B82F6] rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#8B5CF6] rounded-full blur-3xl opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#10B981] rounded-full blur-3xl opacity-5"></div>
        
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
            <Zap size={16} className="text-[#3B82F6]" />
            <span className="text-sm text-[#CBD5E1]">AI Powered Solutions</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">Automation</span>
          </h2>

          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
            Transform your business with intelligent automation. Boost productivity, eliminate manual tasks, 
            and drive growth with AI-powered systems that work around the clock.
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

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
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
                style={{ backgroundColor: feature.color }}
              ></div>

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 flex items-center justify-center rounded-2xl mb-6 shadow-lg group-hover:shadow-xl duration-300"
                style={{ 
                  backgroundColor: feature.color + "20", 
                  color: feature.color 
                }}
              >
                {feature.icon}
              </motion.div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-[#3B82F6] duration-300">
                  {feature.title}
                </h3>

                <p className="text-[#94A3B8] leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2 pt-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-3 text-sm">
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: feature.color }}
                      ></div>
                      <span className="text-[#CBD5E1]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Border Effect */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 duration-300 border-2 pointer-events-none"
                style={{
                  borderColor: feature.color,
                  background: `linear-gradient(135deg, ${feature.color}10, transparent)`
                }}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Use Cases Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-[#1E293B] to-[#0F172A] border border-[#334155] rounded-3xl p-8 mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Industry-Specific Solutions
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-[#0F172A] border border-[#334155] rounded-2xl p-6">
                <h4 className="text-lg font-bold text-white mb-4">{useCase.industry}</h4>
                <ul className="space-y-2">
                  {useCase.solutions.map((solution, solIndex) => (
                    <li key={solIndex} className="flex items-center gap-2 text-sm text-[#94A3B8]">
                      <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full"></div>
                      {solution}
                    </li>
                  ))}
                </ul>
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

export default AIAutomation;