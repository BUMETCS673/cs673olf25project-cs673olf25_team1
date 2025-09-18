import { test, expect } from '@playwright/test';

// Use environment variables to determine service hostnames
const BASE_URL = process.env.BASE_URL || 'http://frontend';
const API_URL = process.env.API_URL || 'http://backend:5000';

test('app loads at base URL', async ({ page, context }) => {
  await page.goto(BASE_URL + '/');
  await expect(page.locator('#root')).toBeVisible();
  const response = await page.request.get(API_URL + '/health');
  expect(response.status()).toBe(200);
  context.on('console', msg => {
    if (msg.type() === 'error') console.error('[console.error]', msg.text());
  });
});