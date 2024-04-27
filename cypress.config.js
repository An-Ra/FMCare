const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      //..
    },
    baseUrl: 'https://opentrolley.co.id'
  },
  //Folders/ Files
  downloadsFolder: 'cypress/downloads',
  fixturesFolder: 'cypress/fixtures',
  screenshotsFolder : 'cypress/screenshots',
  //Viewport  (Override with cy.viewport() command)
  viewportHeight: 800,   //Default height in pixels for the application under tests' viewport. 
  viewportWidth: 1200,  //Default width in pixels for the application under tests' viewport.
  //Timeouts
  defaultCommandTimeout : 60000, //Time, in milliseconds, to wait until most DOM based commands are considered timed out.
});
