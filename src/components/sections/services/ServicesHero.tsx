import React from "react";

export default function ServicesHero() {
    return (
        <section className="relative w-full h-[70vh] min-h-[600px] max-h-[850px] flex items-center justify-center bg-[#263353] overflow-hidden">
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 w-full max-w-5xl mx-auto gap-6 mt-10 md:mt-0">
                <h1 className="text-[48px] md:text-[80px] font-bold leading-[1.1] tracking-[-0.04em]">
                    Everything you need to<br className="hidden md:block" /> build and scale.
                </h1>
                <p className="text-[18px] md:text-[22px] font-medium leading-[1.6] tracking-[-0.02em] max-w-[582px] text-white/90">
                    From strategy to maintenance, we cover the full product lifecycle.
                </p>
            </div>
        </section>
    );
}
