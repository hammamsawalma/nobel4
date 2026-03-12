import { test, expect } from '@playwright/test';

test.describe('WebP Image Optimization Verification', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
    });

    test('7.1: Hero image source references WebP', async ({ page }) => {
        // Next.js Image rewrites src to /_next/image?url=...
        // Check that the encoded URL contains .webp
        const heroImg = page.locator('img[src*="hero%2Fmain.webp"], img[src*="hero/main.webp"]');
        await expect(heroImg.first()).toBeVisible({ timeout: 5000 });
    });

    test('7.2: About section images reference WebP', async ({ page }) => {
        const aboutSection = page.locator('text=A Heritage of Wisdom.').first();
        await aboutSection.scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);

        const mainImg = page.locator('img[src*="about%2Fmain.webp"], img[src*="about/main.webp"]');
        await expect(mainImg.first()).toBeVisible({ timeout: 5000 });

        const secondaryImg = page.locator('img[src*="about%2Fsecondary.webp"], img[src*="about/secondary.webp"]');
        await expect(secondaryImg.first()).toBeVisible({ timeout: 5000 });
    });

    test('7.3: Logo references WebP', async ({ page }) => {
        const logo = page.locator('img[src*="logo%2Fmain.webp"], img[src*="logo/main.webp"]');
        await expect(logo.first()).toBeVisible({ timeout: 5000 });
    });

    test('7.4: Services section images reference WebP', async ({ page }) => {
        await page.locator('text=Bespoke Wealth Strategies').scrollIntoViewIfNeeded();
        await page.waitForTimeout(1000);

        const portfolioImg = page.locator('img[src*="services%2Fportfolio.webp"], img[src*="services/portfolio.webp"]');
        await expect(portfolioImg.first()).toBeVisible({ timeout: 5000 });
    });

    test('7.5: No internal PNG image references remain in the rendered page', async ({ page }) => {
        // Get all image tags src attributes
        const allSrcs = await page.locator('img').evaluateAll((imgs) =>
            imgs.map((img) => img.getAttribute('src') || '')
        );

        // Decode and check for internal pngs (excluding og-image)
        const internalPngs = allSrcs.filter((src) => {
            const decoded = decodeURIComponent(src);
            return decoded.includes('/images/') && decoded.endsWith('.png') && !decoded.includes('og-image');
        });

        expect(internalPngs).toEqual([]);
    });

    test('7.6: WebP images are actually smaller than original PNGs', async ({ page }) => {
        // Fetch the hero image directly
        const response = await page.request.get('/images/hero/main.webp');
        expect(response.status()).toBe(200);

        // Check reasonable size (original was ~807KB, webp should be ~98KB)
        const body = await response.body();
        expect(body.length).toBeLessThan(200 * 1024); // < 200KB
        expect(body.length).toBeGreaterThan(5 * 1024);  // > 5KB (sanity check)
    });
});

test.describe('WebP on Subpages', () => {
    test('7.7: Wealth Strategies page has no internal PNG images', async ({ page }) => {
        await page.goto('/wealth-strategies');
        await page.waitForLoadState('networkidle');

        const allSrcs = await page.locator('img').evaluateAll((imgs) =>
            imgs.map((img) => img.getAttribute('src') || '')
        );
        const internalPngs = allSrcs.filter((src) => {
            const decoded = decodeURIComponent(src);
            return decoded.includes('/images/') && decoded.endsWith('.png') && !decoded.includes('og-image');
        });
        expect(internalPngs).toEqual([]);
    });

    test('7.8: The Firm page uses WebP images', async ({ page }) => {
        await page.goto('/the-firm');
        await page.waitForLoadState('networkidle');

        const aboutImg = page.locator('img[src*="about%2Fmain.webp"], img[src*="about/main.webp"]');
        await expect(aboutImg.first()).toBeVisible({ timeout: 5000 });
    });

    test('7.9: Contact page has no internal PNG images', async ({ page }) => {
        await page.goto('/contact');
        await page.waitForLoadState('networkidle');

        const allSrcs = await page.locator('img').evaluateAll((imgs) =>
            imgs.map((img) => img.getAttribute('src') || '')
        );
        const internalPngs = allSrcs.filter((src) => {
            const decoded = decodeURIComponent(src);
            return decoded.includes('/images/') && decoded.endsWith('.png') && !decoded.includes('og-image');
        });
        expect(internalPngs).toEqual([]);
    });
});
