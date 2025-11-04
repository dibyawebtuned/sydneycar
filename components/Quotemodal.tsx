"use client";

import React from "react";
import Modal from "react-modal";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["400", "500", "600", "700"],
});

if (typeof window !== "undefined") {
    Modal.setAppElement("body");
}

interface QuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Get Instant Quote"
            overlayClassName="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4"
            className="bg-white rounded-2xl shadow-xl w-full max-w-[95%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[50%] p-4 sm:p-6 md:p-8 relative mx-auto max-h-[90vh] overflow-y-auto"
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl sm:text-3xl font-bold"
            >
                ×
            </button>

            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-5 text-[#0c55a6] font-cabinet text-center sm:text-left">
                Get Instant Quote
            </h2>

            <form className="flex flex-col gap-3 sm:gap-4">
                <input
                    type="text"
                    placeholder="Full Name"
                    className="border border-gray-300 rounded-lg px-4 py-2 sm:py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0c55a6] text-gray-700 w-full"
                />
                <input
                    type="tel"
                    placeholder="Phone Number"
                    className="border border-gray-300 rounded-lg px-4 py-2 sm:py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0c55a6] text-gray-700 w-full"
                />
                <input
                    type="text"
                    placeholder="Vehicle Type (Car, Truck, Van, 4WD)"
                    className="border border-gray-300 rounded-lg px-4 py-2 sm:py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0c55a6] text-gray-700 w-full"
                />
                <textarea
                    placeholder="Additional Details (optional)"
                    rows={3}
                    className="border border-gray-300 rounded-lg px-4 py-2 sm:py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0c55a6] text-gray-700 resize-none w-full"
                ></textarea>

                <button
                    type="submit"
                    className="mt-3 w-full bg-[#0c55a6] hover:bg-[#084286] text-white font-semibold py-2.5 sm:py-3 rounded-lg shadow-md transition-all duration-200 cursor-pointer"
                >
                    Submit Quote Request
                </button>
            </form>
        </Modal>
    );
};

export default QuoteModal;
