import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0B1E] via-[#0F1129] to-[#1A1444] text-white">
      <NavBar />
      <HeroSection />
    </div>
  );
}
