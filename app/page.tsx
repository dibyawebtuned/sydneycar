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