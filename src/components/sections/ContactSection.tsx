"use client";

import { useState } from "react";
import Image from "next/image";
import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { MagneticButton } from "@/components/animations/MagneticButton";

export function ContactSection() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="section-padding relative overflow-hidden">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Form */}
                    <div>
                        <CinematicReveal>
                            <span className="text-copper tracking-widest uppercase text-sm font-medium mb-4 block">
                                Begin the Conversation
                            </span>
                        </CinematicReveal>
                        <CinematicReveal delay={0.1}>
                            <h2 className="mb-6">Schedule a Private Consultation</h2>
                        </CinematicReveal>
                        <CinematicReveal delay={0.2}>
                            <p className="text-sage mb-10 max-w-lg">
                                Discretion is our foundation. Share your details below and a
                                senior partner will respond within 24 hours.
                            </p>
                        </CinematicReveal>

                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <CinematicReveal delay={0.3}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="text-copper text-xs tracking-widest uppercase mb-2 block">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full bg-forest-light border border-copper/20 rounded-sm px-4 py-3 text-parchment-light placeholder:text-sage/50 focus:outline-none focus:ring-2 focus:ring-copper/50 transition-all"
                                                placeholder="Sir James Whitmore"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-copper text-xs tracking-widest uppercase mb-2 block">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                className="w-full bg-forest-light border border-copper/20 rounded-sm px-4 py-3 text-parchment-light placeholder:text-sage/50 focus:outline-none focus:ring-2 focus:ring-copper/50 transition-all"
                                                placeholder="james@whitmore.com"
                                            />
                                        </div>
                                    </div>
                                </CinematicReveal>

                                <CinematicReveal delay={0.4}>
                                    <div>
                                        <label className="text-copper text-xs tracking-widest uppercase mb-2 block">
                                            Nature of Enquiry
                                        </label>
                                        <textarea
                                            rows={4}
                                            className="w-full bg-forest-light border border-copper/20 rounded-sm px-4 py-3 text-parchment-light placeholder:text-sage/50 focus:outline-none focus:ring-2 focus:ring-copper/50 transition-all resize-none"
                                            placeholder="Please omit delicate financial figures at this stage."
                                        />
                                    </div>
                                </CinematicReveal>

                                <CinematicReveal delay={0.5}>
                                    <MagneticButton>
                                        <button
                                            type="submit"
                                            className="w-full sm:w-auto bg-copper text-forest px-10 py-4 rounded-sm font-heading tracking-wider uppercase text-sm hover:bg-copper-light transition-colors"
                                        >
                                            Submit Enquiry
                                        </button>
                                    </MagneticButton>
                                </CinematicReveal>
                            </form>
                        ) : (
                            <CinematicReveal>
                                <div className="velvet-card p-8 text-center">
                                    <h3 className="text-2xl text-copper mb-3">
                                        Thank You
                                    </h3>
                                    <p className="text-sage">
                                        A senior partner will be in contact within 24 hours. All
                                        correspondence is held under strict confidence.
                                    </p>
                                </div>
                            </CinematicReveal>
                        )}
                    </div>

                    {/* Right: Image */}
                    <CinematicReveal delay={0.3} direction="right">
                        <div className="relative h-[500px] rounded-tr-[60px] rounded-bl-[60px] overflow-hidden border border-copper/20 hidden lg:block">
                            <Image
                                src="/images/sections/contact_image.png"
                                alt="Continental Heritage Private Office"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" />
                        </div>
                    </CinematicReveal>
                </div>
            </div>
        </section>
    );
}
