// src/components/features/AdvancedFeatures.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiZap, FiFlag, FiTrendingUp } from "react-icons/fi";

export default function AdvancedFeatures() {
  const items = [
    {
      icon: <FiTrendingUp />,
      title: "Advanced Code Analysis",
      desc: "Detect inefficiencies, bad patterns, and improvements automatically.",
    },
    {
      icon: <FiZap />,
      title: "Error Explanation",
      desc: "Paste your error and get an AI-generated fix instantly.",
    },
    {
      icon: <FiFlag />,
      title: "Multi-file Explanation",
      desc: "Premium users can upload large code blocks or project sections.",
    },
  ];

  return (
    <section className="px-6 mt-24 pb-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        Advanced Capabilities
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative bg-[#0c1120]/90 rounded-2xl border border-[#1a2338] 
            p-6 shadow-[0_18px_45px_rgba(0,0,0,0.45)]
            hover:border-purple-500/60 hover:-translate-y-1 hover:shadow-purple-900/30
            transition-transform duration-200"
          >
            {/* ICON BOX MATCHING FeaturesGrid */}
            <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-300 text-xl mb-4">
              {item.icon}
            </div>

            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
