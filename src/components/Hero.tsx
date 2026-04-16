import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import logoWinnet from "@/assets/logo-winnet.png";

import heroPiscina from "@/assets/hero-piscina.png";
import heroLobby from "@/assets/hero-lobby.png";
import heroVaranda from "@/assets/hero-varanda.png";
import heroBanheiro from "@/assets/hero-banheiro.png";

declare const gsap: any;
declare const THREE: any;

const slides = [
  { title: "Elegância em Inox", description: "Soluções premium em aço inox para ambientes que exigem sofisticação e durabilidade.", media: heroBanheiro },
  { title: "Ambientes Premium", description: "Design funcional que transforma espaços corporativos e hoteleiros.", media: heroLobby },
  { title: "Design Sofisticado", description: "Cada detalhe pensado para valorizar a arquitetura do seu projeto.", media: heroVaranda },
  { title: "Áreas Externas", description: "Resistência e beleza para piscinas, varandas e áreas de lazer.", media: heroPiscina },
];

const vertexShader = `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;

const fragmentShader = `
  uniform sampler2D uTexture1, uTexture2;
  uniform float uProgress;
  uniform vec2 uResolution, uTexture1Size, uTexture2Size;
  uniform vec2 uOffset1, uOffset2;
  varying vec2 vUv;

  vec2 getCoverUV(vec2 uv, vec2 textureSize, vec2 uvOffset) {
    vec2 s = uResolution / textureSize;
    float scale = max(s.x, s.y);
    vec2 scaledSize = textureSize * scale;
    vec2 offset = (uResolution - scaledSize) * 0.5;
    return (uv * uResolution - offset) / scaledSize + uvOffset;
  }

  void main() {
    vec2 uv1 = getCoverUV(vUv, uTexture1Size, uOffset1);
    vec2 uv2 = getCoverUV(vUv, uTexture2Size, uOffset2);
    float maxR = length(uResolution) * 0.85;
    float br = uProgress * maxR;
    vec2 p = vUv * uResolution;
    vec2 c = uResolution * 0.5;
    float d = length(p - c);
    float nd = d / max(br, 0.001);
    float param = smoothstep(br + 3.0, br - 3.0, d);

    vec4 img;
    if (param > 0.0) {
      float ro = 0.08 * pow(smoothstep(0.3, 1.0, nd), 1.5);
      vec2 dir = (d > 0.0) ? (p - c) / d : vec2(0.0);
      vec2 distUV = uv2 - dir * ro;
      float ca = 0.02 * pow(smoothstep(0.3, 1.0, nd), 1.2);
      img = vec4(
        texture2D(uTexture2, distUV + dir * ca * 1.2).r,
        texture2D(uTexture2, distUV + dir * ca * 0.2).g,
        texture2D(uTexture2, distUV - dir * ca * 0.8).b,
        1.0
      );
      float rim = smoothstep(0.95, 1.0, nd) * (1.0 - smoothstep(1.0, 1.01, nd));
      img.rgb += rim * 0.08;
    } else { img = texture2D(uTexture2, uv2); }

    vec4 oldImg = texture2D(uTexture1, uv1);
    if (uProgress > 0.95) img = mix(img, texture2D(uTexture2, uv2), (uProgress - 0.95) / 0.05);
    gl_FragColor = mix(oldImg, img, param);
  }
