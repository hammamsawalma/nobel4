import { test, expect } from '@playwright/test';

test.describe('Subpages Content Rendering', () => {

    test('The Firm page renders history timeline', async ({ page }) => {
        await page.goto('/the-firm');
        
        // Check main heading by its copper class subtitle instead since 'StaggeredBlurText' splits characters
        await expect(page.locator('span', { hasText: 'Our Heritage' })).toBeVisible();
        
        // Check timeline items
        const chronologySection = page.locator('h2', { hasText: 'The Continental Chronology' });
        await expect(chronologySection).toBeVisible();
        
        // Year 1978 should be present
        const year1978 = page.locator('span', { hasText: '1978' });
        await expect(year1978).toBeVisible();
    });

    test('Wealth Strategies renders strategy cards', async ({ page }) => {
        await page.goto('/wealth-strategies');
        
        const portfolioStrategy = page.locator('h3', { hasText: 'Portfolio Management' });
        await expect(portfolioStrategy).toBeVisible();

        const estatePlanning = page.locator('h3', { hasText: 'Estate & Succession' });
        await expect(estatePlanning).toBeVisible();
    });

    test('Insights page renders curated articles', async ({ page }) => {
        await page.goto('/insights');
        
        // Should find external article link and source badge "Financial Times"
        const sourceBadge = page.locator('span', { hasText: 'Financial Times' });
        await expect(sourceBadge).toBeVisible();
        
        // Check if external link has appropriate target="_blank"
        const link = page.locator('a:has(span:text("Financial Times"))').first();
        await expect(link).toHaveAttribute('target', '_blank');
        await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
    
    test('Privacy page renders basic content', async ({ page }) => {
        await page.goto('/privacy');
        const bodyContent = await page.textContent('body');
        expect(bodyContent?.length).toBeGreaterThanOrEqual(100);
    });

});
