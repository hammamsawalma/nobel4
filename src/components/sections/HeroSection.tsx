"use client";

import { motion } from "framer-motion";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { TextReveal } from "@/components/animations/TextReveal";
import { GlowOrb } from "@/components/animations/GlowOrb";

const STATS = [
    { value: 47, suffix: "+", label: "Years of Excellence" },
    { prefix: "$", value: 12.8, suffix: "B", decimals: 1, label: "Assets Under Management" },
    { value: 98.7, suffix: "%", decimals: 1, label: "Client Retention Rate" },
];

export function HeroSection() {
    const scrollToNextSection = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
    };

    return (
        <section className="relative h-screen min-h-[800px] w-full overflow-hidden flex flex-col items-center justify-between sticky top-0 z-0">
            {/* Background Image with Parallax */}
            <div className="absolute inset-0 z-0">
                <ParallaxImage
                    src="/images/hero/main.webp"
                    alt="Continental Heritage Wealth Management"
                    className="w-full h-full"
                    speed={0.3}
                    priority
                />
                {/* Darkening gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-forest/60 via-forest/40 to-forest/90 overlay-forest-heavy z-10" />

                {/* Ambient Glow Orbs */}
                <GlowOrb color="copper" size={600} opacity={0.2} blur={150} className="top-1/4 left-1/4" delay={1} />
                <GlowOrb color="forest" size={800} opacity={0.3} blur={150} className="bottom-1/4 right-1/4" delay={2} />
            </div>

            {/* Spacer for vertical balance */}
            <div className="flex-1" />

            {/* Main Content Area (Centered) */}
            <div className="container relative z-20 flex flex-col items-center justify-center text-center mt-12 w-full">
                {/* Subtitle */}
                <CinematicReveal delay={0.2} direction="scale">
                    <p className="eyebrow mb-6">Est. 1978 — Sydney</p>
                </CinematicReveal>

                {/* Main Title */}
                <h1 className="mb-6 lg:mb-8 leading-[1.1] max-w-5xl mx-auto text-[clamp(2rem,8vw,5rem)] px-4">
                    <TextReveal text="Preserving Legacies," delay={0.4} />
                    <br />
                    <TextReveal
                        text="Building Futures"
                        className="text-gradient-copper mt-1 lg:mt-2 inline-block"
                        delay={0.8}
                    />
                </h1>

                {/* Description */}
                <CinematicReveal delay={1.2} direction="up">
                    <p className="body-luxury mx-auto max-w-[55ch] text-parchment-light mb-10 lg:mb-12 px-6">
                        For nearly five decades, Continental Heritage has guided Australia's
                        most distinguished families through the complexities of wealth
                        preservation and generational growth.
                    </p>
                </CinematicReveal>

                {/* CTA Buttons - Stack on very small screens, row on sm+ */}
                <CinematicReveal delay={1.4} direction="up" className="flex flex-col sm:flex-row gap-4 lg:gap-6 w-[85%] sm:w-auto mx-auto z-30">
                    <MagneticButton href="/contact" className="btn btn-glow w-full sm:w-auto text-[11px] lg:text-sm tracking-[0.15em] py-3.5 lg:py-4">
                        Begin Your Legacy
                    </MagneticButton>
                    <MagneticButton href="/the-firm" className="btn btn-ghost w-full sm:w-auto text-[11px] lg:text-sm tracking-[0.15em] px-6 py-3.5 lg:py-4">
                        Our Philosophy
                    </MagneticButton>
                </CinematicReveal>

                {/* Down Arrow Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="mt-16 flex flex-col items-center gap-2 cursor-pointer group"
                    onClick={scrollToNextSection}
                >
                    <span className="text-[10px] uppercase tracking-[0.3em] text-copper/70 group-hover:text-copper transition-colors">
                        Scroll
                    </span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="w-[1px] h-12 bg-gradient-to-b from-copper/70 to-transparent group-hover:from-copper transition-colors"
                    />
                </motion.div>
            </div>

            {/* Bottom Stats Strip - Replaces the floating absolute cards */}
            <div className="w-full relative z-20 bg-forest-dark/40 backdrop-blur-md border-t border-copper/10 mt-auto hidden md:block">
                <div className="container mx-auto">
                    <div className="grid grid-cols-3 divide-x divide-copper/10">
                        {STATS.map((stat, i) => (
                            <CinematicReveal key={stat.label} delay={1.8 + (i * 0.2)} direction="up" className="w-full">
                                <div className="text-center py-6 px-4">
                                    <div className="font-heading text-3xl text-copper flex items-baseline justify-center gap-0.5">
                                        {stat.prefix && <span>{stat.prefix}</span>}
                                        <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                                    </div>
                                    <div className="eyebrow mt-1.5" style={{ color: "rgba(107,124,110,0.7)" }}>
                                        {stat.label}
                                    </div>
                                </div>
                            </CinematicReveal>
                        ))}
                    </div>
                </div>
            </div>

             {/* Mobile/Tablet Stats Strip - Refined for Mobile Luxury */}
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="md:hidden w-full relative z-20 bg-forest-dark/70 backdrop-blur-xl border-t border-copper/10 mt-12 py-6 px-4"
            >
                <div className="grid grid-cols-3 divide-x divide-copper/10">
                    {STATS.map((stat) => (
                        <div key={stat.label} className="text-center px-2">
                            <div className="font-heading text-xl sm:text-2xl text-copper flex items-center justify-center">
                                {stat.prefix && <span>{stat.prefix}</span>}
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                            </div>
                            <div className="text-[8px] sm:text-[9px] uppercase tracking-[0.1em] sm:tracking-[0.15em] text-parchment/70 mt-1 leading-tight max-w-[80px] mx-auto">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
