import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";
import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <ScrollProgressIndicator />
      <main id="top" className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
