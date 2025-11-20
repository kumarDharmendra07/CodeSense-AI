// src/components/PricingHero.jsx
import React from "react";

export default function PricingHero() {
  return (
    <div className="max-w-6xl mx-auto text-center px-6 py-12 lg:py-20">
      <div className="inline-block px-3 py-1 rounded-full bg-[#1b0630] text-sm text-purple-300 mb-6">Pricing</div>

      <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
        Flexible Pricing Plans <br/> for Every Need
      </h1>

      <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
        Choose the plan that best fits your requirements and start optimizing your time today!
      </p>
    </div>
  );
}
