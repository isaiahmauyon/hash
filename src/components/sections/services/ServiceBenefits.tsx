import Image from "next/image";

interface Benefit {
    text: string;
}

interface ServiceBenefitsProps {
    title?: string;
    description: string;
    benefits: Benefit[];
}

export default function ServiceBenefits({
    title = "Why This Matters",
    description,
    benefits,
}: ServiceBenefitsProps) {
    return (
        <section className="w-full bg-white py-16 lg:py-24 px-6 lg:px-20 flex flex-col items-center">
            <div className="max-w-[1280px] w-full flex flex-col gap-8">
                <h2 className="font-semibold text-[40px] md:text-[65px] leading-[1.1] md:leading-[84px] tracking-[-0.04em] text-black max-w-[800px]">
                    {title}
                </h2>

                <div className="max-w-[700px] mb-8">
                    <div className="font-medium text-[16px] md:text-[18px] leading-relaxed tracking-[-0.03em] text-[#4c4c4c] whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: description }} />
                </div>

                <div className="flex flex-wrap gap-4">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <div className="w-6 h-6 relative shrink-0">
                                <Image src="/images/icons/check-circle.svg" alt="Check" fill />
                            </div>
                            <p className="font-medium text-[16px] md:text-[18px] text-[#4c4c4c] tracking-[-0.03em]">
                                {benefit.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
