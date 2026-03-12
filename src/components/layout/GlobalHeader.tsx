"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Lock } from "lucide-react";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "The Firm", href: "/the-firm" },
    { label: "Wealth Strategies", href: "/wealth-strategies" },
    { label: "Journal", href: "/journal" },
    { label: "Contact", href: "/contact" },
];

export function GlobalHeader() {
    const pathname = usePathname();
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
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled
                    ? "bg-forest/45 backdrop-blur-2xl border-b border-copper/20 shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
                    : "bg-transparent"
                    }`}
            >
                <div className={`container mx-auto px-6 flex items-center justify-between transition-all duration-700 ${isScrolled ? "h-16" : "h-24"}`}>
                    {/* Logo */}
                    <Link href="/" className="relative z-50 flex items-center gap-4 group">
                        <div className={`relative transition-all duration-700 ${isScrolled ? "w-7 h-7" : "w-9 h-9"} group-hover:scale-105`}>
                            <Image
                                src="/images/logo/main.png"
                                alt="Continental Heritage"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="font-heading text-lg tracking-[0.08em] font-light hidden sm:block text-parchment-light group-hover:text-parchment transition-colors">
                            Continental Heritage
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden xl:flex items-center gap-12" role="navigation" aria-label="Main navigation">
                        {NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className={`text-[13px] font-light tracking-[0.1em] transition-colors relative group py-2 ${isActive ? "text-copper" : "text-parchment/70 hover:text-copper-light"}`}
                                >
                                    {link.label}
                                    <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-copper/60 origin-left transition-transform duration-500 ease-out ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-glow"
                                            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-copper/20 rounded-full blur-md -z-10"
                                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop CTA + Portal */}
                    <div className="hidden lg:flex items-center gap-6">
                        <Link
                            href="/portal"
                            className={`flex items-center gap-2 text-[10px] font-light tracking-widest uppercase transition-all duration-300 py-1.5 px-3 rounded-sm border ${
                                pathname === '/portal'
                                    ? 'text-copper border-copper/40 bg-copper/10'
                                    : 'text-sage hover:text-copper border-copper/10 hover:border-copper/30 hover:bg-copper/5'
                            }`}
                        >
                            <Lock size={12} className="opacity-80" />
                            <span>Client Portal</span>
                        </Link>
                        
                        {/* More elegant, less bulky CTA button for the header */}
                        <Link 
                            href="/contact" 
                            className="group relative inline-flex items-center justify-center overflow-hidden px-6 py-2.5 text-[10px] font-light tracking-[0.2em] uppercase text-parchment border border-copper/30 hover:border-copper/70 transition-colors duration-500 bg-forest-dark/50"
                        >
                            <span className="relative z-10 transition-colors duration-500 group-hover:text-forest-dark">
                                Schedule Consultation
                            </span>
                            <div className="absolute inset-0 z-0 h-full w-0 bg-gradient-copper transition-all duration-500 ease-out group-hover:w-full" />
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden relative z-50 p-2 text-parchment/70 hover:text-copper transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
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
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 bg-forest/98 backdrop-blur-2xl flex flex-col pt-32 px-8 pb-24 overflow-y-auto"
                    >
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
                                        className="font-heading text-4xl text-parchment/90 hover:text-copper transition-colors"
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
                            <div className="copper-rule mb-8" />
                            <Link
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="group relative w-full inline-flex items-center justify-center overflow-hidden px-6 py-4 text-[11px] font-light tracking-[0.2em] uppercase text-forest-dark border border-copper bg-gradient-copper transition-all duration-500"
                            >
                                Schedule Consultation
                            </Link>
                            <div className="mt-8 flex gap-8 text-sage/80 text-sm font-light tracking-wide justify-center">
                                <a href="mailto:contact@continentalheritage.com" className="hover:text-copper transition-colors">Email Us</a>
                                <a href="tel:+61280007000" className="hover:text-copper transition-colors">+61 2 8000 7000</a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
