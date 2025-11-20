// src/components/Pricing.jsx
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import PricingHero from "../components/PricingHero";
import PricingToggle from "../components/PricingToggle";
import PricingCard from "../components/PricingCard";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import PricingFooter from "../components/PricingFooter";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly"); // "monthly" or "annual"

  // numeric values (monthly and computed annual: monthly * 12 * 0.8)
  const proMonthly = 99; // ₹99 / month
  const proAnnual = Math.round(proMonthly * 12 * 0.8); // 20% off yearly

  const premiumMonthly = 199; // ₹199 / month
  const premiumAnnual = Math.round(premiumMonthly * 12 * 0.8); // 20% off yearly

  // Basic features
  const basicFeatures = [
    "Short AI code explanations",
    "Max input size: 500 characters",
    "Up to 3 explanations / day",
    "No PDF export",
    "Limited model speed",
  ];

  const proFeatures = [
    "Unlimited code explanations",
    "Long & detailed AI explanations",
    "AI-powered syntax-highlighting corrections",
    "Download PDF (up to 5 pages)",
    "Priority response speed",
    "Save explanation history",
    "Multi-language detection",
    "Smart explanation formatting",
  ];

  const premiumFeatures = [
    ...proFeatures,
    "AI Security Scan (vulnerability detection)",
    "Large PDF Export (up to 50 pages)",
    "Faster model inference (priority GPU lane)",
    "Team & organization access",
    "API access (future)",
    "Unlimited history & cloud sync",
    "Custom prompt tuning & priority support",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0B1E] via-[#0F1129] to-[#1A1444] text-white py-12 pt-0 pb-0" >
        <NavBar />
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl p-8 lg:p-12 bg-gradient-to-br from-[#0a0420]/80 via-[#16042b]/60 to-[#2b0f3b]/30 border border-[#230b37] shadow-xl">
          <PricingHero />

          <PricingToggle billingCycle={billingCycle} setBillingCycle={setBillingCycle} />

          {/* Plans Grid */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <PricingCard
              title="Basic"
              priceMonthly={0}
              priceAnnual={0}
              billingCycle={billingCycle}
              features={basicFeatures}
              ctaText="Get Started"
              onCta={() => { /* open signup or free action */ }}
            />

            <PricingCard
              title="Pro"
              priceMonthly={proMonthly}
              priceAnnual={proAnnual}
              billingCycle={billingCycle}
              features={proFeatures}
              highlight={true}
              ctaText="Get Pro"
              onCta={() => { /* payment flow or signup */ }}
            />

            <PricingCard
              title="Premium"
              priceMonthly={premiumMonthly}
              priceAnnual={premiumAnnual}
              billingCycle={billingCycle}
              features={premiumFeatures}
              isPremium={true}
              ctaText="Get Premium"
              onCta={() => { /* contact sales action */ }}
            />
          </div>
        </div>
      </div>
      <FAQSection />
      <CTASection />
        <PricingFooter />
    </div>
  );
}

