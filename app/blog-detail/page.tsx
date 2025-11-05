"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCar, FaTruck, FaRecycle, FaClock, FaCashRegister, FaCheck } from "react-icons/fa";
import HowItWorksSection from "@/components/HowItWorksSection";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const PRIMARY_BLUE = "#0c55a6";
const HEADING_COLOR = "#1e1e1e";
const FEATURE_BUTTON_COLOR = "#2ec4b6";

const BlogDetailPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className={`${inter.className} container mx-auto px-4 sm:px-6 py-15`}>

        {/* Featured Image */}
        <div className="relative w-full h-[450px] sm:h-[550px] rounded-3xl overflow-hidden shadow-2xl mb-12">
          <Image
            src="/blog/blog1.png"
            alt="Blog Featured"
            fill
            quality={100}
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <span
            className="absolute top-6 left-6 text-sm font-semibold px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: FEATURE_BUTTON_COLOR, color: "white" }}
          >
            Cash For Cars
          </span>
        </div>

        {/* Title & Author */}
        <header className=" text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-left lg:text-left font-cabinet font-extrabold text-[#0c55a6]"
          >
            How to Get the Best Cash for Your Old Car in Sydney
          </h1>
          <div className="flex items-center justify-center sm:justify-start gap-3 text-gray-600 text-sm mt-2">
            <Image
              src="/avatars/dibya.png"
              alt="Author"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <span className={`${inter.className}`}>By <span className="font-medium">Dibya Maharjan</span></span>
            <span className={`${inter.className}`}>— November 5, 2025</span>
          </div>
        </header>

        {/* Introduction */}
        <section className="">
          <p className={`text-gray-600 font-normal text-[14px] sm:text-[16px] mb-5 mt-5 text-justify w-full ${inter.className}`}>
            Selling an old or unwanted car in Sydney doesn’t have to be stressful or time-consuming. Many car owners face difficulties finding a buyer who offers a fair price, especially when the vehicle is damaged, no longer running, or has been sitting idle for years. At Sydney Car Removal and Towing Services, we make the process simple, fast, and reliable. With over 22 years of experience, our team helps Sydney residents get instant cash for any type of vehicle — from small sedans and hatchbacks to SUVs, utes, vans, and even old trucks. We provide free same-day vehicle removal, no-obligation quotes, and environmentally responsible disposal, ensuring every car is handled safely and efficiently. By choosing our services, you save time, avoid the hassle of private selling, and maximize the value of your car while contributing to responsible recycling and waste reduction in Sydney.
          </p>
        </section>

        {/* Why Choose Services */}
        <section className="mb-12">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FaCheck className="mt-1 text-[#2ec4b6]" />
              <div>
                <h3 className="text-lg font-semibold font-cabinet text-[#0c55a6]" >Instant Cash</h3>
                <p className={`text-gray-700 text-sm ${inter.className}`}>Get paid immediately — no waiting, no bank transfers.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FaCheck className="mt-1 text-[#2ec4b6]" />
              <div>
                <h3 className="text-lg font-semibold font-cabinet text-[#0c55a6]" >Free Pickup</h3>
                <p className={`text-gray-700 text-sm ${inter.className}`}>Same-day vehicle removal across all Sydney suburbs.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FaCheck className="mt-1 text-[#2ec4b6]" />
              <div>
                <h3 className="text-lg font-semibold font-cabinet text-[#0c55a6]" >Eco-Friendly</h3>
                <p className={`text-gray-700 text-sm ${inter.className}`}>Responsible recycling and disposal for every vehicle.</p>
              </div>
            </li>
          </ul>
        </section>

        {/* Steps Section */}
        {/* <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center" style={{ color: HEADING_COLOR }}>
            3 Easy Steps to Sell Your Car
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition text-center">
              <FaClock className="text-3xl mb-4 mx-auto" style={{ color: PRIMARY_BLUE }} />
              <h3 className="text-xl font-semibold mb-2" style={{ color: HEADING_COLOR }}>Step 1: Prepare Your Vehicle</h3>
              <p className="text-gray-700 text-sm">Inspect, clean, and gather your documents to maximize your offer.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition text-center">
              <FaCashRegister className="text-3xl mb-4 mx-auto" style={{ color: PRIMARY_BLUE }} />
              <h3 className="text-xl font-semibold mb-2" style={{ color: HEADING_COLOR }}>Step 2: Get a Quote</h3>
              <p className="text-gray-700 text-sm">Call or email for a fair, no-obligation offer starting from $200.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition text-center">
              <FaTruck className="text-3xl mb-4 mx-auto" style={{ color: PRIMARY_BLUE }} />
              <h3 className="text-xl font-semibold mb-2" style={{ color: HEADING_COLOR }}>Step 3: Free Pickup</h3>
              <p className="text-gray-700 text-sm">We tow your car away for free and hand you cash on the spot.</p>
            </div>
          </div>
        </section> */}

        {/* Types of Cars */}
        <section className="">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 font-cabinet text-[#0c55a6]">
            Types of Cars We Accept
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition flex items-start gap-4">
              <FaCar className="text-2xl mt-1" style={{ color: PRIMARY_BLUE }} />
              <div>
                <h3 className="text-lg font-semibold" style={{ color: HEADING_COLOR }}>Old Cars</h3>
                <p className="text-gray-700 text-sm">Rusted, non-running, or decades old.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition flex items-start gap-4">
              <FaRecycle className="text-2xl mt-1" style={{ color: PRIMARY_BLUE }} />
              <div>
                <h3 className="text-lg font-semibold" style={{ color: HEADING_COLOR }}>Junk Cars</h3>
                <p className="text-gray-700 text-sm">Accident-damaged, stripped, or beyond repair.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition flex items-start gap-4">
              <FaTruck className="text-2xl mt-1" style={{ color: PRIMARY_BLUE }} />
              <div>
                <h3 className="text-lg font-semibold" style={{ color: HEADING_COLOR }}>Trucks & Utes</h3>
                <p className="text-gray-700 text-sm">Small commercial trucks, work vehicles, or fleet trucks.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition flex items-start gap-4">
              <FaCashRegister className="text-2xl mt-1" style={{ color: PRIMARY_BLUE }} />
              <div>
                <h3 className="text-lg font-semibold" style={{ color: HEADING_COLOR }}>Scrap & Unwanted</h3>
                <p className="text-gray-700 text-sm">Any make, model, or condition.</p>
              </div>
            </div>
          </div>
        </section>



        {/* Call-to-action Card */}
        {/* <div className="p-10 rounded-3xl shadow-xl text-center mb-12 transition hover:shadow-2xl"
          style={{ backgroundColor: FEATURE_BUTTON_COLOR, color: "white" }}>
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Ready to Sell Your Car?</h3>
          <p className="mb-6 sm:text-lg">
            Don’t let your old vehicle take up space. Get fast, free car removal and instant cash today.
          </p>
          <Link
            href="/contact"
            className="inline-block font-semibold px-8 py-3 rounded-xl shadow-md transition hover:bg-gray-100 hover:text-black"
            style={{ backgroundColor: "white", color: FEATURE_BUTTON_COLOR }}
          >
            Contact Us
          </Link>
        </div> */}

      </main>
      <HowItWorksSection />

    </div>
  );
};

export default BlogDetailPage;
