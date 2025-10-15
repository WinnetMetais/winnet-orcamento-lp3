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

import lixeiraElevador from "@/assets/lixeira-elevador.png";
import lixeiraRecepcao from "@/assets/lixeira-recepcao.png";
import guardaChuvaInox from "@/assets/guarda-chuva-inox.png";
import lixeiraHotelCorredor from "@/assets/lixeira-hotel-corredor.png";
import bituqueiraExterna from "@/assets/bituqueira-externa.png";

const Hero = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá! Vim através da Landing Page Premium e gostaria de solicitar um orçamento para meu hotel/condomínio/resort."
  );
  const whatsappUrl = `https://wa.me/5511959105205?text=${whatsappMessage}`;

  const featuredProducts = [
    {
      name: "Lixeira Basculante Quadrada",
      image: lixeiraElevador,
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
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary-hover to-primary/90"
        style={{ 
          backgroundImage: 'var(--gradient-hero)',
        }}
      />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5 sm:opacity-10">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-6 sm:px-8 py-8 sm:py-12 lg:py-20 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-4 sm:space-y-6 px-2 sm:px-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-fade-in">
              <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-accent flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-white leading-tight">
                Referência em Soluções Premium
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-[1.5rem] font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl animate-slide-up break-words">
              Elegância e Durabilidade
              <span className="block mt-1 sm:mt-2 text-gradient-gold bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
                que Transformam
              </span>
              <span className="block mt-1 sm:mt-2">Seu Ambiente</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[0.875rem] leading-relaxed text-white/90 sm:text-base md:text-lg lg:text-xl animate-slide-up break-words" style={{ animationDelay: '0.2s' }}>
              Soluções premium em aço inox para <strong>hotéis</strong>, <strong>condomínios</strong> e <strong>resorts</strong> que elevam o padrão de sofisticação do seu espaço.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg"
                className="w-full sm:w-auto group px-5 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-sm sm:text-base lg:text-lg font-semibold bg-accent hover:bg-accent/90 text-foreground transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="w-full sm:w-auto px-5 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-sm sm:text-base lg:text-lg font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="#produtos" className="flex items-center justify-center">
                  Ver Produtos
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6 pt-4 sm:pt-6 lg:pt-8 border-t border-white/20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-1.5 sm:gap-2 text-white/90">
                <Shield className="w-4 sm:w-5 h-4 sm:h-5 text-accent flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium whitespace-nowrap">Garantia</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-white/90">
                <Award className="w-4 sm:w-5 h-4 sm:h-5 text-accent flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium whitespace-nowrap">+2 Anos</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-white/90">
                <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-accent flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium whitespace-nowrap">Personalizável</span>
              </div>
            </div>
          </div>

          {/* Right Column - Product Gallery Carousel */}
          <div className="relative animate-fade-in mt-6 sm:mt-8 lg:mt-0" style={{ animationDelay: '0.3s' }}>
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
              <CarouselContent className="-ml-2 sm:-ml-4">
                {featuredProducts.map((product, index) => (
                  <CarouselItem key={index} className="pl-2 sm:pl-4 basis-[85%] sm:basis-1/2 md:basis-1/2 lg:basis-full">
                    <div className="relative group h-full">
                      {/* Product Card */}
                      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-3 sm:p-4 lg:p-6 xl:p-8 hover:bg-white/15 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl h-full">
                        {/* Tag */}
                        <div className="absolute top-2 sm:top-3 lg:top-4 right-2 sm:right-3 lg:right-4 z-10">
                          <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold rounded-full bg-accent text-foreground shadow-lg whitespace-nowrap">
                            {product.tag}
                          </span>
                        </div>

                        {/* Product Image */}
                        <div className="relative aspect-square mb-2 sm:mb-3 lg:mb-4 overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/20 to-white/5">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            loading="eager"
                            fetchPriority={index === 0 ? "high" : "auto"}
                            width="830"
                            height="830"
                          />
                          
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>

                        {/* Product Name */}
                        <h3 className="text-xs sm:text-sm lg:text-base xl:text-lg font-bold text-white text-center group-hover:text-accent transition-colors duration-300 leading-tight">
                          {product.name}
                        </h3>

                        {/* Decorative Line */}
                        <div className="mt-1.5 sm:mt-2 lg:mt-3 mx-auto w-8 sm:w-10 lg:w-12 xl:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-accent to-yellow-300 rounded-full" />
                      </div>

                      {/* Glow Effect */}
                      <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Custom Navigation Buttons */}
              <CarouselPrevious className="hidden md:flex absolute -left-3 lg:-left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-accent hover:text-foreground hover:border-accent transition-all duration-300 w-8 h-8 lg:w-10 lg:h-10" />
              <CarouselNext className="hidden md:flex absolute -right-3 lg:-right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-accent hover:text-foreground hover:border-accent transition-all duration-300 w-8 h-8 lg:w-10 lg:h-10" />
            </Carousel>

            {/* Decorative Elements Around Gallery */}
            <div className="hidden sm:block absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-16 sm:w-24 h-16 sm:h-24 bg-accent/30 rounded-full blur-2xl animate-pulse" />
            <div className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-20 sm:w-32 h-20 sm:h-32 bg-primary/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
