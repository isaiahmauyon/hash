import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/home/CTA";

import AboutHero from "@/components/sections/about/AboutHero";
import AboutStory from "@/components/sections/about/AboutStory";
import AboutTeam from "@/components/sections/about/AboutTeam";
import AboutValues from "@/components/sections/about/AboutValues";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <Header />

            {/* Spacer and background for absolute header */}
            <div className="h-[80px] w-full bg-white relative z-40" />

            <div className="flex flex-col w-full">
                {/* About Sections */}
                <div className="flex flex-col gap-24 md:gap-32 w-full pb-24 md:pb-32">
                    <AboutHero />
                    <AboutStory />
                    <AboutValues />
                    <AboutTeam />
                </div>

                {/* Shared Bottom Sections */}
                <div className="flex flex-col w-full">
                    {/* The CTA on this page in the design says "Want to work with us?" */}
                    <div className="bg-[#1c273f]">
                        <CTA title={
                            <h2 className="text-[40px] md:text-[65px] font-semibold text-white leading-[1.1] tracking-[-0.04em]">
                                Want to <span className="text-secondary">work</span> with us?
                            </h2>
                        } />
                    </div>
                    <Footer />
                </div>
            </div>
        </main>
    );
}
