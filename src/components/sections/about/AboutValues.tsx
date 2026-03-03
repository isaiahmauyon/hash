import React from "react";

export default function AboutValues() {
    const values = [
        {
            title: "Purpose-Driven",
            description: "Every line of code serves a business goal. We build with intent."
        },
        {
            title: "People First",
            description: "Great products come from great teams. We invest in talent."
        },
        {
            title: "Ship Fast",
            description: "Speed matters. We move quickly without sacrificing quality."
        },
        {
            title: "Global Mindset",
            description: "We serve clients worldwide with distributed, diverse teams."
        }
    ];

    return (
        <section className="relative w-full py-24 px-6 lg:px-20 bg-[#f6f7f9]">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
                <div className="flex flex-col items-center gap-4 text-center">
                    <div className="bg-white px-6 py-2 rounded-full inline-block shadow-sm">
                        <p className="text-sm md:text-lg font-medium tracking-tight text-black">Our Values</p>
                    </div>

                    <h2 className="text-[40px] md:text-[65px] font-semibold tracking-[-0.04em] text-black leading-[1.1]">
                        What drives us
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {values.map((value, idx) => (
                        <div key={idx} className="bg-white rounded-[40px] p-8 flex flex-col items-center justify-center text-center gap-4 min-h-[250px] md:min-h-[300px] shadow-sm">
                            <h3 className="text-[24px] md:text-[28px] font-bold text-primary tracking-[-0.03em] leading-tight">
                                {value.title}
                            </h3>
                            <p className="text-[#4c4c4c] text-[16px] md:text-[18px] font-medium leading-[26px] tracking-[-0.03em]">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
