import { test, expect } from '@playwright/test';

test.describe('Accessibility (WCAG 2.1 AA)', () => {

    test('Skip navigation link exists and has correct href', async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('domcontentloaded');

        // Skip-nav link exists in DOM (hidden until focused)
        const skipLink = page.locator('a[href="#main-content"]');
        await expect(skipLink).toHaveCount(1);
        await expect(skipLink).toHaveAttribute('href', '#main-content');
    });

    test('Main content landmark exists with correct id', async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('domcontentloaded');

        const mainContent = page.locator('#main-content');
        await expect(mainContent).toBeAttached();
    });

    test('Header nav has accessible aria-label', async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('domcontentloaded');

        const nav = page.locator('nav[aria-label="Main navigation"]');
        await expect(nav).toBeAttached();
    });

    test('Footer has contentinfo role', async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('domcontentloaded');

        const footer = page.locator('footer[role="contentinfo"]');
        await expect(footer).toBeAttached();
    });

    test('Contact form labels are properly associated with inputs', async ({ page }) => {
        await page.goto('/contact');
        await page.waitForLoadState('domcontentloaded');

        // Check htmlFor/id pairs exist
        const pairs = [
            { labelFor: 'contact-name', tag: 'input' },
            { labelFor: 'contact-email', tag: 'input' },
            { labelFor: 'contact-phone', tag: 'input' },
            { labelFor: 'contact-role', tag: 'select' },
            { labelFor: 'contact-inquiry', tag: 'textarea' },
        ];

        for (const pair of pairs) {
            await expect(page.locator(`label[for="${pair.labelFor}"]`)).toBeAttached();
            await expect(page.locator(`${pair.tag}#${pair.labelFor}`)).toBeAttached();
        }
    });

    test('Portal form labels are properly associated with inputs', async ({ page }) => {
        await page.goto('/portal');
        await page.waitForLoadState('domcontentloaded');

        await expect(page.locator('label[for="portal-email"]')).toBeAttached();
        await expect(page.locator('#portal-email')).toBeAttached();
        await expect(page.locator('label[for="portal-password"]')).toBeAttached();
        await expect(page.locator('#portal-password')).toBeAttached();
    });

    test('Mobile bottom nav has accessible label', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 812 });
        await page.goto('/');
        await page.waitForLoadState('domcontentloaded');

        const mobileNav = page.locator('nav[aria-label="Mobile navigation"]');
        await expect(mobileNav).toBeAttached();
    });
});
