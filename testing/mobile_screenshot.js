const { chromium } = require('playwright');
(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext({
        viewport: { width: 390, height: 844 }, // iPhone 13 Pro dimensions
        deviceScaleFactor: 3,
        isMobile: true,
        hasTouch: true,
    });
    const page = await context.newPage();
    await page.goto('http://localhost:3000');
    
    // Scroll a bit to clear initial animations if needed
    await page.waitForTimeout(2000);
    await page.screenshot({ path: '/tmp/mobile-hero.png' });

    await page.evaluate(() => window.scrollTo(0, 800));
    await page.waitForTimeout(1000);
    await page.screenshot({ path: '/tmp/mobile-about.png' });

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);
    await page.screenshot({ path: '/tmp/mobile-footer.png', fullPage: true });

    await browser.close();
})();
