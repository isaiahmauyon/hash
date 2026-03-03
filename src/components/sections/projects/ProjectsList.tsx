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
            <div className="flex flex-col md:flex-row gap-8 items-start w-full">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="bg-[#f6f7f9] rounded-[40px] p-6 md:p-8 flex-1 flex flex-col gap-8 w-full"
                    >
                        {/* Image Container */}
                        <div className={`w-full h-[328px] relative rounded-[23px] overflow-hidden ${project.bgColor}`}>
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover object-center"
                            />
                        </div>

                        {/* Content Container */}
                        <div className="flex flex-col gap-6 md:gap-8 h-full">
                            <div className="flex flex-col gap-4">
                                <h3 className="text-[28px] md:text-[32px] font-bold text-primary tracking-[-0.03em] leading-tight">
                                    {project.title}
                                </h3>
                                <p className="text-[#4c4c4c] text-[16px] md:text-[18px] font-medium leading-[26px] tracking-[-0.03em]">
                                    {project.description}
                                </p>
                            </div>

                            <Link
                                href={`/work/${project.id}`}
                                className="bg-white rounded-[19px] p-6 flex flex-row items-center justify-between w-full group hover:shadow-sm transition-all mt-auto"
                            >
                                <span className="text-secondary text-[24px] font-medium tracking-tight">
                                    View Project
                                </span>
                                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors text-secondary">
                                    <ArrowUpRight className="w-6 h-6" />
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
