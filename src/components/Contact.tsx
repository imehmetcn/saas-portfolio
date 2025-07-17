"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle,
  MessageSquare,
  Clock,
  Shield,
  Sparkles,
  Zap,
  Heart,
  Star
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [contactData, setContactData] = useState({
    email: "imehmetshn@hotmail.com",
    phone: "0534 750 91 71",
    website: "mehmetcn.com.tr",
    location: "İstanbul, Türkiye"
  });

  // Admin panelinden verileri yükle
  useEffect(() => {
    const savedData = localStorage.getItem("contactData");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setContactData(parsedData);
      } catch (error) {
        console.error("İletişim verileri yüklenirken hata:", error);
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mesajı admin paneline kaydet
    const newMessage = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      subject: formData.subject || "Konu belirtilmemiş",
      message: formData.message,
      date: new Date().toISOString().split('T')[0],
      read: false
    };

    const existingMessages = JSON.parse(localStorage.getItem("contactMessages") || "[]");
    const updatedMessages = [newMessage, ...existingMessages];
    localStorage.setItem("contactMessages", JSON.stringify(updatedMessages));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: contactData.email,
      href: `mailto:${contactData.email}`
    },
    {
      icon: Phone,
      title: "Telefon",
      value: contactData.phone,
      href: `tel:${contactData.phone.replace(/\s/g, '')}`
    },
    {
      icon: MapPin,
      title: "Konum",
      value: contactData.location,
      href: "#"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "Hızlı Yanıt",
      description: "24 saat içinde dönüş",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Güvenilir",
      description: "Verileriniz güvende",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Star,
      title: "Kaliteli Hizmet",
      description: "Profesyonel yaklaşım",
      color: "from-purple-500 to-pink-500"
    }
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

  if (submitted) {
    return (
      <section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-green-900/10 dark:via-gray-900 dark:to-blue-900/10">
        <motion.div 
          className="max-w-md mx-auto px-4 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-3xl p-10 shadow-2xl">
            <motion.div 
              className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <CheckCircle className="text-white" size={40} />
            </motion.div>
            
            <motion.h3 
              className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Mesajınız Gönderildi!
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-8 text-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              En kısa sürede size dönüş yapacağım. 
              <span className="flex items-center justify-center gap-2 mt-2">
                <Heart className="text-red-500 fill-current" size={16} />
                Teşekkürler!
              </span>
            </motion.p>
            
            <motion.button
              onClick={() => setSubmitted(false)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Başka Mesaj Gönder
            </motion.button>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50/30 dark:from-blue-900/10 dark:via-gray-900 dark:to-purple-900/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
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
            <MessageSquare size={18} />
            İletişim
            <Sparkles size={16} className="text-yellow-500" />
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 mb-8 leading-tight"
            variants={itemVariants}
          >
            Benimle
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              İletişime Geçin
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Projeleriniz veya sorularınız için benimle iletişime geçebilirsiniz.
            <span className="text-blue-600 dark:text-blue-400 font-semibold"> Birlikte harika şeyler</span> yapalım!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Enhanced Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-3xl p-10 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Send className="text-white" size={24} />
                </motion.div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400">
                  Mesaj Gönder
                </h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      İsim *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border border-gray-300/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-white transition-all duration-300"
                      placeholder="Adınız Soyadınız"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border border-gray-300/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-white transition-all duration-300"
                      placeholder="email@adresiniz.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Konu
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border border-gray-300/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-white transition-all duration-300"
                    placeholder="Mesajınızın konusu"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Mesaj *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 border border-gray-300/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-white resize-none transition-all duration-300"
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 disabled:opacity-50 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div 
                        className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Mesajı Gönder
                      <Zap size={18} className="text-yellow-300" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Enhanced Sidebar */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Features */}
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title} 
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-2xl p-6 shadow-xl"
                whileHover={{ 
                  scale: 1.03, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <motion.div 
                  className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="text-white" size={24} />
                </motion.div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}

            {/* Enhanced Contact Info */}
            <motion.div 
              className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden"
              whileHover={{ scale: 1.03, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              {/* Background Effects */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Mail className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold">İletişim Bilgileri</h4>
                </div>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div 
                      key={info.title} 
                      className="flex items-center gap-4 group cursor-pointer"
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.1 + 0.7 }}
                    >
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                        <info.icon size={18} className="group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <div className="text-sm opacity-80">{info.title}</div>
                        <div className="font-semibold">{info.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}