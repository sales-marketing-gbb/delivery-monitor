import { chromium } from 'playwright';

const browser = await chromium.launch({
  headless: true
});

const page = await browser.newPage();

await page.goto('https://example.com', {
  waitUntil: 'domcontentloaded',
  timeout: 30000
});

const title = await page.title();

console.log('PAGE TITLE:', title);

await browser.close();
