// src/components/LoginSide.jsx
import React from "react";

export default function LoginSide() {
  return (
    <div className="hidden lg:flex items-center justify-center 
      bg-gradient-to-br from-[#0A0B1E] via-[#0F1129] to-[#1A1444] p-12">

      <div className="max-w-md">
        <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>

        <p className="text-gray-300 text-lg leading-relaxed">
          Log in to continue your journey with 
          <span className="text-purple-400"> CodeSense AI</span>.
          Access saved preferences, AI explanations, and more.
        </p>
      </div>

    </div>
  );
}
