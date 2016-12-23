require('colors');
const fs = require('fs');
const seleniumDownload = require('selenium-download');

const BINPATH = './bin/';


const exists = (err, stat) => err || !stat || stat.size < 1;

// Check if selenium.jar in bin path
fs.stat(`${BINPATH}selenium.jar`, (err, stat) => {

  if (!exists(err, stat)) {
    return console.log(`Selenium & Chromedirever already downloaded to: ${BINPATH}`.yellow);
  }

  seleniumDownload.ensure(BINPATH, (error) => {
    if (error) throw new Error(error);
    console.log(`✔ Selenium & Chromedriver downloaded to: ${BINPATH}`.green);
  });
});
