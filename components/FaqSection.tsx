"use client";

import React from "react";
import { HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

const PRIMARY_BLUE = "#0c55a6";
const ACCENT_YELLOW = "#fdb813";
const HEADING_COLOR = "#1e1e1e";
const SECTION_BG = "#F0EFEE";

const faqs = [
  {
    id: 1,
    question: "Do I have to pay for towing?",
    answer:
      "Not at all! Our towing and car removal services are completely free throughout Sydney. You won't have to worry about any hidden fees or call-out charges. Whether your car is parked in your driveway, garage, or roadside, our professional team handles the entire removal process at no cost to you.",
  },
  {
    id: 2,
    question: "How much cash can I get?",
    answer:
      "We offer instant cash payments ranging from $200 up to $9,999, depending on your vehicle's make, model, age, and condition. Even if your car is old, damaged, or no longer running, we guarantee the best possible offer in the market and pay you on the spot during pickup.",
  },
  {
    id: 3,
    question: "What documents do I need?",
    answer:
      "You'll only need a valid ID (such as a driver's license) and proof of vehicle ownership (like registration papers). Once those are verified, our team takes care of the rest — from paperwork to towing. We make the process smooth, fast, and hassle-free, from paperwork to towing. We make the process smooth, fast, and hassle-free.",
  },
  {
    id: 4,
    question: "How soon can you pick up my car?",
    answer:
      "In most Sydney suburbs, we can arrange same-day car removal — often within just a few hours of your call. Our team operates 7 days a week, including weekends, to ensure maximum convenience. You choose the pickup time, and we'll be there right on schedule.",
  },
];

interface FaqCardProps {
  faq: typeof faqs[0];
  index: number;
}

const FaqCard: React.FC<FaqCardProps> = ({ faq, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-[#F0EFEE] flex flex-col gap-2.5 rounded-[10px] p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300 relative"
    >
      <div className="flex items-center gap-[15px]">
        <div
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1"
          style={{ backgroundColor: ACCENT_YELLOW }}
        >
          <HelpCircle size={18} className="text-white" />
        </div>
        <h3 className="text-xl font-bold leading-snug" style={{ color: HEADING_COLOR }}>
          {faq.question}
        </h3>
      </div>
      <p className="text-[#6A6A6A] text-justify text-base leading-relaxed pl-12 lg:pl-12">
        {faq.answer}
      </p>
    </motion.div>
  );
};

const FaqSection: React.FC = () => {
  return (
    <section
      id="faq"
      className="relative py-15 overflow-hidden bg-[#ffffff]"
    >
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/howImg.png')",
          opacity: 0.2,
        }}>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-[25px]">
        {/* Header */}
        <div className="text-left sm:w-[48%]">
          <div className="flex items-center gap-2.5">
            <h3
              className="text-[18px] sm:text-[20px] font-semibold uppercase tracking-widest relative pb-2 inline-block whitespace-nowrap font-cabinet"
              style={{ color: PRIMARY_BLUE }}
            >
              FREQUENTLY ASKED QUESTIONS
            </h3>
            <span className="w-full h-px bg-[#9F9F9F] mb-1.5"></span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-left lg:text-left font-cabinet font-extrabold"
            style={{ color: HEADING_COLOR }}
          >
            GET QUICK {" "}
            <span className="inline-block relative z-10 text-[#044E9E]">
              ANSWERS

              <span className="absolute left-0 right-0 -z-10"></span>
            </span>{" "}
          </h2>
        </div>

        {/* FAQ Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <FaqCard key={faq.id} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
