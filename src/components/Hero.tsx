"use client";

import { useState, useEffect } from "react";
import { Mail, Globe, Code, Palette, Github, Linkedin } from "lucide-react";

export default function Hero() {
  const [heroData, setHeroData] = useState({
    title: "Mehmet Can Şahin",
    subtitle: "UI/UX Front-End Developer",
    description: "Teknolojiye olan merakım ve tutkum nedeniyle web geliştirme alanında uzmanlaşıyor, kullanıcı odaklı ve görsel açıdan etkileyici dijital deneyimler tasarlıyorum.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "UI/UX", "Figma"]
  });

  // Admin panelinden verileri yükle
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

  // İsmi parçalara ayır
  const nameParts = heroData.title.split(" ");
  const firstName = nameParts.slice(0, -1).join(" ");
  const lastName = nameParts[nameParts.length - 1];

  return (
    <section className="min-h-screen flex items-center justify-center pt-28 md:pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-indigo-400/10 via-blue-400/10 to-purple-400/10 blur-3xl"></div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 mt-10 sm:mt-0">
        {/* Professional Badge */}
        <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full text-sm font-medium mb-8">
          <span>{heroData.subtitle}</span>
        </div>

        {/* Main Heading - Clean & Bold */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-800 dark:text-white mb-6 tracking-tight">
          <span className="block mb-2">{firstName}</span>
          <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">{lastName}</span>
        </h1>

        {/* Professional Description */}
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
          {heroData.description}
        </p>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {heroData.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Social Links - Responsive */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          <a
            href="https://github.com/mehmetcn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/80 dark:bg-slate-800/80 rounded-full text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
          >
            <Github size={14} className="sm:block" />
            <span className="hidden sm:block">github.com/mehmetcn</span>
            <span className="sm:hidden">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/emcshn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/80 dark:bg-slate-800/80 rounded-full text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
          >
            <Linkedin size={14} className="sm:block" />
            <span className="hidden sm:block">linkedin.com/in/emcshn</span>
            <span className="sm:hidden">LinkedIn</span>
          </a>
          <a
            href="mailto:imehmetshn@hotmail.com"
            className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/80 dark:bg-slate-800/80 rounded-full text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
          >
            <Mail size={14} className="sm:block" />
            <span className="hidden sm:block">imehmetshn@hotmail.com</span>
            <span className="sm:hidden">Email</span>
          </a>
          <a
            href="https://mehmetcn.com.tr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/80 dark:bg-slate-800/80 rounded-full text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
          >
            <Globe size={14} className="sm:block" />
            <span className="hidden sm:block">mehmetcn.com.tr</span>
            <span className="sm:hidden">Web</span>
          </a>
        </div>

        {/* Clean CTA Buttons - Responsive */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#portfolio"
            className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-full font-semibold text-base sm:text-lg flex items-center gap-2"
          >
            <Code className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Projelerimi İncele</span>
          </a>
          <a
            href="#contact"
            className="bg-white dark:bg-slate-800 text-slate-800 dark:text-white px-6 sm:px-10 py-3 sm:py-5 rounded-full font-semibold text-base sm:text-lg border border-slate-200 dark:border-slate-700 flex items-center gap-2"
          >
            <Palette className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>İletişime Geç</span>
          </a>
        </div>
      </div>
    </section>
  );
}