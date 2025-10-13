import Hero from "@/components/Hero";
import ProductGallery from "@/components/ProductGallery";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <ProductGallery />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
