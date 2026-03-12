import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ServicesSection from "@/components/landing/ServicesSection";
import TeamSection from "@/components/landing/TeamSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import LocationSection from "@/components/landing/LocationSection";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
      <LocationSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
