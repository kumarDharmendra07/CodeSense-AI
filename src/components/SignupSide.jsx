import React from "react";

export default function SignupSide() {
  return (
    <div className="hidden lg:flex flex-col justify-center p-12 
        bg-gradient-to-br from-[#140b32]/60 via-[#1e0f46]/40 to-transparent">

      <h1 className="text-4xl font-bold leading-tight">
        Let's <span className="text-purple-400">Get Started</span>
      </h1>

      <p className="mt-4 text-gray-300 text-lg max-w-sm">
        Create your account to start using CodeSense AI — your personal 
        AI-powered code explainer and debugging assistant.
      </p>
    </div>
  );
}
