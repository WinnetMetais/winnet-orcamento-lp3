

# Substituir imagens da Hero por novas imagens portrait

## Contexto
As 5 novas imagens enviadas estao em formato portrait (vertical), ideal para fullscreen sem distorcao. Substituiremos as 4 imagens atuais da Hero por 4 dessas 5 novas, que mostram lixeiras inox em ambientes premium.

## Mudancas

### 1. Copiar as novas imagens para `src/assets/`
- `Gemini_Generated_Image_uhk4ze...` (varanda com vista mar) -> `ambiente-varanda.png`
- `Gemini_Generated_Image_3urglo...` (banheiro com lixeira na bancada) -> `ambiente-banheiro.png`
- `Gemini_Generated_Image_bowe04...` (area externa com lixeira basculante) -> `ambiente-piscina.png`
- `Gemini_Generated_Image_s5qkkx...` (lounge noturno com lareira) -> `ambiente-lobby.png`
- `Gemini_Generated_Image_se5h09...` (hall com lixeira pedal) -> salvar como `ambiente-hall.png` (quinta imagem extra para Ambientes)

### 2. Ajustar `src/components/Hero.tsx`
- Atualizar `object-position` para `object-center` pois as novas imagens portrait enquadram o produto naturalmente no centro
- Remover o oversizing de `inset-[-20%]` / `140%` que era necessario para imagens panoramicas -- usar `inset-0` com `100%` pois portrait preenche a tela vertical sem gaps
- Manter parallax com margem minima (`inset-[-10%]` / `120%`) para o efeito de scroll sem bordas

### 3. Atualizar slides array
Manter os 4 slides com titulos atuais, apenas apontando para as novas imagens substituidas.

## Detalhes tecnicos
- Formato portrait das novas imagens = aspect ratio ~9:16, compativel com `100vh` fullscreen
- `object-cover` + `object-center` garante enquadramento centralizado nos produtos
- Parallax mantido com `useTransform` existente

