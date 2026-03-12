"use client";

import { Scale, Shield, Landmark } from "lucide-react";
import { CinematicReveal } from "@/components/animations/CinematicReveal";

const PHILOSOPHIES = [
    {
        number: "01",
        icon: Landmark,
        title: "Institutional Memory",
        description: "Our approach draws upon half a century of unbroken market observation. We apply enduring principles that have preserved aristocratic wealth through generations of volatility — not fleeting trends.",
        pull: "Time is the rarest asset of all.",
    },
    {
        number: "02",
        icon: Shield,
        title: "Absolute Discretion",
        description: "In an increasingly transparent world, privacy is the ultimate luxury. Our infrastructure is built around absolute confidentiality — a secure harbour for your family's most sensitive financial affairs.",
        pull: "Privacy is not a feature. It is a foundation.",
    },
    {
        number: "03",
        icon: Scale,
        title: "Aligned Interests",
        description: "As an independent partnership, we answer to no corporate parent. Our only obligation is to our clients. When your legacy thrives, we thrive — an alignment that guarantees uncompromised counsel.",
        pull: "We succeed only when you succeed.",
    },
];

export function PhilosophySection() {
    return (
        <section id="philosophy" className="section-padding bg-forest-dark relative overflow-hidden">
            <div className="container relative z-10">
                {/* Header */}
                <div className="max-w-3xl mb-24">
                    <CinematicReveal>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="copper-rule" />
                            <p className="eyebrow">Our Methodology</p>
                        </div>
                        <h2 className="heading-section">
                            The Continental{" "}
                            <em className="text-gradient-copper not-italic">Philosophy</em>
                        </h2>
                        <p className="body-luxury mt-5 max-w-2xl">
                            Three pillars define our methodology — time-tested principles that elevate wealth management from a transactional service to a generational partnership.
                        </p>
                    </CinematicReveal>
                </div>

                {/* Manifesto rows */}
                <div className="space-y-0">
                    {PHILOSOPHIES.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <CinematicReveal key={item.title} delay={0.12 * index}>
                                <div className="group relative grid grid-cols-1 md:grid-cols-[100px_1fr] lg:grid-cols-[120px_1.2fr_2fr] gap-x-8 gap-y-6 py-10 lg:py-14 border-t border-copper/10 hover:border-copper/25 transition-colors duration-500 items-start">
                                    {/* Hover shimmer line */}
                                    <div className="absolute top-0 left-0 w-0 h-px bg-copper group-hover:w-full transition-all duration-700 ease-out" />

                                    {/* Col 1: Number + Icon */}
                                    <div className="flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-4 md:gap-6 w-full">
                                        <div className="whisper text-6xl md:text-[4.5rem] leading-[0.8]" aria-hidden="true">
                                            {item.number}
                                        </div>
                                        <div className="w-10 h-10 rounded-full border border-copper/25 flex items-center justify-center group-hover:border-copper/50 group-hover:bg-copper/5 transition-all duration-500">
                                            <Icon size={18} strokeWidth={1.5} className="text-copper" />
                                        </div>
                                    </div>

                                    {/* Col 2: Title + Pull Quote */}
                                    <div className="flex flex-col justify-start pt-1">
                                        <h3 className="heading-card mb-4">{item.title}</h3>
                                        <div className="border-l-2 border-copper/30 pl-5 group-hover:border-copper/60 transition-colors duration-500 mt-2">
                                            <p className="font-heading text-[1.05rem] text-copper/80 group-hover:text-copper italic leading-relaxed transition-colors duration-500">
                                                {item.pull}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Col 3: Description (gets the most horizontal space) */}
                                    <div className="pt-1">
                                        <p className="body-luxury" style={{ maxWidth: "45ch" }}>{item.description}</p>
                                    </div>
                                </div>
                            </CinematicReveal>
                        );
                    })}
                </div>

                {/* Footer */}
                <CinematicReveal delay={0.4}>
                    <div className="border-t border-copper/10 pt-12 mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
                        <p className="body-luxury italic text-sm max-w-lg" style={{ fontSize: "0.875rem" }}>
                            "In wealth management, principles matter more than products. Our philosophy has not changed in 47 years — because the fundamentals of lasting prosperity do not change."
                        </p>
                        <a href="/contact" className="eyebrow text-copper/80 hover:text-copper transition-colors duration-300 group flex items-center gap-2 whitespace-nowrap">
                            Begin a Confidential Dialogue
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </a>
                    </div>
                </CinematicReveal>
            </div>

            <div className="section-sep mt-0" />
        </section>
    );
}
