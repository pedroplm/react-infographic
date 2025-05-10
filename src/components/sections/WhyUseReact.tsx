import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Code,
  Zap,
  Globe,
  Users,
  GitBranch,
  Rocket,
  Clock,
} from "lucide-react";

interface WhyUseReactProps {
  title: string;
  description: string;
  developerBenefits: string;
  businessBenefits: string;
  frameworkComparison: string;
}

export function WhyUseReact({
  title,
  description,
  developerBenefits,
  businessBenefits,
  frameworkComparison,
}: WhyUseReactProps) {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            {title}
          </h2>
          <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Developer Benefits */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            {developerBenefits}
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
                description: "One codebase for web and mobile via React Native",
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
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Framework Comparison */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            {frameworkComparison}
          </h3>
          <div className="overflow-x-auto">
            <div className="min-w-[800px] bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="grid grid-cols-4 gap-4 p-6">
                <div className="font-semibold text-lg">Feature</div>
                <div className="text-center font-semibold text-lg text-blue-400">
                  React
                </div>
                <div className="text-center font-semibold text-lg">Angular</div>
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
                    <div className="py-3">{row[0]}</div>
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
            {businessBenefits}
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
                  Lazy loading, memoization, and SSR via Next.js for better SEO
                  and user retention.
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
  );
}
