import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import SessionsSection from "@/components/SessionsSection";
import BenefitsSection from "@/components/BenefitsSection";
import TrustSection from "@/components/TrustSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuickEnquiryForm from "@/components/QuickEnquiryForm";
import FAQSection from "@/components/FAQSection";
import CTABand from "@/components/CTABand";
import ContactSection from "@/components/ContactSection";
import LocationSection from "@/components/LocationSection";
import StickyCtaBar from "@/components/StickyCtaBar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div id="top" className="absolute -top-20" />
      <Header />
      <main className="pb-28 md:pb-0">
        <HeroSection />
        <section id="sessions" className="scroll-mt-24"><SessionsSection /></section>
        <section id="location" className="scroll-mt-24"><LocationSection /></section>
        {/* <BenefitsSection /> */}
        <section id="about" className="scroll-mt-24"><AboutSection /></section>

        <TestimonialsSection />
        <TrustSection />
        <CTABand />
        <section id="enquiry" className="mx-auto max-w-screen-sm px-4 py-6">
          <QuickEnquiryForm />
        </section>
        <section id="faq" className="scroll-mt-24"><FAQSection /></section>

      </main>
      <Footer />
      <StickyCtaBar />
    </div>
  );
};

export default Index;
