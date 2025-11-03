"use client";

import React from 'react';
import Image from 'next/image';

// Define core colors
const HEADING_COLOR = '#044E9E';
const ACCENT_YELLOW = '#fdb813';

// Client Logo Paths (Updated to include more items for a better loop)
const clientLogos = [
    // Use /public/client/image.png as a starting point. Add more paths for a full effect.
    { id: 1, src: '/client/image1.png', alt: 'Client Logo 1' },
    { id: 2, src: '/client/image2.png', alt: 'Client Logo 2' },
    { id: 3, src: '/client/image3.png', alt: 'Client Logo 3' },
    { id: 4, src: '/client/image4.png', alt: 'Client Logo 4' },
    { id: 5, src: '/client/image5.png', alt: 'Client Logo 5' },
    { id: 6, src: '/client/image6.png', alt: 'Client Logo 6' },
    { id: 7, src: '/client/image7.png', alt: 'Client Logo 7' },
    { id: 8, src: '/client/image8.png', alt: 'Client Logo 8' },
];

const ClientsSection: React.FC = () => {
    // Duplicate logos for seamless scrolling effect
    const logosToDisplay = [...clientLogos, ...clientLogos];

    // Define the keyframes and animation using CSS-in-JS (or Tailwind config style)
    // Since we are limited to a single file, we use a global style block for the keyframes.
    return (
        <section className="py-15 bg-white overflow-hidden">
            {/* Global style for the scrolling animation (REQUIRED for the animation to work) */}
            <style jsx global>{`
                @keyframes scroll-left {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        /* Moves the content by half its total length (one set of logos) */
                        transform: translateX(-50%);
                    }
                }
                .animate-scroll {
                    animation: scroll-left 40s linear infinite;
                    /* Pauses animation when element is hovered */
                    animation-play-state: running; 
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
                {/* Header based on the Testimonials design style */}
                <div className='flex items-center gap-2.5 sm:w-[50%]'>
                    <h3 className="text-[18px] sm:text-[20px] font-semibold uppercase tracking-widest relative pb-2 inline-block whitespace-nowrap font-cabinet"
                        style={{ color: HEADING_COLOR }}>
                        OUR CLIENTS
                    </h3>
                    <span className="w-full h-px bg-[#9F9F9F] mb-1.5"></span>
                </div>
            </div>

            {/* Scrolling Container */}
            <div className="relative w-full h-[100px] bg-white">
                <div
                    className="flex animate-scroll absolute left-0 top-0 h-full"
                    // The width must be exactly double the width of the initial set of logos 
                    // to support the seamless transition
                    style={{ width: `${logosToDisplay.length * 200}px` }}
                >
                    {logosToDisplay.map((logo, index) => (
                        <div key={index} className="shrink-0 w-[200px] flex items-center justify-center p-4 h-full">
                            {/* Placeholder for the Image (assuming it needs to be imported) */}
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={160} // Fixed width for logo item
                                height={80} // Fixed height for logo item
                                objectFit="contain"
                                // REMOVED opacity-60 and filter grayscale to show full color and brightness
                                className="transition duration-300 hover:opacity-100 hover:filter-none"
                                // Fallback image for safety
                                onError={(e) => {
                                    e.currentTarget.src = 'https://placehold.co/160x80/cccccc/000000?text=LOGO';
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
