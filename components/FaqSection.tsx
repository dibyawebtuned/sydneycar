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
    question: "Is your car removal service really free?",
    answer:
      "Yes! Our car removal service is completely free — we cover towing, paperwork, and pickup costs. You’ll only pay nothing; in fact, you’ll receive instant cash for your vehicle starting from $200, depending on its condition.",
  },
  {
    id: 2,
    question: "How quickly can you pick up my vehicle?",
    answer:
      "We provide same-day or very rapid pickups across all Sydney suburbs. Once you call or message us, we’ll give you an instant quote and schedule a pickup time convenient for you.",
  },
  {
    id: 3,
    question: "Do you offer cash payment on the spot?",
    answer:
      "Absolutely. We provide instant cash payments at the time of pickup. There’s no waiting, no bank transfers, and no hidden conditions — just cash in your hand for your unwanted vehicle.",
  },
  {
    id: 4,
    question: "Do you recycle or dispose of vehicles responsibly?",
    answer:
      "Absolutely. We operate with licensed and approved wreckers to recycle and salvage vehicles responsibly. Usable parts are salvaged, metals recycled, and harmful fluids disposed of safely — keeping Sydney cleaner and greener.",
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
            className="text-3xl sm:text-4xl lg:text-5xl text-left lg:text-left font-cabinet font-extrabold"
            style={{ color: HEADING_COLOR }}
          >
            GET QUICK {" "}
            <span className="relative inline-block">
              <span className="absolute left-0 bottom-0.5 w-full h-3 sm:h-3.5 bg-[#FEC130] z-0"></span>
              <span className="relative text-[#1F4A93] font-extrabold">ANSWERS</span>
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
