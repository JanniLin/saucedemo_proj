export const config = {
  runner: "local",

  specs: ["./../tests/**/*.tests.js"],

  maxInstances: 10,

  capabilities: [
    {
      maxInstances: 5,
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--headless", "--disable-gpu"],
      },
    },
    {
      maxInstances: 5,
      browserName: "MicrosoftEdge",
      "ms:edgeOptions": {
        args: ["--headless", "--disable-gpu"],
      },
    },
  ],
  service: ["chromedriver", "edgedriver"],

  logLevel: "warn",

  bail: 0,

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 2,

  framework: "mocha",

  // reporters: ['dot'],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },

  before: () => {
    browser.execute(() => {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .getRegistrations()
          .then(function (registrations) {
            for (let registration of registrations) {
              registration.unregister();
            }
          });
      }
    });
  },
};
