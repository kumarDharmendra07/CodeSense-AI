import React from "react";
import SignupForm from "../components/SignupForm";
import SignupSide from "../components/SignupSide";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br 
      from-[#0A0B1E] via-[#0F1129] to-[#1A1444] text-white px-6 py-10">

      <div className="w-full max-w-6xl rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(139,92,246,0.25)]
        grid grid-cols-1 lg:grid-cols-2 bg-[#0c1120]/60 border border-[#1a2338]">

        {/* Left Side */}
        <SignupSide />

        {/* Right Side */}
        <SignupForm />
      </div>

    </div>
  );
}
