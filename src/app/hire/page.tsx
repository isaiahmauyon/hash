"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function HireTalentPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="h-[80px] md:h-[94px] w-full bg-white relative z-40" />

            {/* Hero Section */}
            <section className="relative w-full py-20 md:py-0 md:h-[634px] flex flex-col justify-center bg-primary px-6 lg:px-20">
                <div className="w-full max-w-[962px] mx-auto flex flex-col items-start text-left gap-[29px] text-white">
                    <div className="bg-[#f5f5f5] px-4 py-2.5 rounded-[40px] inline-flex items-center justify-center">
                        <span className="font-medium text-[18px] tracking-[-0.03em] text-black">Hire Talent</span>
                    </div>

                    <div className="flex flex-col gap-3 w-full">
                        <h1 className="font-semibold text-5xl md:text-[65px] leading-[1.1] md:leading-[84px] tracking-[-0.04em]">
                            <span className="block mb-0">Pre-vetted engineers,</span>
                            <span className="text-secondary">ready to ship.</span>
                        </h1>
                        <p className="font-medium text-[16px] md:text-[18px] tracking-[-0.03em] text-white max-w-[630px] leading-[26px]">
                            Scale your team with exceptional developers. Vetted, matched, and onboarded in days — not months.
                        </p>
                    </div>

                    <div className="mt-[-5px]">
                        <button
                            onClick={() => {
                                document.getElementById('request-talent')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="bg-secondary text-white px-[20px] py-[14px] rounded-[40px] font-medium text-[18px] tracking-tight hover:bg-secondary/90 transition-colors inline-flex items-center justify-center"
                        >
                            Request Talent
                        </button>
                    </div>
                </div>
            </section>

            {/* Talent Categories */}
            <section className="w-full py-20 lg:py-[100px] px-6 lg:px-20 flex justify-center bg-white">
                <div className="max-w-[1280px] w-full flex flex-col items-center gap-12 md:gap-[54px]">
                    <h2 className="font-semibold text-4xl md:text-[65px] leading-[1.1] tracking-[-0.04em] text-black text-center">
                        Talent categories
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        <CategoryCard
                            icon="/images/hire-talent/code-fill.svg"
                            title="Frontend Engineers"
                            skills="React, Vue, Angular, Next.js"
                        />
                        <CategoryCard
                            icon="/images/hire-talent/database-fill.svg"
                            title="Backend Engineers"
                            skills="Node.js, Python, Go, Java"
                        />
                        <CategoryCard
                            icon="/images/hire-talent/mobile-fill.svg"
                            title="Mobile Developers"
                            skills="React Native, Flutter, Swift, Kotlin"
                        />
                        <CategoryCard
                            icon="/images/hire-talent/cloud-fill.svg"
                            title="Cloud & DevOps"
                            skills="AWS, GCP, Azure, Kubernetes"
                        />
                        <CategoryCard
                            icon="/images/hire-talent/palette-fill.svg"
                            title="UI/UX Designers"
                            skills="Figma, Sketch, Research, Prototyping"
                        />
                        <CategoryCard
                            icon="/images/hire-talent/qa-fill.svg"
                            title="QA Engineers"
                            skills="Manual, Automation, Performance"
                        />
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="w-full py-20 lg:py-[134px] px-6 lg:px-20 flex justify-center bg-primary text-white">
                <div className="max-w-[1281px] w-full flex flex-col items-center gap-12 md:gap-[77px]">
                    <h2 className="font-semibold text-4xl md:text-[65px] leading-[1.1] tracking-[-0.04em] text-center">
                        How it works
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                        <ProcessStep
                            number="1"
                            title="Tell Us What You Need"
                            description="Share the role, skills, and experience level you&apos;re looking for."
                        />
                        <ProcessStep
                            number="2"
                            title="We Match You"
                            description="We present 2-3 pre-vetted candidates within 48 hours."
                        />
                        <ProcessStep
                            number="3"
                            title="Interview & Select"
                            description="You interview the candidates and choose the best fit."
                        />
                        <ProcessStep
                            number="4"
                            title="Onboard & Go"
                            description="Your new team member starts within a week."
                        />
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="w-full py-20 lg:py-[100px] px-6 lg:px-20 flex justify-center bg-[#f6f7f9] min-h-[500px]">
                <div className="max-w-[1000px] w-full flex flex-col items-center gap-12 md:gap-[48px]">
                    <h2 className="font-semibold text-4xl md:text-[65px] leading-[1.1] tracking-[-0.04em] text-black text-center">
                        Frequently asked questions
                    </h2>

                    <div className="flex flex-col gap-4 w-full">
                        <FAQItem question="How quickly can I get a developer?" />
                        <FAQItem question="What&apos;s the vetting process?" />
                        <FAQItem question="Can I try before committing long-term?" />
                        <FAQItem question="What if the talent isn&apos;t a good fit?" />
                        <FAQItem question="Do you handle payroll and compliance?" />
                    </div>
                </div>
            </section>

            {/* Request Talent Form */}
            <section id="request-talent" className="w-full py-20 lg:py-[120px] px-6 lg:px-20 flex justify-center bg-primary text-white">
                <div className="max-w-[1045px] w-full flex flex-col items-center gap-12 md:gap-[62px]">
                    <h2 className="font-semibold text-4xl md:text-[65px] leading-[1.1] tracking-[-0.04em] text-center">
                        Request talent
                    </h2>

                    <form className="w-full flex flex-col gap-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                            <div className="flex flex-col gap-4">
                                <label className="font-medium text-lg tracking-[-0.03em]">Full Name *</label>
                                <input type="text" className="h-[72px] bg-white/5 border border-white/20 rounded-2xl px-6 text-lg focus:outline-none focus:border-white/50 transition-colors" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <label className="font-medium text-lg tracking-[-0.03em]">Company *</label>
                                <input type="text" className="h-[72px] bg-white/5 border border-white/20 rounded-2xl px-6 text-lg focus:outline-none focus:border-white/50 transition-colors" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                            <div className="flex flex-col gap-4">
                                <label className="font-medium text-lg tracking-[-0.03em]">Email *</label>
                                <input type="email" className="h-[72px] bg-white/5 border border-white/20 rounded-2xl px-6 text-lg focus:outline-none focus:border-white/50 transition-colors" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <label className="font-medium text-lg tracking-[-0.03em]">Role Required *</label>
                                <input type="text" className="h-[72px] bg-white/5 border border-white/20 rounded-2xl px-6 text-lg focus:outline-none focus:border-white/50 transition-colors" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                            <div className="flex flex-col gap-4">
                                <label className="font-medium text-lg tracking-[-0.03em]">Experience Level</label>
                                <div className="relative">
                                    <select className="h-[72px] w-full bg-white/5 border border-white/20 rounded-2xl px-6 text-lg tracking-[-0.03em] appearance-none focus:outline-none focus:border-white/50 transition-colors text-white/70">
                                        <option value="" disabled selected>Select</option>
                                        <option value="junior" className="text-black">Junior</option>
                                        <option value="mid" className="text-black">Mid-Level</option>
                                        <option value="senior" className="text-black">Senior</option>
                                        <option value="lead" className="text-black">Lead / Principal</option>
                                    </select>
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <ChevronDownIcon />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <label className="font-medium text-lg tracking-[-0.03em]">Budget Range</label>
                                <div className="relative">
                                    <select className="h-[72px] w-full bg-white/5 border border-white/20 rounded-2xl px-6 text-lg tracking-[-0.03em] appearance-none focus:outline-none focus:border-white/50 transition-colors text-white/70">
                                        <option value="" disabled selected>Select</option>
                                        <option value="tier1" className="text-black">$4,000 - $6,000 / mo</option>
                                        <option value="tier2" className="text-black">$6,000 - $9,000 / mo</option>
                                        <option value="tier3" className="text-black">$9,000+ / mo</option>
                                    </select>
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <ChevronDownIcon />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <label className="font-medium text-lg tracking-[-0.03em]">Additional Note</label>
                            <textarea className="h-[124px] bg-white/5 border border-white/20 rounded-2xl p-6 text-lg focus:outline-none focus:border-white/50 transition-colors resize-none" />
                        </div>

                        <button
                            type="button"
                            className="bg-secondary text-white px-8 py-4 rounded-full font-medium text-lg tracking-tight hover:bg-secondary/90 transition-colors w-full mt-4"
                        >
                            Submit Request
                        </button>
                    </form>
                </div>
            </section>

            <Footer />
        </main>
    );
}

