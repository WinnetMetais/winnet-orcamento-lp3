import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

const CTA = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de solicitar um orçamento personalizado para meu hotel/condomínio/resort. Vim através da Landing Page Premium."
  );
  const whatsappUrl = `https://wa.me/5511959105205?text=${whatsappMessage}`;

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-hover to-primary/90 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Pronto para Elevar o Padrão
            <span className="block mt-2 text-gradient-gold bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
              do Seu Empreendimento?
            </span>
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-xl text-white/90 leading-relaxed">
            Fale com nossos especialistas e descubra como nossas soluções premium em aço inox podem transformar seus ambientes.
          </p>

          {/* Main CTA */}
          <div className="flex flex-col items-center gap-4 mb-12 sm:flex-row sm:justify-center">
            <Button 
              size="lg"
              className="group px-8 py-6 text-lg font-semibold bg-accent hover:bg-accent/90 text-foreground transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2" />
                Falar com Especialista
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="mailto:comercial@winnetmetais.com.br">
                <Mail className="mr-2" />
                Enviar E-mail
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="pt-8 border-t border-white/20">
            <div className="flex flex-col items-center gap-6 text-white/90 sm:flex-row sm:justify-center sm:gap-12">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:+5511959105205" className="hover:text-accent transition-colors">
                  +55 (11) 95910-5205
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:comercial@winnetmetais.com.br" className="hover:text-accent transition-colors">
                  comercial@winnetmetais.com.br
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>São Paulo - SP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
