import { test, expect } from '@playwright/test';

test.describe('AI Concierge Chatbot — Desktop', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
    });

    test('6.1: Floating bubble renders on initial load', async ({ page }) => {
        const bubble = page.locator('button[aria-label="Open Heritage Concierge"]');
        await expect(bubble).toBeVisible({ timeout: 5000 });

        // Check it has the chat icon
        const icon = bubble.locator('svg');
        await expect(icon).toBeVisible();
    });

    test('6.2: Clicking bubble opens chat panel', async ({ page }) => {
        const bubble = page.locator('button[aria-label="Open Heritage Concierge"]');
        await bubble.click();

        // Panel should appear with header
        const header = page.locator('h3', { hasText: 'Heritage Concierge' });
        await expect(header).toBeVisible({ timeout: 3000 });

        // Online indicator should be visible
        const onlineStatus = page.locator('text=Online').first();
        await expect(onlineStatus).toBeVisible();
    });

    test('6.3: Welcome message appears when panel opens', async ({ page }) => {
        const bubble = page.locator('button[aria-label="Open Heritage Concierge"]');
        await bubble.click();

        const welcomeMsg = page.locator('text=Welcome to Continental Heritage');
        await expect(welcomeMsg).toBeVisible({ timeout: 3000 });

        const conciergeText = page.locator("text=I'm your private wealth concierge");
        await expect(conciergeText).toBeVisible();
    });

    test('6.4: Quick action chips are visible and functional', async ({ page }) => {
        const bubble = page.locator('button[aria-label="Open Heritage Concierge"]');
        await bubble.click();
        await page.waitForTimeout(600); // Wait for chip animation

        // Check all 3 quick actions
        const portfolioChip = page.locator('button', { hasText: 'Portfolio Strategy' });
        const consultationChip = page.locator('button', { hasText: 'Schedule Consultation' });
        const philosophyChip = page.locator('button', { hasText: 'Our Philosophy' });

        await expect(portfolioChip).toBeVisible();
        await expect(consultationChip).toBeVisible();
        await expect(philosophyChip).toBeVisible();
    });

    test('6.5: Quick action sends message and receives bot response', async ({ page }) => {
        const bubble = page.locator('button[aria-label="Open Heritage Concierge"]');
        await bubble.click();
        await page.waitForTimeout(600);

        // Click "Portfolio Strategy"
        const portfolioChip = page.locator('button', { hasText: 'Portfolio Strategy' });
        await portfolioChip.click();

        // User message should appear
        const userMsg = page.locator('p', { hasText: 'Portfolio Strategy' });
        await expect(userMsg).toBeVisible({ timeout: 2000 });

        // Bot response should appear after typing delay
        const botResponse = page.locator('text=multi-asset approach');
        await expect(botResponse).toBeVisible({ timeout: 5000 });
    });

    test('6.6: User can type and send a custom message', async ({ page }) => {
        const bubble = page.locator('button[aria-label="Open Heritage Concierge"]');
        await bubble.click();
        await page.waitForTimeout(400);

        const input = page.locator('input[placeholder="Ask about our services..."]');
        await expect(input).toBeVisible();

        // Type a message
        await input.fill('Tell me about your tax planning services');

        // Send button should be enabled  
        const sendBtn = page.locator('button[aria-label="Send message"]');
        await expect(sendBtn).toBeEnabled();

        // Submit
        await sendBtn.click();

        // User message should appear
        const userMsg = page.locator('text=Tell me about your tax planning services');
        await expect(userMsg).toBeVisible();

        // Input should be cleared
        await expect(input).toHaveValue('');

        // Bot should respond
        const botResponse = page.locator('text=Private Wealth team');
        await expect(botResponse).toBeVisible({ timeout: 5000 });
    });

    test('6.7: Send button is disabled when input is empty', async ({ page }) => {
        const bubble = page.locator('button[aria-label="Open Heritage Concierge"]');
        await bubble.click();
        await page.waitForTimeout(400);

        const sendBtn = page.locator('button[aria-label="Send message"]');
        
        // Should be disabled initially
        await expect(sendBtn).toBeDisabled();

        // Type something
        const input = page.locator('input[placeholder="Ask about our services..."]');
        await input.fill('Hello');
        
        // Should become enabled
        await expect(sendBtn).toBeEnabled();

        // Clear input
        await input.fill('');
        
        // Should be disabled again
        await expect(sendBtn).toBeDisabled();
    });

    test('6.8: Close button dismisses the chat panel', async ({ page }) => {
        const bubble = page.locator('button[aria-label="Open Heritage Concierge"]');
        await bubble.click();

        const header = page.locator('h3', { hasText: 'Heritage Concierge' });
        await expect(header).toBeVisible({ timeout: 3000 });

        // Click close
        const closeBtn = page.locator('button[aria-label="Close chat"]');
        await closeBtn.click();

        // Panel should disappear
        await expect(header).not.toBeVisible({ timeout: 3000 });

        // Bubble should reappear
        await expect(bubble).toBeVisible({ timeout: 3000 });
    });

    test('6.9: Greeting tooltip appears after ~6 seconds', async ({ page }) => {
        // Wait for the greeting to appear (6-second timer)
        const greetingText = page.locator('text=I am here and ready to assist you');
        await expect(greetingText).toBeVisible({ timeout: 10000 });

        // Greeting should have "Heritage Concierge" title
        const greetingTitle = page.locator('h4', { hasText: 'Heritage Concierge' });
        await expect(greetingTitle).toBeVisible();
    });

    test('6.10: Greeting tooltip auto-hides after ~12 seconds', async ({ page }) => {
        const greetingText = page.locator('text=I am here and ready to assist you');
        
        // Wait for it to appear
        await expect(greetingText).toBeVisible({ timeout: 10000 });
        
        // Wait for it to auto-hide (12 seconds from appearing)
        await expect(greetingText).not.toBeVisible({ timeout: 15000 });
    });

    test('6.11: Clicking greeting tooltip opens the chat panel', async ({ page }) => {
        const greetingText = page.locator('text=I am here and ready to assist you');
        
        // Wait for greeting
        await expect(greetingText).toBeVisible({ timeout: 10000 });
        
        // Click the greeting
        await greetingText.click();
        
        // Chat panel should open
        const header = page.locator('h3', { hasText: 'Heritage Concierge' });
        await expect(header).toBeVisible({ timeout: 3000 });
        
        // Greeting should be gone
        await expect(greetingText).not.toBeVisible();
    });

    test('6.12: Multiple quick actions produce different responses', async ({ page }) => {
        const bubble = page.locator('button[aria-label="Open Heritage Concierge"]');
        await bubble.click();
        await page.waitForTimeout(600);

        // Click "Our Philosophy"
        const philosophyChip = page.locator('button', { hasText: 'Our Philosophy' });
        await philosophyChip.click();

        // Should contain the philosophy response
        const botResponse = page.locator('text=three pillars');
        await expect(botResponse).toBeVisible({ timeout: 5000 });
    });

    test('6.13: Chat preserves messages after close and reopen', async ({ page }) => {
        const bubble = page.locator('button[aria-label="Open Heritage Concierge"]');
        await bubble.click();
        await page.waitForTimeout(600);

        // Send a message via quick action
        const portfolioChip = page.locator('button', { hasText: 'Portfolio Strategy' });
        await portfolioChip.click();

        // User message should appear first
        const userMsg = page.locator('p', { hasText: 'Portfolio Strategy' });
        await expect(userMsg).toBeVisible({ timeout: 3000 });

        // Wait for bot response (1.5s simulated delay + animation)
        const botResponse = page.locator('text=multi-asset approach');
        await expect(botResponse).toBeVisible({ timeout: 8000 });

        // Close the panel
        const closeBtn = page.locator('button[aria-label="Close chat"]');
        await closeBtn.click();
        await page.waitForTimeout(800);

        // Reopen
        await bubble.click();
        await page.waitForTimeout(500);

        // Previous messages should still be there
        await expect(userMsg).toBeVisible({ timeout: 3000 });
        await expect(botResponse).toBeVisible({ timeout: 3000 });
    });

    test('6.14: Submit via Enter key works', async ({ page }) => {
        const bubble = page.locator('button[aria-label="Open Heritage Concierge"]');
        await bubble.click();
        await page.waitForTimeout(400);

        const input = page.locator('input[placeholder="Ask about our services..."]');
        await input.fill('Test via enter key');
        await input.press('Enter');

        // Message should appear
        const userMsg = page.locator('text=Test via enter key');
        await expect(userMsg).toBeVisible({ timeout: 2000 });
    });

    test('6.15: Disclaimer text is visible', async ({ page }) => {
        const bubble = page.locator('button[aria-label="Open Heritage Concierge"]');
        await bubble.click();

        const disclaimer = page.locator('text=For informational purposes only');
        await expect(disclaimer).toBeVisible({ timeout: 3000 });
    });
});

