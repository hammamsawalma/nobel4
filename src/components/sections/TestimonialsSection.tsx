"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { CinematicReveal } from "@/components/animations/CinematicReveal";

const TESTIMONIALS = [
    {
        quote: "Continental Heritage has done more than manage our assets; they have safeguarded our family's future across three generations with absolute discretion and profound wisdom.",
        author: "Lord H. Harrington",
        role: "Client since 1982"
    },
    {
        quote: "In an era of algorithmic trading, their dedication to deep institutional memory and bespoke, patient strategies is not just refreshing—it is essential.",
        author: "Elena Rostova",
        role: "Client since 2005"
    },
    {
        quote: "Their counsel during our complex cross-border succession planning was invaluable. They operate with a level of sophistication rarely seen today.",
        author: "The Dubois Family Office",
        role: "Client since 1996"
    }
];

export function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play interval
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 8000); // 8 seconds per slide
        return () => clearInterval(timer);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    return (
        <section className="section-padding bg-forest relative overflow-hidden">
            {/* Background with Parallax effect feeling */}
            <div
                className="absolute inset-0 z-0 opacity-20 mix-blend-overlay"
                style={{ backgroundImage: "url('/images/sections/testimonials-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
            />

            {/* Dark gradient to blend the edges */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-forest via-forest/80 to-forest" />

            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <CinematicReveal>
                        <Quote size={48} className="text-copper/40 mx-auto mb-8" strokeWidth={1} />
                    </CinematicReveal>

                    <div className="relative h-[250px] md:h-[200px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute w-full"
                            >
                                <p className="text-2xl md:text-3xl font-heading text-parchment-light leading-relaxed mb-8">
                                    &ldquo;{TESTIMONIALS[currentIndex].quote}&rdquo;
                                </p>
                                <div>
                                    <div className="font-heading text-xl text-copper">
                                        — {TESTIMONIALS[currentIndex].author}
                                    </div>
                                    <div className="text-sm text-sage tracking-widest uppercase mt-2">
                                        {TESTIMONIALS[currentIndex].role}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <CinematicReveal delay={0.4} className="mt-12 flex items-center justify-center gap-6">
                        <button
                            onClick={handlePrev}
                            className="p-3 rounded-full border border-copper/30 text-copper hover:bg-copper/10 hover:border-copper transition-all duration-300"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <div className="flex gap-3">
                            {TESTIMONIALS.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`transition-all duration-300 rounded-full ${idx === currentIndex
                                            ? "w-8 h-1.5 bg-copper"
                                            : "w-2 h-1.5 bg-copper/30 hover:bg-copper/60"
                                        }`}
                                    aria-label={`Go to testimonial ${idx + 1}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={handleNext}
                            className="p-3 rounded-full border border-copper/30 text-copper hover:bg-copper/10 hover:border-copper transition-all duration-300"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </CinematicReveal>
                </div>
            </div>
        </section>
    );
}
