"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Veri tipleri
export interface ProfileData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  bio: string;
  avatar: string;
}

export interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
}

export interface ContactData {
  email: string;
  phone: string;
  website: string;
  location: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  tags: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  status: 'active' | 'completed' | 'maintenance';
  featured: boolean;
  date: string;
  client: string;
  duration: string;
  views: number;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  readTime: string;
  published: boolean;
  views: number;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  date: string;
  featured: boolean;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price: string;
  duration: string;
  featured: boolean;
}

export interface SiteSettings {
  siteTitle: string;
  siteDescription: string;
  darkTheme: boolean;
  animationsEnabled: boolean;
  performanceMonitor: boolean;
}

// Context tipi
interface AdminContextType {
  // Data
  profileData: ProfileData;
  heroData: HeroData;
  contactData: ContactData;
  projects: Project[];
  blogPosts: BlogPost[];
  testimonials: Testimonial[];
  services: Service[];
  siteSettings: SiteSettings;
  
  // Loading states
  isLoading: boolean;
  
  // Update functions
  updateProfileData: (data: ProfileData) => void;
  updateHeroData: (data: HeroData) => void;
  updateContactData: (data: ContactData) => void;
  updateProjects: (projects: Project[]) => void;
  updateBlogPosts: (posts: BlogPost[]) => void;
  updateTestimonials: (testimonials: Testimonial[]) => void;
  updateServices: (services: Service[]) => void;
  updateSiteSettings: (settings: SiteSettings) => void;
  
  // Utility functions
  refreshData: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

// Default data
const defaultProfileData: ProfileData = {
  name: "Mehmet Can Şahin",
  title: "Senior UI/UX & Frontend Developer",
  email: "imehmetshn@hotmail.com",
  phone: "0534 750 91 71",
  location: "İstanbul, Türkiye",
  website: "mehmetcn.com.tr",
  bio: "8+ yıllık deneyimimle Fortune 500 şirketlerinden startup'lara kadar geniş bir yelpazede dijital çözümler üretiyorum.",
  avatar: "/file.svg"
};

const defaultHeroData: HeroData = {
  title: "Mehmet Can Şahin",
  subtitle: "Senior UI/UX & Frontend Developer",
  description: "8+ yıllık deneyimimle Fortune 500 şirketlerinden startup'lara kadar geniş bir yelpazede dijital çözümler üretiyorum. Kullanıcı odaklı tasarım ve cutting-edge teknolojilerle işinizi dijital dünyada zirveye taşıyorum.",
  skills: ["React", "Next.js", "TypeScript", "UI/UX Design", "Node.js", "Figma"]
};

const defaultContactData: ContactData = {
  email: "imehmetshn@hotmail.com",
  phone: "0534 750 91 71",
  website: "mehmetcn.com.tr",
  location: "İstanbul, Türkiye"
};

const defaultProjects: Project[] = [
  {
    id: 1,
    title: "E-Ticaret Platformu",
    description: "Modern e-ticaret çözümü ile online satış platformu",
    longDescription: "React ve Next.js kullanılarak geliştirilmiş modern e-ticaret platformu. Stripe entegrasyonu, admin paneli ve responsive tasarım içerir.",
    image: "/api/placeholder/400/300",
    category: "web",
    tags: ["E-commerce", "React", "Next.js"],
    technologies: ["React", "Next.js", "TypeScript", "Stripe", "MongoDB"],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/username/ecommerce",
    status: 'completed',
    featured: true,
    date: "2024-01-15",
    client: "ABC Şirketi",
    duration: "3 ay",
    views: 1250
  }
];

const defaultBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Modern Web Geliştirme Trendleri 2024",
    excerpt: "2024 yılında web geliştirme dünyasında öne çıkan teknolojiler ve trendler",
    content: "Web geliştirme dünyası sürekli evrim geçiriyor...",
    image: "/api/placeholder/600/400",
    category: "teknoloji",
    tags: ["Web Development", "React", "Next.js"],
    author: "Mehmet Can Şahin",
    date: "2024-01-15",
    readTime: "5 dk",
    published: true,
    views: 850
  }
];

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    position: "CEO",
    company: "TechCorp",
    content: "Mehmet ile çalışmak harika bir deneyimdi. Projemizi zamanında ve beklentilerimizi aşarak teslim etti.",
    rating: 5,
    image: "/api/placeholder/100/100",
    date: "2024-01-10",
    featured: true
  }
];

const defaultServices: Service[] = [
  {
    id: 1,
    title: "Web Tasarım & Geliştirme",
    description: "Modern ve responsive web siteleri tasarlayıp geliştiriyorum",
    icon: "globe",
    features: ["Responsive Tasarım", "SEO Optimizasyonu", "Hızlı Yükleme"],
    price: "5000₺'den başlayan fiyatlar",
    duration: "2-4 hafta",
    featured: true
  }
];

const defaultSiteSettings: SiteSettings = {
  siteTitle: "Mehmet Can Şahin - Portfolio",
  siteDescription: "Senior UI/UX & Frontend Developer - Yaratıcı dijital çözümler ve modern web uygulamaları",
  darkTheme: true,
  animationsEnabled: true,
  performanceMonitor: false
};

