import { useState } from "react";
import { motion } from "framer-motion";
import { Hero } from "../sections/Hero";
import { WhatIsReact } from "../sections/WhatIsReact";
import { WhyUseReact } from "../sections/WhyUseReact";
import { WhoUsesReact } from "../sections/WhoUsesReact";
import { ModernStack } from "../sections/ModernStack";
import {
  Facebook,
  Instagram,
  Film,
  Home,
  MessageCircle,
  ShoppingCart,
  Car,
  Pin,
  MessageSquareText,
  Server,
  Box,
  Database,
  Smartphone,
  Network,
  Package,
  Settings,
  Webhook,
  FileCode,
  Layout,
  Workflow,
  Code2,
  GitBranch,
  Zap,
  GitPullRequest,
} from "lucide-react";

const translations = {
  en: {
    hero: {
      title: "React: The Future of Web Development",
      subtitle: "A comprehensive guide to the most popular JavaScript library",
    },
    whatIsReact: {
      title: "What is React?",
      description:
        "React is a JavaScript library for building user interfaces, particularly single-page applications. It's maintained by Meta and a community of individual developers and companies.",
      evolution: "React's Evolution",
      timeline: [
        {
          year: "2011",
          title: "Birth of React",
          description: "Created by Jordan Walke at Facebook",
          icon: <Code2 className="w-6 h-6 text-blue-400" />,
        },
        {
          year: "2013",
          title: "Open Source",
          description: "Released to the public",
          icon: <GitBranch className="w-6 h-6 text-purple-400" />,
        },
        {
          year: "2015",
          title: "React Native",
          description: "Mobile development platform",
          icon: <Smartphone className="w-6 h-6 text-blue-400" />,
        },
        {
          year: "2019",
          title: "Concurrent Mode",
          description: "New rendering model",
          icon: <Zap className="w-6 h-6 text-purple-400" />,
        },
        {
          year: "2025",
          title: "Future",
          description: "Continued innovation",
          icon: <GitPullRequest className="w-6 h-6 text-blue-400" />,
        },
      ],
      beforeReact: "Before React",
      afterReact: "After React",
      problems: [
        "Complex DOM manipulation",
        "Poor performance with large apps",
        "Difficult state management",
        "Limited reusability",
      ],
      solutions: [
        "Declarative UI updates",
        "Virtual DOM optimization",
        "Predictable state flow",
        "Component-based architecture",
      ],
    },
    whyUseReact: {
      title: "Why Use React?",
      description:
        "React offers a powerful and flexible way to build modern web applications with a focus on performance and developer experience.",
      developerBenefits: "Developer Benefits",
      businessBenefits: "Business Benefits",
      frameworkComparison: "Framework Comparison",
    },
    whoUsesReact: {
      title: "Who Uses React?",
      description:
        "React is trusted by some of the world's largest companies and most innovative startups.",
      companies: [
        {
          name: "Meta (Facebook)",
          description:
            "The company behind React, using it across their entire platform",
          scale: "2.9B+ users",
          icon: <Facebook className="w-8 h-8 text-blue-400" />,
        },
        {
          name: "Instagram",
          description: "Built entirely with React, serving millions of users",
          scale: "1B+ users",
          icon: <Instagram className="w-8 h-8 text-purple-400" />,
        },
        {
          name: "Netflix",
          description: "Uses React for their streaming platform interface",
          scale: "200M+ users",
          icon: <Film className="w-8 h-8 text-red-400" />,
        },
        {
          name: "Airbnb",
          description: "Powers their entire web platform with React",
          scale: "150M+ users",
          icon: <Home className="w-8 h-8 text-pink-400" />,
        },
        {
          name: "Discord",
          description: "Built their web client using React",
          scale: "150M+ users",
          icon: <MessageCircle className="w-8 h-8 text-indigo-400" />,
        },
        {
          name: "Shopify",
          description: "Uses React for their admin interface",
          scale: "1M+ merchants",
          icon: <ShoppingCart className="w-8 h-8 text-green-400" />,
        },
        {
          name: "Uber",
          description: "Powers their web platform with React",
          scale: "100M+ users",
          icon: <Car className="w-8 h-8 text-black" />,
        },
        {
          name: "Pinterest",
          description: "Uses React for their web interface",
          scale: "450M+ users",
          icon: <Pin className="w-8 h-8 text-red-400" />,
        },
        {
          name: "WhatsApp Web",
          description: "Built with React for cross-platform compatibility",
          scale: "2B+ users",
          icon: <MessageSquareText className="w-8 h-8 text-green-400" />,
        },
      ],
      additionalCompanies: [
        "Microsoft",
        "Amazon",
        "Twitter",
        "Reddit",
        "Dropbox",
        "Atlassian",
        "Cloudflare",
        "PayPal",
        "Salesforce",
        "Spotify",
        "Twitch",
        "GitHub",
        "Notion",
        "Figma",
        "Linear",
      ],
    },
    modernStack: {
      title: "React in the Modern Development Stack",
      description:
        "React is at the center of a powerful ecosystem of tools and technologies that make modern web development more efficient and enjoyable.",
      layers: [
        {
          title: "Core Layer",
          description: "The foundation of React development",
          items: [
            {
              name: "JSX Components",
              description: "Declarative UI building blocks",
              icon: <FileCode className="w-8 h-8 text-blue-400" />,
              link: "https://react.dev/learn/writing-markup-with-jsx",
            },
            {
              name: "React Hooks",
              description: "State and lifecycle management",
              icon: <Workflow className="w-8 h-8 text-purple-400" />,
              link: "https://react.dev/learn/hooks-overview",
            },
            {
              name: "Virtual DOM",
              description: "Efficient UI updates",
              icon: <Layout className="w-8 h-8 text-blue-400" />,
              link: "https://react.dev/learn/render-and-commit",
            },
          ],
        },
        {
          title: "Tooling Layer",
          description: "Essential development tools and libraries",
          items: [
            {
              name: "Build Tools",
              description: "Next.js, Vite, Webpack",
              icon: <Package className="w-8 h-8 text-purple-400" />,
              link: "https://nextjs.org/",
            },
            {
              name: "State Management",
              description: "Redux, Zustand, Recoil",
              icon: <Database className="w-8 h-8 text-blue-400" />,
              link: "https://redux.js.org/",
            },
            {
              name: "Styling",
              description: "Tailwind CSS, Styled Components",
              icon: <Box className="w-8 h-8 text-purple-400" />,
              link: "https://tailwindcss.com/",
            },
            {
              name: "Routing",
              description: "React Router, Next.js Router",
              icon: <Network className="w-8 h-8 text-blue-400" />,
              link: "https://reactrouter.com/",
            },
          ],
        },
        {
          title: "Data & Backend Layer",
          description: "Backend integration and data management",
          items: [
            {
              name: "API Integration",
              description: "GraphQL, REST, tRPC",
              icon: <Webhook className="w-8 h-8 text-purple-400" />,
              link: "https://graphql.org/",
            },
            {
              name: "Backend Services",
              description: "Node.js, Express, Databases",
              icon: <Server className="w-8 h-8 text-blue-400" />,
              link: "https://nodejs.org/",
            },
          ],
        },
        {
          title: "Mobile & DevOps Layer",
          description: "Cross-platform development and deployment",
          items: [
            {
              name: "Mobile Development",
              description: "React Native, Expo",
              icon: <Smartphone className="w-8 h-8 text-purple-400" />,
              link: "https://reactnative.dev/",
            },
            {
              name: "DevOps & Hosting",
              description: "Vercel, Netlify, AWS",
              icon: <Settings className="w-8 h-8 text-blue-400" />,
              link: "https://vercel.com/",
            },
          ],
        },
      ],
    },
    cta: {
      title: "Ready to get started?",
      subtitle:
        "Join the React community and start building your next project with Vite",
      button: "Get Started with Vite",
    },
  },
  pt: {
    hero: {
      title: "React: O Futuro do Desenvolvimento Web",
      subtitle: "Um guia completo da biblioteca JavaScript mais popular",
    },
    whatIsReact: {
      title: "O que é React?",
      description:
        "React é uma biblioteca JavaScript para construir interfaces de usuário, especialmente aplicações de página única. É mantida pela Meta e uma comunidade de desenvolvedores e empresas.",
      evolution: "Evolução do React",
      timeline: [
        {
          year: "2011",
          title: "Nascimento do React",
          description: "Criado por Jordan Walke no Facebook",
          icon: <Code2 className="w-6 h-6 text-blue-400" />,
        },
        {
          year: "2013",
          title: "Código Aberto",
          description: "Lançado ao público",
          icon: <GitBranch className="w-6 h-6 text-purple-400" />,
        },
        {
          year: "2015",
          title: "React Native",
          description: "Plataforma de desenvolvimento mobile",
          icon: <Smartphone className="w-6 h-6 text-blue-400" />,
        },
        {
          year: "2019",
          title: "Modo Concorrente",
          description: "Novo modelo de renderização",
          icon: <Zap className="w-6 h-6 text-purple-400" />,
        },
        {
          year: "2025",
          title: "Futuro",
          description: "Inovação contínua",
          icon: <GitPullRequest className="w-6 h-6 text-blue-400" />,
        },
      ],
      beforeReact: "Antes do React",
      afterReact: "Depois do React",
      problems: [
        "Manipulação complexa do DOM",
        "Baixo desempenho com apps grandes",
        "Gerenciamento de estado difícil",
        "Reutilização limitada",
      ],
      solutions: [
        "Atualizações declarativas de UI",
        "Otimização com Virtual DOM",
        "Fluxo de estado previsível",
        "Arquitetura baseada em componentes",
      ],
    },
    whyUseReact: {
      title: "Por que usar React?",
      description:
        "React oferece uma maneira poderosa e flexível de construir aplicações web modernas com foco em performance e experiência do desenvolvedor.",
      developerBenefits: "Benefícios para Desenvolvedores",
      businessBenefits: "Benefícios para Negócios",
      frameworkComparison: "Comparação de Frameworks",
    },
    whoUsesReact: {
      title: "Quem usa React?",
      description:
        "React é confiado por algumas das maiores empresas e startups mais inovadoras do mundo.",
      companies: [
        {
          name: "Meta (Facebook)",
          description:
            "A empresa por trás do React, usando em toda sua plataforma",
          scale: "2.9B+ usuários",
          icon: <Facebook className="w-8 h-8 text-blue-400" />,
        },
        {
          name: "Instagram",
          description:
            "Construído inteiramente com React, servindo milhões de usuários",
          scale: "1B+ usuários",
          icon: <Instagram className="w-8 h-8 text-purple-400" />,
        },
        {
          name: "Netflix",
          description: "Usa React para sua interface de streaming",
          scale: "200M+ usuários",
          icon: <Film className="w-8 h-8 text-red-400" />,
        },
        {
          name: "Airbnb",
          description: "Alimenta toda sua plataforma web com React",
          scale: "150M+ usuários",
          icon: <Home className="w-8 h-8 text-pink-400" />,
        },
        {
          name: "Discord",
          description: "Construiu seu cliente web usando React",
          scale: "150M+ usuários",
          icon: <MessageCircle className="w-8 h-8 text-indigo-400" />,
        },
        {
          name: "Shopify",
          description: "Usa React para sua interface administrativa",
          scale: "1M+ comerciantes",
          icon: <ShoppingCart className="w-8 h-8 text-green-400" />,
        },
        {
          name: "Uber",
          description: "Alimenta sua plataforma web com React",
          scale: "100M+ usuários",
          icon: <Car className="w-8 h-8 text-black" />,
        },
        {
          name: "Pinterest",
          description: "Usa React para sua interface web",
          scale: "450M+ usuários",
          icon: <Pin className="w-8 h-8 text-red-400" />,
        },
        {
          name: "WhatsApp Web",
          description:
            "Construído com React para compatibilidade multiplataforma",
          scale: "2B+ usuários",
          icon: <MessageSquareText className="w-8 h-8 text-green-400" />,
        },
      ],
      additionalCompanies: [
        "Microsoft",
        "Amazon",
        "Twitter",
        "Reddit",
        "Dropbox",
        "Atlassian",
        "Cloudflare",
        "PayPal",
        "Salesforce",
        "Spotify",
        "Twitch",
        "GitHub",
        "Notion",
        "Figma",
        "Linear",
      ],
    },
    modernStack: {
      title: "React no Stack de Desenvolvimento Moderno",
      description:
        "React está no centro de um poderoso ecossistema de ferramentas e tecnologias que tornam o desenvolvimento web moderno mais eficiente e agradável.",
      layers: [
        {
          title: "Camada Core",
          description: "A fundação do desenvolvimento React",
          items: [
            {
              name: "Componentes JSX",
              description: "Blocos de construção declarativos de UI",
              icon: <FileCode className="w-8 h-8 text-blue-400" />,
              link: "https://react.dev/learn/writing-markup-with-jsx",
            },
            {
              name: "React Hooks",
              description: "Gerenciamento de estado e ciclo de vida",
              icon: <Workflow className="w-8 h-8 text-purple-400" />,
              link: "https://react.dev/learn/hooks-overview",
            },
            {
              name: "Virtual DOM",
              description: "Atualizações eficientes de UI",
              icon: <Layout className="w-8 h-8 text-blue-400" />,
              link: "https://react.dev/learn/render-and-commit",
            },
          ],
        },
        {
          title: "Camada de Ferramentas",
          description: "Ferramentas e bibliotecas essenciais",
          items: [
            {
              name: "Ferramentas de Build",
              description: "Next.js, Vite, Webpack",
              icon: <Package className="w-8 h-8 text-purple-400" />,
              link: "https://nextjs.org/",
            },
            {
              name: "Gerenciamento de Estado",
              description: "Redux, Zustand, Recoil",
              icon: <Database className="w-8 h-8 text-blue-400" />,
              link: "https://redux.js.org/",
            },
            {
              name: "Estilização",
              description: "Tailwind CSS, Styled Components",
              icon: <Box className="w-8 h-8 text-purple-400" />,
              link: "https://tailwindcss.com/",
            },
            {
              name: "Roteamento",
              description: "React Router, Next.js Router",
              icon: <Network className="w-8 h-8 text-blue-400" />,
              link: "https://reactrouter.com/",
            },
          ],
        },
        {
          title: "Camada de Dados e Backend",
          description: "Integração com backend e gerenciamento de dados",
          items: [
            {
              name: "Integração com API",
              description: "GraphQL, REST, tRPC",
              icon: <Webhook className="w-8 h-8 text-purple-400" />,
              link: "https://graphql.org/",
            },
            {
              name: "Serviços Backend",
              description: "Node.js, Express, Bancos de Dados",
              icon: <Server className="w-8 h-8 text-blue-400" />,
              link: "https://nodejs.org/",
            },
          ],
        },
        {
          title: "Camada Mobile e DevOps",
          description: "Desenvolvimento multiplataforma e deploy",
          items: [
            {
              name: "Desenvolvimento Mobile",
              description: "React Native, Expo",
              icon: <Smartphone className="w-8 h-8 text-purple-400" />,
              link: "https://reactnative.dev/",
            },
            {
              name: "DevOps e Hosting",
              description: "Vercel, Netlify, AWS",
              icon: <Settings className="w-8 h-8 text-blue-400" />,
              link: "https://vercel.com/",
            },
          ],
        },
      ],
    },
    cta: {
      title: "Pronto para começar?",
      subtitle:
        "Junte-se à comunidade React e comece a construir o seu próximo projeto com Vite",
      button: "Comece com Vite",
    },
  },
};

