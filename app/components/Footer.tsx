"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, Heart, Sparkles, MessageCircle, Globe, Zap } from "lucide-react";

const FooterPage = () => {
  const services = [
    { name: "Web Development", href: "/website" },
    { name: "App Development", href: "/appdevelopment" },
    { name: "Digital Marketing", href: "/digitalmarketing" },
    { name: "Brand Building", href: "/branbuilding" },
    { name: "AI Automation", href: "/ai-automation" },
    { name: "Content Creation", href: "/contentcreation" }
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" }
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/people/Nirvixa/61579641066740/", name: "Facebook" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/nirvixa2025/", name: "Instagram",},
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/company/108362004/admin/dashboard/", name: "LinkedIn" }
  ];

  return (
    <footer className="bg-[#0A0F1C] text-[#94A3B8] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3B82F6] rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#8B5CF6] rounded-full blur-3xl opacity-5"></div>
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-[#EC4899] rounded-full blur-3xl opacity-5"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6 md:px-16 py-16 border-b border-[#334155]"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#1E293B] border border-[#334155] px-4 py-2 rounded-full mb-6"
            >
              <Zap size={16} className="text-[#3B82F6]" />
              <span className="text-sm text-[#CBD5E1]">Ready to Get Started?</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Build Something <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">Amazing</span>
            </h2>
            
            <p className="text-xl text-[#94A3B8] mb-8 max-w-2xl mx-auto">
              Ready to transform your digital presence? Let's discuss how we can help your business grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] px-8 py-4 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/25 duration-300 flex items-center gap-3 cursor-pointer"
              >
                <Link href='/contact'>Start Your Project</Link>
                <ArrowRight size={20} />
              </motion.div>
              
              <motion.a
                href="tel:+7996032595"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-[#334155] px-8 py-4 rounded-xl text-white font-semibold hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/10 duration-300 flex items-center gap-3"
              >
                <Phone size={20} />
                Call Now
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Footer Links */}
        <div className="container mx-auto px-6 md:px-16 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
                  Nixrvixa
                </h2>
                {/* <Sparkles size={16} className="text-[#8B5CF6]" /> */}
              </div>
              
              <p className="text-[#94A3B8] leading-relaxed mb-6">
                We provide professional digital solutions like web development, 
                app development, branding, and digital marketing to help your 
                business grow and succeed in the digital world.
              </p>
              
              <div className="flex items-center gap-2 text-sm text-[#64748B]">
                <Globe size={16} />
                <span>Worldwide Services</span>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link 
                      href={service.href} 
                      className="text-[#94A3B8] hover:text-[#3B82F6] duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full opacity-0 group-hover:opacity-100 duration-300"></div>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="text-[#94A3B8] hover:text-[#3B82F6] duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 bg-[#8B5CF6] rounded-full opacity-0 group-hover:opacity-100 duration-300"></div>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Get In Touch</h3>
              
              {/* Contact Info */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-[#3B82F6] rounded-lg flex items-center justify-center group-hover:scale-110 duration-300">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[#94A3B8] text-sm">Email</div>
                    <a href="mailto:nirvixa@gmail.com" className="text-white hover:text-[#3B82F6] duration-300">
                      nirvixa@gmail.com
                    </a>
                  </div>
                </li>
                
                <li className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-[#10B981] rounded-lg flex items-center justify-center group-hover:scale-110 duration-300">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[#94A3B8] text-sm">Phone</div>
                    <a href="tel:+917996032595" className="text-white hover:text-[#10B981] duration-300">
                      +91 79960 32595
                    </a>
                  </div>
                </li>
                
                <li className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-[#F59E0B] rounded-lg flex items-center justify-center group-hover:scale-110 duration-300">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[#94A3B8] text-sm">Location</div>
                    <div className="text-white">Bengaluru, Karnataka</div>
                  </div>
                </li>
              </ul>

              {/* Social Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-12 h-12 bg-[#1E293B] border border-[#334155] rounded-xl flex items-center justify-center hover:bg-[#3B82F6] hover:border-[#3B82F6] duration-300 group"
                      aria-label={social.name}
                    >
                      <div className="text-[#94A3B8] group-hover:text-white duration-300">
                        {social.icon}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#334155]">
          <div className="container mx-auto px-6 md:px-16 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 text-[#64748B] text-sm"
              >
                <span>© {new Date().getFullYear()} Nixvixa. All rights reserved.</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex gap-6 text-sm text-[#64748B]"
              >
                <Link href="/privacy" className="hover:text-[#3B82F6] duration-300">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-[#3B82F6] duration-300">Terms of Service</Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;