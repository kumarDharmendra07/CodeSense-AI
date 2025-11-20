// src/components/features/FeaturesHero.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiZap } from "react-icons/fi";

export default function FeaturesHero() {
  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-purple-300 mb-4"
        >
          <FiZap className="text-yellow-300" />
          <span>AI-powered developer experience</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight"
        >
          Features that make{" "}
          <span className="text-purple-400">CodeSense AI</span> your coding co-pilot
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto"
        >
          Explain, debug, and understand complex code instantly. Designed for students,
          professionals, and teams who want clarity without leaving the browser.
        </motion.p>
      </div>
    </section>
  );
}
