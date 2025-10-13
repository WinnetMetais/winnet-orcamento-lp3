import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Eye, X } from "lucide-react";

import lixeiraHotelLobby from "@/assets/lixeira-hotel-lobby.png";
import lixeiraHotelCorredor from "@/assets/lixeira-hotel-corredor.png";
import lixeiraClinicaHospital from "@/assets/lixeira-clinica-hospital.png";
import placaPisoMolhado from "@/assets/placa-piso-molhado.png";
import guardaChuvaInox from "@/assets/guarda-chuva-inox.png";
import bituqueiraExterna from "@/assets/bituqueira-externa.png";
import lixeiraHospitalRodizio from "@/assets/lixeira-hospital-rodizio.png";
import lixeiraCozinha from "@/assets/lixeira-cozinha.png";
import lixeiraElevador from "@/assets/lixeira-elevador.png";
import lixeiraRecepcao from "@/assets/lixeira-recepcao.png";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  ideal: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Lixeira Cilíndrica Premium",
    category: "Lixeiras de Lobby",
    description: "Design elegante e discreto, perfeito para áreas de circulação de alto padrão. Acabamento em aço inox escovado com alta resistência.",
    image: lixeiraHotelLobby,
    tags: ["Inox 304", "Design Premium", "Alta Durabilidade"],
    ideal: ["Lobbies de Hotéis", "Recepções", "Áreas Comuns"]
  },
  {
    id: 2,
    name: "Coletor Cilíndrico Corporativo",
    category: "Coletores para Corredores",
    description: "Solução sofisticada para corredores e áreas de trânsito. Tampa basculante de fácil uso e manutenção simplificada.",
    image: lixeiraHotelCorredor,
    tags: ["Fácil Manutenção", "Design Moderno", "Tampa Basculante"],
    ideal: ["Corredores", "Áreas de Serviço", "Halls"]
  },
  {
    id: 3,
    name: "Lixeira Hospitalar com Pedal",
    category: "Linha Hospitalar",
    description: "Acionamento por pedal para máxima higiene. Ideal para ambientes que exigem alto padrão de limpeza e assepsia.",
    image: lixeiraClinicaHospital,
    tags: ["Pedal Higiênico", "Inox Hospitalar", "Fácil Higienização"],
    ideal: ["Clínicas", "Hospitais", "Consultórios"]
  },
  {
    id: 4,
    name: "Cavalete de Sinalização",
    category: "Sinalização e Segurança",
    description: "Cavalete dobrável em aço inox com sinalização bilíngue. Essencial para manutenção da segurança em áreas de limpeza.",
    image: placaPisoMolhado,
    tags: ["Bilíngue", "Dobrável", "Alta Visibilidade"],
    ideal: ["Hotéis", "Resorts", "Áreas Úmidas"]
  },
  {
    id: 5,
    name: "Porta Guarda-Chuvas Premium",
    category: "Acessórios de Entrada",
    description: "Design sofisticado com sistema de drenagem integrado. Perfeito para entradas principais de hotéis e condomínios.",
    image: guardaChuvaInox,
    tags: ["Drenagem Integrada", "Design Exclusivo", "Grande Capacidade"],
    ideal: ["Entradas Principais", "Portarias", "Recepções"]
  },
  {
    id: 6,
    name: "Bituqueira para Áreas Externas",
    category: "Utilitários Externos",
    description: "Solução elegante para áreas fumantes. Base sólida com cinzeiro superior removível para fácil limpeza.",
    image: bituqueiraExterna,
    tags: ["Uso Externo", "Cinzeiro Removível", "Resistente"],
    ideal: ["Áreas Externas", "Fumódromos", "Jardins"]
  },
  {
    id: 7,
    name: "Coletor Hospitalar com Rodízios",
    category: "Linha Móvel",
    description: "Mobilidade e higiene em um único produto. Rodízios de alta qualidade e alças ergonômicas para transporte eficiente.",
    image: lixeiraHospitalRodizio,
    tags: ["Rodízios 360°", "Alças Reforçadas", "Grande Capacidade"],
    ideal: ["Hospitais", "Clínicas", "Centros Médicos"]
  },
  {
    id: 8,
    name: "Lixeira de Pedal para Cozinhas",
    category: "Linha Gastronômica",
    description: "Design compacto com pedal silencioso. Ideal para cozinhas profissionais que prezam por higiene e praticidade.",
    image: lixeiraCozinha,
    tags: ["Pedal Silencioso", "Inox 304", "Compacta"],
    ideal: ["Cozinhas", "Refeitórios", "Áreas de Serviço"]
  },
  {
    id: 9,
    name: "Lixeira Basculante Quadrada",
    category: "Elevadores e Espaços Compactos",
    description: "Design quadrado que otimiza espaços. Tampa basculante discreta, perfeita para elevadores e áreas reduzidas.",
    image: lixeiraElevador,
    tags: ["Design Compacto", "Tampa Discreta", "Inox Escovado"],
    ideal: ["Elevadores", "Halls", "Corredores Estreitos"]
  },
  {
    id: 10,
    name: "Lixeira Premium para Recepção",
    category: "Linha Executiva",
    description: "Elegância e funcionalidade para sua recepção. Tampa com fechamento suave e acabamento premium.",
    image: lixeiraRecepcao,
    tags: ["Fechamento Suave", "Acabamento Premium", "Design Executivo"],
    ideal: ["Recepções", "Salas VIP", "Áreas Executivas"]
  }
];

