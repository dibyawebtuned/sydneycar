"use client";

import React, { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import heroImg from "../public/heroImg.png";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

// Required by react-modal for accessibility
if (typeof window !== "undefined") {
  Modal.setAppElement("body");
}

const HeroSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="relative w-full pt-12 pb-12 lg:py-32 flex items-center justify-start text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src={heroImg}
        alt="Tow truck removing a car"
        fill
        priority
        className="z-0 object-cover"
        quality={85}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(90.44deg, rgba(4, 78, 158, 0.8) 0.4%, rgba(0, 0, 0, 0.4) 99.66%)",
        }}
      />

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-left z-10 animate-slide-in-left">
        <div className="flex flex-col gap-5 lg:gap-8">
          {/* Small "Cash For Cars" tag */}
          <div>
            <div className="inline-flex gap-2 items-center text-white text-xs sm:text-sm font-medium bg-[#00B8A6]/50 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="uppercase font-medium font-cabinet text-[10px] sm:text-sm">
                CASH FOR CARS
              </span>
            </div>
          </div>

          {/* Main & Subtitle */}
          <div className="flex flex-col gap-3 sm:gap-5">
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug sm:leading-tight md:leading-[1.15] text-[#f0f4f8] font-cabinet">
              Sydney Car Removal & Towing <br />
              – 24/7, Sydney-Wide
            </h1>

            {/* Subtitle */}
            <p
              className={`text-[#DBDBDB] w-full sm:w-[70%] md:w-[60%] lg:w-[70%] text-sm sm:text-base md:text-lg leading-normal ${inter.className}`}
            >
              Instant Cash Paid From $200 to $9,999 for Cars, Trucks, Vans &
              4WDs. We Tow It Away Anywhere in Sydney – 7 Days a Week
            </p>
          </div>

          {/* CTA Button */}
          <div>
            <button
              onClick={openModal}
              className={`inline-flex flex-wrap gap-2 items-center px-4 sm:px-6 py-2 border border-transparent text-sm sm:text-base font-medium shadow-lg text-[#121212] bg-[#FEC130] hover:bg-[#e6a200] transition duration-200 transform hover:scale-[1.02] active:scale-[0.98] ${inter.className}`}
            >
              <span className="w-2 h-2 bg-[#000000] rounded-full"></span>
              <span>Get Instant Quote</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Get Instant Quote"
        overlayClassName="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
        className="bg-white rounded-2xl shadow-xl w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] p-6 sm:p-8 relative mx-auto max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
        >
          ×
        </button>

        <h2
          className="text-2xl sm:text-3xl font-extrabold mb-5 text-[#0c55a6] font-cabinet"
        >
          Get Instant Quote
        </h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0c55a6] text-gray-700"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0c55a6] text-gray-700"
          />
          <input
            type="text"
            placeholder="Vehicle Type (Car, Truck, Van, 4WD)"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0c55a6] text-gray-700"
          />
          <textarea
            placeholder="Additional Details (optional)"
            rows={3}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0c55a6] text-gray-700 resize-none"
          ></textarea>

          <button
            type="submit"
            className="mt-3 w-full bg-[#FEC130] hover:bg-[#e6a200] text-[#121212] font-semibold py-2.5 rounded-lg shadow-md transition-all duration-200"
          >
            Submit Quote Request
          </button>
        </form>
      </Modal>
    </section>
  );
};

export default HeroSection;
