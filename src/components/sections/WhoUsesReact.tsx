import { motion } from "framer-motion";
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
} from "lucide-react";

interface Company {
  name: string;
  description: string;
  scale: string;
  icon: React.ReactNode;
}

interface WhoUsesReactProps {
  title: string;
  description: string;
  companies: Company[];
  additionalCompanies: string[];
}

export function WhoUsesReact({
  title,
  description,
  companies,
  additionalCompanies,
}: WhoUsesReactProps) {
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

        {/* Main Company Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-700/50 rounded-lg">
                  {company.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{company.name}</h3>
                  <p className="text-sm text-blue-400">{company.scale}</p>
                </div>
              </div>
              <p className="text-gray-400">{company.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Companies */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">And Many More...</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalCompanies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700 hover:border-blue-500/50 transition-colors"
              >
                <p className="text-sm">{company}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
