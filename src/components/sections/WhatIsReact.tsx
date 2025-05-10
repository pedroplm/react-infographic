import React from "react";
import { motion } from "framer-motion";
import { Code2, GitBranch, Globe, Zap, GitPullRequest } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface WhatIsReactProps {
  title: string;
  description: string;
  evolution: string;
  timeline: TimelineItem[];
  beforeReact: string;
  afterReact: string;
  problems: string[];
  solutions: string[];
}

export function WhatIsReact({
  title,
  description,
  evolution,
  timeline,
  beforeReact,
  afterReact,
  problems,
  solutions,
}: WhatIsReactProps) {
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

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            {evolution}
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500" />
            <div className="space-y-12">
              {timeline.map((milestone, index) => (
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
            <h3 className="text-2xl font-semibold mb-6">{beforeReact}</h3>
            <div className="space-y-4">
              {problems.map((problem, index) => (
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
            <h3 className="text-2xl font-semibold mb-6">{afterReact}</h3>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
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
      </div>
    </section>
  );
}
