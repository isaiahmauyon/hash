import React from "react";

export default function ProjectsHero() {
    return (
        <section className="relative w-full h-[70vh] min-h-[600px] max-h-[850px] flex items-center justify-center bg-[#263353] overflow-hidden">
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 w-full max-w-5xl mx-auto gap-6 mt-10 md:mt-0">
                <h1 className="text-[48px] md:text-[80px] font-bold leading-[1.1] tracking-[-0.04em] max-w-[1000px]">
                    Bringing Ideas to Life with Creative Solutions
                </h1>
                <p className="text-[18px] md:text-[22px] font-medium leading-[1.6] tracking-[-0.02em] max-w-[620px] text-white/90">
                    Explore our portfolio of impactful web design and digital solutions, crafted to elevate businesses and drive success.
                </p>
            </div>
        </section>
    );
}
