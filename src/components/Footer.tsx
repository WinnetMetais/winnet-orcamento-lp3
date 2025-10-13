import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-4 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Winnet Metais</h3>
            <p className="text-sm text-background/80 mb-4 leading-relaxed">
              Referência em soluções premium de aço inox para hotéis, condomínios e resorts. Qualidade e sofisticação desde 2008.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-background/70 hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Produtos</h4>
            <ul className="space-y-2 text-sm text-background/80">
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
            <ul className="space-y-2 text-sm text-background/80">
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
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+5511978791851" className="hover:text-accent transition-colors">
                  +55 (11) 97879-1851
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:contato@winnetmetais.com.br" className="hover:text-accent transition-colors">
                  contato@winnetmetais.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>São Paulo - SP<br/>Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col items-center gap-4 text-sm text-background/70 md:flex-row md:justify-between">
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
