export default function HomeStats() {
    return (
        <section className="relative w-full py-20 md:py-32 px-6 lg:px-20 max-w-7xl mx-auto flex flex-col items-center gap-[48px] md:gap-16">
            <h2 className="text-[32px] md:text-5xl lg:text-[65px] font-semibold text-center leading-[45px] md:leading-[1.1] tracking-[-0.04em] max-w-5xl text-primary">
                <span className="text-secondary">Building</span> digital products, <span className="text-secondary">scaling</span> teams, and <span className="text-secondary">redefining</span> what’s possible. Let’s build the future together.
            </h2>

            <div className="flex flex-col md:grid md:grid-cols-3 gap-[26px] md:gap-6 w-full">
                <div className="border border-dashed border-[#bababa] md:border-border p-[32px] md:p-8 rounded-[40px] flex flex-col gap-4 items-center justify-center text-center">
                    <p className="text-[54px] md:text-[75px] font-light tracking-[-0.04em] text-primary leading-none">30+</p>
                    <p className="text-[18px] md:text-2xl font-semibold tracking-[-0.03em] text-primary">Project Completed</p>
                </div>

                <div className="border border-dashed border-[#bababa] md:border-border p-[32px] md:p-8 rounded-[40px] flex flex-col gap-4 items-center justify-center text-center">
                    <p className="text-[54px] md:text-[75px] font-light tracking-[-0.04em] text-primary leading-none">70%</p>
                    <p className="text-[18px] md:text-2xl font-semibold tracking-[-0.03em] text-primary">Business Growth</p>
                </div>

                <div className="border border-dashed border-[#bababa] md:border-border p-[32px] md:p-8 rounded-[40px] flex flex-col gap-4 items-center justify-center text-center">
                    <p className="text-[54px] md:text-[75px] font-light tracking-[-0.04em] text-primary leading-none">500+</p>
                    <p className="text-[18px] md:text-2xl font-semibold tracking-[-0.03em] text-primary">Happy Clients</p>
                </div>
            </div>
        </section>
    );
}
