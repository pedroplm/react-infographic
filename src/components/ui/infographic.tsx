import React from "react";
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
} from "lucide-react";

export function Infographic() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
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
              🚀 The Future of Development: React Explained
            </h1>
            <p className="text-xl text-gray-300">
              How the world's most popular UI library changed the game
            </p>
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
              What is React?
            </h2>
            <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
              A revolutionary JavaScript library created by Facebook to solve
              real problems in building complex, fast, and maintainable user
              interfaces.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              React's Evolution
            </h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500" />
              <div className="space-y-12">
                {[
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
                ].map((milestone, index) => (
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
              <h3 className="text-2xl font-semibold mb-6">Before React</h3>
              <div className="space-y-4">
                {[
                  "Manual DOM manipulation",
                  "Difficult state management",
                  "UI logic scattered everywhere",
                  "Poor performance on updates",
                  "Spaghetti code in big projects",
                ].map((problem, index) => (
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
              <h3 className="text-2xl font-semibold mb-6">React's Solution</h3>
              <div className="space-y-4">
                {[
                  "Virtual DOM for efficient updates",
                  "Component-based + Hooks for state",
                  "Encapsulated components (JSX)",
                  "Batching + diffing updates",
                  "Modular, declarative structure",
                ].map((solution, index) => (
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
              Why Developers and Companies Choose React
            </h2>
            <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
              React isn't just popular by chance — it's loved by developers and
              adopted by tech giants because it solves real problems, boosts
              productivity, and scales beautifully.
            </p>
          </motion.div>

          {/* Developer Benefits */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Developer-Friendly: Build Faster, Smarter
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
              React vs Other Frameworks
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
                      <div className="py-3 border-t border-gray-700">
                        {row[0]}
                      </div>
                      <div className="py-3 border-t border-gray-700 text-center text-blue-400">
                        {row[1]}
                      </div>
                      <div className="py-3 border-t border-gray-700 text-center">
                        {row[2]}
                      </div>
                      <div className="py-3 border-t border-gray-700 text-center">
                        {row[3]}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Business Benefits */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Why Businesses Trust React
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
              React isn't just a library. It's a movement that redefined UI
              development.
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Join millions of developers building the future of web
              applications
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Get Started with React
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
