"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "CEO, TechBox Solutions",
    feedback:
      "Their web development service is top-notch! Our website became faster, more modern, and helped us get 40% more client inquiries within the first month.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 5,
    project: "E-commerce Platform",
    results: ["40% more leads", "3x faster loading", "Mobile optimized"]
  },
  {
    name: "Ananya Verma",
    role: "Marketing Head, BrandEdge",
    feedback:
      "Their digital marketing strategy helped us grow revenue by 300% in 6 months. The team's expertise in SEO and social media is exceptional!",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 5,
    project: "Digital Marketing Campaign",
    results: ["300% revenue growth", "500% social media engagement", "Top Google rankings"]
  },
  {
    name: "Vikram Patel",
    role: "Founder, AppNation",
    feedback:
      "The mobile app they built for us has 4.9-star ratings on both stores. User engagement increased by 200% with their intuitive UI/UX design.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 5,
    project: "Fitness Mobile App",
    results: ["4.9 App Store rating", "200% user engagement", "50k+ downloads"]
  },
  {
    name: "Priya Singh",
    role: "Creative Director, DesignHub",
    feedback:
      "Their branding work transformed our identity completely. The new brand system increased recognition and helped us secure major partnerships.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 5,
    project: "Brand Identity Design",
    results: ["100% brand recognition", "Major partnerships", "Award-winning design"]
  },
  {
    name: "Arjun Mehta",
    role: "CTO, FinTech Pro",
    feedback:
      "The AI automation system they developed saved us 80% in operational costs. Their technical expertise is truly impressive and reliable.",
    img: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 5,
    project: "AI Automation System",
    results: ["80% cost reduction", "99.9% uptime", "Seamless integration"]
  },
  {
    name: "Neha Kapoor",
    role: "Product Manager, StartupGrid",
    feedback:
      "From concept to launch, their team delivered beyond expectations. Our user base grew exponentially with their strategic approach.",
    img: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    rating: 5,
    project: "SaaS Platform",
    results: ["10x user growth", "95% retention rate", "Enterprise clients"]
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-[#0F172A] px-6 md:px-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#3B82F6] rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8B5CF6] rounded-full blur-3xl opacity-5"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#EC4899] rounded-full blur-3xl opacity-5"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
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
            <span className="text-sm text-[#CBD5E1]">Client Stories</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            What Our <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">Clients Say</span>
          </h2>

          <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about 
            their experience working with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-3xl border border-[#334155] shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 p-8 overflow-hidden"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote size={60} className="text-[#3B82F6]" />
                </div>

                {/* Client Image */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-[#334155] group-hover:border-[#3B82F6] duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#10B981] rounded-full border-2 border-[#1E293B]"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                    <p className="text-[#94A3B8] text-sm">{testimonial.role}</p>
                    <div className="text-xs text-[#3B82F6] font-semibold mt-1">
                      {testimonial.project}
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                  <span className="text-[#94A3B8] text-sm ml-2">{testimonial.rating}.0</span>
                </div>

                {/* Feedback */}
                <p className="text-[#CBD5E1] leading-relaxed mb-6 relative z-10">
                  "{testimonial.feedback}"
                </p>

                {/* Results */}
                <div className="space-y-2 mb-6">
                  {testimonial.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                      <span className="text-[#94A3B8]">{result}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#3B82F6] opacity-0 group-hover:opacity-100 duration-300 pointer-events-none"></div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() =>
                  setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
                }
                className="h-10 w-10 flex items-center justify-center rounded-full border border-[#334155] text-[#CBD5E1] hover:bg-[#1E293B] transition"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    className={
                      index === currentIndex
                        ? "w-4 h-2 rounded-full bg-[#3B82F6]"
                        : "w-2 h-2 rounded-full bg-[#334155]"
                    }
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() =>
                  setCurrentIndex((prev) => (prev + 1) % testimonials.length)
                }
                className="h-10 w-10 flex items-center justify-center rounded-full border border-[#334155] text-[#CBD5E1] hover:bg-[#1E293B] transition"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;