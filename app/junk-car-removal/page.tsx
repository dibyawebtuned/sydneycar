"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import OurCoreValuesSection from "@/components/OurCoreValuesSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import { Leaf } from "lucide-react";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});


const JunkCarRemovalPage: React.FC = () => {

  const [current, setCurrent] = useState(0);
  const router = useRouter();
  // Auto-slide every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % services.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "Car Removal",
      desc: "Fast and safe car towing service across Sydney at competitive rates.",
      img: "/service/carRemoval.jpg",
      link: "/car-removal",
    },
    {
      title: "Cash for Trucks",
      desc: "We pay top cash for trucks of all models and conditions.",
      img: "/service/cashTruck.jpg",
      link: "/cash-for-truck",
    },
    {
      title: "Old Car Removal",
      desc: "Free pickup and instant cash for your old or unwanted vehicles.",
      img: "/service/oldCarRemoval.png",
      link: "/old-car-removal",
    },
    {
      title: "Car Wreckers",
      desc: "Eco-friendly car dismantling and recycling services in Sydney.",
      img: "/service/carWreckers.png",
      link: "/car-wreckers",
    },
    {
      title: "Junk Car Removal",
      desc: "Quick and hassle-free removal of junk or damaged cars for free.",
      img: "/service/junkCarRemoval.png",
      link: "/junk-car-removal",
    },
  ];
  return (
    <div className="w-full bg-gray-50">

      {/* Hero Section */}
      <section className="relative bg-[#002043] text-white overflow-hidden min-h-screen xl:min-h-[90vh] sm:min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <Image
            src="/junk_car_removal.jpg"
            alt="Junk Car Removal"
            fill
            className="object-cover z-0"
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "linear-gradient(90.44deg, rgba(4, 78, 158, 0.8) 0.4%, rgba(0, 0, 0, 0.4) 99.66%)",
            }}
          />
        </div>
        <div
          className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between w-full gap-10 md:gap-[50px]"
        >

          {/* Text Content */}
          <motion.div
            className="w-full md:w-1/2 space-y-6 flex flex-col justify-center items-start text-left"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="mb-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug sm:leading-tight md:leading-[1.15] text-[#f0f4f8] font-cabinet">
              Junk Car Removal Sydney
            </h1>
            <p
              className={`text-[#DBDBDB] text-sm sm:text-base leading-normal  text-justify ${inter.className}`}
            >
              Got a car that’s beyond repair? Maybe it’s been sitting in the driveway, collecting rust and taking up space. At Sydney Car Removal and Towing Services, we specialise in junk car removal across Sydney, offering free towing and instant cash payments starting from $200 for vehicles in any condition.
            </p>
            <motion.a
              href="tel:+0450747474"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex flex-wrap gap-2 items-center justify-center md:justify-start px-4 sm:px-6 py-2 border border-transparent text-sm sm:text-base font-medium shadow-lg text-[#121212] bg-[#FEC130] hover:bg-[#e6a200] transition duration-200 transform hover:scale-[1.02] active:scale-[0.98] ${inter.className}`}
            >
              {/* Vibrating Phone Icon */}
              <motion.div
                className="mr-2"
                animate={{ x: [0, -1.5, 1.5, -1, 1, 0] }}
                transition={{ repeat: Infinity, repeatDelay: 2, duration: 0.3 }}
              >
                <Phone size={18} />
              </motion.div>
              Contact Us
            </motion.a>


          </motion.div>
          {/* Hero Image */}
          {/* <motion.div
            className="w-full md:w-1/2 relative h-64 sm:h-72 md:h-96 lg:h-[350px] overflow-hidden rounded-2xl shadow-xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Image
              src="/service/junkCarRemoval.png"
              alt="Old Car Removal"
              fill
              className="object-cover transform transition-transform duration-500 hover:scale-105 opacity-70"
            />
          </motion.div> */}

          <motion.div
            className="w-full md:w-1/2 relative h-64 sm:h-72 md:h-96 lg:h-[350px] rounded-2xl shadow-xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Image
              src="/junk_car_removal.jpg"
              alt="Old Car Removal"
              fill
              className="object-cover transform transition-transform duration-500 rounded-2xl opacity-70"
            />

            {/* Floating Eco-Friendly Card */}
            <motion.div
              className="absolute -left-7 -bottom-8 max-w-xl bg-green-50/90 backdrop-blur-sm shadow-2xl rounded-2xl p-4 flex flex-col gap-2 border border-green-200 z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 bg-green-800 rounded-full flex items-center justify-center shadow-md">
                  <Leaf className="w-6 h-6 text-white" />
                </div>


                <h4 className="text-green-800 font-semibold text-base sm:text-lg font-cabinet">
                  Eco-Friendly Recycling Process
                </h4>
              </div>

              {/* Description */}
              <p className={`text-green-900 text-[12px] leading-snug font-normal ${inter.className}`}>
                When you choose us, your old vehicle won’t end up in a landfill. We work with authorized wreckers and recyclers to safely dismantle each car — salvaging reusable parts, recycling metal, and properly disposing of fluids and waste. It’s a clean, responsible way to say goodbye to your junk car.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>


      <WhyChooseUsSection
        smallHeading="WHY CHOOSE US"
        mainHeading={<>TRUSTED, <span className="text-[#1F4A93]">FAST</span> & HASSLE-FREE</>}
        description="Whether your car is old, damaged, wrecked, or no longer running, we’ll take it off your hands for free. There are no hidden fees or towing charges — just quick service and cash in your hand starting from $200."
        features={[
          "22+ years of experience",
          "Sydney-wide coverage",
          "24/7 availability",
          "Eco-friendly car disposal",
          "Instant cash payment",
          "Fully licensed",
        ]}
        imageSrc="/whyChoose.png"
        imageAlt="Tow truck loading a red car"
      />
      <OurCoreValuesSection />
      <HowItWorksSection />


      {/* Other Services Section with Sticky Left Column and Animations */}
      <section className="py-15 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 relative">

          {/* Left Column (Sticky) */}
          <div className="relative">
            <motion.div
              className="lg:sticky lg:top-28 flex flex-col justify-start space-y-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2.5">
                <h3 className="text-[18px] sm:text-[20px] font-semibold uppercase tracking-widest relative pb-2 inline-block whitespace-nowrap font-cabinet text-[#044E9E]">
                  Other services
                </h3>
                <span className="flex-1 h-px bg-[#9F9F9F] mb-1.5"></span>
              </div>

              <h2 className="uppercase text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight font-cabinet font-extrabold text-[#1e1e1e]">
                Explore Our<br />Other{" "}
                <span className="inline-block relative z-10 text-[#044E9E]">
                  Services
                </span>
              </h2>

              <p className={`text-[#6A6A6A] text-[14px] sm:text-[16px] mb-5 text-justify w-full font-medium ${inter.className}`}>
                We offer a range of professional and customizable car services
                designed to meet your unique needs and keep your vehicle in top condition.
              </p>

              {/* Animated CTA */}
              <motion.div
                className="flex items-center text-[#0c55a6] font-semibold cursor-pointer space-x-2"
                animate={{ x: [0, -3, 3, -3, 3, 0] }}
                transition={{ repeat: Infinity, repeatDelay: 2, duration: 0.8 }}
              >
                <Phone size={20} />
                <span>Ready to get our service?</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column (Services List) */}
          <div className="flex flex-col space-y-10">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6 group cursor-pointer"
              >
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full sm:w-1/2 h-56 sm:h-44 lg:h-52 rounded-2xl overflow-hidden shadow-md flex-shrink-0"
                >
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    onClick={() => router.push(service.link)}
                  />
                </motion.div>

                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex-1 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-black uppercase mb-2 font-cabinet group-hover:text-[#0c55a6]">
                      {service.title}
                    </h3>
                    <p className={`text-gray-600 text-sm sm:text-base font-medium text-justify ${inter.className}`}>
                      {service.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => router.push(service.link)}
                    className={`mt-3 text-[#0c55a6] text-sm uppercase font-semibold tracking-wide relative w-max after:content-[''] after:block after:h-0.5 after:bg-[#0c55a6] after:w-0 after:transition-all after:duration-300 group-hover:after:w-full ${inter.className}`}
                  >
                    View Details →
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreaSection/>

    </div>
  );
};

export default JunkCarRemovalPage;