`;

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const whatsappMessage = encodeURIComponent(
    "Olá! Vim através da Landing Page Premium e gostaria de solicitar um orçamento para meu hotel/condomínio/resort."
  );
  const whatsappUrl = `https://wa.me/5511978791851?text=${whatsappMessage}`;

  useEffect(() => {
    let renderer: any, scene: any, camera: any, shaderMaterial: any;
    let slideTextures: any[] = [];
    let currentSlideIndex = 0;
    let isTransitioning = false;
    let texturesLoaded = false;
    let sliderEnabled = false;
    let autoSlideTimer: any = null;
    let progressAnimation: any = null;
    let animFrameId: number;
    let destroyed = false;

    const isMobile = () => window.innerWidth < 768;
    // Per-slide horizontal UV offsets for mobile [x, y]
    const mobileOffsets: [number, number][] = [
      [0, 0],      // Elegância em Inox (banheiro) - ok
      [0.15, 0],   // Ambientes Premium (lobby) - shift right to show lixeira inteira
      [0.15, 0],   // Design Sofisticado (varanda) - shift right to show lixeira inteira
      [0, 0],      // Áreas Externas (piscina) - ok
    ];

    const SLIDE_DURATION = 5000;
    const PROGRESS_INTERVAL = 50;
    const TRANSITION_DURATION = 2.5;

    const loadScript = (src: string, globalName: string): Promise<void> =>
      new Promise((res, rej) => {
        if ((window as any)[globalName]) { res(); return; }
        if (document.querySelector(`script[src="${src}"]`)) {
          const check = setInterval(() => {
            if ((window as any)[globalName]) { clearInterval(check); res(); }
          }, 50);
          setTimeout(() => { clearInterval(check); rej(new Error(`Timeout: ${globalName}`)); }, 10000);
          return;
        }
        const s = document.createElement("script");
        s.src = src;
        s.onload = () => setTimeout(() => res(), 100);
        s.onerror = () => rej(new Error(`Failed: ${src}`));
        document.head.appendChild(s);
      });

    const splitText = (text: string) =>
      text.split("").map((c) => `<span style="display:inline-block">${c === " " ? "&nbsp;" : c}</span>`).join("");

    const stopTimer = () => {
      if (progressAnimation) clearInterval(progressAnimation);
      if (autoSlideTimer) clearTimeout(autoSlideTimer);
      progressAnimation = null;
      autoSlideTimer = null;
    };

    const quickResetProgress = (idx: number) => {
      const el = containerRef.current?.querySelectorAll(".slider-nav-item")[idx]?.querySelector(".slider-progress-fill") as HTMLElement;
      if (el) { el.style.transition = "width 0.2s"; el.style.width = "0%"; setTimeout(() => (el.style.transition = "width 0.1s, opacity 0.3s"), 200); }
    };

    const updateSlideProgress = (idx: number, prog: number) => {
      const el = containerRef.current?.querySelectorAll(".slider-nav-item")[idx]?.querySelector(".slider-progress-fill") as HTMLElement;
      if (el) { el.style.width = `${prog}%`; el.style.opacity = "1"; }
    };

    const fadeSlideProgress = (idx: number) => {
      const el = containerRef.current?.querySelectorAll(".slider-nav-item")[idx]?.querySelector(".slider-progress-fill") as HTMLElement;
      if (el) { el.style.opacity = "0"; setTimeout(() => (el.style.width = "0%"), 300); }
    };

    const updateNavState = (idx: number) => {
      containerRef.current?.querySelectorAll(".slider-nav-item").forEach((el, i) => el.classList.toggle("active", i === idx));
    };

    const updateCounter = (idx: number) => {
      const sn = containerRef.current?.querySelector("#slideNumber");
      if (sn) sn.textContent = String(idx + 1).padStart(2, "0");
    };

    const startTimer = () => {
      if (!texturesLoaded || !sliderEnabled || destroyed) return;
      stopTimer();
      let progress = 0;
      const inc = (100 / SLIDE_DURATION) * PROGRESS_INTERVAL;
      progressAnimation = setInterval(() => {
        if (!sliderEnabled || destroyed) { stopTimer(); return; }
        progress += inc;
        updateSlideProgress(currentSlideIndex, progress);
        if (progress >= 100) {
          clearInterval(progressAnimation);
          progressAnimation = null;
          fadeSlideProgress(currentSlideIndex);
          if (!isTransitioning) handleSlideChange();
        }
      }, PROGRESS_INTERVAL);
    };

    const safeStartTimer = (delay = 0) => {
      stopTimer();
      if (sliderEnabled && texturesLoaded && !destroyed) {
        if (delay > 0) autoSlideTimer = setTimeout(startTimer, delay);
        else startTimer();
      }
    };

    const updateContent = (idx: number) => {
      const titleEl = containerRef.current?.querySelector("#mainTitle") as HTMLElement;
      const descEl = containerRef.current?.querySelector("#mainDesc") as HTMLElement;
      if (!titleEl || !descEl) return;

      gsap.to(titleEl.children, { y: -20, opacity: 0, duration: 0.5, stagger: 0.02, ease: "power2.in" });
      gsap.to(descEl, { y: -10, opacity: 0, duration: 0.4, ease: "power2.in" });

      setTimeout(() => {
        if (destroyed) return;
        titleEl.innerHTML = splitText(slides[idx].title);
        descEl.textContent = slides[idx].description;
        gsap.set(titleEl.children, { opacity: 0 });
        gsap.set(descEl, { y: 20, opacity: 0 });

        const children = titleEl.children;
        switch (idx % 4) {
          case 0:
            gsap.set(children, { y: 20 });
            gsap.to(children, { y: 0, opacity: 1, duration: 0.8, stagger: 0.03, ease: "power3.out" });
            break;
          case 1:
            gsap.set(children, { y: -20 });
            gsap.to(children, { y: 0, opacity: 1, duration: 0.8, stagger: 0.03, ease: "back.out(1.7)" });
            break;
          case 2:
            gsap.set(children, { filter: "blur(10px)", scale: 1.5, y: 0 });
            gsap.to(children, { filter: "blur(0px)", scale: 1, opacity: 1, duration: 1, stagger: { amount: 0.5, from: "random" }, ease: "power2.out" });
            break;
          case 3:
            gsap.set(children, { scale: 0, y: 0 });
            gsap.to(children, { scale: 1, opacity: 1, duration: 0.6, stagger: 0.05, ease: "back.out(1.5)" });
            break;
        }
        gsap.to(descEl, { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power3.out" });
      }, 500);
    };

    const navigateToSlide = (targetIndex: number) => {
      if (isTransitioning || targetIndex === currentSlideIndex || !shaderMaterial) return;
      stopTimer();
      quickResetProgress(currentSlideIndex);

      const curTex = slideTextures[currentSlideIndex];
      const tarTex = slideTextures[targetIndex];
      if (!curTex || !tarTex) return;

      isTransitioning = true;
      const mobile = isMobile();
      const curOffset = mobile ? mobileOffsets[currentSlideIndex] : [0, 0];
      const tarOffset = mobile ? mobileOffsets[targetIndex] : [0, 0];
      shaderMaterial.uniforms.uTexture1.value = curTex;
      shaderMaterial.uniforms.uTexture2.value = tarTex;
      shaderMaterial.uniforms.uTexture1Size.value = curTex.userData.size;
      shaderMaterial.uniforms.uTexture2Size.value = tarTex.userData.size;
      shaderMaterial.uniforms.uOffset1.value.set(curOffset[0], curOffset[1]);
      shaderMaterial.uniforms.uOffset2.value.set(tarOffset[0], tarOffset[1]);

      updateContent(targetIndex);
      currentSlideIndex = targetIndex;
      updateCounter(currentSlideIndex);
      updateNavState(currentSlideIndex);

      gsap.fromTo(
        shaderMaterial.uniforms.uProgress,
        { value: 0 },
        {
          value: 1,
          duration: TRANSITION_DURATION,
          ease: "power2.inOut",
          onComplete: () => {
            if (destroyed) return;
            shaderMaterial.uniforms.uProgress.value = 0;
            shaderMaterial.uniforms.uTexture1.value = tarTex;
            shaderMaterial.uniforms.uTexture1Size.value = tarTex.userData.size;
            shaderMaterial.uniforms.uOffset1.value.copy(shaderMaterial.uniforms.uOffset2.value);
            isTransitioning = false;
            safeStartTimer(100);
          },
        }
      );
    };

    const handleSlideChange = () => {
      if (isTransitioning || !texturesLoaded || !sliderEnabled || destroyed) return;
      navigateToSlide((currentSlideIndex + 1) % slides.length);
    };

    const loadImageTexture = (src: string): Promise<any> =>
      new Promise((resolve, reject) => {
        const l = new THREE.TextureLoader();
        l.load(
          src,
          (t: any) => {
            t.minFilter = t.magFilter = THREE.LinearFilter;
            t.userData = { size: new THREE.Vector2(t.image.width, t.image.height) };
            resolve(t);
          },
          undefined,
          reject
        );
      });

    const init = async () => {
      try {
        await Promise.all([
          loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js", "gsap"),
          loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js", "THREE"),
        ]);
      } catch (e) {
        console.error("Script load error:", e);
        return;
      }

      if (destroyed) return;

      const canvas = containerRef.current?.querySelector(".webgl-canvas") as HTMLCanvasElement;
      if (!canvas) return;

      scene = new THREE.Scene();
      camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      shaderMaterial = new THREE.ShaderMaterial({
        uniforms: {
          uTexture1: { value: null },
          uTexture2: { value: null },
          uProgress: { value: 0 },
          uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
          uTexture1Size: { value: new THREE.Vector2(1, 1) },
          uTexture2Size: { value: new THREE.Vector2(1, 1) },
          uOffset1: { value: new THREE.Vector2(0, 0) },
          uOffset2: { value: new THREE.Vector2(0, 0) },
        },
        vertexShader,
        fragmentShader,
      });

      scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), shaderMaterial));

      const textureResults = await Promise.allSettled(
        slides.map(s => loadImageTexture(s.media))
      );
      slideTextures = textureResults
        .filter((r): r is PromiseFulfilledResult<any> => r.status === "fulfilled")
        .map(r => r.value);

      if (destroyed) return;

      if (slideTextures.length >= 2) {
        shaderMaterial.uniforms.uTexture1.value = slideTextures[0];
        shaderMaterial.uniforms.uTexture2.value = slideTextures[1];
        shaderMaterial.uniforms.uTexture1Size.value = slideTextures[0].userData.size;
        shaderMaterial.uniforms.uTexture2Size.value = slideTextures[1].userData.size;
        const mobile = isMobile();
        const initOffset = mobile ? mobileOffsets[0] : [0, 0];
        shaderMaterial.uniforms.uOffset1.value.set(initOffset[0], initOffset[1]);
        shaderMaterial.uniforms.uOffset2.value.set(initOffset[0], initOffset[1]);
        texturesLoaded = true;
        sliderEnabled = true;
        setIsLoaded(true);

        const wrapper = containerRef.current?.querySelector(".slider-wrapper");
        wrapper?.classList.add("loaded");

        safeStartTimer(500);
      }

      const tEl = containerRef.current?.querySelector("#mainTitle") as HTMLElement;
      const dEl = containerRef.current?.querySelector("#mainDesc") as HTMLElement;
      if (tEl && dEl) {
        tEl.innerHTML = splitText(slides[0].title);
        dEl.textContent = slides[0].description;
        gsap.fromTo(tEl.children, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.03, ease: "power3.out", delay: 0.3 });
        gsap.fromTo(dEl, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.6 });
      }

      const render = () => {
        if (destroyed) return;
        animFrameId = requestAnimationFrame(render);
        renderer.render(scene, camera);
      };
      render();

      containerRef.current?.querySelectorAll(".slider-nav-item").forEach((el, i) => {
        el.addEventListener("click", () => {
          if (!isTransitioning && i !== currentSlideIndex) navigateToSlide(i);
        });
      });

      const onResize = () => {
        if (renderer && shaderMaterial) {
          renderer.setSize(window.innerWidth, window.innerHeight);
          shaderMaterial.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
        }
      };
      window.addEventListener("resize", onResize);

      const onVisChange = () => {
        if (document.hidden) stopTimer();
        else if (!isTransitioning) safeStartTimer();
      };
      document.addEventListener("visibilitychange", onVisChange);

      cleanupRef.current = () => {
        destroyed = true;
        stopTimer();
        cancelAnimationFrame(animFrameId);
        window.removeEventListener("resize", onResize);
        document.removeEventListener("visibilitychange", onVisChange);
        if (renderer) renderer.dispose();
        slideTextures.forEach((t) => t?.dispose?.());
      };
    };

    init();

    return () => {
      cleanupRef.current?.();
    };
  }, []);

  return (
    <section className="relative z-0 h-[100svh] w-full overflow-hidden bg-background">
      <div ref={containerRef} className="relative h-full w-full">
        {/* Fallback image shown instantly while WebGL loads */}
        <div
          className={`absolute inset-0 z-[1] transition-opacity duration-700 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          style={{ backgroundImage: `url(${heroBanheiro})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />

        {/* WebGL slider */}
        <div className="slider-wrapper absolute inset-0">
          <canvas className="webgl-canvas absolute inset-0 h-full w-full" />

          {/* Logo */}
          <div className="absolute top-6 left-6 z-30 sm:top-8 sm:left-8">
            <img src={logoWinnet} alt="Winnet Metais" className="h-10 sm:h-12 w-auto drop-shadow-lg" />
          </div>

          {/* Counter */}
          <div className="absolute top-6 right-6 z-30 flex items-baseline gap-1 font-mono text-xs tracking-widest text-foreground/60 sm:top-8 sm:right-8">
            <span id="slideNumber" className="text-lg font-light text-foreground">01</span>
            <span>/</span>
            <span id="slideTotal">{String(slides.length).padStart(2, "0")}</span>
          </div>

          {/* Navigation */}
          <div id="slidesNav" className="absolute bottom-28 left-1/2 z-30 flex -translate-x-1/2 gap-3 sm:bottom-32 sm:gap-4">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`slider-nav-item group flex cursor-pointer flex-col items-center gap-2 ${i === 0 ? "active" : ""}`}
              >
                <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-foreground/40 transition-colors group-[.active]:text-foreground/90 sm:text-xs">
                  {slide.title}
                </span>
                <div className="h-[2px] w-10 overflow-hidden rounded-full bg-foreground/10 sm:w-14">
                  <div className="slider-progress-fill h-full w-0 rounded-full bg-accent transition-[width_0.1s,opacity_0.3s]" />
                </div>
              </div>
            ))}
          </div>

          {/* Content overlay */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30" />

            <div className="relative flex flex-col items-center gap-4 px-4 text-center sm:gap-6">
              <h1
                id="mainTitle"
                className="font-display text-[clamp(2.8rem,8vw,7.5rem)] font-light leading-[0.92] tracking-[-0.03em] text-foreground"
                style={{ fontFamily: "var(--font-display, 'Inter', sans-serif)" }}
              />
              <p
                id="mainDesc"
                className="max-w-md text-sm leading-relaxed text-foreground/60 sm:max-w-lg sm:text-base"
              />

              <div className="mt-4 flex flex-col items-center gap-3 pointer-events-auto sm:flex-row sm:mt-6">
                <Button
                  size="lg"
                  className="group px-6 py-5 text-sm font-semibold transition-all duration-300 hover:scale-105 sm:px-8 sm:py-6 sm:text-base bg-accent hover:bg-accent/90 text-accent-foreground shadow-[0_4px_20px_hsl(195_85%_45%/0.3)]"
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
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center text-accent/70 animate-bounce">
          <span className="mb-2 text-xs font-semibold uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
