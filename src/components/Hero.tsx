"use client";

import { useState, useEffect } from "react";
import { Mail, Globe, Code, Github, Linkedin } from "lucide-react";

export default function Hero() {
  const [heroData, setHeroData] = useState({
    title: "Mehmet Can Şahin",
    subtitle: "UI/UX Front-End Developer",
    description: "Web geliştirme alanında uzmanlaşıyor, kullanıcı odaklı ve görsel açıdan etkileyici dijital deneyimler tasarlıyorum.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"]
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

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Basit Badge */}
        <div className="inline-block bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
          {heroData.subtitle}
        </div>

        {/* Ana Başlık */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          {heroData.title}
        </h1>

        {/* Açıklama */}
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          {heroData.description}
        </p>

        {/* Beceriler - Sadeleştirilmiş */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {heroData.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Sosyal Linkler - Daha Basit */}
        <div className="flex gap-4 justify-center mb-8">
          <a
            href="https://github.com/mehmetcn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/emcshn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href="mailto:imehmetshn@hotmail.com"
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
          >
            <Mail size={16} />
            Email
          </a>
        </div>

        {/* Basit CTA Butonları */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
          >
            <Code size={18} />
            Projelerimi Gör
          </a>
          <a
            href="#contact"
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-medium border border-gray-300 dark:border-gray-600 flex items-center justify-center gap-2"
          >
            <Globe size={18} />
            İletişime Geç
          </a>
        </div>
      </div>
    </section>
  );
}