// src/components/CTASection.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function CTASection() {
    const navigate = useNavigate();
    const loacation = useLocation();
    return (
        <div className="mt-24 mb-0 px-6">
            <div className="max-w-5xl mx-auto text-center">

                {/* Background Gradient Box */}
                <div className="rounded-3xl p-10 lg:p-16 bg-gradient-to-br
          from-[#0a0420]/80 via-[#16042b]/70 to-[#2b0f3b]/50
          border border-[#2b1850] shadow-[0_0_40px_rgba(139,92,246,0.2)]
        ">

                    {/* Badge */}
                    <div className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-purple-300 text-sm mb-6">
                        Get Started
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                        Start Using <span className="text-purple-400">CodeSense AI</span> Today
                    </h2>

                    {/* Subtitle */}
                    <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
                        Explain, analyze, and understand code instantly with AI.
                        Upgrade to Pro or Premium when you're ready — no pressure.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

                        {/* Primary Button */}
                        <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 
              hover:from-purple-500 hover:to-purple-700 transition text-white rounded-full 
              shadow-lg shadow-purple-900/40 text-lg font-medium"
                            onClick={() => navigate("/codeApp")}
                        >
                            Get Started Free
                        </button>

                        {/* Secondary Button */}
                        <button className="px-8 py-3 border border-purple-500/40 text-purple-300 
              hover:bg-purple-900/20 transition rounded-full text-lg font-medium"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}

                        >
                            View Pricing →
                        </button>

                    </div>
                </div>

            </div>
        </div>
    );
}
