# Vidraçaria Pantanal — Site Institucional e Catálogo de Produtos

Site estático moderno, rápido e 100% responsivo desenvolvido para a **Vidraçaria Pantanal** em Cuiabá - MT.

O projeto foi concebido para atuar como um **Catálogo Visual de Alta Conversão**, com simulador de orçamento em etapas no lado do cliente e integração direta com o **WhatsApp**, além de otimização completa para **SEO Local** no Google.

---

## 🚀 Principais Funcionalidades

1. **Catálogo Interativo com Filtros em Vanilla JS**:
   - Categorias: Box de Banheiro, Espelhos Sob Medida, Portas de Vidro, Janelas, Guarda-corpo, Fachadas e Fechamentos, Projetos Especiais.
   - Cards com fotos em alta definição, tags de acabamento e botões de ação rápida.
   - Modal acessível com especificações técnicas e botão direto "Quero esse modelo".

2. **Simulador de Orçamento Inteligente (Wizard em 5 Etapas)**:
   - **Etapa 1**: Seleção visual de categoria e modelo.
   - **Etapa 2**: Medidas em metros ou centímetros, opção "Não sei as medidas" e calculadora de estimativa preliminar baseada em $m^2$.
   - **Etapa 3**: Localização (Cuiabá, Várzea Grande e bairros) e tipo de ambiente.
   - **Etapa 4**: Tipos de vidro (temperado 8mm, 10mm, fumê, espelho, etc.), ferragens e campo para foto do local.
   - **Etapa 5**: Nome, telefone com máscara brasileira e resumo antes do envio.

3. **Geração Automática de Mensagem para WhatsApp**:
   - Ao finalizar, o cliente é direcionado para `https://wa.me/5565984095748` com a mensagem perfeitamente formatada em tópicos.

4. **Experiência Mobile Pensada Primeiro (Mobile-First)**:
   - Barra fixa inferior mobile no padrão de app: `[ Catálogo ] [ Orçamento ] [ WhatsApp ]`.
   - Botão flutuante de WhatsApp com animação de pulso.
   - Menu hambúrguer lateral (drawer) touch-friendly.

5. **SEO Local (Google)**:
   - Metatags completas, Open Graph e Geo Tags para Cuiabá - MT.
   - Marcação Schema.org estruturada para `HomeAndConstructionBusiness` e `FAQPage`.
   - Arquivos `robots.txt` e `sitemap.xml` inclusos.

---

## 📁 Estrutura de Arquivos

```
/
├── index.html                     # Estrutura semântica principal e SEO
├── styles.css                     # Folha de estilos responsiva com design de vidro
├── script.js                      # Configurações centrais, catálogo e cálculo de orçamento
├── robots.txt                     # Instruções para motores de busca
├── sitemap.xml                    # Mapa do site para o Google Search Console
├── README.md                      # Esta documentação
└── assets/
    ├── images/                    # Fotos reais de projetos e logotipo oficial
    └── icons/                     # Ícones SVG otimizados
```

---

## ⚙️ Como Alterar Informações da Empresa e Produtos

Todas as informações da empresa e do catálogo ficam centralizadas no início do arquivo [`script.js`](file:///c:/Users/HYGOR/OneDrive/Área%20de%20Trabalho/Vidraçaria%20pantanal/script.js):

### 1. Dados de Contato e Endereço
```javascript
const COMPANY = {
    name: "Vidraçaria Pantanal",
    whatsapp: "5565984095748",       // Número sem caracteres para a API do WhatsApp
    phone: "(65) 98409-5748",         // Telefone formatado para exibição
    city: "Cuiabá",
    state: "MT",
    address: "Rua nova Denise, 146",
    openingHours: "Segunda a Sexta: 07:30 às 18:00 | Sábado: 08:00 às 12:00",
    googleBusinessUrl: "https://maps.app.goo.gl/ByUCTqBySp7iPcoe8?g_st=ic",
    instagramUrl: "https://www.instagram.com/pantanalvidros_?...",
    facebookUrl: "https://www.facebook.com/PantanalVidros"
};
```

### 2. Adicionar ou Alterar Produtos no Catálogo
No array `PRODUCTS` em `script.js`:
```javascript
{
    id: "novo-produto-id",
    name: "Nome do Produto",
    category: "box",                  // "box", "espelhos", "portas", "janelas", "guarda-corpo", "fachadas", "outros"
    categoryLabel: "Box e Banheiro",
    image: "assets/images/foto.jpeg",
    description: "Descrição comercial atraente...",
    applications: ["Suítes", "Banheiros"],
    tags: ["Vidro Temperado", "Incolor"],
    glassTypes: ["Temperado 8mm"],
    finishes: ["Preto Fosco", "Branco"],
    pricePerM2: 450,                  // Valor base por m² para o estimador inicial
    minPrice: 800                     // Valor mínimo
}
```

---

## 🌐 Como Publicar (Deploy)

Por ser **100% estático**, o site não requer Node.js, PHP ou banco de dados no servidor:
- **Hospedagens Gratuitas / Modernas**: Vercel, Netlify, Cloudflare Pages ou GitHub Pages (basta arrastar a pasta ou conectar o repositório Git).
- **Hospedagens Tradicionais**: Hostinger, Locaweb, cPanel/Apache — basta enviar os arquivos via FTP para a pasta `public_html`.
