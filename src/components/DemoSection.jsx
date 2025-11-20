// src/components/features/DemoSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiPlayCircle } from "react-icons/fi";

export default function DemoSection() {
  return (
    <section className="mt-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-4">See CodeSense AI in Action</h2>
          <p className="text-gray-300 mb-4">
            Watch how CodeSense AI takes a real-world code snippet and turns it into a
            clear explanation with step-by-step reasoning, detected language, and PDF
            export.
          </p>
          {/* <p className="text-gray-400 text-sm">
            You can embed a short GIF or screen recording of your app here later to make
            the page feel even more alive.
          </p> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-purple-600/30 via-[#0F1129] to-blue-500/30 border border-purple-500/40 shadow-[0_30px_80px_rgba(88,28,135,0.6)] flex items-center justify-center overflow-hidden">
            {/* Placeholder demo box */}
            <div className="text-center">
              <FiPlayCircle className="mx-auto text-4xl text-purple-200 mb-3" />
              <p className="text-gray-200 font-medium">Demo preview coming soon</p>
              {/* <p className="text-gray-400 text-xs mt-1">
                (Add your screen recording GIF / image here)
              </p> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
