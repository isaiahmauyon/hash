import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HomeHero from "@/components/sections/home/Hero";
import HomeStats from "@/components/sections/home/Stats";
import HomeAbout from "@/components/sections/home/About";
import HomeServices from "@/components/sections/home/Services";
import HomeProcess from "@/components/sections/home/Process";
import HomeWork from "@/components/sections/home/Work";
import HomeTestimonials from "@/components/sections/home/Testimonials";
import CTA from "@/components/sections/home/CTA";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Spacer for absolute header */}
            <div className="h-20" />

            <div className="flex flex-col w-full">
                <HomeHero />
                <HomeStats />
                <HomeAbout />
                <HomeServices />
                <HomeProcess />
                <HomeWork />
                <HomeTestimonials />

                <div className="flex flex-col w-full">
                    <CTA />
                    <Footer />
                </div>
            </div>
        </main>
    );
}
