import React from "react";
import NavBar from "../components/NavBar";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";
import SupportEmails from "../components/SupportEmails";
import QuickHelpLinks from "../components/QuickHelpLinks";
import SocialLinks from "../components/SocialLinks";
import BugReport from "../components/BugReport";
import FeatureRequest from "../components/FeatureRequest";
import PrivacyNote from "../components/PrivacyNotes";


export default function Contact() {
return (
<div className="min-h-screen bg-gradient-to-br from-[#0A0B1E] via-[#0F1129] to-[#1A1444] text-white">
<NavBar />
<ContactHero />


<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
<ContactForm />
<SupportEmails />
</div>


<QuickHelpLinks />
<BugReport />
<FeatureRequest />
<SocialLinks />
<PrivacyNote />
</div>
);
}