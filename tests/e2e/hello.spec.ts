import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://localhost:8000';
const API_URL = process.env.API_URL || 'http://localhost:3000';

test('app loads at base URL and backend is alive', async ({ page, request }) => {
  // Check frontend
  await page.goto(BASE_URL + '/');
  await expect(page.locator('#root')).toBeVisible();

  // Check backend is alive via GET /
  const response = await request.get(API_URL + '/');
  expect(response.status()).toBe(200);  // passes if backend responds
});