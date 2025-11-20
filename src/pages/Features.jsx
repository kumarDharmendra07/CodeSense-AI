import React from "react";
import NavBar from "../components/NavBar";
import FeaturesHero from "../components/FeaturesHero";
import FeaturesGrid from "../components/FeaturesGrid";
import AdvancedFeatures from "../components/AdvancedFeatures";
import WorkflowSection from "../components/WorkflowSection";
import DemoSection from "../components/DemoSection";
import ComparisonSection from "../components/ComparisonSection";
import CTASection from "../components/CTASection";
import PricingFooter from "../components/PricingFooter";


export default function Features() {
return (
<div className="min-h-screen bg-gradient-to-br from-[#0A0B1E] via-[#0F1129] to-[#1A1444] text-white">
<NavBar />
<FeaturesHero />
<FeaturesGrid />
<AdvancedFeatures />
<WorkflowSection />
<DemoSection />
<ComparisonSection />
<CTASection />
<PricingFooter />
</div>
);
}