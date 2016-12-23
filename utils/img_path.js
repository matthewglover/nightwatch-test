const SCREENSHOT_PATH = "./screenshots/";

let fileCount = 0;

const padLeft = number =>
  number < 10
    ? `0${number}`
    : String(number);

const getMetaData = ({ platform, browserName, version, name }) =>
  [
    platform,
    browserName || 'any',
    version || 'any',
    name
  ];

const toUrlString = (data) =>
  data
    .join('_')
    .toLowerCase()
    .replace(/\s/g, '');


/**
 * The default is to save screenshots to the root of your project even though
 * there is a screenshots path in the config object above! ... so we need a
 * function that returns the correct path for storing our screenshots.
 * While we're at it, we are adding some meta-data to the filename, specifically
 * the Platform/Browser where the test was run and the test (file) name.
 */
const imgPath = (browser, fileName) =>
  [
    SCREENSHOT_PATH,
    toUrlString(getMetaData(browser.options.desiredCapabilities)),
    fileName
  ].join('_');

module.exports = imgPath;
