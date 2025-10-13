# 🖼️ Guia de Edição de Imagens - Landing Page Winnet

## 📁 Localização das Imagens

Todas as imagens dos produtos estão localizadas em:
```
src/assets/
```

### Imagens Atuais:

1. `lixeira-hotel-lobby.png` - Lixeira Cilíndrica Premium
2. `lixeira-hotel-corredor.png` - Coletor Cilíndrico Corporativo
3. `lixeira-clinica-hospital.png` - Lixeira Hospitalar com Pedal
4. `placa-piso-molhado.png` - Cavalete de Sinalização
5. `guarda-chuva-inox.png` - Porta Guarda-Chuvas Premium
6. `bituqueira-externa.png` - Bituqueira para Áreas Externas
7. `lixeira-hospital-rodizio.png` - Coletor Hospitalar com Rodízios
8. `lixeira-cozinha.png` - Lixeira de Pedal para Cozinhas
9. `lixeira-elevador.png` - Lixeira Basculante Quadrada
10. `lixeira-recepcao.png` - Lixeira Premium para Recepção

---

## 🔄 Como Substituir uma Imagem

### Método 1: Substituição Direta (Recomendado)

1. **Prepare sua nova imagem:**
   - Formato: PNG ou JPG
   - Tamanho recomendado: 800x800px a 1200x1200px
   - Fundo: Preferencialmente transparente (PNG) ou ambiente real
   - Nome: Mantenha o mesmo nome do arquivo original

2. **Substitua o arquivo:**
   - Navegue até `src/assets/`
   - Substitua o arquivo antigo pelo novo com o **mesmo nome**
   - Exemplo: Substitua `lixeira-hotel-lobby.png` por sua nova imagem chamada `lixeira-hotel-lobby.png`

3. **Resultado:**
   - A imagem será atualizada automaticamente em toda a landing page
   - Não é necessário modificar código

---

### Método 2: Adicionar Nova Imagem

Se você quiser adicionar uma nova imagem com um nome diferente:

1. **Adicione a imagem:**
   - Coloque o arquivo em `src/assets/`
   - Exemplo: `nova-lixeira-premium.png`

2. **Atualize o código:**

Abra `src/components/ProductGallery.tsx` e adicione a importação:

```typescript
// No topo do arquivo, adicione:
import novaLixeiraPremium from "@/assets/nova-lixeira-premium.png";
```

3. **Use a nova imagem no array de produtos:**

```typescript
{
  id: 11,
  name: "Nova Lixeira Premium",
  category: "Nova Categoria",
  description: "Descrição da nova lixeira...",
  image: novaLixeiraPremium, // Use a variável importada
  tags: ["Tag1", "Tag2", "Tag3"],
  ideal: ["Local 1", "Local 2"]
}
```

---

## 🎨 Especificações Técnicas de Imagens

### Tamanhos Recomendados:

| Uso | Dimensões | Formato | Peso Máximo |
|-----|-----------|---------|-------------|
| Produtos da Galeria | 1000x1000px | PNG/JPG | 500KB |
| Hero Background | 1920x1080px | JPG | 800KB |
| Ícones/Logos | 500x500px | PNG | 100KB |

### Qualidade:

- **Resolução:** Mínimo 72 DPI (web), ideal 150 DPI
- **Compressão:** Otimize para web (use ferramentas como TinyPNG)
- **Formato:**
  - PNG: Para imagens com transparência ou texto
  - JPG: Para fotos de produtos em ambientes reais
  - WEBP: Para melhor performance (converter com ferramentas online)

---

## 🛠️ Ferramentas Recomendadas

### Para Edição:
- **Photoshop/GIMP:** Edição profissional
- **Canva:** Edição simples e rápida
- **Photopea:** Editor online gratuito (semelhante ao Photoshop)

### Para Otimização:
- **TinyPNG:** https://tinypng.com/ (compressão PNG/JPG)
- **Squoosh:** https://squoosh.app/ (compressão e conversão)
- **ImageOptim:** (Mac) ou FileOptimizer (Windows)

