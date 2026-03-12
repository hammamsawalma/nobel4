import { test, expect } from '@playwright/test';

test.describe('Contact Form Interactive Workflow', () => {

    test('Can fill out full inquiry form and sumbit', async ({ page }) => {
        await page.goto('/contact');
        
        // Wait for form to become interactive
        const formSection = page.locator('form').first();
        await expect(formSection).toBeVisible();
        
        // Fill Full Name
        const nameInput = page.locator('input[placeholder="Principal or Representative Name"]');
        await nameInput.fill('Playwright Tester');

        // Select Role
        const roleSelect = page.locator('select');
        await roleSelect.selectOption({ label: 'Family Office Executive' });
        
        // Fill Email 
        // Note: Contact page has type="email" and type="tel"
        const emailInput = page.locator('input[type="email"]');
        await emailInput.fill('playwright@continental.test');

        // Fill Phone
        const phoneInput = page.locator('input[type="tel"]');
        await phoneInput.fill('+1 234 567 8900');

        // Fill Textarea
        const natureTextarea = page.locator('textarea');
        await natureTextarea.fill('This is an automated submission for testing the secure inquiry functionality.');
        
        // Submit
        const submitButton = formSection.locator('button', { hasText: 'Submit Secure Inquiry' });
        await submitButton.click();
        
        // In the current implementation ContactSection prevents default, so we just ensure
        // it doesn't navigate away and we can verify some client-side interaction here
        // But since there's no actual "Success Message" state built for Contact page
        // we'll just verify the button remains or form doesn't crash the page.
        await expect(page).toHaveURL(/.*contact/);
        await expect(formSection).toBeVisible();
    });

    test('Contact page displays HQ Location info', async ({ page }) => {
        await page.goto('/contact');

        // The Sidney HQ text
        const sidneyLoc = page.locator('h4', { hasText: 'Sydney' });
        await expect(sidneyLoc).toBeVisible();

        const roleText = page.locator('span', { hasText: 'Global Headquarters' });
        await expect(roleText).toBeVisible();
    });
});
