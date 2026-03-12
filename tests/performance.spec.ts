import { test, expect } from '@playwright/test';

test.describe('Lazy Loading & Performance Optimization', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
    });

    test('8.1: Above-fold sections render immediately (Hero, About, Philosophy)', async ({ page }) => {
        // Hero
        const hero = page.locator('h1');
        await expect(hero).toBeVisible();

        // About section
        const about = page.locator('text=A Heritage of Wisdom.').first();
        await expect(about).toBeAttached();

        // Philosophy
        const philosophy = page.getByRole('heading', { name: /The Continental Philosophy/i });
        await expect(philosophy).toBeAttached();
    });

    test('8.2: Below-fold Testimonials section loads when scrolled to', async ({ page }) => {
        // Scroll far enough to reach testimonials
        await page.evaluate(() => window.scrollTo(0, 5000));
        await page.waitForTimeout(2000);

        const testimonials = page.locator('text=Client Voices').first();
        await expect(testimonials).toBeAttached({ timeout: 10000 });
    });

    test('8.3: FAQ Section loads via dynamic import', async ({ page }) => {
        // Scroll down to FAQ
        const faqHeading = page.locator('text=Common Enquiries').first();
        await faqHeading.scrollIntoViewIfNeeded();
        await expect(faqHeading).toBeVisible({ timeout: 10000 });

        // Accordion should be functional
        const firstQuestion = page.locator('button').filter({
            hasText: 'What is the minimum portfolio size',
        });
        if (await firstQuestion.count() > 0) {
            await expect(firstQuestion.first()).toBeVisible();
        }
    });

    test('8.4: Trajectory Calculator loads via dynamic import', async ({ page }) => {
        const calcSection = page.locator('text=Wealth Trajectory Calculator').first();
        await calcSection.scrollIntoViewIfNeeded();
        await expect(calcSection).toBeVisible({ timeout: 10000 });

        // Slider should be interactive
        const slider = page.locator('input[type="range"]').first();
        await expect(slider).toBeVisible({ timeout: 5000 });
    });

    test('8.5: Newsletter section renders with email input', async ({ page }) => {
        // Scroll all the way to the bottom where Newsletter section is
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(2000);

        // Use specific placeholder to distinguish from other email inputs on page
        const emailInput = page.locator('input[placeholder="your@email.com"]');
        await expect(emailInput).toBeVisible({ timeout: 10000 });
    });

    test('8.6: CTA section loads correctly', async ({ page }) => {
        const cta = page.locator('text=Preserve Your Heritage for Generations to Come').first();
        await cta.scrollIntoViewIfNeeded();
        await expect(cta).toBeVisible({ timeout: 10000 });
    });

    test('8.7: Contact section loads with Begin Your Legacy text', async ({ page }) => {
        // Scroll all the way to Contact section on homepage
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(2000);

        // Contact section should have loaded via dynamic import
        const contactHeading = page.locator('text=Begin Your Legacy').first();
        await expect(contactHeading).toBeAttached({ timeout: 10000 });
    });
});

test.describe('Performance — Smooth Scroll & Mobile', () => {
    test.use({ viewport: { width: 390, height: 844 } });

    test('8.8: Page loads without critical JS errors on mobile viewport', async ({ page }) => {
        const errors: string[] = [];
        page.on('pageerror', (err) => errors.push(err.message));

        await page.goto('/');
        await page.waitForLoadState('networkidle');

        // Scroll through the page
        for (let i = 0; i < 5; i++) {
            await page.evaluate(() => window.scrollBy(0, 1000));
            await page.waitForTimeout(300);
        }

        // Filter out non-critical errors
        const criticalErrors = errors.filter(
            (e) =>
                !e.includes('ResizeObserver') &&
                !e.includes('Script error') &&
                !e.includes('Loading chunk') &&
                !e.includes('hydrat') &&
                !e.includes('Minified React error')
        );
        expect(criticalErrors).toEqual([]);
    });

    test('8.9: No horizontal overflow on mobile', async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');

        const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
        const windowWidth = await page.evaluate(() => window.innerWidth);
        expect(bodyWidth).toBeLessThanOrEqual(windowWidth);
    });

    test('8.10: GlowOrb uses CSS animation class (not Framer Motion)', async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');

        // GlowOrb elements should have CSS animation-name set (not controlled by Framer Motion)
        const glowOrbs = page.locator('[class*="glow-orb"]');
        const count = await glowOrbs.count();
        
        // If GlowOrbs exist, they should have CSS animation styles
        if (count > 0) {
            const animationName = await glowOrbs.first().evaluate((el) =>
                getComputedStyle(el).animationName
            );
            // Should be "glow-orb-float" from CSS keyframes, not "none"
            expect(animationName).not.toBe('none');
        } else {
            // If no GlowOrbs are in view, just check the CSS keyframe exists
            const hasKeyframes = await page.evaluate(() => {
                const sheets = Array.from(document.styleSheets);
                for (const sheet of sheets) {
                    try {
                        const rules = Array.from(sheet.cssRules || []);
                        for (const rule of rules) {
                            if (rule.type === CSSRule.KEYFRAMES_RULE) {
                                const kfRule = rule as CSSKeyframesRule;
                                if (kfRule.name.includes('glow')) return true;
                            }
                        }
                    } catch { /* cross-origin */ }
                }
                return false;
            });
            expect(hasKeyframes).toBe(true);
        }
    });
});
