import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import ServiceHero from "@/components/sections/services/ServiceHero";
import ServiceBenefits from "@/components/sections/services/ServiceBenefits";
import ServiceProcess from "@/components/sections/services/ServiceProcess";
import ServiceResults from "@/components/sections/services/ServiceResults";

export default function UIUXDesignPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="h-[80px] w-full bg-white relative z-40" />

            <div className="flex flex-col w-full pb-24 md:pb-32">
                <ServiceHero
                    category="UI/UX Design"
                    title="Design That Looks Good and Works Even Better"
                    description="We create intuitive, user-centric interfaces that engage users and drive business growth. We blend aesthetics with usability to ensure every interaction feels natural."
                    imageSrc="/images/services/ui-ux-design-hero.jpg"
                    buttonText="Start Your Design Project"
                />

                <ServiceBenefits
                    title="Why Great Design Matters"
                    description="Good design is more than just making things look pretty.\n\nIt’s about understanding your users, solving their problems, and making their journey effortless. Poor UX leads to frustration and high bounce rates.\n\nHashbangs creates designs that users love and businesses trust."
                    benefits={[
                        { text: "Increased user engagement" },
                        { text: "Higher conversion rates" },
                        { text: "Reduced support costs" },
                        { text: "Stronger brand identity" },
                        { text: "Accessible and inclusive design" },
                        { text: "Optimized user flows" },
                    ]}
                />

                <div className="w-full bg-[#f6f7f9]">
                    <ServiceProcess
                        title="Our Design Process"
                        steps={[
                            {
                                number: "1",
                                title: "Research & Empathize",
                                description:
                                    "We seek to deeply understand your users and their pain points.",
                            },
                            {
                                number: "2",
                                title: "Wireframe & Prototype",
                                description: "We structuralize the flow and test usability early.",
                            },
                            {
                                number: "3",
                                title: "UI Design & Polish",
                                description: "We craft visually stunning interfaces with your brand in mind.",
                            },
                            {
                                number: "4",
                                title: "Test & Iterate",
                                description: "We refine the design based on real user feedback.",
                            },
                        ]}
                    />
                </div>

                <ServiceResults
                    title="What We Deliver"
                    results={[
                        { title: "High-fidelity mockups" },
                        { title: "Interactive prototypes" },
                        { title: "Comprehensive design system" },
                        { title: "User journey maps" },
                        { title: "Wireframes & flows" },
                        { title: "Developer handoff files" },
                    ]}
                />

                <section className="bg-[#f6f7f9] w-full py-20 lg:py-32 px-6 lg:px-20 flex flex-col items-center">
                    <h2 className="font-semibold text-[40px] md:text-[65px] leading-[1.1] md:leading-[84px] tracking-[-0.04em] text-primary text-center max-w-[800px] mb-4">
                        Great User Experiences Start Here.
                    </h2>
                    <p className="font-medium text-[16px] md:text-[18px] text-[#4c4c4c] tracking-[-0.03em] max-w-[630px] text-center mb-8">
                        Let&apos;s Design Your Product.
                    </p>
                    <button className="bg-secondary text-white px-6 py-3.5 rounded-full font-medium text-lg tracking-tight hover:bg-secondary/90 transition-colors inline-block">
                        Start a Design Project
                    </button>
                </section>

            </div>

            <Footer />
        </main>
    );
}
