// src/components/features/FeaturesGrid.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiSearch, FiFileText, FiShield, FiZap, FiCpu } from "react-icons/fi";

const features = [
  {
    icon: <FiCode />,
    title: "AI Code Explanation",
    desc: "Get step-by-step breakdowns of any code snippet with clear, simple language.",
  },
  {
    icon: <FiSearch />,
    title: "Auto Language Detection",
    desc: "Automatically detects C++, Java, Python, JavaScript, HTML and more as you type.",
  },
  {
    icon: <FiFileText />,
    title: "PDF Export",
    desc: "Export clean, formatted explanations as PDFs for sharing or documentation.",
  },
  {
    icon: <FiZap />,
    title: "Smart Autocomplete",
    desc: "Get instant suggestions and faster coding using intelligent editor completions.",
  },
  {
    icon: <FiShield />,
    title: "Secure by Design",
    desc: "Your code is not stored. Everything is processed securely and discarded.",
  },
  {
    icon: <FiCpu />,
    title: "Multi-Model Ready",
    desc: "Designed to work with Groq, OpenAI, DeepSeek and future AI providers.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="pb-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative bg-[#0c1120]/90 rounded-2xl border border-[#1a2338] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.45)] hover:border-purple-500/60 hover:-translate-y-1 hover:shadow-purple-900/30 transition-transform duration-200"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-300 text-xl mb-4">
              {f.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
