"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Privacy = () => {
  const sections = [
    {
      icon: <Eye size={24} />,
      title: "1. Information We Collect",
      content: "We may collect information you provide directly (for example, when you contact us via the contact form, sign up for a newsletter, or book a consultation) such as your name, email address, phone number, company name, and project details. We also automatically collect certain information about your device and usage (IP address, browser type, pages visited, and timestamps) through cookies and server logs."
    },
    {
      icon: <FileText size={24} />,
      title: "2. How We Use Your Information",
      content: "We use your information to: respond to inquiries, send quotes and marketing materials (if you opt in), provide and improve our services, process bookings, analyze website usage, and comply with legal obligations. We may also use aggregated or de-identified data for analytics and business purposes."
    },
    {
      icon: <Shield size={24} />,
      title: "3. Cookies & Tracking",
      content: "We use cookies and similar tracking technologies to make the website work, improve your experience, and measure site performance. You can control cookies through your browser settings. Some features of the site may not function properly if cookies are disabled."
    },
    {
      icon: <Lock size={24} />,
      title: "4. Sharing & Third Parties",
      content: "We do not sell your personal information. We may share data with trusted third-party service providers who help us operate (e.g., hosting, analytics, email sending) and with legal authorities when required. These providers are contractually required to protect your information and use it only for the services they perform for us."
    },
    {
      icon: <Shield size={24} />,
      title: "5. Data Security",
      content: "We implement reasonable administrative, technical, and physical safeguards to protect your personal information. However, no method of transmission or storage is 100% secure; please understand that we cannot guarantee absolute security."
    },
    {
      icon: <FileText size={24} />,
      title: "6. Data Retention",
      content: "We retain personal data only as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required or allowed by law."
    },
    {
      icon: <Eye size={24} />,
      title: "7. Your Rights",
      content: "Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict processing of your personal data. To exercise these rights or ask questions, please contact us using the details below."
    },
    {
      icon: <Lock size={24} />,
      title: "8. Children",
      content: "Our services are not directed to children under the age of 13. We do not knowingly collect personal data from children. If you believe we have collected such data, please contact us and we will take steps to delete it."
    },
    {
      icon: <FileText size={24} />,
      title: "9. Changes to This Policy",
      content: "We may update this policy from time to time. We will post the updated policy on this page and update the effective date. Significant changes will be communicated via the website or email if we have your contact information."
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
      icon: <MapPin size={20} />,
      label: "Address",
      value: "Bengaluru, Karnataka, India",
      href: "#"
    }
  ];

  return (
   <>
    <Navbar />
    <section className="py-24 bg-[#0F172A] text-[#94A3B8] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#3B82F6] rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#8B5CF6] rounded-full blur-3xl opacity-5"></div>
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
            <Shield size={16} className="text-[#3B82F6]" />
            <span className="text-sm text-[#CBD5E1]">Privacy & Security</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">Policy</span>
          </h1>

          <div className="bg-gradient-to-r from-[#1E293B] to-[#0F172A] border border-[#334155] rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-lg text-[#94A3B8] mb-2">
              Effective date: <strong className="text-white">November 22, 2025</strong>
            </p>
            <p className="text-[#94A3B8] leading-relaxed">
              At <strong className="text-white">Nirvixa</strong>, we respect your privacy and are committed to protecting
              your personal data. This privacy policy explains how we collect, use, share, and
              protect your information when you visit or use our website and related services.
            </p>
          </div>
        </motion.div>

        {/* Policy Sections */}
        <div className="space-y-8 mb-16">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] rounded-2xl p-8 hover:border-[#3B82F6] duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#3B82F6] text-white rounded-xl flex items-center justify-center flex-shrink-0">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    {section.title}
                    <ChevronRight size={20} className="text-[#3B82F6]" />
                  </h2>
                  <p className="text-[#94A3B8] leading-relaxed">{section.content}</p>
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
            Contact Us
          </h2>
          <p className="text-[#94A3B8] text-center mb-8 max-w-2xl mx-auto">
            If you have questions, requests, or concerns about this policy or your personal data,
            contact us using any of the methods below:
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
                <h3 className="text-white font-semibold mb-2">{contact.label}</h3>
                <p className="text-[#94A3B8] group-hover:text-white duration-300">{contact.value}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12 p-6 border-t border-[#334155]"
        >
          <p className="text-sm text-[#64748B]">
            By using our website and services, you agree to the terms of this Privacy Policy.
          </p>
        </motion.div>
      </div>
    </section>
    <Footer />
   </>
  );
};

export default Privacy;