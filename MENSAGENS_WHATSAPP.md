# 📱 Mensagens Padrão WhatsApp - Winnet Metais

Este documento contém as mensagens padrão configuradas na landing page para rastreamento de origem dos leads.

## 🎯 Mensagens Configuradas

### 1. Hero Section - CTA Principal
**Origem:** Botão "Solicitar Orçamento" na seção Hero (topo da página)

**Mensagem:**
```
Olá! Vim através da Landing Page Premium e gostaria de solicitar um orçamento para meu hotel/condomínio/resort.
```

**Link WhatsApp:**
```
https://wa.me/5511978791851?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20da%20Landing%20Page%20Premium%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20meu%20hotel/condom%C3%ADnio/resort.
```

---

### 2. Botão Flutuante WhatsApp
**Origem:** Botão verde flutuante fixo no canto inferior direito

**Mensagem:**
```
Olá! Gostaria de mais informações sobre os produtos Winnet. Vim através da Landing Page Premium.
```

**Link WhatsApp:**
```
https://wa.me/5511978791851?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20produtos%20Winnet.%20Vim%20atrav%C3%A9s%20da%20Landing%20Page%20Premium.
```

---

### 3. Galeria de Produtos - Detalhes do Produto
**Origem:** Modal de detalhes do produto (após clicar em "Ver Detalhes")

**Mensagem (dinâmica - inclui nome do produto):**
```
Olá! Gostaria de solicitar um orçamento para: [NOME DO PRODUTO]. Vim através da Landing Page Premium.
```

**Exemplo com produto "Lixeira Cilíndrica Premium":**
```
https://wa.me/5511978791851?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para:%20Lixeira%20Cil%C3%ADndrica%20Premium.%20Vim%20atrav%C3%A9s%20da%20Landing%20Page%20Premium.
```

---

### 4. Seção CTA Final - "Falar com Especialista"
**Origem:** Botão principal na seção de CTA (antes do rodapé)

**Mensagem:**
```
Olá! Gostaria de solicitar um orçamento personalizado para meu hotel/condomínio/resort. Vim através da Landing Page Premium.
```

**Link WhatsApp:**
```
https://wa.me/5511978791851?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20personalizado%20para%20meu%20hotel/condom%C3%ADnio/resort.%20Vim%20atrav%C3%A9s%20da%20Landing%20Page%20Premium.
```

---

## 📊 Rastreamento de Origem dos Leads

Todas as mensagens incluem a tag **"Landing Page Premium"** para identificar que o lead veio desta página específica.

### Como Identificar a Origem:

1. **Hero Section:** "Landing Page Premium" + "orçamento para meu hotel/condomínio/resort"
2. **Botão Flutuante:** "Landing Page Premium" + "mais informações sobre os produtos"
3. **Produto Específico:** "Landing Page Premium" + nome do produto
4. **CTA Final:** "Landing Page Premium" + "orçamento personalizado"

---

## 🔧 Como Personalizar as Mensagens

### Localização no Código:

#### Hero Component (`src/components/Hero.tsx`)
```typescript
const whatsappMessage = encodeURIComponent(
  "Olá! Vim através da Landing Page Premium e gostaria de solicitar um orçamento para meu hotel/condomínio/resort."
);
```

#### WhatsApp Button (`src/components/WhatsAppButton.tsx`)
```typescript
const whatsappMessage = encodeURIComponent(
  "Olá! Gostaria de mais informações sobre os produtos Winnet. Vim através da Landing Page Premium."
);
```

#### Product Gallery (`src/components/ProductGallery.tsx`)
```typescript
const whatsappMessage = (productName: string) => 
  encodeURIComponent(`Olá! Gostaria de solicitar um orçamento para: ${productName}. Vim através da Landing Page Premium.`);
```

#### CTA Component (`src/components/CTA.tsx`)
```typescript
const whatsappMessage = encodeURIComponent(
  "Olá! Gostaria de solicitar um orçamento personalizado para meu hotel/condomínio/resort. Vim através da Landing Page Premium."
);
```

---

## 💡 Dicas de Uso

1. **Sempre use `encodeURIComponent()`** ao criar links do WhatsApp para garantir que caracteres especiais sejam codificados corretamente.

2. **Personalize as tags** para diferentes campanhas alterando "Landing Page Premium" para identificadores específicos como:
   - "Landing Page Google Ads"
   - "Landing Page Facebook"
   - "Landing Page Email Marketing"

3. **Mensagens curtas e objetivas** convertem melhor. Mantenha entre 15-30 palavras.

4. **Inclua sempre:**
   - Saudação cordial
   - Origem do lead
   - Ação desejada (orçamento, informação, etc.)
   - Contexto (hotel/condomínio/resort)

---

## 📞 Contato WhatsApp

**Número:** +55 11 97879-1851

**Formato do Link:**
```
https://wa.me/5511978791851?text=[MENSAGEM_CODIFICADA]
```

---

## 🎨 Customização Visual

O botão flutuante do WhatsApp usa a cor oficial: `#25D366` (verde WhatsApp)

Para alterar a posição ou estilo, edite o arquivo `src/components/WhatsAppButton.tsx`
