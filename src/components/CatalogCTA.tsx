import { Button } from "@/components/ui/button";
import { ArrowRight, Package } from "lucide-react";

const CatalogCTA = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá! Vi que vocês têm mais de 300 modelos disponíveis e gostaria de conhecer mais opções para meu projeto."
  );
  const whatsappUrl = `https://wa.me/5511959105205?text=${whatsappMessage}`;

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-2xl border border-accent/20 bg-card/80 backdrop-blur-sm p-8 sm:p-12 text-center shadow-[0_0_40px_hsl(var(--accent)/0.1)]">
          {/* Icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 border border-accent/20">
            <Package className="h-8 w-8 text-accent" />
          </div>

          {/* Title */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Mais de{" "}
            <span className="text-accent font-medium">300 modelos</span>{" "}
            disponíveis
          </h2>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
            Nossa linha completa vai muito além do que você vê aqui. São centenas de modelos em diferentes tamanhos,
            acabamentos e funcionalidades para atender qualquer tipo de projeto.{" "}
            <span className="text-foreground/80 font-medium">
              Fale com nossa especialista e descubra a solução ideal para o seu espaço.
            </span>
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="group px-8 py-6 text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 bg-accent hover:bg-accent/90 text-accent-foreground shadow-[0_4px_20px_hsl(195_85%_45%/0.3)]"
            asChild
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Falar com Especialista
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
            </a>
          </Button>

          {/* Trust badge */}
          <p className="mt-6 text-xs text-muted-foreground/60">
            Atendimento personalizado • Orçamento sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};

export default CatalogCTA;