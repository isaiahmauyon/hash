import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full bg-white py-24 px-6 lg:px-20 max-w-7xl mx-auto flex flex-col gap-12 text-center md:text-left">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-16 md:gap-8 w-full">
                <div className="flex flex-col gap-6 max-w-[314px] items-center md:items-start">
                    <Link href="/" className="h-7 w-[130px] shrink-0 flex items-center justify-center md:justify-start">
                        <Image src="/images/logo.png" alt="Hashbangs Logo" width={130} height={28} className="object-contain" priority />
                    </Link>
                    <p className="text-lg font-medium tracking-tight text-muted-foreground leading-relaxed">
                        Transforming complex ideas into scalable digital products. Building teams that ship.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-12 md:gap-20 justify-center md:justify-start">
                    <div className="flex flex-col gap-6">
                        <h4 className="text-secondary font-bold tracking-tight">SERVICES</h4>
                        <div className="flex flex-col gap-4 text-muted-foreground font-medium">
                            <Link href="/services#product-strategy" className="hover:text-primary transition-colors">Product Strategy</Link>
                            <Link href="/services#ui-ux-design" className="hover:text-primary transition-colors">UI/UX Design</Link>
                            <Link href="/services#web-development" className="hover:text-primary transition-colors">Web Development</Link>
                            <Link href="/services#mobile-development" className="hover:text-primary transition-colors">Mobile Development</Link>
                            <Link href="/services#backend-apis" className="hover:text-primary transition-colors">Backend & APIs</Link>
                            <Link href="/services#maintenance" className="hover:text-primary transition-colors">Maintenance</Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-secondary font-bold tracking-tight">COMPANY</h4>
                        <div className="flex flex-col gap-4 text-muted-foreground font-medium">
                            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-secondary font-bold tracking-tight">LEGAL</h4>
                        <div className="flex flex-col gap-4 text-muted-foreground font-medium">
                            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-px bg-border my-2 hidden md:block" />

            <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-6 w-full text-[16px] md:text-lg font-medium text-muted-foreground tracking-tight pt-4 md:pt-0">
                <p>© 2026 Hashbangs. All rights reserved.</p>

                <div className="flex gap-8 md:gap-12 items-center justify-center text-secondary w-full md:w-auto">
                    <a href="#" className="hover:text-secondary/80 transition-colors">Linkedin</a>
                    <a href="#" className="hover:text-secondary/80 transition-colors">X (Twitter)</a>
                </div>
            </div>
        </footer>
    );
}
