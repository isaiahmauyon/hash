import Image from "next/image";

interface ResultItem {
    title: string;
    description?: string;
}

interface ServiceResultsProps {
    title?: string;
    results: ResultItem[];
}

export default function ServiceResults({
    title = "What You'll Walk Away With",
    results,
}: ServiceResultsProps) {
    return (
        <section className="w-full bg-primary py-20 lg:py-32 px-6 lg:px-20 flex flex-col items-center overflow-hidden">
            <div className="max-w-[1280px] w-full flex flex-col items-center">
                <h2 className="font-semibold text-[40px] md:text-[65px] leading-[1.1] md:leading-[84px] tracking-[-0.04em] text-white text-center mb-16 max-w-[800px]">
                    {title}
                </h2>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {results.map((result, index) => (
                        <div
                            key={index}
                            className="bg-[#323f5d] border border-white/10 rounded-[32px] md:rounded-[40px] p-8 md:p-10 flex flex-col justify-center min-h-[140px] md:min-h-[160px]"
                        >
                            <div className="flex items-start md:items-center gap-4">
                                <div className="w-6 h-6 relative shrink-0 mt-1 md:mt-0">
                                    <Image src="/images/icons/check-circle.svg" alt="Check" fill />
                                </div>
                                <div>
                                    <h3 className="font-medium text-[16px] md:text-[18px] text-white tracking-[-0.03em] leading-tight">
                                        {result.title}
                                    </h3>
                                    {result.description && (
                                        <p className="text-gray-300 text-sm mt-2 font-medium tracking-tight">
                                            {result.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
