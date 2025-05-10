import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Cpu,
  Globe,
  LineChart,
  Rocket,
  Users,
  Clock,
  GitBranch,
  Zap,
  Layers,
  Code,
  GitPullRequest,
  TrendingUp,
  Download,
  MessageSquare,
  Briefcase,
  Facebook,
  Instagram,
  Film,
  Home,
  MessageCircle,
  ShoppingCart,
  Car,
  Pin,
  MessageSquareText,
  Building2,
  Cloud,
  FileDown,
  CreditCard,
  MessageSquareMore,
  Twitch,
  Twitter,
  GraduationCap,
  CheckSquare,
  FileText,
  Server,
  Box,
  Database,
  Smartphone,
  Terminal,
  Network,
  Package,
  Settings,
  Webhook,
  FileCode,
  Layout,
  Workflow,
} from "lucide-react";

const translations = {
  en: {
    hero: {
      title: "🚀 The Future of Development: React Explained",
      subtitle: "How the world's most popular UI library changed the game",
    },
    whatIsReact: {
      title: "What is React?",
      description:
        "A revolutionary JavaScript library created by Facebook to solve real problems in building complex, fast, and maintainable user interfaces.",
      evolution: "React's Evolution",
      timeline: [
        {
          year: "2011",
          title: "First Prototype",
          description: "Jordan Walke creates 'FaxJS' inside Facebook",
          icon: <Code2 className="w-6 h-6" />,
        },
        {
          year: "2013",
          title: "Open Source Release",
          description: "React is open-sourced at JSConf US",
          icon: <GitBranch className="w-6 h-6" />,
        },
        {
          year: "2015",
          title: "React Native & JSX",
          description: "Mobile development and JSX adoption",
          icon: <Globe className="w-6 h-6" />,
        },
        {
          year: "2020",
          title: "Modern Features",
          description: "React Hooks and Server Components",
          icon: <Zap className="w-6 h-6" />,
        },
        {
          year: "2025",
          title: "Industry Standard",
          description: "Used in millions of projects worldwide",
          icon: <GitPullRequest className="w-6 h-6" />,
        },
      ],
      beforeReact: "Before React",
      afterReact: "React's Solution",
      problems: [
        "Manual DOM manipulation",
        "Difficult state management",
        "UI logic scattered everywhere",
        "Poor performance on updates",
        "Spaghetti code in big projects",
      ],
      solutions: [
        "Virtual DOM for efficient updates",
        "Component-based + Hooks for state",
        "Encapsulated components (JSX)",
        "Batching + diffing updates",
        "Modular, declarative structure",
      ],
    },
    whyUseReact: {
      title: "Why Developers and Companies Choose React",
      description:
        "React isn't just popular by chance — it's loved by developers and adopted by tech giants because it solves real problems, boosts productivity, and scales beautifully.",
      developerBenefits: "Developer-Friendly: Build Faster, Smarter",
      businessBenefits: "Why Businesses Trust React",
      frameworkComparison: "React vs Other Frameworks",
    },
    growth: {
      title: "React's Growth Over the Years",
      description:
        "From a niche internal tool at Facebook to the world's most dominant front-end library, backed by data from developers, recruiters, and open-source platforms.",
    },
    whoUses: {
      title: "Who Uses React?",
      description:
        "From social media giants to innovative startups, React powers some of the world's most popular applications",
    },
    modernStack: {
      title: "React in the Modern Development Stack",
      description:
        "React shines brightest when it's part of a full, modern development stack — powering web, mobile, and cross-platform UIs while seamlessly integrating with tools, APIs, and backends.",
    },
    cta: {
      title:
        "React isn't just a library. It's a movement that redefined UI development.",
      subtitle:
        "Join millions of developers building the future of web applications",
      button: "Get Started with React",
    },
  },
  pt: {
    hero: {
      title: "🚀 O Futuro do Desenvolvimento: React Explicado",
      subtitle: "Como a biblioteca de UI mais popular do mundo mudou o jogo",
    },
    whatIsReact: {
      title: "O que é React?",
      description:
        "Uma biblioteca JavaScript revolucionária criada pelo Facebook para resolver problemas reais na construção de interfaces de usuário complexas, rápidas e de fácil manutenção.",
      evolution: "Evolução do React",
      timeline: [
        {
          year: "2011",
          title: "Primeiro Protótipo",
          description: "Jordan Walke cria 'FaxJS' dentro do Facebook",
          icon: <Code2 className="w-6 h-6" />,
        },
        {
          year: "2013",
          title: "Lançamento Open Source",
          description: "React é lançado como open source no JSConf US",
          icon: <GitBranch className="w-6 h-6" />,
        },
        {
          year: "2015",
          title: "React Native & JSX",
          description: "Desenvolvimento mobile e adoção do JSX",
          icon: <Globe className="w-6 h-6" />,
        },
        {
          year: "2020",
          title: "Recursos Modernos",
          description: "React Hooks e Server Components",
          icon: <Zap className="w-6 h-6" />,
        },
        {
          year: "2025",
          title: "Padrão da Indústria",
          description: "Usado em milhões de projetos no mundo todo",
          icon: <GitPullRequest className="w-6 h-6" />,
        },
      ],
      beforeReact: "Antes do React",
      afterReact: "Solução do React",
      problems: [
        "Manipulação manual do DOM",
        "Gerenciamento de estado difícil",
        "Lógica de UI espalhada",
        "Baixo desempenho em atualizações",
        "Código confuso em projetos grandes",
      ],
      solutions: [
        "Virtual DOM para atualizações eficientes",
        "Componentes + Hooks para estado",
        "Componentes encapsulados (JSX)",
        "Atualizações em lote e diffing",
        "Estrutura modular e declarativa",
      ],
    },
    whyUseReact: {
      title: "Por que Desenvolvedores e Empresas Escolhem React",
      description:
        "O React não é popular por acaso — é amado pelos desenvolvedores e adotado por gigantes da tecnologia porque resolve problemas reais, aumenta a produtividade e escala perfeitamente.",
      developerBenefits:
        "Amigável para Desenvolvedores: Construa Mais Rápido e Melhor",
      businessBenefits: "Por que as Empresas Confiam no React",
      frameworkComparison: "React vs Outros Frameworks",
    },
    growth: {
      title: "Crescimento do React ao Longo dos Anos",
      description:
        "De uma ferramenta interna do Facebook à biblioteca front-end mais dominante do mundo, respaldada por dados de desenvolvedores, recrutadores e plataformas open source.",
    },
    whoUses: {
      title: "Quem Usa React?",
      description:
        "De gigantes das redes sociais a startups inovadoras, o React impulsiona algumas das aplicações mais populares do mundo",
    },
    modernStack: {
      title: "React na Stack Moderna de Desenvolvimento",
      description:
        "O React brilha mais quando faz parte de uma stack moderna completa — alimentando UIs web, mobile e multiplataforma enquanto se integra perfeitamente com ferramentas, APIs e backends.",
    },
    cta: {
      title:
        "React não é apenas uma biblioteca. É um movimento que redefiniu o desenvolvimento de UI.",
      subtitle:
        "Junte-se a milhões de desenvolvedores construindo o futuro das aplicações web",
      button: "Comece com React",
    },
  },
};

