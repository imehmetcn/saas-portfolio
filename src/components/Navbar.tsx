"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code, Mail } from "lucide-react";
import { ThemeToggle } from "./ui/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Ana Sayfa", href: "#top" },
    { name: "Hakkımda", href: "#about" },
    { name: "Hizmetler", href: "#services" },
    { name: "Projeler", href: "#portfolio" },
    { name: "İletişim", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 bg-white dark:bg-gray-900 border-b ${
          scrolled 
            ? 'border-gray-200 dark:border-gray-700 shadow-sm' 
            : 'border-transparent'
        }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Code className="text-white" size={16} />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                  Mehmet Can Şahin
                </h1>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  UI/UX Front-End Developer
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-lg text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <ThemeToggle />
              
              {/* CTA Button - Desktop */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm"
              >
                <Mail size={16} />
                İletişim
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/20"
            onClick={() => setIsOpen(false)}
          />
          
          <div className="absolute right-0 top-0 h-full w-64 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700">
            <div className="p-4">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
                <span className="font-bold text-gray-900 dark:text-white">Menü</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="space-y-2 mb-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="block p-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg font-medium"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="flex items-center justify-between mb-6 mt-8 pb-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                <span className="text-sm text-gray-600 dark:text-gray-400">Tema</span>
                <ThemeToggle />
              </div>
              
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-3 rounded-lg font-medium"
              >
                <Mail size={18} />
                İletişime Geç
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}