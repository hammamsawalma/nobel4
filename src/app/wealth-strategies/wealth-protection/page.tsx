import { Metadata } from "next";
import Image from "next/image";
import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { StaggeredBlurText } from "@/components/animations/StaggeredBlurText";
import { CopperGlow } from "@/components/animations/CopperGlow";
import { CTASection } from "@/components/sections/CTASection";
import { Shield, Lock, Scale, Landmark } from "lucide-react";

export const metadata: Metadata = {
    title: "Wealth Protection | Continental Heritage",
    description: "Implementing robust legal and structural firewalls to shelter family capital from unforeseen liabilities.",
};

const PILLARS = [
    { icon: Shield, title: "Asset Structuring", description: "Multi-jurisdictional trusts, family investment companies, and holding structures designed to segregate and protect capital." },
    { icon: Lock, title: "Liability Isolation", description: "Ring-fencing personal and business assets through corporate restructuring and limited liability frameworks." },
    { icon: Scale, title: "Litigation Defence", description: "Pre-emptive legal structuring that creates robust barriers against creditor claims and contentious disputes." },
    { icon: Landmark, title: "Political Risk Mitigation", description: "Diversified jurisdictional footprints that insulate wealth from sovereign instability and regulatory upheaval." },
];

const PROCESS = [
    { step: "01", title: "Vulnerability Audit", description: "A forensic review of your current exposure to legal, political, and structural risks across all asset classes." },
    { step: "02", title: "Fortress Design", description: "Architecting a multi-layered protection framework tailored to your family's unique risk profile." },
    { step: "03", title: "Legal Implementation", description: "Coordinated execution with our network of specialist legal counsel across relevant jurisdictions." },
    { step: "04", title: "Continuous Vigilance", description: "Ongoing monitoring of regulatory changes and emerging threats with proactive structural adjustments." },
];

export default function WealthProtection() {
    return (
        <main className="min-h-screen bg-forest">
            <section className="relative h-[50vh] overflow-hidden">
                <Image src="/images/services/protection.webp" alt="Wealth Protection" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/60 to-forest/30" />
                <div className="absolute inset-0 flex items-end pb-16 md:pb-20">
                    <div className="container">
                        <CinematicReveal><span className="text-copper tracking-widest uppercase text-sm font-medium mb-4 block">Wealth Strategy</span></CinematicReveal>
                        <StaggeredBlurText text="Wealth Protection" className="text-4xl md:text-6xl lg:text-7xl mb-4 leading-[1.1]" />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-forest rounded-t-[40px]" />
            </section>

            <section className="section-padding"><div className="container max-w-4xl">
                <CinematicReveal><p className="text-xl md:text-2xl text-sage leading-relaxed font-accent italic">&ldquo;The first rule of generational wealth is not to grow it — it is to protect it. Growth follows naturally when capital is properly fortified.&rdquo;</p></CinematicReveal>
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
