"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Star, Eye, Heart } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Modern, fast, SEO optimized e-commerce website with seamless user experience.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "#",
    category: "Web Development",
    technologies: ["React", "Next.js", "Node.js"],
    rating: 4.9,
    likes: 128
  },
  {
    title: "Fitness Mobile App",
    description: "Smooth, scalable fitness tracking app for iOS and Android platforms.",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "#",
    category: "App Development",
    technologies: ["React Native", "Firebase", "Redux"],
    rating: 4.8,
    likes: 95
  },
  {
    title: "Digital Marketing Campaign",
    description: "Comprehensive digital marketing strategy that increased client revenue by 300%.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    link: "#",
    category: "Digital Marketing",
    technologies: ["SEO", "Google Ads", "Social Media"],
    rating: 5.0,
    likes: 156
  },
  {
    title: "Brand Identity Design",
    description: "Complete brand identity and UI/UX design for tech startup.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    link: "#",
    category: "Branding & UI/UX",
    technologies: ["Figma", "Adobe Suite", "Webflow"],
    rating: 4.9,
    likes: 142
  },
  {
    title: "AI Automation System",
    description: "Intelligent automation system that reduced manual work by 80%.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "#",
    category: "AI Automation",
    technologies: ["Python", "Machine Learning", "API"],
    rating: 4.7,
    likes: 89
  },
  {
    title: "Corporate Website",
    description: "Modern corporate website with CMS and booking system integration.",
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    link: "#",
    category: "Web Development",
    technologies: ["WordPress", "PHP", "JavaScript"],
    rating: 4.8,
    likes: 113
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-[#0F172A] px-6 md:px-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#3B82F6] rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#8B5CF6] rounded-full blur-3xl opacity-5"></div>
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
            <Star size={16} className="text-[#3B82F6]" />
            <span className="text-sm text-[#CBD5E1]">Our Work</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">Projects</span>
          </h2>

          <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects that showcase our expertise 
            in delivering exceptional digital solutions.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-3xl border border-[#334155] hover:border-[#3B82F6] duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-500"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#3B82F6] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Stats Overlay */}
                <div className="absolute top-4 right-4 flex items-center gap-3">
                  <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-white text-sm font-medium">{project.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Heart size={14} className="text-red-400" />
                    <span className="text-white text-sm font-medium">{project.likes}</span>
                  </div>
                </div>

                {/* View Project Button */}
                <motion.a
                  href={project.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute bottom-4 right-4 bg-[#3B82F6] text-white p-3 rounded-xl shadow-lg hover:shadow-xl hover:bg-[#2563EB] duration-300 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <Eye size={20} />
                </motion.a>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#3B82F6] duration-300">
                  {project.title}
                </h3>

                <p className="text-[#94A3B8] mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-[#334155] text-[#CBD5E1] px-3 py-1 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Link */}
                <motion.a
                  href={project.link}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-[#3B82F6] font-semibold hover:text-[#2563EB] duration-300 group/link"
                >
                  View Case Study
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 duration-300" />
                </motion.a>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#3B82F6] opacity-0 group-hover:opacity-100 duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-[#1E293B] to-[#0F172A] border border-[#334155] rounded-3xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3B82F6] rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#8B5CF6] rounded-full blur-2xl"></div>
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4 relative z-10">
              Ready to Experience the Difference?
            </h3>
            <p className="text-[#94A3B8] text-lg mb-8 max-w-2xl mx-auto relative z-10">
              Join hundreds of satisfied clients who have transformed their digital presence with our expert services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] px-8 py-4 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/25 duration-300 flex items-center gap-3"
              >
                <Link href='/contact'>Start Your Project</Link>
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;