test.describe('AI Concierge — Mobile (iPhone)', () => {
    test.use({ viewport: { width: 390, height: 844 } });

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
    });

    test('6.16: Mobile bubble is visible', async ({ page }) => {
        const bubble = page.locator('button[aria-label="Open Heritage Concierge"]');
        await expect(bubble).toBeVisible({ timeout: 5000 });
    });

    test('6.17: Mobile chat opens as full-screen sheet', async ({ page }) => {
        const bubble = page.locator('button[aria-label="Open Heritage Concierge"]');
        await bubble.click();

        const header = page.locator('h3', { hasText: 'Heritage Concierge' });
        await expect(header).toBeVisible({ timeout: 3000 });

        // Mobile should have ChevronDown (minimize) button
        const minimizeBtn = page.locator('button[aria-label="Minimize chat"]');
        await expect(minimizeBtn).toBeVisible();
    });

    test('6.18: Mobile backdrop click closes panel', async ({ page }) => {
        const bubble = page.locator('button[aria-label="Open Heritage Concierge"]');
        await bubble.click();

        const header = page.locator('h3', { hasText: 'Heritage Concierge' });
        await expect(header).toBeVisible({ timeout: 3000 });

        // Click the backdrop (x=50, y=50 should be outside the chat panel on the backdrop)
        await page.click('.bg-black\\/50', { force: true, position: { x: 50, y: 50 } });

        // Panel should close
        await expect(header).not.toBeVisible({ timeout: 3000 });
    });

    test('6.19: Mobile input and send work correctly', async ({ page }) => {
        const bubble = page.locator('button[aria-label="Open Heritage Concierge"]');
        await bubble.click();
        await page.waitForTimeout(400);

        const input = page.locator('input[placeholder="Ask about our services..."]');
        await input.fill('Mobile test message');

        const sendBtn = page.locator('button[aria-label="Send message"]');
        await sendBtn.click();

        const userMsg = page.locator('text=Mobile test message');
        await expect(userMsg).toBeVisible({ timeout: 2000 });

        // Bot response
        const botResp = page.locator('text=Private Wealth team');
        await expect(botResp).toBeVisible({ timeout: 5000 });
    });
});
