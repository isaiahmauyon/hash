import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import ServiceHero from "@/components/sections/services/ServiceHero";
import ServiceBenefits from "@/components/sections/services/ServiceBenefits";
import ServiceProcess from "@/components/sections/services/ServiceProcess";
import ServiceResults from "@/components/sections/services/ServiceResults";

export default function WebDevelopmentPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="h-[80px] w-full bg-white relative z-40" />

            <div className="flex flex-col w-full pb-24 md:pb-32">
                <ServiceHero
                    category="Web Development"
                    title="Build High-Performance Web Applications"
                    description="We engineer fast, scalable, and secure web applications tailored to your business needs using modern frontend and backend technologies."
                    imageSrc="/images/services/web-development-hero.jpg"
                    buttonText="Start Your Web Project"
                />

                <ServiceBenefits
                    title="Why Modern Web Apps Matter"
                    description="Your web application is often the core of your digital business.\n\nSlow, buggy, or outdated web apps lose users and revenue.\n\nHashbangs builds web applications that are lightning-fast, highly scalable, and secure by design."
                    benefits={[
                        { text: "Lightning-fast performance" },
                        { text: "Scalable architecture" },
                        { text: "Secure by design" },
                        { text: "Responsive across all devices" },
                        { text: "SEO optimized out of the box" },
                        { text: "Seamless API integrations" },
                    ]}
                />

                <div className="w-full bg-[#f6f7f9]">
                    <ServiceProcess
                        title="Our Web Engineering Process"
                        steps={[
                            {
                                number: "1",
                                title: "Architecture Design",
                                description:
                                    "We plan the technical foundation and select the right tech stack.",
                            },
                            {
                                number: "2",
                                title: "Frontend Development",
                                description: "We build responsive, interactive, and accessible user interfaces.",
                            },
                            {
                                number: "3",
                                title: "Backend Development",
                                description: "We engineer secure and robust APIs and databases.",
                            },
                            {
                                number: "4",
                                title: "QA & Deployment",
                                description: "We rigorously test and seamlessly deploy your application.",
                            },
                        ]}
                    />
                </div>

                <ServiceResults
                    title="What We Build"
                    results={[
                        { title: "SaaS Platforms" },
                        { title: "Custom Web Applications" },
                        { title: "E-commerce Solutions" },
                        { title: "Admin Dashboards" },
                        { title: "High-Traffic Portals" },
                        { title: "Progressive Web Apps (PWAs)" },
                    ]}
                />

                <section className="bg-[#f6f7f9] w-full py-20 lg:py-32 px-6 lg:px-20 flex flex-col items-center">
                    <h2 className="font-semibold text-[40px] md:text-[65px] leading-[1.1] md:leading-[84px] tracking-[-0.04em] text-primary text-center max-w-[800px] mb-4">
                        Bring Your Vision to the Web.
                    </h2>
                    <p className="font-medium text-[16px] md:text-[18px] text-[#4c4c4c] tracking-[-0.03em] max-w-[630px] text-center mb-8">
                        Let's Build It.
                    </p>
                    <button className="bg-secondary text-white px-6 py-3.5 rounded-full font-medium text-lg tracking-tight hover:bg-secondary/90 transition-colors inline-block">
                        Start Building Today
                    </button>
                </section>

            </div>

            <Footer />
        </main>
    );
}
