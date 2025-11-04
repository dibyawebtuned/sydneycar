"use client";

import React, { useState } from "react";
import { Truck, CircleDollarSign, HandCoins } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});


const PRIMARY_BLUE = "#044E9E";
const HEADING_COLOR = "#1e1e1e";

interface ServiceCardProps {
  title: string;
  icon: React.ElementType;
  bgColorClass: string;
  iconColorClass: string;
}

// const ServiceCard: React.FC<ServiceCardProps> = ({
//   title,
//   icon: Icon,
//   bgColorClass,
//   iconColorClass,
// }) => (
//   <div className="flex flex-col items-center p-4 rounded-xl shadow-md border border-gray-100 bg-white min-h-[100px] transition-shadow duration-300 hover:shadow-2xl">
//     <div className={`p-4 rounded-xl mb-3 ${bgColorClass} ${iconColorClass} shadow-sm`}>
//       <Icon size={30} />
//     </div>
//     <p className="text-sm font-semibold text-gray-800 text-center leading-snug">{title}</p>
//   </div>
// );

const About: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);


  return (
    <section className="relative bg-white">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/howImg.png"
          alt="About background"
          fill
          priority
          className="object-cover object-center opacity-15"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-17">
        <motion.div
          className="w-full flex flex-col lg:flex-row items-start gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Content (Text + Cards) */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
          >
            <div className="w-full md:w-full lg:max-w-3xl">
              {/* Header */}
              <div className="mb-1">
                {/* Header */}
                <div className="flex items-center gap-2.5">
                  <h3
                    className="text-[18px] sm:text-[20px] font-semibold uppercase tracking-widest relative pb-2 inline-block whitespace-nowrap font-cabinet"
                    style={{ color: PRIMARY_BLUE }}
                  >
                    ABOUT US
                    {/* Single grey underline */}
                  </h3>
                  <span className="w-full h-px bg-[#9F9F9F] mb-1.5"></span>
                </div>


                <h1
                  className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-left lg:text-left font-cabinet font-extrabold"
                  style={{ color: HEADING_COLOR }}
                >
                  WE HAVE{" "}
                  <span className="inline-block relative text-[32px] sm:text-[40px] lg:text-[48px] leading-none" style={{ color: "#1F4A93" }}>
                    20 YEARS
                    <span className="absolute left-0 bottom-0.5 w-full h-[12px] sm:h-[14px] -z-10" style={{ backgroundColor: '#FEC130' }}></span>
                  </span>{" "}
                  OF
                  {" "}
                  <br className="lg:hidden" />
                  EXPERIENCE IN TOWING {" "}
                  <br className="lg:hidden" />
                  SERVICE.
                </h1>
              </div>

              {/* Description */}
              <p className={`text-[#6A6A6A] text-[14px] sm:text-[16px] mb-5 mt-5 text-justify w-full ${inter.className}`}>
                We’re a Sydney-based, family-run business dedicated to providing reliable,
                eco-conscious, and fast car removal solutions. With years of experience, Sam and
                Jay have helped thousands of Sydney residents clear space, earn cash, and recycle
                responsibly.
              </p>


              <div className="grid grid-cols-3 gap-5 w-full">
                {/* Card 1 */}
                <div
                  onMouseEnter={() => setHovered(1)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setHovered(hovered === 1 ? null : 1)}
                  className={`flex flex-col items-center justify-center p-5 sm:p-6 min-h-[140px] sm:h-[125px] rounded-2xl shadow-sm transition-all duration-300 cursor-pointer hover:shadow-xl text-center ${hovered === 1 ? "bg-[#fdb813]" : "bg-white"}`}
                >
                  <Truck
                    size={48}
                    className={`mb-3 transition-colors duration-300 ${hovered === 1 ? "text-[#0c55a6]" : "text-[#fdb813]"}`}
                  />
                  <span
                    className={`text-base sm:text-[16px] font-semibold transition-colors duration-300 ${hovered === 1 ? "text-[#0c55a6]" : "text-gray-900"}`}
                  >
                    We Tow
                  </span>
                </div>


                {/* Card 2 (Initially Active) */}
                <div
                  onMouseEnter={() => setHovered(2)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setHovered(hovered === 1 ? null : 2)}
                  className={`flex flex-col items-center justify-center p-5 sm:p-6 min-h-[140px] sm:h-[125px] rounded-2xl shadow-sm transition-all duration-300 cursor-pointer hover:shadow-xl ${hovered && hovered !== 2 ? "bg-white" : "bg-[#fdb813]"}`}
                >
                  <CircleDollarSign
                    size={40}
                    className={`mb-3 ${hovered && hovered !== 2 ? "text-[#fdb813]" : "text-[#0c55a6]"
                      }`}
                  />
                  <span
                    className={`text-base sm:text-[16px] font-semibold text-center leading-snug ${hovered && hovered !== 2 ? "text-gray-900" : "text-[#0c55a6]"
                      }`}
                  >
                    Get Paid, No Drama
                  </span>
                </div>

                {/* Card 3 */}
                <div
                  onMouseEnter={() => setHovered(3)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setHovered(hovered === 1 ? null : 3)}
                  className={`flex flex-col items-center justify-center p-5 sm:p-6 min-h-[140px] sm:h-[125px] rounded-2xl shadow-sm transition-all duration-300 cursor-pointer hover:shadow-xl ${hovered === 3 ? "bg-[#fdb813]" : "bg-white"
                    }`}
                >
                  <HandCoins
                    size={48}
                    className={`mb-3 ${hovered === 3 ? "text-[#0c55a6]" : "text-[#fdb813]"
                      }`}
                  />
                  <span
                    className={`text-base sm:text-[16px] font-semibold text-center leading-snug ${hovered === 3 ? "text-[#0c55a6]" : "text-gray-900"
                      }`}
                  >
                    Cash In Hand
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image (50% width) */}
          <motion.div
            className="w-full lg:w-1/2 relative h-[400px] md:h-[450px] lg:h-[550px] overflow-hidden"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
          >
            <Image
              src="/truck.png"
              alt="Truck"
              fill
              className="object-contain scale-110 translate-x-1 translate-y-1"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
