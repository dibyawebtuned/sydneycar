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

// Props type for Button
interface ButtonProps {
  number: string;
  name: string;
}

const SloganBanner: React.FC = () => {
  const text =
    "22+ Years in Business • Sydney-Wide Pickup 7 Days • Free Towing • Instant Payout • All Makes & Conditions";

  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const letter = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  // Correct Button component with React.FC
  const Button: React.FC<ButtonProps> = ({ number, name }) => (
    <a
      href={`tel:${number}`}
      className="relative overflow-hidden bg-gradient-to-r from-[#FEC130] to-[#FFC85C] px-5 py-2 flex items-center gap-2 text-[#044E9E] cursor-pointer group justify-center shadow-md hover:shadow-lg transition-shadow duration-300 w-full md:w-auto"
    >
      <Phone className="w-4 h-4 fill-[#044E9E] group-hover:translate-x-1 transition-transform duration-300" />
      <div className={`flex flex-row items-center gap-1 text-[14px] font-semibold ${inter.className}`}>
        <span className="group-hover:text-[#022F6C] transition-colors duration-300">{number}</span>
        <span className="group-hover:text-[#022F6C] transition-colors duration-300">({name})</span>
      </div>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#022F6C] group-hover:w-full transition-all duration-300"></span>
    </a>

  );

  return (
    <div className="bg-[#044E9E] w-full">
      {/* Desktop & Tablet View */}
      <div className="hidden md:flex container mx-auto py-3 px-4 sm:px-6 md:px-0 lg:px-8 items-center justify-between">
        <Button number="0450747474" name="Jay" />
        <p
          key={animationKey}
          className="text-center text-sm font-medium tracking-wide flex justify-center flex-wrap text-[#fdb813] mx-4"
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </p>
        <Button number="0402887766" name="Sam" />
      </div>

      {/* Mobile View */}
      <div className="md:hidden container mx-auto py-3 px-4 flex flex-col items-center gap-3">
        <p
          key={animationKey}
          className="text-center text-sm font-medium tracking-wide flex justify-center flex-wrap text-[#fdb813] mb-2"
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </p>
        <div className="flex flex-row gap-2 w-full justify-center">
          <Button number="0450747474" name="Jay" />
          <Button number="0402887766" name="Sam" />
        </div>
      </div>
    </div>
  );
};

export default SloganBanner;
