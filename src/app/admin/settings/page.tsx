"use client";

import { useState, useEffect } from "react";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Globe,
  Save,
  Upload,
  Eye,
  EyeOff,
  Settings as SettingsIcon,
  Palette,
  Shield,
  Bell
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isSaving, setIsSaving] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Profile Settings
  const [profileData, setProfileData] = useState({
    name: "Mehmet Can Şahin",
    title: "Senior UI/UX & Frontend Developer",
    email: "imehmetshn@hotmail.com",
    phone: "0534 750 91 71",
    location: "İstanbul, Türkiye",
    website: "mehmetcn.com.tr",
    bio: "8+ yıllık deneyimimle Fortune 500 şirketlerinden startup'lara kadar geniş bir yelpazede dijital çözümler üretiyorum.",
    avatar: "/file.svg"
  });

  // Hero Settings
  const [heroData, setHeroData] = useState({
    title: "Mehmet Can Şahin",
    subtitle: "Senior UI/UX & Frontend Developer",
    description: "8+ yıllık deneyimimle Fortune 500 şirketlerinden startup'lara kadar geniş bir yelpazede dijital çözümler üretiyorum. Kullanıcı odaklı tasarım ve cutting-edge teknolojilerle işinizi dijital dünyada zirveye taşıyorum.",
    skills: ["React", "Next.js", "TypeScript", "UI/UX Design", "Node.js", "Figma"]
  });

  // Contact Settings
  const [contactData, setContactData] = useState({
    email: "imehmetshn@hotmail.com",
    phone: "0534 750 91 71",
    website: "mehmetcn.com.tr",
    location: "İstanbul, Türkiye"
  });

  // About Settings
  const [aboutData, setAboutData] = useState({
    title: "UI/UX ve Front-End Geliştirme",
    description: "Teknolojiye olan merakım ve tutkum nedeniyle 2018 yılında Web Programcılığı bölümünü seçtim. Mezuniyet sonrası staj ve freelance Bilgi İşlem Personeli olarak iş deneyimimi kazandım.",
    education: "Kepez Mesleki ve Teknik Anadolu Lisesi - Web Programcılığı (2018)",
    experience: "8+",
    projects: "20+",
    clients: "15+",
    successRate: "95%"
  });

  // Security Settings
  const [securityData, setSecurityData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  // Load data from localStorage
  useEffect(() => {
    const loadData = (key: string, setter: Function) => {
      const saved = localStorage.getItem(key);
      if (saved) {
        try {
          setter(JSON.parse(saved));
        } catch (error) {
          console.error(`Error loading ${key}:`, error);
        }
      }
    };

    loadData("profileData", setProfileData);
    loadData("heroData", setHeroData);
    loadData("contactData", setContactData);
    loadData("aboutData", setAboutData);
  }, []);

  const saveSettings = async (dataKey: string, data: any) => {
    setIsSaving(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    localStorage.setItem(dataKey, JSON.stringify(data));
    setIsSaving(false);
    
    // Show success message (you can implement a toast notification here)
    alert('Ayarlar başarıyla kaydedildi!');
  };

  const tabs = [
    { id: 'profile', label: 'Profil', icon: User },
    { id: 'hero', label: 'Ana Sayfa', icon: Globe },
    { id: 'about', label: 'Hakkımda', icon: User },
    { id: 'contact', label: 'İletişim', icon: Mail },
    { id: 'security', label: 'Güvenlik', icon: Shield },
    { id: 'notifications', label: 'Bildirimler', icon: Bell }
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Ayarlar
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Site ayarlarınızı buradan yönetebilirsiniz
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Tabs */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <tab.icon size={18} />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Profil Bilgileri
                </h2>
                
                <form onSubmit={(e) => { e.preventDefault(); saveSettings('profileData', profileData); }}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Ad Soyad
                      </label>
                      <input
                        type="text"
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Ünvan
                      </label>
                      <input
                        type="text"
                        value={profileData.title}
                        onChange={(e) => setProfileData({...profileData, title: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        E-posta
                      </label>
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Konum
                      </label>
                      <input
                        type="text"
                        value={profileData.location}
                        onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Website
                      </label>
                      <input
                        type="url"
                        value={profileData.website}
                        onChange={(e) => setProfileData({...profileData, website: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Biyografi
                    </label>
                    <textarea
                      rows={4}
                      value={profileData.bio}
                      onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <button
                      type="submit"
                      disabled={isSaving}
                      className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
                    >
                      {isSaving ? (
                        <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                      ) : (
                        <Save size={16} />
                      )}
                      {isSaving ? 'Kaydediliyor...' : 'Kaydet'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Hero Tab */}
            {activeTab === 'hero' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Ana Sayfa Ayarları
                </h2>
                
                <form onSubmit={(e) => { e.preventDefault(); saveSettings('heroData', heroData); }}>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Ana Başlık
                      </label>
                      <input
                        type="text"
                        value={heroData.title}
                        onChange={(e) => setHeroData({...heroData, title: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Alt Başlık
                      </label>
                      <input
                        type="text"
                        value={heroData.subtitle}
                        onChange={(e) => setHeroData({...heroData, subtitle: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Açıklama
                      </label>
                      <textarea
                        rows={4}
                        value={heroData.description}
                        onChange={(e) => setHeroData({...heroData, description: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Yetenekler (virgülle ayırın)
                      </label>
                      <input
                        type="text"
                        value={heroData.skills.join(', ')}
                        onChange={(e) => setHeroData({...heroData, skills: e.target.value.split(', ').filter(s => s.trim())})}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <button
                      type="submit"
                      disabled={isSaving}
                      className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
                    >
                      {isSaving ? (
                        <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                      ) : (
                        <Save size={16} />
                      )}
                      {isSaving ? 'Kaydediliyor...' : 'Kaydet'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Güvenlik Ayarları
                </h2>
                
                <form onSubmit={(e) => { e.preventDefault(); alert('Şifre değiştirildi!'); }}>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Mevcut Şifre
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          value={securityData.currentPassword}
                          onChange={(e) => setSecurityData({...securityData, currentPassword: e.target.value})}
                          className="w-full px-4 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Yeni Şifre
                      </label>
                      <input
                        type="password"
                        value={securityData.newPassword}
                        onChange={(e) => setSecurityData({...securityData, newPassword: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Yeni Şifre (Tekrar)
                      </label>
                      <input
                        type="password"
                        value={securityData.confirmPassword}
                        onChange={(e) => setSecurityData({...securityData, confirmPassword: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <button
                      type="submit"
                      className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Shield size={16} />
                      Şifreyi Değiştir
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Other tabs can be implemented similarly */}
            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Bildirim Ayarları
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Bildirim ayarları yakında eklenecek...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}