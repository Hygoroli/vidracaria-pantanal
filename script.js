/**
 * ==========================================================================
 * VIDRAÇARIA PANTANAL - SCRIPT PRINCIPAL (HIGH-END UX/UI & ENGENHARIA DE VIDRO)
 * Site Estático, Catálogo Interativo, Reflexos Especulares e Orçamento Inteligente
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. CONFIGURAÇÃO CENTRAL DA EMPRESA
// Altere estes dados para atualizar telefone, endereço e links em todo o site
// --------------------------------------------------------------------------
const COMPANY = {
    name: "Vidraçaria Pantanal",
    slogan: "Vidros sob medida para transformar seu ambiente",
    whatsapp: "5565984095748",
    phone: "(65) 98409-5748",
    city: "Cuiabá",
    state: "MT",
    address: "Rua nova Denise, 146",
    neighborhood: "Cuiabá",
    openingHours: "Segunda a Sexta: 07:30 às 18:00 | Sábado: 08:00 às 12:00",
    googleBusinessUrl: "https://maps.app.goo.gl/ByUCTqBySp7iPcoe8?g_st=ic",
    instagramUrl: "https://www.instagram.com/pantanalvidros_?stkn=a2Q5czVlcGFrYzRi&utm_source=qr",
    facebookUrl: "https://www.facebook.com/PantanalVidros",
    email: "contato@vidracariapantanal.com.br"
};

// --------------------------------------------------------------------------
// 2. CATÁLOGO DE PRODUTOS
// Para adicionar ou modificar produtos, basta alterar este array
// --------------------------------------------------------------------------
const PRODUCTS = [
    // --- BOX E BANHEIRO ---
    {
        id: "box-elegance-gold",
        name: "Box Elegance Dourado (Gold)",
        category: "box",
        categoryLabel: "Box e Banheiro",
        image: "assets/images/box-elegance-gold.jpeg",
        description: "Box premium com roldanas aparentes em acabamento dourado gold e vidro temperado de alta resistência. O ápice de sofisticação e nobreza para suítes contemporâneas.",
        applications: ["Suítes master", "Banheiros de alto padrão", "Reformas sofisticadas"],
        tags: ["Vidro Temperado 8mm", "Roldanas Aparentes", "Kit Gold / Dourado"],
        glassTypes: ["Temperado Incolor 8mm", "Temperado Extra Clear", "Laminado"],
        finishes: ["Dourado Gold", "Rose Gold", "Preto Fosco", "Cromado Inox"],
        pricePerM2: 580,
        minPrice: 1200
    },
    {
        id: "box-ate-teto-preto",
        name: "Box até o Teto (Black Matte)",
        category: "box",
        categoryLabel: "Box e Banheiro",
        image: "assets/images/box-black-ceiling.jpeg",
        description: "Box do piso ao teto com perfil preto fosco minimalista. Isolamento térmico de vapor para uma verdadeira experiência de sauna privativa em casa.",
        applications: ["Banheiros com exaustor", "Projetos contemporâneos", "Suítes residenciais"],
        tags: ["Isolamento Térmico", "Até o Teto", "Perfil Black Matte"],
        glassTypes: ["Temperado Incolor 8mm/10mm", "Vidro Fumê", "Antiembaçante"],
        finishes: ["Preto Fosco", "Branco Neve", "Alumínio Anodizado"],
        pricePerM2: 520,
        minPrice: 1100
    },
    {
        id: "box-blindex-branco",
        name: "Box Blindex de Correr Tradicional",
        category: "box",
        categoryLabel: "Box e Banheiro",
        image: "assets/images/box-blindex-white.jpeg",
        description: "O clássico e seguro box Blindex com perfil branco e vidro temperado certificado. Durabilidade, facilidade de limpeza e excelente custo-benefício.",
        applications: ["Banheiros residenciais", "Apartamentos", "Casas de aluguel e reformas"],
        tags: ["Segurança Blindex", "Econômico", "Vidro Temperado"],
        glassTypes: ["Temperado Incolor 8mm", "Fumê 8mm", "Verde 8mm"],
        finishes: ["Branco", "Fosco Natural", "Champagne"],
        pricePerM2: 390,
        minPrice: 750
    },
    {
        id: "box-correr-preto",
        name: "Box de Correr Linha Black",
        category: "box",
        categoryLabel: "Box e Banheiro",
        image: "assets/images/box-black-sliding.jpeg",
        description: "Box frontal de correr com ferragens e guias em acabamento preto acetinado. Design moderno que combina com metais e louças pretas em tendência.",
        applications: ["Banheiros sociais", "Suítes compactas", "Espaços modernos"],
        tags: ["Preto Fosco", "Deslizamento Suave", "Sob Medida"],
        glassTypes: ["Temperado Incolor 8mm", "Temperado Fumê", "Acidato"],
        finishes: ["Preto Fosco", "Cromado", "Bronze"],
        pricePerM2: 440,
        minPrice: 850
    },

    // --- ESPELHOS ---
    {
        id: "espelho-organico-led",
        name: "Espelho Orgânico Lapidado com LED",
        category: "espelhos",
        categoryLabel: "Espelhos Nobres",
        image: "assets/images/mirror-organic-led.jpeg",
        description: "Espelho lapidado com formato orgânico fluido e retroiluminação indireta em LED. Transforma lavabos, halls e banheiros em verdadeiras galerias de arte contemporânea.",
        applications: ["Lavabos de luxo", "Halls de entrada", "Dormitórios e closets"],
        tags: ["Design Orgânico", "LED Indireto", "Lapidação Cristal"],
        glassTypes: ["Espelho Prata Cristal Cebrace/Guardian 4mm", "Cristal 5mm"],
        finishes: ["Borda Lapidada Polida", "Bisotado Delicado", "Iluminação Quente ou Fria"],
        pricePerM2: 480,
        minPrice: 650
    },
    {
        id: "espelho-camarim-touch",
        name: "Espelho Camarim com LED Touch Screen",
        category: "espelhos",
        categoryLabel: "Espelhos Nobres",
        image: "assets/images/mirror-vanity-touch.jpeg",
        description: "Espelho para bancada com faixa frontal de iluminação LED e botão touch screen integrado no próprio vidro. Iluminação uniforme ideal para maquiagem e cuidados pessoais.",
        applications: ["Penteadeiras", "Closets", "Banheiros de suíte"],
        tags: ["Touch Integrado", "LED Frontal Uniforme", "Sem Distorção"],
        glassTypes: ["Espelho Cristal 4mm com gravação para LED", "Prata Importado"],
        finishes: ["Borda Lapidada", "Acionamento Touch", "Regulador de Intensidade"],
        pricePerM2: 550,
        minPrice: 790
    },
    {
        id: "espelho-parede-ripado",
        name: "Espelho de Parede Inteira para Sala de Jantar",
        category: "espelhos",
        categoryLabel: "Espelhos Nobres",
        image: "assets/images/mirror-dining-wall.jpeg",
        description: "Espelho cristal de grandes dimensões instalado do chão ao teto, harmonizado com painéis ripados e móveis sofisticados. Duplica a amplitude e luminosidade do ambiente.",
        applications: ["Salas de jantar", "Salas de estar", "Espaços corporativos", "Academias"],
        tags: ["Efeito Amplitude", "Chão ao Teto", "Fixação Segura"],
        glassTypes: ["Espelho Cristal 4mm e 5mm de alta definição"],
        finishes: ["Lapidado Reto", "Bisotê 2cm / 3cm", "Com ou sem moldura"],
        pricePerM2: 360,
        minPrice: 850
    },
    {
        id: "espelho-assimetrico",
        name: "Espelho Lapidado com Corte Especial",
        category: "espelhos",
        categoryLabel: "Espelhos Nobres",
        image: "assets/images/mirror-asymmetric.jpeg",
        description: "Corte milimétrico sob medida para encaixe perfeito em chanfros, meia-parede, revestimentos ou ângulos especiais de arquitetura.",
        applications: ["Banheiros com recorte de bancada", "Sob escadas", "Nichos personalizados"],
        tags: ["Corte Especial", "Lapidação CNC", "Sob Medida"],
        glassTypes: ["Espelho Cristal 4mm", "Espelho Bronze", "Espelho Fumê"],
        finishes: ["Lapidação Premium", "Bisotê"],
        pricePerM2: 390,
        minPrice: 450
    },

    // --- FACHADAS E FECHAMENTOS ---
    {
        id: "fachada-area-gourmet-piscina",
        name: "Fechamento de Área Gourmet com Piscina",
        category: "fachadas",
        categoryLabel: "Fachadas & Fechamentos",
        image: "assets/images/facade-pool-house.jpeg",
        description: "Fechamento panorâmico em vidro temperado com perfis pretos estruturados, conectando a área gourmet ao deque e piscina. Integração visual com proteção contra chuvas e vento.",
        applications: ["Áreas gourmets", "Varandas integradas", "Casas em condomínio fechado"],
        tags: ["Visão Panorâmica", "Vedação Acústica e Térmica", "Perfis Estruturados"],
        glassTypes: ["Temperado 8mm / 10mm Incolor", "Vidro Solar / Refletivo", "Laminado"],
        finishes: ["Alumínio Preto", "Alumínio Branco", "Alumínio Amadeirado"],
        pricePerM2: 650,
        minPrice: 2800
    },
    {
        id: "fechamento-varanda-correr",
        name: "Cortina de Vidro e Fechamento de Varanda",
        category: "fachadas",
        categoryLabel: "Fachadas & Fechamentos",
        image: "assets/images/facade-gourmet-patio.jpeg",
        description: "Sistema articulado ou de correr com múltiplas folhas que recolhem facilitando a abertura total do vão. Ideal para churrasqueiras e varandas em Cuiabá.",
        applications: ["Sacadas de apartamento", "Varandas residenciais", "Espaços de confraternização"],
        tags: ["Abertura Total", "Vedação Eficiente", "Vidro de Segurança"],
        glassTypes: ["Vidro Temperado 10mm", "Vidro Laminado 10mm"],
        finishes: ["Preto Fosco", "Branco", "Bronze Anodizado"],
        pricePerM2: 620,
        minPrice: 2200
    },
    {
        id: "fachada-comercial-vitrine",
        name: "Fachada de Vidro Comercial e Vitrine",
        category: "fachadas",
        categoryLabel: "Fachadas & Fechamentos",
        image: "assets/images/facade-commercial-shop.jpeg",
        description: "Frente de loja e vitrine em vidro temperado com portas duplas deslizantes e puxadores inox escovado ou preto. Destaque total para produtos e segurança do comércio.",
        applications: ["Lojas de shopping e rua", "Concessionárias", "Restaurantes e academias"],
        tags: ["Alta Visibilidade", "Puxador Longo", "Fechadura de Segurança"],
        glassTypes: ["Temperado 10mm Incolor", "Laminado de Segurança 10mm", "Vidro Extra Clear"],
        finishes: ["Perfis Estruturais Pretos", "Inox Escovado", "Branco"],
        pricePerM2: 590,
        minPrice: 2500
    },
    {
        id: "divisoria-vidro-corporativa",
        name: "Divisória de Vidro para Escritórios e Salas",
        category: "fachadas",
        categoryLabel: "Fachadas & Fechamentos",
        image: "assets/images/facade-corporate-divider.jpeg",
        description: "Divisórias modulares em vidro que dividem salas sem perder luz natural e sensação de amplitude. Acabamento corporativo de alto impacto.",
        applications: ["Escritórios de advocacia", "Consultórios médicos", "Salas de reunião"],
        tags: ["Luz Natural", "Isolamento Acústico", "Opção Jateado/Película"],
        glassTypes: ["Temperado 8mm / 10mm", "Vidro Laminado Acústico", "Opção com Película Jateada"],
        finishes: ["Preto Fosco", "Alumínio Natural", "Branco"],
        pricePerM2: 490,
        minPrice: 1600
    },

    // --- PORTAS ---
    {
        id: "porta-vidro-pivotante",
        name: "Porta Pivotante em Vidro Temperado",
        category: "portas",
        categoryLabel: "Portas de Vidro",
        image: "assets/images/porta-vidro-pivotante.jpeg",
        description: "Porta de entrada imponente com eixo pivotante suave, ferragens em aço e vidro de alta espessura. Uma escolha moderna para entradas residenciais e salas de estar.",
        applications: ["Entradas principais", "Divisão entre sala e jardim", "Escritórios executivos"],
        tags: ["Sistema Pivotante", "Eixo Embutido", "Puxador Nobre"],
        glassTypes: ["Temperado 10mm", "Vidro Laminado Fumê", "Refletivo Bronze"],
        finishes: ["Preto Fosco", "Aço Inox Polido", "Cromado"],
        pricePerM2: 580,
        minPrice: 1800
    },
    {
        id: "porta-aluminio-ripado-preto",
        name: "Porta de Alumínio e Vidro com Puxador Nobre",
        category: "portas",
        categoryLabel: "Portas de Vidro",
        image: "assets/images/door-black-slat.jpeg",
        description: "Porta de alto padrão combinando perfis de alumínio ripado estrutural com detalhes em vidro e puxador longo vertical. Segurança, privacidade e estética moderna.",
        applications: ["Portas sociais", "Acesso à lavanderia ou corredor", "Banheiros externos"],
        tags: ["Design Moderno", "Resistente a Sol e Chuva", "Puxador Vertical"],
        glassTypes: ["Painel Misto Alumínio / Vidro Temperado"],
        finishes: ["Preto Fosco Microtexturizado", "Branco", "Amadeirado"],
        pricePerM2: 690,
        minPrice: 1900
    },

    // --- JANELAS ---
    {
        id: "janela-blindex-fume-4-folhas",
        name: "Janela Blindex 4 Folhas Vidro Fumê",
        category: "janelas",
        categoryLabel: "Janelas",
        image: "assets/images/window-blindex-fume.jpeg",
        description: "Janela com 2 folhas fixas e 2 folhas móveis de correr. Vidro temperado fumê para conforto térmico e bloqueio solar suave, combinada com esquadria de alumínio.",
        applications: ["Quartos e salas", "Cozinhas", "Edículas e áreas de serviço"],
        tags: ["Vidro Fumê", "4 Folhas", "Conforto Térmico"],
        glassTypes: ["Temperado Fumê 8mm", "Incolor 8mm", "Verde 8mm"],
        finishes: ["Alumínio Branco", "Alumínio Preto", "Alumínio Natural"],
        pricePerM2: 420,
        minPrice: 650
    },

    // --- GUARDA-CORPO ---
    {
        id: "guarda-corpo-varanda",
        name: "Guarda-Corpo de Vidro Autoportante / Torre",
        category: "guarda-corpo",
        categoryLabel: "Guarda-Corpo",
        image: "assets/images/guarda-corpo-varanda.jpeg",
        description: "Guarda-corpo com torres de fixação em aço inoxidável ou perfil embutido no piso. Máxima segurança estrutural segundo as normas ABNT com visual livre e clean.",
        applications: ["Sacadas e varandas", "Mezaninos", "Beira de piscina", "Escadas"],
        tags: ["Norma ABNT NBR 14718", "Torres Inox 304/316", "Segurança Máxima"],
        glassTypes: ["Laminado Temperado 10mm / 12mm / 16mm", "Extra Clear"],
        finishes: ["Inox Escovado", "Inox Preto Fosco", "Embutido no Piso"],
        pricePerM2: 780,
        minPrice: 1950
    },

    // --- PROJETOS ESPECIAIS ---
    {
        id: "aquario-acustico-bateria",
        name: "Aquário Acústico para Bateria / Enclosure Especial",
        category: "outros",
        categoryLabel: "Projetos Especiais",
        image: "assets/images/special-acoustic-drum.jpeg",
        description: "Cabine acústica em vidro temperado de alta densidade desenvolvida especialmente para controle sonoro de instrumentos musicais em igrejas, estúdios e residências.",
        applications: ["Igrejas e templos", "Estúdios de gravação", "Auditórios e salas de ensaio"],
        tags: ["Isolamento Acústico", "Estrutura Reforçada", "100% Personalizado"],
        glassTypes: ["Vidro Temperado Acústico 10mm", "Vidro Duplo Insulado"],
        finishes: ["Estrutura Aço Preto Fosco", "Vedação Especial"],
        pricePerM2: 890,
        minPrice: 3800
    }
];

// --------------------------------------------------------------------------
// 3. PROJETOS REALIZADOS (PORTFÓLIO CURADO)
// --------------------------------------------------------------------------
const PROJECTS = [
    {
        id: "proj-1",
        title: "Área Gourmet com Fechamento Panorâmico",
        category: "fachadas",
        categoryName: "Fachadas & Fechamentos",
        image: "assets/images/facade-pool-house.jpeg",
        description: "Fechamento de área de lazer em residência no condomínio Alphaville Cuiabá com vidro temperado e perfis pretos.",
        productId: "fachada-area-gourmet-piscina",
        productName: "Fechamento de Área Gourmet com Piscina"
    },
    {
        id: "proj-2",
        title: "Box Elegance Dourado em Suíte Master",
        category: "box",
        categoryName: "Box e Banheiro",
        image: "assets/images/box-elegance-gold.jpeg",
        description: "Instalação de box com kit elegance dourado e vidro incolor no bairro Goiabeiras, Cuiabá.",
        productId: "box-elegance-gold",
        productName: "Box Elegance Dourado (Gold)"
    },
    {
        id: "proj-3",
        title: "Espelho Orgânico com LED Retrô",
        category: "espelhos",
        categoryName: "Espelhos Nobres",
        image: "assets/images/mirror-organic-led.jpeg",
        description: "Espelho decorativo fluido sob medida para lavabo residencial com iluminação suave indireta.",
        productId: "espelho-organico-led",
        productName: "Espelho Orgânico Lapidado com LED"
    },
    {
        id: "proj-4",
        title: "Box até o Teto Black Matte",
        category: "box",
        categoryName: "Box e Banheiro",
        image: "assets/images/box-black-ceiling.jpeg",
        description: "Solução do piso ao teto com retenção de vapor d'água no bairro Bosque da Saúde, Cuiabá.",
        productId: "box-ate-teto-preto",
        productName: "Box até o Teto (Black Matte)"
    },
    {
        id: "proj-5",
        title: "Fechamento de Varanda com Portas de Correr",
        category: "fachadas",
        categoryName: "Fachadas & Fechamentos",
        image: "assets/images/facade-gourmet-patio.jpeg",
        description: "Sistema deslizante em vidro temperado com abertura ampla para espaço de churrasqueira.",
        productId: "fechamento-varanda-correr",
        productName: "Cortina de Vidro e Fechamento de Varanda"
    },
    {
        id: "proj-6",
        title: "Cabine Acústica para Instrumentos",
        category: "outros",
        categoryName: "Projetos Especiais",
        image: "assets/images/special-acoustic-drum.jpeg",
        description: "Aquário acústico personalizado instalado em igreja de Cuiabá para isolamento da bateria.",
        productId: "aquario-acustico-bateria",
        productName: "Aquário Acústico para Bateria / Enclosure Especial"
    }
];

// --------------------------------------------------------------------------
// 4. PERGUNTAS FREQUENTES (FAQ)
// --------------------------------------------------------------------------
const FAQ_DATA = [
    {
        q: "Como funciona a solicitação de orçamento?",
        a: "É muito simples e rápido! Você pode navegar pelo nosso catálogo, escolher o produto desejado e preencher o formulário interativo de orçamento aqui no site. Ao finalizar, seus dados e medidas são organizados automaticamente e você é direcionado para o nosso WhatsApp comercial para receber atendimento humanizado."
    },
    {
        q: "Vocês trabalham com medidas personalizadas e projetos sob medida?",
        a: "Sim! 100% dos nossos projetos de vidros, espelhos, esquadrias e box são fabricados milimetricamente sob medida para o seu espaço residencial, comercial ou empresarial em Cuiabá e região."
    },
    {
        q: "E se eu não souber as medidas exatas do meu espaço?",
        a: "Não se preocupe! No formulário, basta marcar a opção 'Não sei as medidas'. Você pode enviar uma foto do local pelo WhatsApp e nossos especialistas orientam você ou agendam uma visita técnica para medição precisa no local."
    },
    {
        q: "Qual é o prazo médio de fabricação e instalação?",
        a: "O prazo varia de acordo com a complexidade do projeto: produtos padrão (como box tradicional e espelhos) costumam ter prazos de 3 a 7 dias úteis. Projetos de grande porte como fachadas, pele de vidro ou guarda-corpos autoportantes são combinados após o projeto executivo."
    },
    {
        q: "Vocês realizam a instalação profissional no local?",
        a: "Com certeza! Contamos com equipe própria e qualificada de instaladores experientes, garantindo fixação correta, calafetação, alinhamento perfeito e segurança total conforme as normas da ABNT."
    },
    {
        q: "Quais tipos de vidros e acabamentos vocês trabalham?",
        a: "Trabalhamos com vidros temperados (8mm e 10mm), laminados de segurança, espelhos cristal Cebrace/Guardian, vidros fumê, verdes, bronze, acidatos, refletivos e uma ampla gama de ferragens (preto fosco, branco, dourado gold, cromado e inox)."
    },
    {
        q: "Posso enviar uma foto do local ou a planta da minha obra?",
        a: "Sim! Ao clicar em solicitar orçamento, você pode selecionar a foto aqui no site ou enviá-la diretamente na conversa do WhatsApp junto com plantas ou referências que você gostou."
    },
    {
        q: "Atendem em Várzea Grande e cidades vizinhas?",
        a: "Sim! Atendemos toda a cidade de Cuiabá, Várzea Grande, Chapada dos Guimarães, Santo Antônio do Leverger e demais municípios da região metropolitana."
    },
    {
        q: "Quais são as formas de pagamento aceitas?",
        a: "Aceitamos Pix, cartões de crédito em até 12x (consulte condições), débito e faturamento facilitado para empresas e condomínios."
    }
];

// --------------------------------------------------------------------------
// 5. ESTADO DA APLICAÇÃO (STATE)
// --------------------------------------------------------------------------
const AppState = {
    selectedCategory: "todos",
    activeModalProduct: null,
    wizard: {
        step: 1,
        selectedProduct: null,
        selectedCategory: "box",
        width: "",
        height: "",
        unit: "m",
        unknownDimensions: false,
        city: "Cuiabá",
        neighborhood: "",
        environment: "",
        glassType: "Vidro Temperado Incolor 8mm",
        finish: "Preto Fosco (Black Matte)",
        quantity: 1,
        notes: "",
        hasPhotoNotice: false,
        clientName: "",
        clientWhatsapp: "",
        clientEmail: "",
        calculatedArea: 0,
        estimatedPrice: 0
    }
};

// --------------------------------------------------------------------------
// 6. INICIALIZAÇÃO DO DOM E EVENTOS
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    populateCompanyDetails();
    renderCatalog("todos");
    renderFAQ();
    initFilters();
    initModal();
    initWizard();
    initMobileNav();
    initPhoneMask();
    initGlassReflections();
});

// Atualiza dados dinâmicos da empresa no HTML
function populateCompanyDetails() {
    const waLinks = document.querySelectorAll(".js-company-wa-link");
    waLinks.forEach(link => {
        link.href = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de falar com a Vidraçaria Pantanal.")}`;
    });

    const phoneLinks = document.querySelectorAll(".js-company-phone-link");
    phoneLinks.forEach(link => {
        link.href = `tel:${COMPANY.whatsapp}`;
        link.textContent = COMPANY.phone;
    });

    const mapsLinks = document.querySelectorAll(".js-company-maps-link");
    mapsLinks.forEach(link => {
        link.href = COMPANY.googleBusinessUrl;
    });

    const instaLinks = document.querySelectorAll(".js-company-insta-link");
    instaLinks.forEach(link => {
        link.href = COMPANY.instagramUrl;
    });

    const fbLinks = document.querySelectorAll(".js-company-fb-link");
    fbLinks.forEach(link => {
        link.href = COMPANY.facebookUrl;
    });

    const addressEls = document.querySelectorAll(".js-company-address");
    addressEls.forEach(el => {
        el.textContent = `${COMPANY.address} — ${COMPANY.city} - ${COMPANY.state}`;
    });

    const hoursEls = document.querySelectorAll(".js-company-hours");
    hoursEls.forEach(el => {
        el.textContent = COMPANY.openingHours;
    });
}

// --------------------------------------------------------------------------
// 7. RENDERIZAÇÃO DO CATÁLOGO DE PRODUTOS
// --------------------------------------------------------------------------
function renderCatalog(category = "todos") {
    const catalogGrid = document.getElementById("catalog-grid");
    if (!catalogGrid) return;

    const filtered = category === "todos" 
        ? PRODUCTS 
        : PRODUCTS.filter(p => p.category === category);

    if (filtered.length === 0) {
        catalogGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #ffffff; border-radius: 14px; border: 1px solid #e2e8f0;">
                <p style="font-size: 1.1rem; color: #5e718d; margin-bottom: 16px;">Nenhum produto encontrado nesta categoria no momento.</p>
                <button class="btn btn-outline" onclick="setCategoryFilter('todos')">Ver todos os produtos</button>
            </div>
        `;
        return;
    }

    catalogGrid.innerHTML = filtered.map(product => `
        <article class="product-card" data-product-id="${product.id}" data-category="${product.category}">
            <div class="product-card-image-wrap">
                <img 
                    src="${product.image}" 
                    alt="${product.name} em Cuiabá - Vidraçaria Pantanal" 
                    loading="lazy" 
                    class="product-card-img"
                    onerror="this.src='assets/images/hero-pool-enclosure.jpeg'"
                >
                <span class="product-badge">${product.categoryLabel}</span>
            </div>
            
            <div class="product-card-content">
                <h3 class="product-card-title">${product.name}</h3>
                <p class="product-card-desc">${product.description}</p>
                
                <div class="product-card-tags">
                    ${product.tags.slice(0, 3).map(tag => `<span class="tag-pill">${tag}</span>`).join("")}
                </div>

                <div class="product-card-actions">
                    <button type="button" class="btn btn-secondary btn-sm" onclick="openProductModal('${product.id}')">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        Ver detalhes
                    </button>
                    <button type="button" class="btn btn-primary btn-sm" onclick="selectProductForQuote('${product.id}')">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                        Orçar este
                    </button>
                </div>
            </div>
        </article>
    `).join("");

    // Reconecta reflexos especulares
    initGlassReflections();
}

// Configura botões de filtro
function initFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const cat = btn.getAttribute("data-category") || "todos";
            AppState.selectedCategory = cat;
            renderCatalog(cat);
        });
    });
}

function setCategoryFilter(categoryKey) {
    const filterBtn = document.querySelector(`.filter-btn[data-category="${categoryKey}"]`);
    if (filterBtn) {
        filterBtn.click();
    } else {
        renderCatalog(categoryKey);
    }
}

// --------------------------------------------------------------------------
// 8. MODAL DE DETALHES DO PRODUTO (ALTA DEFINIÇÃO)
// --------------------------------------------------------------------------
function initModal() {
    const modal = document.getElementById("product-detail-modal");
    if (!modal) return;

    const closeBtn = modal.querySelector(".modal-close-btn");
    const overlay = modal.querySelector(".modal-overlay");

    if (closeBtn) closeBtn.addEventListener("click", closeProductModal);
    if (overlay) overlay.addEventListener("click", closeProductModal);

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeProductModal();
        }
    });
}

function openProductModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    AppState.activeModalProduct = product;
    const modal = document.getElementById("product-detail-modal");
    if (!modal) return;

    // Preenche dados do modal
    document.getElementById("modal-product-title").textContent = product.name;
    document.getElementById("modal-product-category").textContent = product.categoryLabel;
    document.getElementById("modal-product-img").src = product.image;
    document.getElementById("modal-product-img").alt = `${product.name} - Vidraçaria Pantanal`;
    document.getElementById("modal-product-desc").textContent = product.description;

    // Aplicações
    const appsList = document.getElementById("modal-product-apps");
    if (appsList) {
        appsList.innerHTML = product.applications.map(app => `<li>${app}</li>`).join("");
    }

    // Vidros
    const glassList = document.getElementById("modal-product-glass");
    if (glassList) {
        glassList.innerHTML = product.glassTypes.map(g => `<span class="spec-badge">${g}</span>`).join("");
    }

    // Ferragens
    const finishList = document.getElementById("modal-product-finishes");
    if (finishList) {
        finishList.innerHTML = product.finishes.map(f => `<span class="spec-badge finish-badge">${f}</span>`).join("");
    }

    // Botão de conversão do modal
    const actionBtn = document.getElementById("modal-action-btn");
    if (actionBtn) {
        actionBtn.onclick = () => {
            closeProductModal();
            selectProductForQuote(product.id);
        };
    }

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeProductModal() {
    const modal = document.getElementById("product-detail-modal");
    if (!modal) return;
    modal.classList.remove("active");
    document.body.style.overflow = "";
}



// --------------------------------------------------------------------------
// 10. FAQ ACCORDION
// --------------------------------------------------------------------------
function renderFAQ() {
    const faqContainer = document.getElementById("faq-accordion");
    if (!faqContainer) return;

    faqContainer.innerHTML = FAQ_DATA.map((item, index) => `
        <div class="faq-item ${index === 0 ? "active" : ""}">
            <button type="button" class="faq-question" aria-expanded="${index === 0 ? "true" : "false"}" onclick="toggleFaq(${index})">
                <span>${item.q}</span>
                <span class="faq-icon" aria-hidden="true">+</span>
            </button>
            <div class="faq-answer">
                <p>${item.a}</p>
            </div>
        </div>
    `).join("");
}

function toggleFaq(index) {
    const items = document.querySelectorAll(".faq-item");
    items.forEach((item, i) => {
        const btn = item.querySelector(".faq-question");
        if (i === index) {
            const isActive = item.classList.contains("active");
            if (isActive) {
                item.classList.remove("active");
                if (btn) btn.setAttribute("aria-expanded", "false");
            } else {
                item.classList.add("active");
                if (btn) btn.setAttribute("aria-expanded", "true");
            }
        } else {
            item.classList.remove("active");
            if (btn) btn.setAttribute("aria-expanded", "false");
        }
    });
}

// --------------------------------------------------------------------------
// 11. SISTEMA DE ORÇAMENTO INTELIGENTE (WIZARD EM ETAPAS)
// --------------------------------------------------------------------------
function initWizard() {
    if (!AppState.wizard.selectedProduct) {
        AppState.wizard.selectedProduct = PRODUCTS[0];
        AppState.wizard.selectedCategory = PRODUCTS[0].category;
    }

    renderWizardCategoryOptions();
    renderWizardProductsList(AppState.wizard.selectedCategory);

    // Eventos de medidas
    const widthInput = document.getElementById("wizard-width");
    const heightInput = document.getElementById("wizard-height");
    const unitSelector = document.querySelectorAll("input[name='wizard-unit']");
    const unknownCheckbox = document.getElementById("wizard-unknown-measures");

    if (widthInput) widthInput.addEventListener("input", calculateEstimate);
    if (heightInput) heightInput.addEventListener("input", calculateEstimate);

    unitSelector.forEach(radio => {
        radio.addEventListener("change", (e) => {
            AppState.wizard.unit = e.target.value;
            calculateEstimate();
        });
    });

    if (unknownCheckbox) {
        unknownCheckbox.addEventListener("change", (e) => {
            AppState.wizard.unknownDimensions = e.target.checked;
            const measuresContainer = document.getElementById("measures-inputs-group");
            const unknownNotice = document.getElementById("unknown-measures-notice");
            const estimateBox = document.getElementById("estimate-calc-box");

            if (e.target.checked) {
                if (measuresContainer) measuresContainer.classList.add("is-disabled");
                if (unknownNotice) unknownNotice.classList.remove("d-none");
                if (estimateBox) estimateBox.classList.add("d-none");
            } else {
                if (measuresContainer) measuresContainer.classList.remove("is-disabled");
                if (unknownNotice) unknownNotice.classList.add("d-none");
                calculateEstimate();
            }
        });
    }

    // Foto do local
    const photoInput = document.getElementById("wizard-photo");
    if (photoInput) {
        photoInput.addEventListener("change", (e) => {
            const notice = document.getElementById("photo-upload-feedback");
            if (e.target.files && e.target.files.length > 0) {
                const fileName = e.target.files[0].name;
                if (notice) {
                    notice.innerHTML = `✓ Arquivo selecionado: <strong>${fileName}</strong>.<br><small class="text-muted">Como nosso site é estático e seguro, você poderá anexar essa foto com 1 clique diretamente na conversa do WhatsApp ao final!</small>`;
                    notice.classList.remove("d-none");
                }
            }
        });
    }

    // Navegação entre etapas
    document.querySelectorAll(".js-wizard-next").forEach(btn => {
        btn.addEventListener("click", () => {
            validateAndGoNext();
        });
    });

    document.querySelectorAll(".js-wizard-prev").forEach(btn => {
        btn.addEventListener("click", () => {
            goToWizardStep(AppState.wizard.step - 1);
        });
    });

    // Envio pelo WhatsApp
    const submitBtn = document.getElementById("wizard-submit-whatsapp");
    if (submitBtn) {
        submitBtn.addEventListener("click", handleWhatsAppSubmit);
    }
}

function renderWizardCategoryOptions() {
    const container = document.getElementById("wizard-category-picker");
    if (!container) return;

    const categories = [
        { key: "box", label: "Box de Banheiro", icon: "🚿" },
        { key: "espelhos", label: "Espelho Nobre", icon: "🪞" },
        { key: "portas", label: "Porta de Vidro", icon: "🚪" },
        { key: "janelas", label: "Janela Blindex", icon: "🪟" },
        { key: "guarda-corpo", label: "Guarda-Corpo", icon: "🛡️" },
        { key: "fachadas", label: "Fachada & Fechamento", icon: "🏢" },
        { key: "outros", label: "Projeto Especial", icon: "✨" }
    ];

    container.innerHTML = categories.map(cat => `
        <button 
            type="button" 
            class="wizard-cat-card ${cat.key === AppState.wizard.selectedCategory ? "selected" : ""}" 
            onclick="selectWizardCategory('${cat.key}')"
        >
            <span class="wizard-cat-icon">${cat.icon}</span>
            <span class="wizard-cat-label">${cat.label}</span>
        </button>
    `).join("");
}

function selectWizardCategory(catKey) {
    AppState.wizard.selectedCategory = catKey;
    renderWizardCategoryOptions();
    renderWizardProductsList(catKey);
}

function renderWizardProductsList(categoryKey) {
    const container = document.getElementById("wizard-product-picker");
    if (!container) return;

    const available = PRODUCTS.filter(p => p.category === categoryKey);
    const list = available.length > 0 ? available : PRODUCTS;

    if (!AppState.wizard.selectedProduct || AppState.wizard.selectedProduct.category !== categoryKey) {
        AppState.wizard.selectedProduct = list[0];
    }

    container.innerHTML = list.map(prod => `
        <div 
            class="wizard-product-radio ${prod.id === AppState.wizard.selectedProduct?.id ? "selected" : ""}" 
            onclick="setWizardProduct('${prod.id}')"
        >
            <img src="${prod.image}" alt="${prod.name}" class="wizard-prod-thumb" onerror="this.src='assets/images/logo.jpeg'">
            <div class="wizard-prod-details">
                <strong>${prod.name}</strong>
                <small>${prod.description.substring(0, 75)}...</small>
            </div>
            <div class="wizard-radio-check"></div>
        </div>
    `).join("");
}

function setWizardProduct(productId) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;
    AppState.wizard.selectedProduct = prod;
    renderWizardProductsList(prod.category);
    calculateEstimate();
}

function updateWizardProductGrid(categoryKey, productId) {
    AppState.wizard.selectedCategory = categoryKey;
    renderWizardCategoryOptions();
    renderWizardProductsList(categoryKey);
    setWizardProduct(productId);
}

function selectProductForQuote(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    AppState.wizard.selectedProduct = product;
    AppState.wizard.selectedCategory = product.category;

    updateWizardProductGrid(product.category, product.id);

    scrollToSection("orcamento");
    goToWizardStep(2);
}

function goToWizardStep(stepNumber) {
    if (stepNumber < 1) stepNumber = 1;
    if (stepNumber > 5) stepNumber = 5;

    AppState.wizard.step = stepNumber;

    const stepTabs = document.querySelectorAll(".wizard-step-tab");
    stepTabs.forEach((tab, index) => {
        const stepNum = index + 1;
        if (stepNum === stepNumber) {
            tab.classList.add("active");
            tab.classList.remove("completed");
        } else if (stepNum < stepNumber) {
            tab.classList.add("completed");
            tab.classList.remove("active");
        } else {
            tab.classList.remove("active", "completed");
        }
    });

    document.querySelectorAll(".wizard-step-pane").forEach((pane, index) => {
        if (index + 1 === stepNumber) {
            pane.classList.add("active");
        } else {
            pane.classList.remove("active");
        }
    });

    if (stepNumber === 5) {
        updateWizardSummary();
    }

    const formContainer = document.getElementById("orcamento-form-wrapper");
    if (formContainer) {
        const topOffset = formContainer.getBoundingClientRect().top + window.scrollY - 110;
        window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
}

function validateAndGoNext() {
    const current = AppState.wizard.step;

    if (current === 1) {
        if (!AppState.wizard.selectedProduct) {
            alert("Por favor, selecione um produto para continuar.");
            return;
        }
        goToWizardStep(2);
    } else if (current === 2) {
        const unknown = document.getElementById("wizard-unknown-measures")?.checked;
        if (!unknown) {
            const width = parseFloat(document.getElementById("wizard-width")?.value || "0");
            const height = parseFloat(document.getElementById("wizard-height")?.value || "0");
            if (isNaN(width) || width <= 0 || isNaN(height) || height <= 0) {
                alert("Por favor, informe a largura e altura ou marque a opção 'Não sei as medidas'.");
                return;
            }
        }
        goToWizardStep(3);
    } else if (current === 3) {
        const city = document.getElementById("wizard-city")?.value.trim();
        const neighborhood = document.getElementById("wizard-neighborhood")?.value.trim();
        if (!city) {
            alert("Por favor, informe a cidade da instalação.");
            return;
        }
        AppState.wizard.city = city;
        AppState.wizard.neighborhood = neighborhood;
        AppState.wizard.environment = document.getElementById("wizard-environment")?.value || "";
        goToWizardStep(4);
    } else if (current === 4) {
        AppState.wizard.glassType = document.getElementById("wizard-glass-type")?.value || "";
        AppState.wizard.finish = document.getElementById("wizard-finish")?.value || "";
        AppState.wizard.quantity = parseInt(document.getElementById("wizard-qty")?.value || "1", 10);
        AppState.wizard.notes = document.getElementById("wizard-notes")?.value.trim() || "";
        goToWizardStep(5);
    }
}

function calculateEstimate() {
    // Estimativa de preço desativada — orçamento final sob consulta técnica
    const widthRaw = parseFloat(document.getElementById("wizard-width")?.value || "0");
    const heightRaw = parseFloat(document.getElementById("wizard-height")?.value || "0");
    const isCm = AppState.wizard.unit === "cm";
    const widthM = isCm ? widthRaw / 100 : widthRaw;
    const heightM = isCm ? heightRaw / 100 : heightRaw;
    const areaM2 = widthM * heightM;
    AppState.wizard.calculatedArea = areaM2 > 0 ? areaM2.toFixed(2) : 0;
    AppState.wizard.estimatedPrice = null;
}

function updateWizardSummary() {
    const container = document.getElementById("wizard-summary-review");
    if (!container) return;

    const p = AppState.wizard.selectedProduct;
    const isUnknown = AppState.wizard.unknownDimensions;
    const w = document.getElementById("wizard-width")?.value;
    const h = document.getElementById("wizard-height")?.value;
    const unit = AppState.wizard.unit;

    let measuresText = isUnknown 
        ? "Medição no local com a equipe" 
        : `${w} × ${h} ${unit} (aprox. ${AppState.wizard.calculatedArea} m²)`;

    container.innerHTML = `
        <div class="summary-card">
            <div class="summary-item">
                <span class="summary-label">Produto Selecionado:</span>
                <span class="summary-val font-weight-bold">${p ? p.name : "Sob medida"}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">Medidas Estimadas:</span>
                <span class="summary-val">${measuresText}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">Local de Instalação:</span>
                <span class="summary-val">${AppState.wizard.city}${AppState.wizard.neighborhood ? ` — ${AppState.wizard.neighborhood}` : ""}</span>
            </div>
            ${AppState.wizard.environment ? `
            <div class="summary-item">
                <span class="summary-label">Ambiente:</span>
                <span class="summary-val">${AppState.wizard.environment}</span>
            </div>
            ` : ""}
            <div class="summary-item">
                <span class="summary-label">Vidro Especificado:</span>
                <span class="summary-val">${AppState.wizard.glassType}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">Acabamento das Ferragens:</span>
                <span class="summary-val">${AppState.wizard.finish}</span>
            </div>
            ${AppState.wizard.estimatedPrice ? `
            <div class="summary-estimate-badge">
                <small>Estimativa Preliminar de Materiais:</small>
                <strong>${AppState.wizard.estimatedPrice}</strong>
                <span class="badge-disclaimer">*Estimativa aproximada para referência. O valor final será confirmado após análise detalhada.</span>
            </div>
            ` : ""}
        </div>
    `;
}

function handleWhatsAppSubmit() {
    const nameInput = document.getElementById("wizard-name");
    const waInput = document.getElementById("wizard-whatsapp");
    const emailInput = document.getElementById("wizard-email");

    const name = nameInput ? nameInput.value.trim() : "";
    const clientWa = waInput ? waInput.value.trim() : "";
    const clientEmail = emailInput ? emailInput.value.trim() : "";

    if (!name) {
        alert("Por favor, digite seu nome.");
        if (nameInput) nameInput.focus();
        return;
    }

    if (!clientWa || clientWa.length < 10) {
        alert("Por favor, digite um número de WhatsApp válido para que possamos responder seu orçamento.");
        if (waInput) waInput.focus();
        return;
    }

    AppState.wizard.clientName = name;
    AppState.wizard.clientWhatsapp = clientWa;
    AppState.wizard.clientEmail = clientEmail;

    const prod = AppState.wizard.selectedProduct;
    const isUnknown = AppState.wizard.unknownDimensions;
    const w = document.getElementById("wizard-width")?.value;
    const h = document.getElementById("wizard-height")?.value;
    const unit = AppState.wizard.unit;

    let measuresStr = isUnknown 
        ? "Não sei as medidas (solicito orientação / visita técnica para medição)" 
        : `${w} × ${h} ${unit} (Área aprox: ${AppState.wizard.calculatedArea} m²)`;

    let message = `Olá! Gostaria de solicitar um orçamento com a *Vidraçaria Pantanal*.\n\n`;
    message += `📋 *DADOS DO PROJETO:*\n`;
    message += `• *Produto:* ${prod ? prod.name : "Projeto sob medida"}\n`;
    message += `• *Medidas:* ${measuresStr}\n`;
    message += `• *Cidade:* ${AppState.wizard.city} - MT\n`;
    if (AppState.wizard.neighborhood) {
        message += `• *Bairro:* ${AppState.wizard.neighborhood}\n`;
    }
    if (AppState.wizard.environment) {
        message += `• *Ambiente:* ${AppState.wizard.environment}\n`;
    }
    message += `• *Vidro:* ${AppState.wizard.glassType}\n`;
    message += `• *Acabamento:* ${AppState.wizard.finish}\n`;
    if (AppState.wizard.quantity > 1) {
        message += `• *Quantidade:* ${AppState.wizard.quantity} peças\n`;
    }
    if (AppState.wizard.notes) {
        message += `• *Observações:* ${AppState.wizard.notes}\n`;
    }
    if (AppState.wizard.estimatedPrice) {
        message += `• *Estimativa calculada no site:* ${AppState.wizard.estimatedPrice}\n`;
    }

    message += `\n👤 *MEUS DADOS:*\n`;
    message += `• *Nome:* ${name}\n`;
    message += `• *WhatsApp:* ${clientWa}\n`;
    if (clientEmail) {
        message += `• *E-mail:* ${clientEmail}\n`;
    }

    message += `\nGostaria de receber mais informações e o orçamento detalhado. Obrigado!`;

    const encodedMsg = encodeURIComponent(message);
    const targetUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodedMsg}`;

    window.open(targetUrl, "_blank");
}

// --------------------------------------------------------------------------
// 12. MÁSCARA TELEFÔNICA BRASILEIRA (CELULAR COM DDD)
// --------------------------------------------------------------------------
function initPhoneMask() {
    const waInputs = document.querySelectorAll("input[type='tel']");
    waInputs.forEach(input => {
        input.addEventListener("input", (e) => {
            let v = e.target.value.replace(/\D/g, "");
            if (v.length > 11) v = v.substring(0, 11);

            if (v.length > 6) {
                e.target.value = `(${v.substring(0, 2)}) ${v.substring(2, 7)}-${v.substring(7)}`;
            } else if (v.length > 2) {
                e.target.value = `(${v.substring(0, 2)}) ${v.substring(2)}`;
            } else if (v.length > 0) {
                e.target.value = `(${v}`;
            }
        });
    });
}

// --------------------------------------------------------------------------
// 13. MENU MOBILE E NAVEGAÇÃO SUAVE
// --------------------------------------------------------------------------
function initMobileNav() {
    const toggleBtn = document.getElementById("mobile-menu-toggle");
    const drawer = document.getElementById("mobile-drawer");
    const closeBtn = document.getElementById("drawer-close-btn");
    const drawerOverlay = document.getElementById("drawer-overlay");

    function openDrawer() {
        if (drawer) drawer.classList.add("active");
        if (drawerOverlay) drawerOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeDrawer() {
        if (drawer) drawer.classList.remove("active");
        if (drawerOverlay) drawerOverlay.classList.remove("active");
        document.body.style.overflow = "";
    }

    if (toggleBtn) toggleBtn.addEventListener("click", openDrawer);
    if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener("click", closeDrawer);

    document.querySelectorAll(".drawer-link").forEach(link => {
        link.addEventListener("click", () => {
            closeDrawer();
        });
    });

    const header = document.querySelector(".site-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            header?.classList.add("scrolled");
        } else {
            header?.classList.remove("scrolled");
        }
    });
}

function scrollToSection(sectionId) {
    const el = document.getElementById(sectionId);
    if (el) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
}

// --------------------------------------------------------------------------
// 14. EFEITO DE REFLEXO ESPECULAR DE VIDRO (GLASS LIGHT ENGINE)
// Cria feixes de luz que reagem dinamicamente à posição do cursor nos cartões
// --------------------------------------------------------------------------
function initGlassReflections() {
    // Apenas em desktops com ponteiro fino (evita processamento em touch screens)
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        const cards = document.querySelectorAll(".product-card, .diff-card, .project-card");
        cards.forEach(card => {
            card.addEventListener("mousemove", (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            });
        });
    }
}

// --------------------------------------------------------------------------
// 15. POLÍTICA DE PRIVACIDADE MODAL
// --------------------------------------------------------------------------
function openPrivacyModal() {
    const modal = document.getElementById("privacy-modal");
    if (modal) {
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

function closePrivacyModal() {
    const modal = document.getElementById("privacy-modal");
    if (modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    }
}
