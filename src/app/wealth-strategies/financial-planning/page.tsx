import { Metadata } from "next";
import Image from "next/image";
import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { StaggeredBlurText } from "@/components/animations/StaggeredBlurText";
import { CopperGlow } from "@/components/animations/CopperGlow";
import { CTASection } from "@/components/sections/CTASection";
import { TreePine, Compass, Users, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
    title: "Financial Planning | Continental Heritage",
    description: "Holistic financial planning that aligns your family's values, ambitions, and legacy across generations.",
};

const PILLARS = [
    { icon: Compass, title: "Holistic Goal Mapping", description: "A structured discovery of your family's short, medium, and long-term financial objectives across all life stages." },
    { icon: TreePine, title: "Generational Modelling", description: "Multi-decade cash-flow simulations that account for education, philanthropy, business succession, and lifestyle needs." },
    { icon: Users, title: "Family Governance", description: "Establishing constitutions, family councils, and decision frameworks that ensure unity as wealth transitions between generations." },
    { icon: HeartHandshake, title: "Values-Based Investing", description: "Integrating ESG and impact mandates where desired, without compromising on risk-adjusted returns." },
];

const PROCESS = [
    { step: "01", title: "Vision", description: "Understanding your family's aspirations, values, and the legacy you wish to create." },
    { step: "02", title: "Blueprint", description: "Creating a comprehensive financial plan with multiple scenarios, stress-tested for resilience." },
    { step: "03", title: "Execution", description: "Implementing the plan through coordinated action across investment, tax, legal, and insurance domains." },
    { step: "04", title: "Evolution", description: "Annual reviews and adaptive adjustments as your family's circumstances and aspirations evolve." },
];

export default function FinancialPlanning() {
    return (
        <main className="min-h-screen bg-forest">
            <section className="relative h-[50vh] overflow-hidden">
                <Image src="/images/services/planning.webp" alt="Financial Planning" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/60 to-forest/30" />
                <div className="absolute inset-0 flex items-end pb-16 md:pb-20">
                    <div className="container">
                        <CinematicReveal><span className="text-copper tracking-widest uppercase text-sm font-medium mb-4 block">Wealth Strategy</span></CinematicReveal>
                        <StaggeredBlurText text="Financial Planning" className="text-4xl md:text-6xl lg:text-7xl mb-4 leading-[1.1]" />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-forest rounded-t-[40px]" />
            </section>

            <section className="section-padding">
                <div className="container max-w-4xl">
                    <CinematicReveal>
                        <p className="text-xl md:text-2xl text-sage leading-relaxed font-accent italic">
                            &ldquo;True financial planning is not about spreadsheets. It is about understanding what wealth means to your family and engineering a path to sustain that meaning across generations.&rdquo;
                        </p>
                    </CinematicReveal>
                    <CinematicReveal delay={0.2}><div className="copper-divider-ornate max-w-sm mt-10"><span className="dot" /></div></CinematicReveal>
                </div>
            </section>

            <section className="section-padding bg-forest-dark rounded-t-[40px] border-t border-copper/10">
                <div className="container">
                    <CinematicReveal><h2 className="text-center mb-16">Strategic Pillars</h2></CinematicReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {PILLARS.map((p, i) => (
                            <CinematicReveal key={i} delay={i * 0.1}>
                                <CopperGlow className="h-full"><div className="velvet-card p-6 h-full flex gap-5">
                                    <div className="shrink-0 w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center border border-copper/20"><p.icon className="w-5 h-5 text-copper" /></div>
                                    <div><h3 className="text-xl text-parchment-light mb-2 font-heading">{p.title}</h3><p className="text-sage text-sm leading-relaxed">{p.description}</p></div>
                                </div></CopperGlow>
                            </CinematicReveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container max-w-4xl">
                    <CinematicReveal><h2 className="text-center mb-16">Our Process</h2></CinematicReveal>
                    <div className="space-y-8">
                        {PROCESS.map((p, i) => (
                            <CinematicReveal key={i} delay={i * 0.1}>
                                <div className="flex gap-6 md:gap-10 group">
                                    <span className="text-4xl md:text-5xl font-heading text-copper/30 group-hover:text-copper transition-colors shrink-0">{p.step}</span>
                                    <div className="border-l border-copper/20 pl-6 md:pl-10 pb-8">
                                        <h3 className="text-xl text-parchment-light mb-2">{p.title}</h3>
                                        <p className="text-sage leading-relaxed">{p.description}</p>
                                    </div>
                                </div>
                            </CinematicReveal>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}
