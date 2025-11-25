"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  Code,
  Layout,
  Megaphone,
  PenTool,
  Smartphone,
  Brain,
  Target,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Custom websites built using modern technologies like React, Next.js, Node.js for high performance and scalability.",
    icon: <Code size={32} />,
    color: "#3B82F6",
    id: "webdev",
    href: "/website",
    features: ["React/Next.js", "Responsive Design", "SEO Optimized", "Fast Loading"]
  },
  {
    title: "Digital Marketing",
    description:
      "SEO, social media management, branding, Google ads & complete growth-focused marketing strategies.",
    icon: <Megaphone size={32} />,
    color: "#8B5CF6",
    id: "digital",
    href: "/digitalmarketing",
    features: ["SEO Optimization", "Social Media", "Google Ads", "Analytics"]
  },
  {
    title: "Content Creation",
    description:
      "High-quality content, social media posts, video edits, graphics & compelling brand storytelling.",
    icon: <PenTool size={32} />,
    color: "#EC4899",
    id: "content",
    href: "/contentcreation",
    features: ["Video Editing", "Graphics Design", "Copywriting", "Strategy"]
  },
  {
    title: "App Development",
    description:
      "Building fast, scalable Android & iOS apps with modern UI and exceptional user experience.",
    icon: <Smartphone size={32} />,
    color: "#10B981",
    id: "appdev",
    href: "/appdevlopment",
    features: ["iOS & Android", "Cross-Platform", "UI/UX Design", "App Store"]
  },
  {
    title: "AI Automation",
    description:
      "Intelligent automation solutions using AI to streamline processes and boost productivity.",
    icon: <Brain size={32} />,
    color: "#F59E0B",
    id: "ai",
    href: "/ai_automation",
    features: ["Chatbots", "Process Automation", "Machine Learning", "AI Integration"]
  },
  {
    title: "Brand Building",
    description:
      "Comprehensive branding strategies to establish strong brand identity and market presence.",
    icon: <Target size={32} />,
    color: "#EF4444",
    id: "brand",
    href: "/branbuilding",
    features: ["Logo Design", "Brand Strategy", "Identity Systems", "Market Positioning"]
  }
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 bg-[#0F172A] px-6 md:px-16 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#3B82F6] rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8B5CF6] rounded-full blur-3xl opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#EC4899] rounded-full blur-3xl opacity-5"></div>
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
            <span className="text-sm text-[#CBD5E1]">What We Offer</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">Services</span>
          </h2>

          <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to drive your business growth and 
            establish your brand in the digital landscape.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-8 rounded-3xl border border-[#334155] hover:border-[#3B82F6] duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
            >
              {/* Background Glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 duration-300"
                style={{ backgroundColor: service.color }}
              ></div>

              {/* Icon Container */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative z-10 w-16 h-16 flex items-center justify-center rounded-2xl mb-6 shadow-lg group-hover:shadow-xl duration-300"
                style={{ 
                  backgroundColor: service.color + "20", 
                  color: service.color 
                }}
              >
                {service.icon}
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#3B82F6] duration-300">
                  {service.title}
                </h3>

                <p className="text-[#94A3B8] mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 text-sm">
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: service.color }}
                      ></div>
                      <span className="text-[#CBD5E1]">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link href={service.href}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-sm font-semibold group/btn"
                    style={{ color: service.color }}
                  >
                    Learn More
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 duration-300" />
                  </motion.div>
                </Link>
              </div>

              {/* Hover Effect Border */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 duration-300"
                style={{
                  background: `linear-gradient(135deg, ${service.color}20, transparent)`
                }}
              ></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;