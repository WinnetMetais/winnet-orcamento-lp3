import Hero from "@/components/Hero";
import Ambientes from "@/components/Ambientes";
import ProductGallery from "@/components/ProductGallery";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="relative z-10 bg-background">
        <Ambientes />
        <Features />
        <ProductGallery />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
      <WhatsAppButton />
    </main>
  );
};

export default Index;
