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

interface WhyChooseUsProps {
  smallHeading: string;
  mainHeading: React.ReactNode;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
}

const WhyChooseUsSection: React.FC<WhyChooseUsProps> = ({
  smallHeading,
  mainHeading,
  description,
  features,
  imageSrc,
  imageAlt,
}) => {
  return (
    <section className="bg-white py-15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 overflow-hidden">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: "-5%" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex justify-center overflow-hidden"
          >
            <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-[566px] aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain"
                quality={90}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>

          {/* Right Column: Text & Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-2.5">
              <h3
                className="text-[18px] sm:text-[20px] font-semibold uppercase tracking-widest relative pb-2 inline-block whitespace-nowrap font-cabinet"
                style={{ color: PRIMARY_BLUE }}
              >
                {smallHeading}
              </h3>
              <span className="w-full h-px bg-[#9F9F9F] mb-1.5"></span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-left lg:text-left font-cabinet font-extrabold"
              style={{ color: HEADING_COLOR }}
            >
              {mainHeading}
            </h2>

            <p
              className={`text-[#6A6A6A] text-[14px] sm:text-[16px] mb-5 mt-5 text-justify w-full ${inter.className}`}
            >
              {description}
            </p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ staggerChildren: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex items-center px-[15px] py-[7px] rounded-full text-white text-sm font-medium transition duration-200 ease-in-out transform"
                  style={{ backgroundColor: FEATURE_BUTTON_COLOR }}
                >
                  <svg
                    className="h-4 w-4 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
