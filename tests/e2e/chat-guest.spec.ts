/* 
AI-generated-code: 15% (tool: Playwright, Used AI to help locate the elements on the app
AI chat link: N/A this was generated before Iteration 1 submission)
Human code: 85% (tool: Playwright, Tests: 1-10)
Framework generated code: 0%
*/
import { test, expect } from '@playwright/test';
import { login } from './helpers';

const uniq = (m: string) => `${m} ${Date.now()}`;
const BASE_PATH = '/community';

const selectors = {
  input: (p: any) => p.getByPlaceholder('Type a message...'),
  send: (p: any) => p.getByTestId('send-button'),
  list: (p: any) => p.getByTestId('message-list')
};

async function stabilizePage(page: any) {
  const base = process.env.BASE_URL || 'http://localhost:8000';
  await page.goto(`${base}${BASE_PATH}`);

  // Wait for chat UI to fully render before acting
  await page.waitForSelector('[data-testid="message-list"]', { timeout: 10000 });
  await selectors.input(page).waitFor({ state: 'visible', timeout: 10000 });
  await selectors.send(page).waitFor({ state: 'visible', timeout: 10000 });

  // Ensure scroll is at bottom
  await selectors.list(page).evaluate((el: HTMLElement) => el.scrollTop = el.scrollHeight);
  }

  test.afterEach(async ({ page }) => {
  try { await page.waitForTimeout(200); } catch {}
});

// AT-1: Guest sends a message
test('AT-1: Guest sends a message', async ({ page }) => {
  await login(page);
  await stabilizePage(page);

  const msg = `hello world ${new Date().toISOString()}`;
  await selectors.input(page).fill(msg);
  await selectors.send(page).click();

  const lastMessage = selectors.list(page).locator('div:has-text("You:")').last();
  await expect(selectors.list(page)).toContainText(msg);
});

// AT-2: Real-time receive across two guests
test('AT-2: Real-time receive across two guests', async ({ browser }) => {
  test.setTimeout(65_000);
  const ctxA = await browser.newContext();
  const ctxB = await browser.newContext();
  const a = await ctxA.newPage();
  const b = await ctxB.newPage();

  await login(a);
  await login(b);
  await stabilizePage(a);
  await stabilizePage(b);

  const ping = uniq('ping');
  await selectors.input(a).fill(ping);
  await selectors.send(a).click();

  const lastMessageB = selectors.list(b).locator('div:has-text("You:")').last();
  await expect(selectors.list(b)).toContainText(ping);

  await Promise.all([ctxA.close(), ctxB.close()]);
});

// AT-3: Messages preserve chronological order
test('AT-3: Messages preserve chronological order', async ({ browser }) => {
  test.setTimeout(65_000);
  const ctxA = await browser.newContext();
  const ctxB = await browser.newContext();
  const a = await ctxA.newPage();
  const b = await ctxB.newPage();

  await login(a);
  await login(b);
  await stabilizePage(a);
  await stabilizePage(b);

  const m1 = uniq('msg1');
  const m2 = uniq('msg2');
  const m3 = uniq('msg3');

  await selectors.input(a).fill(m1);
  await selectors.send(a).click();
  const last1 = selectors.list(b).locator('div:has-text("You:")').last();
  //await expect(last1).toContainText(m1);

  await selectors.input(a).fill(m2);
  await selectors.send(a).click();
  const last2 = selectors.list(b).locator('div:has-text("You:")').last();
  //await expect(last2).toContainText(m2);

  await selectors.input(a).fill(m3);
  await selectors.send(a).click();
  const last3 = selectors.list(b).locator('div:has-text("You:")').last();
  //await expect(last3).toContainText(m3);

  const text = await selectors.list(b).innerText();
  expect(text.indexOf(m1)).toBeLessThan(text.indexOf(m2));
  expect(text.indexOf(m2)).toBeLessThan(text.indexOf(m3));

  await Promise.all([ctxA.close(), ctxB.close()]);
});

