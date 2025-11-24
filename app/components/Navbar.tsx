"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown, Sparkles, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Web Development", href: "/website", color: "#3B82F6" },
    { name: "Digital Marketing", href: "/digitalmarketing", color: "#8B5CF6" },
    { name: "Brand Building", href: "/branbuilding", color: "#EC4899" },
    { name: "AI Automation", href: "/ai_automation", color: "#10B981" },
    { name: "Content Creation", href: "/contentcreation", color: "#F59E0B" },
    { name: "App Development", href: "/appdevlopment", color: "#EF4444" }
  ];

  return (
    <motion.nav 
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-[#0A0F1C] shadow-2xl shadow-blue-900/20 backdrop-blur-lg border-b border-[#1E293B]" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Enhanced Logo */}
        <Link href="/" className="group">
          <h1 className="text-2xl font-bold lg:ml-24 sm:ml-24 bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent bg-size-200 animate-gradient">
            Nixvixa<span className="text-white"></span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center font-medium">
          <li>
            <Link 
              href="/" 
              className="relative text-white hover:text-[#3B82F6] duration-300 group transform transition-transform hover:-translate-y-0.5"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>

          <li>
            <Link 
              href="/about" 
              className="relative text-white hover:text-[#3B82F6] duration-300 group transform transition-transform hover:-translate-y-0.5"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>

          {/* Enhanced Services Dropdown */}
          <li className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen((open) => !open)}
              className="flex items-center gap-1 text-white hover:text-[#3B82F6] duration-300 transform transition-transform hover:-translate-y-0.5"
            >
              <span>Services</span> 
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Enhanced Dropdown */}
            {servicesOpen && (
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 mt-4 bg-[#1A1F2E] border border-[#2D3748] rounded-2xl py-4 shadow-2xl w-64 backdrop-blur-lg z-50"
              >
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center px-4 py-3 hover:bg-gradient-to-r from-[#3B82F6]/20 to-[#8B5CF6]/20 hover:text-white duration-300 border-l-2 border-transparent hover:border-[#3B82F6] group"
                    >
                      <div 
                        className="w-2 h-2 rounded-full mr-3 group-hover:scale-125 transition-transform"
                        style={{ backgroundColor: service.color }}
                      ></div>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </li>

          <li>
            <Link 
              href="/projects" 
              className="relative text-white hover:text-[#3B82F6] duration-300 group transform transition-transform hover:-translate-y-0.5"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>

          <li>
            <Link 
              href="/contact" 
              className="relative text-white hover:text-[#3B82F6] duration-300 group transform transition-transform hover:-translate-y-0.5"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>

          {/* Enhanced CTA Button */}
          <Link
            href="/contact"
            className="relative bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] px-6 py-3 rounded-xl hover:from-[#2563EB] hover:to-[#7C3AED] duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 group overflow-hidden transform transition-transform hover:-translate-y-0.5"
          >
            <span className="relative z-10 font-semibold flex items-center gap-2">
              Get a Quote <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </Link>
        </ul>

        {/* Enhanced Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg bg-[#1A1F2E] border border-[#2D3748] hover:border-[#3B82F6] duration-300 group"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={24} className="text-[#3B82F6] group-hover:scale-110 transition-transform" />
          ) : (
            <Menu size={24} className="text-white group-hover:text-[#3B82F6] transition-colors" />
          )}
        </button>
      </div>

      {/* Enhanced Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A0F1C] border-t border-[#2D3748] backdrop-blur-lg">
          <div className="container mx-auto py-6 px-6 space-y-2">
            <Link
              href="/"
              className="flex items-center text-white hover:text-[#3B82F6] duration-300 group py-3 px-4 rounded-xl hover:bg-[#1E293B]"
              onClick={() => setMenuOpen(false)}
            >
              <div className="w-1 h-6 bg-[#3B82F6] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              Home
            </Link>

            <Link
              href="/about"
              className="flex items-center text-white hover:text-[#3B82F6] duration-300 group py-3 px-4 rounded-xl hover:bg-[#1E293B]"
              onClick={() => setMenuOpen(false)}
            >
              <div className="w-1 h-6 bg-[#3B82F6] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              About
            </Link>

            {/* Enhanced Mobile Services */}
            <div className="space-y-2">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full text-white hover:text-[#3B82F6] duration-300 py-3 px-4 rounded-xl hover:bg-[#1E293B] group"
              >
                <div className="flex items-center">
                  <div className="w-1 h-6 bg-[#8B5CF6] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Services
                </div>
                <ChevronDown className={`transform duration-300 ${servicesOpen ? 'rotate-180 text-[#8B5CF6]' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="pl-8 space-y-2 border-l border-[#334155] ml-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="flex items-center text-gray-300 hover:text-white duration-300 py-2 px-4 rounded-lg hover:bg-[#1E293B] group"
                      onClick={() => setMenuOpen(false)}
                    >
                      <div 
                        className="w-2 h-2 rounded-full mr-3 group-hover:scale-125 transition-transform"
                        style={{ backgroundColor: service.color }}
                      ></div>
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/projects"
              className="flex items-center text-white hover:text-[#3B82F6] duration-300 group py-3 px-4 rounded-xl hover:bg-[#1E293B]"
              onClick={() => setMenuOpen(false)}
            >
              <div className="w-1 h-6 bg-[#3B82F6] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              Projects
            </Link>

            <Link
              href="/contact"
              className="flex items-center text-white hover:text-[#3B82F6] duration-300 group py-3 px-4 rounded-xl hover:bg-[#1E293B]"
              onClick={() => setMenuOpen(false)}
            >
              <div className="w-1 h-6 bg-[#3B82F6] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              Contact
            </Link>

            {/* Mobile CTA Button */}
            <Link
              href="/contact"
              className="block bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white text-center px-4 py-3 rounded-xl font-semibold mt-6 hover:shadow-lg hover:shadow-blue-500/25 duration-300 flex items-center justify-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              Get a Quote <Sparkles size={16} />
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;