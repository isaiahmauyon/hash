interface ProcessStep {
    number: string;
    title: string;
    description: string;
}

interface ServiceProcessProps {
    title?: string;
    steps: ProcessStep[];
}

export default function ServiceProcess({
    title = "Our Process",
    steps,
}: ServiceProcessProps) {
    return (
        <section className="w-full bg-white py-16 lg:py-24 px-6 lg:px-20 flex flex-col items-center">
            <div className="max-w-[1280px] w-full flex flex-col items-center">
                <div className="bg-[#f5f5f5] px-4 py-2.5 rounded-full mb-6">
                    <p className="font-medium text-[16px] md:text-[18px] text-black tracking-[-0.03em]">
                        Our Process
                    </p>
                </div>

                <h2 className="font-semibold text-[40px] md:text-[65px] leading-[1.1] md:leading-[84px] tracking-[-0.04em] text-black text-center mb-16 max-w-[800px]">
                    {title}
                </h2>

                <div className="w-full flex flex-col lg:flex-row gap-4 h-auto lg:h-[400px]">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`flex flex-col justify-between p-8 md:p-10 rounded-[40px] transition-all duration-300 ${index === 0
                                    ? "bg-primary text-white lg:w-[60%] lg:flex-1"
                                    : "bg-gray-100 text-secondary lg:w-[150px] lg:items-end hover:lg:w-[30%] hover:bg-primary hover:text-white group"
                                }`}
                        >
                            <div className="flex items-center gap-6 mb-6 lg:mb-0">
                                <span className="font-bold text-[48px] md:text-[65px] tracking-tight leading-none">
                                    {step.number}
                                </span>
                                <h3 className={`font-bold text-[24px] md:text-[28px] tracking-tight ${index !== 0 ? 'lg:opacity-0 lg:group-hover:opacity-100 transition-opacity' : ''}`}>
                                    {step.title}
                                </h3>
                            </div>
                            <p className={`font-medium text-[16px] md:text-[18px] leading-relaxed tracking-[-0.03em] ${index !== 0 ? 'lg:opacity-0 lg:group-hover:opacity-100 transition-opacity' : 'opacity-90'}`}>
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
