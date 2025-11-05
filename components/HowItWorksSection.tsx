"use client";

import React from "react";
import Image from "next/image";
import { Phone, FileText, Truck } from "lucide-react";
import { motion } from "framer-motion";

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
  mobile?: boolean;
}

const Step: React.FC<StepProps> = ({ step, index, mobile = false }) => {
  const IconComponent = step.icon;

  // Animation for desktop (x) or mobile (y)
  const initialProps = mobile
    ? { opacity: 0, y: 50 }
    : { opacity: 0, x: index % 2 === 0 ? -100 : 100 };

  const sizeProps = mobile
    ? { circle: 200, icon: 36, maxWidth: 200, textSize: "text-lg" }
    : { circle: 200, icon: 60, maxWidth: 200, textSize: "text-[30px]" };

  return (
    <motion.div
      initial={initialProps}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`relative flex-1 flex flex-col items-center z-20 min-w-[15px] sm:min-w-40 md:min-w-[180px] mt-14 md:mt-24`}
      style={{ minWidth: `${sizeProps.maxWidth}px` }}
    >
      {/* Circle and Icon */}
      <div
        className={`w-[${sizeProps.circle}px] h-[${sizeProps.circle}px] border-[5px] border-[#044E9E] rounded-full flex items-center justify-center shadow-lg mb-4`}
        style={{ backgroundColor: ACCENT_YELLOW }}
      >
        <IconComponent size={sizeProps.icon} style={{ color: DARK_CONTRAST }} />
      </div>

      {/* Content */}
      <div className="text-center mt-2" style={{ maxWidth: `${sizeProps.maxWidth}px` }}>
        <h4 className={`${sizeProps.textSize} font-bold mb-1 text-[#044E9E] font-cabinet`}>
          {step.title}
        </h4>
        {/* {mobile && <p className="text-gray-700 text-sm">{step.description}</p>} */}
      </div>
    </motion.div>
  );
};

const HowItWorksSection: React.FC = () => {
  return (
    <section className="relative py-15 bg-cover bg-center bg-no-repeat min-h-[400px] sm:min-h-[500px] md:min-h-[600px]" style={{ backgroundImage: `url('/howImg.png')` }}>
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-[#E2F0FFE6]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Header */}
        <div className="text-center md:w-[48%]">
          <div className="flex items-center gap-2.5">
            <h3 className="text-[18px] sm:text-[20px] font-semibold uppercase tracking-widest relative pb-2 inline-block whitespace-nowrap font-cabinet" style={{ color: DARK_CONTRAST }}>
              HOW IT WORKS
            </h3>
            <span className="w-full h-px bg-[#9F9F9F] mb-1.5"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-left lg:text-left font-cabinet font-extrabold"
            style={{ color: HEADING_COLOR }}>
            SIMPLE, {" "}
            <span className="relative inline-block">
              <span className="absolute left-0 bottom-2 w-full h-3 sm:h-3.5 bg-[#FEC130] z-0"></span>
              <span className="relative text-[#1F4A93] font-extrabold">FAST</span>
            </span> {" "}
            & STRESS-FREE
          </h2>
        </div>
      </div>

      {/* Desktop Steps Container */}
      {/* <div className="hidden sm:flex relative w-full justify-center items-center">
        <div className="relative w-full h-[200px] sm:h-[200px] md:h-[220px] z-10">
          <Image
            src="/road.png"
            alt="road connector"
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
            priority
          />
        </div>

        <div className="absolute inset-0 z-20 flex flex-row justify-between items-center gap-8 px-8">
          {steps.map((step, index) => (
            <Step key={step.number} step={step} index={index} />
          ))}
        </div>
      </div> */}

      {/* Desktop Steps Container */}
      <div className="hidden sm:flex relative w-full justify-center items-center">
        {/* Road background - hidden on mobile */}
        <div className="hidden sm:block relative w-full sm:h-[200px] md:h-[220px] z-10">
          <Image
            src="/road.png"
            alt="road connector"
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
            priority
          />
        </div>

        {/* Steps */}
        <div className="absolute inset-0 z-20 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-8 px-4 sm:px-8">
          {steps.map((step, index) => (
            <Step key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>

      {/* Mobile Steps Container */}
      <div className="sm:hidden relative w-full flex flex-col items-center gap-2Z">
        {steps.map((step, index) => (
          <Step key={step.number} step={step} index={index} mobile />
        ))}
      </div>

    </section>
  );
};

export default HowItWorksSection;
