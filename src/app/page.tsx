'use client';

import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-between px-8 md:px-20 bg-white overflow-hidden">
      <GiHamburgerMenu  className="absolute top-5 left-5 text-3xl"/>
      {/* Left Content */}
      <div className="z-10 max-w-4xl px-36">
        <h1 className="text-lg md:text-2xl font-semibold text-purple-400">
          Hi, I’m <span className="text-purple-500 font-bold">Amandeep Kaur</span>
        </h1>
        <h2 className="text-6xl md:text-9xl font-extrabold ">
          Frontend Developer
        </h2>
       
        <button className="mt-8 bg-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-600 transition">
          Know Me More
        </button>
      </div>

      {/* Zigzag Gradient Shape */}
      <div className="absolute right-0 top-0 w-[60vw]  h-full overflow-hidden">
        <svg
          viewBox="0 0 600 900"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Gradient */}
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF5C5C" />
              <stop offset="100%" stopColor="#B14BE6" />
            </linearGradient>
          </defs>

          {/* Zigzag Path */}
          <path
            id="zigzagPath"
            d="M500,0 C550,100 600,200 550,300 C500,400 450,500 500,600 C550,700 600,800 550,900"
            fill="none"
            stroke="url(#grad)"
            strokeWidth="330"
            strokeLinecap="round"
          />

          {/* Moving Text - Seamless Loop */}
          <motion.text
            fontSize="42"
            fontWeight="bold"
            fill="white"
            letterSpacing="3"
          >
            {/* One long repeated string (so no gap) */}
            <motion.textPath
              href="#zigzagPath"
              startOffset="100%"
              animate={{ startOffset: ["100%", "-100%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              Creating immersive web experiences 🚀 • Building modern interfaces 💻 • Designing beautiful UX 🌐 • Creating immersive web experiences 🚀 • Building modern interfaces 💻 • Designing beautiful UX 🌐 • 
            </motion.textPath>
          </motion.text>
        </svg>
      </div>

    </section>
  );
}
