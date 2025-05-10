import { motion } from "framer-motion";
import {
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
} from "lucide-react";

interface Layer {
  title: string;
  description: string;
  items: {
    name: string;
    description: string;
    icon: React.ReactNode;
    link?: string;
  }[];
}

interface ModernStackProps {
  title: string;
  description: string;
  layers: Layer[];
}

export function ModernStack({ title, description, layers }: ModernStackProps) {
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

        {/* Concentric Circles Layout */}
        <div className="relative max-w-4xl mx-auto">
          {layers.map((layer, layerIndex) => (
            <motion.div
              key={layerIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: layerIndex * 0.2 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-semibold mb-6">{layer.title}</h3>
              <p className="text-gray-300 mb-8">{layer.description}</p>
              <div className="grid md:grid-cols-2 gap-6">
                {layer.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: layerIndex * 0.2 + itemIndex * 0.1,
                    }}
                    className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-gray-700/50 rounded-lg flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">
                          {item.link ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-400 transition-colors"
                            >
                              {item.name} →
                            </a>
                          ) : (
                            item.name
                          )}
                        </h4>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Soundbites */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            "React is the center of modern web development.",
            "From frontend to mobile, React powers it all.",
            "A complete ecosystem for modern apps.",
            "Build once, deploy everywhere.",
            "Scale from startup to enterprise.",
            "The future of web development.",
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