export function Infographic() {
  const [language, setLanguage] = useState<"en" | "pt">("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Language Toggle Button */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onClick={toggleLanguage}
        className="fixed top-4 right-4 z-50 bg-gray-800/80 hover:bg-gray-700/80 text-white px-4 py-2 rounded-lg transition-colors"
      >
        {language === "en" ? "PT" : "EN"}
      </motion.button>

      {/* Hero Section */}
      <Hero title={t.hero.title} subtitle={t.hero.subtitle} />

      {/* What is React Section */}
      <WhatIsReact
        title={t.whatIsReact.title}
        description={t.whatIsReact.description}
        evolution={t.whatIsReact.evolution}
        timeline={t.whatIsReact.timeline}
        beforeReact={t.whatIsReact.beforeReact}
        afterReact={t.whatIsReact.afterReact}
        problems={t.whatIsReact.problems}
        solutions={t.whatIsReact.solutions}
      />

      {/* Why Use React Section */}
      <WhyUseReact
        title={t.whyUseReact.title}
        description={t.whyUseReact.description}
        developerBenefits={t.whyUseReact.developerBenefits}
        businessBenefits={t.whyUseReact.businessBenefits}
        frameworkComparison={t.whyUseReact.frameworkComparison}
      />

      {/* Who Uses React Section */}
      <WhoUsesReact
        title={t.whoUsesReact.title}
        description={t.whoUsesReact.description}
        companies={t.whoUsesReact.companies}
        additionalCompanies={t.whoUsesReact.additionalCompanies}
      />

      {/* Modern Stack Section */}
      <ModernStack
        title={t.modernStack.title}
        description={t.modernStack.description}
        layers={t.modernStack.layers}
      />

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              {t.cta.title}
            </h2>
            <p className="text-gray-300 text-lg mb-8">{t.cta.subtitle}</p>
            <button
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              onClick={() => window.open("https://vite.dev/", "_blank")}
            >
              {t.cta.button}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2"
          >
            <span className="text-gray-400">Created by</span>
            <a
              href="https://www.linkedin.com/in/pedro-palomo-ti/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              Pedro Palomo
            </a>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
