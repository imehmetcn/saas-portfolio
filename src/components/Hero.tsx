"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download, Award, Star, Rocket, Sparkles } from "lucide-react";
import { useAdmin } from "@/contexts/AdminContext";

export default function Hero() {
  const { heroData, profileData } = useAdmin();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
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

  const titleVariants = {
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
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating Orbs - More Subtle */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '6s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div 
          className="text-center space-y-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Status Badge */}
          <motion.div 
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 text-emerald-400 px-6 py-3 rounded-full text-sm font-semibold shadow-2xl"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <motion.div 
              className="w-2 h-2 bg-emerald-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <Star className="w-4 h-4" />
            <span>Freelance İçin Müsait</span>
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </motion.div>

          {/* Main Title */}
          <motion.div className="space-y-8" variants={titleVariants}>
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.span 
                  className="block text-white drop-shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  Merhaba, Ben
                </motion.span>
                <motion.span 
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 drop-shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {heroData.title}
                </motion.span>
              </motion.h1>
              
              <motion.div 
                className="flex items-center justify-center gap-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <p className="text-xl lg:text-3xl text-gray-300 font-light">
                  {heroData.subtitle}
                </p>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed font-light">
              {heroData.description}
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-8 lg:gap-16 max-w-4xl mx-auto"
            variants={containerVariants}
          >
            {[
              { number: "8+", label: "Yıl Deneyim", icon: Award },
              { number: "50+", label: "Tamamlanan Proje", icon: Rocket },
              { number: "98%", label: "Müşteri Memnuniyeti", icon: Star }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center group"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:shadow-blue-500/25"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="text-blue-400" size={24} />
                </motion.div>
                <motion.div 
                  className="text-4xl lg:text-5xl font-black text-white mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 1, type: "spring", stiffness: 200 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm lg:text-base text-gray-400 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills */}
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
              {heroData.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 text-gray-300 px-4 py-2 lg:px-6 lg:py-3 rounded-full text-sm lg:text-base font-medium shadow-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 1.5 }}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                    color: "#60a5fa",
                    y: -2
                  }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>



          {/* Social Links */}
          <motion.div 
            className="flex items-center justify-center gap-6"
            variants={itemVariants}
          >
            <motion.a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm lg:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <Download className="w-4 h-4" />
              <span>CV İndir</span>
            </motion.a>
            
            <div className="w-px h-6 bg-gray-600"></div>
            
            <div className="flex gap-4">
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
                  className="w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 shadow-xl"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="pt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <div className="flex flex-col items-center gap-4 text-gray-500">
              <span className="text-sm font-medium">Keşfetmeye devam edin</span>
              <motion.div 
                className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center relative"
                whileHover={{ scale: 1.1 }}
              >
                <motion.div 
                  className="w-1 h-3 bg-gray-400 rounded-full mt-2"
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