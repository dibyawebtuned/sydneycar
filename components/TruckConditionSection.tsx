"use client";

import React from "react";
import { motion } from "framer-motion";
import { Truck, Wrench, FileX, Building2 } from "lucide-react";

const PRIMARY_BLUE = "#044E9E";
const HEADING_COLOR = "#1e1e1e";
const HIGHLIGHT_YELLOW = "#FEC130";
const SECTION_BG = "#F8F8F8";

const truckConditions = [
    {
        icon: <Truck size={40} />,
        title: "Rusted or Aged Beyond Repair",
        description: "Old, rusted, or unwanted trucks — we’ll take them off your hands and pay you cash instantly.",
    },
    {
        icon: <Wrench size={40} />,
        title: "Mechanically Faulty or Accident Damaged",
        description: "Non-running, wrecked, or accident-damaged trucks are all accepted — no repairs needed.",
    },
    {
        icon: <FileX size={40} />,
        title: "Without Registration or Missing Parts",
        description: "Missing rego, keys, or panels? No problem — we handle incomplete or deregistered vehicles.",
    },
    {
        icon: <Building2 size={40} />,
        title: "Fleet Trucks Retired from Service",
        description: "We buy retired fleet or commercial trucks in bulk, simplifying your disposal process.",
    },
];

const TruckConditionSection: React.FC = () => {
    return (
        <section className="py-15" style={{ backgroundColor: SECTION_BG }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:w-[50%]"
                >
                    <div className="flex items-center gap-2.5">
                        <h3
                            className="text-[18px] sm:text-[20px] font-semibold uppercase tracking-widest relative pb-2 inline-block whitespace-nowrap font-cabinet"
                            style={{ color: PRIMARY_BLUE }}
                        >
                            WE BUY TRUCKS OF ALL CONDITIONS
                        </h3>
                        <span className="w-full h-px bg-[#9F9F9F] mb-1.5"></span>
                    </div>

                    <h2
                        className="uppercase text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-left lg:text-left font-cabinet font-extrabold"
                        style={{ color: HEADING_COLOR }}
                    >
                        Your Truck Doesn’t Need to Be{" "}
                        <span className="relative inline-block">
                            <span className="absolute left-0 bottom-2 w-full h-3 sm:h-3.5 bg-[#FEC130] z-0"></span>
                            <span className="relative text-[#1F4A93] font-extrabold">
                                Running or Perfect
                            </span>
                        </span>{" "}
                    </h2>

                </motion.div>

                {/* Condition Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {truckConditions.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center 
        hover:shadow-2xl transition-all duration-300 hover:bg-[#044E9E] cursor-pointer"
                        >
                            <div
                                className="p-4 rounded-full mb-4 transition-colors duration-300 group-hover:bg-white"
                                style={{ backgroundColor: HIGHLIGHT_YELLOW }}
                            >
                                <div className="text-[#044E9E] group-hover:text-[#044E9E]">
                                    {item.icon}
                                </div>
                            </div>

                            <h4
                                className="font-semibold text-lg mb-2 text-[#1e1e1e] transition-colors duration-300 group-hover:text-white"
                            >
                                {item.title}
                            </h4>

                            <p className="text-[#6A6A6A] text-sm transition-colors duration-300 group-hover:text-white/90">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TruckConditionSection;
