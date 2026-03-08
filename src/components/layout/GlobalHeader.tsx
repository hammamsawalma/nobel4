"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "@/components/animations/MagneticButton";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "The Firm", href: "/the-firm" },
    { label: "Wealth Strategies", href: "/wealth-strategies" },
    { label: "Journal", href: "/journal" },
    { label: "Contact", href: "/contact" },
];

export function GlobalHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Add blur effect when scrolled past 50px
            setIsScrolled(currentScrollY > 50);

            // Hide header when scrolling down, show when scrolling up
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: isVisible ? 0 : -100 }}
                transition={{ duration: 0.3 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled
                    ? "bg-forest/80 backdrop-blur-md border-b border-copper/10"
                    : "bg-transparent"
                    }`}
            >
                <div className="container mx-auto px-6 h-24 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative z-50 flex items-center gap-3 group">
                        <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src="/images/logo/main.png"
                                alt="Continental Heritage"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="font-heading text-xl tracking-wide hidden sm:block">
                            Continental Heritage
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-10">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium tracking-wide text-parchment-dark hover:text-copper transition-colors relative group py-2"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-copper origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden lg:block">
                        <MagneticButton href="/contact" className="btn btn-primary text-xs px-6 py-3">
                            Schedule Consultation
                        </MagneticButton>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden relative z-50 p-2 text-parchment-dark hover:text-copper transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Full-Screen Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 bg-forest flex flex-col pt-32 px-6 pb-24 overflow-y-auto"
                    >
                        {/* Background Texture inside menu */}
                        <div className="absolute inset-0 bg-[url('/images/textures/paper-grain.png')] bg-[length:400px] opacity-[0.03] pointer-events-none mix-blend-overlay" />

                        <nav className="flex flex-col gap-8 mb-12 relative z-10">
                            {NAV_LINKS.map((link, i) => (
                                <motion.div
                                    key={link.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i + 0.2, duration: 0.5 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="font-heading text-4xl text-parchment hover:text-copper transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-auto relative z-10"
                        >
                            <div className="copper-divider mb-8" />
                            <Link
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="btn btn-primary w-full py-4 text-sm"
                            >
                                Schedule Consultation
                            </Link>
                            <div className="mt-8 flex gap-6 text-sage text-sm">
                                <a href="mailto:contact@continentalheritage.com">Email Us</a>
                                <a href="tel:+61280007000">+61 2 8000 7000</a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
