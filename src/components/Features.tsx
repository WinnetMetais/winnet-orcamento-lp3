import { Shield, Zap, Sparkles, Award, Wrench, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "Aço Inox de Alta Qualidade",
    description: "Aço inox 430 e 304 em projetos específicos, garantindo máxima resistência à corrosão e durabilidade superior."
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
    description: "Confiança comprovada com garantia estendida. Mais de 2 anos atendendo os clientes mais exigentes do mercado."
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
    <section className="py-20 bg-background relative z-10">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold">
            Por que Escolher a
            <span className="block text-gradient-gold mt-2">Winnet Metais?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Excelência em cada detalhe, do projeto à entrega.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 hover:border-muted-foreground/30 hover:shadow-[0_0_30px_hsl(0_0%_100%/0.03)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary group-hover:bg-accent/20 transition-all duration-300">
                  <Icon className="w-7 h-7 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="mb-3 text-xl font-bold group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
