import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-background text-foreground pt-24 pb-12 overflow-hidden z-10">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />

      {/* Giant Background Text */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none whitespace-nowrap"
        style={{
          fontSize: "20vw",
          lineHeight: 0.75,
          fontWeight: 900,
          letterSpacing: "-0.05em",
          color: "transparent",
          WebkitTextStroke: "1px hsl(0 0% 100% / 0.04)",
          background: "linear-gradient(180deg, hsl(0 0% 100% / 0.06) 0%, transparent 60%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
        }}
      >
        WINNET
      </div>

      <div className="container px-4 mx-auto relative z-10">
        {/* Back to top */}
        <div className="flex justify-center mb-16">
          <Button
            variant="ghost"
            onClick={scrollToTop}
            className="glass-pill px-6 py-3 text-muted-foreground hover:text-foreground"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Voltar ao Topo
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Winnet Metais</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Referência em soluções premium de aço inox para hotéis, condomínios e resorts. Qualidade e sofisticação desde 2022.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Produtos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#produtos" className="hover:text-accent transition-colors">Lixeiras Premium</a></li>
              <li><a href="#produtos" className="hover:text-accent transition-colors">Coleta Seletiva</a></li>
              <li><a href="#produtos" className="hover:text-accent transition-colors">Utilitários de Inox</a></li>
              <li><a href="#produtos" className="hover:text-accent transition-colors">Linha Hospitalar</a></li>
              <li><a href="#produtos" className="hover:text-accent transition-colors">Produtos Personalizados</a></li>
            </ul>
          </div>

          {/* Segments */}
          <div>
            <h4 className="font-semibold mb-4">Segmentos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">Hotéis e Resorts</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Condomínios</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Hospitais e Clínicas</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Escritórios Corporativos</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Construção Civil</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+5511959105205" className="hover:text-accent transition-colors">+55 (11) 95910-5205</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:comercial@winnetmetais.com.br" className="hover:text-accent transition-colors">comercial@winnetmetais.com.br</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>São Paulo - SP<br/>Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground md:flex-row md:justify-between">
            <p>© {currentYear} Winnet Metais. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-accent transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
