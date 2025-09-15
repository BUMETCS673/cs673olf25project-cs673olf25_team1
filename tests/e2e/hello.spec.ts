import { test, expect } from '@playwright/test';

test('app loads at base URL', async ({ page, context }) => {
  await page.goto('/');
  await expect(page).toHaveURL(/localhost:8000/);
  await expect(page.locator('#root')).toBeVisible(); // Vite React root
  context.on('console', msg => {
    if (msg.type() === 'error') console.error('[console.error]', msg.text());
  });
});
