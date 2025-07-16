"use client";

import { useState, useEffect } from "react";
import { 
  User, 
  Code2, 
  Briefcase, 
  Calendar,
  MapPin,
  Globe,
  BookOpen,
  Mail,
  Phone
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

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Basit Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <User size={16} />
            Hakkımda
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Beni Tanıyın
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Web geliştirme ve tasarım alanında deneyimli bir profesyonel olarak, 
            kullanıcı odaklı çözümler üretiyorum.
          </p>
        </div>

        {/* İstatistikler */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center bg-white dark:bg-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-1 border border-gray-200 dark:border-gray-700">
            <div className="flex gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  <tab.icon size={18} />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Ana İçerik */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  UI/UX ve Front-End Geliştirme
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    Teknolojiye olan merakım ve tutkum nedeniyle 2018 yılında Web Programcılığı bölümünü seçtim. 
                    Mezuniyet sonrası staj ve freelance Bilgi İşlem Personeli olarak iş deneyimimi kazandım.
                  </p>
                  <p>
                    Bilgi işlem problemlerini çözmekte keyif alıyorum. Teknolojiler üzerinde çalışarak bilgi birikimimi artırıyor 
                    ve bildiklerimi paylaşarak birçok insana ücretsiz destek veriyorum.
                  </p>
                  <p>
                    Tasarım odaklı düşünme ve kullanıcı deneyimini ön planda tutarak, görünümün pazarlama açısından 
                    da kritik olduğunu düşünüyorum.
                  </p>
                </div>
              </div>
            </div>

            {/* Yan Panel */}
            <div className="space-y-6">
              {/* Kişisel Bilgiler */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Kişisel Bilgiler</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-blue-600 dark:text-blue-400" size={16} />
                    <span className="text-gray-600 dark:text-gray-300">İstanbul, Türkiye</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="text-blue-600 dark:text-blue-400" size={16} />
                    <span className="text-gray-600 dark:text-gray-300">mehmetcn.com.tr</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpen className="text-blue-600 dark:text-blue-400" size={16} />
                    <span className="text-gray-600 dark:text-gray-300">Web Programcılığı</span>
                  </div>
                </div>
              </div>

              {/* İletişim */}
              <div className="bg-blue-600 rounded-lg p-6 text-white">
                <h4 className="text-lg font-semibold mb-4">İletişim</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail size={16} />
                    <span className="text-sm">imehmetshn@hotmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} />
                    <span className="text-sm">0534 750 91 71</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}