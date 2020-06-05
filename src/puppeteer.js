const puppeteer = require('puppeteer');

const sieg = (async () => {
  const browser = await puppeteer.launch(); // Joga o puppeter dentro de 'browser'
  const page = await browser.newPage(); // Cria uma página dentro do 'browser'
  await page.goto('http://sieg.com/'); // 
  await page.screenshot({ path: 'thumb3.png' });

  await browser.close();
}) 

sieg();

/* sieg@greenpeople.com.br
Green@sap */
