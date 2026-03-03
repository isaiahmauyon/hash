import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";

export default function AboutTeam() {
    const teamMembers = [
        {
            name: "Seunfunmi Omotunde",
            role: "Lead Developer",
            image: "/images/team-1.png"
        },
        {
            name: "Oluwayemi Akinbande",
            role: "Lead Designer / Brand Strategist",
            image: "/images/team-2.png"
        },
        {
            name: "David",
            role: "Lead Developer",
            image: "/images/team-3.png"
        }
    ];

    return (
        <section className="relative w-full py-20 px-6 lg:px-20 max-w-7xl mx-auto flex flex-col items-center gap-16">
            <div className="flex flex-col items-center gap-4 text-center">
                <div className="bg-[#f5f5f5] px-6 py-2 rounded-full inline-block">
                    <p className="text-sm md:text-lg font-medium tracking-tight text-black">Our Team</p>
                </div>

                <h2 className="text-[40px] md:text-[65px] font-semibold tracking-[-0.04em] text-black leading-[1.1]">
                    Meet our Value Ambassadors
                </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-8 w-full">
                {teamMembers.map((member, idx) => (
                    <div key={idx} className="bg-[#f6f7f9] flex-1 rounded-[40px] p-8 flex flex-col gap-8">
                        <div className="w-full h-[328px] relative rounded-[23px] overflow-hidden bg-white">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover object-center"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <h3 className="text-[24px] md:text-[28px] font-bold text-primary tracking-[-0.03em] leading-tight">
                                {member.name}
                            </h3>
                            <p className="text-[#4c4c4c] text-[16px] md:text-[18px] font-medium tracking-[-0.03em]">
                                {member.role}
                            </p>
                        </div>

                        <div className="flex items-center gap-6 mt-auto">
                            <Link href="#" className="hover:opacity-80 transition-opacity">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#DEDEDE] text-black">
                                    <Linkedin className="w-5 h-5 fill-current" />
                                </div>
                            </Link>
                            <Link href="#" className="hover:opacity-80 transition-opacity">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#DEDEDE] text-black p-2">
                                    <Twitter className="w-5 h-5 fill-current" />
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
