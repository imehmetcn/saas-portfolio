import { Suspense, lazy } from "react";
import { Metadata } from "next";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import DynamicHead from "@/components/DynamicHead";
import LazySection from "@/components/LazySection";
import PerformanceMonitor from "@/components/PerformanceMonitor";

// Metadata'yı dinamik olarak oluştur
export async function generateMetadata(): Promise<Metadata> {
  // Server-side'da localStorage erişimi yok, bu yüzden varsayılan değerleri kullan
  // Client-side'da DynamicHead bileşeni title'ı güncelleyecek
  return {
    title: "Mehmet Can Şahin - Portfolio",
    description: "Senior UI/UX & Frontend Developer - Yaratıcı dijital çözümler ve modern web uygulamaları",
    openGraph: {
      title: "Mehmet Can Şahin - Portfolio",
      description: "Senior UI/UX & Frontend Developer - Yaratıcı dijital çözümler ve modern web uygulamaları",
      type: "website",
    },
  };
}

// Lazy load ağır bileşenler
const About = lazy(() => import("@/components/About"));
const Portfolio = lazy(() => import("@/components/Portfolio"));
const Services = lazy(() => import("@/components/MyServices"));
const Testimonials = lazy(() => import("@/components/Testimonials"));

const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

export default function Home() {
  return (
    <>
      <DynamicHead />
      <PerformanceMonitor />

      <main id="top" className="min-h-screen bg-white dark:bg-gray-900">
        {/* Debug Button - Remove in production */}
        <div className="fixed top-4 right-4 z-50">
          <a 
            href="/test-settings" 
            className="bg-red-600 text-white px-3 py-2 rounded text-sm hover:bg-red-700 transition-colors"
          >
            🐛 Test Settings
          </a>
        </div>
        
        <Navbar />
        <Hero />
        
        <LazySection>
          <Suspense fallback={
            <div className="h-96 flex items-center justify-center">
              <div className="animate-spin w-8 h-8 border-2 border-indigo-600 border-t-transparent rounded-full"></div>
            </div>
          }>
            <About />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={
            <div className="h-96 flex items-center justify-center">
              <div className="animate-spin w-8 h-8 border-2 border-indigo-600 border-t-transparent rounded-full"></div>
            </div>
          }>
            <Portfolio />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={
            <div className="h-96 flex items-center justify-center">
              <div className="animate-spin w-8 h-8 border-2 border-indigo-600 border-t-transparent rounded-full"></div>
            </div>
          }>
            <Services />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={
            <div className="h-96 flex items-center justify-center">
              <div className="animate-spin w-8 h-8 border-2 border-indigo-600 border-t-transparent rounded-full"></div>
            </div>
          }>
            <Testimonials />
          </Suspense>
        </LazySection>



        <LazySection>
          <Suspense fallback={
            <div className="h-96 flex items-center justify-center">
              <div className="animate-spin w-8 h-8 border-2 border-indigo-600 border-t-transparent rounded-full"></div>
            </div>
          }>
            <Contact />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={
            <div className="h-32 flex items-center justify-center">
              <div className="animate-spin w-6 h-6 border-2 border-indigo-600 border-t-transparent rounded-full"></div>
            </div>
          }>
            <Footer />
          </Suspense>
        </LazySection>
      </main>
    </>
  );
}
