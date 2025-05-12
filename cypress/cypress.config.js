const { defineConfig } = require('cypress')


module.exports = defineConfig({
  defaultCommandTimeout: 60000,
  screenshotsFolder: 'screenshots',
  downloadsFolder: 'downloads',
  fixturesFolder: 'src/fixtures',
  video: false,
  pageLoadTimeout: 60000,
  requestTimeout: 60000,
  viewportHeight: 900,
  viewportWidth: 1440,
  scrollBehavior: 'nearest',
  trashAssetsBeforeRuns: false,
  chromeWebSecurity: false,
  retries: {
    runMode: 2,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
    baseUrl: 'http://localhost:3000/',
    supportFile: 'src/support/index.js',
    specPattern: 'src/tests/**/*.spec.js',
  },
  env: {
    graphqlEndPoint: 'https://www.aemshop.net/graphql',
    giftCardA: '000Y7YLECJ34',
    giftCardB: '00DW3UNWPPVE',
    giftCardC: '00FNX8SEWWND',
    productUrlWithOptions: '/products/cypress-configurable-product-latest/CYPRESS456?optionsUIDs=Y29uZmlndXJhYmxlLzI3OS8zOQ%3D%3D',
    stateShippingId: 'TX,171',
    stateBillingId: 'NY,129',
    productImageName: '/ADB150.jpg'
    // staging env
    // giftCardStaging: '00GO12SK6WF3',
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
});
