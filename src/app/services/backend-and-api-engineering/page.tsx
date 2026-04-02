import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import ServiceHero from "@/components/sections/services/ServiceHero";
import ServiceBenefits from "@/components/sections/services/ServiceBenefits";
import ServiceProcess from "@/components/sections/services/ServiceProcess";
import ServiceResults from "@/components/sections/services/ServiceResults";

export default function BackendEngineeringPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="h-[80px] w-full bg-white relative z-40" />

            <div className="flex flex-col w-full pb-24 md:pb-32">
                <ServiceHero
                    category="Backend & API Engineering"
                    title="Power Your Product with Scalable, Secure Infrastructure"
                    description="We build robust backend systems and APIs that handle growth, protect data, and keep your digital products running seamlessly."
                    imageSrc="/images/services/backend-api-hero.jpg"
                    buttonText="Start Your Project"
                />

                <ServiceBenefits
                    title="Why Backend Matters"
                    description="The frontend is what users see.\nThe backend is what makes everything work.\n\nWeak backend systems cause:\n\nHashbangs engineers backend systems built for performance and longevity."
                    benefits={[
                        { text: "Downtime" },
                        { text: "Security risks" },
                        { text: "Slow performance" },
                        { text: "Scaling failures" },
                    ]}
                />

                <div className="w-full bg-[#f6f7f9] py-16 lg:py-24 px-6 lg:px-20 flex flex-col items-center">
                    <div className="max-w-[1280px] w-full flex flex-col items-center">
                        <h2 className="font-semibold text-[40px] md:text-[65px] leading-[1.1] md:leading-[84px] tracking-[-0.04em] text-black text-center mb-16 max-w-[800px]">
                            What We Build
                        </h2>
                        <div className="flex flex-wrap gap-4 w-full justify-center">
                            <div className="bg-white p-8 rounded-[40px] flex items-center gap-4 min-w-[320px]">
                                <img src="/images/icons/check-circle.svg" alt="Check" className="w-6 h-6 shrink-0" />
                                <span className="font-medium text-lg text-gray-700">Custom API Development</span>
                            </div>
                            <div className="bg-white p-8 rounded-[40px] flex items-center gap-4 min-w-[320px]">
                                <img src="/images/icons/check-circle.svg" alt="Check" className="w-6 h-6 shrink-0" />
                                <span className="font-medium text-lg text-gray-700">Cloud Architecture</span>
                            </div>
                            <div className="bg-white p-8 rounded-[40px] flex items-center gap-4 min-w-[320px]">
                                <img src="/images/icons/check-circle.svg" alt="Check" className="w-6 h-6 shrink-0" />
                                <span className="font-medium text-lg text-gray-700">Database Design</span>
                            </div>
                            <div className="bg-white p-8 rounded-[40px] flex items-center gap-4 min-w-[320px]">
                                <img src="/images/icons/check-circle.svg" alt="Check" className="w-6 h-6 shrink-0" />
                                <span className="font-medium text-lg text-gray-700">Microservices Architecture</span>
                            </div>
                            <div className="bg-white p-8 rounded-[40px] flex items-center gap-4 min-w-[320px]">
                                <img src="/images/icons/check-circle.svg" alt="Check" className="w-6 h-6 shrink-0" />
                                <span className="font-medium text-lg text-gray-700">Payment &amp; Auth Systems</span>
                            </div>
                            <div className="bg-white p-8 rounded-[40px] flex items-center gap-4 min-w-[320px]">
                                <img src="/images/icons/check-circle.svg" alt="Check" className="w-6 h-6 shrink-0" />
                                <span className="font-medium text-lg text-gray-700">Third-Party Integrations</span>
                            </div>
                        </div>
                    </div>
                </div>

                <ServiceProcess
                    title="Our Approach"
                    steps={[
                        {
                            number: "1",
                            title: "System Design",
                            description:
                                "We define data models, service architecture, and infrastructure.",
                        },
                        {
                            number: "2",
                            title: "Development",
                            description: "We build APIs and services following core principles.",
                        },
                        {
                            number: "3",
                            title: "Testing & Security",
                            description: "We thoroughly audit to secure endpoints against attacks.",
                        },
                        {
                            number: "4",
                            title: "Deployment & Scale",
                            description: "We orchestrate robust deployment and load-balancing.",
                        },
                    ]}
                />

                <ServiceResults
                    title="Results You Can Expect"
                    results={[
                        { title: "Secure infrastructure" },
                        { title: "Scalable growth capability" },
                        { title: "High system reliability" },
                        { title: "Reduced technical debt" },
                        { title: "Seamless integrations" }
                    ]}
                />

                <section className="bg-[#f6f7f9] w-full py-20 lg:py-32 px-6 lg:px-20 flex flex-col items-center">
                    <h2 className="font-semibold text-[40px] md:text-[65px] leading-[1.1] md:leading-[84px] tracking-[-0.04em] text-primary text-center max-w-[800px] mb-4">
                        Strong products need strong foundations.
                    </h2>
                    <p className="font-medium text-[16px] md:text-[18px] text-[#4c4c4c] tracking-[-0.03em] max-w-[630px] text-center mb-8">
                        Let&apos;s Build the Engine Behind Your Product.
                    </p>
                    <button className="bg-secondary text-white px-6 py-3.5 rounded-full font-medium text-lg tracking-tight hover:bg-secondary/90 transition-colors inline-block">
                        Let&apos;s Build Your App.
                    </button>
                </section>

            </div>

            <Footer />
        </main>
    );
}
