"use client";

import { useState } from "react";
import Image from "next/image";
import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { Mail } from "lucide-react";

export function NewsletterSection() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) setSubscribed(true);
    };

    return (
        <section className="relative overflow-hidden py-20 lg:py-28">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/sections/newsletter_image.png"
                    alt="Continental Heritage Newsletter"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-forest/85" />
            </div>

            <div className="container relative z-10">
                <div className="max-w-2xl mx-auto text-center">
                    <CinematicReveal>
                        <div className="w-14 h-14 rounded-full bg-copper/10 border border-copper/30 flex items-center justify-center mx-auto mb-6">
                            <Mail className="w-6 h-6 text-copper" />
                        </div>
                    </CinematicReveal>

                    <CinematicReveal delay={0.1}>
                        <h2 className="mb-4">The Quarterly Perspective</h2>
                    </CinematicReveal>

                    <CinematicReveal delay={0.2}>
                        <p className="text-sage mb-10 max-w-md mx-auto">
                            Receive our private market commentary and curated insights,
                            delivered quarterly to a select readership.
                        </p>
                    </CinematicReveal>

                    {!subscribed ? (
                        <CinematicReveal delay={0.3}>
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                            >
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="flex-1 bg-forest-light border border-copper/20 rounded-sm px-5 py-3.5 text-parchment-light placeholder:text-sage/50 focus:outline-none focus:ring-2 focus:ring-copper/50 transition-all"
                                    placeholder="your@email.com"
                                />
                                <MagneticButton>
                                    <button
                                        type="submit"
                                        className="bg-copper text-forest px-8 py-3.5 rounded-sm font-heading tracking-wider uppercase text-sm hover:bg-copper-light transition-colors whitespace-nowrap"
                                    >
                                        Subscribe
                                    </button>
                                </MagneticButton>
                            </form>
                        </CinematicReveal>
                    ) : (
                        <CinematicReveal>
                            <div className="velvet-card p-6 inline-block">
                                <p className="text-copper text-lg font-heading">
                                    Welcome to the Circle.
                                </p>
                                <p className="text-sage text-sm mt-1">
                                    Your first edition will arrive shortly.
                                </p>
                            </div>
                        </CinematicReveal>
                    )}

                    <CinematicReveal delay={0.4}>
                        <p className="text-sage/50 text-xs mt-6">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </CinematicReveal>
                </div>
            </div>
        </section>
    );
}
