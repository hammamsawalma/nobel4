"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react";

function FooterNewsletter() {
    const [email, setEmail] = useState("");
    const [done, setDone] = useState(false);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) setDone(true);
    };
    if (done) {
        return (
            <div className="flex items-center gap-2 text-sm text-copper">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>You&apos;re on the list.</span>
            </div>
        );
    }
    return (
        <form onSubmit={handleSubmit} className="flex gap-2 max-w-xs">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Private newsletter"
                className="flex-1 min-w-0 bg-forest border border-copper/20 rounded-sm px-3 py-2 text-parchment-light text-xs placeholder:text-sage/70 focus:outline-none focus:border-copper/50 transition-colors"
            />
            <button
                type="submit"
                className="shrink-0 bg-copper/10 border border-copper/30 text-copper text-xs px-3 py-2 rounded-sm hover:bg-copper/20 hover:border-copper/50 transition-all"
            >
                Join
            </button>
        </form>
    );
}

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-forest-dark pt-24 pb-12 relative z-10 border-t border-[rgba(176,125,75,0.15)]" role="contentinfo">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('/images/textures/paper-grain.png')] bg-[length:400px] opacity-[0.03] pointer-events-none mix-blend-overlay" />

            <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="inline-block mb-6 group">
                            <div className="relative w-12 h-12 mb-4 group-hover:drop-shadow-[0_0_15px_rgba(176,125,75,0.6)] group-hover:scale-105 transition-all duration-500">
                                <Image
                                    src="/images/logo/main.png"
                                    alt="Continental Heritage"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-heading text-2xl tracking-wide text-parchment-light">
                                Continental Heritage
                            </span>
                        </Link>
                        <p className="text-sage text-sm leading-relaxed mb-6 pr-4">
                            Providing bespoke wealth management and institutional-grade preservation strategies for discerning families since 1978.
                        </p>

                        {/* Mini newsletter signup */}
                        <FooterNewsletter />

                        <div className="flex gap-4 mt-6">
                            <span className="text-copper text-xs tracking-widest uppercase border border-copper/20 px-3 py-1 rounded-full">Sydney</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2 lg:col-start-6">
                        <h4 className="text-parchment-light font-heading text-lg mb-6">Explore</h4>
                        <ul className="space-y-4">
                            {[
                                { label: "The Firm", href: "/the-firm" },
                                { label: "Our Philosophy", href: "/the-firm#philosophy" },
                                { label: "Wealth Strategies", href: "/wealth-strategies" },
                                { label: "Journal & Insights", href: "/journal" },
                                { label: "Contact Us", href: "/contact" }
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sage text-sm hover:text-copper transition-all duration-300 flex items-center group">
                                        <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-copper opacity-0 group-hover:opacity-100 group-hover:mr-2">→</span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-parchment-light font-heading text-lg mb-6">Expertise</h4>
                        <ul className="space-y-4">
                            {[
                                { label: "Portfolio Management", href: "/wealth-strategies#portfolio" },
                                { label: "Estate Planning", href: "/wealth-strategies#estate" },
                                { label: "Tax Optimization", href: "/wealth-strategies#tax" },
                                { label: "Family Office", href: "/wealth-strategies#family-office" },
                                { label: "Philanthropy", href: "/wealth-strategies#philanthropy" }
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sage text-sm hover:text-copper transition-all duration-300 flex items-center group">
                                        <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-copper opacity-0 group-hover:opacity-100 group-hover:mr-2">→</span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="lg:col-span-3">
                        <h4 className="text-parchment-light font-heading text-lg mb-6">Direct Inquiries</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 text-sage text-sm">
                                <MapPin size={18} className="text-copper shrink-0 mt-0.5" />
                                <span>
                                    Level 32, 1 Macquarie Place<br />
                                    Sydney NSW 2000<br />
                                    Australia
                                </span>
                            </li>
                            <li className="flex items-center gap-4 text-sage text-sm">
                                <Phone size={18} className="text-copper shrink-0" />
                                <a href="tel:+61280007000" className="hover:text-copper transition-colors">+61 2 8000 7000</a>
                            </li>
                            <li className="flex items-center gap-4 text-sage text-sm">
                                <Mail size={18} className="text-copper shrink-0" />
                                <a href="mailto:contact@continentalheritage.com" className="hover:text-copper transition-colors">contact@continentalheritage.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-copper/10 flex flex-col md:flex-row justify-between items-center gap-4 relative">
                    <button
                        onClick={() => {
                            // Use Lenis if available, else fallback
                            const lenis = (window as any).__lenis;
                            if (lenis) {
                                lenis.scrollTo(0, { duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
                            } else {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                        }}
                        className="absolute right-0 top-0 -translate-y-1/2 w-10 h-10 bg-forest-light border border-copper/30 rounded-full flex items-center justify-center text-copper hover:bg-copper hover:text-forest hover:shadow-[0_0_15px_rgba(176,125,75,0.4)] hover:-translate-y-2 transition-all duration-300 z-20 group"
                        aria-label="Back to top"
                    >
                        <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                    </button>
                    <p className="text-sage/70 text-xs">
                        © {currentYear} Continental Heritage Private Wealth. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/legal/privacy" className="text-sage/70 text-xs hover:text-copper transition-colors">Privacy Policy</Link>
                        <Link href="/legal/terms" className="text-sage/70 text-xs hover:text-copper transition-colors">Terms of Service</Link>
                        <Link href="/legal/regulatory" className="text-sage/70 text-xs hover:text-copper transition-colors">Regulatory Information</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
