const { chromium } = require('playwright');

(async () => {
    console.log("Launching browser...");
    const browser = await chromium.launch();
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    
    console.log("Navigating to localhost:3000...");
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    
    console.log("Scrolling to trigger animations...");
    // Auto scroll down slowly to trigger framer motion reveals
    await page.evaluate(async () => {
        await new Promise((resolve) => {
            let totalHeight = 0;
            const distance = 100;
            const timer = setInterval(() => {
                const scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;
                if(totalHeight >= scrollHeight - window.innerHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
    
    await page.waitForTimeout(2000); // let final animations settle
    
    console.log("Capturing full page screenshot...");
    await page.screenshot({ path: '/tmp/desktop-view.png', fullPage: true });
    
    await browser.close();
    console.log("Done. Saved to /tmp/desktop-view.png");
})();