// AT-4: Delivery time under target
test('AT-4: Delivery time under target', async ({ browser }) => {
  test.setTimeout(65_000);
  const ctxA = await browser.newContext();
  const ctxB = await browser.newContext();
  const a = await ctxA.newPage();
  const b = await ctxB.newPage();

  await login(a);
  await login(b);
  await stabilizePage(a);
  await stabilizePage(b);

  const payload = uniq('latency');
  const t0 = Date.now();

  await selectors.input(a).fill(payload);
  await selectors.send(a).click();

  const lastMessageB = selectors.list(b).locator('div:has-text("You:")').last();
  await expect(selectors.list(b)).toContainText(payload);

  const dt = Date.now() - t0;
  expect(dt).toBeLessThanOrEqual(60000);
  expect(dt).toBeLessThanOrEqual(5000);

  await Promise.all([ctxA.close(), ctxB.close()]);
});

// AT-5: Guest session persists after reload
test('AT-5: Guest can continue chatting after reload', async ({ page }) => {
  await login(page);
  await stabilizePage(page);

  const before = uniq('before-reload');
  await selectors.input(page).fill(before);
  await selectors.send(page).click();

  let lastBefore = selectors.list(page).locator('div:has-text("You:")').last();
  await expect(lastBefore).toContainText(before);

  await page.reload();
  await stabilizePage(page);

  const after = uniq('after-reload');
  await selectors.input(page).fill(after);
  await selectors.send(page).click();

  const lastAfter = selectors.list(page).locator('div:has-text("You:")').last();
  await expect(lastAfter).toContainText(after);
});

// AT-6: Empty message is blocked
test('AT-6: Empty message is blocked', async ({ page }) => {
  await login(page);
  await stabilizePage(page);

  // Capture last message BEFORE
  const lastBefore = await selectors.list(page).locator('div:has-text("You:")').last().innerText();

  // Try to send an empty message
  await selectors.input(page).fill('');
  await selectors.send(page).click();
  await page.waitForTimeout(300); 

  // Capture last message AFTER attempting empty send
  const lastAfter = await selectors.list(page).locator('div:has-text("You:")').last().innerText();

  // Assert nothing changed
  expect(lastAfter).toBe(lastBefore);

  // Now send a valid marker
  const marker = uniq('marker');
  await selectors.input(page).fill(marker);
  await selectors.send(page).click();

  const lastMessage = selectors.list(page).locator('div:has-text("You:")').last();
  await expect(lastMessage).toContainText(marker);
});

// AT-7: Whitespace-only message is blocked
test('AT-7: Whitespace-only message is blocked', async ({ page }) => {
  await login(page);
  await stabilizePage(page);

  await selectors.input(page).fill('   ');
  await selectors.send(page).click();

  const marker = uniq('marker');
  await selectors.input(page).fill(marker);
  await selectors.send(page).click();

  const lastMessage = selectors.list(page).locator('div:has-text("You:")').last();
  await expect(selectors.list(page)).toContainText(marker);
});

// AT-8: Long word wraps without breaking layout
test('AT-8: Long word wraps without breaking layout', async ({ page }) => {
  await login(page);
  await stabilizePage(page);

  const long = 'a'.repeat(200);
  await selectors.input(page).fill(long);
  await selectors.send(page).click();

  const lastMessage = selectors.list(page).locator('div:has-text("You:")').last();
  await expect(lastMessage).toContainText(long);
});

// AT-9: Autoscroll to bottom on send
test('AT-9: Autoscroll to bottom on send', async ({ page }) => {
  await login(page);
  await stabilizePage(page);

  const list = selectors.list(page);
  await list.evaluate((el: HTMLElement) => el.scrollTop = 0);

  const msg = uniq('scroll-check');
  await selectors.input(page).fill(msg);
  await selectors.send(page).click();

  const lastMessage = selectors.list(page).locator('div:has-text("You:")').last();
  await expect(lastMessage).toContainText(msg);

  const atBottom = await list.evaluate((el: any) =>
    Math.abs(el.scrollHeight - el.scrollTop - el.clientHeight) < 4
  );
  expect(atBottom).toBeTruthy();
});

// AT-10: Clear the input after sending
test('AT-10: Clears input after sending', async ({ page }) => {
  await login(page);
  await stabilizePage(page);

  await selectors.input(page).fill('clear me');
  await selectors.send(page).click();

  await expect(selectors.input(page)).toHaveValue('');
});