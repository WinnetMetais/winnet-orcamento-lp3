import { Shield, Zap, Sparkles, Award, Wrench, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Aço Inox de Alta Qualidade",
    description: "Utilizamos exclusivamente aço inox 304 e 316, garantindo máxima resistência à corrosão e durabilidade superior."
  },
  {
    icon: Sparkles,
    title: "Design Sofisticado",
    description: "Produtos com acabamento premium que agregam elegância e modernidade aos ambientes mais exigentes."
  },
  {
    icon: Zap,
    title: "Entrega Rápida",
    description: "Logística eficiente com prazos reduzidos. Atendemos todo o território nacional com agilidade."
  },
  {
    icon: Award,
    title: "Garantia Estendida",
    description: "Confiança comprovada com garantia estendida. Mais de 15 anos atendendo os clientes mais exigentes do mercado."
  },
  {
    icon: Wrench,
    title: "Personalização Completa",
    description: "Desenvolvemos projetos sob medida com dimensões, acabamentos e funcionalidades customizadas."
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Produtos 100% recicláveis que contribuem para a certificação ambiental do seu empreendimento."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Por que Escolher a
            <span className="block text-gradient-gold mt-2">Winnet Metais?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Excelência em cada detalhe, do projeto à entrega. Soluções que elevam o padrão do seu negócio.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
