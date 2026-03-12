import { test, expect } from '@playwright/test';

test.describe('Global Navigation & Layout', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('Desktop header has correct navigation links', async ({ page }) => {
        // Find links in the header
        const theFirmLink = page.locator('header nav a', { hasText: 'The Firm' });
        await expect(theFirmLink).toBeVisible();

        const strategiesLink = page.locator('header nav a', { hasText: 'Wealth Strategies' });
        await expect(strategiesLink).toBeVisible();

        const journalLink = page.locator('header nav a', { hasText: 'Journal' });
        await expect(journalLink).toBeVisible();
        
        const contactLink = page.locator('header nav a', { hasText: 'Contact' });
        await expect(contactLink).toBeVisible();
    });

    test('The Firm link routes correctly', async ({ page }) => {
        await page.waitForLoadState('networkidle');
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.waitForTimeout(500);

        const theFirmLink = page.locator('header nav a', { hasText: 'The Firm' });
        await theFirmLink.click();
        await page.waitForURL(/.*the-firm/, { timeout: 15000 });
        await expect(page).toHaveURL(/.*the-firm/);
    });

    test('Wealth Strategies link routes correctly', async ({ page }) => {
        await page.waitForLoadState('networkidle');
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.waitForTimeout(500);

        const strategiesLink = page.locator('header nav a', { hasText: 'Wealth Strategies' });
        await strategiesLink.click();
        await page.waitForURL(/.*wealth-strategies/, { timeout: 15000 });
        await expect(page).toHaveURL(/.*wealth-strategies/);
    });

    test('Footer links render properly and have correct hrefs', async ({ page }) => {
        // Scroll to the bottom to ensure footer is in view
        const footer = page.locator('footer');
        await footer.scrollIntoViewIfNeeded();

        const privacyLink = footer.locator('a', { hasText: 'Privacy Policy' });
        await expect(privacyLink).toHaveAttribute('href', '/legal/privacy');

        const termsLink = footer.locator('a', { hasText: 'Terms of Service' });
        await expect(termsLink).toHaveAttribute('href', '/legal/terms');
    });

    test('Mobile Navigation Toggle', async ({ page, isMobile }) => {
        // Set viewport to mobile size
        await page.setViewportSize({ width: 375, height: 812 });
        
        const menuButton = page.locator('button[aria-label="Toggle menu"], button.mobile-menu-toggle, header button:last-child');
        
        // Wait for header to be visible and click the toggle button
        if (await menuButton.count() > 0) {
            await menuButton.first().click();
            // The mobile nav overlay should appear (often contains 'Navigation')
            const mobileOverlayContainer = page.locator('.fixed.inset-0.z-40').first();
            await expect(mobileOverlayContainer).toBeVisible();
            
            // Check a link inside the mobile menu
            const mobileFirmLink = mobileOverlayContainer.locator('a', { hasText: 'The Firm' });
            await expect(mobileFirmLink).toBeVisible();
        }
    });
});
