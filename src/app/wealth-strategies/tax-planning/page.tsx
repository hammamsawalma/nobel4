import { Metadata } from "next";
import Image from "next/image";
import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { StaggeredBlurText } from "@/components/animations/StaggeredBlurText";
import { CopperGlow } from "@/components/animations/CopperGlow";
import { CTASection } from "@/components/sections/CTASection";
import { Calculator, Globe2, FileText, Briefcase } from "lucide-react";

export const metadata: Metadata = {
    title: "Tax Planning | Continental Heritage",
    description: "Navigating complex global jurisdictions to optimise the tax efficiency of international assets and corporate holdings.",
};

const PILLARS = [
    { icon: Calculator, title: "Multi-Jurisdictional Optimisation", description: "Strategic structuring across tax-efficient jurisdictions, leveraging treaty networks and legitimate planning opportunities." },
    { icon: Globe2, title: "Cross-Border Structuring", description: "Coordinating tax positions across Australia, UK, Singapore, and other key jurisdictions your family operates within." },
    { icon: FileText, title: "Trust & Estate Tax Planning", description: "Minimising inheritance tax exposure through carefully timed gifting strategies, discretionary trusts, and exempt transfers." },
    { icon: Briefcase, title: "Corporate Tax Efficiency", description: "Optimising the tax position of family-owned businesses through transfer pricing, R&D incentives, and holding company structures." },
];

const PROCESS = [
    { step: "01", title: "Tax Health Check", description: "Comprehensive review of your current global tax position, identifying inefficiencies and immediate planning opportunities." },
    { step: "02", title: "Strategy Design", description: "Development of a multi-year tax strategy aligned with your broader wealth objectives and risk tolerance." },
    { step: "03", title: "Coordinated Execution", description: "Implementation in collaboration with specialist tax counsel and accountants across each relevant jurisdiction." },
    { step: "04", title: "Annual Compliance", description: "Ongoing management of reporting obligations, lodgements, and proactive adaptation to legislative changes." },
];

export default function TaxPlanning() {
    return (
        <main className="min-h-screen bg-forest">
            <section className="relative h-[50vh] overflow-hidden">
                <Image src="/images/services/tax.png" alt="Tax Planning" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/60 to-forest/30" />
                <div className="absolute inset-0 flex items-end pb-16 md:pb-20">
                    <div className="container">
                        <CinematicReveal><span className="text-copper tracking-widest uppercase text-sm font-medium mb-4 block">Wealth Strategy</span></CinematicReveal>
                        <StaggeredBlurText text="Tax Planning" className="text-4xl md:text-6xl lg:text-7xl mb-4 leading-[1.1]" />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-forest rounded-t-[40px]" />
            </section>

            <section className="section-padding"><div className="container max-w-4xl">
                <CinematicReveal><p className="text-xl md:text-2xl text-sage leading-relaxed font-accent italic">&ldquo;Tax planning is not about avoidance — it is about intelligent structuring that ensures your family retains the maximum share of its own wealth, legitimately and sustainably.&rdquo;</p></CinematicReveal>
                <CinematicReveal delay={0.2}><div className="copper-divider-ornate max-w-sm mt-10"><span className="dot" /></div></CinematicReveal>
            </div></section>

            <section className="section-padding bg-forest-dark rounded-t-[40px] border-t border-copper/10"><div className="container">
                <CinematicReveal><h2 className="text-center mb-16">Strategic Pillars</h2></CinematicReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {PILLARS.map((p, i) => (<CinematicReveal key={i} delay={i * 0.1}><CopperGlow className="h-full"><div className="velvet-card p-6 h-full flex gap-5"><div className="shrink-0 w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center border border-copper/20"><p.icon className="w-5 h-5 text-copper" /></div><div><h3 className="text-xl text-parchment-light mb-2 font-heading">{p.title}</h3><p className="text-sage text-sm leading-relaxed">{p.description}</p></div></div></CopperGlow></CinematicReveal>))}
                </div>
            </div></section>

            <section className="section-padding"><div className="container max-w-4xl">
                <CinematicReveal><h2 className="text-center mb-16">Our Process</h2></CinematicReveal>
                <div className="space-y-8">
                    {PROCESS.map((p, i) => (<CinematicReveal key={i} delay={i * 0.1}><div className="flex gap-6 md:gap-10 group"><span className="text-4xl md:text-5xl font-heading text-copper/30 group-hover:text-copper transition-colors shrink-0">{p.step}</span><div className="border-l border-copper/20 pl-6 md:pl-10 pb-8"><h3 className="text-xl text-parchment-light mb-2">{p.title}</h3><p className="text-sage leading-relaxed">{p.description}</p></div></div></CinematicReveal>))}
                </div>
            </div></section>

            <CTASection />
        </main>
    );
}
