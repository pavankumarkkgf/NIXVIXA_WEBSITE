"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, Zap, Users, TrendingUp, Headphones, Sparkles, ArrowRight, CheckCircle } from "lucide-react";

const features = [
  {
    title: "High Quality Work",
    description: "We deliver premium websites, apps and marketing solutions that stand out with exceptional craftsmanship.",
    icon: <ShieldCheck size={32} />,
    color: "#3B82F6",
    stats: "99%",
    subText: "Client Satisfaction",
    features: ["Pixel Perfect Design", "Clean Code", "Quality Assurance", "Industry Standards"]
  },
  {
    title: "Creative & Modern Designs",
    description: "Every project is built with unique, interactive UI/UX designs that captivate and convert visitors.",
    icon: <Sparkles size={32} />,
    color: "#8B5CF6",
    stats: "500+",
    subText: "Designs Delivered",
    features: ["User-Centered Design", "Modern Aesthetics", "Interactive Elements", "Brand Alignment"]
  },
  {
    title: "Fast Delivery",
    description: "We provide quick turnaround times without compromising quality, ensuring your project launches on schedule.",
    icon: <Zap size={32} />,
    color: "#10B981",
    stats: "2x",
    subText: "Faster Delivery",
    features: ["Agile Methodology", "Efficient Workflow", "Deadline Driven", "Rapid Prototyping"]
  },
  {
    title: "Experienced Team",
    description: "A passionate team of experts skilled in latest technologies, design trends and marketing strategies.",
    icon: <Users size={32} />,
    color: "#EC4899",
    stats: "50+",
    subText: "Team Members",
    features: ["Tech Experts", "Design Specialists", "Marketing Gurus", "Industry Veterans"]
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock dedicated support ensuring your business runs smoothly at all times.",
    icon: <Headphones size={32} />,
    color: "#F59E0B",
    stats: "24/7",
    subText: "Available",
    features: ["Instant Response", "Technical Support", "Maintenance", "Priority Assistance"]
  },
  {
    title: "Guaranteed Growth",
    description: "Data-driven digital marketing strategies that deliver measurable business growth and ROI.",
    icon: <TrendingUp size={32} />,
    color: "#22C55E",
    stats: "3x",
    subText: "Growth Rate",
    features: ["ROI Focused", "Data Analytics", "Performance Tracking", "Growth Strategy"]
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-[#0F172A] px-6 md:px-16 relative overflow-hidden">

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#1E293B] border border-[#334155] px-4 py-2 rounded-full mb-6"
          >
            <Zap size={16} className="text-[#3B82F6]" />
            <span className="text-sm text-[#CBD5E1]">Why We Stand Out</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Why Choose <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">Us?</span>
          </h2>

          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
            We combine cutting-edge technology with creative excellence to deliver digital solutions 
            that drive real business results and exceptional user experiences.
          </p>
        </motion.div>

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-8 rounded-3xl border border-[#334155] hover:border-[#3B82F6] duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
            >
              {/* Background Glow Effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 duration-300"
                style={{ backgroundColor: item.color }}
              ></div>

              {/* Icon & Stats Container */}
              <div className="flex items-start justify-between mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 flex items-center justify-center rounded-2xl shadow-lg group-hover:shadow-xl duration-300"
                  style={{ 
                    backgroundColor: item.color + "20", 
                    color: item.color 
                  }}
                >
                  {item.icon}
                </motion.div>
                
                {/* Stats Badge */}
                <div className="text-right">
                  <div className="text-2xl font-bold text-white" style={{ color: item.color }}>
                    {item.stats}
                  </div>
                  <div className="text-xs text-[#64748B] font-medium">
                    {item.subText}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-[#3B82F6] duration-300">
                  {item.title}
                </h3>

                <p className="text-[#94A3B8] leading-relaxed">
                  {item.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 pt-2">
                  {item.features.map((feature, featureIndex) => (
                    <motion.div 
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.1 }}
                      className="flex items-center gap-3 text-sm"
                    >
                      <CheckCircle 
                        size={16} 
                        className="flex-shrink-0"
                        style={{ color: item.color }}
                      />
                      <span className="text-[#CBD5E1]">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hover Border Effect */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 duration-300 border-2 pointer-events-none"
                style={{
                  borderColor: item.color,
                  background: `linear-gradient(135deg, ${item.color}10, transparent)`
                }}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;