"use client";

import { useState, useEffect } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle,
  FileCode2,
  MessagesSquare,
  Globe,
  MessageSquare,
  ArrowRight,
  Shield,
  Headphones,
  Clock
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
    location: "İstanbul, Türkiye",
    github: "https://github.com/mehmetcn",
    linkedin: "https://linkedin.com/in/emcshn"
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

    // Mevcut mesajları al ve yeni mesajı ekle
    const existingMessages = JSON.parse(localStorage.getItem("contactMessages") || "[]");
    const updatedMessages = [newMessage, ...existingMessages];
    localStorage.setItem("contactMessages", JSON.stringify(updatedMessages));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Formu temizle
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
      description: "24 saat içinde yanıt",
      href: `mailto:${contactData.email}`,
      color: "from-indigo-500 to-blue-500",
      bgPattern: "bg-indigo-50 dark:bg-indigo-900/20"
    },
    {
      icon: Phone,
      title: "Telefon",
      value: contactData.phone,
      description: "Hafta içi 09:00-18:00",
      href: `tel:${contactData.phone.replace(/\s/g, '')}`,
      color: "from-blue-500 to-cyan-500",
      bgPattern: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: Globe,
      title: "Website",
      value: contactData.website,
      description: "Portföyümü inceleyin",
      href: `https://${contactData.website}`,
      color: "from-cyan-500 to-teal-500",
      bgPattern: "bg-cyan-50 dark:bg-cyan-900/20"
    },
    {
      icon: MapPin,
      title: "Konum",
      value: contactData.location,
      description: "Uzaktan çalışmaya açığım",
      href: "#",
      color: "from-purple-500 to-pink-500",
      bgPattern: "bg-purple-50 dark:bg-purple-900/20"
    }
  ];

  const socialLinks = [
    { 
      icon: FileCode2, 
      href: contactData.github, 
      label: "GitHub",
      color: "hover:text-gray-600 dark:hover:text-gray-400"
    },
    { 
      icon: MessagesSquare, 
      href: contactData.linkedin, 
      label: "LinkedIn",
      color: "hover:text-blue-600 dark:hover:text-blue-400"
    },
    { 
      icon: Globe, 
      href: `https://${contactData.website}`, 
      label: "Website",
      color: "hover:text-cyan-600 dark:hover:text-cyan-400"
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "Hızlı Yanıt",
      description: "Mesajlarınıza 24 saat içinde dönüş yapıyorum"
    },
    {
      icon: Shield,
      title: "Güvenilir",
      description: "Projeleriniz ve verileriniz güvende"
    },
    {
      icon: Headphones,
      title: "Destek",
      description: "Proje sonrası teknik destek sağlıyorum"
    }
  ];

  if (submitted) {
    return (
      <section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-slate-50 via-indigo-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-3xl blur-xl transform -rotate-1"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-cyan-500/10 to-indigo-500/10 rounded-3xl blur-xl transform rotate-1"></div>
            
            <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-slate-700/50">
              <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <CheckCircle className="text-white" size={48} />
              </div>
              
              <h3 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-4">
                Mesajınız Gönderildi!
              </h3>
              
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                İletişime geçtiğiniz için teşekkür ederim! En kısa sürede size dönüş yapacağım.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2"
                >
                  Başka Mesaj Gönder
                  <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => window.open('mailto:imehmetshn@hotmail.com', '_blank')}
                  className="bg-white dark:bg-slate-700 text-slate-800 dark:text-white px-8 py-4 rounded-full font-semibold border border-slate-200 dark:border-slate-600 flex items-center justify-center gap-2"
                >
                  <Mail size={18} />
                  Email Gönder
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-indigo-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(79,70,229,0.1),transparent)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(79,70,229,0.05),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <MessageSquare size={16} />
            Benimle İletişime Geçin
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent mb-6">
            İletişim
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Projeleriniz, iş birliği fırsatları veya sorularınız için benimle iletişime geçebilirsiniz.
            En kısa sürede size dönüş yapacağım.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-slate-700/50">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                Mesaj Gönder
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      İsim *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 backdrop-blur-sm"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 backdrop-blur-sm"
                      placeholder="email@adresiniz.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Konu
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 backdrop-blur-sm"
                    placeholder="Mesajınızın konusu"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 resize-none backdrop-blur-sm"
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Gönder
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Features Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-700/50"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="text-white" size={20} />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}

            {/* Contact Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              {contactInfo.slice(0, 2).map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  className={`block p-4 rounded-2xl border border-white/20 dark:border-slate-700/50 ${info.bgPattern} backdrop-blur-sm`}
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center mb-3`}>
                    <info.icon className="text-white" size={18} />
                  </div>
                  <h3 className="text-base font-semibold text-slate-800 dark:text-white mb-1">
                    {info.title}
                  </h3>
                  <p className="text-sm text-slate-900 dark:text-slate-200 font-medium mb-1">
                    {info.value}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {contactInfo.map((info) => (
            <a
              key={info.title}
              href={info.href}
              className={`block p-6 rounded-2xl border border-white/20 dark:border-slate-700/50 ${info.bgPattern} backdrop-blur-sm`}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center mb-4`}>
                <info.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                {info.title}
              </h3>
              <p className="text-slate-900 dark:text-slate-200 font-medium mb-1">
                {info.value}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {info.description}
              </p>
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="text-center mt-20">
          <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-6">
            Sosyal Medya
          </h4>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center text-slate-600 dark:text-slate-300 border border-white/20 dark:border-slate-700/50 ${social.color}`}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}