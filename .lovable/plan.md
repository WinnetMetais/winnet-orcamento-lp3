

# Redesign Completo do Site Winnet Metais

## Resumo
Restilizar o site integrando os componentes interativos do HTML de referencia (hover slider, galeria com lightbox, galeria circular 3D, footer cinematico) e adicionar as 4 imagens uploaded como fotos ambientais na Hero e em seções de contexto.

## Dependencias Necessarias
Instalar `framer-motion` e `gsap` no projeto (atualmente nao estao no package.json).

## Estrutura das Mudancas

### 1. Copiar as 4 imagens para `src/assets/`
- `ambiente-piscina.png` (area de piscina com lixeira inox)
- `ambiente-lobby.png` (lobby com lixeira inox)
- `ambiente-varanda.png` (varanda com lixeira inox)
- `ambiente-banheiro.png` (banheiro com lixeira inox)

### 2. Redesign do Hero (`src/components/Hero.tsx`)
- Transformar em hero fullscreen estilo Section1 do HTML de referencia
- Implementar **HoverSlider** com as 4 imagens ambientais como backgrounds
- Textos grandes com animacao stagger por letras (framer-motion)
- Overlay escuro com botao "Scroll Down" animado
- Manter os CTAs de WhatsApp sobrepostos
- Background escuro (#06060e) no estilo premium dark

### 3. Nova Seção de Ambientes (`src/components/Ambientes.tsx`)
- Estilo Section2: grid de 4 colunas com as imagens ambientais
- Hover reveal com titulo de cada ambiente (Banheiro, Piscina, Lobby, Varanda)
- Efeito parallax com scale/rotate via framer-motion useScroll

### 4. Redesign do ProductGallery (`src/components/ProductGallery.tsx`)
- Estilo Section3: galeria com filtro por tabs + lightbox modal
- Manter os produtos e categorias existentes
- Adicionar animacoes AnimatePresence ao filtrar
- Lightbox com navegacao prev/next e overlay blur
- Cards com hover zoom + overlay de info

### 5. Redesign do Features (`src/components/Features.tsx`)
- Cards com fundo escuro (bg-neutral-900/50, border-neutral-800)
- Hover com brilho sutil e elevacao
- Adaptar ao tema dark

### 6. Redesign do CTA (`src/components/CTA.tsx`)
- Fundo dark com gradiente radial sutil
- Texto grande com efeito glow
- Botoes estilo glass-pill com efeito magnetico (GSAP)

### 7. Redesign do Footer (`src/components/Footer.tsx`)
- Estilo "Cinematic Footer" do HTML de referencia
- Texto gigante de fundo com gradiente transparente
- Links com efeito magnetico hover
- Grid pattern background com mask

### 8. Atualizar Design System (`src/index.css`)
- Mudar cores base para tema dark: background `#06060e`, foreground branco
- Atualizar variaveis CSS (card, muted, border) para tons escuros
- Adicionar novas animacoes (breathe, marquee, heartbeat)
- Scrollbar customizada escura
- Grid pattern e aurora effects

### 9. Atualizar `src/pages/Index.tsx`
- Adicionar nova seção Ambientes entre Hero e Features
- Manter ordem: Hero > Ambientes > Features > ProductGallery > CTA > Footer > WhatsApp

## Detalhes Tecnicos
- **framer-motion**: usado para AnimatePresence, motion components, useScroll, useTransform, stagger animations
- **gsap + ScrollTrigger**: usado para parallax scroll, efeito magnetico nos botoes, animacoes do footer
- Todas as animacoes respeitam `prefers-reduced-motion`
- Responsividade mobile mantida em todas as seções
- As imagens ambientais serao importadas via ES modules de `src/assets/`
- Os produtos existentes e dados do ProductGallery sao mantidos integralmente

