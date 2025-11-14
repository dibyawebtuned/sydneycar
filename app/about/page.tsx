import About from "@/components/About";
import AboutWhyChoose from "@/components/about/AboutWhyChoose";
import ServicesSection from "@/components/ServiceSection";
import BlogSection from "@/components/BlogSection";
import ClientsSection from "@/components/ClientsSection";
import CoreValuesSection from "@/components/OurCoreValuesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const AboutPage: React.FC = () => {
    return (
        <>
            <About />
            <AboutWhyChoose />
            <ServicesSection />
            <CoreValuesSection
                smallHeading="OUR CORE VALUES"
                mainHeadingLine1="DRIVING EXCELLENCE IN"
                highlightedText="VEHICLE REMOVAL"
                mainHeadingLine2="& TOWING"
                description="At Sydney Car Removal & Towing, our core values define everything we do. We focus on providing fast, reliable, and eco-friendly services while maintaining the highest level of trust and integrity. Our customer-first approach ensures every vehicle is handled with care."
                coreValues={[
                    "Trust & Integrity",
                    "Fast & Reliable Service",
                    "Eco-Friendly Practices",
                    "Customer First Approach",
                    "Local Expertise",
                    "All Vehicle Types Accepted",
                ]}
                imageSrc="/scrat_images/ONE.png"
            />
            <TestimonialsSection />

            <ClientsSection />
            <BlogSection />
        </>
    )

}


export default AboutPage;