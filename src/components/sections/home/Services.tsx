'use client'

import { useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
    {
        id: "product-strategy",
        title: "Product Strategy",
        description: "Our Product Strategy services help you define your vision, validate ideas, and create a roadmap that aligns with business goals — ensuring your product hits the market with impact.",
        tags: ["Product Discovery & Workshops", "Roadmapping & Planning", "MVP Scoping", "Market Research", "Product-Market Fit Validation"],
    },
    {
        id: "web-development",
        title: "Web Development",
        description: "We design and build high-performance, scalable web applications that put user experience and conversion at the forefront.",
        tags: ["Responsive Website Development", "Custom Web Applications", "SPA", "E-commerce Development", "CMS Integration", "Performance Optimization"],
    },
    {
        id: "ui-ux-design",
        title: "UI/UX Design",
        description: "We craft intuitive and engaging user experiences tailored to your audience's needs, transforming complex tasks into simple and delightful interactions.",
        tags: ["User Research & Testing", "Wireframing & Prototyping", "Design Systems", "Visual Design", "Interaction Design"],
    },
    {
        id: "mobile-development",
        title: "Mobile Development",
        description: "We build native and cross-platform mobile apps for iOS and Android that deliver seamless user experiences and drive engagement.",
        tags: ["iOS Development", "Android Development", "React Native", "Flutter", "Mobile App UI/UX Design"],
    },
    {
        id: "backend-apis",
        title: "Backend & APIs",
        description: "We develop robust, scalable, and secure backend systems and APIs that power your applications and enable seamless integration with third-party services.",
        tags: ["API Development & Integration", "Database Design & Optimization", "Microservices Architecture", "Cloud Infrastructure Setup", "Security & Performance Tuning"],
    },
    {
        id: "maintenance",
        title: "Maintenance",
        description: "We provide comprehensive maintenance and support services to ensure your digital products remain secure, up-to-date, and optimized for performance.",
        tags: ["Bug Fixing & Issue Resolution", "Performance Monitoring", "Security Updates", "Feature Enhancements", "Technical Support"],
    }
];

export default function HomeServices() {
    const [activeService, setActiveService] = useState(services[0].id);

    const activeContent = services.find(s => s.id === activeService) || services[0];

    return (
        <section className="relative w-full py-20 px-6 lg:px-20 max-w-7xl mx-auto flex flex-col gap-10 md:gap-24 items-center">
            <div className="flex flex-col items-center gap-4 text-center max-w-3xl">
                <div className="bg-accent px-6 py-2 rounded-full inline-block">
                    <p className="text-xs md:text-lg font-medium tracking-tight">What We Do</p>
                </div>

                <h2 className="text-[40px] md:text-[65px] font-semibold tracking-[-0.04em] text-primary leading-[1.1]">
                    End-to-end digital product services
                </h2>

                <p className="text-[18px] font-medium text-muted-foreground mt-2">
                    We cover every stage of the product lifecycle — from strategy and design to engineering and ongoing support.
                </p>
            </div>

            {/* Desktop Tabs View */}
            <div className="hidden md:flex flex-row gap-12 lg:gap-32 w-full">
                <div className="flex flex-col gap-2 min-w-[280px]">
                    {services.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => setActiveService(service.id)}
                            className={cn(
                                "flex items-center gap-3 py-3 text-left transition-all",
                                activeService === service.id
                                    ? "text-primary font-semibold text-xl"
                                    : "text-muted-foreground font-medium text-lg hover:text-primary"
                            )}
                        >
                            {activeService === service.id && (
                                <div className="text-secondary">
                                    <Play fill="currentColor" size={16} />
                                </div>
                            )}
                            {service.title}
                        </button>
                    ))}
                </div>

                <div className="bg-muted p-8 md:p-12 rounded-[40px] flex-1 flex flex-col justify-between min-h-[400px] gap-8 transition-all duration-300">
                    <div className="flex flex-col gap-6">
                        <h3 className="text-[28px] font-bold text-primary tracking-[-0.03em]">{activeContent.title}</h3>
                        <p className="text-lg font-medium text-muted-foreground tracking-[-0.03em] leading-relaxed">
                            {activeContent.description}
                        </p>

                        <div className="flex flex-wrap gap-4 mt-2">
                            {activeContent.tags.map((tag) => (
                                <span key={tag} className="border border-border text-primary px-5 py-3 rounded-full font-medium text-[15px]">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <Link
                        href={`/services#${activeContent.id}`}
                        className="bg-white p-6 rounded-2xl flex items-center justify-between text-secondary hover:shadow-sm transition-all group"
                    >
                        <span className="text-2xl font-medium tracking-[-0.03em]">Read more</span>
                        <div className="overflow-hidden group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                            <ArrowUpRight size={28} />
                        </div>
                    </Link>
                </div>
            </div>

            {/* Mobile Stacked View */}
            <div className="flex md:hidden flex-col gap-10 w-full mt-4">
                {services.map((service) => (
                    <div key={service.id} className="bg-muted p-8 rounded-[40px] flex flex-col justify-between gap-8">
                        <div className="flex flex-col gap-6">
                            <h3 className="text-[24px] font-bold text-primary tracking-[-0.03em]">{service.title}</h3>
                            <p className="text-[18px] font-medium text-muted-foreground tracking-[-0.03em] leading-relaxed">
                                {service.description}
                            </p>

                            <div className="flex flex-wrap gap-4 mt-2">
                                {service.tags.map((tag) => (
                                    <span key={tag} className="border border-[#bababa] text-primary px-5 py-3 rounded-full font-medium text-[15px]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <Link
                            href={`/services#${service.id}`}
                            className="bg-white p-6 rounded-2xl flex items-center justify-between text-secondary hover:shadow-sm transition-all group"
                        >
                            <span className="text-[24px] font-medium tracking-[-0.03em]">Read more</span>
                            <div className="overflow-hidden group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                                <ArrowUpRight size={28} />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
