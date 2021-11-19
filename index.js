const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://en.wikipedia.org/wiki/Count_of_St._Germain');
  await page.screenshot({path: 'wiki.png'});
  //await browser.waitForTarget(() => false)
  //
  const result = await page.evaluate(() => {
    let headers = document.querySelectorAll('li');
    const headerArray = [...headers];
    const sortedArray = headerArray.map(header => header.innerText);
    return sortedArray.filter(header => header.includes('Op.'));
  });
  console.log(result);
  await browser.close();
})();
