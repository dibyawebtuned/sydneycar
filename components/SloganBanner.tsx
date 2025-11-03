"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const SloganBanner: React.FC = () => {
  const text = "22+ Years in Business • Sydney-Wide Pickup 7 Days • Free Towing • Instant Payout • All Makes & Conditions";

  const [animationKey, setAnimationKey] = useState(0);

  // Loop the animation every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Variants for parent container
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  // Variants for each letter
  const letter = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#044E9E] w-full">
      <div className="container mx-auto py-3 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Button */}
        <button className="relative overflow-hidden bg-linear-to-r from-[#FEC130] to-[#FFC85C] px-5 py-2 flex items-center gap-3 text-[#044E9E] font-medium cursor-pointer group">
          {/* Icon with animated slide */}
          <Phone className="w-5 h-5 stroke-[#044E9E] group-hover:translate-x-1 transition-transform duration-300" />

          {/* Text */}
          <div className={`flex flex-row items-center gap-1 text-[16px] ${inter.className}`}>
            <span className="relative group-hover:text-[#022F6C] transition-colors duration-300">0450747474</span>
            <span className="relative group-hover:text-[#022F6C] transition-colors duration-300">(Jay)</span>
          </div>

          {/* Sliding underline */}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#022F6C] group-hover:w-full transition-all duration-300"></span>
        </button>

        {/* Slogan */}
        <p
          key={animationKey}
          className="text-center text-sm font-medium tracking-wide flex justify-center flex-wrap"
          style={{ color: "#fdb813" }}
        // variants={container}
        // initial="hidden"
        // animate="visible"
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </p>

        {/* Button */}
        <button className="relative overflow-hidden bg-linear-to-r from-[#FEC130] to-[#FFC85C] px-5 py-2 flex items-center gap-3 text-[#044E9E] font-medium cursor-pointer group">
          {/* Icon with animated slide */}
          <Phone className="w-5 h-5 stroke-[#044E9E] group-hover:translate-x-1 transition-transform duration-300" />

          {/* Text */}
          <div className={`flex flex-row items-center gap-1 ${inter.className}`}>
            <span className="relative group-hover:text-[#022F6C] transition-colors duration-300">0402887766</span>
            <span className="relative group-hover:text-[#022F6C] transition-colors duration-300">(Sam)</span>
          </div>

          {/* Sliding underline */}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#022F6C] group-hover:w-full transition-all duration-300"></span>
        </button>


      </div>
    </div>
  );
};

export default SloganBanner;
