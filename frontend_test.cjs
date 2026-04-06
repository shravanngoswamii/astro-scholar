const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:4321/Academic-Portfolio/blog/nietzsche-perspectivism');

  // Wait for the TOC to be rendered
  await page.waitForSelector('.prose > ul:first-of-type');

  await page.screenshot({ path: 'toc_screenshot.png', fullPage: true });
  console.log("Screenshot saved to toc_screenshot.png");

  await browser.close();
})();