export function Infographic() {
  const [language, setLanguage] = useState<"en" | "pt">("en");
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "pt" : "en"));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Language Toggle Button */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onClick={toggleLanguage}
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors text-sm font-medium"
      >
        {language === "en" ? "PT" : "EN"}
      </motion.button>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-purple-500/10 to-transparent" />
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              {t.hero.title}
            </h1>
            <p className="text-xl text-gray-300">{t.hero.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* What is React Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              {t.whatIsReact.title}
            </h2>
            <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
              {t.whatIsReact.description}
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              {t.whatIsReact.evolution}
            </h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500" />
              <div className="space-y-12">
                {t.whatIsReact.timeline.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div
                      className={`w-1/2 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}
                    >
                      <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                        <div className="flex items-center gap-4 mb-2">
                          {milestone.icon}
                          <span className="text-blue-400 font-bold">
                            {milestone.year}
                          </span>
                        </div>
                        <h4 className="text-xl font-semibold mb-2">
                          {milestone.title}
                        </h4>
                        <p className="text-gray-400">{milestone.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Problem vs Solution */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-6">
                {t.whatIsReact.beforeReact}
              </h3>
              <div className="space-y-4">
                {t.whatIsReact.problems.map((problem, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    {problem}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-6">
                {t.whatIsReact.afterReact}
              </h3>
              <div className="space-y-4">
                {t.whatIsReact.solutions.map((solution, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    {solution}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Core Features */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Layers className="w-8 h-8 text-blue-400" />,
                title: "Component-based",
                description: "Build UI like Lego blocks",
              },
              {
                icon: <Code className="w-8 h-8 text-purple-400" />,
                title: "JSX Syntax",
                description: "Write HTML in JavaScript",
              },
              {
                icon: <Cpu className="w-8 h-8 text-blue-400" />,
                title: "Virtual DOM",
                description: "Fast, efficient re-rendering",
              },
              {
                icon: <ArrowRight className="w-8 h-8 text-purple-400" />,
                title: "Unidirectional Flow",
                description: "Predictable state updates",
              },
              {
                icon: <Zap className="w-8 h-8 text-blue-400" />,
                title: "React Hooks",
                description: "Cleaner function components",
              },
              {
                icon: <Globe className="w-8 h-8 text-purple-400" />,
                title: "Strong Ecosystem",
                description: "Works with Redux, Next.js, React Native",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Use React Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              {t.whyUseReact.title}
            </h2>
            <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
              {t.whyUseReact.description}
            </p>
          </motion.div>

          {/* Developer Benefits */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              {t.whyUseReact.developerBenefits}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Layers className="w-8 h-8 text-blue-400" />,
                  title: "Component-Based Architecture",
                  description:
                    "Break UIs into small, reusable pieces with clean separation of concerns",
                },
                {
                  icon: <Code className="w-8 h-8 text-purple-400" />,
                  title: "Declarative Syntax",
                  description:
                    "Write what your UI should look like, and React handles the updates",
                },
                {
                  icon: <Zap className="w-8 h-8 text-blue-400" />,
                  title: "Virtual DOM",
                  description:
                    "Compare virtual changes before touching the real DOM for better performance",
                },
                {
                  icon: <Globe className="w-8 h-8 text-purple-400" />,
                  title: "Rich Ecosystem",
                  description:
                    "Huge selection of libraries and easy integration with backend tools",
                },
                {
                  icon: <Users className="w-8 h-8 text-blue-400" />,
                  title: "Strong Community",
                  description:
                    "20M+ developers worldwide with thousands of open-source projects",
                },
                {
                  icon: <GitBranch className="w-8 h-8 text-purple-400" />,
                  title: "Cross-Platform",
                  description:
                    "One codebase for web and mobile via React Native",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors"
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Framework Comparison */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              {t.whyUseReact.frameworkComparison}
            </h3>
            <div className="overflow-x-auto">
              <div className="min-w-[800px] bg-gray-800/50 rounded-lg border border-gray-700">
                <div className="grid grid-cols-4 gap-4 p-6">
                  <div className="font-semibold text-lg">Feature</div>
                  <div className="text-center font-semibold text-lg text-blue-400">
                    React
                  </div>
                  <div className="text-center font-semibold text-lg">
                    Angular
                  </div>
                  <div className="text-center font-semibold text-lg">Vue</div>

                  {[
                    ["Type", "Library", "Framework", "Framework"],
                    ["Size", "~40 KB", "~500 KB+", "~80 KB"],
                    ["Flexibility", "High", "Moderate", "High"],
                    ["Learning Curve", "Easy-Medium", "Steep", "Easy"],
                    ["Maintained by", "Meta", "Google", "Community"],
                    ["Mobile Support", "React Native", "Ionic", "NativeScript"],
                  ].map((row, index) => (
                    <React.Fragment key={index}>
                      <div className="py-3 ">{row[0]}</div>
                      <div className="py-3 text-center text-blue-400">
                        {row[1]}
                      </div>
                      <div className="py-3 text-center">{row[2]}</div>
                      <div className="py-3 text-center">{row[3]}</div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Business Benefits */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              {t.whyUseReact.businessBenefits}
            </h3>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-3">
                    <Rocket className="w-6 h-6 text-blue-400" />
                    Scalable for Large Apps
                  </h4>
                  <p className="text-gray-300">
                    Used by Facebook, Instagram, WhatsApp, Netflix — proven at
                    scale with billions of users.
                  </p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-3">
                    <GitBranch className="w-6 h-6 text-purple-400" />
                    Reusable Code
                  </h4>
                  <p className="text-gray-300">
                    Web + Mobile via React Native. Saves engineering time and
                    reduces development costs.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-3">
                    <Clock className="w-6 h-6 text-blue-400" />
                    Long-Term Stability
                  </h4>
                  <p className="text-gray-300">
                    Maintained by Meta with a clear roadmap. Backward
                    compatibility is a core principle.
                  </p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-3">
                    <Zap className="w-6 h-6 text-purple-400" />
                    Performance Optimized
                  </h4>
                  <p className="text-gray-300">
                    Lazy loading, memoization, and SSR via Next.js for better
                    SEO and user retention.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Quick Soundbites */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "One codebase, many platforms.",
              "Reusable components = fewer bugs.",
              "Virtual DOM = real performance.",
              "Backed by a tech giant, trusted by the world.",
              "React lets you think in UI.",
              "20M+ developers can't be wrong.",
            ].map((soundbite, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 rounded-lg border border-gray-700 text-center"
              >
                <p className="text-lg font-medium">{soundbite}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* React's Growth Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              {t.growth.title}
            </h2>
            <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
              {t.growth.description}
            </p>
          </motion.div>

          {/* GitHub Stars Growth */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-semibold">GitHub Stars Growth</h3>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { year: "2013", react: "1,500", angular: "9,000", vue: "500" },
                {
                  year: "2015",
                  react: "22,000",
                  angular: "25,000",
                  vue: "6,000",
                },
                {
                  year: "2017",
                  react: "70,000",
                  angular: "38,000",
                  vue: "52,000",
                },
                {
                  year: "2019",
                  react: "130,000",
                  angular: "56,000",
                  vue: "140,000",
                },
                {
                  year: "2022",
                  react: "180,000",
                  angular: "80,000",
                  vue: "200,000",
                },
                {
                  year: "2025*",
                  react: "220,000+",
                  angular: "95,000+",
                  vue: "220,000+",
                },
              ].map((data, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
                >
                  <div className="text-xl font-bold text-blue-400 mb-4">
                    {data.year}
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">React</span>
                      <span className="font-semibold">{data.react}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Angular</span>
                      <span>{data.angular}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Vue</span>
                      <span>{data.vue}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* NPM Downloads */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Download className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-semibold">Monthly NPM Downloads</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { year: "2015", react: "400K", angular: "600K", vue: "50K" },
                { year: "2017", react: "2.5M", angular: "1.2M", vue: "300K" },
                { year: "2019", react: "7.5M", angular: "1.7M", vue: "1.5M" },
                { year: "2022", react: "14M", angular: "2.5M", vue: "3.2M" },
                { year: "2025*", react: "22M+", angular: "3.5M+", vue: "5M+" },
              ].map((data, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
                >
                  <div className="text-xl font-bold text-purple-400 mb-4">
                    {data.year}
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-400">React</span>
                        <span className="font-semibold">{data.react}</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full">
                        <div
                          className="h-full bg-blue-500 rounded-full"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-400">Angular</span>
                        <span>{data.angular}</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full">
                        <div
                          className="h-full bg-purple-500 rounded-full"
                          style={{
                            width: `${Math.min(
                              (parseInt(data.angular.replace(/[^0-9]/g, "")) /
                                parseInt(data.react.replace(/[^0-9]/g, ""))) *
                                100,
                              100
                            )}%`,
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-400">Vue</span>
                        <span>{data.vue}</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full">
                        <div
                          className="h-full bg-green-500 rounded-full"
                          style={{
                            width: `${Math.min(
                              (parseInt(data.vue.replace(/[^0-9]/g, "")) /
                                parseInt(data.react.replace(/[^0-9]/g, ""))) *
                                100,
                              100
                            )}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stack Overflow Questions */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-semibold">
                Stack Overflow Questions
              </h3>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="grid grid-cols-5 gap-4">
                <div className="font-semibold">Year</div>
                <div className="text-center font-semibold text-blue-400">
                  React
                </div>
                <div className="text-center font-semibold">Angular</div>
                <div className="text-center font-semibold">Vue</div>
                <div className="text-center font-semibold">Total</div>

                {[
                  { year: "2015", react: "10K", angular: "35K", vue: "1K" },
                  { year: "2017", react: "35K", angular: "45K", vue: "8K" },
                  { year: "2019", react: "80K", angular: "65K", vue: "30K" },
                  { year: "2022", react: "140K", angular: "75K", vue: "55K" },
                  {
                    year: "2025*",
                    react: "180K+",
                    angular: "82K+",
                    vue: "70K+",
                  },
                ].map((data, index) => (
                  <React.Fragment key={index}>
                    <div className="py-3">{data.year}</div>
                    <div className="py-3 text-center text-blue-400">
                      {data.react}
                    </div>
                    <div className="py-3 text-center">{data.angular}</div>
                    <div className="py-3 text-center">{data.vue}</div>
                    <div className="py-3 text-center font-semibold">
                      {data.year === "2025*"
                        ? "332K+"
                        : `${
                            parseInt(data.react) +
                            parseInt(data.angular) +
                            parseInt(data.vue)
                          }K`}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Job Market Stats */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-semibold">
                React in the Job Market
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Job Postings",
                  value: "70%+",
                  description: "of JavaScript jobs mention React (2025 est.)",
                },
                {
                  title: "Top Skill",
                  value: "#1",
                  description: "Most in-demand web development skill",
                },
                {
                  title: "Average Salary",
                  value: "$110K-$160K",
                  description: "US React developer salary range",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 rounded-lg border border-gray-700 text-center"
                >
                  <h4 className="text-xl font-semibold mb-2">{stat.title}</h4>
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {stat.value}
                  </div>
                  <p className="text-gray-300">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Growth Soundbites */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "React's Rise: From Zero to Global Standard",
              "Charting the Framework Wars — React Leads the Pack",
              "React's Growth Isn't Just Hype. It's Data.",
            ].map((soundbite, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 rounded-lg border border-gray-700 text-center"
              >
                <p className="text-lg font-medium">{soundbite}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Uses React Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              {t.whoUses.title}
            </h2>
            <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
              {t.whoUses.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Meta (Facebook)",
                description:
                  "Created React and uses it across all their products",
                scale: "2B+ users",
                icon: <Facebook className="w-8 h-8 text-blue-400" />,
              },
              {
                name: "Instagram",
                description: "Entire web interface built with React",
                scale: "1B+ users",
                icon: <Instagram className="w-8 h-8 text-pink-400" />,
              },
              {
                name: "Netflix",
                description: "Uses React for their streaming platform",
                scale: "200M+ users",
                icon: <Film className="w-8 h-8 text-red-400" />,
              },
              {
                name: "Airbnb",
                description: "React powers their entire booking experience",
                scale: "150M+ users",
                icon: <Home className="w-8 h-8 text-rose-400" />,
              },
              {
                name: "Discord",
                description: "Real-time chat platform built with React",
                scale: "150M+ users",
                icon: <MessageCircle className="w-8 h-8 text-indigo-400" />,
              },
              {
                name: "Shopify",
                description: "E-commerce platform using React for storefronts",
                scale: "1M+ stores",
                icon: <ShoppingCart className="w-8 h-8 text-green-400" />,
              },
              {
                name: "Uber",
                description: "React powers their web dashboard",
                scale: "100M+ users",
                icon: <Car className="w-8 h-8 text-gray-400" />,
              },
              {
                name: "Pinterest",
                description: "Visual discovery engine built with React",
                scale: "450M+ users",
                icon: <Pin className="w-8 h-8 text-red-400" />,
              },
              {
                name: "WhatsApp Web",
                description: "React for their web client",
                scale: "2B+ users",
                icon: <MessageSquareText className="w-8 h-8 text-green-400" />,
              },
            ].map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  {company.icon}
                  <div>
                    <h3 className="text-xl font-semibold">{company.name}</h3>
                    <p className="text-sm text-gray-400">{company.scale}</p>
                  </div>
                </div>
                <p className="text-gray-300">{company.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Additional Companies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-semibold mb-6">And Many More...</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Microsoft", icon: <Building2 className="w-5 h-5" /> },
                {
                  name: "Atlassian",
                  icon: <CheckSquare className="w-5 h-5" />,
                },
                { name: "Cloudflare", icon: <Cloud className="w-5 h-5" /> },
                { name: "Dropbox", icon: <FileDown className="w-5 h-5" /> },
                { name: "PayPal", icon: <CreditCard className="w-5 h-5" /> },
                {
                  name: "Reddit",
                  icon: <MessageSquareMore className="w-5 h-5" />,
                },
                { name: "Twitch", icon: <Twitch className="w-5 h-5" /> },
                { name: "Twitter", icon: <Twitter className="w-5 h-5" /> },
                {
                  name: "Codecademy",
                  icon: <GraduationCap className="w-5 h-5" />,
                },
                { name: "Asana", icon: <CheckSquare className="w-5 h-5" /> },
                { name: "Notion", icon: <FileText className="w-5 h-5" /> },
                { name: "Vercel", icon: <Server className="w-5 h-5" /> },
              ].map((company, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-gray-800/50 rounded-full text-gray-300 border border-gray-700 flex items-center gap-2"
                >
                  {company.icon}
                  {company.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* React in Modern Stack Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              {t.modernStack.title}
            </h2>
            <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
              {t.modernStack.description}
            </p>
          </motion.div>

          {/* Core Layer */}
          <div className="relative max-w-4xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-8 rounded-2xl border border-gray-700 text-center"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <Box className="w-12 h-12 text-blue-400" />
                <h3 className="text-2xl font-bold">React Core</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <FileCode className="w-6 h-6" />,
                    text: "JSX Components",
                    link: "https://react.dev/learn",
                  },
                  {
                    icon: <Workflow className="w-6 h-6" />,
                    text: "React Hooks",
                    link: "https://react.dev/learn/hooks-overview",
                  },
                  {
                    icon: <Cpu className="w-6 h-6" />,
                    text: "Virtual DOM",
                    link: "https://react.dev/learn/render-and-commit",
                  },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 justify-center hover:text-blue-400 transition-colors"
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Tooling Layer */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              {
                title: "Build Tools",
                items: [
                  { name: "Next.js", link: "https://nextjs.org/learn" },
                  { name: "Vite", link: "https://vitejs.dev/guide/" },
                  { name: "Webpack", link: "https://webpack.js.org/concepts/" },
                ],
                icon: <Package className="w-8 h-8 text-blue-400" />,
              },
              {
                title: "State Management",
                items: [
                  {
                    name: "Redux",
                    link: "https://redux.js.org/introduction/getting-started",
                  },
                  {
                    name: "Zustand",
                    link: "https://docs.pmnd.rs/zustand/getting-started/introduction",
                  },
                  {
                    name: "Recoil",
                    link: "https://recoiljs.org/docs/introduction/getting-started",
                  },
                ],
                icon: <Database className="w-8 h-8 text-purple-400" />,
              },
              {
                title: "Styling",
                items: [
                  {
                    name: "Tailwind CSS",
                    link: "https://tailwindcss.com/docs/installation",
                  },
                  {
                    name: "Styled Components",
                    link: "https://styled-components.com/docs/basics#getting-started",
                  },
                  {
                    name: "CSS Modules",
                    link: "https://github.com/css-modules/css-modules",
                  },
                ],
                icon: <Layout className="w-8 h-8 text-green-400" />,
              },
              {
                title: "Routing",
                items: [
                  {
                    name: "React Router",
                    link: "https://reactrouter.com/en/main/start/overview",
                  },
                  {
                    name: "Next.js Router",
                    link: "https://nextjs.org/docs/routing/introduction",
                  },
                  {
                    name: "TanStack Router",
                    link: "https://tanstack.com/router/latest/docs/framework/react/overview",
                  },
                ],
                icon: <Network className="w-8 h-8 text-yellow-400" />,
              },
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
              >
                <div className="flex items-center gap-3 mb-4">
                  {tool.icon}
                  <h3 className="text-xl font-semibold">{tool.title}</h3>
                </div>
                <ul className="space-y-2">
                  {tool.items.map((item, i) => (
                    <li key={i}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        <ArrowRight className="w-4 h-4 text-blue-400" />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Data & Backend Layer */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <Webhook className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-semibold">Data & API Layer</h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    name: "GraphQL (Apollo/Relay)",
                    link: "https://graphql.org/learn/",
                  },
                  {
                    name: "REST APIs (Axios/Fetch)",
                    link: "https://axios-http.com/docs/intro",
                  },
                  {
                    name: "tRPC / TanStack Query",
                    link: "https://tanstack.com/query/latest/docs/framework/react/overview",
                  },
                  {
                    name: "WebSocket Connections",
                    link: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
                  },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <Terminal className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-semibold">Backend Integration</h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    name: "Node.js / Express",
                    link: "https://expressjs.com/en/starter/installing.html",
                  },
                  {
                    name: "PostgreSQL / MongoDB",
                    link: "https://www.mongodb.com/docs/manual/tutorial/getting-started/",
                  },
                  {
                    name: "Prisma / TypeORM",
                    link: "https://www.prisma.io/docs/getting-started",
                  },
                  {
                    name: "Firebase / Supabase",
                    link: "https://supabase.com/docs/guides/getting-started",
                  },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 text-purple-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mobile & DevOps Layer */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <Smartphone className="w-8 h-8 text-green-400" />
                <h3 className="text-xl font-semibold">Mobile Development</h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    name: "React Native",
                    link: "https://reactnative.dev/docs/environment-setup",
                  },
                  {
                    name: "Expo",
                    link: "https://docs.expo.dev/get-started/installation/",
                  },
                  {
                    name: "Shared Components",
                    link: "https://reactnative.dev/docs/components-and-apis",
                  },
                  {
                    name: "Cross-Platform Logic",
                    link: "https://reactnative.dev/docs/platform-specific-code",
                  },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 text-green-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <Settings className="w-8 h-8 text-yellow-400" />
                <h3 className="text-xl font-semibold">DevOps & Hosting</h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    name: "Vercel / Netlify",
                    link: "https://vercel.com/docs/get-started",
                  },
                  {
                    name: "Docker / Kubernetes",
                    link: "https://docs.docker.com/get-started/",
                  },
                  {
                    name: "CI/CD Pipelines",
                    link: "https://docs.github.com/en/actions/guides/about-continuous-integration",
                  },
                  {
                    name: "Serverless Functions",
                    link: "https://vercel.com/docs/functions/serverless-functions",
                  },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 text-yellow-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Soundbites */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              "React is the UI Brain of the Modern Web",
              "From Server to Screen — React Fits Anywhere",
              "Build Once, Scale Everywhere",
            ].map((soundbite, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 rounded-lg border border-gray-700 text-center"
              >
                <p className="text-lg font-medium">{soundbite}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
    </div>
  );
}
