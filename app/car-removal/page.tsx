"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import OurCoreValuesSection from "@/components/OurCoreValuesSection";
import EcoFriendlySection from "@/components/EcoSection";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["400", "500", "600", "700"],
});


const services = [
    {
        title: "Car Towing",
        desc: "Fast and safe car towing service across Sydney at competitive rates.",
        img: "/service/carTowing.jpg",
        link: "/car-towing",
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

const CarRemovalPage: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const router = useRouter();

    // Auto-slide every 3.5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % services.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-[#002043] text-white overflow-hidden min-h-[70vh] xl:min-h-[90vh] sm:min-h-[40vh] flex items-center">
                {/* Background Layers */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-black/40 z-10"></div>

                    {/* Background Image */}
                    <Image
                        src="/service/carRemoval.jpg"
                        alt="Car Removal"
                        fill
                        className="object-cover z-0"
                        priority
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

                {/* Main Content */}
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between w-full gap-10 md:gap-[50px]">

                    {/* Text Content */}
                    <motion.div
                        className="w-full md:w-1/2 space-y-6 flex flex-col justify-center items-start text-left"
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {/* Title */}
                        <h1 className="mb-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug sm:leading-tight md:leading-[1.15] text-[#f0f4f8] font-cabinet">
                            Car Removal Sydney
                        </h1>

                        {/* Sub-Title */}
                        <p
                            className={`text-[#DBDBDB] text-sm sm:text-base leading-normal  text-justify ${inter.className}`}
                        >
                            Turn your unwanted car into instant cash with Sydney Car Removal and Towing Services — the city’s trusted team for fast, free, and reliable vehicle removals. With over 22 years of experience, we make it simple to get rid of any car, in any condition, anywhere across Sydney.
                        </p>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`inline-flex flex-wrap gap-2 items-center justify-center md:justify-start px-4 sm:px-6 py-2 border border-transparent text-sm sm:text-base font-medium shadow-lg text-[#121212] bg-[#FEC130] hover:bg-[#e6a200] transition duration-200 transform hover:scale-[1.02] active:scale-[0.98] ${inter.className}`}
                        >
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
                    <motion.div
                        className=" w-full md:w-1/2 relative h-64 sm:h-72 md:h-96 lg:h-[350px] overflow-hidden rounded-2xl shadow-xl"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                    >
                        <Image
                            src="/service/carRemoval.jpg"
                            alt="Old Car Removal"
                            fill
                            className="object-cover transform transition-transform duration-500 hover:scale-105 opacity-70"
                        />
                    </motion.div>
                </div>
            </section>


            {/* WhyChooseUsSection */}
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

            {/* OurCoreValuesSection */}
            <OurCoreValuesSection />

            {/* \EcoFriendlySection */}
            {/* <EcoFriendlySection /> */}

            {/* HowItWorksSection */}
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
                                Ready to get rid of your unwanted car? Call us now for free car removal and instant cash payment anywhere in Sydney.
                            </p>

                            {/* Animated CTA */}
                            <motion.div
                                className="flex items-center text-[#0c55a6] font-semibold cursor-pointer space-x-2"
                                animate={{ x: [0, -3, 3, -3, 3, 0] }}
                                transition={{ repeat: Infinity, repeatDelay: 2, duration: 0.8 }}
                            >
                                <Phone size={20} />

                                <a
                                    href="tel:+0402887766"
                                    className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#0c55a6] after:transition-all after:duration-300 hover:after:w-full"
                                >
                                    Ready to get our service?
                                </a>
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







            {/* Contact CTA Section */}
            {/* <section id="contact" className="py-20 bg-[#0c55a6] text-white">
                <div className="max-w-3xl mx-auto text-center px-4">
                    <motion.h2
                        className="text-3xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Ready to Remove Your Car?
                    </motion.h2>
                    <motion.p
                        className="mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Call us now or fill out the online form and get your car removed
                        quickly and hassle-free.
                    </motion.p>
                    <motion.a
                        href="tel:+0402887766"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-6 py-3 rounded-4xl bg-yellow-400 text-black font-medium hover:bg-yellow-300 transition duration-200"
                    >
                        <Phone size={18} className="mr-2" />
                        Call Now
                    </motion.a>
                </div>
            </section> */}
        </div>
    );
};

export default CarRemovalPage;
