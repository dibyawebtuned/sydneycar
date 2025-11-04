"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import QuoteModal from "./Quotemodal";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

interface NavLink {
  name: string;
  href: string;
}

interface ServiceOption {
  title: string;
  description: string;
  href: string;
}

const navigation: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Service areas", href: "/areas" },
  { name: "Reviews", href: "/reviews" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const services: ServiceOption[] = [
  { title: "Car Removal", description: "We offer 100% free car removal across Sydney, no matter the make or condition.", href: "/car-removal" },
  { title: "Car Towing", description: "We safely remove scrap and rusted cars from your property", href: "/car-towing" },
  { title: "Old Car Removal", description: "Sell your used car quickly without the hassle of private listings or negotiations", href: "/old-car-removal" },
  { title: "Junk Car Removal", description: "Need a reliable tow? Our Sydney towing service.", href: "/junk-car-removal" },
  { title: "Cash for Truck", description: "Need a reliable tow? Our Sydney towing service operates 7 days", href: "/cash-for-truck" },
  { title: "Car Wreckers", description: "We buy and dismantle old trucks professionally.", href: "/car-wreckers" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const router = useRouter();

  const desktopLinkClasses =
    "text-black hover:text-[#0c55a6] font-semibold text-sm md:text-base lg:text-base transition duration-150 relative group py-2 flex items-center cursor-pointer";
  const mobileLinkClasses =
    "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#0c55a6] transition duration-150 cursor-pointer";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Sydney Car Removal and Towing Services Logo"
                width={220}
                height={40}
                priority
              />
            </Link>
          </div>

          {/* Desktop + Tablet Links */}
          <div className="hidden lg:flex items-center space-x-6 lg:space-x-4 xl:space-x-8 font-cabinet">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              if (item.name === "Services") {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      className={`${desktopLinkClasses} relative ${isActive ? "text-[#0c55a6]" : ""}`}
                    >
                      {item.name}
                      <ChevronDown size={16} className="ml-1" />
                      {isActive && (
                        <span className="absolute left-1/2 -bottom-1 h-2 w-2 bg-[#0c55a6] rounded-full transform -translate-x-1/2"></span>
                      )}
                    </button>

                    {isServicesOpen && (
                      <div className="absolute top-full left-0 w-[260px] md:w-[280px] lg:w-[300px] bg-white shadow-lg rounded-lg z-50 border border-gray-100">
                        {services.map((service) => (
                          <button
                            key={service.title}
                            onClick={() => {
                              setIsServicesOpen(false);
                              router.push(service.href);
                            }}
                            className="w-full text-left px-4 py-2 hover:bg-gray-200 cursor-pointer transition-colors duration-200 rounded-md"
                          >
                            <p className={`font-medium text-[#111111] ${inter.className}`}>{service.title}</p>
                            <p className={`text-[12px] md:text-[13px] text-[#6A6A6A] font-medium ${inter.className}`}>{service.description}</p>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.name}
                  onClick={() => router.push(item.href)}
                  className={`${desktopLinkClasses} relative ${isActive ? "text-[#0c55a6]" : ""}`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute left-1/2 -bottom-1 h-2 w-2 bg-[#0c55a6] rounded-full transform -translate-x-1/2"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Contact Button (Tablet/Desktop) */}
          <div className="hidden lg:inline-flex lg:inline-flex">
            <button
              onClick={openModal}
              className={`inline-flex flex-wrap gap-2 items-center px-4 sm:px-6 md:px-5 py-2 md:py-3 border border-transparent text-sm md:text-base font-medium shadow-lg text-white bg-[#0c55a6] hover:bg-[#094182] transition duration-300 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${inter.className}`}
            >
              <span className="w-2 h-2 bg-white rounded-full"></span>
              Get A Quote
            </button>
          </div>



          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              type="button"
              className="bg-gray-100 p-2 rounded-lg text-gray-700 hover:text-[#0c55a6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0c55a6]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Reusable Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200" id="mobile-menu">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              if (item.name === "Services") {
                return (
                  <div key={item.name}>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`${mobileLinkClasses} flex justify-between items-center w-full ${isActive ? "text-[#0c55a6]" : ""}`}
                    >
                      {item.name}
                      <ChevronDown size={16} />
                    </button>

                    {isServicesOpen && (
                      <div className="ml-4 mt-2 space-y-1">
                        {services.map((service) => {
                          const isServiceActive = pathname === service.href;
                          return (
                            <button
                              key={service.title}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                router.push(service.href);
                              }}
                              className={`block px-3 py-2 rounded-md text-left text-gray-700 hover:bg-gray-200 transition-colors duration-200 ${isServiceActive ? "text-[#0c55a6]" : ""}`}
                            >
                              <p className="font-semibold">{service.title}</p>
                              <p className="text-sm text-gray-500">{service.description}</p>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    router.push(item.href);
                  }}
                  className={`${mobileLinkClasses} ${isActive ? "text-[#0c55a6]" : ""}`}
                >
                  {item.name}
                </button>
              );
            })}

            {/* Contact Button (Mobile) */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                router.push("/contact");
              }}
              className="mt-4 inline-flex items-center justify-center w-full px-4 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#0c55a6] hover:bg-[#07468f] transition duration-200"
            >
              <Phone size={18} className="mr-2" />
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
