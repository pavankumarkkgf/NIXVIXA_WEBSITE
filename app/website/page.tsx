"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, ArrowRight, Zap, Database, Shield, Globe, Cpu, Layout, Smartphone, Rocket, CheckCircle, Server } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WebDevelopment = () => {
  const services = [
    {
      icon: <Layout size={28} />,
      title: "Frontend Development",
      description: "Modern, responsive user interfaces built with React, Next.js, and cutting-edge technologies.",
      color: "#3B82F6",
      deliverables: ["React/Next.js", "TypeScript", "Tailwind CSS", "Component Libraries"]
    },
    {
      icon: <Server size={28} />,
      title: "Backend Development",
      description: "Scalable server-side architecture with robust APIs and database management.",
      color: "#8B5CF6",
      deliverables: ["Node.js", "Python", "REST APIs", "Database Design"]
    },
    {
      icon: <Smartphone size={28} />,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect performance across all devices and screen sizes.",
      color: "#10B981",
      deliverables: ["Mobile Optimization", "Tablet Layouts", "Cross-browser", "Progressive Web Apps"]
    },
    {
      icon: <Cpu size={28} />,
      title: "Performance Optimization",
      description: "Lightning-fast websites with optimized loading times and smooth user interactions.",
      color: "#EC4899",
      deliverables: ["Code Splitting", "Image Optimization", "Caching", "CDN Integration"]
    },
    {
      icon: <Shield size={28} />,
      title: "Security & Maintenance",
      description: "Enterprise-grade security protocols and ongoing maintenance for optimal performance.",
      color: "#F59E0B",
      deliverables: ["SSL Certificates", "Security Audits", "Regular Updates", "Backup Systems"]
    },
    {
      icon: <Database size={28} />,
      title: "Database Solutions",
      description: "Efficient data management with scalable database architectures and optimization.",
      color: "#EF4444",
      deliverables: ["MongoDB", "PostgreSQL", "Firebase", "Database Migration"]
    }
  ];

  const technologies = [
    {
      category: "Frontend",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redux"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "Express", "FastAPI", "GraphQL"]
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "Firebase", "Redis", "MySQL"]
    },
    {
      category: "DevOps",
      items: ["Docker", "AWS", "Vercel", "GitHub Actions", "CI/CD"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Planning & Analysis",
      description: "Requirements gathering, technology stack selection, and project architecture"
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Wireframing, prototyping, and visual design implementation"
    },
    {
      step: "03",
      title: "Development",
      description: "Agile development with weekly iterations and code reviews"
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Comprehensive testing across devices, browsers, and performance metrics"
    },
    {
      step: "05",
      title: "Deployment",
      description: "Production deployment with monitoring and analytics setup"
    },
    {
      step: "06",
      title: "Support & Maintenance",
      description: "Ongoing updates, security patches, and feature enhancements"
    }
  ];

  const stats = [
    { number: "300+", label: "Websites Built" },
    { number: "99.9%", label: "Uptime" },
    { number: "<2s", label: "Load Time" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  const projectTypes = [
    {
      type: "Business Websites",
      description: "Professional corporate websites with CMS integration"
    },
    {
      type: "E-commerce Platforms",
      description: "Full-featured online stores with payment integration"
    },
    {
      type: "Web Applications",
      description: "Custom SaaS products and business applications"
    },
    {
      type: "Landing Pages",
      description: "High-converting landing pages for marketing campaigns"
    }
  ];

  return (
   <>
   <Navbar />
    <section id="webdevelopment" className="py-24 bg-[#0F172A] px-6 md:px-16 relative overflow-hidden">
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
            <Code2 size={16} className="text-[#3B82F6]" />
            <span className="text-sm text-[#CBD5E1]">Development Excellence</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Web <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">Development</span>
          </h2>

          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
            We build fast, modern, and scalable websites using the best technologies. 
            From business websites, portfolios, landing pages, to full-stack web applications — 
            we handle everything with clean code and strong UI/UX.
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
            <h3 className="text-2xl font-bold text-white mb-6">Technology Stack</h3>
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
            <h3 className="text-2xl font-bold text-white mb-6">Development Process</h3>
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

        {/* Project Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-[#1E293B] to-[#0F172A] border border-[#334155] rounded-3xl p-8 mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Project Types We Build
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectTypes.map((project, index) => (
              <div key={index} className="text-center p-6 bg-[#0F172A] border border-[#334155] rounded-2xl">
                <div className="w-12 h-12 bg-[#3B82F6] rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle size={24} className="text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">{project.type}</h4>
                <p className="text-[#94A3B8] text-sm">{project.description}</p>
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

export default WebDevelopment;