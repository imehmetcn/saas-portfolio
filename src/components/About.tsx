"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  User, 
  Code2, 
  Briefcase, 
  Star, 
  TrendingUp, 
  Download, 
  Calendar,
  MapPin,
  Globe,
  BookOpen,
  Lightbulb,
  Rocket,
  Brain,
  Shield,
  Monitor,
  Server,
  Mail,
  Phone
} from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState('overview');
  const containerRef = useRef<HTMLDivElement>(null);
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
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // CV'den alınan beceriler
  const skills = [
    { 
      name: "HTML/CSS/JavaScript", 
      level: 95, 
      color: "from-indigo-500 to-blue-500",
      description: "Modern web standartları ve responsive tasarım"
    },
    { 
      name: "React/Next.js", 
      level: 90, 
      color: "from-blue-500 to-cyan-500",
      description: "Modern frontend framework'leri ile SPA ve SSR uygulamaları"
    },
    { 
      name: "TypeScript", 
      level: 85, 
      color: "from-cyan-500 to-teal-500",
      description: "Tip güvenli kod geliştirme ve daha iyi kod kalitesi"
    },
    { 
      name: "UI/UX Tasarımı", 
      level: 88, 
      color: "from-purple-500 to-pink-500",
      description: "Kullanıcı odaklı arayüz tasarımı ve deneyim optimizasyonu"
    },
    { 
      name: "Sistem Yönetimi", 
      level: 80, 
      color: "from-orange-500 to-red-500",
      description: "Linux, sunucu yapılandırması ve ağ güvenliği"
    },
    { 
      name: "Figma/Adobe XD", 
      level: 85, 
      color: "from-pink-500 to-rose-500",
      description: "Profesyonel tasarım araçları ile prototip oluşturma"
    }
  ];

  // CV'den alınan deneyimler
  const experiences = [
    {
      title: "Operasyon",
      company: "EmirTur Vip",
      period: "2024",
      location: "İstanbul, Türkiye",
      type: "Tam Zamanlı",
      description: "Şirket içerisinde araç takibi, bilgisayar bakımı yapılması ve operasyonel süreçlerin yönetimi.",
      achievements: [
        "Şirket içerisinde araç takibi ve operasyonel süreçlerin yönetimi",
        "Bilgisayar bakımı ve teknik destek sağlanması",
        "Ofis teknolojilerinin verimli kullanımının sağlanması"
      ],
      technologies: ["Sistem Yönetimi", "Teknik Destek", "Operasyon Yönetimi"]
    },
    {
      title: "E-Ticaret Personeli",
      company: "CarreFoursa",
      period: "2021 - 2023",
      location: "İstanbul, Türkiye",
      type: "Tam Zamanlı",
      description: "Şirket içinde sipariş hazırlama, müşteri kontrolü, sipariş takibi ve ofis işleri takibi.",
      achievements: [
        "Sipariş hazırlama ve müşteri kontrolü süreçlerinin yönetimi",
        "Sipariş takibi ve raporlama işlemlerinin gerçekleştirilmesi",
        "Ofis işlerinin takibi ve organizasyonu"
      ],
      technologies: ["E-Ticaret Sistemleri", "Müşteri İlişkileri", "Sipariş Yönetimi"]
    },
    {
      title: "Ofis Personeli",
      company: "Kamer Turizm LTD ŞTİ",
      period: "2018",
      location: "İstanbul, Türkiye",
      type: "Tam Zamanlı",
      description: "Dell markalı ürünlerin kurulumu ve satışı, web sayfası yenileme çalışmaları.",
      achievements: [
        "Dell markalı ürünlerin kurulumu ve satış süreçlerinin yönetimi",
        "Web sayfası yenileme ve güncelleme çalışmaları",
        "Müşteri ilişkileri ve teknik destek sağlanması"
      ],
      technologies: ["Web Geliştirme", "Donanım Kurulumu", "Satış"]
    },
    {
      title: "Bilgi İşlem Destek",
      company: "MarxKent Bilgisayar",
      period: "2016 - 2017",
      location: "İstanbul, Türkiye",
      type: "Tam Zamanlı",
      description: "Hastane bilgisayarlarına format atma, bozulan parçaların web terminal aracılığıyla değiştirilmesi.",
      achievements: [
        "Hastane bilgisayarlarının bakım ve onarımı",
        "Bozulan parçaların web terminal aracılığıyla değiştirilmesi",
        "Sistem kurulumu ve teknik destek sağlanması"
      ],
      technologies: ["Donanım", "Sistem Yönetimi", "Teknik Destek"]
    }
  ];

  const stats = [
    { 
      number: aboutData.experience, 
      label: "Yıl Deneyim", 
      icon: Calendar,
      description: "Teknoloji alanında",
      color: "from-indigo-500 to-blue-500"
    },
    { 
      number: aboutData.projects, 
      label: "Tamamlanan Proje", 
      icon: Briefcase,
      description: "Web ve UI/UX tasarım",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      number: aboutData.clients, 
      label: "Mutlu Müşteri", 
      icon: Code2,
      description: "Frontend, UI/UX, Sistem",
      color: "from-purple-500 to-pink-500"
    },
    { 
      number: aboutData.successRate, 
      label: "Başarı Oranı", 
      icon: Lightbulb,
      description: "Yapay zeka, Güvenlik, UI/UX",
      color: "from-orange-500 to-red-500"
    }
  ];

  const personalInfo = [
    { icon: MapPin, label: "Konum", value: "İstanbul, Türkiye" },
    { icon: Globe, label: "Website", value: "mehmetcn.com.tr" },
    { icon: BookOpen, label: "Eğitim", value: "Web Programcılığı" },
    { icon: Calendar, label: "Deneyim", value: "2016'dan beri" }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Yaratıcılık",
      description: "Tasarım odaklı düşünme ve kullanıcı deneyimini ön planda tutma"
    },
    {
      icon: Shield,
      title: "Güvenlik",
      description: "Siber güvenlik ve güvenli uygulama geliştirme konusunda hassasiyet"
    },
    {
      icon: Rocket,
      title: "Sürekli Öğrenme",
      description: "Yeni teknolojileri takip etme ve kendini geliştirme"
    },
    {
      icon: Brain,
      title: "Problem Çözme",
      description: "Karmaşık sorunlara yaratıcı ve etkili çözümler üretme"
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Genel Bakış', icon: User },
    { id: 'experience', label: 'Deneyim', icon: Briefcase },
    { id: 'skills', label: 'Yetenekler', icon: Code2 },
    { id: 'interests', label: 'İlgi Alanları', icon: Star }
  ];

  // CV'den alınan ilgi alanları
  const interests = [
    {
      icon: Brain,
      title: "Yapay Zeka",
      description: "Yapay sinir ağları, makine öğrenmesi, görüntü işleme gibi konularda başlangıç seviyesinde bilgiye sahibim."
    },
    {
      icon: Shield,
      title: "Siber Güvenlik",
      description: "Siber güvenlik ve güvenlik uygulamaları geliştirme konusunda başlangıç seviyesinde bilgiye sahibim ve basit güvenlik testi yapabiliyorum."
    },
    {
      icon: Monitor,
      title: "UI/UX Tasarımı",
      description: "Tasarım odaklı düşünme ve kullanıcı deneyimini ön planda tutarak, görünümün pazarlama açısından da kritik olduğunu düşünüyorum."
    },
    {
      icon: Server,
      title: "Sistem Yönetimi",
      description: "Sistemlerin çalışma prensiplerini anlamak ve güvenlik açıklarını keşfetmek amacıyla backend sistemlere ilgi duyuyorum."
    }
  ];

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="py-20 bg-gradient-to-br from-slate-50 via-indigo-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-60 right-32 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-purple-400/15 to-indigo-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl animate-bounce"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-6 py-3 rounded-full text-sm font-semibold mb-6"
          >
            <User size={16} />
            Beni Daha Yakından Tanıyın
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent mb-6">
            Hakkımda
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Teknolojiye olan merakım ve tutkum nedeniyle 2018 yılında Web Programcılığı bölümünü seçtim. 
            Kullanıcı odaklı ve görsel açıdan etkileyici dijital deneyimler tasarlıyorum.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group text-center bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="text-white" size={28} />
              </div>
              <div className="text-3xl font-bold text-slate-800 dark:text-white mb-2">{stat.number}</div>
              <div className="font-semibold text-slate-700 dark:text-slate-300 mb-1">{stat.label}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-2 border border-white/20 dark:border-slate-700/50">
            <div className="flex gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
                  }`}
                >
                  <tab.icon size={18} />
                  <span className="hidden sm:block">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-3 gap-12"
            >
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-slate-700/50">
                  <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
                    UI/UX ve Front-End Geliştirme
                  </h3>
                  <div className="space-y-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                    <p>
                      Teknolojiye olan merakım ve tutkum nedeniyle 2018 yılında Web Programcılığı bölümünü seçtim. 
                      Mezuniyet sonrası staj ve freelance Bilgi İşlem Personeli olarak iş deneyimimi kazandım.
                    </p>
                    <p>
                      Bilgi işlem problemlerini çözmekte keyif alıyorum. Ayrıca, teknolojiler üzerinde çalışarak bilgi birikimimi artırıyorum ve 
                      bildiklerimi paylaşarak birçok insana ücretsiz destek veriyorum. Eğitim sürecinde edindiğim bilgi ve deneyimlerle profesyonel becerilerimi 
                      geliştirmeye ve farklı alanlara katkıda bulunmaya devam ediyorum.
                    </p>
                    <p>
                      Tasarım odaklı düşünme ve kullanıcı deneyimini ön planda tutarak, görünümün pazarlama açısından da kritik olduğunu düşünüyorum. 
                      Siber güvenlik ve güvenlik uygulamaları geliştirme konusunda da bilgi sahibim ve basit güvenlik testi yapabiliyorum.
                    </p>
                  </div>
                  
                  <motion.a
                    href="/cv.pdf"
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-xl transition-all duration-300"
                  >
                    <Download size={20} />
                    CV&apos;mi İndir
                  </motion.a>
                </div>

                {/* Values */}
                <div className="grid md:grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                        <value.icon className="text-white" size={20} />
                      </div>
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                        {value.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        {value.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Personal Info */}
                <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50">
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Kişisel Bilgiler</h4>
                  <div className="space-y-4">
                    {personalInfo.map((info) => (
                      <div key={info.label} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                          <info.icon className="text-indigo-600 dark:text-indigo-400" size={16} />
                        </div>
                        <div>
                          <div className="text-sm text-slate-500 dark:text-slate-400">{info.label}</div>
                          <div className="font-medium text-slate-800 dark:text-white">{info.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50">
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Eğitim</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mt-1">
                        <BookOpen className="text-indigo-600 dark:text-indigo-400" size={16} />
                      </div>
                      <div>
                        <div className="font-medium text-slate-800 dark:text-white">Kepez Mesleki ve Teknik Anadolu Lisesi</div>
                        <div className="text-sm text-slate-600 dark:text-slate-300">Web Programcılığı</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">2018</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-6 text-white">
                  <h4 className="text-lg font-semibold mb-4">İletişim Bilgileri</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <Mail size={16} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm opacity-80">Email</div>
                        <div className="font-medium">imehmetshn@hotmail.com</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <Phone size={16} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm opacity-80">Telefon</div>
                        <div className="font-medium">0534 750 91 71</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <Globe size={16} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm opacity-80">Website</div>
                        <div className="font-medium">mehmetcn.com.tr</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'experience' && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg">
                          {exp.company}
                        </span>
                        <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium">
                          {exp.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-slate-600 dark:text-slate-300 text-lg mb-6 leading-relaxed">
                    {exp.description}
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Sorumluluklar:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                          <TrendingUp className="text-indigo-500 mt-1 flex-shrink-0" size={16} />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Kullanılan Teknolojiler:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'skills' && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-8"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                      {skill.name}
                    </h3>
                    <span className="text-lg font-semibold text-slate-600 dark:text-slate-400">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {skill.description}
                  </p>
                  
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'interests' && (
            <motion.div
              key="interests"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <interest.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                        {interest.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {interest.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}