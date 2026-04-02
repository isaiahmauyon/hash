import Image from "next/image";

export default function HomeTestimonials() {
    const testimonials = [
        {
            quote: "Hashbangs didn't just build our product — they helped us think through every decision. The team is exceptionally talented and deeply committed.",
            name: "Sarah Chen",
            role: "CEO, FinFlow"
        },
        {
            quote: "We needed senior engineers fast. Hashbangs delivered pre-vetted developers who integrated seamlessly with our team from day one.",
            name: "Michael Osei",
            role: "CTO, MedConnect"
        },
        {
            quote: "The quality of work exceeded our expectations. They shipped on time, on budget, and the product has been rock solid in production.",
            name: "Amara Diallo",
            role: "Founder, ShipFast"
        }
    ];

    return (
        <section className="relative w-full py-12 md:py-16 px-6 lg:px-20 max-w-7xl mx-auto flex flex-col gap-10 md:gap-20 items-center">
            <div className="flex flex-col items-center gap-4 md:gap-6 text-center max-w-4xl w-full">
                <div className="bg-accent px-6 py-2 rounded-full inline-block">
                    <p className="text-xs md:text-lg font-medium tracking-tight">Client Stories</p>
                </div>

                <h2 className="text-[32px] md:text-5xl lg:text-[65px] font-semibold tracking-[-0.04em] text-primary leading-[1.3] md:leading-[1.1] flex flex-wrap justify-center items-center gap-x-2 md:gap-x-4">
                    Hear stories
                    <div className="flex -space-x-[18px] md:-space-x-3 mx-1 md:mx-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="w-[54px] h-[54px] md:w-[81px] md:h-[81px] rounded-full border-[3px] md:border-[4px] border-white overflow-hidden relative shadow-sm">
                                <Image
                                    src={`https://i.pravatar.cc/150?img=${i + 10}`}
                                    alt={`Client avatar ${i}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    straight from the people we helped!
                </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-6 w-full items-stretch">
                {testimonials.map((testimonial, i) => (
                    <div key={i} className="bg-muted p-[32px] md:p-10 rounded-[40px] flex-1 flex flex-col justify-between gap-8 md:gap-12 min-h-[300px] md:min-h-[370px]">
                        <div className="flex flex-col gap-4">
                            <span className="text-[54px] md:text-[65px] font-bold text-secondary leading-none">&quot;</span>
                            <p className="text-[18px] md:text-lg font-medium text-muted-foreground leading-relaxed">
                                {testimonial.quote}
                            </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-[24px] md:text-[28px] font-bold text-primary tracking-[-0.03em]">{testimonial.name}</p>
                            <p className="text-[18px] md:text-lg font-medium text-muted-foreground tracking-[-0.03em]">{testimonial.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
