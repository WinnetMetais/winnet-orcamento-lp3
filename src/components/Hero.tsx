import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Sparkles } from "lucide-react";

const Hero = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá! Vim através da Landing Page Premium e gostaria de solicitar um orçamento para meu hotel/condomínio/resort."
  );
  const whatsappUrl = `https://wa.me/5511978791851?text=${whatsappMessage}`;

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
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-white">
              Referência em Soluções Premium de Aço Inox
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl animate-slide-up">
            Elegância e Durabilidade
            <span className="block mt-2 text-gradient-gold bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
              que Transformam
            </span>
            <span className="block mt-2">Seu Ambiente</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto mb-10 text-xl leading-relaxed text-white/90 md:text-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Soluções premium em aço inox para <strong>hotéis</strong>, <strong>condomínios</strong> e <strong>resorts</strong> que elevam o padrão de sofisticação do seu espaço.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 mb-12 sm:flex-row animate-slide-up" style={{ animationDelay: '0.4s' }}>
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
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-white/20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2 text-white/90">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Garantia de Qualidade</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">+15 Anos de Experiência</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Produtos Personalizáveis</span>
            </div>
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
