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

export function AdminProvider({ children }: { children: ReactNode }) {
  const [profileData, setProfileData] = useState<ProfileData>(defaultProfileData);
  const [heroData, setHeroData] = useState<HeroData>(defaultHeroData);
  const [contactData, setContactData] = useState<ContactData>(defaultContactData);
  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(defaultBlogPosts);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(defaultTestimonials);
  const [services, setServices] = useState<Service[]>(defaultServices);
  const [isLoading, setIsLoading] = useState(true);

  // Load data from localStorage
  useEffect(() => {
    const loadData = () => {
      try {
        // Profile data
        const savedProfile = localStorage.getItem('profileData');
        if (savedProfile) {
          setProfileData(JSON.parse(savedProfile));
        }

        // Hero data
        const savedHero = localStorage.getItem('heroData');
        if (savedHero) {
          setHeroData(JSON.parse(savedHero));
        }

        // Contact data
        const savedContact = localStorage.getItem('contactData');
        if (savedContact) {
          setContactData(JSON.parse(savedContact));
        }

        // Projects
        const savedProjects = localStorage.getItem('portfolioProjects');
        if (savedProjects) {
          setProjects(JSON.parse(savedProjects));
        }

        // Blog posts
        const savedBlog = localStorage.getItem('blogData');
        if (savedBlog) {
          setBlogPosts(JSON.parse(savedBlog));
        }

        // Testimonials
        const savedTestimonials = localStorage.getItem('testimonialsData');
        if (savedTestimonials) {
          setTestimonials(JSON.parse(savedTestimonials));
        }

        // Services
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