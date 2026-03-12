"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CinematicReveal } from "@/components/animations/CinematicReveal";

const TESTIMONIALS = [
    {
        quote: "Continental Heritage has done more than manage our assets; they have safeguarded our family's future across three generations with absolute discretion and profound wisdom.",
        author: "Lord H. Harrington",
        role: "Client since 1982",
        initials: "HH",
    },
    {
        quote: "In an era of algorithmic trading, their dedication to deep institutional memory and bespoke, patient strategies is not just refreshing — it is essential.",
        author: "Elena Rostova",
        role: "Client since 2005",
        initials: "ER",
    },
    {
        quote: "Their counsel during our complex cross-border succession planning was invaluable. They operate with a level of sophistication rarely seen today.",
        author: "The Dubois Family Office",
        role: "Client since 1996",
        initials: "DF",
    },
];

export function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
            setProgress(0);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        setProgress(0);
        const interval = setInterval(() => {
            setProgress((p) => Math.min(p + 1, 100));
        }, 80);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <section className="relative overflow-hidden bg-forest-dark border-t border-b border-copper/10 min-h-[65vh] flex items-center">

            {/* Background texture — very subtle */}
            <div
                className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: "url('/images/sections/testimonials-bg.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
            />

            {/* Restrained decorative quote mark — whisper level */}
            <div
                className="whisper absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(8rem,16vw,14rem)]"
                aria-hidden="true"
            >
                "
            </div>

            <div className="container relative z-10 py-24">
                <div className="max-w-4xl mx-auto">

                    {/* Eyebrow */}
                    <CinematicReveal className="text-center mb-14">
                        <div className="inline-flex items-center gap-4 justify-center">
                            <div className="copper-rule" />
                            <p className="eyebrow">Client Voices</p>
                            <div className="copper-rule" />
                        </div>
                    </CinematicReveal>

                    {/* Quote area */}
                    <div className="relative min-h-[240px] flex flex-col items-center justify-center text-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
                                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full"
                            >
                                {/* 5 stars */}
                                <div className="flex justify-center gap-1.5 mb-7">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-3.5 h-3.5 fill-copper" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Quote text using heading-card for consistent scale */}
                                <blockquote className="heading-card mb-9 max-w-3xl mx-auto px-4" style={{ fontStyle: "normal", borderLeft: "none", margin: "0 auto 2.25rem" }}>
                                    &ldquo;{TESTIMONIALS[currentIndex].quote}&rdquo;
                                </blockquote>

                                {/* Author */}
                                <div className="flex items-center justify-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-copper/10 border border-copper/25 flex items-center justify-center shrink-0">
                                        <span className="font-heading text-copper text-xs">{TESTIMONIALS[currentIndex].initials}</span>
                                    </div>
                                    <div className="text-left">
                                        <p className="font-heading text-parchment-light text-base">{TESTIMONIALS[currentIndex].author}</p>
                                        <p className="eyebrow mt-1" style={{ color: "rgba(107,124,110,0.6)" }}>{TESTIMONIALS[currentIndex].role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Controls */}
                    <div className="flex flex-col items-center gap-7 mt-10">
                        {/* Thin progress bar */}
                        <div className="w-36 h-px bg-copper/15 relative overflow-hidden rounded-full">
                            <motion.div
                                className="absolute left-0 top-0 bottom-0 bg-copper"
                                style={{ width: `${progress}%` }}
                                transition={{ duration: 0 }}
                            />
                        </div>

                        {/* Navigation: Roman numerals */}
                        <div className="flex items-center gap-7">
                            <button onClick={() => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} className="p-2 text-sage/40 hover:text-copper transition-colors duration-300" aria-label="Previous testimonial">
                                <ChevronLeft size={16} />
                            </button>

                            {["I", "II", "III"].map((roman, idx) => (
                                <button
                                    key={roman}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`font-heading text-sm transition-all duration-300 ${idx === currentIndex ? "text-copper" : "text-sage/30 hover:text-sage/60"}`}
                                    aria-label={`Go to testimonial ${idx + 1}`}
                                >
                                    {roman}
                                </button>
                            ))}

                            <button onClick={() => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)} className="p-2 text-sage/40 hover:text-copper transition-colors duration-300" aria-label="Next testimonial">
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
