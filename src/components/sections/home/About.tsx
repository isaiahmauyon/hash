import Link from "next/link";

export default function HomeAbout() {
    return (
        <section className="relative w-full py-20 px-6 lg:px-20 max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16 justify-between items-start">
            <div className="bg-accent px-6 py-3 rounded-full shrink-0">
                <p className="text-lg font-medium tracking-tight">About us</p>
            </div>

            <div className="flex flex-col gap-8 max-w-4xl">
                <div className="flex flex-col gap-4">
                    <h2 className="text-4xl md:text-5xl lg:text-[65px] font-semibold leading-[1.1] tracking-[-0.04em] text-primary">
                        We Plan Projects, Solve Problems and Get Work Done
                    </h2>
                    <p className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed">
                        Collaborating with Hashbangs ensures engagement with a high-performance cross-functional team. We reliably achieve your goals, requiring minimal management oversight while maintaining accountability for results.
                    </p>
                </div>

                <div>
                    <Link
                        href="/about"
                        className="inline-block bg-secondary text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-secondary/90 transition-colors"
                    >
                        Read more
                    </Link>
                </div>
            </div>
        </section>
    );
}
