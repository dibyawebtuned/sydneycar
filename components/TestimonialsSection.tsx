"use client";

import React, { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TEXT_COLOR = "#ffffff";
const ACCENT_YELLOW = "#fdb813";
const PRIMARY_BLUE = "#0A1931";
const SECONDARY_BLUE = "#044E9E";
const HEADING_COLOR = "#ffffff";

interface TestimonialData {
  quote: string;
  author: string;
  rating: number;
}

interface StarRatingProps {
  count: number;
}

const StarRating: React.FC<StarRatingProps> = ({ count }) => (
  <div className="flex space-x-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={20}
        fill={i < count ? ACCENT_YELLOW : "rgba(255, 255, 255, 0.3)"}
        strokeWidth={0}
        style={{ color: ACCENT_YELLOW }}
      />
    ))}
  </div>
);

const testimonials: TestimonialData[] = [
  {
    quote:
      "Super quick and professional service! They arrived within an hour and paid cash on the spot. Made getting rid of my old car stress-free.",
    author: "Jessica M., Parramatta",
    rating: 5,
  },
  {
    quote:
      "Highly recommend! The team was friendly, efficient, and offered a great price for my old truck.",
    author: "Michael T., Sydney",
    rating: 5,
  },
  {
    quote:
      "Excellent service! Called them in the morning and by afternoon my car was gone and I had cash in hand.",
    author: "Priya K., Liverpool",
    rating: 5,
  },
  {
    quote:
      "Very easy process and fast response. Definitely the best car removal service I’ve used.",
    author: "Daniel W., Blacktown",
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  // --- Autoplay logic ---
  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setTimeout(() => {
        handleNext();
      }, 3000);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, isPaused]);


  const testimonial = testimonials[index];

  return (
    <section
      className="py-15 select-none"
      style={{ backgroundColor: PRIMARY_BLUE, color: TEXT_COLOR }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* --- Left Column: Heading --- */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="">
              <div className="flex items-center gap-2.5">
                <h3 className="text-[18px] sm:text-[20px] font-semibold uppercase tracking-widest relative pb-2 inline-block whitespace-nowrap font-cabinet text-[#F3EFEB]">
                  TESTIMONIALS
                </h3>
                <span className="w-full h-px bg-[#9F9F9F] mb-1.5"></span>
              </div>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-left lg:text-left font-cabinet font-extrabold"
                style={{ color: HEADING_COLOR }}
              >
                WHAT OUR{" "}
                <span
                  className="relative inline-block"
                >
                  <span className="absolute left-0 bottom-2 w-full h-3 sm:h-3.5 z-0 bg-[#1F4A93]"></span>
                  <span className="relative text-[#FEC130] font-extrabold">CLIENT</span>
                </span>{" "}
                SAYS
              </h2>

              <p className="text-white/70 text-lg">
                Real experiences from people just like you who used our free car
                removal and towing services.
              </p>
            </div>
          </motion.div>

          {/* --- Right Column: Carousel --- */}
          <div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="p-8 sm:p-12 rounded-3xl shadow-2xl overflow-hidden min-h-[420px] flex flex-col justify-between relative"
              style={{ backgroundColor: SECONDARY_BLUE }}
            >
              {/* Quotation background mark */}
              {/* Quotation background mark (SVG) */}
              <div className="absolute top-1/2 right-10 transform -translate-y-1/2 scale-x-[-1] scale-y-[-1] select-none pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-40 h-30 fill-[#013A77]"
                >
                  <path d="M464 32H336c-26.51 0-48 21.49-48 48v128c0 26.51 21.49 48 48 48h32v64c0 17.67-14.33 32-32 32h-16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h16c70.69 0 128-57.31 128-128V80c0-26.51-21.49-48-48-48zM176 32H48C21.49 32 0 53.49 0 80v128c0 26.51 21.49 48 48 48h32v64c0 17.67-14.33 32-32 32H32c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h16c70.69 0 128-57.31 128-128V80c0-26.51-21.49-48-48-48z" />
                </svg>
              </div>


              {/* Animated testimonial content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="flex flex-col justify-between h-full"
                >
                  <p className="text-xl sm:text-[24px] font-bold italic leading-[1.3] mb-8 text-white">
                    {testimonial.quote}
                  </p>
                  <div>
                    <StarRating count={testimonial.rating} />
                    <p
                      className="text-lg font-bold"
                      style={{ color: ACCENT_YELLOW }}
                    >
                      - {testimonial.author}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Navigation */}
              <div className="flex justify-center gap-2 mt-6 absolute bottom-6 left-0 right-0">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-3 h-3 rounded-full transition-all ${i === index ? "bg-[#fdb813]" : "bg-white/30"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
