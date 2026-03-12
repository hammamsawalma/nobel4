"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle, Sparkles } from "lucide-react";
import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { MagneticButton } from "@/components/animations/MagneticButton";

export function NewsletterSection() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubscribed(true);
        }, 1200);
    };

    return (
        <section className="relative overflow-hidden py-20 lg:py-28">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/sections/newsletter-image.png"
                    alt="Continental Heritage Newsletter"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-forest/80" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-forest-dark)_100%)] opacity-90 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-transparent to-forest-dark opacity-80 pointer-events-none" />
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

                    <AnimatePresence mode="wait">
                        {!subscribed ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.4 }}
                            >
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
                                            className="flex-1 bg-forest-light/80 backdrop-blur-md border border-copper/30 rounded-sm px-5 py-3.5 text-parchment-light placeholder:text-sage/50 focus:outline-none focus:ring-1 focus:ring-copper/50 focus:border-copper/60 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]"
                                            placeholder="your@email.com"
                                        />
                                        <MagneticButton>
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="bg-copper text-forest border border-copper px-8 py-3.5 rounded-sm font-heading tracking-wider uppercase text-sm hover:bg-copper-light hover:border-copper-light hover:shadow-[0_0_20px_rgba(176,125,75,0.4)] transition-all whitespace-nowrap disabled:opacity-70 disabled:cursor-wait min-w-[130px] flex items-center justify-center gap-2"
                                            >
                                                {isSubmitting ? (
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                                                        className="w-4 h-4 border-2 border-forest border-t-transparent rounded-full"
                                                    />
                                                ) : (
                                                    "Subscribe"
                                                )}
                                            </button>
                                        </MagneticButton>
                                    </form>
                                </CinematicReveal>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className="velvet-card p-8 inline-block relative overflow-hidden max-w-sm mx-auto">
                                    {/* shimmer effect */}
                                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper/60 to-transparent" />

                                    {/* animated check */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.15, type: "spring", stiffness: 250, damping: 18 }}
                                        className="relative mx-auto mb-5 w-14 h-14 rounded-full bg-copper/10 border border-copper/30 flex items-center justify-center"
                                    >
                                        <CheckCircle className="w-7 h-7 text-copper" strokeWidth={1.5} />
                                        <motion.div
                                            initial={{ scale: 0.8, opacity: 0.5 }}
                                            animate={{ scale: 1.8, opacity: 0 }}
                                            transition={{ delay: 0.3, duration: 1.2 }}
                                            className="absolute inset-0 rounded-full border border-copper/40"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3, duration: 0.5 }}
                                    >
                                        <p className="text-copper text-xl font-heading mb-2">
                                            Welcome to the Circle.
                                        </p>
                                        <p className="text-sage text-sm leading-relaxed">
                                            Your first edition arrives in{" "}
                                            <span className="text-parchment-light">Q2 2025</span>.
                                            We look forward to sharing our perspective with you.
                                        </p>

                                        <div className="mt-5 flex items-center justify-center gap-2 text-xs text-sage/40 tracking-widest uppercase">
                                            <Sparkles className="w-3 h-3 text-copper/40" />
                                            <span>Select Readership</span>
                                            <Sparkles className="w-3 h-3 text-copper/40" />
                                        </div>
                                    </motion.div>

                                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-copper/30 to-transparent" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

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
