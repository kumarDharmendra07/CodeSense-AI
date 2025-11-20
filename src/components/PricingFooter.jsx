import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function PricingFooter() {
  return (
    <footer className="mt-20 py-14 px-6 bg-[#0A0B1E] border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-300">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-semibold text-white">CodeSense AI</h3>
          <p className="mt-3 text-gray-400">
            Smart AI-powered code explanations built for developers.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-purple-400 text-xl">
              <FaGithub />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 text-xl">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 text-xl">
              <FaGlobe />
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Product</h4>
          <ul className="space-y-2">
            <li><a href="/pricing" className="hover:text-purple-400">Pricing</a></li>
            <li><a href="/codeApp" className="hover:text-purple-400">AI Code Explainer</a></li>
            <li><a href="#" className="hover:text-purple-400">VS Code Extension</a></li>
            <li><a href="#" className="hover:text-purple-400">API Access</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-purple-400">About</a></li>
            <li><a href="#" className="hover:text-purple-400">Blog</a></li>
            <li><a href="#" className="hover:text-purple-400">Contact</a></li>
            <li><a href="#" className="hover:text-purple-400">Careers</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-purple-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-purple-400">Terms of Service</a></li>
            <li><a href="#" className="hover:text-purple-400">Refund Policy</a></li>
            <li><a href="#" className="hover:text-purple-400">Cookies</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom text */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} CodeSense AI — All rights reserved.
      </div>
    </footer>
  );
}



