import { Metadata } from "next";
import Image from "next/image";
import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { StaggeredBlurText } from "@/components/animations/StaggeredBlurText";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
    title: "Financial Services Guide | Continental Heritage",
    description: "Financial Services Guide (FSG) for Continental Heritage Private Wealth. Understanding our services, remuneration, and dispute resolution.",
};

export default function FSGPage() {
    return (
        <main className="min-h-screen bg-forest pt-32 pb-0">
            {/* Page Hero */}
            <section className="container mb-24 lg:mb-32">
                <div className="max-w-4xl">
                    <CinematicReveal>
                        <span className="text-copper tracking-widest uppercase text-sm font-medium mb-6 block">Legal & Compliance</span>
                    </CinematicReveal>

                    <StaggeredBlurText
                        text="Financial Services Guide"
                        className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-[1.1]"
                    />

                    <CinematicReveal delay={0.6}>
                        <p className="text-xl text-sage max-w-2xl leading-relaxed">
                            This Financial Services Guide (FSG) is an important document designed to assist you in deciding whether to use any of the financial services and products offered by Continental Heritage Private Wealth.
                        </p>
                    </CinematicReveal>
                </div>
            </section>

            {/* Hero Image */}
            <section className="container mb-24 lg:mb-32">
                <CinematicReveal delay={0.8}>
                    <div className="relative w-full h-[40vh] md:h-[50vh] rounded-tr-[80px] rounded-bl-[80px] overflow-hidden border border-copper/20">
                        <Image
                            src="/images/legal/legal_hero.png"
                            alt="Continental Heritage Documents"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent mix-blend-multiply" />
                    </div>
                </CinematicReveal>
            </section>

            {/* Document Content */}
            <section className="section-padding bg-forest-dark relative overflow-hidden">
                <div className="container relative z-10 max-w-4xl mx-auto">
                    <CinematicReveal direction="up">
                        <div className="prose prose-invert prose-copper max-w-none prose-headings:font-heading prose-headings:font-medium prose-p:text-sage prose-p:leading-relaxed prose-a:text-copper prose-a:no-underline hover:prose-a:underline">
                            <h2 className="text-3xl md:text-4xl text-parchment-light mb-6">1. Purpose of this Document</h2>
                            <p className="mb-10 text-lg">
                                This FSG contains information about Continental Heritage Private Wealth, the services we provide, the remuneration that may be paid to us, and how any complaints are handled. It is designed to assist you in deciding whether to use any of the services we offer.
                            </p>

                            <h2 className="text-3xl md:text-4xl text-parchment-light mb-6 mt-16">2. Our Services and Products</h2>
                            <p className="mb-10 text-lg">
                                Continental Heritage Private Wealth holds the appropriate regulatory licenses to provide financial product advice and deal in a financial product. We specialize in providing bespoke, multi-generational wealth management services exclusively to ultra-high-net-worth individuals and families.
                            </p>
                            <p className="mb-10 text-lg">
                                We are authorized to provide advice on and deal in the following:
                            </p>
                            <ul className="list-disc pl-6 mb-10 text-sage text-lg space-y-2">
                                <li>Deposit and Payment Products</li>
                                <li>Derivatives</li>
                                <li>Foreign Exchange Contracts</li>
                                <li>Government Debentures, Stocks or Bonds</li>
                                <li>Managed Investment Schemes, including IDPS</li>
                                <li>Securities</li>
                                <li>Superannuation (Retirement Planning)</li>
                            </ul>

                            <h2 className="text-3xl md:text-4xl text-parchment-light mb-6 mt-16">3. Remuneration and Fees</h2>
                            <p className="mb-10 text-lg">
                                As a Continental Heritage client, you will receive a transparent, bespoke fee proposal before we commence providing any services or executing any transactions.
                            </p>
                            <p className="mb-10 text-lg">
                                Our fees are generally structured as follows:
                            </p>
                            <ul className="list-disc pl-6 mb-10 text-sage text-lg space-y-2">
                                <li><strong className="text-parchment">Ongoing Management Fee:</strong> Calculated as a percentage of the total assets under our management.</li>
                                <li><strong className="text-parchment">Performance Fee:</strong> Applicable only in specific bespoke investment vehicles, calculated on performance exceeding an agreed-upon high-water mark benchmark.</li>
                                <li><strong className="text-parchment">Advice Fee:</strong> For distinct financial structuring and estate planning matters outside the scope of general management.</li>
                            </ul>
                            <p className="mb-10 text-lg">
                                We do not accept commissions from third-party product providers. If any are received incidentally, they are fully rebated to the client. This ensures our advice remains uniquely unbiased and aligned strictly with your generational interests.
                            </p>

                            <h2 className="text-3xl md:text-4xl text-parchment-light mb-6 mt-16">4. Dispute Resolution Process</h2>
                            <p className="mb-10 text-lg">
                                Continental Heritage maintains a robust and discreet Internal Dispute Resolution (IDR) process. Should you have a complaint regarding our services, please contact your primary Private Wealth Director or our Chief Compliance Officer immediately. We aim to acknowledge all complaints within 24 hours and resolve them swiftly and confidentially.
                            </p>

                            <h2 className="text-3xl md:text-4xl text-parchment-light mb-6 mt-16">5. Contact Configuration</h2>
                            <p className="mb-10 text-lg">
                                For any inquiries regarding this document or our services, you may contact your relationship manager or our central office:
                            </p>
                            <p className="mb-2 text-lg text-sage"><strong>Office:</strong> Continental Heritage Private Wealth, Level 32, 1 Macquarie Place, Sydney NSW 2000, Australia</p>
                            <p className="mb-2 text-lg text-sage"><strong>Email:</strong> compliance@continentalheritage.com</p>
                            <p className="mb-10 text-lg text-sage"><strong>Phone:</strong> +61 2 8000 7000</p>

                            <p className="mb-10 text-lg italic text-copper">
                                Document Version 2.1 — Approved: January 2026
                            </p>
                        </div>
                    </CinematicReveal>
                </div>
            </section>

            <CTASection />
        </main>
    );
}
