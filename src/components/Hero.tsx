import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import lixeiraHotelLobby from "@/assets/lixeira-hotel-lobby.png";
import lixeiraRecepcao from "@/assets/lixeira-recepcao.png";
import guardaChuvaInox from "@/assets/guarda-chuva-inox.png";
import lixeiraHotelCorredor from "@/assets/lixeira-hotel-corredor.png";
import bituqueiraExterna from "@/assets/bituqueira-externa.png";

const Hero = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá! Vim através da Landing Page Premium e gostaria de solicitar um orçamento para meu hotel/condomínio/resort."
  );
  const whatsappUrl = `https://wa.me/5511978791851?text=${whatsappMessage}`;

  const featuredProducts = [
    {
      name: "Lixeira Premium Lobby",
      image: lixeiraHotelLobby,
      tag: "Mais Vendida"
    },
    {
      name: "Lixeira Recepção Executiva",
      image: lixeiraRecepcao,
      tag: "Design Premium"
    },
    {
      name: "Porta Guarda-Chuvas",
      image: guardaChuvaInox,
      tag: "Exclusivo"
    },
    {
      name: "Coletor para Corredores",
      image: lixeiraHotelCorredor,
      tag: "Alta Durabilidade"
    },
    {
      name: "Bituqueira Externa",
      image: bituqueiraExterna,
      tag: "Uso Externo"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary-hover to-primary/90"
        style={{ 
          backgroundImage: 'var(--gradient-hero)',
        }}
      />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-fade-in">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-white">
                Referência em Soluções Premium de Aço Inox
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl animate-slide-up">
              Elegância e Durabilidade
              <span className="block mt-2 text-gradient-gold bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
                que Transformam
              </span>
              <span className="block mt-2">Seu Ambiente</span>
            </h1>

            {/* Subtitle */}
            <p className="mb-10 text-lg leading-relaxed text-white/90 md:text-xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Soluções premium em aço inox para <strong>hotéis</strong>, <strong>condomínios</strong> e <strong>resorts</strong> que elevam o padrão de sofisticação do seu espaço.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center lg:items-start gap-4 mb-12 sm:flex-row animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg"
                className="group px-8 py-6 text-lg font-semibold bg-accent hover:bg-accent/90 text-foreground transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="#produtos">
                  Ver Produtos
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-8 border-t border-white/20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2 text-white/90">
                <Shield className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Garantia de Qualidade</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">+15 Anos</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Personalizável</span>
              </div>
            </div>
          </div>

          {/* Right Column - Product Gallery Carousel */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {featuredProducts.map((product, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-full">
                    <div className="relative group">
                      {/* Product Card */}
                      <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 hover:bg-white/15 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                        {/* Tag */}
                        <div className="absolute top-4 right-4 z-10">
                          <span className="px-3 py-1 text-xs font-bold rounded-full bg-accent text-foreground shadow-lg">
                            {product.tag}
                          </span>
                        </div>

                        {/* Product Image */}
                        <div className="relative aspect-square mb-4 overflow-hidden rounded-2xl bg-gradient-to-br from-white/20 to-white/5">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            loading="eager"
                          />
                          
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>

                        {/* Product Name */}
                        <h3 className="text-xl font-bold text-white text-center group-hover:text-accent transition-colors duration-300">
                          {product.name}
                        </h3>

                        {/* Decorative Line */}
                        <div className="mt-3 mx-auto w-16 h-1 bg-gradient-to-r from-accent to-yellow-300 rounded-full" />
                      </div>

                      {/* Glow Effect */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Custom Navigation Buttons */}
              <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-accent hover:text-foreground hover:border-accent transition-all duration-300" />
              <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-accent hover:text-foreground hover:border-accent transition-all duration-300" />
            </Carousel>

            {/* Decorative Elements Around Gallery */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/30 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
