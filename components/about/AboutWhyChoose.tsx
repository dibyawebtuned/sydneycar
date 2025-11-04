"use client";

import React, { useRef, useState, useEffect } from "react";
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

const AboutWhyChoose: React.FC = () => {
  const features = [
    { title: "Instant Cash On The Spot", description: "Get paid immediately when we pick up your vehicle. No waiting, no hassle." },
    { title: "Free Sydney-Wide Removal", description: "We offer free vehicle removal anywhere across Sydney, no hidden charges." },
    { title: "Eco-Friendly Recycling", description: "All vehicles are recycled responsibly to minimize environmental impact." },
    { title: "7 Days A Week Service", description: "Our team is available every day of the week to suit your schedule." },
    { title: "Friendly Local Experts", description: "Our team is knowledgeable, approachable, and always ready to help." },
    { title: "All Vehicles Accepted", description: "Cars, trucks, motorcycles – we accept all types of vehicles, working or not." },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !featuresRef.current) return;

      const featuresRect = featuresRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let progress = (windowHeight - featuresRect.top) / featuresRect.height;
      progress = Math.min(Math.max(progress, 0), 1);

      setLineHeight(progress * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-[#F0EFEE] py-15" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 relative">

          {/* Left Column: Sticky Text */}
          <div className="w-full lg:w-1/2 lg:relative">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-2.5 mb-4">
                <h3
                  className="text-[18px] sm:text-[20px] font-semibold uppercase tracking-widest relative pb-2 inline-block whitespace-nowrap font-cabinet"
                  style={{ color: PRIMARY_BLUE }}
                >
                  WHY CHOOSE US
                </h3>
                <span className="w-full h-px bg-[#9F9F9F] mb-1.5"></span>
              </div>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-left font-cabinet font-extrabold mb-6"
                style={{ color: HEADING_COLOR }}
              >
                TRUSTED,{" "}
                <span className="inline-block relative text-[32px] sm:text-[40px] lg:text-[48px] leading-none" style={{ color: "#1F4A93" }}>
                  FAST
                  <span className="absolute left-0 bottom-0.5 w-full h-3 sm:h-3.5 -z-10" style={{ backgroundColor: '#FEC130' }}></span>
                </span>{" "}
                & HASSLE-
                <br className="hidden sm:inline" />
                FREE
              </h2>

              <p className={`text-[#6A6A6A] text-[14px] sm:text-[16px] font-medium mb-5 mt-5 text-justify w-full ${inter.className}`}>
                At Sydney Car Removal and Towing Services, we are all about making the process
                simple, quick, and stress-free. Whether your vehicle is old, damaged, or
                unwanted, our friendly local team ensures you get the best value, instant cash,
                and free pickup anywhere in Sydney — all in one smooth experience.
              </p>
            </div>
          </div>

          {/* Right Column: Features Cards with Vertical Line */}
          <div className="w-full lg:w-1/2 relative flex flex-col lg:flex-row gap-6">
            {/* Vertical Progress Line */}
            <div className="hidden lg:block w-1 bg-gray-300 relative mr-6">
              <motion.div
                className="absolute left-0 top-0 w-1 bg-primary-blue"
                style={{ backgroundColor: PRIMARY_BLUE }}
                animate={{ height: `${lineHeight}%` }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
              />
            </div>

            {/* Feature Cards */}
            <div ref={featuresRef} className="flex-1 flex flex-col gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white flex flex-col gap-2 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-1"
                >
                  <div>
                    <div className="inline-flex items-center px-[15px] py-[7px] rounded-full text-white text-sm font-medium transition duration-200 ease-in-out transform" style={{ backgroundColor: FEATURE_BUTTON_COLOR }}>
                      <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature.title}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm font-medium text-justify ml-1">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutWhyChoose;
