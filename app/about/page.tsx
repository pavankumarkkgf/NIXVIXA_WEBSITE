"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Code2, Target, Users, Zap, ArrowRight, Sparkles, Trophy, Globe, Heart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Trophy size={24} /> },
    { number: "99%", label: "Client Satisfaction", icon: <Heart size={24} /> },
    { number: "50+", label: "Team Members", icon: <Users size={24} /> },
    { number: "24/7", label: "Support", icon: <Zap size={24} /> }
  ];

  const values = [
    {
      icon: <Rocket size={32} />,
      title: "Fast Development",
      description: "We deliver clean, scalable, and high-performance solutions with rapid deployment.",
      color: "#3B82F6"
    },
    {
      icon: <Code2 size={32} />,
      title: "Modern Technologies",
      description: "React, Next.js, Node.js, Tailwind, Framer Motion, and cutting-edge tools.",
      color: "#8B5CF6"
    },
    {
      icon: <Target size={32} />,
      title: "Growth Focused",
      description: "Our designs & strategies help you increase leads and drive conversions.",
      color: "#10B981"
    },
    {
      icon: <Globe size={32} />,
      title: "Global Reach",
      description: "Serving clients worldwide with localized strategies and 24/7 availability.",
      color: "#EC4899"
    }
  ];

  const teamHighlights = [
    { label: "UI/UX Designers", count: "15+" },
    { label: "Developers", count: "20+" },
    { label: "Marketing Experts", count: "10+" },
    { label: "Project Managers", count: "5+" }
  ];

  return (
    <>
    <Navbar />
    <section id="about" className="py-24 bg-[#0F172A] px-6 md:px-16 relative overflow-hidden">
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
            <Sparkles size={16} className="text-[#3B82F6]" />
            <span className="text-sm text-[#CBD5E1]">Our Story</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">Us</span>
          </h2>

          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
            We are a modern tech and digital marketing agency helping startups and businesses 
            grow online with clean UI/UX, scalable development, and data-driven marketing.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] rounded-2xl hover:border-[#3B82F6] duration-300"
            >
              <div className="text-[#3B82F6] mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-[#94A3B8] text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Side – Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              We Build Powerful 
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent"> Digital Experiences</span>
            </h3>

            <div className="space-y-4">
              <p className="text-lg text-[#94A3B8] leading-relaxed">
                Our goal is simple — build products that look great, work fast, and convert better. 
                We combine cutting-edge technology with creative excellence to deliver digital 
                solutions that drive real business results.
              </p>

              <p className="text-lg text-[#94A3B8] leading-relaxed">
                Whether you need a website, mobile app, content creation, or digital marketing 
                support — our expert team delivers everything with quality, speed, and creativity.
              </p>
            </div>

            {/* Team Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {teamHighlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#3B82F6] rounded-full"></div>
                  <div>
                    <div className="text-white font-semibold">{highlight.count}</div>
                    <div className="text-[#64748B] text-sm">{highlight.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] px-8 py-4 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/25 duration-300 flex items-center gap-3 mt-6"
            >
              Meet Our Team
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          {/* Right Side – Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] rounded-3xl p-8 shadow-2xl">
              <div className="aspect-video rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-20"></div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-[#10B981] rounded-2xl border border-white/10 shadow-lg flex items-center justify-center"
              >
                <Rocket size={24} className="text-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#EC4899] rounded-2xl border border-white/10 shadow-lg flex items-center justify-center"
              >
                <Zap size={20} className="text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-[#1E293B] to-[#0F172A] border border-[#334155] rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Our Core <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">Values</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 flex items-center justify-center rounded-2xl mx-auto mb-4 shadow-lg group-hover:shadow-xl duration-300"
                  style={{ 
                    backgroundColor: value.color + "20", 
                    color: value.color 
                  }}
                >
                  {value.icon}
                </motion.div>
                <h4 className="text-white font-semibold text-lg mb-3">{value.title}</h4>
                <p className="text-[#94A3B8] leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default About;