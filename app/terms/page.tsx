"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Shield, Clock, DollarSign, Code, Target, AlertTriangle, Mail, Phone, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsAndConditions = () => {
  const sections = [
    {
      icon: <Shield size={24} />,
      title: "1. Acceptance of Terms",
      content: "By accessing or using Nirvixa's website and services, you agree to follow all the terms and policies mentioned on this page. If you do not agree with any part of these terms, you should not use our website or services. Using this website means you understand and accept all the rules below."
    },
    {
      icon: <Code size={24} />,
      title: "2. Services Provided",
      content: "Nirvixa provides services including web development, web design, digital marketing, branding, content creation, app development, and AI automation. The details, pricing, and timelines for these services may vary based on your business requirements and project scope."
    },
    {
      icon: <DollarSign size={24} />,
      title: "3. Payments & Refunds",
      content: "All payments must be made as per the agreed project plan. We do not provide refunds once the project has begun or any work has been delivered. Any change in requirements after confirmation may result in additional charges. Advance payments are non-refundable under all circumstances."
    },
    {
      icon: <Clock size={24} />,
      title: "4. Project Timelines",
      content: "Project timelines depend on how fast clients provide content, feedback, and approvals. Delays from the client's side may extend the delivery date. Nirvixa aims to deliver all projects on time but does not guarantee deadlines if requirements are unclear or incomplete."
    },
    {
      icon: <FileText size={24} />,
      title: "5. Ownership & Usage Rights",
      content: "Once the final payment is completed, you own all the digital assets delivered such as website files, content, logos, creatives, or app builds. However, Nirvixa reserves the right to showcase completed projects in our portfolio unless the client requests otherwise in writing."
    },
    {
      icon: <AlertTriangle size={24} />,
      title: "6. Prohibited Activities",
      content: "You agree not to misuse our website or services for illegal or harmful activities. This includes hacking, spreading malware, stealing data, or using our content without permission. Any misuse will result in immediate termination of services."
    },
    {
      icon: <Shield size={24} />,
      title: "7. Limitation of Liability",
      content: "Nirvixa is not responsible for any business losses, technical issues, or security problems caused by third-party tools, hosting providers, or misuse by the client. We do our best to deliver secure and optimized solutions, but we cannot guarantee 100% error-free results at all times."
    },
    {
      icon: <FileText size={24} />,
      title: "8. Changes to Terms",
      content: "Nirvixa may update or modify these Terms & Conditions at any time. Any changes will be posted on this page. Continued use of the website means you accept the updated terms."
    }
  ];

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "nirvixa@gmail.com",
      href: "mailto:nirvixa@gmail.com"
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+91 7996032595",
      href: "tel:+91 7996032595"
    },
    {
      icon: <Target size={20} />,
      label: "Website",
      value: "www.nirvixa.com",
      href: "/"
    }
  ];

  return (
   <>
   <Navbar />
    <section className="py-24 bg-[#0F172A] text-[#94A3B8] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#3B82F6] rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8B5CF6] rounded-full blur-3xl opacity-5"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#10B981] rounded-full blur-3xl opacity-5"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#1E293B] border border-[#334155] px-4 py-2 rounded-full mb-6"
          >
            <FileText size={16} className="text-[#3B82F6]" />
            <span className="text-sm text-[#CBD5E1]">Legal Terms</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Terms & <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">Conditions</span>
          </h1>

          <div className="bg-gradient-to-r from-[#1E293B] to-[#0F172A] border border-[#334155] rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-lg text-[#94A3B8] text-center">
              Please read these terms carefully before using our services. By accessing our website 
              or engaging our services, you agree to be bound by these terms and conditions.
            </p>
          </div>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-6 mb-16">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] rounded-2xl p-8 hover:border-[#3B82F6] duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#3B82F6] text-white rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 duration-300">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                    {section.title}
                    <ChevronRight size={20} className="text-[#3B82F6]" />
                  </h2>
                  <p className="text-[#94A3B8] leading-relaxed text-lg">{section.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-[#1E293B] to-[#0F172A] border border-[#334155] rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Contact Information
          </h2>
          <p className="text-[#94A3B8] text-center mb-8 max-w-2xl mx-auto text-lg">
            If you have any questions about these Terms & Conditions, you can contact us 
            through any of the methods below. We are always ready to support and guide you.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-[#0F172A] border border-[#334155] rounded-2xl p-6 text-center hover:border-[#3B82F6] duration-300 group"
              >
                <div className="w-12 h-12 bg-[#3B82F6] text-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 duration-300">
                  {contact.icon}
                </div>
                <h3 className="text-white font-semibold mb-2 text-lg">{contact.label}</h3>
                <p className="text-[#94A3B8] group-hover:text-white duration-300">{contact.value}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12 p-6 border-t border-[#334155]"
        >
          <div className="flex items-center justify-center gap-3 text-[#64748B] text-sm">
            <AlertTriangle size={16} className="text-[#F59E0B]" />
            <span>By using our website and services, you agree to these Terms & Conditions.</span>
          </div>
        </motion.div>
      </div>
    </section>
   <Footer />
   </>
  );
};

export default TermsAndConditions;