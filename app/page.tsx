// app/page.tsx
import AboutUsSection from "@/components/AboutUsSection";
import BlogSection from "@/components/BlogSection";
import ClientsSection from "@/components/ClientsSection";
import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import ServicesSection from "@/components/ServiceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export default function Home() {
      return (
            <div className="bg-zinc-50 font-medium text-black">
                  {/* HeroSection */}
                  <HeroSection />

                  {/* AboutUsSection */}
                  <AboutUsSection />

                  {/* ServicesSection */}
                  <ServicesSection />

                  {/* WhyChooseUsSection */}
                  <WhyChooseUsSection
                        smallHeading="WHY CHOOSE US"
                        mainHeading={<>TRUSTED, <span className="text-[#1F4A93]">FAST</span> & HASSLE-FREE</>}
                        description="We promise you straight talk and honest value. No fine print, no surprise fees, no dragging out the process. We’re here to free up space, clear clutter, and give you a fair cash offer — all while you sit back and watch it happen."
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

                  {/* TestimonialsSection */}
                  <TestimonialsSection />

                  {/* ClientsSection */}
                  <ClientsSection />

                  {/* HowItWorksSection */}
                  <HowItWorksSection />

                  {/* BlogSection */}
                  <BlogSection />

                  {/* ServiceAreaSection */}
                  <ServiceAreaSection />

                  {/* FaqSection */}
                  <FaqSection />
            </div>
      );
}