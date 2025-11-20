import React from 'react'
import { useNavigate } from "react-router-dom";


const HeroSection = () => {
    const navigate = useNavigate();
  return (
    <div>
      <section className="px-6 py-28 text-center">
      
      <h1 className="text-5xl md:text-7xl font-extrabold">
        Decode the Future of Programming <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          With AI Intelligence
        </span>
      </h1>

      <p className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto">
        An intelligent assistant that reads, understands, and explains your code like a senior developer.
      </p>

      <div className="mt-10 flex justify-center gap-4">
        <button onClick={() => navigate("/codeApp")}
        className="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white">
          Launch App
        </button>
        <button className="px-8 py-3 rounded-full bg-purple-900/40 border border-purple-500/40 hover:bg-purple-900/60 text-purple-300">
          Learn More
        </button>
      </div>

    </section>
    </div>
  )
}

export default HeroSection
