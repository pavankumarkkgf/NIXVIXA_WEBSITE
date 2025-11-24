"use client";

import React from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, Code, Palette, ArrowRight, Zap, Smartphone, Globe, Users, CheckCircle, Figma, Eye, Rocket } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WebDesign = () => {
  const services = [
    {
      icon: <Palette size={28} />,
      title: "UI/UX Design",
      description: "User-centered interface design with intuitive navigation and engaging user experiences.",
      color: "#3B82F6",
      deliverables: ["Wireframes", "Prototypes", "User Flows", "Design Systems"]
    },
    {
      icon: <Smartphone size={28} />,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect display across all devices and screen sizes.",
      color: "#8B5CF6",
      deliverables: ["Mobile Optimization", "Tablet Layouts", "Desktop Views", "Cross-browser Testing"]
    },
    {
      icon: <LayoutDashboard size={28} />,
      title: "Modern Layouts",
      description: "Clean, contemporary designs with strategic visual hierarchy and whitespace.",
      color: "#10B981",
      deliverables: ["Layout Design", "Component Library", "Style Guides", "Design Assets"]
    },
    {
      icon: <Figma size={28} />,
      title: "Prototyping",
      description: "Interactive prototypes that bring designs to life before development begins.",
      color: "#EC4899",
      deliverables: ["Clickable Prototypes", "User Testing", "Interaction Design", "Animation Mockups"]
    },
    {
      icon: <Users size={28} />,
      title: "User Research",
      description: "Data-driven insights into user behavior to create optimal design solutions.",
      color: "#F59E0B",
      deliverables: ["User Personas", "Usability Testing", "Analytics Review", "A/B Testing"]
    },
    {
      icon: <Eye size={28} />,
      title: "Visual Design",
      description: "Stunning visual elements, typography, and color schemes that reflect your brand.",
      color: "#EF4444",
      deliverables: ["Typography System", "Color Palette", "Icon Design", "Visual Assets"]
    }
  ];

  const technologies = [
    {
      category: "Design Tools",
      items: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"]
    },
    {
      category: "Prototyping",
      items: ["Figma Prototype", "InVision", "Proto.io", "Marvel", "Webflow"]
    },
    {
      category: "Design Systems",
      items: ["Material Design", "Apple HIG", "Ant Design", "Fluent UI", "Bootstrap"]
    },
    {
      category: "Collaboration",
      items: ["Zeplin", "Abstract", "Miro", "Notion", "Slack Integration"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "Understand business goals, target audience, and project requirements"
    },
    {
      step: "02",
      title: "Wireframing",
      description: "Create structural layouts and information architecture"
    },
    {
      step: "03",
      title: "Visual Design",
      description: "Develop color schemes, typography, and visual elements"
    },
    {
      step: "04",
      title: "Prototyping",
      description: "Build interactive prototypes for user testing"
    },
    {
      step: "05",
      title: "User Testing",
      description: "Gather feedback and iterate on design improvements"
    },
    {
      step: "06",
      title: "Handoff & Assets",
      description: "Deliver final designs and development-ready assets"
    }
  ];

  const stats = [
    { number: "200+", label: "Websites Designed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50%", label: "Faster Load Times" },
    { number: "4.9★", label: "Design Rating" }
  ];

  const designPrinciples = [
    {
      principle: "User-Centered",
      description: "Designs focused on user needs and behaviors"
    },
    {
      principle: "Accessibility",
      description: "WCAG compliant designs for all users"
    },
    {
      principle: "Performance",
      description: "Optimized designs for fast loading"
    },
    {
      principle: "Scalability",
      description: "Designs that grow with your business"
    }
  ];

  return (
    <>
    <Navbar />
    <section id="webdesign" className="py-24 bg-[#0F172A] px-6 md:px-16 relative overflow-hidden">
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
            <LayoutDashboard size={16} className="text-[#3B82F6]" />
            <span className="text-sm text-[#CBD5E1]">Design Excellence</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Web <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">Design</span>
          </h2>

          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
            We design beautiful, modern, and user-friendly websites with stunning UI/UX. 
            Our designs are clean, interactive, and optimized to give users the best browsing experience.
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

        {/* Technologies & Process */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Design Tools & Technologies</h3>
            <div className="space-y-6">
              {technologies.map((tech, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold text-white mb-3">{tech.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item, itemIndex) => (
                      <span key={itemIndex} className="bg-[#334155] text-[#CBD5E1] px-3 py-2 rounded-lg text-sm">
                        {item}
                      </span>
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
            <h3 className="text-2xl font-bold text-white mb-6">Design Process</h3>
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

        {/* Design Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-[#1E293B] to-[#0F172A] border border-[#334155] rounded-3xl p-8 mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Our Design Principles
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designPrinciples.map((principle, index) => (
              <div key={index} className="text-center p-6 bg-[#0F172A] border border-[#334155] rounded-2xl">
                <div className="w-12 h-12 bg-[#3B82F6] rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle size={24} className="text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">{principle.principle}</h4>
                <p className="text-[#94A3B8] text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#1E293B] to-[#0F172A] border border-[#334155] rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-[#94A3B8] text-lg mb-8 max-w-2xl mx-auto">
              Let's create stunning, user-friendly web designs that captivate your audience and drive results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] px-8 py-4 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/25 duration-300 flex items-center gap-3"
              >
                Start Your Design Project
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-[#334155] px-8 py-4 rounded-xl text-white font-semibold hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/10 duration-300"
              >
                View Design Portfolio
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default WebDesign;