import Link from "next/link";
import Image from "next/image";

interface ServiceHeroProps {
    title: string;
    description: string;
    imageSrc: string;
    category: string;
    buttonText?: string;
}

export default function ServiceHero({
    title,
    description,
    imageSrc,
    category,
    buttonText = "Contact us",
}: ServiceHeroProps) {
    return (
        <section className="relative w-full bg-white pt-24 lg:pt-32 pb-16 lg:pb-24 px-6 lg:px-20 overflow-hidden">
            <div className="max-w-[1280px] mx-auto w-full flex flex-col items-start pt-10">
                <div className="bg-[#f5f5f5] px-4 py-2.5 rounded-full mb-8">
                    <p className="font-medium text-lg text-black tracking-[-0.03em]">
                        {category}
                    </p>
                </div>

                <div className="flex flex-col gap-3 mb-12 max-w-[860px]">
                    <h1 className="font-semibold text-[40px] md:text-[65px] leading-[1.1] md:leading-[84px] tracking-[-0.04em] text-black">
                        {title}
                    </h1>
                    <p className="font-medium text-[16px] md:text-[18px] leading-relaxed tracking-[-0.03em] max-w-[630px] text-gray-700 mt-2">
                        {description}
                    </p>
                </div>

                <Link
                    href="/contact"
                    className="bg-secondary text-white px-6 py-3.5 rounded-full font-medium text-lg tracking-tight hover:bg-secondary/90 transition-colors inline-block"
                >
                    {buttonText}
                </Link>
            </div>

            <div className="w-full max-w-[1440px] mx-auto mt-20 md:mt-32 rounded-[20px] overflow-hidden bg-gray-200">
                <div className="relative w-full h-[400px] md:h-[633px]">
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
