"use client";

import { Scale, Shield, Landmark } from "lucide-react";
import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { CopperGlow } from "@/components/animations/CopperGlow";

const PHILOSOPHIES = [
    {
        icon: Landmark,
        title: "Institutional Memory",
        description: "Our approach draws upon half a century of unbroken market observation. We don't chase fleeting trends; we apply the enduring principles that have preserved aristocratic wealth through generations of volatility."
    },
    {
        icon: Shield,
        title: "Absolute Discretion",
        description: "In an increasingly transparent world, privacy is the ultimate luxury. Our infrastructure is built around absolute confidentiality, offering a secure harbor for your family's most sensitive financial affairs."
    },
    {
        icon: Scale,
        title: "Aligned Interests",
        description: "As an independent partnership, we answer to no corporate parent. Our only obligation is to our clients. When your legacy thrives, we thrive—an alignment of interests that guarantees objective, uncompromised counsel."
    }
];

export function PhilosophySection() {
    return (
        <section id="philosophy" className="section-padding bg-forest-dark relative overflow-hidden">
            {/* Background Texture */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: "url('/images/sections/philosophy-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
            />

            <div className="container relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <CinematicReveal>
                        <h2 className="mb-6">The Continental Philosophy</h2>
                    </CinematicReveal>
                    <CinematicReveal delay={0.2}>
                        <p className="text-parchment-dark/80 text-lg">
                            Three pillars define our methodology—time-tested principles that elevate wealth management from a transactional service to a generational partnership.
                        </p>
                    </CinematicReveal>

                    <CinematicReveal delay={0.3}>
                        <div className="copper-divider-ornate mt-8 max-w-md mx-auto">
                            <span className="dot" />
                        </div>
                    </CinematicReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {PHILOSOPHIES.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <CinematicReveal
                                key={item.title}
                                delay={0.4 + (index * 0.2)}
                                className="h-full"
                            >
                                <CopperGlow className="h-full">
                                    <div className="velvet-card h-full flex flex-col items-center text-center">
                                        <div className="w-16 h-16 rounded-full bg-forest border border-copper/30 flex items-center justify-center mb-6 text-copper transition-transform duration-500 group-hover:rotate-12">
                                            <Icon size={28} strokeWidth={1.5} />
                                        </div>

                                        <h3 className="text-xl mb-4 text-parchment-light">{item.title}</h3>

                                        <p className="text-sage leading-relaxed flex-grow">
                                            {item.description}
                                        </p>

                                        {/* Decorative bottom line */}
                                        <div className="w-12 h-0.5 bg-copper/20 mt-8 group-hover:bg-copper/60 transition-colors duration-300" />
                                    </div>
                                </CopperGlow>
                            </CinematicReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
