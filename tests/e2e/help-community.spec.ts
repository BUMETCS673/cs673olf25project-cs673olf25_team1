import { test, expect, Page } from '@playwright/test';
import { login } from './helpers';  

export async function openHelp(page: Page) {
  // Ensure user is on /community
  await expect(page).toHaveURL(/\/community/, { timeout: 10000 });

  // Try multiple possible locators for "Help"
  const possibleSelectors = [
    'role=button[name="Help"]',
    'text=Help',
    'button:has-text("Help")',
    '//button[contains(., "Help")]'
  ];

  let helpButton = page.locator(possibleSelectors[0]);
  let found = false;

  for (const selector of possibleSelectors) {
    helpButton = page.locator(selector);
    if (await helpButton.count() > 0) {
      found = true;
      break;
    }
  }

  if (!found) throw new Error('Help button not found on page.');

  // Scroll to ensure visibility
  try {
    await helpButton.scrollIntoViewIfNeeded();
  } catch {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  // Attempt click; fallback to JS click if Playwright rejects
  try {
    await helpButton.click({ timeout: 5000 });
  } catch {
    const el = await helpButton.elementHandle();
    if (el) await page.evaluate((e) => (e as HTMLElement).click(), el);
    else throw new Error('Help button click failed — element handle missing.');
  }

  // Wait for FAQ header
  const faqHeader = page.locator('h2', { hasText: /^FAQ$/i });
  await faqHeader.waitFor({ state: 'visible', timeout: 10_000 });
  await expect(faqHeader).toBeVisible();


  const searchBox = page.getByPlaceholder('Search FAQs...');
  await expect(searchBox).toBeVisible({ timeout: 10_000 });
}

test.describe('Help Dialog', () => {

  // AT-1 – Help button opens FAQ dialog
  test('AT-1: Help dialog opens when clicking Help button', async ({ page }) => {
    await login(page);
    await openHelp(page);
  });

  // AT-2 – FAQ content loads
  test('AT-2: FAQ content loads in dialog', async ({ page }) => {
    await login(page);
    await openHelp(page);
    await expect(page.getByText('How do I send a message?')).toBeVisible();
    await expect(page.getByText('How do I know if others are typing?')).toBeVisible();
    await expect(page.getByText('How do I report a problem?')).toBeVisible();
  });

  // AT-3 – Search filters results
  test('AT-3: Search filters FAQ content', async ({ page }) => {
    await login(page);
    await openHelp(page);
    const search = page.getByPlaceholder('Search FAQs');
    await search.fill('typing');
    await expect(page.getByText('How do I know if others are typing?')).toBeVisible();
    // Make sure other FAQs are hidden
    await expect(page.getByText('How do I send a message?')).toBeHidden();
  });

  // AT-4 – Search is case insensitive
  test('AT-4: Search case insensitive', async ({ page }) => {
    await login(page);
    await openHelp(page);
    const search = page.getByPlaceholder('Search FAQs');
    await search.fill('SEND');
    await expect(page.getByText('How do I send a message?')).toBeVisible();
  });

  // AT-5 – Close button hides dialog
  test('AT-5: Close button hides FAQ dialog', async ({ page }) => {
    await login(page);
    await openHelp(page);
    //await page.getByRole('button', { name: 'Close' }).click();
    const closeButton = page.locator('button', { hasText: /^Close$/i });
    await expect(closeButton).toBeVisible({ timeout: 10_000 });
    await closeButton.click();
    await expect(page.getByRole('heading', { name: 'FAQ' })).toBeHidden();
  });

  // AT-6 – ESC closes dialog
  test('AT-6: Pressing ESC closes FAQ dialog', async ({ page }) => {
    await login(page);
    await openHelp(page);
    await page.keyboard.press('Escape');
    await expect(page.getByRole('heading', { name: 'FAQ' })).toBeHidden();
  });

  // AT-7 – Re-open after close still works
  test('AT-7: Re-open works after closing', async ({ page }) => {
    await login(page);
    await openHelp(page);
    //await page.getByRole('button', { name: 'Close' }).click();
    const closeButton = page.locator('button', { hasText: /^Close$/i });
    await expect(closeButton).toBeVisible({ timeout: 10_000 });
    await closeButton.click();
    await openHelp(page);
    await expect(page.getByText('How do I send a message?')).toBeVisible();
  });

  // AT-8 – Search no results produces empty state
  test('AT-8: Search yields no results message', async ({ page }) => {
    await login(page);
    await openHelp(page);
    const search = page.getByPlaceholder('Search FAQs');
    await search.fill('nonexistentterm');
    await expect(page.getByText(/no results found/i)).toBeVisible();
  });

  // AT-9 – Dialog handles viewport resize
  test('AT-9: Dialog is usable on mobile viewport', async ({ page }) => {
    await login(page);
    await page.setViewportSize({ width: 375, height: 667 });
    await openHelp(page);
    // scroll inside dialog if needed
    await expect(page.getByRole('heading', { name: 'FAQ' })).toBeVisible();
  });

});