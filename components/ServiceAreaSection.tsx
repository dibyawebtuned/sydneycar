"use client";

import { motion } from "framer-motion";

const PRIMARY_BLUE = "#0c55a6";
const HEADING_COLOR = "#1e1e1e";
const SECTION_BG = "#F0EFEE";

const serviceAreas = [
  "Manly",
  "South Sydney",
  "Willoughby",
  "Kogarah",
  "Hunters Hill",
  "Canterbury",
  "Rockdale",
  "Parramatta",
  "Liverpool",
  "Penrith",
  "Blacktown",
  "Gosford",
  "Northern Beaches",
  "Western Sydney",
  "Eastern Suburbs",
  "Inner West",
];

interface CityCardProps {
  cityName: string;
  index: number;
}

const CityCard: React.FC<CityCardProps> = ({ cityName, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-3xl p-4 flex items-center justify-center text-center
    shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer
    h-20  hover:bg-[#044E9E] group"
    >
      <span className="text-lg sm:text-xl font-semibold text-[#1e1e1e] group-hover:text-white">
        {cityName}
      </span>
    </motion.div>

  );
};

const ServiceAreaSection: React.FC = () => {
  return (
    <section id="service-areas" className="py-15" style={{ backgroundColor: SECTION_BG }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[25px]">
        {/* Header */}
        <div className="text-left sm:w-[50%]">
          <div className="flex items-center gap-2.5">
            <h3 className="text-[18px] sm:text-[20px] font-semibold uppercase tracking-widest relative pb-2 inline-block whitespace-nowrap font-cabinet"
              style={{ color: PRIMARY_BLUE }}>
              SERVICE AREAS
            </h3>
            <span className="w-full h-px bg-[#9F9F9F] mb-1.5"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-left lg:text-left font-cabinet font-extrabold"
            style={{ color: HEADING_COLOR }}>
            SERVING ALL REGIONS ACROSS {" "}
            <br className="lg:hidden" />
            <span className="relative inline-block">
              <span className="absolute left-0 bottom-0.5 w-full h-3 sm:h-3.5 bg-[#FEC130] z-0"></span>
              <span className="relative text-[#1F4A93] font-extrabold">SYDNEY</span>
            </span>{" "}
          </h2>
        </div>

        {/* Service Area Cards Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {serviceAreas.map((area, index) => (
            <CityCard key={index} cityName={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;
