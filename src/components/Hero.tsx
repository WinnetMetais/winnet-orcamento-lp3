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
  { title: "ELEGÂNCIA EM INOX", image: ambienteBanheiro },
  { title: "AMBIENTES PREMIUM", image: ambienteLobby },
  { title: "DESIGN SOFISTICADO", image: ambienteVaranda },
  { title: "ÁREAS EXTERNAS", image: ambientePiscina },
];

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [0, -3]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const whatsappMessage = encodeURIComponent(
    "Olá! Vim através da Landing Page Premium e gostaria de solicitar um orçamento para meu hotel/condomínio/resort."
  );
  const whatsappUrl = `https://wa.me/5511959105205?text=${whatsappMessage}`;

  return (
    <motion.section
      ref={ref}
      style={{ scale, rotate }}
      className="sticky top-0 h-screen w-full flex flex-col items-center justify-center bg-background overflow-hidden z-0"
    >
      <HoverSlider className="relative w-full h-full flex items-center justify-center">
        {/* Background Images */}
        <motion.div
          className="absolute inset-0 z-0 w-full h-full"
          style={{ y: parallaxY }}
        >
          <HoverSliderImageWrap className="absolute inset-[-10%] w-[120%] h-[120%]">
            {slides.map((slide, index) => (
              <HoverSliderImage
                key={index}
                index={index}
                imageUrl={slide.image}
                className="object-cover object-center w-full h-full"
              />
            ))}
          </HoverSliderImageWrap>
        </motion.div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-background/50 z-10 pointer-events-none" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center gap-4 md:gap-6 w-full px-4">
          {slides.map((slide, index) => (
            <TextStaggerHover
              key={index}
              index={index}
              text={slide.title}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter uppercase"
            />
          ))}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-6 md:mt-10">
            <Button
              size="lg"
              className="group px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold glass-pill text-foreground hover:text-foreground"
              asChild
            >
              <a href="#produtos" className="flex items-center">Ver Produtos</a>
            </Button>
          </div>
        </div>
      </HoverSlider>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center text-muted-foreground animate-bounce">
        <span className="text-xs tracking-widest uppercase mb-2 font-semibold">Scroll Down</span>
        <ChevronDown className="w-5 h-5" />
      </div>
    </motion.section>
  );
};

export default Hero;
