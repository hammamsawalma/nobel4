import { test, expect } from '@playwright/test';

test.describe('Client Portal (/portal)', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/portal');
    });

    test('Portal page renders login form with all elements', async ({ page }) => {
        // Main heading
        await expect(page.locator('h1', { hasText: 'Client Gateway' })).toBeVisible();

        // Security badge
        await expect(page.locator('text=256-Bit Encrypted')).toBeVisible();

        // Email field with proper label association
        const emailLabel = page.locator('label[for="portal-email"]');
        await expect(emailLabel).toBeVisible();
        const emailInput = page.locator('#portal-email');
        await expect(emailInput).toBeVisible();

        // Password field with proper label association
        const passwordLabel = page.locator('label[for="portal-password"]');
        await expect(passwordLabel).toBeVisible();
        const passwordInput = page.locator('#portal-password');
        await expect(passwordInput).toBeVisible();

        // Access Portfolio button
        const submitButton = page.locator('button[type="submit"]', { hasText: 'Access Portfolio' });
        await expect(submitButton).toBeVisible();

        // Remember device checkbox
        await expect(page.locator('text=Remember Device')).toBeVisible();

        // Reset Access link
        await expect(page.locator('button', { hasText: 'Reset Access' })).toBeVisible();

        // Footer links (scope to portal card area to avoid footer collision)
        const portalCard = page.locator('.heritage-card').first();
        await expect(page.locator('a[href="/privacy"]').first()).toBeVisible();
        await expect(page.locator('a[href="/contact"]', { hasText: 'Support' })).toBeVisible();
    });

    test('Password visibility toggle works', async ({ page }) => {
        const passwordInput = page.locator('#portal-password');

        // Initially password type
        await expect(passwordInput).toHaveAttribute('type', 'password');

        // Click toggle button
        const toggleButton = page.locator('button[aria-label="Show password"]');
        await toggleButton.click();

        // Now should be text
        await expect(passwordInput).toHaveAttribute('type', 'text');

        // Click again to hide
        const hideButton = page.locator('button[aria-label="Hide password"]');
        await hideButton.click();
        await expect(passwordInput).toHaveAttribute('type', 'password');
    });

    test('Form submission shows loading state and error message', async ({ page }) => {
        // Fill credentials
        await page.locator('#portal-email').fill('test@example.com');
        await page.locator('#portal-password').fill('TestPass123');

        // Submit
        await page.locator('button[type="submit"]').click();

        // Should show loading spinner (button disabled state)
        await expect(page.locator('button[type="submit"]')).toBeDisabled();

        // Wait for error message to appear
        const errorMessage = page.locator('text=This portal is currently in private preview');
        await expect(errorMessage).toBeVisible({ timeout: 5000 });

        // Button should be re-enabled
        await expect(page.locator('button[type="submit"]')).toBeEnabled();
    });

    test('Portal link exists in desktop header', async ({ page }) => {
        await page.goto('/');
        await page.waitForTimeout(1000);

        const portalLink = page.locator('header a', { hasText: 'Client Portal' });
        await expect(portalLink).toBeVisible();
        await expect(portalLink).toHaveAttribute('href', '/portal');
    });
});
