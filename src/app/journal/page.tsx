import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { StaggeredBlurText } from "@/components/animations/StaggeredBlurText";
import { CTASection } from "@/components/sections/CTASection";
import { JOURNAL_ARTICLES } from "@/lib/journal-data";

export const metadata: Metadata = {
    title: "Journal & Insights | Continental Heritage",
    description: "Perspectives on global markets, wealth preservation, and family governance.",
};

const ARTICLES = JOURNAL_ARTICLES.map((a, i) => ({
    id: a.slug,
    category: a.category,
    date: a.date,
    title: a.title,
    excerpt: a.excerpt,
    image: a.coverImage,
    featured: i === 0,
}));

export default function JournalPage() {
    const featuredArticle = ARTICLES.find(a => a.featured) || ARTICLES[0];
    const regularArticles = ARTICLES.filter(a => !a.featured);

    return (
        <main className="min-h-screen bg-forest pt-32 pb-0">

            {/* Page Hero */}
            <section className="container mb-20 lg:mb-24">
                <div className="max-w-4xl">
                    <CinematicReveal>
                        <span className="text-copper tracking-widest uppercase text-sm font-medium mb-6 block">Journal & Insights</span>
                    </CinematicReveal>

                    <StaggeredBlurText
                        text="Perspectives on Capital and Legacy."
                        className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-[1.1]"
                    />
                </div>
            </section>

            {/* Featured Article */}
            <section className="container mb-24">
                <CinematicReveal delay={0.4}>
                    <Link href={`/journal/${featuredArticle.id}`} className="group block">
                        <div className="relative w-full h-[60vh] lg:h-[70vh] rounded-[20px] overflow-hidden mb-8 border border-copper/20">
                            <Image
                                src={featuredArticle.image}
                                alt={featuredArticle.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-transparent mix-blend-multiply" />
                            <div className="absolute inset-0 bg-forest/20 group-hover:bg-transparent transition-colors duration-700" />

                            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16 z-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-copper text-xs tracking-widest uppercase font-medium border border-copper/30 px-3 py-1 rounded-full">{featuredArticle.category}</span>
                                    <span className="text-parchment-light/60 text-sm font-serif italic">{featuredArticle.date}</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4 max-w-4xl group-hover:text-copper transition-colors duration-300 drop-shadow-md">
                                    {featuredArticle.title}
                                </h2>
                                <p className="text-parchment-light/80 text-lg md:text-xl max-w-2xl hidden md:block drop-shadow-sm">
                                    {featuredArticle.excerpt}
                                </p>
                            </div>
                        </div>
                    </Link>
                </CinematicReveal>
            </section>

            {/* Article Grid */}
            <section className="section-padding bg-forest-dark relative border-t border-copper/10 rounded-t-[40px]">
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {regularArticles.map((article, index) => (
                            <CinematicReveal key={article.id} delay={index * 0.1}>
                                <Link href={`/journal/${article.id}`} className="group block h-full">
                                    <div className="relative h-64 mb-6 overflow-hidden rounded-sm border border-copper/20">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-forest/40 group-hover:bg-transparent transition-colors duration-700" />
                                    </div>

                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-copper text-xs tracking-widest uppercase font-medium">{article.category}</span>
                                        <span className="text-sage/60 text-sm font-serif italic">{article.date}</span>
                                    </div>

                                    <h3 className="text-2xl mb-4 text-parchment-light group-hover:text-copper transition-colors duration-300 leading-tight">
                                        {article.title}
                                    </h3>

                                    <p className="text-sage leading-relaxed">
                                        {article.excerpt}
                                    </p>
                                </Link>
                            </CinematicReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Re-use CTA Section */}
            <CTASection />

        </main>
    );
}
