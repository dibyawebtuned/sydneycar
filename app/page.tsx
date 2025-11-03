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
                  <WhyChooseUsSection />

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