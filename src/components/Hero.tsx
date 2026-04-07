import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  HoverSlider,
  TextStaggerHover,
  HoverSliderImageWrap,
  HoverSliderImage,
} from "@/components/HoverSlider";

import ambientePiscina from "@/assets/ambiente-piscina.png";
import ambienteLobby from "@/assets/ambiente-lobby.png";
import ambienteVaranda from "@/assets/ambiente-varanda.png";
import ambienteBanheiro from "@/assets/ambiente-banheiro.png";

const slides = [
  { title: "ELEGÂNCIA EM INOX", image: ambienteBanheiro, backgroundPosition: "center 58%" },
  { title: "AMBIENTES PREMIUM", image: ambienteLobby, backgroundPosition: "center 48%" },
  { title: "DESIGN SOFISTICADO", image: ambienteVaranda, backgroundPosition: "center 72%" },
  { title: "ÁREAS EXTERNAS", image: ambientePiscina, backgroundPosition: "center 56%" },
];

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.12, 1.04]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-2%", "8%"]);

  const whatsappMessage = encodeURIComponent(
    "Olá! Vim através da Landing Page Premium e gostaria de solicitar um orçamento para meu hotel/condomínio/resort."
  );
  const whatsappUrl = `https://wa.me/5511959105205?text=${whatsappMessage}`;

  return (
    <motion.section
      ref={ref}
      className="relative z-0 h-[100svh] min-h-[640px] w-full overflow-hidden bg-background"
    >
      <HoverSlider className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            className="absolute inset-[-10%]"
            style={{ y: parallaxY, scale: backgroundScale }}
          >
            <HoverSliderImageWrap className="absolute inset-0 h-full w-full">
              {slides.map((slide, index) => (
                <HoverSliderImage
                  key={`background-${index}`}
                  index={index}
                  imageUrl={slide.image}
                  className="h-full w-full object-cover blur-xl brightness-[0.42] saturate-75"
                  style={{ objectPosition: slide.backgroundPosition }}
                />
              ))}
            </HoverSliderImageWrap>
          </motion.div>

          <div className="absolute inset-0">
            <HoverSliderImageWrap className="absolute inset-0 h-full w-full">
              {slides.map((slide, index) => (
                <HoverSliderImage
                  key={`foreground-${index}`}
                  index={index}
                  imageUrl={slide.image}
                  className="h-full w-full object-contain px-4 py-20 sm:px-8 md:px-12 md:py-16 lg:px-20 lg:py-12"
                  style={{ objectPosition: "center center" }}
                />
              ))}
            </HoverSliderImageWrap>
          </div>
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/30 via-background/18 to-background/42 pointer-events-none" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-background/55 via-background/18 to-background/40 pointer-events-none" />

        <div className="relative z-20 flex w-full flex-col items-center justify-center gap-3 px-4 pt-16 pb-24 text-center sm:px-6 md:gap-4 md:px-8 md:pt-20 md:pb-28">
          {slides.map((slide, index) => (
            <TextStaggerHover
              key={index}
              index={index}
              text={slide.title}
              className="text-[clamp(2.7rem,7vw,7rem)] leading-[0.88] font-black uppercase tracking-[-0.05em]"
            />
          ))}

          <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row md:mt-8">
            <Button
              size="lg"
              className="group px-6 py-5 text-sm font-semibold transition-all duration-300 hover:scale-105 sm:px-8 sm:py-6 sm:text-base bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-pill px-6 py-5 text-sm font-semibold text-foreground hover:text-foreground sm:px-8 sm:py-6 sm:text-base"
              asChild
            >
              <a href="#produtos" className="flex items-center">Ver Produtos</a>
            </Button>
          </div>
        </div>
      </HoverSlider>

      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center text-muted-foreground animate-bounce">
        <span className="mb-2 text-xs font-semibold uppercase tracking-widest">Scroll Down</span>
        <ChevronDown className="h-5 w-5" />
      </div>
    </motion.section>
  );
};

export default Hero;
