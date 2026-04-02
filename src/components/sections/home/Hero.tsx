import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
    return (
        <section className="relative w-full pt-32 pb-12 md:pt-40 md:pb-16 px-6 lg:px-20 max-w-7xl mx-auto flex flex-col gap-10">
            <div className="flex flex-col gap-7 md:w-3/4 lg:w-2/3 text-center md:text-left items-center md:items-start mx-auto md:mx-0">
                <h1 className="text-[48px] md:text-6xl lg:text-[65px] font-semibold text-primary leading-[1.2] md:leading-[1.1] tracking-[-0.04em]">
                    Build Digital Products. Hire Exceptional Tech Talents.
                </h1>
                <p className="text-[16px] md:text-xl font-medium text-muted-foreground leading-relaxed max-w-[630px]">
                    We help ambitious companies design, build, and scale high-impact digital products, and connect them with vetted developers, designers, and product experts.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center sm:w-auto mt-2 self-stretch sm:self-auto mx-auto md:mx-0 justify-center md:justify-start">
                <Link
                    href="/start-project"
                    className="w-full sm:w-auto bg-secondary text-white px-8 py-3.5 rounded-full font-medium text-lg tracking-tight hover:bg-secondary/90 transition-colors text-center inline-block"
                >
                    Start a Project
                </Link>
                <Link
                    href="/hire"
                    className="w-full sm:w-auto bg-transparent border-[1.5px] border-primary text-primary px-8 py-3.5 rounded-full font-medium text-lg tracking-tight hover:bg-primary/5 transition-colors text-center inline-block"
                >
                    Hire Talent
                </Link>
            </div>

            {/* Three images hero grid */}
            <div className="mt-8 md:mt-16 w-[calc(100%+3rem)] -mx-6 px-6 md:w-full md:mx-0 md:px-0 flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-5 pb-6 hide-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="relative h-[519px] min-w-[85vw] md:min-w-0 md:h-[607px] w-full rounded-[24px] overflow-hidden group snap-center shrink-0">
                    <img
                        src="/images/hero-1.png"
                        alt="Team collaborating"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
                    />
                    <div className="absolute inset-x-5 md:inset-x-5 bottom-5 md:bottom-5 bg-white p-7 rounded-[20px] shadow-lg flex items-center justify-center">
                        <h3 className="text-[20px] md:text-[22px] font-semibold leading-tight tracking-[-0.03em] text-primary w-full max-w-[280px]">
                            Turning complex ideas into scalable products.
                        </h3>
                    </div>
                </div>

                <div className="relative h-[519px] min-w-[85vw] md:min-w-0 md:h-[607px] w-full rounded-[24px] overflow-hidden group snap-center shrink-0">
                    <img
                        src="/images/hero-2.jpg"
                        alt="Professional working"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
                    />
                    <div className="absolute inset-x-5 md:inset-x-5 bottom-5 md:bottom-5 bg-white p-7 rounded-[20px] shadow-lg flex items-center justify-center">
                        <h3 className="text-[20px] md:text-[22px] font-semibold leading-tight tracking-[-0.03em] text-primary w-full max-w-[280px]">
                            Built by experts. Driven by excellence.
                        </h3>
                    </div>
                </div>

                <div className="relative h-[519px] min-w-[85vw] md:min-w-0 md:h-[607px] w-full rounded-[24px] overflow-hidden group snap-center shrink-0">
                    <img
                        src="/images/hero-3.jpg"
                        alt="Happy people"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
                    />
                    <div className="absolute inset-x-5 md:inset-x-5 bottom-5 md:bottom-5 bg-white p-7 rounded-[20px] shadow-lg flex items-center justify-center">
                        <h3 className="text-[20px] md:text-[24px] font-semibold leading-tight tracking-[-0.03em] text-primary w-full max-w-[280px]">
                            Scaling teams. Accelerating growth.
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
