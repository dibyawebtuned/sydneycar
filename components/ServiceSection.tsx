"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Truck, Zap, RotateCw, Trash2, XCircle, Package } from 'lucide-react';

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});


const PRIMARY_BLUE = '#0c55a6';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isHighlighted?: boolean;
  animationDirection?: "left" | "right";
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  isHighlighted = false,
  animationDirection = "left",
  onMouseEnter,
  onMouseLeave,
}) => (
  <div
    // initial={{ opacity: 0, x: animationDirection === "left" ? -100 : 100 }}
    // whileInView={{ opacity: 1, x: 0 }}
    // viewport={{ once: true, amount: 0.2 }}
    // transition={{ duration: 0.8 }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={`
      group flex flex-col items-center justify-between text-center p-6 rounded-4xl h-full transition-all duration-300 ease-in-out
      ${isHighlighted
        ? "bg-[#fdb813] shadow-xl text-[#0c55a6] transform"
        : "bg-transparent text-gray-200 hover:bg-[#FEC130] hover:shadow-xl"
      }
    `}
  >
    {/* Icon, Title & Descritpion */}
    <div className='flex flex-col items-center'>
      {/* Icon */}
      <div className={`p-4 rounded-full transition-colors duration-300
      ${isHighlighted
          ? "text-[#0c55a6]"
          : "text-[#fdb813] group-hover:text-[#0c55a6]"
        }
    `}>
        {Icon}
      </div>


      {/* Title & Descritpion */}
      <div className='flex flex-col gap-[7px]'>
        {/* title */}
        <h3 className={`text-[24px] font-bold transition-colors duration-300 font-cabinet
      ${isHighlighted ? "text-[#0c55a6]" : "text-white group-hover:text-[#0c55a6]"}
      `}>
          {title}
        </h3>

        {/* description */}
        <p className={`text-sm transition-colors duration-300 ${inter.className}
      ${isHighlighted ? "text-[#333333]" : "text-gray-300 group-hover:text-[#333333]"}
      `}>
          {description}
        </p>
      </div>
    </div>

    {/* READ MORE */}
    <button className={`
      mt-6 px-4 py-2 rounded-full text-[16px] font-medium uppercase tracking-wider transition-all duration-300 ease-in-out cursor-pointer ${inter.className}
      ${isHighlighted
        ? "border-[#0c55a6] text-[#333333] hover:bg-[#0c55a6] hover:text-white"
        : "border-[#fdb813] text-[#fdb813] group-hover:border-[#0c55a6] group-hover:text-[#333333] hover:bg-[#fdb813] hover:text-[#333333]"
      }
    `}>
      READ MORE
    </button>
  </div>
);

const ServicesSection: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const ICON_WIDTH = 93.75;
  const ICON_HEIGHT = 71.875;

  const servicesData = [
    { title: "Car Removal", description: "Turn your unwanted car into instant cash with Sydney Car Removal and Towing Services — the city’s trusted team for fast, free, and reliable.", iconSrc: <Truck className="w-[70px] h-20" />, animationDirection: "left" },
    { title: "Car Towing", description: "Need fast and reliable car towing in Sydney? At Sydney Car Removal and Towing Services, we provide 24/7 towing for all types of vehicles", iconSrc: <Zap className="w-[70px] h-20" />, animationDirection: "right" },
    { title: "Old Car Removal", description: "If your old car has been sitting unused, collecting dust or rust, it’s time to turn it into cash.", iconSrc: <RotateCw className="w-[70px] h-20" />, animationDirection: "left" },
    { title: "Junk Car Removal", description: "Got a car that’s beyond repair? Maybe it’s been sitting in the driveway, collecting rust and taking up space.", iconSrc: <Trash2 className="w-[70px] h-20" />, animationDirection: "right" },
    { title: "Unwanted Cars", description: "Have an old or unwanted truck taking up space? Whether it’s damaged, unregistered, or no longer worth repairing, Sydney Car Removal and Towing", iconSrc: <XCircle className="w-[70px] h-20" />, animationDirection: "left" },
    { title: "Used Car", description: "When it’s time to say goodbye to your old or damaged car, trust Sydney Car Removal and Towing Services", iconSrc: <Package className="w-[70px] h-20" />, animationDirection: "right" },
  ];

  return (
    <section className="relative w-full py-15 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/serviceImg.png"
          alt="Background of towing services"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="z-0"
        />
        <div className="absolute inset-0 z-10" style={{ backgroundColor: 'rgba(0, 32, 67, 0.6)' }}></div>
      </div>

      {/* Services Main Content */}
      <div className="relative z-20 container mx-auto flex flex-col gap-5 px-4 sm:px-6 lg:px-8 text-white">
        {/* Title & Sub-Titles */}
        <div className="flex flex-col gap-0 items-center text-center px-4 sm:px-6 lg:px-0">
          <div className='flex w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] items-center gap-2.5'>
            <span className='flex-1 h-[1.5px] bg-[#F3EFEB]'></span>
            <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold uppercase tracking-widest relative pb-1 inline-block text-[#F3EFEB]">SERVICES</h3>
            <span className='flex-1 h-[1.5px] bg-[#F3EFEB]'></span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] md:text-[49px] font-extrabold text-[#F3EFEB] font-cabinet mt-2 sm:mt-3">
            <span className='text-[#FEC130]'>RELIABLE</span> & QUICK SERVICES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.iconSrc}
              animationDirection={service.animationDirection as "left" | "right"}
              isHighlighted={hovered === index || (hovered === null && index === 0)}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
