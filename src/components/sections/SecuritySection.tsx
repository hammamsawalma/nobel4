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
                className="absolute inset-0 bg-cover bg-center opacity-8"
                style={{ backgroundImage: "url('/images/sections/security_bg.png')" }}
            />
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
                            <div className="velvet-card p-6 flex gap-5 h-full group">
                                <div className="shrink-0 w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center border border-copper/20 group-hover:border-copper/50 transition-colors">
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
            </div>
        </section>
    );
}
