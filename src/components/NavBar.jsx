import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    const[open, setOpen] = useState(false);
    const location = useLocation();
    
  return (
    <nav className="w-full bg-[#0F1129] border-b border-purple-500/20 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

        {/* Logo */}
        <h1 className="text-purple-300 text-2xl font-semibold tracking-wide">
          CodeSense AI
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-gray-300 text-lg">
          <li className="cursor-pointer hover:text-purple-300 transition" onClick={() => navigate("/")}>Home</li>
          <li className="cursor-pointer hover:text-purple-300 transition" onClick={() => navigate("/features")}>Features</li>
          <li className="cursor-pointer hover:text-purple-300 transition" onClick={() => navigate("/pricing")}>Pricing</li>
          <li className="cursor-pointer hover:text-purple-300 transition" onClick={() => navigate("/contact")}>Contact</li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-5 py-2 rounded-full bg-[#1A1B2E] text-gray-300 hover:bg-[#23253A] transition" 
          onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="px-6 py-2 rounded-full bg-[#8B5CF6] text-white font-medium hover:bg-[#7C3AED] transition flex items-center gap-1" onClick={() => navigate("/signup")}>
            Sign Up <span>›</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-300 text-3xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-[#0F1129] border-t border-purple-500/20 px-6 py-4 space-y-4">

          <a className="block text-gray-300 text-lg hover:text-purple-300 transition">Home</a>
          <a className="block text-gray-300 text-lg hover:text-purple-300 transition">Features</a>
          <a className="block text-gray-300 text-lg hover:text-purple-300 transition">Pricing</a>
          <a className="block text-gray-300 text-lg hover:text-purple-300 transition">Contact</a>

          <button className="w-full mt-4 px-5 py-2 rounded-full bg-[#1A1B2E] text-gray-300 hover:bg-[#23253A] transition">
            Login
          </button>

          <button className="w-full px-6 py-2 rounded-full bg-[#8B5CF6] text-white font-medium hover:bg-[#7C3AED] transition flex items-center justify-center gap-1">
            Sign Up <span>›</span>
          </button>

        </div>
      )}
    </nav>
  )
}

export default NavBar
