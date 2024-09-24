export const config = {
  runner: "local",

  specs: [
    "./test/specs/**/test.home.js"
  ],
  exclude: [
    // 'path/to/excluded/files'
  ],

  before: function (capabilities, specs) {
    browser.maximizeWindow();

    const allureReportPath = path.join(process.cwd(), 'allure-report');
    if (fs.existsSync(allureReportPath)) {
        fs.rmdirSync(allureReportPath, { recursive: true });
    } else {
        console.log('Folder allure report does not exist');
    }
    const allureResultPath = path.join(process.cwd(), 'allure-results');
    if (fs.existsSync(allureResultPath)) {
        fs.rmdirSync(allureResultPath, { recursive: true });
    } else {
        console.log('Folder allure result does not exist');
    }
},

  logLevel: "error",
  bail: 0,
  capabilities: [
    {
      maxInstances: 10,
      browserName: "chrome",
      acceptInsecureCerts: true,
    },
    // {
    //     maxInstances: 10,
    //     browserName: 'firefox',
    //     acceptInsecureCerts: true
    // }
  ],

  waitforTimeout: 50000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [],
  afterTest: async function (test, context, { error, result, duration, passed, retries }) {
    if (error) {
        // Take screenshot
        const screenshot = await browser.takeScreenshot();
        // Attach screenshot to Allure report
        allure.addAttachment('Screenshot on Failure', Buffer.from(screenshot, 'base64'), 'image/png');
    }
},
  framework: "mocha",

  reporters: [
    'spec',        
    ['allure', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: false,
}],
],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
  baseUrl: "http://localhost",
};
