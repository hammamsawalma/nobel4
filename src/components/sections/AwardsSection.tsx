"use client";

import { motion } from "framer-motion";
import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";

const STATS = [
    { value: 47, suffix: "+", label: "Years of Excellence", sublabel: "Founded 1978" },
    { value: 350, suffix: "+", label: "Families Served", sublabel: "Across 4 continents" },
    { prefix: "$", value: 12.8, suffix: "B", decimals: 1, label: "Assets Under Management", sublabel: "Institutional-grade" },
    { value: 98.7, suffix: "%", decimals: 1, label: "Client Retention", sublabel: "Multi-generational" },
];

const AWARDS = [
    { title: "Best Private Wealth Manager", source: "Global Finance Awards", year: "2024" },
    { title: "Outstanding Long-Term Returns", source: "Institutional Investor", year: "2023" },
    { title: "Top Cross-Border Advisory", source: "Private Banker International", year: "2024" },
    { title: "Excellence in Risk Management", source: "Wealth & Finance Intl.", year: "2023" },
    { title: "Most Trusted Family Office", source: "Private Wealth Asia", year: "2024" },
    { title: "Best ESG Integration", source: "Sustainable Finance Awards", year: "2023" },
];

export function AwardsSection() {
    return (
        <section className="bg-forest-dark overflow-hidden">
            {/* No GlowOrb, no paper grain — clean dark surface */}

            {/* ── PART 1: Animated Stats Grid ─────────────────── */}
            <div className="container py-24">
                <CinematicReveal>
                    <div className="flex items-center gap-3 mb-14">
                        <div className="copper-rule" />
                        <p className="eyebrow">By The Numbers</p>
                    </div>
                </CinematicReveal>

                <div className="grid grid-cols-2 lg:grid-cols-4">
                    {STATS.map((stat, i) => (
                        <CinematicReveal key={stat.label} delay={0.1 * i}>
                            <div className={`group relative py-10 px-6 lg:px-8 border-t border-copper/10 hover:border-copper/30 transition-colors duration-500 ${i % 2 !== 0 ? "border-l border-copper/10" : ""} ${i >= 2 ? "lg:border-t-0" : ""} ${i > 0 && i < STATS.length ? "lg:border-l lg:border-copper/10" : ""}`}>
                                {/* Hover accent line */}
                                <div className="absolute bottom-0 left-0 w-0 h-px bg-copper group-hover:w-full transition-all duration-700" />

                                <div className="font-heading text-[clamp(2.5rem,4vw,4rem)] text-parchment-light leading-none mb-3 flex items-baseline gap-1">
                                    {stat.prefix && <span className="text-copper">{stat.prefix}</span>}
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                                </div>
                                <p className="eyebrow mb-1">{stat.label}</p>
                                <p className="text-sage/40 text-xs">{stat.sublabel}</p>
                            </div>
                        </CinematicReveal>
                    ))}
                </div>
            </div>

            {/* ── DIVIDER ─────────────────────────────────────── */}
            <div className="section-sep" />

            {/* ── PART 2: Awards Marquee ──────────────────────── */}
            <div className="py-12 overflow-hidden" aria-label="Award Recognition" aria-hidden="true">
                <div className="container mb-8">
                    <CinematicReveal>
                        <div className="flex items-center gap-3">
                            <div className="copper-rule" />
                            <p className="eyebrow">Industry Recognition</p>
                        </div>
                    </CinematicReveal>
                </div>

                <div className="relative">
                    {/* Edge fades */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-forest-dark to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-forest-dark to-transparent z-10 pointer-events-none" />

                    {/* Slowed from 30s → 50s for a "confident" pace */}
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                        className="flex items-center whitespace-nowrap"
                    >
                        {[...AWARDS, ...AWARDS].map((award, i) => (
                            <div key={i} className="inline-flex items-center gap-8 px-10">
                                <span className="text-copper/25 text-base" aria-hidden="true">◆</span>
                                <div>
                                    <p className="text-parchment-dark text-sm font-heading">{award.title}</p>
                                    <p className="eyebrow mt-0.5" style={{ color: "rgba(107,124,110,0.5)" }}>
                                        {award.source} — {award.year}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Micro CTA */}
            <div className="container pb-16">
                <CinematicReveal>
                    <a href="/contact" className="eyebrow text-copper/55 hover:text-copper/90 transition-colors duration-300 flex items-center gap-2 group">
                        Experience Excellence First-Hand
                        <span className="transition-transform duration-300 group-hover:translate-x-1 text-sm">→</span>
                    </a>
                </CinematicReveal>
            </div>

            <div className="section-sep" />
        </section>
    );
}
