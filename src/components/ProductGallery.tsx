import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import lixeiraElevador from "@/assets/lixeira-elevador.png";
import lixeiraHotelCorredor from "@/assets/lixeira-hotel-corredor.png";
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
import coletaSeletivaInox from "@/assets/coleta-seletiva-inox.png";

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
  { id: 1, name: "Lixeira Basculante Redonda", category: "Lixeiras de Lobby", description: "Design redondo elegante e discreto, perfeito para áreas de circulação de alto padrão. Fabricada em aço inox 430 com acabamento em aço polido de alta resistência.", image: lixeiraBasculanteRedonda, tags: ["Aço Inox 430", "Aço Polido", "Alta Durabilidade"], ideal: ["Lobbies de Hotéis", "Recepções", "Áreas Comuns"] },
  { id: 2, name: "Coletor Cilíndrico Corporativo", category: "Coletores para Corredores", description: "Solução sofisticada para corredores e áreas de trânsito. Fabricada em aço inox 430 com acabamento em aço polido.", image: lixeiraHotelCorredor, tags: ["Aço Inox 430", "Aço Polido", "Tampa Basculante"], ideal: ["Corredores", "Áreas de Serviço", "Halls"], additionalCategories: ["Lixeiras de Lobby"] },
  { id: 3, name: "Lixeira com Tampa para Banheiros", category: "Linha Resorts", description: "Design elegante e discreto para banheiros de alto padrão. Fabricada em aço inox 430 com acabamento em aço polido.", image: lixeiraBanheiroResort, tags: ["Aço Inox 430", "Aço Polido", "Design Elegante"], ideal: ["Resorts", "Hotéis", "Spas"] },
  { id: 4, name: "Cavalete de Sinalização", category: "Sinalização e Segurança", description: "Cavalete dobrável em aço inox com sinalização bilíngue. Essencial para manutenção da segurança.", image: placaPisoMolhado, tags: ["Bilíngue", "Dobrável", "Alta Visibilidade"], ideal: ["Hotéis", "Resorts", "Áreas Úmidas"] },
  { id: 5, name: "Porta Guarda-Chuvas Premium", category: "Acessórios de Entrada", description: "Design sofisticado com sistema de drenagem integrado. Perfeito para entradas principais.", image: guardaChuvaInox, tags: ["Drenagem Integrada", "Design Exclusivo", "Grande Capacidade"], ideal: ["Entradas Principais", "Portarias", "Recepções"] },
  { id: 11, name: "Ensacador de Guarda-Chuvas", category: "Acessórios de Entrada", description: "Solução prática e higiênica para dias chuvosos. Sistema completo com dispenser de 150 saquinhos plásticos.", image: ensacadorGuardaChuvas, tags: ["Inclui 150 Saquinhos", "Sistema Automático", "Higiênico"], ideal: ["Entradas de Hotéis", "Resorts", "Recepções Premium"] },
  { id: 12, name: "Porta Extintor Premium", category: "Utilitários de Lobby e Corredor", description: "Dupla funcionalidade com design sofisticado em aço inox polido.", image: portaExtintorLobby, tags: ["Aço Inox Polido", "Dupla Função", "Design Premium"], ideal: ["Lobbies", "Halls Corporativos", "Áreas Nobres"] },
  { id: 6, name: "Bituqueira para Áreas Externas", category: "Utilitários Externos", description: "Solução elegante para áreas fumantes. Base sólida com cinzeiro superior removível.", image: bituqueiraExterna, tags: ["Uso Externo", "Cinzeiro Removível", "Resistente"], ideal: ["Áreas Externas", "Fumódromos", "Jardins"], additionalCategories: ["Acessórios de Entrada", "Linha Resorts"] },
  { id: 7, name: "Coletor com Rodízios", category: "Linha Móvel", description: "Mobilidade e higiene em um único produto. Rodízios de alta qualidade e alças ergonômicas.", image: lixeiraHospitalRodizio, tags: ["Aço Inox 430", "Aço Polido", "Rodízios 360°"], ideal: ["Hospitais", "Clínicas", "Centros Médicos"] },
  { id: 8, name: "Lixeira de Pedal para Cozinhas", category: "Linha Gastronômica", description: "Design compacto com pedal silencioso. Ideal para cozinhas profissionais.", image: lixeiraCozinha, tags: ["Aço Inox 430", "Aço Polido", "Pedal Silencioso"], ideal: ["Cozinhas", "Refeitórios", "Áreas de Serviço"] },
  { id: 9, name: "Lixeira Basculante Quadrada", category: "Elevadores e Espaços Compactos", description: "Design quadrado que otimiza espaços. Tampa basculante discreta.", image: lixeiraElevador, tags: ["Aço Inox 430", "Aço Polido", "Design Compacto"], ideal: ["Elevadores", "Halls", "Corredores Estreitos"] },
  { id: 10, name: "Lixeira Premium para Recepção", category: "Linha Executiva", description: "Elegância e funcionalidade para sua recepção. Tampa com fechamento suave.", image: lixeiraRecepcao, tags: ["Aço Inox 430", "Aço Polido", "Fechamento Suave"], ideal: ["Recepções", "Salas VIP", "Áreas Executivas"] },
  { id: 13, name: "Lixeira com Pedal para Banheiro", category: "Linha Resorts", description: "Lixeira cilíndrica com pedal, acabamento espelhado em aço inox 430.", image: lixeiraPedalBanheiro, tags: ["Aço Inox 430", "Com Pedal", "Design Moderno"], ideal: ["Banheiros de Hotéis", "Resorts", "Residências de Alto Padrão"] },
  { id: 14, name: "Conjunto Porta Extintor e Placa", category: "Acessórios de Entrada", description: "Conjunto completo com porta extintor, placa de sinalização e porta guarda-chuvas.", image: conjuntoPortaExtintorPlaca, tags: ["Kit Completo", "Multifuncional", "Segurança"], ideal: ["Entradas", "Lobbies", "Áreas de Circulação"] },
  { id: 15, name: "Bituqueira de Parede Externa", category: "Utilitários Externos", description: "Bituqueira cilíndrica para fixação em parede, ideal para áreas externas.", image: bituqueiraParede, tags: ["Aço Inox 430", "Fixação em Parede", "Resistente"], ideal: ["Áreas Externas", "Entradas", "Varandas"], additionalCategories: ["Acessórios de Entrada", "Linha Resorts"] },
  { id: 16, name: "Conjunto Coleta Seletiva Premium", category: "Linha Sustentável", description: "Conjunto completo de coleta seletiva em aço inox 430 com aros coloridos para identificação.", image: coletaSeletivaInox, tags: ["Aço Inox 430", "3 Coletores", "Sustentável", "Aros Coloridos"], ideal: ["Áreas Comuns", "Escritórios", "Lobbies", "Refeitórios"], additionalCategories: ["Utilitários de Lobby e Corredor"] },
];

