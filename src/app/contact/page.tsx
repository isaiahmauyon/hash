"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="h-[80px] md:h-[94px] w-full bg-white relative z-40" />

            {/* Hero Section */}
            <section className="relative w-full py-20 md:py-0 md:h-[634px] flex flex-col justify-center bg-primary px-6 lg:px-20 text-center items-center">
                <div className="w-full max-w-[962px] mx-auto flex flex-col items-center gap-[29px] text-white">
                    <div className="bg-[#f5f5f5] px-4 py-2.5 rounded-[40px] inline-flex items-center justify-center">
                        <span className="font-medium text-[18px] tracking-[-0.03em] text-black">Contact</span>
                    </div>

                    <div className="flex flex-col gap-3 w-full">
                        <h1 className="font-semibold text-5xl md:text-[65px] leading-[1.1] md:leading-[84px] tracking-[-0.04em]">
                            <span className="block mb-0">Let&apos;s build something</span>
                            <span className="text-secondary">extraordinary together.</span>
                        </h1>
                        <p className="font-medium text-[16px] md:text-[18px] tracking-[-0.03em] text-white max-w-[630px] leading-[26px] mx-auto">
                            Whether you need a full product team, an expert developer, or digital product strategy, we&apos;re here to help.
                        </p>
                    </div>

                    <div className="mt-[-5px]">
                        <button
                            onClick={() => {
                                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="bg-secondary text-white px-[20px] py-[14px] rounded-[40px] font-medium text-[18px] tracking-tight hover:bg-secondary/90 transition-colors inline-flex items-center justify-center"
                        >
                            Get in touch
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact-form" className="w-full py-20 lg:py-[120px] px-6 lg:px-20 flex justify-center bg-[#f9fafb]">
                <div className="max-w-[1140px] w-full flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left Form Area */}
                    <div className="flex-1 flex flex-col gap-10">
                        {/* Tabs */}
                        <div className="flex items-center gap-3">
                            <button className="bg-secondary text-white px-6 py-2.5 rounded-lg font-medium text-sm tracking-tight transition-colors">
                                Start a Project
                            </button>
                            <button className="bg-[#f0f2f5] text-[#8e95a3] px-6 py-2.5 rounded-lg font-medium text-sm tracking-tight hover:bg-gray-200 transition-colors">
                                Hire Talent
                            </button>
                        </div>

                        {/* Form Fields */}
                        <form className="w-full flex flex-col gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="font-semibold text-[13px] text-[#334155] tracking-tight">Full Name *</label>
                                    <input type="text" className="h-[52px] bg-white border border-[#e2e8f0] rounded-xl px-4 text-[15px] focus:outline-none focus:border-secondary transition-colors shadow-sm" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-semibold text-[13px] text-[#334155] tracking-tight">Company</label>
                                    <input type="text" className="h-[52px] bg-white border border-[#e2e8f0] rounded-xl px-4 text-[15px] focus:outline-none focus:border-secondary transition-colors shadow-sm" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-semibold text-[13px] text-[#334155] tracking-tight">Email *</label>
                                <input type="email" className="h-[52px] bg-white border border-[#e2e8f0] rounded-xl px-4 text-[15px] focus:outline-none focus:border-secondary transition-colors shadow-sm" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-semibold text-[13px] text-[#334155] tracking-tight">Tell us about your project *</label>
                                <textarea className="h-[140px] bg-white border border-[#e2e8f0] rounded-xl p-4 text-[15px] focus:outline-none focus:border-secondary transition-colors shadow-sm resize-none" />
                            </div>

                            <div>
                                <button
                                    type="button"
                                    className="bg-secondary text-white px-6 py-3.5 rounded-xl font-medium text-[15px] tracking-tight hover:bg-secondary/90 transition-colors inline-flex items-center gap-2 mt-2 shadow-sm"
                                >
                                    Send Message
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Info Cards */}
                    <div className="w-full lg:w-[380px] flex flex-col gap-6 pt-4 lg:pt-0">
                        {/* Email Card */}
                        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-8 flex flex-col gap-5 shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-[#f0fdfa] flex items-center justify-center text-secondary">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <h3 className="font-semibold text-lg text-primary tracking-tight">Email us</h3>
                                <a href="mailto:hello@hashbangs.io" className="text-[15px] text-[#64748b] hover:text-secondary transition-colors">hello@hashbangs.io</a>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-8 flex flex-col gap-5 shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-[#f0fdfa] flex items-center justify-center text-secondary">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <h3 className="font-semibold text-lg text-primary tracking-tight">Location</h3>
                                <p className="text-[15px] text-[#64748b]">Remote-first, Global Team</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* FAQs */}
            <section className="w-full py-20 lg:py-[100px] px-6 lg:px-20 flex justify-center bg-white border-t border-gray-100 min-h-[500px]">
                <div className="max-w-[1000px] w-full flex flex-col items-center gap-12 md:gap-[48px]">
                    <h2 className="font-semibold text-4xl md:text-[65px] leading-[1.1] tracking-[-0.04em] text-black text-center">
                        Frequently asked questions
                    </h2>

                    <div className="flex flex-col gap-4 w-full">
                        <FAQItem question="What services do you offer?" />
                        <FAQItem question="How do we start a project?" />
                        <FAQItem question="Do you work with startups or enterprises?" />
                        <FAQItem question="Can I hire a dedicated developer?" />
                        <FAQItem question="How do you handle project communication?" />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
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

function ChevronDownIconLight() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="#4C4C4C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
