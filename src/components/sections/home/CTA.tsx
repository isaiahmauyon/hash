import Link from "next/link";
import React from "react";

interface CTAProps {
    title?: React.ReactNode;
}

export default function CTA({ title }: CTAProps) {
    return (
        <section className="w-full bg-[#1c273f] py-16 md:py-20 px-6 lg:px-20">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-10 text-center">
                <div className="flex flex-col gap-6 md:gap-4 items-center">
                    {title ? (
                        title
                    ) : (
                        <h2 className="text-[40px] md:text-[65px] font-semibold text-white leading-[1.1] tracking-[-0.04em]">
                            Ready to build something <span className="text-secondary">extraordinary?</span>
                        </h2>
                    )}
                    <p className="text-[18px] md:text-xl font-medium text-white/90 leading-relaxed max-w-[630px]">
                        Whether you need a product built or a team scaled, we&apos;re here to help you move fast and ship with confidence.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 items-center justify-center w-full md:w-auto">
                    <Link
                        href="/start-project"
                        className="w-full md:w-auto text-center bg-secondary text-white px-8 py-4 rounded-full font-medium text-[18px] hover:bg-secondary/90 transition-colors"
                    >
                        Start a Project
                    </Link>
                    <Link
                        href="/hire"
                        className="w-full md:w-auto text-center bg-transparent text-white border border-white px-8 py-4 rounded-full font-medium text-[18px] hover:bg-white/5 transition-colors"
                    >
                        Hire Talent
                    </Link>
                </div>
            </div>
        </section>
    );
}
