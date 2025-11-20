// src/components/PricingToggle.jsx
import React from "react";

export default function PricingToggle({ billingCycle, setBillingCycle }) {
  // billingCycle: "monthly" | "annual"
  return (
    <div className="flex items-center gap-4 justify-center mt-6">
      <span className={`text-sm ${billingCycle === "monthly" ? "text-gray-100" : "text-gray-400"}`}>
        Monthly
      </span>

      <button
        onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
        aria-label="Toggle billing"
        className="relative w-14 h-7 rounded-full bg-gradient-to-r from-[#5b21b6] to-[#8b5cf6] p-0.5"
      >
        <div
          className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transform transition-transform duration-250 ease-in-out
            ${billingCycle === "annual" ? "translate-x-7" : "translate-x-0"}
          `}
        />
      </button>

      <span className={`text-sm ${billingCycle === "annual" ? "text-gray-100" : "text-gray-400"}`}>
        Annual <span className="ml-2 px-2 py-0.5 text-xs rounded bg-[#2b0f3b] text-purple-300">20% Off</span>
      </span>
    </div>
  );
}
