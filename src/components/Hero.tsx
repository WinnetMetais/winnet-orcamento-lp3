import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import lixeiraElevador from "@/assets/lixeira-elevador.png";
import lixeiraRecepcao from "@/assets/lixeira-recepcao.png";
import guardaChuvaInox from "@/assets/guarda-chuva-inox.png";
import lixeiraHotelCorredor from "@/assets/lixeira-hotel-corredor.png";
import bituqueiraExterna from "@/assets/bituqueira-externa.png";
const Hero = () => {
  const whatsappMessage = encodeURIComponent("Olá! Vim através da Landing Page Premium e gostaria de solicitar um orçamento para meu hotel/condomínio/resort.");
  const whatsappUrl = `https://wa.me/5511959105205?text=${whatsappMessage}`;
  const featuredProducts = [{
    name: "Lixeira Basculante Quadrada",
    image: lixeiraElevador,
    tag: "Mais Vendida"
  }, {
    name: "Lixeira Recepção Executiva",
    image: lixeiraRecepcao,
    tag: "Design Premium"
  }, {
    name: "Porta Guarda-Chuvas",
    image: guardaChuvaInox,
    tag: "Exclusivo"
  }, {
    name: "Coletor para Corredores",
    image: lixeiraHotelCorredor,
    tag: "Alta Durabilidade"
  }, {
    name: "Bituqueira Externa",
    image: bituqueiraExterna,
    tag: "Uso Externo"
  }];
  return <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-hover to-primary/90" style={{
      backgroundImage: 'var(--gradient-hero)'
    }} />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5 sm:opacity-10">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-20 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-5 sm:space-y-6 max-w-2xl lg:mx-0 mx-0 px-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-fade-in">
              <Sparkles className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-accent flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-white">
                Referência em Soluções Premium
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-[1.75rem] leading-[1.2] font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl animate-slide-up">
              Elegância e Durabilidade
              <span className="block mt-2 bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
                que Transformam
              </span>
              <span className="block mt-2">Seu Ambiente</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm leading-relaxed text-white/90 sm:text-base md:text-lg animate-slide-up max-w-xl mx-auto lg:mx-0" style={{
            animationDelay: '0.2s'
          }}>
              Soluções premium em aço inox para <strong>hotéis</strong>, <strong>condomínios</strong> e <strong>resorts</strong> que elevam o padrão de sofisticação do seu espaço.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 animate-slide-up" style={{
            animationDelay: '0.4s'
          }}>
              <Button size="lg" className="w-full sm:w-auto group px-6 py-5 sm:py-6 text-sm sm:text-base font-semibold bg-accent hover:bg-accent/90 text-foreground transition-all duration-300 hover:scale-105 hover:shadow-2xl" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-6 py-5 sm:py-6 text-sm sm:text-base font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300" asChild>
                <a href="#produtos" className="flex items-center justify-center">
                  Ver Produtos
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-5 sm:pt-6 border-t border-white/20 animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
              <div className="flex items-center gap-2 text-white/90">
                <Shield className="w-4 sm:w-5 h-4 sm:h-5 text-accent flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium">Garantia</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Award className="w-4 sm:w-5 h-4 sm:h-5 text-accent flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium">+2 Anos</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-accent flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium">Personalizável</span>
              </div>
            </div>
          </div>

          {/* Right Column - Product Gallery Carousel */}
          <div className="relative animate-fade-in lg:mt-0" style={{
          animationDelay: '0.3s'
        }}>
            <Carousel opts={{
            align: "start",
            loop: true
          }} plugins={[Autoplay({
            delay: 3000
          })]} className="w-full max-w-lg mx-auto lg:max-w-none">
              <CarouselContent className="-ml-3">
                {featuredProducts.map((product, index) => <CarouselItem key={index} className="pl-3 basis-[90%] sm:basis-[45%] lg:basis-full">
                    <div className="relative group h-full">
                      {/* Product Card */}
                      <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-5 lg:p-6 hover:bg-white/15 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl h-full px-0">
                        {/* Tag */}
                        <div className="absolute top-3 right-3 z-10">
                          <span className="px-2.5 py-1 text-[10px] sm:text-xs font-bold rounded-full bg-accent text-foreground shadow-lg">
                            {product.tag}
                          </span>
                        </div>

                        {/* Product Image */}
                        <div className="relative aspect-square mb-3 overflow-hidden rounded-xl bg-gradient-to-br from-white/20 to-white/5">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" loading="eager" fetchPriority={index === 0 ? "high" : "auto"} width="830" height="830" />
                          
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>

                        {/* Product Name */}
                        <h3 className="text-sm sm:text-base font-bold text-white text-center group-hover:text-accent transition-colors duration-300 leading-tight px-2">
                          {product.name}
                        </h3>

                        {/* Decorative Line */}
                        <div className="mt-2 mx-auto w-12 h-1 bg-gradient-to-r from-accent to-yellow-300 rounded-full" />
                      </div>

                      {/* Glow Effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    </div>
                  </CarouselItem>)}
              </CarouselContent>
              
              {/* Custom Navigation Buttons */}
              <CarouselPrevious className="hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-accent hover:text-foreground hover:border-accent transition-all duration-300 w-10 h-10" />
              <CarouselNext className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-accent hover:text-foreground hover:border-accent transition-all duration-300 w-10 h-10" />
            </Carousel>

            {/* Decorative Elements Around Gallery */}
            <div className="hidden sm:block absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-16 sm:w-24 h-16 sm:h-24 bg-accent/30 rounded-full blur-2xl animate-pulse" />
            <div className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-20 sm:w-32 h-20 sm:h-32 bg-primary/30 rounded-full blur-2xl animate-pulse" style={{
            animationDelay: '1s'
          }} />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>;
};
export default Hero;