### Para Remover Fundo:
- **Remove.bg:** https://www.remove.bg/ (automático e gratuito)
- **PhotoScissors:** Remoção manual de fundo
- **Canva:** Ferramenta integrada de remoção de fundo

---

## 📝 Como Editar Informações dos Produtos

As informações dos produtos estão em `src/components/ProductGallery.tsx`

### Estrutura de um Produto:

```typescript
{
  id: 1, // ID único (número sequencial)
  name: "Nome do Produto", // Nome exibido
  category: "Categoria do Produto", // Ex: "Lixeiras de Lobby"
  description: "Descrição detalhada do produto...", // Texto completo
  image: imagemImportada, // Variável da imagem importada
  tags: ["Tag 1", "Tag 2", "Tag 3"], // Características rápidas
  ideal: ["Local 1", "Local 2", "Local 3"] // Locais ideais de uso
}
```

### Exemplo de Edição:

**Antes:**
```typescript
{
  id: 1,
  name: "Lixeira Cilíndrica Premium",
  category: "Lixeiras de Lobby",
  description: "Design elegante e discreto...",
  image: lixeiraHotelLobby,
  tags: ["Inox 304", "Design Premium", "Alta Durabilidade"],
  ideal: ["Lobbies de Hotéis", "Recepções", "Áreas Comuns"]
}
```

**Depois (com informações atualizadas):**
```typescript
{
  id: 1,
  name: "Lixeira Cilíndrica Premium Plus", // Nome atualizado
  category: "Lixeiras de Lobby",
  description: "Nova versão com tecnologia anti-odor...", // Descrição atualizada
  image: lixeiraHotelLobby,
  tags: ["Inox 316", "Anti-Odor", "Design Exclusivo"], // Tags atualizadas
  ideal: ["Hotéis 5 Estrelas", "Resorts", "Clubes"] // Locais atualizados
}
```

---

## 🎯 Melhores Práticas

### Para Fotos de Produtos:

1. **Iluminação:**
   - Use luz natural ou iluminação profissional
   - Evite sombras duras
   - Mantenha consistência entre todas as fotos

2. **Ângulo:**
   - Frontal ou 3/4 para mostrar design
   - Em ambiente real para contexto
   - Detalhes de acabamento em close

3. **Fundo:**
   - Fundo branco/neutro para catálogo
   - Ambiente real (hotel, condomínio) para lifestyle
   - Fundo removido (transparente) para versatilidade

4. **Composição:**
   - Produto centralizado
   - Espaço ao redor (breathing room)
   - Proporção consistente entre produtos

### Para Edição:

1. **Correção de Cor:**
   - Ajuste brilho/contraste
   - Correção de balanço de branco
   - Realce de detalhes do inox

2. **Limpeza:**
   - Remova marcas e sujeiras
   - Corrija imperfeições
   - Mantenha aspecto natural

3. **Otimização:**
   - Comprima sem perder qualidade
   - Use formato adequado (PNG com transparência, JPG para fotos)
   - Teste em diferentes dispositivos

---

## 🔍 Localização de Outros Elementos Visuais

### Cores e Gradientes:
Arquivo: `src/index.css`
```css
--primary: 213 78% 35%; /* Azul corporativo */
--accent: 38 92% 50%; /* Dourado */
--gradient-hero: linear-gradient(...);
```

### Ícones:
Os ícones vêm da biblioteca `lucide-react`. Para trocar:
```typescript
import { Shield, Sparkles, Award } from "lucide-react";
// Substitua pelo ícone desejado da biblioteca Lucide
```

### Fontes:
Arquivo: `index.html` (linha 28)
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
```

---

## 📞 Suporte

Para dúvidas sobre edição de imagens ou personalização da landing page, consulte a documentação oficial do React ou entre em contato com o time de desenvolvimento.

**Ferramentas úteis:**
- Documentação React: https://react.dev/
- Documentação Tailwind CSS: https://tailwindcss.com/
- Lucide Icons: https://lucide.dev/

---

**Última atualização:** 2025
**Versão:** 1.0
