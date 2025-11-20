// src/components/PricingCard.jsx
import React from "react";

export default function PricingCard({
  title,
  priceMonthly,
  priceAnnual,
  currency = "₹",
  billingCycle,
  features = [],
  ctaText = "Get Started",
  highlight = false,
  onCta = () => {},
  isPremium = false,
}) {
  const price = billingCycle === "monthly" ? priceMonthly : priceAnnual;
  const label = billingCycle === "monthly" ? `${currency}${price}/month` : `${currency}${price}/year`;

  return (
    <div
      className={`relative rounded-2xl p-6 lg:p-8 border border-transparent
        ${highlight ? "bg-gradient-to-br from-[#2b1052] to-[#4b0fa6] shadow-2xl" : "bg-[#0b0f1b]"}
        backdrop-blur-sm`}
      style={{ boxShadow: highlight ? "0 10px 40px rgba(139,92,246,0.18)" : "inset 0 0 0 1px rgba(255,255,255,0.02)" }}
    >
      {/* small icon */}
      {/* <div className="w-10 h-10 rounded-lg bg-[#18052b] flex items-center justify-center mb-4">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M4 7h16M4 12h16M4 17h16" stroke="#b9a6ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </div> */}

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-4">
        {title === "Basic" ? "Perfect for students & beginners." : title === "Premium" ? "For teams and professionals who need advanced capabilities." : "Ideal for developers who need advanced features."}
      </p>

      <div className="mb-4">
        <div className={`text-3xl font-extrabold ${highlight ? "text-white" : "text-gray-100"}`}>
          {label}
        </div>
        {billingCycle === "annual" && (
          <div className="text-xs text-gray-400 mt-1">Billed yearly. Save 20% compared to monthly.</div>
        )}
      </div>

      <div className="mt-4 mb-6">
        <div className="text-sm font-medium text-gray-200 mb-2">Features:</div>
        <ul className="space-y-2 text-sm text-gray-300">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex w-5 h-5 items-center justify-center rounded-full bg-[#0a0720] text-purple-300 text-xs">✓</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        <button
          onClick={onCta}
          className={`w-full py-3 rounded-full text-sm font-medium transition
            ${highlight ? "bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] text-white shadow-lg" : "bg-transparent border border-[#2b1450] text-purple-300 hover:bg-[#1b1130]"}
          `}
        >
          {title === "Premium" ? "Contact Sales" : ctaText}
        </button>
      </div>

      {/* subtle border glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent"
           style={{ boxShadow: highlight ? "0 0 50px rgba(139,92,246,0.25)" : "none" }} />
    </div>
  );
}
