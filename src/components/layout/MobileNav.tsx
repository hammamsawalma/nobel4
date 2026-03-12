"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Bookmark, Compass, Mail, Briefcase, Lock } from "lucide-react";
import { useEffect, useState } from "react";

const MOBILE_NAV_LINKS = [
    { label: "Home", href: "/", icon: Home },
    { label: "Firm", href: "/the-firm", icon: Briefcase },
    { label: "Strategies", href: "/wealth-strategies", icon: Compass },
    { label: "Journal", href: "/journal", icon: Bookmark },
    { label: "Portal", href: "/portal", icon: Lock },
];

export function MobileNav() {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Hide on scroll down, show on scroll up 
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

    return (
        <div
            className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-forest-dark/80 backdrop-blur-xl border-t border-copper/30 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] transition-transform duration-500 pb-safe ${isVisible ? "translate-y-0" : "translate-y-full"
                }`}
        >
            <nav className="flex justify-around items-center h-16 px-2" role="navigation" aria-label="Mobile navigation">
                {MOBILE_NAV_LINKS.map((link) => {
                    const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                    const Icon = link.icon;

                    return (
                        <Link
                            key={link.label}
                            href={link.href}
                            className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${isActive ? "text-copper" : "text-sage hover:text-parchment"
                                }`}
                        >
                            <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                            <span className="text-[10px] font-medium tracking-wide">
                                {link.label}
                            </span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
