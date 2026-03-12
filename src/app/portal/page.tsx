"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Eye, EyeOff, Lock, ArrowRight } from "lucide-react";
import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { GlowOrb } from "@/components/animations/GlowOrb";

export default function ClientPortalPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        // Simulate authentication delay
        setTimeout(() => {
            setIsLoading(false);
            setError("This portal is currently in private preview. Please contact your relationship manager for access credentials.");
        }, 1500);
    };

    return (
        <main className="min-h-screen bg-forest relative overflow-hidden flex items-center justify-center px-4 py-32">
            {/* Ambient Background Effects */}
            <div className="absolute inset-0 bg-[url('/images/textures/paper-grain.webp')] bg-[length:400px] opacity-[0.03] pointer-events-none mix-blend-overlay" />
            <GlowOrb color="copper" size={500} className="absolute -top-40 -right-40 opacity-20" />
            <GlowOrb color="forest" size={400} className="absolute -bottom-40 -left-40 opacity-15" />

            {/* Decorative vertical lines */}
            <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-copper/10 to-transparent pointer-events-none" />
            <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-copper/10 to-transparent pointer-events-none" />

            <div className="relative z-10 w-full max-w-md">
                {/* Logo & Branding */}
                <CinematicReveal>
                    <div className="text-center mb-10">
                        <Link href="/" className="inline-block group mb-6">
                            <div className="relative w-16 h-16 mx-auto mb-4 group-hover:drop-shadow-[0_0_20px_rgba(176,125,75,0.5)] transition-all duration-500">
                                <Image
                                    src="/images/logo/main.webp"
                                    alt="Continental Heritage"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <h1 className="font-heading text-3xl md:text-4xl text-parchment-light tracking-wide mb-2">
                            Client Gateway
                        </h1>
                        <p className="text-sage text-sm tracking-wider uppercase">
                            Secure Private Access
                        </p>
                    </div>
                </CinematicReveal>

                {/* Login Card */}
                <CinematicReveal delay={0.2}>
                    <div className="heritage-card p-8 md:p-10 relative overflow-hidden">
                        {/* Card inner glow */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-copper/50 to-transparent" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-copper/5 blur-[40px] -translate-y-1/2 pointer-events-none" />

                        {/* Security badge */}
                        <div className="flex items-center justify-center gap-2 mb-8">
                            <Shield className="w-4 h-4 text-copper" />
                            <span className="text-xs tracking-[0.2em] uppercase text-copper/80">256-Bit Encrypted</span>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Email Field */}
                            <div className="group">
                                <label htmlFor="portal-email" className="text-xs tracking-widest uppercase text-sage group-focus-within:text-copper transition-colors duration-300 mb-2 block">
                                    Client Identifier
                                </label>
                                <div className="relative">
                                    <input
                                        id="portal-email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="your@email.com"
                                        required
                                        className="w-full bg-forest/50 border border-copper/20 focus:border-copper/60 rounded-sm text-parchment-light py-3.5 px-4 outline-none transition-all duration-300 placeholder:text-sage/40 focus:shadow-[0_0_15px_rgba(176,125,75,0.1)]"
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div className="group">
                                <label htmlFor="portal-password" className="text-xs tracking-widest uppercase text-sage group-focus-within:text-copper transition-colors duration-300 mb-2 block">
                                    Passphrase
                                </label>
                                <div className="relative">
                                    <input
                                        id="portal-password"
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••••••"
                                        required
                                        className="w-full bg-forest/50 border border-copper/20 focus:border-copper/60 rounded-sm text-parchment-light py-3.5 px-4 pr-12 outline-none transition-all duration-300 placeholder:text-sage/40 focus:shadow-[0_0_15px_rgba(176,125,75,0.1)]"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-sage/50 hover:text-copper transition-colors"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            {/* Remember & Forgot */}
                            <div className="flex items-center justify-between text-xs">
                                <label className="flex items-center gap-2 text-sage cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 rounded-sm border-copper/30 bg-forest accent-copper"
                                    />
                                    <span className="group-hover:text-parchment-light transition-colors">Remember Device</span>
                                </label>
                                <button type="button" className="text-copper/70 hover:text-copper transition-colors tracking-wider uppercase">
                                    Reset Access
                                </button>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-copper/10 border border-copper/20 rounded-sm p-4 text-sm text-parchment-light/80 leading-relaxed"
                                >
                                    <div className="flex gap-3 items-start">
                                        <Lock className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                                        <span>{error}</span>
                                    </div>
                                </motion.div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="btn btn-glow w-full py-4 text-sm tracking-[0.15em] uppercase flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-wait"
                            >
                                {isLoading ? (
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                        className="w-5 h-5 border-2 border-forest border-t-transparent rounded-full"
                                    />
                                ) : (
                                    <>
                                        <span>Access Portfolio</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Bottom accent */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-copper/30 to-transparent" />
                    </div>
                </CinematicReveal>

                {/* Footer legal note */}
                <CinematicReveal delay={0.4}>
                    <div className="text-center mt-8 space-y-4">
                        <p className="text-sage/60 text-xs leading-relaxed max-w-xs mx-auto">
                            Access restricted to verified clients of Continental Heritage Private Wealth. Unauthorized access attempts are monitored and logged.
                        </p>
                        <div className="flex items-center justify-center gap-4 text-xs text-sage/40">
                            <Link href="/privacy" className="hover:text-copper transition-colors">Privacy</Link>
                            <span>·</span>
                            <Link href="/legal/terms" className="hover:text-copper transition-colors">Terms</Link>
                            <span>·</span>
                            <Link href="/contact" className="hover:text-copper transition-colors">Support</Link>
                        </div>
                    </div>
                </CinematicReveal>
            </div>
        </main>
    );
}
