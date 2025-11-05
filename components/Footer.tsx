"use client";

import React from 'react';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import Image from 'next/image';
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

// --- Assets ---
import logoImg from '../public/logo.png';
import whatsapp from '../public/footer/whatsapp.svg';
import facebook from '../public/footer/facebook.svg';
import instagram from '../public/footer/instagram.svg';
import twitter from '../public/footer/twitter.svg';

// --- Design Constants ---
const ACCENT_YELLOW = '#fdb813';

// --- Data ---
const supportLinks = [
  { name: "FAQ's", href: '/faq' },
  { name: 'Services', href: '/ServiceSection.tsx' },
  { name: 'About', href: '/about' },
  { name: 'Service Areas', href: '/areas' },
  { name: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { name: 'Car Towing', href: '/car-towing' },
  { name: 'Old Car Removal', href: '/old-car-removal' },
  { name: 'Junk Car Removal', href: '/junk-car-removal' },
  { name: 'Cash for Truck', href: '/cash-for-truck' },
  { name: 'Car Wreckers', href: '/car-wreckers' },
  // { name: 'Battery Replacement', href: '/app/car-towing' },
];

// --- Social Icon Component ---
interface SocialIconProps {
  src: string;
  alt: string;
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
    style={{ backgroundColor: ACCENT_YELLOW }}
  >
    <Image src={src} alt={alt} width={18} height={18} className="object-contain" />
  </a>
);

// --- Main Footer Component ---
const Footer: React.FC = () => {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 -z-10">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/aboutImg.png')`,
            opacity: 0.3,
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#101d2d]/50 mix-blend-multiply"></div>
      </div>

      {/* Top Section */}
      <div className="relative z-10 py-15 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row sm:gap-12">

          {/* Logo & Description */}
          <div className="flex-1 flex flex-col mb-10 lg:mb-0">
            <div className="mb-6">
              <Image src={logoImg} alt="Sydney Car Removal Logo" className="h-[42px] w-auto" />
            </div>
            <p className={`text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 text-justify flex-wrap ${inter.className}`}>
              Old, junk, written-off, unregistered or not running—we’ll take it. We buy cars, SUVs, 4×4s, utes, vans and light trucks, plus offer cash for trucks and responsible car wrecking for end-of-life vehicles.
            </p>
            <div className="flex space-x-3">
              <SocialIcon src={facebook} alt="Facebook" href="https://facebook.com" />
              <SocialIcon src={instagram} alt="Instagram" href="https://instagram.com" />
              <SocialIcon src={twitter} alt="Twitter" href="https://twitter.com" />
              <SocialIcon src={whatsapp} alt="WhatsApp" href="https://wa.me/61450747474" />
            </div>
          </div>

          {/* Support Links */}
          <div className="flex-1 lg:flex-none lg:w-1/6">
            <h4 className="text-xl sm:text-2xl font-extrabold mb-4 sm:mb-6 text-[#fdb813] font-cabinet">Support</h4>
            <ul className="space-y-2 sm:space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name} className="group relative w-fit">
                  <a
                    href={link.href}
                    className={`text-sm sm:text-base transition-colors duration-200 hover:text-white ${inter.className}`}
                  >
                    {link.name}
                  </a>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#fdb813] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links */}
          <div className="flex-1 lg:flex-none lg:w-1/6">
            <h4 className="text-xl sm:text-2xl font-extrabold mb-4 sm:mb-6 text-[#fdb813] font-cabinet">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name} className="group relative w-fit">
                  <a
                    href={link.href}
                    className={`text-sm sm:text-base transition-colors duration-200 hover:text-white ${inter.className}`}
                  >
                    {link.name}
                  </a>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#fdb813] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="flex-1 lg:flex-none lg:w-1/4">
            <h4 className="text-xl sm:text-2xl font-extrabold mb-4 sm:mb-6 text-[#fdb813] font-cabinet">Contact</h4>
            <ul className="space-y-3 mb-6 text-sm sm:text-base">
              <li className="flex items-start"><Clock size={18} className="mr-2 mt-1 text-[#fdb813]" />24 Hours</li>
              <li className="flex items-start"><Phone size={18} className="mr-2 mt-1 text-[#fdb813]" />
                <a className='hover:text-[#fdb813]' href="tel:+0402887766">+0402887766,</a> <a className='hover:text-[#fdb813]' href="tel:+0450747474">+0450747474</a></li>
              <li className="flex items-start"><Mail size={18} className="mr-2 mt-1 text-[#fdb813]" />
                <a href="mailto:sydneycarremoval@gmail.com" className="hover:text-[#fdb813] hover:underline">sydneycarremoval@gmail.com</a>
              </li>
              <li className="flex items-start"><MapPin size={18} className="mr-2 mt-1 text-[#fdb813]" />Sydney, Australia</li>
            </ul>

            <form className="flex mt-8">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full p-3 rounded-l-2xl border-none focus:ring-2 focus:ring-yellow-400 text-gray-800 placeholder-gray-500"
                style={{ backgroundColor: '#ffffff', outline: 'none' }}
              />
              <button
                type="submit"
                className="p-3 rounded-r-xl flex items-center justify-center transition-colors duration-200 hover:bg-yellow-400"
                style={{ backgroundColor: '#fdb813' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#044E9E] transform rotate-45"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>

        </div>

      </div>

      {/* Bottom Section */}
      <div className="py-4 text-center text-sm sm:text-base bg-[#0c55a6] text-[#f0f4f8]">
        &copy; 2025 Sydney Car Removal and Towing Services. All Rights Reserved. Crafted by
        <a href="https://murphystechnology.com/" className="ml-1 underline text-[#5eead4] transition-colors duration-200 hover:text-[#fdb813]">
          Murphys Technology
        </a>
      </div>
    </footer>
  );
};

export default Footer;
