export const config = {
  runner: "local",

  specs: [
    "./test/specs/**/test.home.js"
  ],
  exclude: [
    // 'path/to/excluded/files'
  ],

  before: function (capabilities, specs) {
   
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

  framework: "mocha",

  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
  baseUrl: "http://localhost",
};