const categories = ["all", "Lixeiras de Lobby", "Linha Resorts", "Acessórios de Entrada", "Utilitários de Lobby e Corredor", "Linha Móvel"];

const ProductGallery = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filter, setFilter] = useState("all");

  const filteredProducts = filter === "all"
    ? products
    : products.filter(p => p.category === filter || p.additionalCategories?.includes(filter));

  const whatsappMessage = (name: string) =>
    encodeURIComponent(`Olá! Gostaria de solicitar um orçamento para: ${name}. Vim através da Landing Page Premium.`);

  const handleNext = () => {
    if (!selectedProduct) return;
    const idx = products.findIndex(p => p.id === selectedProduct.id);
    setSelectedProduct(products[(idx + 1) % products.length]);
  };
  const handlePrev = () => {
    if (!selectedProduct) return;
    const idx = products.findIndex(p => p.id === selectedProduct.id);
    setSelectedProduct(products[(idx - 1 + products.length) % products.length]);
  };

  return (
    <section id="produtos" className="relative w-full bg-background px-4 py-24 z-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <Badge className="mb-4 bg-secondary text-muted-foreground border-border">
            Portfólio Premium
          </Badge>
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Soluções Completas em
            <span className="block text-gradient-gold mt-2">Aço Inox</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Cada produto é projetado para aliar sofisticação, durabilidade e funcionalidade.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12 flex flex-wrap justify-center gap-2"
        >
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(cat)}
              className={filter === cat ? "bg-accent text-accent-foreground hover:bg-accent/90 shadow-[0_2px_12px_hsl(195_85%_45%/0.25)]" : "border-border text-muted-foreground hover:bg-secondary hover:text-foreground hover:border-accent/30"}
            >
              {cat === "all" ? "Todos" : cat}
            </Button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
              >
                <div
                  className="group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-card/50 backdrop-blur-sm transition-all hover:border-accent/30 hover:shadow-[0_0_30px_hsl(195_85%_45%/0.1)]"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn className="mb-3 h-8 w-8 text-muted-foreground" />
                      <h3 className="mb-2 text-center text-lg font-semibold text-foreground px-4">
                        {product.name}
                      </h3>
                      <Badge className="bg-secondary text-muted-foreground border-border">{product.category}</Badge>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 backdrop-blur-md"
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[90vh] max-w-5xl w-full overflow-y-auto"
              >
                {/* Close */}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-0 -top-12 md:-right-12 text-muted-foreground hover:bg-secondary hover:text-foreground z-10"
                  onClick={() => setSelectedProduct(null)}
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Prev / Next */}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute left-2 md:-left-14 top-1/2 -translate-y-1/2 text-muted-foreground hover:bg-secondary hover:text-foreground"
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-2 md:-right-14 top-1/2 -translate-y-1/2 text-muted-foreground hover:bg-secondary hover:text-foreground"
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>

                <div className="grid gap-6 md:grid-cols-2 bg-card border border-border rounded-2xl p-6 md:p-8">
                  {/* Image */}
                  <motion.div
                    key={selectedProduct.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="aspect-square rounded-xl overflow-hidden bg-secondary"
                  >
                    <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                  </motion.div>

                  {/* Details */}
                  <div className="flex flex-col">
                    <Badge className="self-start mb-4 bg-accent/10 text-accent border-accent/20">
                      {selectedProduct.category}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-4">{selectedProduct.name}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{selectedProduct.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3">Características:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.tags.map(tag => (
                          <Badge key={tag} className="bg-secondary text-muted-foreground border-border">{tag}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3">Ideal Para:</h4>
                      <ul className="space-y-2">
                        {selectedProduct.ideal.map(place => (
                          <li key={place} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                            {place}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      size="lg"
                      className="mt-auto bg-accent hover:bg-accent/90 text-accent-foreground"
                      asChild
                    >
                      <a href={`https://wa.me/5511978791851?text=${whatsappMessage(selectedProduct.name)}`} target="_blank" rel="noopener noreferrer">
                        Solicitar Orçamento <ArrowRight className="ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProductGallery;
