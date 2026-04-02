import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsList() {
    const projects = [
        {
            id: "onekard",
            title: "Onekard",
            description: "Rebuilt a legacy payment platform into a modern fintech app with real-time analytics.",
            image: "/images/project-1.jpg",
            bgColor: "bg-[#527FE2]"
        },
        {
            id: "medconnect",
            title: "MedConnect",
            description: "Designed and developed a telemedicine platform connecting patients with specialists.",
            image: "/images/project-2.jpg",
            bgColor: "bg-white"
        }
    ];

    return (
        <section className="relative w-full py-20 px-6 lg:px-20 max-w-7xl mx-auto flex flex-col items-center">
            <div className="flex flex-col md:flex-row gap-8 w-full">
                {/* Project 1 */}
                <div className="bg-muted p-6 md:p-8 rounded-[40px] flex-1 flex flex-col gap-8">
                    <div className="bg-[#527fe2] h-[328px] rounded-[24px] w-full overflow-hidden relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#1E3A8A] to-[#3B82F6] mix-blend-multiply opacity-20 z-10" />
                        <Image
                            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1740&auto=format&fit=crop"
                            alt="Onekard Project"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-3xl font-bold text-primary tracking-[-0.03em]">Onekard</h3>
                        <p className="text-lg font-medium text-muted-foreground leading-relaxed">
                            Rebuilt a legacy payment platform into a modern fintech app with real-time analytics.
                        </p>
                    </div>

                    <Link
                        href="/work/onekard"
                        className="bg-white p-6 rounded-2xl flex items-center justify-between text-secondary hover:shadow-sm transition-all group mt-auto"
                    >
                        <span className="text-2xl font-medium tracking-[-0.03em]">View Project</span>
                        <div className="overflow-hidden group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                            <ArrowUpRight size={28} />
                        </div>
                    </Link>
                </div>

                {/* Project 2 */}
                <div className="bg-muted p-6 md:p-8 rounded-[40px] flex-1 flex flex-col gap-8">
                    <div className="bg-white h-[328px] rounded-[24px] w-full overflow-hidden relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-white mix-blend-multiply opacity-20 z-10" />
                        <Image
                            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
                            alt="MedConnect Project"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-3xl font-bold text-primary tracking-[-0.03em]">MedConnect</h3>
                        <p className="text-lg font-medium text-muted-foreground leading-relaxed">
                            Designed and developed a telemedicine platform connecting patients with specialists.
                        </p>
                    </div>

                    <Link
                        href="/work/medconnect"
                        className="bg-white p-6 rounded-2xl flex items-center justify-between text-secondary hover:shadow-sm transition-all group mt-auto"
                    >
                        <span className="text-2xl font-medium tracking-[-0.03em]">View Project</span>
                        <div className="overflow-hidden group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                            <ArrowUpRight size={28} />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
