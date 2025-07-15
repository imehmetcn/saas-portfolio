"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Lock,
  User,
  Eye,
  EyeOff,
  Shield,
  Settings,
  FileText,
  Image,
  Mail,
  Globe,
  Save,
  Edit3,
  Trash2,
  Plus
} from "lucide-react";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("hero");
  const [isLoading, setIsLoading] = useState(false);

  // Basit kimlik doğrulama (gerçek projede daha güvenli olmalı)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Basit doğrulama - gerçek projede JWT token kullanın
    setTimeout(() => {
      if (loginData.username === "admin" && loginData.password === "mehmet2024") {
        setIsAuthenticated(true);
        localStorage.setItem("adminAuth", "true");
      } else {
        alert("Hatalı kullanıcı adı veya şifre!");
      }
      setIsLoading(false);
    }, 1000);
  };

  // Sayfa yüklendiğinde oturum kontrolü
  useEffect(() => {
    const authStatus = localStorage.getItem("adminAuth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("adminAuth");
  };

  // Giriş sayfası
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 w-full max-w-md border border-white/20"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-white" size={32} />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Admin Paneli</h1>
            <p className="text-slate-300">Yönetim paneline erişim için giriş yapın</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Kullanıcı Adı
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  value={loginData.username}
                  onChange={(e) => setLoginData(prev => ({ ...prev, username: e.target.value }))}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Kullanıcı adınızı girin"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Şifre
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  value={loginData.password}
                  onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                  className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Şifrenizi girin"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                  Giriş yapılıyor...
                </>
              ) : (
                <>
                  <Shield size={20} />
                  Giriş Yap
                </>
              )}
            </motion.button>
          </form>

          <div className="mt-6 p-4 bg-indigo-900/30 rounded-xl border border-indigo-700/30">
            <p className="text-sm text-indigo-300 text-center">
              <strong>Demo Giriş Bilgileri:</strong><br />
              Kullanıcı Adı: admin<br />
              Şifre: mehmet2024
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  // Admin Dashboard Ana Sayfası
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center">
                <Settings className="text-white" size={20} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800 dark:text-white">Admin Dashboard</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">Website Yönetim Paneli</p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
            >
              <Lock size={16} />
              Çıkış Yap
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 sticky top-24">
              <h2 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">İçerik Yönetimi</h2>
              <nav className="space-y-2">
                {[
                  { id: "hero", label: "Ana Bölüm", icon: FileText },
                  { id: "about", label: "Hakkımda", icon: User },
                  { id: "portfolio", label: "Projeler", icon: Image },
                  { id: "contact", label: "İletişim", icon: Mail },
                  { id: "settings", label: "Ayarlar", icon: Settings }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${activeTab === item.id
                      ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700/50"
                      }`}
                  >
                    <item.icon size={18} />
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-slate-700/50">
              {activeTab === "hero" && <HeroEditor />}
              {activeTab === "about" && <AboutEditor />}
              {activeTab === "portfolio" && <PortfolioEditor />}
              {activeTab === "contact" && <ContactEditor />}
              {activeTab === "settings" && <SettingsEditor />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Hero Bölümü Editörü
function HeroEditor() {
  const [heroData, setHeroData] = useState({
    title: "Mehmet Can Şahin",
    subtitle: "UI/UX Front-End Developer",
    description: "Teknolojiye olan merakım ve tutkum nedeniyle web geliştirme alanında uzmanlaşıyor, kullanıcı odaklı ve görsel açıdan etkileyici dijital deneyimler tasarlıyorum.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "UI/UX", "Figma"]
  });

  const handleSave = () => {
    // Burada verileri localStorage'a kaydedeceğiz
    localStorage.setItem("heroData", JSON.stringify(heroData));
    alert("Hero bölümü başarıyla güncellendi!");
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Ana Bölüm Düzenle</h2>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300"
        >
          <Save size={16} />
          Kaydet
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Ana Başlık
          </label>
          <input
            type="text"
            value={heroData.title}
            onChange={(e) => setHeroData(prev => ({ ...prev, title: e.target.value }))}
            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Alt Başlık
          </label>
          <input
            type="text"
            value={heroData.subtitle}
            onChange={(e) => setHeroData(prev => ({ ...prev, subtitle: e.target.value }))}
            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Açıklama
          </label>
          <textarea
            value={heroData.description}
            onChange={(e) => setHeroData(prev => ({ ...prev, description: e.target.value }))}
            rows={4}
            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Yetenekler (virgülle ayırın)
          </label>
          <input
            type="text"
            value={heroData.skills.join(", ")}
            onChange={(e) => setHeroData(prev => ({ ...prev, skills: e.target.value.split(", ").filter(skill => skill.trim()) }))}
            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white"
            placeholder="HTML, CSS, JavaScript, React..."
          />
        </div>
      </div>
    </div>
  );
}

// Diğer editör bileşenleri için placeholder'lar
function AboutEditor() {
  const [aboutData, setAboutData] = useState({
    title: "UI/UX ve Front-End Geliştirme",
    description: "Teknolojiye olan merakım ve tutkum nedeniyle 2018 yılında Web Programcılığı bölümünü seçtim. Mezuniyet sonrası staj ve freelance Bilgi İşlem Personeli olarak iş deneyimimi kazandım.",
    education: "Kepez Mesleki ve Teknik Anadolu Lisesi - Web Programcılığı (2018)",
    experience: "8+ Yıl",
    projects: "20+",
    clients: "15+",
    successRate: "95%"
  });

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

  const handleSave = () => {
    localStorage.setItem("aboutData", JSON.stringify(aboutData));
    alert("Hakkımda bölümü başarıyla güncellendi!");
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Hakkımda Bölümü Düzenle</h2>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300"
        >
          <Save size={16} />
          Kaydet
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Başlık
          </label>
          <input
            type="text"
            value={aboutData.title}
            onChange={(e) => setAboutData(prev => ({ ...prev, title: e.target.value }))}
            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Açıklama
          </label>
          <textarea
            value={aboutData.description}
            onChange={(e) => setAboutData(prev => ({ ...prev, description: e.target.value }))}
            rows={6}
            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Eğitim Bilgisi
          </label>
          <input
            type="text"
            value={aboutData.education}
            onChange={(e) => setAboutData(prev => ({ ...prev, education: e.target.value }))}
            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Deneyim
            </label>
            <input
              type="text"
              value={aboutData.experience}
              onChange={(e) => setAboutData(prev => ({ ...prev, experience: e.target.value }))}
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Tamamlanan Proje
            </label>
            <input
              type="text"
              value={aboutData.projects}
              onChange={(e) => setAboutData(prev => ({ ...prev, projects: e.target.value }))}
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Mutlu Müşteri
            </label>
            <input
              type="text"
              value={aboutData.clients}
              onChange={(e) => setAboutData(prev => ({ ...prev, clients: e.target.value }))}
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Başarı Oranı
            </label>
            <input
              type="text"
              value={aboutData.successRate}
              onChange={(e) => setAboutData(prev => ({ ...prev, successRate: e.target.value }))}
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function PortfolioEditor() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Anatolyadan-transfer.com",
      description: "Transfer hizmeti sunan bir web sitesi. Kullanıcılar için kolay rezervasyon sistemi ve yönetim paneli içerir.",
      category: "web",
      tags: ["HTML", "CSS", "JavaScript", "PHP"],
      client: "Anatolyadan Transfer",
      year: 2023,
      status: "Live",
      rating: 5.0,
      url: "https://anatolyadan-transfer.com"
    },
    {
      id: 2,
      title: "Sultantekyap.com.tr",
      description: "İnşaat firması için kurumsal web sitesi. Proje portföyü, hizmetler ve iletişim bilgileri içerir.",
      category: "web",
      tags: ["HTML", "CSS", "JavaScript", "WordPress"],
      client: "Sultan Tekyap",
      year: 2023,
      status: "Live",
      rating: 4.9,
      url: "https://sultantekyap.com.tr"
    }
  ]);

  const [editingProject, setEditingProject] = useState<number | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem("portfolioData");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setProjects(parsedData);
      } catch (error) {
        console.error("Portfolio verileri yüklenirken hata:", error);
      }
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("portfolioData", JSON.stringify(projects));
    alert("Portfolio başarıyla güncellendi!");
  };

  const handleAddProject = () => {
    const newProject = {
      id: Date.now(),
      title: "Yeni Proje",
      description: "Proje açıklaması...",
      category: "web",
      tags: ["HTML", "CSS"],
      client: "Müşteri Adı",
      year: new Date().getFullYear(),
      status: "Live",
      rating: 5.0,
      url: ""
    };
    setProjects([...projects, newProject]);
    setEditingProject(newProject.id);
    setShowAddForm(false);
  };

  const handleDeleteProject = (id: number) => {
    if (confirm("Bu projeyi silmek istediğinizden emin misiniz?")) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  const updateProject = (id: number, field: string, value: string | number | string[]) => {
    setProjects(projects.map(p =>
      p.id === id ? { ...p, [field]: value } : p
    ));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Projeler Yönetimi</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300"
          >
            <Plus size={16} />
            Yeni Proje
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300"
          >
            <Save size={16} />
            Kaydet
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white/40 dark:bg-slate-700/40 rounded-xl p-6 border border-slate-200/50 dark:border-slate-600/50">
            {editingProject === project.id ? (
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Proje Adı
                    </label>
                    <input
                      type="text"
                      value={project.title}
                      onChange={(e) => updateProject(project.id, 'title', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Müşteri
                    </label>
                    <input
                      type="text"
                      value={project.client}
                      onChange={(e) => updateProject(project.id, 'client', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Açıklama
                  </label>
                  <textarea
                    value={project.description}
                    onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white text-sm resize-none"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Kategori
                    </label>
                    <select
                      value={project.category}
                      onChange={(e) => updateProject(project.id, 'category', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white text-sm"
                    >
                      <option value="web">Web</option>
                      <option value="ui">UI/UX</option>
                      <option value="security">Güvenlik</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Yıl
                    </label>
                    <input
                      type="number"
                      value={project.year}
                      onChange={(e) => updateProject(project.id, 'year', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Durum
                    </label>
                    <select
                      value={project.status}
                      onChange={(e) => updateProject(project.id, 'status', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white text-sm"
                    >
                      <option value="Live">Canlı</option>
                      <option value="In Development">Geliştiriliyor</option>
                      <option value="Completed">Tamamlandı</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      URL
                    </label>
                    <input
                      type="url"
                      value={project.url}
                      onChange={(e) => updateProject(project.id, 'url', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Teknolojiler (virgülle ayırın)
                    </label>
                    <input
                      type="text"
                      value={project.tags.join(", ")}
                      onChange={(e) => updateProject(project.id, 'tags', e.target.value.split(", ").filter(tag => tag.trim()))}
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white text-sm"
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setEditingProject(null)}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                  >
                    Kaydet
                  </button>
                  <button
                    onClick={() => setEditingProject(null)}
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
                  >
                    İptal
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    {project.client} • {project.year} • {project.status}
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => setEditingProject(project.id)}
                    className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
                  >
                    <Edit3 size={16} />
                  </button>
                  <button
                    onClick={() => handleDeleteProject(project.id)}
                    className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {showAddForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Yeni Proje Ekle</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">Yeni bir proje eklemek istediğinizden emin misiniz?</p>
            <div className="flex gap-3">
              <button
                onClick={handleAddProject}
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Evet, Ekle
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="flex-1 bg-gray-600 text-white py-2 rounded-xl hover:bg-gray-700 transition-colors"
              >
                İptal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ContactEditor() {
  const [contactData, setContactData] = useState({
    email: "imehmetshn@hotmail.com",
    phone: "0534 750 91 71",
    website: "mehmetcn.com.tr",
    location: "İstanbul, Türkiye",
    github: "https://github.com/mehmetcn",
    linkedin: "https://linkedin.com/in/emcshn"
  });

  // Mevcut verileri yükle
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

  const handleSave = () => {
    localStorage.setItem("contactData", JSON.stringify(contactData));
    alert("İletişim bilgileri başarıyla güncellendi!");
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">İletişim Bilgileri Düzenle</h2>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300"
        >
          <Save size={16} />
          Kaydet
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Email Adresi
          </label>
          <input
            type="email"
            value={contactData.email}
            onChange={(e) => setContactData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Telefon Numarası
          </label>
          <input
            type="tel"
            value={contactData.phone}
            onChange={(e) => setContactData(prev => ({ ...prev, phone: e.target.value }))}
            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Website
          </label>
          <input
            type="url"
            value={contactData.website}
            onChange={(e) => setContactData(prev => ({ ...prev, website: e.target.value }))}
            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Konum
          </label>
          <input
            type="text"
            value={contactData.location}
            onChange={(e) => setContactData(prev => ({ ...prev, location: e.target.value }))}
            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
            GitHub URL
          </label>
          <input
            type="url"
            value={contactData.github}
            onChange={(e) => setContactData(prev => ({ ...prev, github: e.target.value }))}
            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
            LinkedIn URL
          </label>
          <input
            type="url"
            value={contactData.linkedin}
            onChange={(e) => setContactData(prev => ({ ...prev, linkedin: e.target.value }))}
            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white"
          />
        </div>
      </div>
    </div>
  );
}

function SettingsEditor() {
  const [settings, setSettings] = useState({
    siteName: "Mehmet Can Şahin Portfolio",
    siteDescription: "UI/UX Front-End Developer - Modern web uygulamaları ve dijital çözümler",
    theme: "light",
    language: "tr",
    enableAnalytics: true,
    enableContactForm: true,
    maintenanceMode: false,
    seoKeywords: "web development, UI/UX, frontend, React, Next.js"
  });

  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Ahmet Yılmaz",
      email: "ahmet@example.com",
      subject: "Web sitesi hakkında",
      message: "Merhaba, web sitenizi çok beğendim. Bir proje için görüşmek istiyorum.",
      date: "2024-01-15",
      read: false
    },
    {
      id: 2,
      name: "Fatma Kaya",
      email: "fatma@example.com",
      subject: "İş birliği teklifi",
      message: "Şirketimiz için bir e-ticaret sitesi geliştirmek istiyoruz.",
      date: "2024-01-14",
      read: true
    }
  ]);

  const [analytics] = useState({
    totalVisitors: 1250,
    monthlyVisitors: 340,
    weeklyVisitors: 85,
    dailyVisitors: 12,
    topPages: [
      { page: "Ana Sayfa", visits: 450 },
      { page: "Projeler", visits: 320 },
      { page: "Hakkımda", visits: 280 },
      { page: "İletişim", visits: 200 }
    ],
    deviceStats: {
      desktop: 65,
      mobile: 30,
      tablet: 5
    }
  });

  const [activeSettingsTab, setActiveSettingsTab] = useState("general");

  useEffect(() => {
    const savedSettings = localStorage.getItem("siteSettings");
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        setSettings(parsedSettings);
      } catch (error) {
        console.error("Ayarlar yüklenirken hata:", error);
      }
    }

    const savedMessages = localStorage.getItem("contactMessages");
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages);
        setMessages(parsedMessages);
      } catch (error) {
        console.error("Mesajlar yüklenirken hata:", error);
      }
    }
  }, []);

  const handleSaveSettings = () => {
    localStorage.setItem("siteSettings", JSON.stringify(settings));
    alert("Ayarlar başarıyla güncellendi!");
  };

  const markMessageAsRead = (id: number) => {
    const updatedMessages = messages.map(msg =>
      msg.id === id ? { ...msg, read: true } : msg
    );
    setMessages(updatedMessages);
    localStorage.setItem("contactMessages", JSON.stringify(updatedMessages));
  };

  const deleteMessage = (id: number) => {
    if (confirm("Bu mesajı silmek istediğinizden emin misiniz?")) {
      const updatedMessages = messages.filter(msg => msg.id !== id);
      setMessages(updatedMessages);
      localStorage.setItem("contactMessages", JSON.stringify(updatedMessages));
    }
  };

  const settingsTabs = [
    { id: "general", label: "Genel", icon: Settings },
    { id: "messages", label: "Mesajlar", icon: Mail },
    { id: "analytics", label: "Analitik", icon: Globe }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Ayarlar & Yönetim</h2>
        {activeSettingsTab === "general" && (
          <button
            onClick={handleSaveSettings}
            className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300"
          >
            <Save size={16} />
            Kaydet
          </button>
        )}
      </div>

      {/* Settings Tabs */}
      <div className="flex gap-2 mb-6">
        {settingsTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSettingsTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${activeSettingsTab === tab.id
              ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg'
              : 'bg-white/40 dark:bg-slate-700/40 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
              }`}
          >
            <tab.icon size={16} />
            {tab.label}
            {tab.id === "messages" && messages.filter(m => !m.read).length > 0 && (
              <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] h-5 flex items-center justify-center">
                {messages.filter(m => !m.read).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* General Settings */}
      {activeSettingsTab === "general" && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Site Adı
              </label>
              <input
                type="text"
                value={settings.siteName}
                onChange={(e) => setSettings(prev => ({ ...prev, siteName: e.target.value }))}
                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Dil
              </label>
              <select
                value={settings.language}
                onChange={(e) => setSettings(prev => ({ ...prev, language: e.target.value }))}
                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white"
              >
                <option value="tr">Türkçe</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Site Açıklaması
            </label>
            <textarea
              value={settings.siteDescription}
              onChange={(e) => setSettings(prev => ({ ...prev, siteDescription: e.target.value }))}
              rows={3}
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              SEO Anahtar Kelimeler
            </label>
            <input
              type="text"
              value={settings.seoKeywords}
              onChange={(e) => setSettings(prev => ({ ...prev, seoKeywords: e.target.value }))}
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white"
              placeholder="web development, UI/UX, frontend..."
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Özellikler</h3>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.enableAnalytics}
                  onChange={(e) => setSettings(prev => ({ ...prev, enableAnalytics: e.target.checked }))}
                  className="w-5 h-5 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
                />
                <span className="text-slate-700 dark:text-slate-300">Analitik Takibi</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.enableContactForm}
                  onChange={(e) => setSettings(prev => ({ ...prev, enableContactForm: e.target.checked }))}
                  className="w-5 h-5 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
                />
                <span className="text-slate-700 dark:text-slate-300">İletişim Formu</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.maintenanceMode}
                  onChange={(e) => setSettings(prev => ({ ...prev, maintenanceMode: e.target.checked }))}
                  className="w-5 h-5 text-red-600 border-slate-300 rounded focus:ring-red-500"
                />
                <span className="text-slate-700 dark:text-slate-300">Bakım Modu</span>
              </label>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Tema</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="theme"
                    value="light"
                    checked={settings.theme === "light"}
                    onChange={(e) => setSettings(prev => ({ ...prev, theme: e.target.value }))}
                    className="w-4 h-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
                  />
                  <span className="text-slate-700 dark:text-slate-300">Açık Tema</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="theme"
                    value="dark"
                    checked={settings.theme === "dark"}
                    onChange={(e) => setSettings(prev => ({ ...prev, theme: e.target.value }))}
                    className="w-4 h-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
                  />
                  <span className="text-slate-700 dark:text-slate-300">Koyu Tema</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="theme"
                    value="auto"
                    checked={settings.theme === "auto"}
                    onChange={(e) => setSettings(prev => ({ ...prev, theme: e.target.value }))}
                    className="w-4 h-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
                  />
                  <span className="text-slate-700 dark:text-slate-300">Otomatik</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Messages */}
      {activeSettingsTab === "messages" && (
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
              İletişim Mesajları ({messages.length})
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              {messages.filter(m => !m.read).length} okunmamış mesaj
            </p>
          </div>

          <div className="space-y-4">
            {messages.length === 0 ? (
              <div className="text-center py-8">
                <Mail className="mx-auto text-slate-400 mb-4" size={48} />
                <p className="text-slate-600 dark:text-slate-400">Henüz mesaj bulunmuyor</p>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`p-4 rounded-xl border transition-all duration-200 ${message.read
                    ? 'bg-white/40 dark:bg-slate-700/40 border-slate-200/50 dark:border-slate-600/50'
                    : 'bg-indigo-50/50 dark:bg-indigo-900/20 border-indigo-200/50 dark:border-indigo-700/50'
                    }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-slate-800 dark:text-white">
                        {message.name}
                      </h4>
                      {!message.read && (
                        <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
                          Yeni
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      {!message.read && (
                        <button
                          onClick={() => markMessageAsRead(message.id)}
                          className="text-indigo-600 hover:text-indigo-800 text-sm"
                        >
                          Okundu İşaretle
                        </button>
                      )}
                      <button
                        onClick={() => deleteMessage(message.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    {message.email} • {message.date}
                  </p>
                  <h5 className="font-medium text-slate-800 dark:text-white mb-2">
                    {message.subject}
                  </h5>
                  <p className="text-slate-700 dark:text-slate-300">
                    {message.message}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Analytics */}
      {activeSettingsTab === "analytics" && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Toplam Ziyaretçi</h3>
              <p className="text-3xl font-bold">{analytics.totalVisitors.toLocaleString()}</p>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Aylık Ziyaretçi</h3>
              <p className="text-3xl font-bold">{analytics.monthlyVisitors}</p>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Haftalık Ziyaretçi</h3>
              <p className="text-3xl font-bold">{analytics.weeklyVisitors}</p>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Günlük Ziyaretçi</h3>
              <p className="text-3xl font-bold">{analytics.dailyVisitors}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/40 dark:bg-slate-700/40 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
                Popüler Sayfalar
              </h3>
              <div className="space-y-3">
                {analytics.topPages.map((page, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-slate-700 dark:text-slate-300">{page.page}</span>
                    <span className="font-semibold text-slate-800 dark:text-white">
                      {page.visits}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/40 dark:bg-slate-700/40 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
                Cihaz İstatistikleri
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-700 dark:text-slate-300">Masaüstü</span>
                  <span className="font-semibold text-slate-800 dark:text-white">
                    %{analytics.deviceStats.desktop}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700 dark:text-slate-300">Mobil</span>
                  <span className="font-semibold text-slate-800 dark:text-white">
                    %{analytics.deviceStats.mobile}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700 dark:text-slate-300">Tablet</span>
                  <span className="font-semibold text-slate-800 dark:text-white">
                    %{analytics.deviceStats.tablet}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}