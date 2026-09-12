import { chromium } from 'playwright';

const url =
  'https://gofood.co.id/jakarta/restaurant/elud-bakery-gading-2-adc8b697-f030-4f40-840d-4f7e39bab59b';

const browser = await chromium.launch({
  headless: true
});

const context = await browser.newContext({
  locale: 'id-ID',
  timezoneId: 'Asia/Jakarta',
  userAgent:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140 Safari/537.36'
});

const page = await context.newPage();

try {
  await page.goto(url, {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await page.waitForTimeout(5000);

  const title = await page.title();
  const bodyText = await page.locator('body').innerText();

  console.log('PAGE TITLE:');
  console.log(title);

  console.log('\nBODY TEXT:');
  console.log(bodyText.substring(0, 10000));

} catch (error) {
  console.error('ERROR:');
  console.error(error.message);
  process.exitCode = 1;
} finally {
  await browser.close();
}
