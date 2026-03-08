"use client";

import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { CopperGlow } from "@/components/animations/CopperGlow";
import { Award, TrendingUp, Globe2, ShieldCheck } from "lucide-react";

const AWARDS = [
    {
        icon: Award,
        title: "Best Private Wealth Manager",
        source: "Global Finance Awards",
        year: "2024",
    },
    {
        icon: TrendingUp,
        title: "Outstanding Long-Term Returns",
        source: "Institutional Investor",
        year: "2023",
    },
    {
        icon: Globe2,
        title: "Top Cross-Border Advisory",
        source: "Private Banker International",
        year: "2024",
    },
    {
        icon: ShieldCheck,
        title: "Excellence in Risk Management",
        source: "Wealth & Finance Intl.",
        year: "2023",
    },
];

export function AwardsSection() {
    return (
        <section className="section-padding relative overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{ backgroundImage: "url('/images/sections/awards_bg.png')" }}
            />
            <div className="absolute inset-0 bg-forest/90" />

            <div className="container relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <CinematicReveal>
                        <span className="text-copper tracking-widest uppercase text-sm font-medium mb-4 block">
                            Recognition
                        </span>
                    </CinematicReveal>
                    <CinematicReveal delay={0.1}>
                        <h2 className="mb-6">Industry Accreditation</h2>
                    </CinematicReveal>
                    <CinematicReveal delay={0.2}>
                        <div className="copper-divider-ornate max-w-sm mx-auto">
                            <span className="dot" />
                        </div>
                    </CinematicReveal>
                </div>

                {/* Awards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {AWARDS.map((award, i) => (
                        <CinematicReveal key={i} delay={0.1 * i}>
                            <CopperGlow className="h-full">
                                <div className="velvet-card p-6 text-center h-full flex flex-col items-center">
                                    <div className="w-14 h-14 rounded-full bg-copper/10 flex items-center justify-center mb-5 border border-copper/30">
                                        <award.icon className="w-6 h-6 text-copper" />
                                    </div>
                                    <h3 className="text-lg text-parchment-light mb-2 font-heading">
                                        {award.title}
                                    </h3>
                                    <p className="text-sage text-sm mb-1">{award.source}</p>
                                    <span className="text-copper/60 text-xs tracking-widest">
                                        {award.year}
                                    </span>
                                </div>
                            </CopperGlow>
                        </CinematicReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
