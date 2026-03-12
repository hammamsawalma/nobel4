"use client";

import Image from "next/image";
import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";

const STATS = [
    { value: 47, suffix: "+", label: "Years of Heritage" },
    { value: 350, suffix: "+", label: "Families Served" },
    { prefix: "$", value: 12.8, suffix: "B", decimals: 1, label: "Assets Managed" },
];

export function AboutSection() {
    return (
        <section id="about" className="bg-forest overflow-hidden section-padding">
            {/* Top section-sep into this section */}
            <div className="absolute top-0 w-full section-sep" />

            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">

                {/* ── LEFT: Images cluster (Framed) ─────────────────────── */}
                <div className="relative order-1 h-[350px] sm:h-[550px] lg:h-[700px] w-full">
                    {/* Main image — elegantly framed and rounded */}
                    <CinematicReveal direction="right" className="absolute top-0 right-0 bottom-[15%] left-0 lg:left-[10%] z-10 w-full lg:w-[90%]">
                        <div className="relative w-full h-full overflow-hidden rounded-t-[40px] rounded-br-[40px] rounded-bl-xl shadow-2xl border border-copper/10 group">
                            <Image
                                src="/images/about/main.png"
                                alt="Continental Heritage — A Legacy of Wisdom"
                                fill
                                className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="img-tone" />
                        </div>
                    </CinematicReveal>

                    {/* Secondary image — overlapping accent float */}
                    <CinematicReveal direction="left" delay={0.3} className="absolute bottom-0 left-0 w-[55%] h-[40%] z-20 shadow-[0_20px_40px_rgba(0,0,0,0.6)] rounded-[32px] overflow-hidden border border-copper/20">
                        <div className="relative w-full h-full group bg-forest">
                            <Image
                                src="/images/about/secondary.png"
                                alt="Continental Heritage — Heritage Detail"
                                fill
                                className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
                                sizes="25vw"
                            />
                            <div className="img-tone" />
                        </div>
                    </CinematicReveal>
                </div>

                {/* ── RIGHT: Text column ─────────────────────── */}
                <div className="order-2 flex flex-col justify-center py-6 lg:py-10 lg:pl-10">

                    {/* Single CinematicReveal for the entire text block */}
                    <CinematicReveal direction="up">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="copper-rule" />
                            <p className="eyebrow">Est. 1978 — Sydney, Australia</p>
                        </div>

                        <h2 className="heading-section mb-8">
                            A Heritage of{" "}
                            <em className="text-gradient-copper not-italic">Wisdom.</em>
                        </h2>

                        <div className="space-y-4 mb-8">
                            <p className="body-luxury">
                                Established in 1978, Continental Heritage was founded on a simple yet profound principle: that true wealth preservation requires more than financial acumen — it requires institutional memory, steady patience, and an unwavering commitment to the families we serve.
                            </p>
                            <p className="body-luxury">
                                We are not merely wealth managers; we are the dedicated custodians of your legacy. Operating from Sydney, Australia's premier financial centre.
                            </p>
                        </div>

                        {/* Blockquote using standard global styles */}
                        <blockquote className="mb-8 max-w-[40ch]">
                            We measure our success not in fiscal quarters, but in generations.
                        </blockquote>

                        {/* Stats strip */}
                        <div className="flex flex-wrap gap-6 lg:gap-12 py-6 border-t border-b border-copper/10 mb-10 w-fit">
                            {STATS.map((stat) => (
                                <div key={stat.label}>
                                    <div className="font-heading text-3xl text-copper flex items-baseline gap-0.5">
                                        {stat.prefix && <span>{stat.prefix}</span>}
                                        <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                                    </div>
                                    <p className="eyebrow mt-1.5" style={{ color: "rgba(107,124,110,0.7)" }}>{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <MagneticButton href="/the-firm" className="btn btn-secondary self-start">
                            Discover Our Heritage
                        </MagneticButton>
                    </CinematicReveal>
                </div>
            </div>

        </section>
    );
}
