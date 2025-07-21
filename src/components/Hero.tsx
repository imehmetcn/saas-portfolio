"use client";

import { motion, Variants } from "framer-motion";
import { Mail, Github, Linkedin, Download, Monitor, ShoppingCart, Palette } from "lucide-react";
import { useAdmin } from "@/contexts/AdminContext";
import { useState, useEffect } from "react";

export default function Hero() {
  const { heroData, profileData } = useAdmin();
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  const services = [
    "WEB SİTENİZİ TASARLARIM",
    "ONLINE MAĞAZANIZI OLUŞTURURUM",
    "MOBİL UYGULAMANIZI GELİŞTİRİRİM",
    "UI/UX TASARIMINIZI YAPARIM"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen">
        <motion.div
          className="text-center space-y-8 lg:space-y-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Main Title */}
          <motion.div className="space-y-6" variants={titleVariants}>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.span
                className="block text-white mb-4"
                style={{ textShadow: '0 0 20px rgba(255,255,255,0.3)' }}
              >
                MEHMET CAN
              </motion.span>
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 mb-6"
                style={{ textShadow: '0 0 30px rgba(59,130,246,0.5)' }}
              >
                Sizin için
              </motion.span>

              {/* Dynamic Service Text */}
              <motion.div
                className="h-20 lg:h-24 flex items-center justify-center"
                key={currentServiceIndex}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  {services[currentServiceIndex]}
                </span>
              </motion.div>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            className="max-w-3xl mx-auto"
            variants={itemVariants}
          >
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed font-light">
              8+ yıllık deneyimimle modern teknolojiler kullanarak
              <span className="text-blue-400 font-medium"> dijital hayallerinizi gerçeğe</span> dönüştürüyorum.
            </p>
          </motion.div>

          {/* Service Icons */}
          <motion.div
            className="flex justify-center gap-8 lg:gap-12"
            variants={containerVariants}
          >
            {[
              { icon: Monitor, label: "Web Tasarım", color: "from-blue-500 to-cyan-500" },
              { icon: ShoppingCart, label: "E-Ticaret", color: "from-emerald-500 to-teal-500" },
              { icon: Palette, label: "UI/UX", color: "from-purple-500 to-pink-500" }
            ].map((service, index) => (
              <motion.div
                key={service.label}
                className="text-center group"
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-2xl group-hover:shadow-xl`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="text-white" size={24} />
                </motion.div>
                <div className="text-sm text-gray-400 font-medium">
                  {service.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 lg:gap-12 max-w-2xl mx-auto"
            variants={containerVariants}
          >
            {[
              { number: "8+", label: "Yıl Deneyim" },
              { number: "150+", label: "Proje" },
              { number: "50+", label: "Mutlu Müşteri" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-3xl lg:text-4xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 1, type: "spring", stiffness: 200 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Projeni Başlatalım</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.a>

            <motion.a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Çalışmalarımı Gör</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-4"
            variants={itemVariants}
          >
            {[
              { icon: Github, href: "https://github.com/mehmetcn", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/emcshn", label: "LinkedIn" },
              { icon: Mail, href: `mailto:${profileData.email}`, label: "Email" }
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel={social.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <div className="flex flex-col items-center gap-3 text-gray-400">
              <span className="text-sm font-medium">Aşağı kaydır</span>
              <motion.div
                className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center relative"
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="w-1 h-3 bg-gray-300 rounded-full mt-2"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}