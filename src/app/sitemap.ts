import { MetadataRoute } from 'next';
import { JOURNAL_ARTICLES } from '@/lib/journal-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://continentalheritage.com';
    const lastModified = new Date();

    const routes = [
        '',
        '/the-firm',
        '/wealth-strategies',
        '/journal',
        '/insights',
        '/contact',
        '/privacy',
        '/fsg',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const services = [
        '/wealth-strategies/portfolio-management',
        '/wealth-strategies/financial-planning',
        '/wealth-strategies/wealth-protection',
        '/wealth-strategies/tax-planning',
        '/wealth-strategies/real-estate',
        '/wealth-strategies/retirement-planning',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    const articles = JOURNAL_ARTICLES.map((article) => ({
        url: `${baseUrl}/journal/${article.slug}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.5,
    }));

    return [...routes, ...services, ...articles];
}
