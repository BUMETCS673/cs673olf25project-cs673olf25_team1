/*
AI-generated-code: 15% (tool: Playwright, functions: openSidebar, Used AI to help locate the elements on the app
AI chat link: N/A this was generated before Iteration 1 submission)
Human code: 85% (tool: Playwright, Tests: 1-5)
Framework generated code: 0%
*/
import { test, expect, Page } from '@playwright/test';
import { login } from './helpers';


// Open sidebar if needed 
async function openSidebar(page: Page) {
  const navVisible = await page.locator('nav:visible, [role="navigation"]:visible').isVisible().catch(() => false);
  if (!navVisible) {
    await page.locator('button').first().click().catch(() => {});
    await page.locator('nav:visible, [role="navigation"]:visible').waitFor({ state: 'visible', timeout: 5000 });
  }
}

const BASE_URL = process.env.BASE_URL || 'http://localhost:8000';

const communityLink = (page: Page) =>
  page.locator('nav:visible a[href$="/community"]').first();

const aiLink = (page: Page) =>
  page.locator('nav:visible a[href$="/ai"]').first();


// AT-1: Sidebar shows the Community and AI tab
test('AT-1: Sidebar shows Community and AI', async ({ page }) => {
  await login(page);
  //await page.goto(BASE_URL + '/');
  await openSidebar(page);

  await expect(communityLink(page)).toBeVisible();
  await expect(aiLink(page)).toBeVisible();
});

// AT-2: Clicking the AI tab goes to the AI page
test('AT-2: Click AI goes to AI page', async ({ page }) => {
  await login(page);
  //await page.goto(BASE_URL + '/');
  await openSidebar(page);

  await aiLink(page).click();
  await expect(page).toHaveURL(/\/ai(?:$|[?#])/);
});

// AT-3: Clicking the Community tab goes to the Community page
test('AT-3: Click Community goes back to Community page', async ({ page }) => {
  await login(page);
  await page.goto(BASE_URL + '/community').catch(async () => { await page.goto(BASE_URL + '/'); });
  await openSidebar(page);

  await communityLink(page).click();
  await expect(page).toHaveURL(/(?:\/community|\/$)/);
});

// AT-4: Directly go to /ai
test('AT-4: Direct /ai shows AI content', async ({ page }) => {
  await login(page);
  await page.goto(BASE_URL + '/ai').catch(async () => { await page.goto(BASE_URL + '/'); });
  await expect(page).toHaveURL(/\/ai(?:$|[?#])/);
});

// AT-5: Directly go to /community
test('AT-5: Direct root shows Community content', async ({ page }) => {
  await login(page);
  await page.goto(BASE_URL + '/');
  await expect(page).toHaveURL(/(?:\/community|\/$)/);
});