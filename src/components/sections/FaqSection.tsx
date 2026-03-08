"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
    {
        question: "What is the minimum portfolio size to engage Continental Heritage?",
        answer:
            "We typically engage with families whose investable assets exceed $5 million. This threshold ensures we can deploy our full suite of institutional-grade strategies effectively. For extraordinary circumstances, we may consider lower thresholds on a case-by-case basis.",
    },
    {
        question: "How does Continental Heritage differ from a traditional wealth manager?",
        answer:
            "We operate as a private partnership, not a publicly traded institution. This means our advisors are not compensated by commission or product sales. Our interests are structurally aligned with yours — we profit only when your capital grows.",
    },
    {
        question: "What level of reporting and transparency can I expect?",
        answer:
            "You will receive quarterly performance reports, annual tax summaries, and have 24/7 secure portal access to your consolidated positions. Your dedicated partner is available for ad-hoc reviews at any time.",
    },
    {
        question: "Can you manage assets held across multiple jurisdictions?",
        answer:
            "Absolutely. Cross-border structuring is a core competency. We coordinate with custodians, tax advisors, and legal counsel across all major financial centres to optimise your global position.",
    },
    {
        question: "How is my data and personal information protected?",
        answer:
            "We employ AES-256 encryption, segregated data environments, and Swiss-standard confidentiality protocols. All staff undergo annual security training and background verification. We are ISO 27001 certified.",
    },
    {
        question: "What happens to my portfolio if a principal advisor departs?",
        answer:
            "Our partnership model ensures continuity. Every client relationship is supported by a team of at least three senior professionals. Succession plans are documented and reviewed annually.",
    },
];

export function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="section-padding relative overflow-hidden">
            <div className="container">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <CinematicReveal>
                            <span className="text-copper tracking-widest uppercase text-sm font-medium mb-4 block">
                                Common Enquiries
                            </span>
                        </CinematicReveal>
                        <CinematicReveal delay={0.1}>
                            <h2 className="mb-6">Frequently Asked Questions</h2>
                        </CinematicReveal>
                        <CinematicReveal delay={0.2}>
                            <div className="copper-divider-ornate max-w-sm mx-auto">
                                <span className="dot" />
                            </div>
                        </CinematicReveal>
                    </div>

                    {/* Accordion */}
                    <div className="space-y-4">
                        {FAQ_ITEMS.map((item, i) => {
                            const isOpen = openIndex === i;
                            return (
                                <CinematicReveal key={i} delay={0.05 * i}>
                                    <div className="velvet-card overflow-hidden">
                                        <button
                                            onClick={() => setOpenIndex(isOpen ? null : i)}
                                            className="w-full flex items-center justify-between p-6 text-left cursor-pointer group"
                                            aria-expanded={isOpen}
                                        >
                                            <span className="text-parchment-light font-heading text-lg pr-4 group-hover:text-copper transition-colors">
                                                {item.question}
                                            </span>
                                            <motion.span
                                                animate={{ rotate: isOpen ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="shrink-0"
                                            >
                                                <ChevronDown className="w-5 h-5 text-copper" />
                                            </motion.span>
                                        </button>

                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                >
                                                    <div className="px-6 pb-6 border-t border-copper/10 pt-4">
                                                        <p className="text-sage leading-relaxed">
                                                            {item.answer}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </CinematicReveal>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
