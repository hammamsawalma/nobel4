"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertTriangle, Loader2 } from "lucide-react";
import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { StaggeredBlurText } from "@/components/animations/StaggeredBlurText";

const LOCATIONS = [
    {
        city: "Sydney",
        role: "Global Headquarters",
        address: "Level 32, 1 Macquarie Place\nSydney NSW 2000\nAustralia",
        phone: "+61 2 8000 7000",
        email: "sydney@continentalheritage.com"
    }
];

function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [name, setName] = useState("");
    const [role, setRole] = useState("Principal / Family Member");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [inquiry, setInquiry] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        // Simulate secure submission delay
        setTimeout(() => {
            setStatus("success");
        }, 1800);
    };

    return (
        <div className="bg-forest-light border border-copper/10 p-8 md:p-12 rounded-[20px] shadow-2xl relative overflow-hidden min-h-[520px] flex flex-col">
            <div className="absolute top-0 right-0 w-64 h-64 bg-copper/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <AnimatePresence mode="wait">

                {/* FORM STATE */}
                {(status === "idle" || status === "loading" || status === "error") && (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col flex-1"
                    >
                        <h3 className="text-2xl text-parchment-light mb-8 relative z-10">Secure Communication</h3>

                        {/* Error Banner */}
                        {status === "error" && (
                            <motion.div
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-start gap-3 bg-amber-900/20 border border-amber-600/30 rounded-lg px-4 py-3 mb-6 text-sm text-amber-300"
                            >
                                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
                                <span>There was an issue transmitting your inquiry. Please try again or contact us directly by phone.</span>
                            </motion.div>
                        )}

                        <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="contact-name" className="text-xs tracking-widest uppercase text-copper font-medium">Full Name / Entity</label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full bg-forest border-b border-copper/30 focus:border-copper text-parchment-light py-3 px-0 outline-none transition-colors"
                                        placeholder="Principal or Representative Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="contact-role" className="text-xs tracking-widest uppercase text-copper font-medium">Role</label>
                                    <select
                                        id="contact-role"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        className="w-full bg-forest border-b border-copper/30 focus:border-copper text-parchment-light py-3 px-0 outline-none transition-colors appearance-none cursor-pointer"
                                    >
                                        <option>Principal / Family Member</option>
                                        <option>Family Office Executive</option>
                                        <option>Legal Counsel</option>
                                        <option>Tax Advisor</option>
                                        <option>Other Representative</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="contact-email" className="text-xs tracking-widest uppercase text-copper font-medium">Email Address</label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-forest border-b border-copper/30 focus:border-copper text-parchment-light py-3 px-0 outline-none transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="contact-phone" className="text-xs tracking-widest uppercase text-copper font-medium">Contact Number</label>
                                    <input
                                        id="contact-phone"
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full bg-forest border-b border-copper/30 focus:border-copper text-parchment-light py-3 px-0 outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="contact-inquiry" className="text-xs tracking-widest uppercase text-copper font-medium">Nature of Inquiry</label>
                                <textarea
                                    id="contact-inquiry"
                                    rows={4}
                                    value={inquiry}
                                    onChange={(e) => setInquiry(e.target.value)}
                                    className="w-full bg-forest border-b border-copper/30 focus:border-copper text-parchment-light py-3 px-0 outline-none transition-colors resize-none"
                                    placeholder="Please omit delicate financial figures at this stage. A secure channel will be established for further correspondence."
                                />
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="btn btn-primary w-full md:w-auto disabled:opacity-70 disabled:cursor-wait flex items-center gap-3 justify-center min-w-[220px]"
                                >
                                    {status === "loading" ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            <span>Transmitting Securely...</span>
                                        </>
                                    ) : (
                                        <span>Submit Secure Inquiry</span>
                                    )}
                                </button>
                            </div>

                            <p className="text-xs text-sage/70 mt-6 leading-relaxed">
                                Information transmitted via this portal is encrypted. Submissions are reviewed exclusively by our Managing Partners. We strictly adhere to Australian data privacy standards universally across all jurisdictions.
                            </p>
                        </form>
                    </motion.div>
                )}

                {/* SUCCESS STATE */}
                {status === "success" && (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center justify-center flex-1 text-center py-8 relative z-10"
                    >
                        {/* Animated checkmark ring */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                            className="relative mb-8"
                        >
                            <div className="w-24 h-24 rounded-full bg-copper/10 border border-copper/30 flex items-center justify-center">
                                <CheckCircle className="w-12 h-12 text-copper" strokeWidth={1.5} />
                            </div>
                            {/* Pulse ring */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0.6 }}
                                animate={{ scale: 1.6, opacity: 0 }}
                                transition={{ delay: 0.5, duration: 1.4, ease: "easeOut" }}
                                className="absolute inset-0 rounded-full border border-copper/50"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <div className="w-8 h-[1px] bg-copper/50 mx-auto mb-6" />
                            <h3 className="font-heading text-3xl text-parchment-light mb-4">
                                Inquiry Received
                            </h3>
                            <p className="text-sage max-w-sm mx-auto mb-6 leading-relaxed">
                                Your communication has been transmitted securely and is now with our Managing Partners. A member of our team will be in touch within{" "}
                                <span className="text-copper">one business day</span>.
                            </p>
                            <div className="w-8 h-[1px] bg-copper/50 mx-auto mb-8" />
                            <p className="text-xs text-sage/40 tracking-widest uppercase">
                                Reference: CH-{Date.now().toString(36).toUpperCase().slice(-6)}
                            </p>
                        </motion.div>
                    </motion.div>
                )}

            </AnimatePresence>
        </div>
    );
}

