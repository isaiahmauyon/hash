import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import ServiceHero from "@/components/sections/services/ServiceHero";
import ServiceBenefits from "@/components/sections/services/ServiceBenefits";
import ServiceProcess from "@/components/sections/services/ServiceProcess";
import ServiceResults from "@/components/sections/services/ServiceResults";

export default function MaintenancePage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="h-[80px] w-full bg-white relative z-40" />

            <div className="flex flex-col w-full pb-24 md:pb-32">
                <ServiceHero
                    category="Maintenance"
                    title="Keep your product running at peak performance"
                    description="We provide ongoing support, monitoring, bug fixes, and feature updates so your product stays reliable and competitive."
                    imageSrc="/images/services/maintenance-hero.jpg"
                    buttonText="Get Ongoing Support"
                />

                <ServiceBenefits
                    title="Why Maintenance Matters"
                    description="Launching your product is just the beginning.\nWithout continuous updates and monitoring, products become:"
                    benefits={[
                        { text: "Vulnerable to security risks" },
                        { text: "Slower over time" },
                        { text: "Technically outdated" },
                        { text: "Costly to fix later" },
                    ]}
                />

                <div className="w-full bg-[#f6f7f9] py-16 lg:py-24 px-6 lg:px-20 flex flex-col items-center">
                    <div className="max-w-[1280px] w-full flex flex-col items-center">
                        <h2 className="font-semibold text-[40px] md:text-[65px] leading-[1.1] md:leading-[84px] tracking-[-0.04em] text-black text-center mb-16 max-w-[800px]">
                            What We Offer
                        </h2>
                        <div className="flex flex-wrap gap-4 w-full justify-center">
                            <div className="bg-white p-8 rounded-[40px] flex items-center gap-4 min-w-[320px]">
                                <img src="/images/icons/check-circle.svg" alt="Check" className="w-6 h-6 shrink-0" />
                                <span className="font-medium text-lg text-gray-700">Performance Monitoring</span>
                            </div>
                            <div className="bg-white p-8 rounded-[40px] flex items-center gap-4 min-w-[320px]">
                                <img src="/images/icons/check-circle.svg" alt="Check" className="w-6 h-6 shrink-0" />
                                <span className="font-medium text-lg text-gray-700">Security Updates</span>
                            </div>
                            <div className="bg-white p-8 rounded-[40px] flex items-center gap-4 min-w-[320px]">
                                <img src="/images/icons/check-circle.svg" alt="Check" className="w-6 h-6 shrink-0" />
                                <span className="font-medium text-lg text-gray-700">Bug Fixes</span>
                            </div>
                            <div className="bg-white p-8 rounded-[40px] flex items-center gap-4 min-w-[320px]">
                                <img src="/images/icons/check-circle.svg" alt="Check" className="w-6 h-6 shrink-0" />
                                <span className="font-medium text-lg text-gray-700">System Optimization</span>
                            </div>
                            <div className="bg-white p-8 rounded-[40px] flex items-center gap-4 min-w-[320px]">
                                <img src="/images/icons/check-circle.svg" alt="Check" className="w-6 h-6 shrink-0" />
                                <span className="font-medium text-lg text-gray-700">Feature Enhancements</span>
                            </div>
                            <div className="bg-white p-8 rounded-[40px] flex items-center gap-4 min-w-[320px]">
                                <img src="/images/icons/check-circle.svg" alt="Check" className="w-6 h-6 shrink-0" />
                                <span className="font-medium text-lg text-gray-700">Infrastructure Scaling</span>
                            </div>
                        </div>
                    </div>
                </div>

                <ServiceProcess
                    title="Our Approach"
                    steps={[
                        {
                            number: "1",
                            title: "System Audit",
                            description:
                                "We assess performance, vulnerabilities, and improvement areas.",
                        },
                        {
                            number: "2",
                            title: "Action Plan",
                            description: "We create a prioritized list of updates and fixes.",
                        },
                        {
                            number: "3",
                            title: "Ongoing Monitoring",
                            description: "We track uptime, server health, and app analytics.",
                        },
                        {
                            number: "4",
                            title: "Periodic Reviews",
                            description: "We refine features and ensure compliance.",
                        },
                    ]}
                />

                <section className="bg-[#f6f7f9] w-full py-20 lg:py-32 px-6 lg:px-20 flex flex-col items-center">
                    <h2 className="font-semibold text-[40px] md:text-[65px] leading-[1.1] md:leading-[84px] tracking-[-0.04em] text-primary text-center max-w-[800px] mb-4">
                        Your product deserves long-term care.
                    </h2>
                    <p className="font-medium text-[16px] md:text-[18px] text-[#4c4c4c] tracking-[-0.03em] max-w-[630px] text-center mb-8">
                        Let's Keep It Running Smoothly.
                    </p>
                    <button className="bg-secondary text-white px-6 py-3.5 rounded-full font-medium text-lg tracking-tight hover:bg-secondary/90 transition-colors inline-block">
                        Start maintenance
                    </button>
                </section>

            </div>

            <Footer />
        </main>
    );
}
