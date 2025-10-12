/*
AI-generated-code: 15% (tool: Playwright, functions: atBottom, Used AI to help locate the elements on the app
AI chat link: N/A this was generated before Iteration 1 submission)
Human code: 85% (tool: Playwright, Tests: 1-4)
Framework generated code: 0%
*/

import { test, expect, Page, Locator } from '@playwright/test';
import { login } from './helpers';

// selectors used everywhere
const input = (p:any) => p.getByPlaceholder('Type a message...');
const list = (p: Page) => p.locator('[data-testid="message-list"]');
const uniq  = (s:string) => `${s} ${Date.now()}`;

const BASE_URL = process.env.BASE_URL || 'http://localhost:8000';

// Accepts a locator and checks if the scroll is near the bottom
export async function atBottom(locator: Locator): Promise<boolean> {
  return await locator.evaluate((el) => {
    const threshold = 5; // px — allow minor diff due to rounding
    return el.scrollHeight - el.scrollTop - el.clientHeight < threshold;
  });
}

export const send = (page: Page) =>
  page.getByRole('button', { name: 'Send' }).or(page.locator('button').first());

async function stabilize(page: Page) {
  await login(page);

  // Wait for list to be visible
  await expect(list(page)).toBeVisible({ timeout: 10000 });

  // Scroll to bottom
  await list(page).evaluate((el: HTMLElement) => {
    el.scrollTop = el.scrollHeight;
  });

  // Ensure input and send button are also visible
  await input(page).waitFor({ state: 'visible', timeout: 10000 });
  await send(page).waitFor({ state: 'visible', timeout: 10000 });
}

test('AT-01: Auto-scroll when viewer is at bottom', async ({ browser }) => {
  const ctxA = await browser.newContext();
  const ctxB = await browser.newContext();
  const a = await ctxA.newPage();
  const b = await ctxB.newPage();

  await login(a);
  await login(b);

  await expect(list(b)).toBeVisible();

  // Scroll B to bottom
  await list(b).evaluate((el: HTMLElement) => el.scrollTop = el.scrollHeight);
  expect(await atBottom(list(b))).toBeTruthy();

  const msg = uniq('AT: auto-bottom');
  await input(a).fill(msg);
  await send(a).click();

  // Optional: wait for UI
  await b.waitForTimeout(500);

  const text = await list(b).innerText();
  expect(text.includes(msg)).toBeTruthy(); // debug-friendly
  expect(await atBottom(list(b))).toBeTruthy();

  await ctxA.close();
  await ctxB.close();
});

test('AT-02: No jump when viewer scrolled up', async ({ browser }) => {
  const ctxA = await browser.newContext();
  const ctxB = await browser.newContext();
  const a = await ctxA.newPage();
  const b = await ctxB.newPage();

  await login(a);
  await login(b);

  const send = a.getByRole('button', { name: 'Send' }).or(a.locator('button').first());

  // Seed multiple messages so B can scroll
  for (let i = 0; i < 10; i++) {
    const msg = uniq('seed');
    await input(a).fill(msg);
    await expect(send).toBeVisible();
    await send.waitFor({ state: 'attached' });
    await send.click();
    await a.waitForTimeout(150); // give server time to propagate
  }

  // Wait until B sees all seeded messages
  await expect(list(b)).toContainText('seed', { timeout: 10000 });

  // Manually scroll B up — simulate user scrolling up to read older messages
  await list(b).evaluate((el: HTMLElement) => { el.scrollTop = 0 });

  // Double check scroll position BEFORE new message
  const before = await list(b).evaluate(el => ({
    scrollTop: el.scrollTop,
    scrollHeight: el.scrollHeight,
    clientHeight: el.clientHeight,
    isAtBottom: Math.abs(el.scrollHeight - el.scrollTop - el.clientHeight) < 2,
  }));
  console.log('🟡 Before sending:', before);
  expect(before.isAtBottom).toBeFalsy(); // must NOT be at bottom

  // Now send another message from A
  const newMsg = uniq('no-jump');
  await input(a).fill(newMsg);
  await expect(send).toBeVisible();
  await send.waitFor({ state: 'attached' });
  await a.waitForTimeout(150); // give DOM time to settle
  await send.click();

  // Wait until B receives the message
  await expect(list(b)).toContainText(newMsg, { timeout: 10000 });

  // Check scroll state again — it should NOT have jumped
  const after = await list(b).evaluate(el => ({
    scrollTop: el.scrollTop,
    scrollHeight: el.scrollHeight,
    clientHeight: el.clientHeight,
    isAtBottom: Math.abs(el.scrollHeight - el.scrollTop - el.clientHeight) < 2,
  }));
  console.log('🟢 After receiving:', after);
  expect(after.isAtBottom).toBeFalsy(); // still not at bottom

  await Promise.all([ctxA.close(), ctxB.close()]);
});

test('AT-03: Auto-scroll resumes after viewer returns to bottom', async ({ browser }) => {
  const ctxA = await browser.newContext();
  const ctxB = await browser.newContext();
  const a = await ctxA.newPage();
  const b = await ctxB.newPage();
  const send = a.getByRole('button', { name: 'Send' }).or(a.locator('button').first());

  await login(a);
  await login(b);

  const listB = list(b);
  // Seed enough messages to make it scrollable
  for (let i = 0; i < 20; i++) {
    await a.getByPlaceholder('Type a message...').fill(`seed ${i}`);
    await a.getByPlaceholder('Type a message...').press('Enter');
  }

  await expect(listB).toContainText('seed 0', { timeout: 10_000 });

  // Simulate user scrolling up
  await listB.evaluate(el => el.scrollTop = 0);
  await b.waitForTimeout(300);

  // Simulate user manually scrolling back to bottom (like PageDown or scrollbar)
  await listB.evaluate(el => el.scrollTop = el.scrollHeight);
  await b.waitForTimeout(300);

  // Confirm near-bottom (within 20px)
  const atBottom = await listB.evaluate(el => {
    return Math.abs(el.scrollHeight - el.scrollTop - el.clientHeight) <= 20;
  });
  expect(atBottom).toBeTruthy();

  // Send new message from A
  const msg = `resume-${Date.now()}`;
  await a.getByPlaceholder('Type a message...').fill(msg);
  await a.getByPlaceholder('Type a message...').press('Enter');

  // Wait for message to appear
  const timeout = 10000;
  const start = Date.now();
  let found = false;
  while (Date.now() - start < timeout) {
    const text = await listB.innerText();
    if (text.includes(msg)) {
      found = true;
      break;
    }
    await b.waitForTimeout(200);
  }

  expect(found).toBeTruthy();
  await Promise.all([ctxA.close(), ctxB.close()]);
});

// AT-04: Sending your own message keeps you at bottom 
test('AT-04: Sender stays at bottom after sending', async ({ page }) => {
  await login(page);
  await list(page).evaluate((el:HTMLElement) => el.scrollTop = el.scrollHeight);
  const send  = page.getByRole('button', { name: 'Send' }).or(page.locator('button').first());
  expect(await atBottom(list(page))).toBeTruthy();

  const msg = uniq('self');
  await input(page).fill(msg);
  await send.click();

  await expect(list(page)).toContainText(msg, { timeout: 5000 });
  expect(await atBottom(list(page))).toBeTruthy();
});