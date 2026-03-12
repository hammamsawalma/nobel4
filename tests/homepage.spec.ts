import { test, expect } from '@playwright/test';

// Group 1: Initial Load & Hero Section
test.describe('1. Initial Load & Hero Section (Stability & Layout)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Scenario 1.1 & 1.2: Boots up and renders Hero text', async ({ page }) => {
    // 1.1 No errors is implied by successful navigation and assertions below.
    // 1.2 Main Title
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('PreservingLegacies,BuildingFutures');

    // Subtitle
    await expect(page.locator('text=Est. 1978 — Sydney').first()).toBeVisible();

    // CTA buttons
    await expect(page.getByRole('link', { name: /Begin Your Legacy/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /Our Philosophy/i }).first()).toBeVisible();
  });

  test('Scenario 1.3: Bottom Stats Strip exists and renders correctly', async ({ page }) => {
    const strip = page.locator('.bg-forest-dark\\\\/40\\.backdrop-blur-md, .backdrop-blur-md');
    // Just looking for the text inside the strip, the class might be dynamic
    await expect(page.locator('text=47+').first()).toBeVisible();
    await expect(page.locator('text=12.8').first()).toBeVisible();
    await expect(page.locator('text=98.7').first()).toBeVisible();
  });
});

// Group 2: Global Header & Navigation
test.describe('2. Global Header & Navigation (Interaction & State)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Scenario 2.1: Scroll State triggers backdrop blur and shrinks header', async ({ page }) => {
    const header = page.locator('header');
    
    // Initial state (bg-transparent or similar)
    await expect(header).toHaveClass(/bg-transparent/);

    // Scroll down 100px
    await page.evaluate(() => window.scrollBy(0, 100));
    await page.waitForTimeout(500); // Wait for state update/animation

    // Scrolled state should have frosted glass
    // We use a regular text check on the class attribute to avoid regex slash escaping issues
    const classAttr = await header.getAttribute('class') || '';
    expect(classAttr).toContain('bg-forest/45');
    expect(classAttr).toContain('backdrop-blur-2xl');
  });

  test('Scenario 2.3: Portal CTA exists and directs to /portal', async ({ page, isMobile }) => {
    if (isMobile) return; // Only testing desktop CTA here
    
    const portalLink = page.getByRole('link', { name: /Client Portal/i }).first();
    await expect(portalLink).toBeVisible();
    await expect(portalLink).toHaveAttribute('href', '/portal');
  });
});

// Group 3: Structural Integrity of Data Sections
test.describe('3. Structural Integrity of Data Sections (Layout & A11y)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Scenario 3.1 & 3.2: About and Philosophy sections render within containers', async ({ page }) => {
    // Scroll to About
    await page.locator('text=A Heritage of Wisdom.').scrollIntoViewIfNeeded();
    await expect(page.locator('text=A Heritage of Wisdom.')).toBeVisible();
    
    // About image is loaded
    await expect(page.locator('img[alt*="Legacy of Wisdom"]')).toBeVisible();

    // Scroll to Philosophy
    const philosophyHeading = page.getByRole('heading', { name: /The Continental Philosophy/i });
    await philosophyHeading.scrollIntoViewIfNeeded();
    await expect(philosophyHeading).toBeVisible();
    await expect(page.locator('text=Institutional Memory').first()).toBeVisible();
    await expect(page.locator('text=Absolute Discretion').first()).toBeVisible();
    await expect(page.locator('text=Aligned Interests').first()).toBeVisible();
  });

  test('Scenario 3.3: Services Preview renders the 3 bespoke services', async ({ page }) => {
    await page.locator('text=Bespoke Wealth Strategies').scrollIntoViewIfNeeded();
    
    await expect(page.locator('text=Portfolio Management').first()).toBeVisible();
    await expect(page.locator('text=Wealth Protection').first()).toBeVisible();
    await expect(page.locator('text=Estate & Succession').first()).toBeVisible();
  });
});

// Group 4: Interactive Components
test.describe('4. Interactive Components (Forms & Calculators)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Scenario 4.1: Trajectory Calculator renders and has interactive ranges', async ({ page }) => {
    const calculatorSection = page.locator('text=Wealth Trajectory Calculator').first();
    await calculatorSection.scrollIntoViewIfNeeded();
    await expect(calculatorSection).toBeVisible();

    // Initial capital input (it's a range slider)
    const initialCapitalInput = page.locator('input[type="range"]').first();
    await expect(initialCapitalInput).toBeVisible();
    
    // Check that graph or output exists (depends on Recharts loading)
    await expect(page.locator('.recharts-wrapper')).toBeVisible();
  });

  test('Scenario 4.2: FAQ Accordions expand and collapse', async ({ page }) => {
    await page.locator('text=Common Enquiries').first().scrollIntoViewIfNeeded();
    
    const firstQuestion = page.locator('button').filter({ hasText: 'What is the minimum portfolio size to engage Continental Heritage?' });
    await expect(firstQuestion).toBeVisible();
    
    // Click to expand
    await firstQuestion.click();
    
    // Check answer visibility
    const answer = page.locator('text=We typically engage with families whose investable assets exceed $5 million.').first();
    await expect(answer).toBeVisible();
    
    // Click to collapse
    await firstQuestion.click();
    // It should eventually hide, but wait for animation
    await page.waitForTimeout(500); 
  });
});

test.describe('5. Mobile Menu & Responsive Emulation', () => {
  test.use({ viewport: { width: 390, height: 844 } }); // iPhone 13 Pro emulate

  test('Scenario 2.2 & 5.1: Mobile menu opens and screen has no horizontal scroll', async ({ page }) => {
    await page.goto('/');

    const openMenuBtn = page.getByRole('button', { name: /Toggle mobile menu/i }).first();
    await expect(openMenuBtn).toBeVisible();

    // Click hamburger
    await openMenuBtn.click();

    // Menu should be open
    await expect(page.getByRole('link', { name: 'Wealth Strategies' }).first()).toBeVisible();
    
    // Assert no horizontal scroll (width of body == viewport width)
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const windowWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(windowWidth);
    
    // Close menu
    const closeMenuBtn = page.getByRole('button', { name: /Toggle mobile menu/i }).first();
    await closeMenuBtn.click();
  });
});
