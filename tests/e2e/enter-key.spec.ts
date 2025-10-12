import { test, expect } from '@playwright/test';
import { login } from './helpers';

const selectors = {
  input: (p: any) => p.getByPlaceholder('Type a message...'),
  send: (p: any) => p.getByTestId('send-button'),
  list: (p: any) => p.getByTestId('message-list'),
};

// AT-2: Send valid message with Send button
test('AT-2: should send a message with Send button', async ({ page }) => {
  await login(page);
  const msg = 'Test ' + Date.now();
  await selectors.input(page).fill(msg);
  await selectors.send(page).click();
  await expect(selectors.list(page)).toContainText(msg);
});

// AT-3: Leading/trailing spaces
test('AT-3: should trim leading/trailing spaces', async ({ page }) => {
  await login(page);
  await selectors.input(page).fill('   Test   ');
  await page.keyboard.press('Enter');
  await expect(selectors.list(page)).toContainText('Test');
});

// AT-4: Long message
test('AT-4: should send a long message up to limit', async ({ page }) => {
  const longMessage = 'x'.repeat(500);
  await login(page);
  await selectors.input(page).fill(longMessage);
  await page.keyboard.press('Enter');
  await expect(selectors.list(page)).toContainText(longMessage);
});

// AT-5: Special characters
test('AT-5: should support special characters', async ({ page }) => {
  const msg = 'Test #@$%^&* ' + Date.now();
  await login(page);
  await selectors.input(page).fill(msg);
  await page.keyboard.press('Enter');
  await expect(selectors.list(page)).toContainText(msg);
});

// AT-6: Empty input
test('AT-6: should not send an empty message', async ({ page }) => {
  await login(page);
  const countBefore = await selectors.list(page).locator('div:has-text("You:")').count();
  await selectors.input(page).focus();
  await page.keyboard.press('Enter');
  const countAfter = await selectors.list(page).locator('div:has-text("You:")').count();
  expect(countAfter).toBe(countBefore);
});

// AT-7: Whitespace-only input
test('AT-7: should not send whitespace-only message', async ({ page }) => {
  await login(page);
  const countBefore = await selectors.list(page).locator('div:has-text("You:")').count();
  await selectors.input(page).fill('     ');
  await page.keyboard.press('Enter');
  const countAfter = await selectors.list(page).locator('div:has-text("You:")').count();
  expect(countAfter).toBe(countBefore);
});

// AT-8: Rapid Enter presses
test('AT-8: should not duplicate message on rapid Enter presses', async ({ page }) => {
  const msg = 'Test ' + Date.now();
  await login(page);
  await selectors.input(page).fill(msg);
  await page.keyboard.press('Enter');
  await page.keyboard.press('Enter');
  await page.keyboard.press('Enter');
  const occurrences = await selectors.list(page).locator(`div:has-text("${msg}")`).count();
  expect(occurrences).toBe(1);
});

// AT-9: Shift+Enter creates newline (not send)
test('AT-9: pressing Shift+Enter creates newline in input', async ({ page }) => {
  await login(page);
  await selectors.input(page).fill('Line1');
  await page.keyboard.press('Shift+Enter');
  await page.keyboard.type('Line2');
  const value = await selectors.input(page).inputValue();
  expect(value).toContain('Line1');
  expect(value).toContain('Line2');
});

// AT-10: Enter pressed when input not focused
test('AT-10: pressing Enter outside input does nothing', async ({ page }) => {
  await login(page);
  const countBefore = await selectors.list(page).locator('div:has-text("You:")').count();
  await page.click('body'); // unfocus input
  await page.keyboard.press('Enter');
  const countAfter = await selectors.list(page).locator('div:has-text("You:")').count();
  expect(countAfter).toBe(countBefore);
});

// AT-11: Send, then Enter again with empty input
test('AT-11: pressing Enter again immediately does nothing', async ({ page }) => {
  await login(page);
  const msg = 'Test ' + Date.now();
  await selectors.input(page).fill(msg);
  await page.keyboard.press('Enter');
  const countAfterFirst = await selectors.list(page).locator('div:has-text("You:")').count();
  await page.keyboard.press('Enter'); // now input is empty
  const countAfterSecond = await selectors.list(page).locator('div:has-text("You:")').count();
  expect(countAfterSecond).toBe(countAfterFirst);
});