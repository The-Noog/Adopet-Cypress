const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "fx14va",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: false,
      json: false,
      timestamp: "mmddyyyy_HHMMss"
    }
  },
 
});
