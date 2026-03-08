"use client";

import Image from "next/image";
import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { StaggeredBlurText } from "@/components/animations/StaggeredBlurText";
import { MagneticButton } from "@/components/animations/MagneticButton";

const LOCATIONS = [
    {
        city: "Sydney",
        role: "Global Headquarters",
        address: "Level 32, 1 Macquarie Place\nSydney NSW 2000\nAustralia",
        phone: "+61 2 8000 7000",
        email: "sydney@continentalheritage.com"
    }
];

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-forest pt-32 pb-0">

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
                        <div className="bg-forest-light border border-copper/10 p-8 md:p-12 rounded-[20px] shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-copper/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                            <h3 className="text-2xl text-parchment-light mb-8">Secure Communication</h3>

                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs tracking-widest uppercase text-copper font-medium">Full Name / Entity</label>
                                        <input
                                            type="text"
                                            className="w-full bg-forest border-b border-copper/30 focus:border-copper text-parchment-light py-3 px-0 outline-none transition-colors"
                                            placeholder="Principal or Representative Name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs tracking-widest uppercase text-copper font-medium">Role</label>
                                        <select className="w-full bg-forest border-b border-copper/30 focus:border-copper text-parchment-light py-3 px-0 outline-none transition-colors appearance-none cursor-pointer">
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
                                        <label className="text-xs tracking-widest uppercase text-copper font-medium">Email Address</label>
                                        <input
                                            type="email"
                                            className="w-full bg-forest border-b border-copper/30 focus:border-copper text-parchment-light py-3 px-0 outline-none transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs tracking-widest uppercase text-copper font-medium">Contact Number</label>
                                        <input
                                            type="tel"
                                            className="w-full bg-forest border-b border-copper/30 focus:border-copper text-parchment-light py-3 px-0 outline-none transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs tracking-widest uppercase text-copper font-medium">Nature of Inquiry</label>
                                    <textarea
                                        rows={4}
                                        className="w-full bg-forest border-b border-copper/30 focus:border-copper text-parchment-light py-3 px-0 outline-none transition-colors resize-none"
                                        placeholder="Please omit delicate financial figures at this stage. A secure channel will be established for further correspondence."
                                    ></textarea>
                                </div>

                                <div className="pt-4">
                                    <MagneticButton className="btn btn-primary w-full md:w-auto">
                                        Submit Secure Inquiry
                                    </MagneticButton>
                                </div>

                                <p className="text-xs text-sage/70 mt-6 leading-relaxed">
                                    Information transmitted via this portal is encrypted. Submissions are reviewed exclusively by our Managing Partners. We strictly adhere to Australian data privacy standards universally across all jurisdictions.
                                </p>
                            </form>
                        </div>
                    </CinematicReveal>

                    {/* Locations */}
                    <div className="order-1 lg:order-2">
                        <CinematicReveal delay={0.2}>
                            <div className="relative h-[300px] md:h-[400px] mb-12 rounded-[20px] overflow-hidden border border-copper/20 blur-load">
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
                                <div key={loc.city} className="flex gap-6 items-start group">
                                    <div className="w-12 h-12 rounded-full border border-copper/30 flex items-center justify-center shrink-0 group-hover:bg-copper/10 transition-colors">
                                        <span className="text-copper font-heading text-lg">{idx + 1}</span>
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
