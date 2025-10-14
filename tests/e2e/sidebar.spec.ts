/*
AI-generated-code: 15% (tool: Playwright, functions: openSidebar, Used AI to help locate the elements on the app
AI chat link: N/A this was generated before Iteration 1 submission)
Human code: 85% (tool: Playwright, Tests: 1-5)
Framework generated code: 0%
*/
import { test, expect, Page } from '@playwright/test';
import { login } from './helpers';

export async function openSidebar(page: Page) {
  const nav = page.locator('nav:visible, [role="navigation"]:visible');

  if (await nav.isVisible()) return;
  const toggleButton = page.locator('[data-testid="MenuIcon"], button[aria-label*="menu"]').first();

  try {
    await toggleButton.click();
    await nav.waitFor({ state: 'visible', timeout: 5000 });
  } catch {
    console.warn('Sidebar toggle did not open nav — skipping.');
  }
}

// Locators for sidebar links
const communityLink = (page: Page) =>
  page.locator('nav:visible a[href$="/community"]').first();

const aiLink = (page: Page) =>
  page.locator('nav:visible a[href$="/ai"]').first();

const profileLink = (page: Page) =>
  page.locator('nav:visible a[href$="/profile"]').first();

const logoutLink = (page: Page) =>
  page.locator('nav:visible a:has-text("Logout")').first();

const BASE_URL = process.env.BASE_URL || 'http://localhost:8000';

test('AT-1: Sidebar shows Community and AI tabs', async ({ page }) => {
    await login(page);
    await expect(page.getByRole('link', { name: 'Community' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'AI Chat' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Profile' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
});

test('AT-2: Click AI goes to AI page', async ({ page }) => {
    await login(page);
    await page.getByRole('link', { name: 'AI Chat' }).click();
    await expect(page).toHaveURL(/\/ai(?:$|[?#])/);
});

test('AT-3: Click Community goes to Community page', async ({ page }) => {
    await login(page);
    await page.getByRole('link', { name: 'Community' }).click();
    await expect(page).toHaveURL(/\/community(?:$|[?#])/);
});

test('AT-4: Direct /ai shows AI content', async ({ page }) => {
    await login(page);
    await page.goto(`${BASE_URL}/ai`);
    await expect(page.getByRole('heading', { name: /AI/i })).toBeVisible();
});

test('AT-5: Direct /community shows Community content', async ({ page }) => {
    await login(page);
    await page.goto(`${BASE_URL}/community`);
    await expect(page.getByRole('heading', { name: /Community/i })).toBeVisible();
});

test('AT-6: Click Profile goes to Profile page', async ({ page }) => {
    await login(page);
    await page.getByRole('link', { name: 'Profile' }).click();
    await expect(page).toHaveURL(/\/profile(?:$|[?#])/);
    await expect(page.getByRole('heading', { name: /Profile/i })).toBeVisible();
});

test('AT-7: Click Logout logs out and redirects to Login', async ({ page }) => {
    await login(page);
    await page.getByRole('link', { name: 'Logout' }).click();
    await expect(page).toHaveURL(/\/login(?:$|[?#])/);
    await expect(page.getByRole('heading', { name: /login/i })).toBeVisible();
});