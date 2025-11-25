"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-[#0F172A] px-6 md:px-16"
    >
      <div className="container mt-20 lg:mt-0 mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            We Build  
            <span className="text-[#3B82F6]"> Modern Websites</span>
            <br />
            & Digital Experiences
          </h1>

          <p className="text-lg text-[#CBD5E1] mt-5 max-w-xl">
            We help businesses grow through high-quality web development,
            digital marketing, branding, and app development.  
            Transform your ideas into powerful digital solutions.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <Link
              href="/contact"
              className="bg-[#3B82F6] px-6 py-3 rounded-xl text-white font-semibold hover:bg-[#2563EB] duration-300 shadow-md"
            >
              Get Started
            </Link>

            <Link
              href="/services"
              className="border border-[#8B5CF6] px-6 py-3 rounded-xl text-[#8B5CF6] font-semibold hover:bg-[#8B5CF6] hover:text-white duration-300"
            >
              View Services
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE ANIMATION */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl border border-[#1E293B] bg-gradient-to-br from-[#020617] to-[#0F172A]"
          >
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80"
              alt="Team working on modern website design"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-70" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
              <div className="text-xs text-[#E5E7EB]">
                <div className="font-semibold">Full-Service Digital Studio</div>
                <div className="text-[#9CA3AF]">Websites b7 Apps b7 Marketing</div>
              </div>
              <div className="px-3 py-1 rounded-full bg-black/40 text-[10px] text-[#A5B4FC] border border-white/10">
                100+ Projects
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
