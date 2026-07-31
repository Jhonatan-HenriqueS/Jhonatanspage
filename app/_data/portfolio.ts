export const WHATSAPP_URL =
  "https://wa.me/5569993897171?text=Gostaria%20de%20me%20informar%20sobre%20seu%20trabalho";

export const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
] as const;

export type Project = {
  name: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
  tone: "paper" | "lavender" | "ink";
};

export const systems: Project[] = [
  {
    name: "Lumen Tasks",
    tagline: "Rotinas claras, tarefas em dia.",
    description:
      "Um sistema para organizar tarefas, categorias e recorrências sem transformar produtividade em mais uma complicação.",
    image: "/images/portfolio/lumen-tasks.png",
    alt: "Tela do Lumen Tasks com tarefas, rotinas e categorias em um painel azul-escuro",
    tone: "paper",
  },
  {
    name: "Jhovy",
    tagline: "O cardápio online encontra uma operação mais simples.",
    description:
      "Uma experiência digital para apresentar produtos com clareza e facilitar a rotina de restaurantes.",
    image: "/images/portfolio/jhovy-system.png",
    alt: "Cardápio digital do Jhovy exibindo categorias, pizzas, descrições e preços",
    tone: "lavender",
  },
  {
    name: "Finanças",
    tagline: "Entenda para onde seu dinheiro está indo.",
    description:
      "Organize despesas, categorias e histórico em uma visão direta, leve e fácil de acompanhar.",
    image: "/images/portfolio/financas-system.png",
    alt: "Painel do sistema Finanças com resumo de gastos, categorias e histórico de despesas",
    tone: "ink",
  },
];

export const landingPages = [
  {
    name: "ESE Tecnologia",
    image: "/images/portfolio/ese-landing-page.png",
    alt: "Landing page da ESE Tecnologia sobre monitoramento e rastreamento",
  },
  {
    name: "Jhovy",
    image: "/images/portfolio/jhovy-landing-page.png",
    alt: "Landing page do Jhovy para gestão de pedidos de restaurantes",
  },
] as const;

export const faqs = [
  {
    question: "Você cria apenas landing pages?",
    answer:
      "Não. O portfólio inclui páginas de vendas, sistemas web e soluções que podem integrar recursos de IA.",
  },
  {
    question: "Quanto custa um projeto?",
    answer:
      "O investimento depende do objetivo e da complexidade. Envie sua ideia pelo WhatsApp para contextualizar a necessidade.",
  },
  {
    question: "A página funciona bem no celular?",
    answer:
      "Sim. Responsividade, legibilidade e velocidade fazem parte da base técnica do projeto.",
  },
  {
    question: "O projeto recebe estrutura de SEO?",
    answer:
      "As páginas são desenvolvidas com semântica, metadados, performance e conteúdo rastreável como fundamentos técnicos.",
  },
  {
    question: "Como começo?",
    answer:
      "Explique o problema, o objetivo e o que sua empresa já possui. A conversa começa a partir desse contexto.",
  },
] as const;

// Variações reservadas para futuros testes de copy:
// "Código pensado para gerar oportunidades."
// "Seu negócio merece mais que presença digital."