export default function ContactPage() {
    return (
        <main id="main-content" role="main" className="min-h-screen bg-forest pt-32 pb-0">

            {/* Page Hero */}
            <section className="container mb-24 lg:mb-32">
                <div className="max-w-4xl">
                    <CinematicReveal>
                        <span className="text-copper tracking-widest uppercase text-sm font-medium mb-6 block">Direct Inquiries</span>
                    </CinematicReveal>

                    <StaggeredBlurText
                        text="Commence the Dialogue."
                        className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-[1.1]"
                    />

                    <CinematicReveal delay={0.6}>
                        <p className="text-xl text-sage max-w-2xl leading-relaxed">
                            We welcome preliminary, strictly confidential discussions with families, their existing advisors, or representatives seeking institutional-grade preservation strategies.
                        </p>
                    </CinematicReveal>
                </div>
            </section>

            <section className="container mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Inquiry Form */}
                    <CinematicReveal delay={0.4} direction="up" className="order-2 lg:order-1">
                        <ContactForm />
                    </CinematicReveal>

                    {/* Location Info */}
                    <div className="order-1 lg:order-2">
                        <CinematicReveal delay={0.2}>
                            <div className="relative h-[300px] md:h-[400px] mb-12 rounded-[20px] overflow-hidden border border-copper/20">
                                <Image
                                    src="/images/sections/contact-hero.png"
                                    alt="Continental Heritage Global Reach"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-forest/40 mix-blend-multiply" />
                            </div>
                        </CinematicReveal>

                        <div className="space-y-12">
                            {LOCATIONS.map((loc, idx) => (
                                <div key={loc.city} className="flex gap-6 items-start group p-6 -mx-6 rounded-[20px] hover:bg-forest-light transition-colors duration-500 cursor-pointer">
                                    <div className="w-12 h-12 rounded-full border border-copper/30 flex items-center justify-center shrink-0 group-hover:bg-copper/20 group-hover:border-copper group-hover:shadow-[0_0_15px_rgba(176,125,75,0.3)] transition-all duration-500">
                                        <span className="text-copper font-heading text-lg group-hover:scale-110 transition-transform">{idx + 1}</span>
                                    </div>
                                    <div>
                                        <div className="flex items-baseline gap-3 mb-2">
                                            <h4 className="text-2xl text-parchment-light font-heading">{loc.city}</h4>
                                            <span className="text-xs tracking-widest uppercase text-copper">{loc.role}</span>
                                        </div>
                                        <p className="text-sage mb-2 whitespace-pre-line">{loc.address}</p>
                                        <div className="space-y-1">
                                            <p className="text-sage"><a href={`tel:${loc.phone.replace(/\s+/g, '')}`} className="hover:text-copper transition-colors">{loc.phone}</a></p>
                                            <p className="text-sage"><a href={`mailto:${loc.email}`} className="hover:text-copper transition-colors">{loc.email}</a></p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

        </main>
    );
}
