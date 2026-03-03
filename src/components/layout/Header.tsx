"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isMobileMenuOpen]);

    return (
        <header className="absolute top-0 left-0 w-full px-6 lg:px-20 py-5 flex items-center justify-between z-50">
            <Link href="/" className="h-7 w-[130px] shrink-0 flex items-center justify-center relative z-[60]">
                <Image src="/images/logo.png" alt="Hashbangs Logo" width={130} height={28} className="object-contain" priority />
            </Link>

            <nav className="hidden md:flex items-center gap-10 font-medium text-lg tracking-[-0.03em] text-primary">
                <Link href="/about" className="hover:opacity-80 transition-opacity">Who we are</Link>

                {/* Services Dropdown */}
                <div className="relative group/nav">
                    <Link href="/services" className="hover:opacity-80 transition-opacity flex items-center gap-1">
                        Services
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-200 z-50">
                        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-3 flex flex-col min-w-[260px] border border-gray-100">
                            <Link href="/services/product-strategy" className="px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors text-base text-gray-700 font-medium whitespace-nowrap">Product Strategy</Link>
                            <Link href="/services/ui-ux-design" className="px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors text-base text-gray-700 font-medium whitespace-nowrap">UI/UX Design</Link>
                            <Link href="/services/web-development" className="px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors text-base text-gray-700 font-medium whitespace-nowrap">Web Development</Link>
                            <Link href="/services/mobile-development" className="px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors text-base text-gray-700 font-medium whitespace-nowrap">Mobile Development</Link>
                            <Link href="/services/backend-and-api-engineering" className="px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors text-base text-gray-700 font-medium whitespace-nowrap">Backend &amp; API Engineering</Link>
                            <Link href="/services/maintenance" className="px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors text-base text-gray-700 font-medium whitespace-nowrap">Maintenance</Link>
                        </div>
                    </div>
                </div>

                <Link href="/work" className="hover:opacity-80 transition-opacity">Projects</Link>
                <Link href="/hire" className="hover:opacity-80 transition-opacity">Hire Talents</Link>
            </nav>

            <div className="flex items-center gap-4">
                <Link
                    href="/contact"
                    className="hidden md:flex bg-secondary text-white px-6 py-3 rounded-full font-medium text-lg tracking-tight hover:bg-secondary/90 transition-colors shrink-0"
                >
                    Contact us
                </Link>

                <button
                    className="md:hidden flex items-center justify-center text-primary leading-none p-1 relative z-[60]"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-white z-[55] flex flex-col items-start justify-center pt-20 pb-10 px-8 overflow-y-auto md:hidden animate-in fade-in zoom-in-95 duration-200">
                    <nav className="flex flex-col items-start w-full gap-6 font-medium text-[28px] tracking-[-0.03em] text-primary">
                        <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-80 transition-opacity">Who we are</Link>

                        <div className="flex flex-col w-full">
                            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-80 transition-opacity mb-4">Services</Link>
                            <div className="flex flex-col pl-4 border-l-2 border-gray-100 gap-4 text-[20px] text-gray-600">
                                <Link href="/services/product-strategy" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">Product Strategy</Link>
                                <Link href="/services/ui-ux-design" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">UI/UX Design</Link>
                                <Link href="/services/web-development" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">Web Development</Link>
                                <Link href="/services/mobile-development" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">Mobile Development</Link>
                                <Link href="/services/backend-and-api-engineering" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">Backend &amp; API Engineering</Link>
                                <Link href="/services/maintenance" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">Maintenance</Link>
                            </div>
                        </div>

                        <Link href="/work" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-80 transition-opacity">Projects</Link>
                        <Link href="/hire" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-80 transition-opacity">Hire Talents</Link>
                    </nav>
                    <Link
                        href="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="bg-secondary text-white px-10 py-4 rounded-full font-medium text-[20px] tracking-tight hover:bg-secondary/90 transition-colors shrink-0 mt-8"
                    >
                        Contact us
                    </Link>
                </div>
            )}
        </header>
    );
}
