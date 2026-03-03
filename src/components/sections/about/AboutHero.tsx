import React from "react";
import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="relative w-full h-[70vh] min-h-[600px] max-h-[850px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/about-hero.png" // User will supply the actual image if not present
                    alt="Team working together"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-[#0f172a]/60" /> {/* Darker overlay for strong text contrast */}
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 w-full max-w-5xl mx-auto gap-6 mt-10 md:mt-0">
                <h1 className="text-[48px] md:text-[80px] font-bold leading-[1.1] tracking-[-0.04em]">
                    Building the future,<br />one product at a time.
                </h1>
                <p className="text-[18px] md:text-[22px] font-medium leading-[1.6] tracking-[-0.02em] max-w-[820px] text-white/90">
                    Hashbangs is a digital product studio and talent partner. We help startups, SMEs, and enterprises design, build, and scale world-class digital products — and hire the engineers to keep them running.
                </p>
            </div>
        </section>
    );
}
