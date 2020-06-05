const puppeteer = require('puppeteer');

let scrape = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://cofre.sieg.com/xml?year=2020&month=6&ordertype=1&ojbname=CNPJemit')

  const result = await page.evaluate(() => {
    const books = []
    document.querySelectorAll('.odd')
    .forEach(book => books.push(book.getAttribute('alt')))

    return books
  })

  browser.close()
  return result
} 

scrape().then((value) => {
    console.log(value)
}) 

let scrape = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://cofre.sieg.com/xml?year=2020&month=6&ordertype=1&ojbname=CNPJemit')
  const result = await page.$$eval('form ', titles =>
    titles.map(titles => titles.getAttribute('alt'))
  )
  browser.close()
  return result
};

scrape().then((value) => {
  console.log(value);
}) 

  let scrape = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://books.toscrape.com/')
  page.click("h3 > a")
  await page.waitForNavigation()
  await page.screenshot({path: 'exemplo3.png'})
  const result = await page.evaluate(() => {
      const books = {}
      document.querySelectorAll('div.product_main')
              .forEach(book => {
                    books.title = book.getElementsByTagName('h1')[0].innerText;
                    books.price = book.getElementsByClassName('price_color')[0].innerText;
                })
    return books
  })
  
  browser.close()
  return result
};
scrape().then((value) => {
    console.log(value)
}) 
