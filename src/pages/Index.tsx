import Hero from "@/components/Hero";
import Ambientes from "@/components/Ambientes";
import ProductGallery from "@/components/ProductGallery";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Ambientes />
      <Features />
      <ProductGallery />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
