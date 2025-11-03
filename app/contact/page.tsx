"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["400", "500", "600", "700"],
});

const PRIMARY_BLUE = "#044E9E";
const HEADING_COLOR = "#1e1e1e";

const About: React.FC = () => {
    // Form state
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        movingFrom: "",
        movingTo: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setSuccessMessage("");

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccessMessage("Message sent successfully!");
                setFormData({
                    fullName: "",
                    phone: "",
                    movingFrom: "",
                    movingTo: "",
                    message: "",
                });
            } else {
                const resData = await response.json();
                setSuccessMessage(`Failed to send message: ${resData.error || "Try again."}`);
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setSuccessMessage("Something went wrong. Try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => setSuccessMessage(""), 6000);
            return () => clearTimeout(timer);
        }
    }, [successMessage]);

    return (
        <section className="relative bg-white py-15 min-h-[75vh]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-start gap-10">
                    {/* LEFT COLUMN: Contact Information */}
                    <motion.div
                        className="w-full lg:w-1/2 flex flex-col items-start"
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="flex items-center gap-2.5 w-full">
                            <h3
                                className="text-[18px] sm:text-[20px] font-semibold uppercase tracking-widest relative pb-2 inline-block whitespace-nowrap font-cabinet"
                                style={{ color: PRIMARY_BLUE }}
                            >
                                CONTACT US
                            </h3>
                            <span className="w-full h-px bg-[#044E9E] mb-1.5"></span>
                        </div>

                        <h1
                            className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-left font-cabinet font-extrabold"
                            style={{ color: HEADING_COLOR }}
                        >
                            GET IN{" "}
                            <span className="relative z-10 text-primary-blue" style={{ color: PRIMARY_BLUE }}>
                                TOUCH
                                <span className="absolute left-0 right-0 -z-10"></span>
                            </span>{" "}
                            WITH US
                        </h1>

                        <p className={`text-[#6A6A6A] text-[14px] sm:text-[16px] mb-5 mt-5 text-justify w-full ${inter.className}`}>
                            We’re here to answer any questions you may have about our towing and vehicle removal
                            services. Reach out via the form or through the contact details below, and we’ll get
                            back to you as soon as possible.
                        </p>

                        <div className={`flex flex-col gap-4 text-gray-800 text-lg ${inter.className}`}>
                            <div className="flex items-center gap-2">
                                <Phone size={18} className="text-[#044E9E]" />
                                <span>
                                    <span className="font-medium text-base" >+0402887766, +0450747474</span>
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Mail size={18} className="text-[#044E9E]" />
                                <span>
                                    <span className="font-medium text-base">sydneycarremoval@gmail.com</span>
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <MapPin size={18} className="text-[#044E9E]" />
                                <span>
                                    <span className="font-medium text-base">Sydney, Australia</span>
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Clock size={18} className="text-[#044E9E]" />
                                <span>
                                    <span className="font-medium text-base">24/7 Service</span>
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: Inline Request Form */}
                    <motion.div
                        className="w-full lg:w-1/2 bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col justify-between h-full"
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 sm:text-center" style={{ color: PRIMARY_BLUE }}>
                            REQUEST A QUOTE
                        </h3>

                        <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full space-y-4">
                            <div className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#0c55a6] focus:border-gray-700 placeholder-gray-800 placeholder:font-light"
                                    required
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Your Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#0c55a6] focus:border-gray-700 placeholder-gray-800 placeholder:font-light"
                                    required
                                />

                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="movingFrom"
                                        placeholder="Moving From"
                                        value={formData.movingFrom}
                                        onChange={handleChange}
                                        className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#0c55a6] focus:border-gray-700 placeholder-gray-800 placeholder:font-light"
                                    />
                                    <input
                                        type="text"
                                        name="movingTo"
                                        placeholder="Moving To"
                                        value={formData.movingTo}
                                        onChange={handleChange}
                                        className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#0c55a6] focus:border-gray-700 placeholder-gray-800 placeholder:font-light"
                                    />
                                </div>

                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#0c55a6] focus:border-gray-700 resize-none placeholder-gray-800 placeholder:font-light"
                                ></textarea>
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-full px-6 py-3 text-white font-medium rounded-lg transition transform hover:scale-[1.01] active:scale-[0.99] cursor-pointer ${isLoading ? "opacity-60 cursor-not-allowed" : ""
                                        }`}
                                    style={{ backgroundColor: PRIMARY_BLUE }}
                                >
                                    {isLoading ? "Sending..." : "Submit"}
                                </button>

                                {successMessage && (
                                    <p className="mt-3 text-center text-green-600 font-medium animate-fade">
                                        {successMessage}
                                    </p>
                                )}
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
