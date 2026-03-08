"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ScrollSpyNavProps {
    sections: {
        id: string;
        label: string;
    }[];
}

export function ScrollSpyNav({ sections }: ScrollSpyNavProps) {
    const [activeId, setActiveId] = useState<string>("");
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        // Only show on desktop
        const mediaQuery = window.matchMedia("(min-width: 1024px)");
        if (!mediaQuery.matches) return;

        observerRef.current = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((e) => e.isIntersecting);
                if (visible.length > 0) {
                    // Pick the one with the highest intersection ratio
                    const most = visible.reduce((a, b) =>
                        a.intersectionRatio > b.intersectionRatio ? a : b
                    );
                    setActiveId(most.target.id);
                }
            },
            { rootMargin: "-30% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
        );

        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observerRef.current?.observe(el);
        });

        return () => observerRef.current?.disconnect();
    }, [sections]);

    const handleClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <nav
            className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-40"
            aria-label="Section navigation"
        >
            <div className="flex flex-col items-end gap-4">
                {sections.map(({ id, label }) => {
                    const isActive = activeId === id;
                    return (
                        <button
                            key={id}
                            onClick={() => handleClick(id)}
                            className="group flex items-center gap-3 cursor-pointer"
                            aria-label={`Scroll to ${label}`}
                            aria-current={isActive ? "true" : undefined}
                        >
                            <AnimatePresence>
                                {isActive && (
                                    <motion.span
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        className="text-xs text-copper tracking-widest uppercase font-medium"
                                    >
                                        {label}
                                    </motion.span>
                                )}
                            </AnimatePresence>

                            <span
                                className={`block rounded-full transition-all duration-300 ${isActive
                                        ? "w-3 h-3 bg-copper shadow-[0_0_8px_rgba(176,125,75,0.5)]"
                                        : "w-2 h-2 bg-sage/40 group-hover:bg-copper/70"
                                    }`}
                            />
                        </button>
                    );
                })}
            </div>
        </nav>
    );
}
