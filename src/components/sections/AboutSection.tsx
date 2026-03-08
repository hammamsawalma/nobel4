"use client";

import Image from "next/image";
import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { MagneticButton } from "@/components/animations/MagneticButton";

export function AboutSection() {
    return (
        <section id="about" className="section-padding bg-forest overflow-hidden">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column - Content */}
                    <div className="order-2 lg:order-1">
                        <CinematicReveal direction="up" delay={0.1}>
                            <h2 className="mb-6">
                                A Heritage of <span className="text-copper">Wisdom</span>
                            </h2>
                        </CinematicReveal>

                        <CinematicReveal direction="up" delay={0.2}>
                            <div className="prose mb-8">
                                <p>
                                    Established in 1978, Continental Heritage was founded on a simple yet profound principle: that true wealth preservation requires more than financial acumen—it requires institutional memory, steady patience, and an unwavering commitment to the families we serve.
                                </p>
                                <p>
                                    We are not merely wealth managers; we are the dedicated custodians of your legacy. Operating from Sydney, Australia's premier financial centre, our approach marries the timeless virtues of prudent risk management with cutting-edge analytical capabilities.
                                </p>
                            </div>
                        </CinematicReveal>

                        <CinematicReveal direction="up" delay={0.3}>
                            <blockquote className="mb-10 text-xl max-w-lg">
                                &ldquo;We measure our success not in fiscal quarters, but in generations.&rdquo;
                            </blockquote>
                        </CinematicReveal>

                        <CinematicReveal direction="up" delay={0.4}>
                            <MagneticButton href="/the-firm" className="btn btn-secondary">
                                Discover Our Heritage
                            </MagneticButton>
                        </CinematicReveal>
                    </div>

                    {/* Right Column - Images */}
                    <div className="order-1 lg:order-2 relative h-[500px] lg:h-[700px] w-full">
                        <CinematicReveal direction="left" delay={0.3} className="absolute inset-0 z-10 w-[85%] h-[85%] ml-auto">
                            <div className="relative w-full h-full rounded-tr-[100px] rounded-bl-[100px] overflow-hidden group border border-border">
                                <Image
                                    src="/images/about/main.png"
                                    alt="Continental Heritage Office"
                                    fill
                                    className="object-cover transition-transform duration-cinema group-hover:scale-105"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                {/* Overlay for depth */}
                                <div className="absolute inset-0 bg-forest/20 mix-blend-multiply transition-opacity duration-cinema group-hover:opacity-0" />
                            </div>
                        </CinematicReveal>

                        <CinematicReveal direction="right" delay={0.5} className="absolute bottom-0 left-0 z-20 w-[55%] h-[45%] shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                            <div className="relative w-full h-full border-[6px] border-forest rounded-sm overflow-hidden group">
                                <Image
                                    src="/images/about/secondary.png"
                                    alt="Heritage Details"
                                    fill
                                    className="object-cover transition-transform duration-cinema group-hover:scale-105"
                                    sizes="(max-width: 1024px) 50vw, 25vw"
                                />
                            </div>
                        </CinematicReveal>

                        {/* Decorative Dot Matrix */}
                        <CinematicReveal delay={0.6} className="absolute top-12 left-8 -z-10 grid grid-cols-4 gap-3 opacity-30">
                            {Array.from({ length: 24 }).map((_, i) => (
                                <div key={i} className="w-1.5 h-1.5 rounded-full bg-copper" />
                            ))}
                        </CinematicReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
