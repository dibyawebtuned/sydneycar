"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const PRIMARY_BLUE = "#0c55a6";
const HEADING_COLOR = "#1e1e1e";
const FEATURE_BUTTON_COLOR = "#2ec4b6";

const OurCoreValuesSection: React.FC = () => {
  const coreValues = [
    "Trust & Integrity",
    "Fast & Reliable Service",
    "Eco-Friendly Practices",
    "Customer First Approach",
    "Local Expertise",
    "All Vehicle Types Accepted",
  ];

  return (
    <section className="bg-[#F0EFEE] py-15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-10 gap-12 lg:gap-16 items-center">

          {/* Left Column: Text & Core Values */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 lg:pr-8"
          >
            {/* Small Heading */}
            <div className="flex items-center gap-2.5">
              <h3
                className="text-[18px] sm:text-[20px] font-semibold uppercase tracking-widest relative pb-2 inline-block whitespace-nowrap font-cabinet"
                style={{ color: PRIMARY_BLUE }}
              >
                OUR CORE VALUES
              </h3>
              <span className="w-full h-px bg-[#9F9F9F] mb-1.5"></span>
            </div>

            {/* Main Heading */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight font-cabinet font-extrabold"
              style={{ color: HEADING_COLOR }}
            >
              DRIVING EXCELLENCE IN
              <br />
              <span className="relative inline-block">
                <span className="absolute left-0 bottom-2 w-full h-3 sm:h-3.5 bg-[#FEC130] z-0"></span>
                <span className="relative text-[#1F4A93] font-extrabold">
                  VEHICLE REMOVAL
                </span>
              </span>{" "}
              & TOWING
            </h2>

            {/* Description */}
            {/* <p className="text-gray-600 text-lg mb-8 max-w-prose text-justify">
              At Sydney Car Removal & Towing, our core values define everything we do. We focus on
              providing fast, reliable, and eco-friendly services while maintaining the highest level
              of trust and integrity. Our customer-first approach ensures every vehicle is handled with care.
            </p> */}

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`inline-flex items-center px-4 py-2 rounded-full text-white text-sm font-medium transition duration-200 ease-in-out transform hover:scale-105 ${inter.className}`}
                  style={{ backgroundColor: FEATURE_BUTTON_COLOR }}
                >
                  <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {value}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-[566px] aspect-4/3 overflow-hidden rounded-2xl">
              <Image
                src="/coreValues.png"
                alt="Tow truck handling a car"
                fill
                className="object-contain"  // ensures full image is visible
                quality={90}
              />
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default OurCoreValuesSection;
