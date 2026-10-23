const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 30 * 1000,
  testDir: './tests',
  fullyParallel: true,
  retries: 1,
  workers: 1,

  reporter: [
    ['html'],
    ['allure-playwright', { resultsDir: 'allure-results' }],
    ['list']
  ],

  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    permissions: ['geolocation'],
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
