"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Megaphone, Palette, Globe, Target, Users, ArrowRight, Star, Heart, Zap, TrendingUp } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BrandBuilding = () => {
  const services = [
    {
      icon: <Palette size={28} />,
      title: "Logo & Visual Identity",
      description: "Crafting modern, memorable logos and comprehensive visual identity systems that stand out.",
      color: "#3B82F6",
      deliverables: ["Logo Design", "Color Palette", "Typography", "Brand Guidelines"]
    },
    {
      icon: <Megaphone size={28} />,
      title: "Brand Strategy",
      description: "Developing powerful brand positioning, messaging, and storytelling frameworks.",
      color: "#8B5CF6",
      deliverables: ["Brand Voice", "Messaging Framework", "Target Audience", "Positioning Strategy"]
    },
    {
      icon: <Globe size={28} />,
      title: "Digital Presence",
      description: "Building consistent brand visibility across all digital platforms and touchpoints.",
      color: "#10B981",
      deliverables: ["Website Design", "Social Media Kit", "Email Templates", "Digital Assets"]
    },
    {
      icon: <Target size={28} />,
      title: "Brand Positioning",
      description: "Strategic market positioning to differentiate your brand from competitors.",
      color: "#EC4899",
      deliverables: ["Competitive Analysis", "USP Development", "Market Research", "Positioning Statement"]
    },
    {
      icon: <Users size={28} />,
      title: "Brand Experience",
      description: "Creating memorable customer experiences that build loyalty and advocacy.",
      color: "#F59E0B",
      deliverables: ["Customer Journey Maps", "Touchpoint Design", "Experience Strategy", "Loyalty Programs"]
    },
    {
      icon: <Sparkles size={28} />,
      title: "Brand Consistency",
      description: "Ensuring cohesive brand representation across all marketing materials and channels.",
      color: "#EF4444",
      deliverables: ["Brand Guidelines", "Asset Management", "Quality Control", "Training Materials"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "Deep dive into your business, market, and target audience"
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Define brand positioning, messaging, and visual direction"
    },
    {
      step: "03",
      title: "Visual Identity Creation",
      description: "Design logos, color schemes, typography, and brand elements"
    },
    {
      step: "04",
      title: "Brand Application",
      description: "Implement across all touchpoints and marketing materials"
    },
    {
      step: "05",
      title: "Guidelines & Training",
      description: "Create brand guidelines and train your team"
    },
    {
      step: "06",
      title: "Launch & Management",
      description: "Launch the new brand and provide ongoing support"
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp size={24} />,
      title: "Increased Recognition",
      description: "Build brand awareness and recall with consistent visual identity"
    },
    {
      icon: <Heart size={24} />,
      title: "Customer Loyalty",
      description: "Create emotional connections that turn customers into advocates"
    },
    {
      icon: <Star size={24} />,
      title: "Premium Perception",
      description: "Position your brand as a leader in your industry"
    },
    {
      icon: <Zap size={24} />,
      title: "Competitive Edge",
      description: "Stand out from competitors with unique brand positioning"
    }
  ];

  const stats = [
    { number: "3x", label: "Higher Brand Recall" },
    { number: "50%", label: "More Customer Loyalty" },
    { number: "2.5x", label: "Better Conversion Rates" },
    { number: "80%", label: "Faster Brand Growth" }
  ];

  return (
   <>
   <Navbar />
    <section id="brandbuilding" className="py-24 bg-[#0F172A] px-6 md:px-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#3B82F6] rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#8B5CF6] rounded-full blur-3xl opacity-5"></div>
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
            <Sparkles size={16} className="text-[#3B82F6]" />
            <span className="text-sm text-[#CBD5E1]">Brand Excellence</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Brand <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">Building</span>
          </h2>

          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
            Your brand is more than a logo — it's the soul of your business. We create powerful, 
            memorable brand identities that connect with audiences and drive business growth.
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

        {/* Process & Benefits */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Process */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Our Brand Building Process</h3>
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

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Brand Building Benefits</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-[#0F172A] border border-[#334155]">
                  <div className="w-12 h-12 bg-[#3B82F6] text-white rounded-xl flex items-center justify-center flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-[#94A3B8] text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Brand Elements Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-[#1E293B] to-[#0F172A] border border-[#334155] rounded-3xl p-8 mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Comprehensive Brand Elements
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3B82F6] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Palette size={24} className="text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Visual Identity</h4>
              <p className="text-[#94A3B8] text-sm">Logo, colors, typography, imagery</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B5CF6] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Megaphone size={24} className="text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Brand Voice</h4>
              <p className="text-[#94A3B8] text-sm">Tone, messaging, storytelling</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#10B981] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Globe size={24} className="text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Digital Presence</h4>
              <p className="text-[#94A3B8] text-sm">Website, social media, email</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
   <Footer/>
   </>
  );
};

export default BrandBuilding;