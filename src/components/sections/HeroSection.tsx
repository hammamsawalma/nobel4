"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { StaggeredBlurText } from "@/components/animations/StaggeredBlurText";
import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { FloatingCard } from "@/components/animations/FloatingCard";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { MagneticButton } from "@/components/animations/MagneticButton";

const STATS = [
    { value: 47, suffix: "+", label: "Years of Excellence", position: "top-left" },
    { prefix: "$", value: 12.8, suffix: "B", decimals: 1, label: "Assets Under Management", position: "top-right" },
    { value: 98.7, suffix: "%", decimals: 1, label: "Client Retention Rate", position: "bottom-center" },
];

export function HeroSection() {
    const scrollToNextSection = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
    };

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center sticky top-0 z-0">
            {/* Background Image with Parallax */}
            <div className="absolute inset-0 z-0">
                <ParallaxImage
                    src="/images/hero/main.png"
                    alt="Continental Heritage Wealth Management"
                    className="w-full h-full"
                    speed={0.3}
                    priority
                />
                {/* Darkening gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-forest/60 via-forest/40 to-forest overlay-forest-heavy z-10" />
            </div>

            <div className="container relative z-20 flex flex-col items-center justify-center text-center mt-12">
                {/* Subtitle */}
                <CinematicReveal delay={0.2} direction="down">
                    <p className="accent-text text-xl mb-6 tracking-wide">
                        Est. 1978 — Sydney
                    </p>
                </CinematicReveal>

                {/* Main Title */}
                <h1 className="mb-8 leading-tight max-w-5xl mx-auto">
                    <StaggeredBlurText text="Preserving Legacies," delay={0.4} />
                    <br />
                    <StaggeredBlurText
                        text="Building Futures"
                        className="text-copper mt-2 inline-block"
                        delay={0.8}
                    />
                </h1>

                {/* Description */}
                <CinematicReveal delay={1.2}>
                    <p className="mx-auto text-lg md:text-xl max-w-[60ch] text-parchment-dark/90 mb-12">
                        For nearly five decades, Continental Heritage has guided Australia's
                        most distinguished families through the complexities of wealth
                        preservation and generational growth.
                    </p>
                </CinematicReveal>

                {/* CTA Buttons */}
                <CinematicReveal delay={1.4} className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
                    <MagneticButton href="/contact" className="btn btn-primary w-full sm:w-auto">
                        Begin Your Legacy
                    </MagneticButton>
                    <MagneticButton href="/the-firm" className="btn btn-secondary w-full sm:w-auto">
                        Our Philosophy
                    </MagneticButton>
                </CinematicReveal>

                {/* Down Arrow */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    onClick={scrollToNextSection}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 text-copper hover:text-copper-light transition-colors"
                    aria-label="Scroll down"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <ChevronDown size={32} strokeWidth={1.5} />
                    </motion.div>
                </motion.button>
            </div>

            {/* Floating Stat Cards (Desktop Only) */}
            <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none">
                <div className="container relative h-full mx-auto">
                    {STATS.map((stat, i) => (
                        <div
                            key={stat.label}
                            className={`absolute transition-all duration-700 ${stat.position === "top-left" ? "top-[25%] left-[5%]"
                                : stat.position === "top-right" ? "top-[30%] right-[5%]"
                                    : "bottom-[20%] left-[20%]"
                                }`}
                        >
                            <FloatingCard
                                delay={1.5 + (i * 0.2)}
                                offsetY={stat.position === "bottom-center" ? 30 : 60}
                            >
                                <div className="min-w-[180px] text-center px-4 py-2">
                                    <div className="font-heading text-4xl text-copper mb-2">
                                        <AnimatedCounter
                                            value={stat.value}
                                            prefix={stat.prefix}
                                            suffix={stat.suffix}
                                            decimals={stat.decimals}
                                        />
                                    </div>
                                    <div className="text-xs uppercase tracking-widest text-parchment/70 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            </FloatingCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
