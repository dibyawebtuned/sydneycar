"use client";

import React from "react";
import { Recycle } from "lucide-react";
import { motion } from "framer-motion";

const EcoFriendlySection: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-15 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Animated Icon */}
        <motion.div
          className="flex-shrink-0 flex items-center justify-center w-44 h-44 bg-[#0c55a6] rounded-full text-white shadow-2xl"
          initial={{ y: -30, rotate: -10, opacity: 0 }}
          whileInView={{ y: 0, rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ y: -5, rotate: 5 }}
        >
          <Recycle size={64} />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-sm sm:text-base text-[#0c55a6] font-semibold uppercase tracking-wider mb-2">
            Our Commitment
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0c55a6] mb-6 leading-snug">
            Environmentally Responsible <span className="text-[#FEC130]">Car Disposal</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-6">
            At <span className="font-semibold text-[#0c55a6]">Sydney Car Removal and Towing Services</span>, we don’t just collect unwanted cars — we ensure they’re handled the <span className="font-semibold text-[#FEC130]">right way</span>.
            All vehicles are dismantled and recycled through <span className="font-semibold">approved wrecking facilities</span>, making sure reusable parts are salvaged and waste is minimized.
          </p>

          {/* Optional CTA */}
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-[#FEC130] text-[#0c55a6] font-semibold rounded-full shadow-lg hover:bg-[#ffd060] transition-all duration-300"
          >
            Get Started
          </a>
        </motion.div>
      </div>

      {/* Decorative circles */}
      <div className="absolute -top-16 -left-16 w-48 h-48 bg-[#FEC130] rounded-full opacity-20 pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#0c55a6] rounded-full opacity-10 pointer-events-none"></div>
      <div className="absolute -bottom-32 left-1/2 w-64 h-64 bg-[#FEC130] rounded-full opacity-10 pointer-events-none -translate-x-1/2"></div>
    </section>
  );
};

export default EcoFriendlySection;
