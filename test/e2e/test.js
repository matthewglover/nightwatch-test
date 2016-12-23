const imgPath = require('../../utils/img_path');

module.exports = {
  'Guinea Pig Assert Title': (browser) => {
    browser
      .url('https://saucelabs.com/test/guinea-pig')
      .waitForElementVisible('body')
      .assert.title('I am a page title - Sauce Labs')
      .saveScreenshot(imgPath(browser, 'guinea-pig-test.png'))
      .end();
  }
};
