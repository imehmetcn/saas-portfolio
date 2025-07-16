import { Suspense, lazy } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";
import LazySection from "@/components/LazySection";
import PerformanceMonitor from "@/components/PerformanceMonitor";

// Lazy load ağır bileşenler
const About = lazy(() => import("@/components/About"));
const Portfolio = lazy(() => import("@/components/Portfolio"));
const Services = lazy(() => import("@/components/Services"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

export default function Home() {
  return (
    <>
      <PerformanceMonitor />

      <ScrollProgressIndicator />
      <main id="top" className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 relative z-10">
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
