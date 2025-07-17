"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  User, 
  Code2, 
  Briefcase, 
  Calendar,
  MapPin,
  Globe,
  BookOpen,
  Mail,
  Phone,
  Target,
  Zap
} from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState('overview');
  const [aboutData, setAboutData] = useState({
    title: "UI/UX ve Front-End Geliştirme",
    description: "Teknolojiye olan merakım ve tutkum nedeniyle 2018 yılında Web Programcılığı bölümünü seçtim. Mezuniyet sonrası staj ve freelance Bilgi İşlem Personeli olarak iş deneyimimi kazandım.",
    education: "Kepez Mesleki ve Teknik Anadolu Lisesi - Web Programcılığı (2018)",
    experience: "8+",
    projects: "20+",
    clients: "15+",
    successRate: "95%"
  });

  // Admin panelinden verileri yükle
  useEffect(() => {
    const savedData = localStorage.getItem("aboutData");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setAboutData(parsedData);
      } catch (error) {
        console.error("Hakkımda verileri yüklenirken hata:", error);
      }
    }
  }, []);

  const skills = [
    { name: "HTML/CSS/JavaScript", level: 95 },
    { name: "React/Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "UI/UX Tasarımı", level: 88 },
    { name: "Sistem Yönetimi", level: 80 },
    { name: "Figma/Adobe XD", level: 85 }
  ];

  const stats = [
    { number: aboutData.experience, label: "Yıl Deneyim", icon: Calendar },
    { number: aboutData.projects, label: "Tamamlanan Proje", icon: Briefcase },
    { number: aboutData.clients, label: "Mutlu Müşteri", icon: Code2 },
    { number: aboutData.successRate, label: "Başarı Oranı", icon: User }
  ];

  const tabs = [
    { id: 'overview', label: 'Genel Bakış', icon: User },
    { id: 'skills', label: 'Yetenekler', icon: Code2 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1
    }
  };

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Header */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <User size={18} />
            Hakkımda
            <Zap size={16} className="text-yellow-500" />
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 mb-8 leading-tight"
            variants={itemVariants}
          >
            Dijital Dünyada
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Yaratıcı Çözümler
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Web geliştirme ve tasarım alanında deneyimli bir profesyonel olarak, 
            <span className="text-blue-600 dark:text-blue-400 font-semibold"> kullanıcı odaklı çözümler</span> üretiyorum.
            Her proje, teknoloji ve yaratıcılığın mükemmel birleşimi.
          </motion.p>
        </motion.div>

        {/* Animated Stats */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label} 
              className="group relative"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-2xl p-8 text-center shadow-xl">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="text-white" size={28} />
                </motion.div>
                <motion.div 
                  className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Tab Navigation */}
        <motion.div 
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-2xl p-2 shadow-2xl">
            <div className="flex gap-2">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl"
                      layoutId="activeTab"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <tab.icon size={20} className="relative z-10" />
                  <span className="relative z-10">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Enhanced Main Content */}
              <motion.div 
                className="lg:col-span-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-3xl p-10 shadow-2xl">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <Target className="text-white" size={24} />
                    </div>
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400">
                      UI/UX ve Front-End Geliştirme
                    </h3>
                  </div>
                  
                  <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">Teknolojiye olan merakım ve tutkum</span> nedeniyle 2018 yılında Web Programcılığı bölümünü seçtim. 
                      Mezuniyet sonrası staj ve freelance Bilgi İşlem Personeli olarak iş deneyimimi kazandım.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      Bilgi işlem problemlerini çözmekte keyif alıyorum. Teknolojiler üzerinde çalışarak bilgi birikimimi artırıyor 
                      ve bildiklerimi paylaşarak <span className="text-purple-600 dark:text-purple-400 font-semibold">birçok insana ücretsiz destek</span> veriyorum.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <span className="text-green-600 dark:text-green-400 font-semibold">Tasarım odaklı düşünme</span> ve kullanıcı deneyimini ön planda tutarak, görünümün pazarlama açısından 
                      da kritik olduğunu düşünüyorum.
                    </motion.p>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Sidebar */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Personal Info Card */}
                <motion.div 
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-2xl p-6 shadow-xl"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                      <User className="text-white" size={20} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">Kişisel Bilgiler</h4>
                  </div>
                  <div className="space-y-4">
                    {[
                      { icon: MapPin, text: "İstanbul, Türkiye", color: "text-red-500" },
                      { icon: Globe, text: "mehmetcn.com.tr", color: "text-blue-500" },
                      { icon: BookOpen, text: "Web Programcılığı", color: "text-purple-500" }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center gap-3 group cursor-pointer"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <item.icon className={`${item.color} group-hover:scale-110 transition-transform`} size={18} />
                        <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                          {item.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Contact Card */}
                <motion.div 
                  className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 rounded-2xl p-6 text-white shadow-2xl relative overflow-hidden"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Mail className="text-white" size={20} />
                      </div>
                      <h4 className="text-xl font-bold">İletişim</h4>
                    </div>
                    <div className="space-y-4">
                      <motion.div 
                        className="flex items-center gap-3 group cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        <Mail size={16} className="group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">imehmetshn@hotmail.com</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center gap-3 group cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        <Phone size={16} className="group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">0534 750 91 71</span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          )}

          {activeTab === 'skills' && (
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name} 
                  className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-2xl p-8 shadow-xl"
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.03, 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </h3>
                    <motion.span 
                      className="text-lg font-bold text-blue-600 dark:text-blue-400"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className="h-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.5, 
                          delay: index * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                    <motion.div
                      className="absolute top-0 left-0 h-3 w-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-sm"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}