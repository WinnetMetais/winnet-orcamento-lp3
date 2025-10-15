import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Eye, X } from "lucide-react";

import lixeiraElevador from "@/assets/lixeira-elevador.png";
import lixeiraHotelCorredor from "@/assets/lixeira-hotel-corredor.png";
import lixeiraClinicaHospital from "@/assets/lixeira-clinica-hospital.png";
import placaPisoMolhado from "@/assets/placa-piso-molhado.png";
import guardaChuvaInox from "@/assets/guarda-chuva-inox.png";
import bituqueiraExterna from "@/assets/bituqueira-externa.png";
import lixeiraHospitalRodizio from "@/assets/lixeira-hospital-rodizio.png";
import lixeiraCozinha from "@/assets/lixeira-cozinha.png";
import lixeiraRecepcao from "@/assets/lixeira-recepcao.png";
import ensacadorGuardaChuvas from "@/assets/ensacador-guarda-chuvas.png";
import portaExtintorLobby from "@/assets/porta-extintor-lobby.png";
import lixeiraBanheiroResort from "@/assets/lixeira-banheiro-resort.png";
import lixeiraBasculanteRedonda from "@/assets/lixeira-basculante-redonda.png";
import lixeiraPedalBanheiro from "@/assets/lixeira-pedal-banheiro.png";
import conjuntoPortaExtintorPlaca from "@/assets/conjunto-porta-extintor-placa.png";
import bituqueiraParede from "@/assets/bituqueira-parede.png";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  ideal: string[];
  additionalCategories?: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Lixeira Basculante Redonda",
    category: "Lixeiras de Lobby",
    description: "Design redondo elegante e discreto, perfeito para áreas de circulação de alto padrão. Fabricada em aço inox 430 com acabamento em aço polido de alta resistência.",
    image: lixeiraBasculanteRedonda,
    tags: ["Aço Inox 430", "Aço Polido", "Alta Durabilidade"],
    ideal: ["Lobbies de Hotéis", "Recepções", "Áreas Comuns"]
  },
  {
    id: 2,
    name: "Coletor Cilíndrico Corporativo",
    category: "Coletores para Corredores",
    description: "Solução sofisticada para corredores e áreas de trânsito. Fabricada em aço inox 430 com acabamento em aço polido. Tampa basculante de fácil uso e manutenção simplificada.",
    image: lixeiraHotelCorredor,
    tags: ["Aço Inox 430", "Aço Polido", "Tampa Basculante"],
    ideal: ["Corredores", "Áreas de Serviço", "Halls"],
    additionalCategories: ["Lixeiras de Lobby"]
  },
  {
    id: 3,
    name: "Lixeira com Tampa para Banheiros",
    category: "Linha Resorts",
    description: "Design elegante e discreto para banheiros de alto padrão. Fabricada em aço inox 430 com acabamento em aço polido. Tampa com acionamento suave e silencioso.",
    image: lixeiraBanheiroResort,
    tags: ["Aço Inox 430", "Aço Polido", "Design Elegante"],
    ideal: ["Resorts", "Hotéis", "Spas"]
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
    id: 11,
    name: "Ensacador de Guarda-Chuvas",
    category: "Acessórios de Entrada",
    description: "Solução prática e higiênica para dias chuvosos. Sistema completo com dispenser de 150 saquinhos plásticos. Mantém o ambiente limpo e protegido da umidade.",
    image: ensacadorGuardaChuvas,
    tags: ["Inclui 150 Saquinhos", "Sistema Automático", "Higiênico"],
    ideal: ["Entradas de Hotéis", "Resorts", "Recepções Premium"]
  },
  {
    id: 12,
    name: "Porta Extintor Premium",
    category: "Utilitários de Lobby e Corredor",
    description: "Dupla funcionalidade com design sofisticado em aço inox polido. Suporte para extintor e cesto para descarte, mantendo a elegância do ambiente.",
    image: portaExtintorLobby,
    tags: ["Aço Inox Polido", "Dupla Função", "Design Premium"],
    ideal: ["Lobbies", "Halls Corporativos", "Áreas Nobres"]
  },
  {
    id: 6,
    name: "Bituqueira para Áreas Externas",
    category: "Utilitários Externos",
    description: "Solução elegante para áreas fumantes. Base sólida com cinzeiro superior removível para fácil limpeza.",
    image: bituqueiraExterna,
    tags: ["Uso Externo", "Cinzeiro Removível", "Resistente"],
    ideal: ["Áreas Externas", "Fumódromos", "Jardins"],
    additionalCategories: ["Acessórios de Entrada", "Linha Resorts"]
  },
  {
    id: 7,
    name: "Coletor com Rodízios",
    category: "Linha Móvel",
    description: "Mobilidade e higiene em um único produto. Fabricada em aço inox 430 com acabamento em aço polido. Rodízios de alta qualidade e alças ergonômicas para transporte eficiente.",
    image: lixeiraHospitalRodizio,
    tags: ["Aço Inox 430", "Aço Polido", "Rodízios 360°"],
    ideal: ["Hospitais", "Clínicas", "Centros Médicos"]
  },
  {
    id: 8,
    name: "Lixeira de Pedal para Cozinhas",
    category: "Linha Gastronômica",
    description: "Design compacto com pedal silencioso. Fabricada em aço inox 430 com acabamento em aço polido. Ideal para cozinhas profissionais que prezam por higiene e praticidade.",
    image: lixeiraCozinha,
    tags: ["Aço Inox 430", "Aço Polido", "Pedal Silencioso"],
    ideal: ["Cozinhas", "Refeitórios", "Áreas de Serviço"]
  },
  {
    id: 9,
    name: "Lixeira Basculante Quadrada",
    category: "Elevadores e Espaços Compactos",
    description: "Design quadrado que otimiza espaços. Fabricada em aço inox 430 com acabamento em aço polido. Tampa basculante discreta, perfeita para elevadores e áreas reduzidas.",
    image: lixeiraElevador,
    tags: ["Aço Inox 430", "Aço Polido", "Design Compacto"],
    ideal: ["Elevadores", "Halls", "Corredores Estreitos"]
  },
  {
    id: 10,
    name: "Lixeira Premium para Recepção",
    category: "Linha Executiva",
    description: "Elegância e funcionalidade para sua recepção. Fabricada em aço inox 430 com acabamento em aço polido premium. Tampa com fechamento suave.",
    image: lixeiraRecepcao,
    tags: ["Aço Inox 430", "Aço Polido", "Fechamento Suave"],
    ideal: ["Recepções", "Salas VIP", "Áreas Executivas"]
  },
  {
    id: 13,
    name: "Lixeira com Pedal para Banheiro",
    category: "Linha Resorts",
    description: "Lixeira cilíndrica com pedal, acabamento espelhado em aço inox 304, perfeita para banheiros sofisticados de hotéis e resorts.",
    image: lixeiraPedalBanheiro,
    tags: ["Aço Inox 304", "Com Pedal", "Design Moderno"],
    ideal: ["Banheiros de Hotéis", "Resorts", "Residências de Alto Padrão"]
  },
  {
    id: 14,
    name: "Conjunto Porta Extintor e Placa",
    category: "Acessórios de Entrada",
    description: "Conjunto completo com porta extintor, placa de sinalização 'Piso Molhado' e porta guarda-chuvas em aço inox premium.",
    image: conjuntoPortaExtintorPlaca,
    tags: ["Kit Completo", "Multifuncional", "Segurança"],
    ideal: ["Entradas", "Lobbies", "Áreas de Circulação"]
  },
  {
    id: 15,
    name: "Bituqueira de Parede Externa",
    category: "Utilitários Externos",
    description: "Bituqueira cilíndrica para fixação em parede, ideal para áreas externas de hotéis e resorts. Design moderno e discreto.",
    image: bituqueiraParede,
    tags: ["Aço Inox 304", "Fixação em Parede", "Resistente"],
    ideal: ["Áreas Externas", "Entradas", "Varandas"],
    additionalCategories: ["Acessórios de Entrada", "Linha Resorts"]
  }
];

const ProductGallery = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", "Lixeiras de Lobby", "Linha Resorts", "Acessórios de Entrada", "Utilitários de Lobby e Corredor", "Linha Móvel"];
  
  const filteredProducts = filter === "all" 
    ? products 
    : products.filter(p => p.category === filter || (p.additionalCategories && p.additionalCategories.includes(filter)));

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
