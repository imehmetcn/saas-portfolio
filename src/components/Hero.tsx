"use client";

import { useState, useEffect } from "react";
import { Mail, Github, Linkedin, ArrowRight, Download, Play, Award, Users, Briefcase } from "lucide-react";

export default function Hero() {
  const [heroData, setHeroData] = useState({
    title: "Mehmet Can Şahin",
    subtitle: "Senior UI/UX & Frontend Developer",
    description: "8+ yıllık deneyimimle Fortune 500 şirketlerinden startup'lara kadar geniş bir yelpazede dijital çözümler üretiyorum. Kullanıcı odaklı tasarım ve cutting-edge teknolojilerle işinizi dijital dünyada zirveye taşıyorum.",
    skills: ["React", "Next.js", "TypeScript", "UI/UX Design", "Node.js", "Figma"]
  });

  useEffect(() => {
    const savedData = localStorage.getItem("heroData");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setHeroData(parsedData);
      } catch (error) {
        console.error("Hero verileri yüklenirken hata:", error);
      }
    }
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Advanced Background */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-blue-500/30 text-blue-300 px-6 py-3 rounded-full text-sm font-semibold">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <Award className="w-4 h-4" />
              Premium Developer • Freelance İçin Müsait
            </div>

            {/* Hero Title */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-8xl font-black leading-none tracking-tight">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-white">
                    Dijital
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                    Deneyimler
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-white">
                    Yaratıyorum
                  </span>
                </h1>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <p className="text-xl lg:text-2xl text-blue-300 font-medium">
                  {heroData.subtitle}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl">
              {heroData.description}
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">8+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Yıl Deneyim</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Proje</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">98%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Memnuniyet</div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#portfolio"
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Briefcase className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">Portföyümü İncele</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                </a>
                
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Projemi Başlat
                </a>
              </div>

              {/* Secondary CTA */}
              <div className="flex items-center gap-6">
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <Download className="w-4 h-4" />
                  <span className="text-sm font-medium">CV İndir</span>
                </a>
                <div className="w-px h-6 bg-gray-600"></div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-400">Bağlantılar:</span>
                  <div className="flex gap-2">
                    <a
                      href="https://github.com/mehmetcn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href="https://linkedin.com/in/emcshn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="mailto:imehmetshn@hotmail.com"
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Dashboard */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Floating Cards */}
              <div className="space-y-6">
                {/* Main Profile Card */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">MÇ</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Mehmet Can Şahin</h3>
                      <p className="text-blue-300">Senior Developer</p>
                    </div>
                    <div className="ml-auto">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-500/20 rounded-xl p-4 text-center">
                      <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">30+</div>
                      <div className="text-xs text-gray-400">Mutlu Müşteri</div>
                    </div>
                    <div className="bg-purple-500/20 rounded-xl p-4 text-center">
                      <Award className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">15+</div>
                      <div className="text-xs text-gray-400">Ödül & Sertifika</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Proje Tamamlama</span>
                      <span className="text-sm font-semibold text-white">98%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{width: '98%'}}></div>
                    </div>
                  </div>
                </div>

                {/* Skills Card */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 shadow-xl">
                  <h4 className="text-lg font-bold text-white mb-4">Teknoloji Stack</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {heroData.skills.map((skill, index) => (
                      <div
                        key={skill}
                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-center"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <span className="text-sm font-medium text-white">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status Card */}
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-2xl border border-green-500/30 rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                    <div>
                      <div className="text-green-300 font-semibold">Şu anda müsait</div>
                      <div className="text-sm text-gray-300">Yeni projeler kabul ediyorum</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 text-gray-400 text-sm mb-4">
            <span>Aşağı kaydırarak keşfetmeye devam edin</span>
          </div>
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}