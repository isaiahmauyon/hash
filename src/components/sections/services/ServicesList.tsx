"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const servicesData = [
    {
        id: "product-strategy",
        title: "Product Strategy",
        description: "Our Product Strategy services help you define your vision, validate ideas, and create a roadmap that aligns with business goals — ensuring your product hits the market with impact.",
        pills: [
            "Product Discovery & Workshops",
            "Roadmapping & Planning",
            "MVP Scoping",
            "Market Research",
            "Product-Market Fit Validation"
        ]
    },
    {
        id: "web-development",
        title: "Web Development",
        description: "We build fast, secure, and scalable web applications tailored to your business needs using modern technologies and best practices.",
        pills: [
            "Frontend Development",
            "Backend Architecture",
            "E-commerce Solutions",
            "CMS Integration",
            "Performance Optimization"
        ]
    },
    {
        id: "ui-ux",
        title: "UI/UX Design",
        description: "We craft intuitive and engaging user experiences that delight your customers and drive conversions through research-backed design.",
        pills: [
            "User Research",
            "Wireframing & Prototyping",
            "Visual Design",
            "Design Systems",
            "Usability Testing"
        ]
    },
    {
        id: "mobile-development",
        title: "Mobile Development",
        description: "Deliver exceptional mobile experiences with high-performance native and cross-platform applications for iOS and Android.",
        pills: [
            "iOS App Development",
            "Android App Development",
            "React Native / Flutter",
            "App Store Optimization",
            "Mobile Backend Integration"
        ]
    },
    {
        id: "backend-apis",
        title: "Backend & APIs",
        description: "We engineer robust, scalable backend systems and seamless API integrations to power your digital ecosystem efficiently.",
        pills: [
            "Cloud Infrastructure",
            "Database Design",
            "API Development & Integration",
            "Serverless Architecture",
            "Security & Compliance"
        ]
    },
    {
        id: "maintenance",
        title: "Maintenance",
        description: "Ensure your digital products run smoothly with our reliable ongoing maintenance, monitoring, and enhancement services.",
        pills: [
            "24/7 Monitoring",
            "Bug Fixes & Updates",
            "Performance Tuning",
            "Security Patching",
            "Feature Enhancements"
        ]
    }
];

export default function ServicesList() {
    const [activeService, setActiveService] = useState(servicesData[0].id);

    return (
        <section className="relative w-full py-20 px-6 lg:px-20 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-[183px] items-start">

            {/* Left Sidebar Menu */}
            <div className="flex flex-col gap-4 w-full md:w-[236px] shrink-0">
                {servicesData.map((service) => {
                    const isActive = activeService === service.id;
                    return (
                        <button
                            key={service.id}
                            onClick={() => setActiveService(service.id)}
                            className={cn(
                                "flex items-center gap-3 w-full text-left transition-colors duration-200",
                                isActive ? "text-black" : "text-[#4c4c4c] hover:text-black/70"
                            )}
                        >
                            {/* Active Indicator Icon (Triangle/Polygon) */}
                            {isActive && (
                                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5 10L0.500001 19.5263L0.500002 0.47372L17.5 10Z" fill="#00C2A8" />
                                    </svg>
                                </div>
                            )}
                            <span
                                className={cn(
                                    "text-[18px] md:text-[20px] leading-[32px] tracking-tight",
                                    isActive ? "font-semibold text-black" : "font-medium"
                                )}
                                style={{ marginLeft: isActive ? 0 : '44px' }} // 32px (icon) + 12px (gap)
                            >
                                {service.title}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Right Content Area */}
            <div className="w-full">
                {servicesData.map((service) => (
                    <div
                        key={service.id}
                        className={cn(
                            "bg-[#f6f7f9] rounded-[40px] p-8 md:p-12 w-full flex-col gap-10",
                            activeService === service.id ? "flex animate-in fade-in duration-500" : "hidden"
                        )}
                    >
                        <div className="flex flex-col gap-6 w-full">
                            <h2 className="text-[28px] md:text-[32px] font-bold text-primary tracking-[-0.03em] leading-tight">
                                {service.title}
                            </h2>
                            <p className="text-[#4c4c4c] text-[16px] md:text-[18px] font-medium leading-[26px] tracking-[-0.03em]">
                                {service.description}
                            </p>

                            <div className="flex flex-wrap gap-4 mt-2">
                                {service.pills.map((pill, idx) => (
                                    <div
                                        key={idx}
                                        className="border border-[#bababa] rounded-[50px] px-5 py-3 flex items-center justify-center bg-white/50"
                                    >
                                        <span className="text-[14px] md:text-[16px] font-medium text-black tracking-[-0.03em]">
                                            {pill}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="bg-white rounded-[19px] p-6 flex flex-row items-center justify-between w-full group hover:shadow-sm transition-all mt-4"
                        >
                            <span className="text-secondary text-[24px] font-medium tracking-tight">
                                Read more
                            </span>
                            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors text-secondary">
                                <ArrowUpRight className="w-6 h-6" />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

        </section>
    );
}
