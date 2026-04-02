import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

export default function ProductStrategyPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="h-[80px] w-full bg-white relative z-40" />

            {/* Hero Section */}
            <section className="relative w-full pt-16 md:pt-[100px] flex flex-col items-center">
                <div className="w-full px-6 lg:px-20 max-w-[1440px] flex flex-col gap-8 md:gap-11">
                    <div className="bg-[#f5f5f5] px-4 py-2.5 rounded-full inline-flex w-fit">
                        <span className="font-medium text-lg tracking-tight text-black">
                            Product Strategy
                        </span>
                    </div>

                    <div className="flex flex-col gap-4 max-w-[860px]">
                        <h1 className="font-semibold text-5xl md:text-[65px] leading-[1.1] md:leading-[1.25] tracking-[-0.04em] text-black">
                            Turn Ideas Into Scalable<br className="hidden md:block" /> Digital Products
                        </h1>
                        <p className="font-medium text-lg tracking-tight text-[#4c4c4c] max-w-[630px] leading-[26px]">
                            We help ambitious teams define, validate, and structure product ideas into clear roadmaps — reducing risk, accelerating execution, and maximizing impact.
                        </p>
                    </div>

                    <div className="mt-2 text-left">
                        <Link
                            href="/contact"
                            className="bg-secondary text-white px-6 py-3.5 rounded-full font-medium text-lg tracking-tight hover:bg-secondary/90 transition-colors inline-block"
                        >
                            Start Your Product Strategy Session
                        </Link>
                    </div>
                </div>
            </section>

            {/* Hero Image Full Width */}
            <section className="mt-16 md:mt-24 w-full h-[300px] md:h-[633px] bg-[#bababa] relative overflow-hidden flex justify-center">
                <div className="w-full max-w-[1700px] h-full relative">
                    <Image
                        src="/images/services/product-strategy-banner.png"
                        alt="Product Strategy Team"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>
            </section>

            {/* Why Product Strategy Matters */}
            <section className="w-full py-20 lg:py-32 px-6 lg:px-20 flex justify-center">
                <div className="max-w-[1440px] w-full flex flex-col gap-6 md:gap-11">
                    <h2 className="font-semibold text-5xl md:text-[65px] leading-[1.1] tracking-[-0.04em] text-black">
                        Why Product Strategy Matters
                    </h2>
                    <div className="font-medium text-lg tracking-tight leading-[26px] text-[#4c4c4c] max-w-[630px] flex flex-col gap-6">
                        <p>
                            Great products don&apos;t happen by accident. They are researched, validated, structured, and aligned with real business goals.
                        </p>
                        <p>
                            Without strategy, teams waste time building features users don&apos;t need.
                        </p>
                        <p className="text-[#4c4c4c]">
                            At Hashbangs, we bring clarity before code — ensuring every decision moves your product forward.
                        </p>
                    </div>
                </div>
            </section>

            {/* What We Help You Achieve */}
            <section className="w-full bg-[#f6f7f9] py-20 lg:py-[100px] px-6 lg:px-20 flex justify-center">
                <div className="max-w-[1440px] w-full flex flex-col items-center gap-12 md:gap-[48px]">
                    <h2 className="font-semibold text-4xl md:text-[65px] leading-[1.1] tracking-[-0.04em] text-black text-center">
                        What We Help You Achieve
                    </h2>

                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5 w-full max-w-[1244px] mx-auto">
                        <AchieveItem text="Clear product vision and positioning" className="md:w-[397px]" />
                        <AchieveItem text="Defined target audience & value proposition" className="md:w-[475px]" />
                        <AchieveItem text="Faster time to market" className="md:w-[327px]" />
                        <AchieveItem text="Validated product-market fit" className="md:w-[397px]" />
                        <AchieveItem text="Reduced development waste" className="md:w-[475px]" />
                        <AchieveItem text="Structured MVP roadmap" className="md:w-[327px]" />
                    </div>
                </div>
            </section>

            {/* Our Product Strategy Process */}
            <section className="w-full py-20 lg:py-[100px] px-6 lg:px-20 flex justify-center">
                <div className="max-w-[1440px] w-full flex flex-col items-center gap-12 md:gap-[77px]">
                    <div className="flex flex-col items-center gap-4 md:gap-6 text-center">
                        <div className="bg-[#f5f5f5] px-4 py-2.5 rounded-full inline-flex">
                            <span className="font-medium text-lg tracking-tight text-black">
                                Our Process
                            </span>
                        </div>
                        <h2 className="font-semibold text-4xl md:text-[65px] leading-[1.1] tracking-[-0.04em] text-black">
                            Our Product Strategy Process
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 w-full h-auto md:h-[414px]">
                        {/* Step 1 - Expanded */}
                        <div className="bg-primary flex flex-col justify-between p-8 md:p-[42px] rounded-[40px] flex-1 md:w-[632px] md:flex-none">
                            <div className="flex flex-wrap items-center gap-6 md:gap-10">
                                <span className="font-bold text-5xl md:text-[65px] text-white tracking-[-0.03em] leading-none">1</span>
                                <span className="font-bold text-2xl md:text-[28px] text-white tracking-[-0.03em]">Discover & Align</span>
                            </div>
                            <p className="font-medium text-lg leading-[26px] text-white tracking-[-0.03em] mt-8 md:mt-0 max-w-[500px]">
                                We understand your vision, business goals, target users, and market landscape to define a strong strategic foundation.
                            </p>
                        </div>

                        {/* Steps 2,3,4 - Contracted */}
                        <div className="bg-[#f6f7f9] p-8 md:p-[42px] rounded-[40px] flex-1 md:w-[166px] md:flex-none flex items-start md:items-end justify-start md:justify-end">
                            <span className="font-bold text-5xl md:text-[65px] text-secondary tracking-[-0.03em] leading-none">2</span>
                        </div>
                        <div className="bg-[#f6f7f9] p-8 md:p-[42px] rounded-[40px] flex-1 md:w-[166px] md:flex-none flex items-start md:items-end justify-start md:justify-end">
                            <span className="font-bold text-5xl md:text-[65px] text-secondary tracking-[-0.03em] leading-none">3</span>
                        </div>
                        <div className="bg-[#f6f7f9] p-8 md:p-[42px] rounded-[40px] flex-1 md:w-[166px] md:flex-none flex items-start md:items-end justify-start md:justify-end">
                            <span className="font-bold text-5xl md:text-[65px] text-secondary tracking-[-0.03em] leading-none">4</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* What You'll Walk Away With */}
            <section className="w-full bg-primary py-20 lg:py-[100px] px-6 lg:px-20 flex justify-center">
                <div className="max-w-[1440px] w-full flex flex-col items-center gap-12 md:gap-[48px]">
                    <h2 className="font-semibold text-4xl md:text-[65px] leading-[1.1] tracking-[-0.04em] text-white text-center">
                        What You&apos;ll Walk Away With
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        <WalkawayItem text="A structured product roadmap" />
                        <WalkawayItem text="Clear MVP scope" />
                        <WalkawayItem text="Defined user personas" />
                        <WalkawayItem text="Prioritized feature list" />
                        <WalkawayItem text="Risk mitigation plan" />
                        <WalkawayItem text="Execution-ready documentation" />
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="w-full bg-[#f6f7f9] py-20 lg:py-[100px] px-6 lg:px-20 flex justify-center">
                <div className="max-w-[1440px] w-full flex flex-col items-center gap-8 md:gap-9 text-center">
                    <div className="flex flex-col gap-4">
                        <h2 className="font-semibold text-4xl md:text-[65px] leading-[1.1] tracking-[-0.04em] text-primary max-w-[800px] mx-auto">
                            Ready to bring clarity to your product?
                        </h2>
                        <p className="font-medium text-[16px] md:text-[18px] text-[#4c4c4c] tracking-[-0.03em]">
                            Let&apos;s Define Your Product Strategy.
                        </p>
                    </div>
                    <Link
                        href="/contact"
                        className="bg-secondary text-white px-8 py-3.5 rounded-full font-medium text-lg tracking-tight hover:bg-secondary/90 transition-colors inline-block"
                    >
                        Book a Strategy Session
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function AchieveItem({ text, className }: { text: string; className?: string }) {
    return (
        <div className={`bg-white flex items-center p-6 md:p-[32px] rounded-[32px] md:rounded-[40px] shrink-0 w-full ${className || ''}`}>
            <div className="flex items-center justify-center lg:justify-start gap-4 w-full">
                <div className="relative shrink-0 w-6 h-6">
                    <Image src="/images/icons/check-circle-green.svg" alt="Check" fill className="object-contain" />
                </div>
                <p className="font-medium text-[16px] md:text-[18px] leading-[1.4] text-center lg:text-left text-[#4c4c4c] tracking-[-0.03em]">
                    {text}
                </p>
            </div>
        </div>
    );
}

function WalkawayItem({ text }: { text: string }) {
    return (
        <div className="bg-[#323f5d] border border-white/10 flex items-center p-6 md:p-[32px] rounded-[32px] md:rounded-[40px] w-full min-h-[90px]">
            <div className="flex items-center gap-4 w-full justify-center lg:justify-start">
                <div className="relative shrink-0 w-6 h-6">
                    <Image src="/images/icons/check-circle-green.svg" alt="Check" fill className="object-contain" />
                </div>
                <p className="font-medium text-[16px] md:text-[18px] leading-[1.4] text-white tracking-[-0.03em]">
                    {text}
                </p>
            </div>
        </div>
    );
}