export function AdminProvider({ children }: { children: ReactNode }) {
  const [profileData, setProfileData] = useState<ProfileData>(defaultProfileData);
  const [heroData, setHeroData] = useState<HeroData>(defaultHeroData);
  const [contactData, setContactData] = useState<ContactData>(defaultContactData);
  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(defaultBlogPosts);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(defaultTestimonials);
  const [services, setServices] = useState<Service[]>(defaultServices);
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(defaultSiteSettings);
  const [isLoading, setIsLoading] = useState(true);

  // Load data from API and localStorage fallback
  useEffect(() => {
    const loadData = async () => {
      try {
        // Load projects from API
        try {
          const projectsResponse = await fetch('/api/projects');
          if (projectsResponse.ok) {
            const projectsData = await projectsResponse.json();
            setProjects(projectsData);
          } else {
            // Fallback to localStorage
            const savedProjects = localStorage.getItem('portfolioProjects');
            if (savedProjects) {
              setProjects(JSON.parse(savedProjects));
            }
          }
        } catch (error) {
          console.error('Error loading projects from API:', error);
          // Fallback to localStorage
          const savedProjects = localStorage.getItem('portfolioProjects');
          if (savedProjects) {
            setProjects(JSON.parse(savedProjects));
          }
        }

        // Load site settings from API
        try {
          const settingsResponse = await fetch('/api/settings');
          if (settingsResponse.ok) {
            const settingsData = await settingsResponse.json();
            setSiteSettings(settingsData);
          } else {
            // Fallback to localStorage
            const savedSiteSettings = localStorage.getItem('siteSettings');
            if (savedSiteSettings) {
              setSiteSettings(JSON.parse(savedSiteSettings));
            }
          }
        } catch (error) {
          console.error('Error loading settings from API:', error);
          // Fallback to localStorage
          const savedSiteSettings = localStorage.getItem('siteSettings');
          if (savedSiteSettings) {
            setSiteSettings(JSON.parse(savedSiteSettings));
          }
        }

        // Load other data from localStorage (will be migrated to API later)
        const savedProfile = localStorage.getItem('profileData');
        if (savedProfile) {
          setProfileData(JSON.parse(savedProfile));
        }

        const savedHero = localStorage.getItem('heroData');
        if (savedHero) {
          setHeroData(JSON.parse(savedHero));
        }

        const savedContact = localStorage.getItem('contactData');
        if (savedContact) {
          setContactData(JSON.parse(savedContact));
        }

        const savedBlog = localStorage.getItem('blogData');
        if (savedBlog) {
          setBlogPosts(JSON.parse(savedBlog));
        }

        const savedTestimonials = localStorage.getItem('testimonialsData');
        if (savedTestimonials) {
          setTestimonials(JSON.parse(savedTestimonials));
        }

        const savedServices = localStorage.getItem('servicesData');
        if (savedServices) {
          setServices(JSON.parse(savedServices));
        }

      } catch (error) {
        console.error('Error loading admin data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Update functions
  const updateProfileData = (data: ProfileData) => {
    setProfileData(data);
    localStorage.setItem('profileData', JSON.stringify(data));
  };

  const updateHeroData = (data: HeroData) => {
    setHeroData(data);
    localStorage.setItem('heroData', JSON.stringify(data));
  };

  const updateContactData = (data: ContactData) => {
    setContactData(data);
    localStorage.setItem('contactData', JSON.stringify(data));
  };

  const updateProjects = (newProjects: Project[]) => {
    setProjects(newProjects);
    localStorage.setItem('portfolioProjects', JSON.stringify(newProjects));
  };

  const updateBlogPosts = (posts: BlogPost[]) => {
    setBlogPosts(posts);
    localStorage.setItem('blogData', JSON.stringify(posts));
  };

  const updateTestimonials = (newTestimonials: Testimonial[]) => {
    setTestimonials(newTestimonials);
    localStorage.setItem('testimonialsData', JSON.stringify(newTestimonials));
  };

  const updateServices = (newServices: Service[]) => {
    setServices(newServices);
    localStorage.setItem('servicesData', JSON.stringify(newServices));
  };

  const updateSiteSettings = async (settings: SiteSettings) => {
    try {
      const response = await fetch('/api/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(settings),
      });

      if (response.ok) {
        const updatedSettings = await response.json();
        setSiteSettings(updatedSettings);
        // Keep localStorage as backup
        localStorage.setItem('siteSettings', JSON.stringify(updatedSettings));
      } else {
        throw new Error('Failed to update settings');
      }
    } catch (error) {
      console.error('Error updating settings:', error);
      // Fallback to localStorage only
      setSiteSettings(settings);
      localStorage.setItem('siteSettings', JSON.stringify(settings));
    }
  };

  const refreshData = () => {
    setIsLoading(true);
    // Reload all data
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  const value: AdminContextType = {
    // Data
    profileData,
    heroData,
    contactData,
    projects,
    blogPosts,
    testimonials,
    services,
    siteSettings,
    
    // Loading
    isLoading,
    
    // Update functions
    updateProfileData,
    updateHeroData,
    updateContactData,
    updateProjects,
    updateBlogPosts,
    updateTestimonials,
    updateServices,
    updateSiteSettings,
    
    // Utility
    refreshData
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}