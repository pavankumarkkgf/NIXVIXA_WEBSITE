"use client";

import React from "react";
import { motion } from "framer-motion";
import { PenTool, Camera, Video, FileText, TrendingUp, ArrowRight, Zap, Users, BarChart, PlayCircle, Instagram, Youtube, MessageCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContentCreation = () => {
  const services = [
    {
      icon: <FileText size={28} />,
      title: "Content Writing",
      description: "Compelling blog posts, articles, and website content that engages readers and drives SEO.",
      color: "#3B82F6",
      deliverables: ["Blog Articles", "Website Content", "SEO-Optimized Copy", "Email Newsletters"]
    },
    {
      icon: <Camera size={28} />,
      title: "Social Media Content",
      description: "Eye-catching visuals and captions for Instagram, Facebook, LinkedIn, and other platforms.",
      color: "#8B5CF6",
      deliverables: ["Social Media Posts", "Carousel Content", "Story Creatives", "Hashtag Strategy"]
    },
    {
      icon: <Video size={28} />,
      title: "Video Production",
      description: "Engaging video content including reels, shorts, tutorials, and brand stories.",
      color: "#EC4899",
      deliverables: ["Social Media Videos", "Product Demos", "Animated Videos", "Video Editing"]
    },
    {
      icon: <PlayCircle size={28} />,
      title: "Motion Graphics",
      description: "Animated content that captures attention and explains complex ideas simply.",
      color: "#10B981",
      deliverables: ["Animated Explainer", "Logo Animations", "Motion Graphics", "Animated Ads"]
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Content Strategy",
      description: "Data-driven content planning and calendar management for consistent brand presence.",
      color: "#F59E0B",
      deliverables: ["Content Calendar", "Audience Research", "Performance Analytics", "Strategy Planning"]
    },
    {
      icon: <MessageCircle size={28} />,
      title: "Brand Storytelling",
      description: "Narrative-driven content that builds emotional connections with your audience.",
      color: "#EF4444",
      deliverables: ["Brand Narratives", "Case Studies", "Testimonials", "Story-driven Campaigns"]
    }
  ];

  const platforms = [
    {
      icon: <Instagram size={24} />,
      name: "Instagram",
      content: ["Reels", "Stories", "Posts", "IGTV"]
    },
    {
      icon: <Youtube size={24} />,
      name: "YouTube",
      content: ["Shorts", "Tutorials", "Vlogs", "Brand Films"]
    },
    {
      icon: <FileText size={24} />,
      name: "Blog & SEO",
      content: ["Articles", "Guides", "Case Studies", "SEO Content"]
    },
    {
      icon: <MessageCircle size={24} />,
      name: "Social Media",
      content: ["LinkedIn", "Twitter", "Facebook", "TikTok"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Content Strategy",
      description: "Define goals, audience, and content pillars"
    },
    {
      step: "02",
      title: "Content Planning",
      description: "Create editorial calendar and content themes"
    },
    {
      step: "03",
      title: "Content Creation",
      description: "Produce high-quality written and visual content"
    },
    {
      step: "04",
      title: "Optimization",
      description: "SEO optimization and platform-specific formatting"
    },
    {
      step: "05",
      title: "Distribution",
      description: "Schedule and publish across all platforms"
    },
    {
      step: "06",
      title: "Performance Analysis",
      description: "Track engagement and optimize future content"
    }
  ];

  const stats = [
    { number: "500+", label: "Content Pieces Monthly" },
    { number: "3M+", label: "Monthly Reach" },
    { number: "85%", label: "Engagement Rate" },
    { number: "24h", label: "Content Delivery" }
  ];

  return (
    <>
    <Navbar />
    <section id="contentcreation" className="py-24 bg-[#0F172A] px-6 md:px-16 relative overflow-hidden">
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
            <PenTool size={16} className="text-[#3B82F6]" />
            <span className="text-sm text-[#CBD5E1]">Content Excellence</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Content <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">Creation</span>
          </h2>

          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
            We create engaging, high-quality content that strengthens your brand and drives audience attention. 
            From social media posts to blogs to video production — we handle everything end-to-end.
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
            <div className="grid grid-cols-2 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-[#3B82F6] text-white rounded-xl flex items-center justify-center mx-auto mb-3">
                    {platform.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-2">{platform.name}</h4>
                  <div className="space-y-1">
                    {platform.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="text-[#94A3B8] text-xs">
                        {item}
                      </div>
                    ))}
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
            <h3 className="text-2xl font-bold text-white mb-6">Content Creation Process</h3>
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

        {/* Content Types Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-[#1E293B] to-[#0F172A] border border-[#334155] rounded-3xl p-8 mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Comprehensive Content Solutions
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3B82F6] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <FileText size={24} className="text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Written Content</h4>
              <p className="text-[#94A3B8] text-sm">Blogs, articles, copywriting</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B5CF6] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Camera size={24} className="text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Visual Content</h4>
              <p className="text-[#94A3B8] text-sm">Graphics, images, infographics</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#EC4899] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Video size={24} className="text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Video Content</h4>
              <p className="text-[#94A3B8] text-sm">Reels, tutorials, animations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#10B981] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <TrendingUp size={24} className="text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Strategy & Analytics</h4>
              <p className="text-[#94A3B8] text-sm">Planning, optimization, reports</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default ContentCreation;