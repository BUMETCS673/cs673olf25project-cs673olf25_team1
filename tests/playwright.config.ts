import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.test' });

const baseURL = process.env.BASE_URL || 'http://localhost:8000';
const frontendPort = Number(new URL(baseURL).port) || 8000;
const apiPort = Number(process.env.API_PORT || 3000);

export default defineConfig({
  // only look tests in ./e2e
  testDir: './e2e',
  testMatch: /.*\.spec\.ts/,
  testIgnore: [
    '**/node_modules/**',
    '**/api/**',
    '**/chit-chat-ui/**'
  ],

  timeout: 30_000,
  expect: { timeout: 5_000 },
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],

  use: {
    baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  // boot both servers
  webServer: [
    {
      command: 'npm run dev:backend',
      port: apiPort,
      reuseExistingServer: !process.env.CI,
      timeout: 120_000
    },
    {
      command: 'npm run dev:frontend',
      port: frontendPort,
      reuseExistingServer: !process.env.CI,
      timeout: 120_000
    }
  ],

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } }
  ]
});
