"use client";

import { useState, useEffect } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle,
  MessageSquare,
  Clock,
  Shield
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
      description: "24 saat içinde dönüş"
    },
    {
      icon: Shield,
      title: "Güvenilir",
      description: "Verileriniz güvende"
    }
  ];

  if (submitted) {
    return (
      <section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-green-600 dark:text-green-400" size={32} />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Mesajınız Gönderildi!
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              En kısa sürede size dönüş yapacağım.
            </p>
            
            <button
              onClick={() => setSubmitted(false)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium"
            >
              Başka Mesaj Gönder
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageSquare size={16} />
            İletişim
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Benimle İletişime Geçin
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Projeleriniz veya sorularınız için benimle iletişime geçebilirsiniz.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Mesaj Gönder
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      İsim *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="email@adresiniz.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Konu
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Mesajınızın konusu"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Gönder
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Features */}
            {features.map((feature) => (
              <div key={feature.title} className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}

            {/* Contact Info */}
            <div className="bg-blue-600 rounded-lg p-6 text-white">
              <h4 className="font-semibold mb-4">İletişim Bilgileri</h4>
              <div className="space-y-3">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-center gap-3">
                    <info.icon size={16} />
                    <div>
                      <div className="text-sm opacity-80">{info.title}</div>
                      <div className="font-medium">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}