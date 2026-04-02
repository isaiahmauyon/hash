import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomeWork() {
    return (
        <section className="relative w-full py-12 md:py-16 px-6 lg:px-20 max-w-7xl mx-auto flex flex-col gap-16 md:gap-20">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 w-full">
                <div className="flex flex-col gap-6 max-w-3xl">
                    <div className="bg-accent px-6 py-2 rounded-full inline-block w-fit">
                        <p className="text-lg font-medium tracking-tight">Our Work</p>
                    </div>
                    <h2 className="text-5xl md:text-[65px] font-semibold tracking-[-0.04em] text-primary leading-[1.1]">
                        Explore the projects where we played, experimented, and built something amazing.
                    </h2>
                </div>

                <Link
                    href="/work"
                    className="flex items-center gap-2 px-6 py-3 rounded-full text-secondary font-medium text-lg hover:bg-secondary/5 transition-colors shrink-0"
                >
                    See all our projects
                    <ArrowUpRight size={20} />
                </Link>
            </div>

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
