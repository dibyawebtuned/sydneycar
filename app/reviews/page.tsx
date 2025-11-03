"use client";

import React from "react";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const PRIMARY_BG = "#F9FAFB";
const CARD_BG = "#FFFFFF";
const TEXT_COLOR = "#1A202C";
const SUBTLE_GRAY = "#718096";
const ACCENT_YELLOW = "#FDB813";
const SECONDARY_BLUE = "#044E9E";

const testimonials = [
  {
    id: 1,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Sophie Moore",
    title: "Designer at Brix Templates",
    avatar: "/avatar_one.jpg",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "John Carter",
    title: "Marketing Lead",
    avatar: "/avatar_two.jpg",
    rating: 4,
  },
  {
    id: 3,
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Michael Chen",
    title: "VP of Design",
    avatar: "/avatar_three.jpg",
    rating: 5,
  },
];

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  avatar?: string;
  rating?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  title,
  avatar,
  rating = 5,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
    transition={{ duration: 0.6 }}
    className="bg-white rounded-2xl p-8 shadow-md flex flex-col gap-4 relative"
  >
    <Quote size={32} className="text-[#044E9E] absolute -top-5 left-6 opacity-80" />

    {/* Star Rating */}
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={20}
          className={i < rating ? "text-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>

    <p className="text-gray-700 italic leading-relaxed">{quote}</p>
    <div className="flex items-center gap-4 mt-4">
      <Image
        src={avatar || "/aboutImg.png"}
        width={100}
        height={10}
        alt={name}
        className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
      />
      <div>
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-500 uppercase tracking-wide">{title}</p>
      </div>
    </div>
  </motion.div>
);

const TestimonialsPage: React.FC = () => {
  return (
    <section className="py-15 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-[50px]">
          {/* Header */}
          <div className="sm:w-[50%]">
            <div className="flex items-center gap-2.5">
              <h3 className="text-[#044E9E] text-[18px] sm:text-[20px] font-semibold uppercase tracking-widest relative pb-2 inline-block whitespace-nowrap font-cabinet">
                TESTIMONIALS
              </h3>
              <span className="w-full h-px bg-[#9F9F9F] mb-1.5"></span>
            </div>

            <h2
              className="text-[#0A1931] text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-left lg:text-left font-cabinet font-extrabold"
            >
              WHAT OUR{" "}
              <span
                className="inline-block relative text-[32px] sm:text-[40px] lg:text-[48px] leading-none text-[#044E9E]"
              >
                CLIENT
                <span className="absolute left-0 bottom-0.5 w-full h-3 sm:h-3.5 -z-10 bg-[#044E9E]"></span>
              </span>{" "}
              SAYS
            </h2>

            <p className="text-[#6A6A6A] text-lg">
              Real experiences from people just like you who used our free car
              removal and towing services.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPage;
