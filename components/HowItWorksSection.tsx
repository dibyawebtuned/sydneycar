"use client";

import React from "react";
import Image from "next/image";
import { Phone, FileText, Truck } from "lucide-react";
import { motion } from "framer-motion";

const PRIMARY_BLUE = "#E2F0FF";
const ACCENT_YELLOW = "#fdb813";
const HEADING_COLOR = "#1e1e1e";
const DARK_CONTRAST = "#0c55a6";

const steps = [
  { number: 1, title: "Get a Quote", description: "Call us or use the form to get an instant, non-obligatory quote.", icon: Phone },
  { number: 2, title: "Accept the Offer", description: "We agree on a price and schedule a free pickup time that suits you.", icon: FileText },
  { number: 3, title: "We Tow & Pay You", description: "Our team arrives, pays you cash on the spot, and tows your car away.", icon: Truck },
];

interface StepProps {
  step: typeof steps[0];
  index: number;
}

const Step: React.FC<StepProps> = ({ step, index }) => {
  const IconComponent = step.icon;
  const fromDirection = index % 2 === 0 ? -100 : 100;

  return (
    <motion.div
      initial={{ opacity: 0, x: fromDirection }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative flex-1 flex flex-col items-center z-20 min-w-40 sm:min-w-[180px]"
    >
      {/* Circle and Icon */}
      <div className="relative mb-4">
        <div
          className="w-[180px] h-[180px] border-[5px] border-[#044E9E] rounded-full flex items-center justify-center shadow-lg"
          style={{ backgroundColor: ACCENT_YELLOW }}
        >
          <IconComponent size={60} style={{ color: DARK_CONTRAST }} />
        </div>
      </div>

      {/* Content */}
      <div className="text-center mt-2 max-w-[180px]">
        <h4 className="text-[30px] font-bold mb-1 text-[#044E9E] font-cabinet">
          {step.title}
        </h4>
      </div>
    </motion.div>
  );
};

const HowItWorksSection: React.FC = () => {
  return (
    <section
      className="py-16 relative overflow-visible bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/howImg.png')` }}
    >
      <div className="absolute inset-0 z-10" style={{ backgroundColor: "#E2F0FFE6" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 w-[50%]">
          <div className="flex items-center gap-2.5">
            <h3
              className="text-[18px] sm:text-[20px] font-semibold uppercase tracking-widest relative pb-2 inline-block whitespace-nowrap font-cabinet"
              style={{ color: DARK_CONTRAST }}
            >
              HOW IT WORKS
            </h3>
            <span className="w-full h-px bg-[#9F9F9F] mb-1.5"></span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-left lg:text-left font-cabinet font-extrabold"
            style={{ color: HEADING_COLOR }}
          >
            SIMPLE,{" "}
            <span className="inline-block relative z-10 text-[#044E9E]">
              FAST
              <span className="absolute left-0 right-0 -z-10"></span>
            </span>{" "}
            & STRESS-FREE
          </h2>
        </div>
      </div>

      {/* Steps Container with road image */}
      <div className="relative w-full flex justify-center items-center">
        {/* Road background (with proper height & containment) */}
        <div className="relative w-full h-[200px] z-10">
          <Image
            src="/road.png"
            alt="road connector"
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
            priority
          />
        </div>

        {/* Steps floating above road */}
        <div className="absolute inset-0 z-20 flex flex-col sm:flex-row justify-between items-center gap-12 px-4 sm:px-8">
          {steps.map((step, index) => (
            <Step key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
