import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/home/CTA";
import HomeTestimonials from "@/components/sections/home/Testimonials";

import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesList from "@/components/sections/services/ServicesList";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <Header />

            {/* Spacer and background for absolute header */}
            <div className="h-[80px] w-full bg-white relative z-40" />

            <div className="flex flex-col w-full">
                {/* Services Sections */}
                <div className="flex flex-col w-full pb-24 md:pb-32">
                    <ServicesHero />
                    <ServicesList />

                    {/* Testimonials - Reusing Home Component matching "Client Stories" */}
                    <div className="pt-20">
                        <HomeTestimonials />
                    </div>
                </div>

                {/* Shared Bottom Sections */}
                <div className="flex flex-col w-full">
                    <div className="bg-[#1c273f]">
                        {/* Adjusting the CTA text slightly to match the design "Ready to build something extraordinary?" */}
                        <CTA />
                    </div>
                    <Footer />
                </div>
            </div>
        </main>
    );
}
