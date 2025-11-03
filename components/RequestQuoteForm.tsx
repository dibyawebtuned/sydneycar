"use client";

import React, { useState, useEffect } from "react";

// Define the core blue color
const PRIMARY_BLUE = "#0c55a6";

const RequestQuoteForm: React.FC = () => {
    // Form state
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        movingFrom: "",
        movingTo: "",
        message: "",
    });

    // Loading & success state
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
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
                setSuccessMessage(
                    `Failed to send message: ${resData.error || "Try again."}`
                );
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setSuccessMessage("Something went wrong. Try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    // Auto-clear success message after 6 seconds
    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => setSuccessMessage(""), 6000);
            return () => clearTimeout(timer);
        }
    }, [successMessage]);

    return (
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-3xl shadow-lg border border-gray-100">
            {/* Heading */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[39px] font-bold mb-4 sm:mb-5 md:mb-6 text-left"
                style={{ color: PRIMARY_BLUE }} >
                REQUEST A QUOTE
            </h3>


            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-[5px] focus:ring-[#0c55a6] focus:border-gray-700 text-[#7D7D7D] placeholder-[#7D7D7D] font-cabinet placeholder:font-light transition duration-150"
                    aria-label="Full Name"
                    required
                />

                <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-[5px] focus:ring-[#0c55a6] focus:border-gray-700 text-gray-700 placeholder-[#7D7D7D] placeholder:font-light transition duration-150"
                    aria-label="Your Phone Number"
                    required
                />

                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="movingFrom"
                        placeholder="Moving From"
                        value={formData.movingFrom}
                        onChange={handleChange}
                        className="px-4 py-3 border border-gray-300 rounded-[5px] focus:ring-[#0c55a6] focus:border-gray-700 text-gray-700 placeholder-[#7D7D7D] placeholder:font-light transition duration-150"
                        aria-label="Moving From Location"
                    />
                    <input
                        type="text"
                        name="movingTo"
                        placeholder="Moving To"
                        value={formData.movingTo}
                        onChange={handleChange}
                        className="px-4 py-3 border border-gray-300 rounded-[5px] focus:ring-[#0c55a6] focus:border-gray-700 text-gray-700 placeholder-[#7D7D7D] placeholder:font-light transition duration-150"
                        aria-label="Moving To Location"
                    />
                </div>

                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-[5px] focus:ring-[#0c55a6] focus:border-gray-700 text-gray-700 placeholder-[#7D7D7D] placeholder:font-light transition duration-150 resize-none tracking-[0.05em]"
                    aria-label="Message">
                </textarea>

                {/* Centered Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-lg font-medium rounded-[5px] shadow-sm text-white cursor-pointer transition duration-200 transform hover:scale-[1.01] active:scale-[0.99] ${isLoading ? "opacity-60 cursor-not-allowed" : ""
                            }`}
                        style={{ backgroundColor: PRIMARY_BLUE }}
                    >
                        {isLoading ? "Sending..." : "Submit"}
                    </button>
                </div>

                {/* Success Message */}
                {successMessage && (
                    <p className="mt-3 text-center text-green-600 font-medium animate-fade">
                        {successMessage}
                    </p>
                )}
            </form>
        </div>
    );
};

export default RequestQuoteForm;
