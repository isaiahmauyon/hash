import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import ServiceHero from "@/components/sections/services/ServiceHero";
import ServiceBenefits from "@/components/sections/services/ServiceBenefits";
import ServiceProcess from "@/components/sections/services/ServiceProcess";
import ServiceResults from "@/components/sections/services/ServiceResults";

export default function MobileDevelopmentPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="h-[80px] w-full bg-white relative z-40" />

            <div className="flex flex-col w-full pb-24 md:pb-32">
                <ServiceHero
                    category="Mobile Development"
                    title="Native and Cross-Platform Mobile Experiences"
                    description="We build high-performance iOS and Android applications that delight users and drive engagement on every device."
                    imageSrc="/images/services/mobile-development-hero.jpg"
                    buttonText="Start Your Mobile App"
                />

                <ServiceBenefits
                    title="Why Mobile Optimization Matters"
                    description="Mobile usage continues to dominate digital interactions.\n\nA great mobile app puts your business directly in your customers&apos; hands.\n\nHashbangs engineers mobile applications that feel native, responsive, and deeply integrated with the device capabilities."
                    benefits={[
                        { text: "Seamless native-like feel" },
                        { text: "Offline capabilities" },
                        { text: "Push notification integration" },
                        { text: "Optimized battery and performance" },
                        { text: "Hardware capability access" },
                        { text: "Cross-platform efficiency" },
                    ]}
                />

                <div className="w-full bg-[#f6f7f9]">
                    <ServiceProcess
                        title="Our Mobile App Process"
                        steps={[
                            {
                                number: "1",
                                title: "Platform Strategy",
                                description:
                                    "We decide the best approach (Native or Cross-Platform) for your goals.",
                            },
                            {
                                number: "2",
                                title: "UI/UX & Prototyping",
                                description: "We design specifically for mobile interaction patterns.",
                            },
                            {
                                number: "3",
                                title: "App Development",
                                description: "We write clean, performant code for iOS and Android.",
                            },
                            {
                                number: "4",
                                title: "Store Submission",
                                description: "We handle the rigorous App Store and Google Play review processes.",
                            },
                        ]}
                    />
                </div>

                <ServiceResults
                    title="What We Craft"
                    results={[
                        { title: "Native iOS Apps" },
                        { title: "Native Android Apps" },
                        { title: "React Native Apps" },
                        { title: "Flutter Applications" },
                        { title: "IoT Companions" },
                        { title: "App Modernization" },
                    ]}
                />

                <section className="bg-[#f6f7f9] w-full py-20 lg:py-32 px-6 lg:px-20 flex flex-col items-center">
                    <h2 className="font-semibold text-[40px] md:text-[65px] leading-[1.1] md:leading-[84px] tracking-[-0.04em] text-primary text-center max-w-[800px] mb-4">
                        Get Your App Into Their Hands.
                    </h2>
                    <p className="font-medium text-[16px] md:text-[18px] text-[#4c4c4c] tracking-[-0.03em] max-w-[630px] text-center mb-8">
                        Let&apos;s Map Out Your App.
                    </p>
                    <button className="bg-secondary text-white px-6 py-3.5 rounded-full font-medium text-lg tracking-tight hover:bg-secondary/90 transition-colors inline-block">
                        Start Crafting Today
                    </button>
                </section>

            </div>

            <Footer />
        </main>
    );
}
