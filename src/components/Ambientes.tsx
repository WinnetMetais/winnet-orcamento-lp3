import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import ambientePiscina from "@/assets/ambiente-piscina.png";
import ambienteLobby from "@/assets/ambiente-lobby.png";
import ambienteVaranda from "@/assets/ambiente-varanda.png";
import ambienteBanheiro from "@/assets/ambiente-banheiro.png";
import ambienteHall from "@/assets/ambiente-hall.png";

const ambientes = [
  { title: "Banheiros Premium", image: ambienteBanheiro },
  { title: "Lobbies & Recepções", image: ambienteLobby },
  { title: "Varandas & Terraços", image: ambienteVaranda },
  { title: "Piscinas & Áreas Externas", image: ambientePiscina },
  { title: "Halls & Corredores", image: ambienteHall },
];

const Ambientes = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [3, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ scale, rotate }}
      className="relative min-h-screen bg-gradient-to-t from-background to-card text-foreground flex flex-col justify-center py-20 z-10"
    >
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <article className="container mx-auto px-4 md:px-12 relative z-10 w-full">
        <h2 className="text-3xl sm:text-4xl md:text-6xl leading-tight py-10 font-semibold tracking-tight text-center md:text-left mb-8">
          Ambientes que Inspiram
          <br />
          <span className="text-muted-foreground">Sofisticação em cada detalhe.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 h-auto md:h-[60vh]">
          {ambientes.map((amb, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl h-80 md:h-full cursor-pointer border border-border"
            >
              <img
                src={amb.image}
                alt={amb.title}
                className="object-contain md:object-cover object-center md:object-bottom w-full h-full bg-secondary transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-foreground font-semibold text-lg md:text-xl uppercase tracking-wider">
                  {amb.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </motion.section>
  );
};

export default Ambientes;
