"use client";

import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { Lock, ShieldCheck, Eye, Server, FileCheck2 } from "lucide-react";

const FEATURES = [
    {
        icon: ShieldCheck,
        title: "Regulatory Compliance",
        description:
            "Fully licenced and regulated under the Australian Financial Services Licence (AFSL), adhering to the highest standards of fiduciary duty.",
    },
    {
        icon: Lock,
        title: "Client Data Encryption",
        description:
            "All sensitive data is encrypted end-to-end using military-grade AES-256 encryption, both in transit and at rest.",
    },
    {
        icon: Eye,
        title: "Privacy by Design",
        description:
            "Swiss-standard confidentiality protocols ensure your financial affairs remain invisible to unauthorised parties.",
    },
    {
        icon: Server,
        title: "Segregated Custody",
        description:
            "Client assets are held in segregated accounts with tier-one global custodians, fully ring-fenced from our operating funds.",
    },
    {
        icon: FileCheck2,
        title: "Independent Audit",
        description:
            "Annual third-party audits by a Big Four firm provide independent verification of our compliance and control framework.",
    },
];

export function SecuritySection() {
    return (
        <section className="section-padding relative overflow-hidden bg-forest-dark">
            {/* Background */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: "url('/images/textures/paper-grain.webp')",
                    backgroundSize: "400px",
                }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(176,125,75,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(176,125,75,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            <div className="absolute inset-0 bg-forest-dark/95" />

            <div className="container relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <CinematicReveal>
                        <span className="text-copper tracking-widest uppercase text-sm font-medium mb-4 block">
                            Security & Trust
                        </span>
                    </CinematicReveal>
                    <CinematicReveal delay={0.1}>
                        <h2 className="mb-4">Your Capital, Fortified.</h2>
                    </CinematicReveal>
                    <CinematicReveal delay={0.2}>
                        <p className="text-sage max-w-xl mx-auto">
                            We apply institutional-grade security to every facet of your
                            relationship with Continental Heritage.
                        </p>
                    </CinematicReveal>
                    <CinematicReveal delay={0.3}>
                        <div className="copper-divider-ornate max-w-sm mx-auto mt-6">
                            <span className="dot" />
                        </div>
                    </CinematicReveal>
                </div>

        {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {FEATURES.map((feature, i) => (
                        <CinematicReveal key={i} delay={0.1 * i}>
                            <div className="heritage-card p-6 flex gap-5 h-full group pointer-events-auto">
                                <div className="relative shrink-0 w-12 h-12 rounded-full bg-copper/5 flex items-center justify-center border border-copper/30 group-hover:border-copper transition-colors duration-500">
                                    <div className="absolute inset-0 rounded-full border border-copper opacity-0 scale-150 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700" />
                                    <feature.icon className="w-5 h-5 text-copper" />
                                </div>
                                <div>
                                    <h3 className="text-lg text-parchment-light mb-2 font-heading">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sage text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </CinematicReveal>
                    ))}
                </div>

                {/* Micro-CTA */}
                <CinematicReveal delay={0.6} className="text-center mt-12">
                    <a
                        href="/the-firm"
                        className="inline-flex items-center gap-2 text-sm text-copper/70 hover:text-copper transition-colors tracking-wider group"
                    >
                        Explore Our Governance Framework
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>
                </CinematicReveal>

            </div>
        </section>
    );
}
