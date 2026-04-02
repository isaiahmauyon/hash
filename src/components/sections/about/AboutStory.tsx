import React from "react";
import Image from "next/image";

export default function AboutStory() {
    return (
        <section className="relative w-full py-20 px-6 lg:px-20 max-w-7xl mx-auto flex flex-col items-center">
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 w-full">
                {/* Left side text */}
                <div className="flex flex-col gap-6 w-full md:w-1/2 mt-10">
                    <div className="bg-[#f5f5f5] px-6 py-2 rounded-full inline-block w-fit">
                        <p className="text-sm md:text-lg font-medium tracking-tight text-black">Our Story</p>
                    </div>

                    <h2 className="text-[40px] md:text-[65px] font-semibold tracking-[-0.04em] text-black leading-[1.1]">
                        Born from a<br className="hidden md:block" />simple belief
                    </h2>

                    <div className="flex flex-col gap-6 text-[16px] md:text-[18px] font-medium leading-[30px] tracking-[-0.03em] text-black mt-4">
                        <p>
                            Founded in 20XX by a group of tech enthusiasts and professionals, Hashbangs is a Nigerian software company that specializes in website and mobile app design, development and redevelopment. The name Hashbangs has its origin from
                        </p>
                        <p>
                            Our purpose and goal is to help local and national businesses through software solutions. We have observed with keen interest that the technology industry has been polluted by the idea of oversimplifying tech related problems. Businesses have been sold substandard software products like websites built &quot;within five minutes&quot; etc. This is why we are commissioned to build the best quality website and mobile apps using the best possible tools to help improve our clients&apos; businesses.
                        </p>
                    </div>
                </div>

                {/* Right side image */}
                <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[600px] flex items-center justify-center mt-10 md:mt-24">
                    {/* Decorative Outline Frame */}
                    <div className="hidden md:block absolute w-[90%] lg:w-[650px] h-[582px] border-4 border-[#00c2a8] rounded-[30px] left-8 top-12 z-0"></div>

                    {/* Main Image */}
                    <div className="relative w-full lg:w-[630px] h-full lg:h-[607px] rounded-[20px] overflow-hidden z-10 bg-gray-200">
                        <Image
                            src="/images/hero-1.png"
                            alt="Team brainstorming"
                            fill
                            className="object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
