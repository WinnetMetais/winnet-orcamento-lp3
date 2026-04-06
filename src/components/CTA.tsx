import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const CTA = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de solicitar um orçamento personalizado para meu hotel/condomínio/resort. Vim através da Landing Page Premium."
  );
  const whatsappUrl = `https://wa.me/5511959105205?text=${whatsappMessage}`;

  return (
    <section className="py-24 bg-background relative overflow-hidden z-10">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/30 via-background to-background pointer-events-none" />

      <div className="container relative z-10 px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-glow">
            Pronto para Elevar o Padrão
            <span className="block mt-2 text-gradient-gold">
              do Seu Empreendimento?
            </span>
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-lg md:text-xl text-muted-foreground leading-relaxed">
            Fale com nossos especialistas e descubra como nossas soluções premium em aço inox podem transformar seus ambientes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-4 mb-12 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="group px-8 py-6 text-lg font-semibold bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 hover:scale-105"
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
              className="px-8 py-6 text-lg font-semibold glass-pill text-foreground hover:text-foreground"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2" />
                Chamar no WhatsApp
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col items-center gap-6 text-muted-foreground sm:flex-row sm:justify-center sm:gap-12">
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
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
