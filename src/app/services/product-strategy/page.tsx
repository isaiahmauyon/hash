import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import ServiceHero from "@/components/sections/services/ServiceHero";
import ServiceBenefits from "@/components/sections/services/ServiceBenefits";
import ServiceProcess from "@/components/sections/services/ServiceProcess";
import ServiceResults from "@/components/sections/services/ServiceResults";

export default function ProductStrategyPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="h-[80px] w-full bg-white relative z-40" />

            <div className="flex flex-col w-full pb-24 md:pb-32">
                <ServiceHero
                    category="Product Strategy"
                    title="Turn Ideas Into Scalable Digital Products"
                    description="We help ambitious teams define, validate, and structure product ideas into clear roadmaps — reducing risk, accelerating execution, and maximizing impact."
                    imageSrc="/images/services/product-strategy-hero.jpg"
                    buttonText="Start Your Product Strategy Session"
                />

                <ServiceBenefits
                    title="Why Product Strategy Matters"
                    description="Great products don't happen by accident. They are researched, validated, structured, and aligned with real business goals.\n\nWithout strategy, teams waste time building features users don't need.\n\nAt Hashbangs, we bring clarity before code — ensuring every decision moves your product forward."
                    benefits={[
                        { text: "Clear product vision and positioning" },
                        { text: "Defined target audience & value proposition" },
                        { text: "Faster time to market" },
                        { text: "Validated product-market fit" },
                        { text: "Reduced development waste" },
                        { text: "Structured MVP roadmap" },
                    ]}
                />

                <div className="w-full bg-[#f6f7f9]">
                    <ServiceProcess
                        title="Our Product Strategy Process"
                        steps={[
                            {
                                number: "1",
                                title: "Discover & Align",
                                description:
                                    "We understand your vision, business goals, target users, and market landscape to define a strong strategic foundation.",
                            },
                            {
                                number: "2",
                                title: "Research & Validate",
                                description: "We analyze the market, competitors, and user needs.",
                            },
                            {
                                number: "3",
                                title: "Define & Structure",
                                description: "We design the architecture and roadmap for success.",
                            },
                            {
                                number: "4",
                                title: "Execute & Optimize",
                                description: "We bring the strategy to life and iterate based on feedback.",
                            },
                        ]}
                    />
                </div>

                <ServiceResults
                    title="What You'll Walk Away With"
                    results={[
                        { title: "A structured product roadmap" },
                        { title: "Clear MVP scope" },
                        { title: "Defined user personas" },
                        { title: "Prioritized feature list" },
                        { title: "Risk mitigation plan" },
                        { title: "Execution-ready documentation" },
                    ]}
                />

                {/* Final CTA inside the page content matching Figma */}
                <section className="bg-[#f6f7f9] w-full py-20 lg:py-32 px-6 lg:px-20 flex flex-col items-center">
                    <h2 className="font-semibold text-[40px] md:text-[65px] leading-[1.1] md:leading-[84px] tracking-[-0.04em] text-primary text-center max-w-[800px] mb-4">
                        Ready to bring clarity to your product?
                    </h2>
                    <p className="font-medium text-[16px] md:text-[18px] text-[#4c4c4c] tracking-[-0.03em] max-w-[630px] text-center mb-8">
                        Let's Define Your Product Strategy.
                    </p>
                    <button className="bg-secondary text-white px-6 py-3.5 rounded-full font-medium text-lg tracking-tight hover:bg-secondary/90 transition-colors inline-block">
                        Book a Strategy Session
                    </button>
                </section>

            </div>

            <Footer />
        </main>
    );
}
