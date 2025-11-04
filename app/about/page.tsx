import About from "@/components/About";
import AboutWhyChoose from "@/components/about/AboutWhyChoose";
import ServicesSection from "@/components/ServiceSection";
import BlogSection from "@/components/BlogSection";
import ClientsSection from "@/components/ClientsSection";
import OurCoreValuesSection from "@/components/OurCoreValuesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const AboutPage: React.FC = () => {
    return (
        <>
            <About />
            <AboutWhyChoose />
            <ServicesSection/>
            <TestimonialsSection />
            <OurCoreValuesSection />
            <ClientsSection />
            <BlogSection />
        </>
    )

}


export default AboutPage;