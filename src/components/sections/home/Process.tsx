"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function HomeProcess() {
    const [activeStep, setActiveStep] = useState("1");

    const steps = [
        {
            num: "1",
            title: "Discover & Strategize",
            description: "We dive deep into understanding your brand, goals, and audience. Through collaborative discussions and research, we craft a clear roadmap tailored to your needs.",
        },
        {
            num: "2",
            title: "Build & Launch",
            description: "Our creative team gets to work, blending innovation with strategy to design visuals, content, and assets that resonate with your brand. Every detail is refined to perfection."
        },
        {
            num: "3",
            title: "Discovery",
            description: "We dig into your goals, users, and constraints to define the right solution."
        },
        {
            num: "4",
            title: "Refine & Grow",
            description: "We don't stop at the launch. We analyze performance, gather feedback, and fine-tune to ensure your brand keeps evolving and thriving in the digital landscape."
        },
    ];

    return (
        <section className="relative w-full py-20 px-6 lg:px-20 max-w-7xl mx-auto flex flex-col gap-10 md:gap-20 items-center">
            <div className="flex flex-col items-center gap-4 text-center max-w-3xl">
                <div className="bg-accent px-6 py-2 rounded-full inline-block">
                    <p className="text-xs md:text-lg font-medium tracking-tight">Our Process</p>
                </div>

                <h2 className="text-[40px] md:text-[65px] font-semibold tracking-[-0.04em] text-primary leading-[1.1]">
                    How we bring ideas to life
                </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-4 w-full md:min-h-[450px] lg:min-h-[400px]">
                {steps.map((step) => {
                    const isActive = step.num === activeStep;
                    return (
                        <div
                            key={step.num}
                            onClick={() => setActiveStep(step.num)}
                            className={cn(
                                "rounded-[40px] cursor-pointer transition-all duration-500 ease-in-out overflow-hidden flex flex-col",
                                isActive
                                    ? "bg-primary text-white p-[40px] justify-between gap-6 md:gap-0 md:flex-[2.5] h-auto md:h-full"
                                    : "bg-muted text-secondary py-6 md:py-10 px-[40px] justify-center md:justify-start items-center h-[100px] md:h-full md:flex-1 hover:bg-muted/80 shrink-0"
                            )}
                        >
                            {isActive ? (
                                <div className="h-full flex flex-col justify-between animate-in fade-in duration-700">
                                    <div className="flex flex-col gap-4 md:gap-8 items-start shrink-0">
                                        <span className="text-[48px] md:text-[65px] font-bold leading-none tracking-tight">{step.num}</span>
                                        <h3 className="text-[24px] md:text-[28px] font-bold leading-tight md:mt-2">{step.title}</h3>
                                    </div>
                                    <p className="text-[16px] md:text-lg font-medium text-white/90 leading-relaxed md:max-w-xl">
                                        {step.description}
                                    </p>
                                </div>
                            ) : (
                                <div className="w-full flex justify-center items-center md:items-start h-full">
                                    <span className="text-[40px] md:text-[65px] lg:text-[75px] font-bold leading-none tracking-tight">{step.num}</span>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