// Subcomponents

function CategoryCard({ icon, title, skills }: { icon: string; title: string; skills: string }) {
    return (
        <div className="bg-[#f5f5f5] border border-gray-200 p-8 md:p-12 rounded-[40px] flex flex-col items-center justify-center text-center gap-8 md:gap-12 hover:shadow-sm transition-shadow">
            <div className="relative w-[84px] h-[84px] shrink-0">
                <Image src={icon} alt={title} fill className="object-contain" />
            </div>
            <div className="flex flex-col gap-4 items-center w-full">
                <h3 className="font-bold text-[28px] text-primary tracking-[-0.03em]">{title}</h3>
                <p className="font-medium text-lg text-[#4c4c4c] tracking-[-0.03em]">
                    {skills}
                </p>
            </div>
        </div>
    );
}

function ProcessStep({ number, title, description }: { number: string; title: string; description: string }) {
    return (
        <div className="border border-white/10 p-8 md:p-10 rounded-[40px] flex flex-col gap-10 md:gap-16">
            <span className="font-bold text-5xl md:text-[65px] text-secondary tracking-[-0.03em] leading-none">
                {number}
            </span>
            <div className="flex flex-col gap-3">
                <h3 className="font-bold text-[24px] md:text-[28px] text-white tracking-[-0.03em]">
                    {title}
                </h3>
                <p className="font-medium text-[16px] md:text-lg text-gray-300 tracking-[-0.03em] leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}

function FAQItem({ question }: { question: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="bg-white border border-gray-200 p-6 md:p-8 rounded-3xl md:rounded-[40px] w-full cursor-pointer hover:border-gray-300 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex items-center justify-between w-full">
                <h3 className="font-medium text-[16px] md:text-[18px] text-[#4c4c4c] tracking-[-0.03em] pr-4">
                    {question}
                </h3>
                <div className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDownIconLight />
                </div>
            </div>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-500 text-sm md:text-base tracking-[-0.02em] pt-2 border-t border-gray-100">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
            </div>
        </div>
    );
}

function ChevronDownIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function ChevronDownIconLight() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="#4C4C4C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
