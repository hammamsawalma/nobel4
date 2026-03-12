import { test, expect } from '@playwright/test';

test.describe('Home Page Interactive Components', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('Hero Section renders main CTA buttons', async ({ page }) => {
        const primaryCta = page.locator('a', { hasText: 'Schedule a Private Consultation' }).first();
        await expect(primaryCta).toBeVisible();
        await expect(primaryCta).toHaveAttribute('href', '/contact');
    });

    test('FAQ Section expands on click', async ({ page }) => {
        const faqSection = page.locator('section', { hasText: 'Frequently Asked Questions' });
        await faqSection.first().scrollIntoViewIfNeeded();

        // Find the first accordion button
        const firstQuestion = faqSection.locator('button').first();
        await expect(firstQuestion).toBeVisible();
        
        // Ensure it's not expanded yet
        await expect(firstQuestion).toHaveAttribute('aria-expanded', 'false');
        
        // Click to expand
        await firstQuestion.click();
        
        // Wait for it to smoothly open
        await expect(firstQuestion).toHaveAttribute('aria-expanded', 'true');
        
        // Ensure some answer text is visible
        const answerPara = faqSection.locator('p').first();
        await expect(answerPara).toBeVisible();
    });

    test('Trajectory Calculator inputs and outputs test', async ({ page }) => {
        const calcSection = page.locator('section', { hasText: 'Wealth Trajectory Calculator' });
        await calcSection.scrollIntoViewIfNeeded();
        
        // Look for the initial investment slider
        const initialSlider = calcSection.locator('input[type="range"]').first();
        await expect(initialSlider).toBeVisible();
        
        // Total contributed is in the summary stats
        const totalContributedText = calcSection.locator('span', { hasText: 'Total Contributed' });
        await expect(totalContributedText).toBeVisible();
    });

    test('Newsletter Section form submission simulates success', async ({ page }) => {
        const newsletterSection = page.locator('section', { hasText: 'The Quarterly Perspective' });
        await newsletterSection.scrollIntoViewIfNeeded();
        
        const emailInput = newsletterSection.locator('input[type="email"]');
        await expect(emailInput).toBeVisible();
        
        await emailInput.fill('playwright@test.com');
        
        const submitButton = newsletterSection.locator('button[type="submit"]');
        await submitButton.click({ force: true });
        
        // Verify success message (Wait for state transition)
        const successMessage = newsletterSection.locator('p', { hasText: 'Welcome to the Circle.' });
        await expect(successMessage).toBeVisible({ timeout: 5000 });
    });
});
