// src/components/features/ComparisonSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

export default function ComparisonSection() {
  return (
    <section className="mt-24 mb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Why developers choose CodeSense AI
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="bg-[#0c1120] border border-[#1a2338] rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FiCheckCircle className="text-green-400" />
              With CodeSense AI
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>• Clear, human-readable explanations for complex code.</li>
              <li>• Works in the browser, no IDE setup required.</li>
              <li>• PDF export, history, multi-language detection and more.</li>
              <li>• Designed for students, professionals and teaching.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="bg-[#0c1120] border border-[#1a2338] rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FiXCircle className="text-red-400" />
              Without CodeSense AI
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>• Manually reading unfamiliar code for hours.</li>
              <li>• Constantly switching between StackOverflow and docs.</li>
              <li>• No unified place for explanations & exportable notes.</li>
              <li>• Harder to teach or explain to others quickly.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