const ProductGallery = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", "Lixeiras de Lobby", "Linha Hospitalar", "Acessórios de Entrada", "Linha Móvel"];
  
  const filteredProducts = filter === "all" 
    ? products 
    : products.filter(p => p.category === filter);

  const whatsappMessage = (productName: string) => 
    encodeURIComponent(`Olá! Gostaria de solicitar um orçamento para: ${productName}. Vim através da Landing Page Premium.`);

  return (
    <section id="produtos" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Portfólio Premium
          </Badge>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            Soluções Completas em
            <span className="block text-gradient-gold mt-2">Aço Inox</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada produto é projetado para aliar sofisticação, durabilidade e funcionalidade aos ambientes mais exigentes.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              onClick={() => setFilter(cat)}
              className={filter === cat ? "bg-primary text-primary-foreground" : ""}
            >
              {cat === "all" ? "Todos os Produtos" : cat}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover-lift cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProduct(product)}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-secondary/50 to-secondary/20">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3">
                    <Button size="sm" className="bg-white text-primary hover:bg-white/90">
                      <Eye className="w-4 h-4 mr-2" />
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <Badge variant="outline" className="mb-3 text-xs">
                  {product.category}
                </Badge>
                <h3 className="mb-2 text-xl font-bold group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                  {product.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {product.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Detail Modal */}
        <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProduct && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    {selectedProduct.name}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Image */}
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-secondary/20">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex flex-col">
                    <Badge className="self-start mb-4 bg-accent/10 text-accent border-accent/20">
                      {selectedProduct.category}
                    </Badge>
                    
                    <p className="mb-6 text-muted-foreground leading-relaxed">
                      {selectedProduct.description}
                    </p>

                    {/* Tags */}
                    <div className="mb-6">
                      <h4 className="mb-3 text-sm font-semibold">Características:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Ideal For */}
                    <div className="mb-6">
                      <h4 className="mb-3 text-sm font-semibold">Ideal Para:</h4>
                      <ul className="space-y-2">
                        {selectedProduct.ideal.map((place) => (
                          <li key={place} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                            {place}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Button 
                      size="lg" 
                      className="mt-auto bg-accent hover:bg-accent/90 text-accent-foreground"
                      asChild
                    >
                      <a 
                        href={`https://wa.me/5511978791851?text=${whatsappMessage(selectedProduct.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Solicitar Orçamento
                        <ArrowRight className="ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ProductGallery;
