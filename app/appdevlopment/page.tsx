"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Zap, ArrowRight, Code, Palette, Shield, Database, Globe, Download, Users, BarChart, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppDevelopment = () => {
  const features = [
    {
      icon: <Zap size={28} />,
      title: "High Performance",
      description: "Lightning-fast apps with optimized code, smooth animations, and 60fps performance.",
      color: "#3B82F6",
      benefits: ["60fps smooth performance", "Fast loading times", "Optimized memory usage"]
    },
    {
      icon: <Palette size={28} />,
      title: "Beautiful UI/UX",
      description: "Modern, intuitive interfaces with engaging animations and user-centric design principles.",
      color: "#8B5CF6",
      benefits: ["Material Design & iOS Guidelines", "Interactive animations", "Accessibility focused"]
    },
    {
      icon: <Shield size={28} />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with encrypted data, secure APIs, and robust authentication.",
      color: "#10B981",
      benefits: ["End-to-end encryption", "Secure API integration", "Regular security updates"]
    },
    {
      icon: <Database size={28} />,
      title: "Scalable Backend",
      description: "Cloud-native architecture that scales with your user base and handles millions of requests.",
      color: "#EC4899",
      benefits: ["Cloud infrastructure", "Auto-scaling capabilities", "Real-time databases"]
    },
    {
      icon: <Globe size={28} />,
      title: "Cross-Platform",
      description: "Native-quality apps for both iOS and Android with single codebase efficiency.",
      color: "#F59E0B",
      benefits: ["React Native & Flutter", "Native performance", "Consistent user experience"]
    },
    {
      icon: <Code size={28} />,
      title: "Clean Architecture",
      description: "Modular, maintainable codebase following industry best practices and patterns.",
      color: "#EF4444",
      benefits: ["MVVM/MVC patterns", "Clean code principles", "Easy maintenance"]
    }
  ];

  const technologies = [
    {
      category: "Frontend",
      items: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Firebase", "AWS", "MongoDB"]
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "Jenkins", "Figma"]
    },
    {
      category: "Testing",
      items: ["Jest", "Detox", "Appium", "Cypress"]
    }
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Requirements gathering, user stories, and technical planning"
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Wireframing, prototyping, and visual design creation"
    },
    {
      step: "03",
      title: "Development",
      description: "Agile development with weekly iterations and testing"
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Comprehensive testing across devices and platforms"
    },
    {
      step: "05",
      title: "Deployment",
      description: "App store submission and launch management"
    },
    {
      step: "06",
      title: "Support & Maintenance",
      description: "Ongoing updates, bug fixes, and feature enhancements"
    }
  ];

  const stats = [
    { number: "100+", label: "Apps Developed" },
    { number: "4.8★", label: "Average Store Rating" },
    { number: "10M+", label: "Downloads" },
    { number: "99.9%", label: "Uptime" }
  ];

  return (
    <>
    <Navbar />
    <section id="appdevelopment" className="py-24 bg-[#0F172A] px-6 md:px-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#3B82F6] rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8B5CF6] rounded-full blur-3xl opacity-5"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#EC4899] rounded-full blur-3xl opacity-5"></div>
        
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
            <Smartphone size={16} className="text-[#3B82F6]" />
            <span className="text-sm text-[#CBD5E1]">Mobile Excellence</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            App <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">Development</span>
          </h2>

          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
            We create high-performance Android and iOS applications that deliver exceptional user experiences, 
            robust functionality, and scalable architecture for businesses of all sizes.
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

        {/* Features Grid */}
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

        {/* Technologies & Process */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Our Tech Stack</h3>
            <div className="grid grid-cols-2 gap-6">
              {technologies.map((tech, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold text-white mb-3">{tech.category}</h4>
                  <div className="space-y-2">
                    {tech.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full"></div>
                        <span className="text-[#94A3B8] text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Development Process */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Development Process</h3>
            <div className="space-y-4">
              {developmentProcess.map((process, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {process.step}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{process.title}</h4>
                    <p className="text-[#94A3B8] text-sm">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default AppDevelopment;