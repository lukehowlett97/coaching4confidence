import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import SessionsSection from "@/components/SessionsSection";
import BenefitsSection from "@/components/BenefitsSection";
import TrustSection from "@/components/TrustSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTABand from "@/components/CTABand";
import ContactSection from "@/components/ContactSection";
import StickyCtaBar from "@/components/StickyCtaBar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SessionsSection />
        <BenefitsSection />
        <TestimonialsSection />
        <TrustSection />
        <CTABand />
        <FAQSection />
        <AboutSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <StickyCtaBar />
    </div>
  );
};

export default Index;
