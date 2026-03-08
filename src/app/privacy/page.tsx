import { Metadata } from "next";
import Image from "next/image";
import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { StaggeredBlurText } from "@/components/animations/StaggeredBlurText";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
    title: "Privacy Policy | Continental Heritage",
    description: "Read the Continental Heritage Private Wealth privacy policy to understand how we protect and manage your personal data.",
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-forest pt-32 pb-0">
            {/* Page Hero */}
            <section className="container mb-24 lg:mb-32">
                <div className="max-w-4xl">
                    <CinematicReveal>
                        <span className="text-copper tracking-widest uppercase text-sm font-medium mb-6 block">Legal & Compliance</span>
                    </CinematicReveal>

                    <StaggeredBlurText
                        text="Privacy Policy"
                        className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-[1.1]"
                    />

                    <CinematicReveal delay={0.6}>
                        <p className="text-xl text-sage max-w-2xl leading-relaxed">
                            Continental Heritage Private Wealth is committed to protecting the privacy and security of our clients' personal information. This policy outlines our vigilant approach to data handling and discretion.
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
                            alt="Continental Heritage Vault"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent mix-blend-multiply" />
                    </div>
                </CinematicReveal>
            </section>

            {/* Policy Content */}
            <section className="section-padding bg-forest-dark relative overflow-hidden">
                <div className="container relative z-10 max-w-4xl mx-auto">
                    <CinematicReveal direction="up">
                        <div className="prose prose-invert prose-copper max-w-none prose-headings:font-heading prose-headings:font-medium prose-p:text-sage prose-p:leading-relaxed prose-a:text-copper prose-a:no-underline hover:prose-a:underline">
                            <h2 className="text-3xl md:text-4xl text-parchment-light mb-6">1. Introduction</h2>
                            <p className="mb-10 text-lg">
                                Continental Heritage Private Wealth ("Continental Heritage", "we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) or engage our services, and tell you about your privacy rights and how the law protects you.
                            </p>

                            <h2 className="text-3xl md:text-4xl text-parchment-light mb-6 mt-16">2. The Data We Collect About You</h2>
                            <p className="mb-6 text-lg">
                                Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).
                            </p>
                            <p className="mb-10 text-lg">
                                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                            </p>
                            <ul className="list-disc pl-6 mb-10 text-sage text-lg space-y-2">
                                <li><strong className="text-parchment">Identity Data</strong> includes first name, maiden name, last name, username or similar identifier, marital status, title, date of birth and gender.</li>
                                <li><strong className="text-parchment">Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                                <li><strong className="text-parchment">Financial Data</strong> includes bank account and payment card details, as well as comprehensive asset portfolios.</li>
                                <li><strong className="text-parchment">Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
                            </ul>

                            <h2 className="text-3xl md:text-4xl text-parchment-light mb-6 mt-16">3. How We Use Your Personal Data</h2>
                            <p className="mb-10 text-lg">
                                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 mb-10 text-sage text-lg space-y-2">
                                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                                <li>Where we need to comply with a legal or regulatory obligation.</li>
                            </ul>

                            <h2 className="text-3xl md:text-4xl text-parchment-light mb-6 mt-16">4. Data Security & Discretion</h2>
                            <p className="mb-10 text-lg">
                                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. Discretion is the cornerstone of Continental Heritage, and all staff are bound by rigorous non-disclosure agreements.
                            </p>

                            <h2 className="text-3xl md:text-4xl text-parchment-light mb-6 mt-16">5. Your Legal Rights</h2>
                            <p className="mb-10 text-lg">
                                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
                            </p>
                            <p className="mb-10 text-lg italic text-copper">
                                Last updated: October 2026
                            </p>
                        </div>
                    </CinematicReveal>
                </div>
            </section>

            <CTASection />
        </main>
    );
}
