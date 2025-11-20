// import React from "react";
// import { motion } from "framer-motion";
// import { FiClipboard, FiCpu, FiCheckCircle } from "react-icons/fi";

// export default function WorkflowSection() {
//   const steps = [
//     {
//       title: "Paste Your Code",
//       desc: "Simply paste your snippet or upload a file.",
//       icon: <FiClipboard className="text-purple-400 text-5xl" />,
//     },
//     {
//       title: "AI Analyzes It",
//       desc: "Our engine breaks down logic and identifies patterns.",
//       icon: <FiCpu className="text-purple-400 text-5xl" />,
//     },
//     {
//       title: "Get Explanation",
//       desc: "Receive clean, structured breakdowns instantly.",
//       icon: <FiCheckCircle className="text-purple-400 text-5xl" />,
//     },
//   ];

//   return (
//     <div className="max-w-5xl mx-auto mt-32 px-6 text-center">
//       <h2 className="text-3xl font-bold mb-14">How It Works</h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//         {steps.map((s, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: i * 0.18 }}
//             whileHover={{ scale: 1.05 }}
//             className="relative bg-[#0c1120] p-8 rounded-2xl border border-[#1a2338] 
//             shadow-xl hover:shadow-purple-900/50 transition"
//           >
//             <div className="flex justify-center mb-4 animate-pulse-slow">
//               {s.icon}
//             </div>

//             <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
//             <p className="text-gray-300">{s.desc}</p>

//             {i < 2 && (
//               <div className="hidden md:block absolute right-0 top-1/2 w-px h-20 bg-purple-700/40"></div>
//             )}
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React from "react";
import { motion } from "framer-motion";
import { FiClipboard, FiCpu, FiCheckCircle } from "react-icons/fi";

export default function WorkflowSection() {
  const steps = [
    {
      title: "Paste Your Code",
      desc: "Simply paste your snippet or upload a file.",
      icon: <FiClipboard />,
    },
    {
      title: "AI Analyzes It",
      desc: "Our engine breaks down logic and identifies patterns.",
      icon: <FiCpu />,
    },
    {
      title: "Get Explanation",
      desc: "Receive clean, structured breakdowns instantly.",
      icon: <FiCheckCircle />,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto mt-32 px-6 text-center">
      <h2 className="text-3xl font-bold mb-14">How It Works</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="relative bg-[#0c1120]/90 rounded-2xl border border-[#1a2338] 
            p-7 shadow-[0_18px_45px_rgba(0,0,0,0.45)]
            hover:border-purple-500/60 hover:-translate-y-1 hover:shadow-purple-900/30
            transition-all duration-200"
          >
            {/* ICON BOX LIKE FeaturesGrid */}
            <div className="w-12 h-12 mx-auto rounded-xl bg-purple-500/15 
              flex items-center justify-center text-purple-300 text-3xl mb-4">
              {s.icon}
            </div>

            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{s.desc}</p>

            {/* Vertical Divider Between Steps */}
            {i < 2 && (
              <div className="hidden md:block absolute right-0 top-1/2 w-px h-20 bg-purple-700/30"></div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
