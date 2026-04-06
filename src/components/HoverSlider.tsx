import { createContext, useContext, useState, useCallback, forwardRef, type ReactNode } from "react";
import { motion, MotionConfig } from "framer-motion";

interface HoverSliderContextType {
  activeSlide: number;
  changeSlide: (index: number) => void;
}

const HoverSliderContext = createContext<HoverSliderContextType | undefined>(undefined);

export function useHoverSliderContext() {
  const context = useContext(HoverSliderContext);
  if (!context) throw new Error("useHoverSliderContext must be used within HoverSlider");
  return context;
}

function splitText(text: string) {
  return text.split("").map((char, i) => ({ char, index: i }));
}

interface HoverSliderProps {
  children: ReactNode;
  className?: string;
}

export const HoverSlider = forwardRef<HTMLDivElement, HoverSliderProps>(({ children, className, ...props }, ref) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const changeSlide = useCallback((index: number) => setActiveSlide(index), []);
  return (
    <HoverSliderContext.Provider value={{ activeSlide, changeSlide }}>
      <div className={className} ref={ref} {...props}>{children}</div>
    </HoverSliderContext.Provider>
  );
});
HoverSlider.displayName = "HoverSlider";

interface TextStaggerHoverProps {
  text: string;
  index: number;
  className?: string;
}

export const TextStaggerHover = ({ text, index, className }: TextStaggerHoverProps) => {
  const { activeSlide, changeSlide } = useHoverSliderContext();
  const characters = splitText(text);
  const isActive = activeSlide === index;

  return (
    <span
      className={`relative inline-block origin-bottom overflow-hidden cursor-pointer ${className || ""}`}
      onMouseEnter={() => changeSlide(index)}
    >
      {characters.map(({ char, index: i }) => (
        <span key={`${char}-${i}`} className="relative inline-block overflow-hidden">
          <MotionConfig transition={{ delay: i * 0.02, duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
            <motion.span
              className="inline-block"
              animate={isActive ? { y: "-110%", opacity: 0 } : { y: "0%", opacity: 0.4 }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
            <motion.span
              className="absolute left-0 top-0 inline-block text-foreground"
              animate={isActive ? { y: "0%" } : { y: "110%" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </MotionConfig>
        </span>
      ))}
    </span>
  );
};

const clipPathVariants = {
  visible: { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
  hidden: { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0px)" },
};

export const HoverSliderImageWrap = forwardRef<HTMLDivElement, { className?: string; children: ReactNode }>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={`grid overflow-hidden [&>*]:col-start-1 [&>*]:col-end-1 [&>*]:row-start-1 [&>*]:row-end-1 [&>*]:size-full ${className || ""}`}
      {...props}
    >
      {children}
    </div>
  )
);
HoverSliderImageWrap.displayName = "HoverSliderImageWrap";

interface HoverSliderImageProps {
  index: number;
  imageUrl: string;
  className?: string;
}

export const HoverSliderImage = ({ index, imageUrl, className }: HoverSliderImageProps) => {
  const { activeSlide } = useHoverSliderContext();
  return (
    <motion.img
      className={`inline-block align-middle ${className || ""}`}
      transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.8 }}
      variants={clipPathVariants}
      initial="hidden"
      animate={activeSlide === index ? "visible" : "hidden"}
      src={imageUrl}
      alt=""
    />
  );
};
