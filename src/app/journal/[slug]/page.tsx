import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { StaggeredBlurText } from "@/components/animations/StaggeredBlurText";
import { JOURNAL_ARTICLES } from "@/lib/journal-data";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
    return JOURNAL_ARTICLES.map((article) => ({
        slug: article.slug,
    }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const article = JOURNAL_ARTICLES.find((a) => a.slug === params.slug);
    if (!article) return {};
    return {
        title: `${article.title} | Continental Heritage`,
        description: article.excerpt,
    };
}

export default function JournalArticlePage({ params }: { params: { slug: string } }) {
    const article = JOURNAL_ARTICLES.find((a) => a.slug === params.slug);

    if (!article) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-forest">
            {/* Hero */}
            <section className="relative h-[50vh] overflow-hidden">
                <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/60 to-forest/20" />
                <div className="absolute inset-0 flex items-end pb-16 md:pb-20">
                    <div className="container">
                        <CinematicReveal>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-copper text-xs tracking-widest uppercase">
                                    {article.category}
                                </span>
                                <span className="text-sage/40">•</span>
                                <span className="text-sage text-xs">{article.date}</span>
                                <span className="text-sage/40">•</span>
                                <span className="text-sage text-xs">{article.readTime}</span>
                            </div>
                        </CinematicReveal>
                        <StaggeredBlurText
                            text={article.title}
                            className="text-3xl md:text-5xl lg:text-6xl mb-4 leading-[1.1] max-w-4xl"
                        />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-forest rounded-t-[40px]" />
            </section>

            {/* Article Content */}
            <section className="section-padding">
                <div className="container max-w-3xl">
                    <CinematicReveal>
                        <Link
                            href="/journal"
                            className="inline-flex items-center gap-2 text-copper hover:text-copper-light transition-colors mb-10 group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm tracking-widest uppercase">Back to Journal</span>
                        </Link>
                    </CinematicReveal>

                    <CinematicReveal delay={0.2}>
                        <article className="prose prose-lg max-w-none
              prose-headings:font-heading prose-headings:text-parchment-light
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-xl prose-h3:text-copper prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-sage prose-p:leading-relaxed
              prose-strong:text-parchment-light
              prose-blockquote:border-l-copper prose-blockquote:text-sage prose-blockquote:italic prose-blockquote:font-accent
              prose-ol:text-sage prose-ul:text-sage
              prose-li:text-sage
            ">
                            <div dangerouslySetInnerHTML={{ __html: articleToHtml(article.content) }} />
                        </article>
                    </CinematicReveal>

                    {/* Divider */}
                    <CinematicReveal delay={0.3}>
                        <div className="copper-divider-ornate max-w-sm mx-auto mt-16 mb-16">
                            <span className="dot" />
                        </div>
                    </CinematicReveal>

                    {/* Back Link */}
                    <CinematicReveal delay={0.4}>
                        <div className="text-center">
                            <Link
                                href="/journal"
                                className="inline-block bg-copper/10 border border-copper/30 text-parchment-light px-8 py-3 rounded-sm font-heading tracking-wider uppercase text-sm hover:bg-copper hover:text-forest transition-all"
                            >
                                View All Articles
                            </Link>
                        </div>
                    </CinematicReveal>
                </div>
            </section>
        </main>
    );
}

/** Simple markdown-to-HTML converter for our article content */
function articleToHtml(md: string): string {
    return md
        .replace(/^### (.+)$/gm, '<h3>$1</h3>')
        .replace(/^## (.+)$/gm, '<h2>$1</h2>')
        .replace(/^> "(.+)"$/gm, '<blockquote><p>"$1"</p></blockquote>')
        .replace(/^> (.+)$/gm, '<blockquote><p>$1</p></blockquote>')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
        .replace(/^(?!<[hblou])((?!^\s*$).+)$/gm, '<p>$1</p>')
        .replace(/<\/li>\n<li>/g, '</li><li>')
        .replace(/(<li>[\s\S]*<\/li>)/, '<ol>$1</ol>');
}
