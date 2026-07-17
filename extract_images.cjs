const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.mercurytechnology.in/', { waitUntil: 'networkidle0' });
  
  const images = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img')).map(img => img.src);
  });
  
  console.log(JSON.stringify(images, null, 2));
  
  await browser.close();
})();
