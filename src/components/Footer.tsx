"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone,
  MapPin,
  Globe,
  Heart,
  ArrowUp,
  Send,
  ExternalLink,
  Code2,
  Palette,
  Smartphone,
  Database,
  Cloud,
  Shield,
  Zap,
  Users,
  Coffee,
  MessageCircle
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { 
      name: "GitHub", 
      icon: Github, 
      url: "https://github.com", 
      color: "hover:text-gray-800 dark:hover:text-gray-200",
      bgColor: "hover:bg-gray-100 dark:hover:bg-gray-800"
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      url: "https://linkedin.com", 
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
    },
    { 
      name: "Twitter", 
      icon: Twitter, 
      url: "https://twitter.com", 
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
    },
    { 
      name: "Email", 
      icon: Mail, 
      url: "mailto:contact@example.com", 
      color: "hover:text-red-500",
      bgColor: "hover:bg-red-50 dark:hover:bg-red-900/20"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    { name: "Web Development", icon: Code2 },
    { name: "UI/UX Design", icon: Palette },
    { name: "Mobile Apps", icon: Smartphone },
    { name: "Database Design", icon: Database }
  ];

  const technologies = [
    "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", 
    "MongoDB", "AWS", "Docker", "Tailwind CSS", "Framer Motion", "GraphQL"
  ];

  const contactInfo = [
    { 
      icon: Mail, 
      label: "Email", 
      value: "mehmet@saasportfolio.dev",
      link: "mailto:mehmet@saasportfolio.dev"
    },
    { 
      icon: Phone, 
      label: "Phone", 
      value: "+90 555 123 4567",
      link: "tel:+905551234567"
    },
    { 
      icon: MapPin, 
      label: "Location", 
      value: "Istanbul, Turkey",
      link: "https://maps.google.com"
    },
    { 
      icon: Globe, 
      label: "Website", 
      value: "saasportfolio.dev",
      link: "https://saasportfolio.dev"
    }
  ];

  const stats = [
    { number: "5+", label: "Years Experience", icon: Coffee },
    { number: "50+", label: "Projects Completed", icon: Code2 },
    { number: "25+", label: "Happy Clients", icon: Users },
    { number: "99%", label: "Success Rate", icon: Zap }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-2xl animate-bounce"></div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section */}
        <div className="py-16 border-b border-slate-700/50">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  Mehmet Akif
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Crafting innovative digital experiences with modern technologies. 
                  Specialized in full-stack development and user-centered design.
                </p>
                
                {/* Social Links */}
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-slate-700/50 transition-all duration-300 ${social.color} ${social.bgColor}`}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={link.href}
                        className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <motion.li
                      key={service.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-300 group cursor-pointer"
                    >
                      <div className="w-8 h-8 bg-slate-800/50 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-colors duration-300">
                        <service.icon size={16} className="group-hover:text-blue-400 transition-colors duration-300" />
                      </div>
                      {service.name}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
                <ul className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <motion.li
                      key={contact.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={contact.link}
                        className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-300 group"
                      >
                        <div className="w-10 h-10 bg-slate-800/50 rounded-xl flex items-center justify-center group-hover:bg-blue-600/20 transition-colors duration-300">
                          <contact.icon size={18} className="group-hover:text-blue-400 transition-colors duration-300" />
                        </div>
                        <div>
                          <div className="text-sm text-slate-400">{contact.label}</div>
                          <div className="font-medium">{contact.value}</div>
                        </div>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
                <p className="text-slate-300 text-sm mb-4">
                  Subscribe to get the latest updates on new projects and technologies.
                </p>
                
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
                  >
                    {subscribed ? (
                      <>
                        <span>✓ Subscribed!</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Subscribe
                      </>
                    )}
                  </motion.button>
                </form>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-3 text-center border border-slate-700/30"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <stat.icon size={16} className="text-white" />
                      </div>
                      <div className="text-lg font-bold text-white">{stat.number}</div>
                      <div className="text-xs text-slate-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-12 border-b border-slate-700/50"
        >
          <div className="text-center mb-8">
            <h4 className="text-lg font-semibold text-white mb-2">Technologies I Work With</h4>
            <p className="text-slate-400 text-sm">Building modern solutions with cutting-edge technologies</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-full text-sm text-slate-300 hover:text-white hover:border-blue-500/50 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-slate-400 text-sm"
            >
              <span>© 2024 Mehmet Akif. Made with</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
              <span>in Istanbul</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="flex items-center gap-4 text-slate-400 text-sm">
                <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              </div>
              
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                aria-label="Scroll to top"
              >
                <ArrowUp size={18} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-20 left-20 opacity-20">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-16 h-16 border border-blue-400/30 rounded-full"
        />
      </div>
      
      <div className="absolute top-32 right-32 opacity-20">
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-12 h-12 border border-purple-400/30 rounded-full"
        />
      </div>
    </footer>
  );
}
