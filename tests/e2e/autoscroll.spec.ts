import { test, expect } from '@playwright/test';

// selectors used everywhere
const input = (p:any) => p.getByPlaceholder('Type a message...');
const send  = (p:any) => p.getByRole('button', { name: 'Send' });
const list  = (p:any) => p.locator('.messages-container');
const uniq  = (s:string) => `${s} ${Date.now()}`;

// Helper function for scrolling
async function atBottom(l:any) {
  return l.evaluate((el:HTMLElement) =>
    Math.abs(el.scrollHeight - el.scrollTop - el.clientHeight) <= 4
  );
}

// AT-01: Viewer is at bottom, auto-scroll to see new message 
test('AT-01: Auto-scroll when viewer is at bottom', async ({ browser }) => {
  const ctxA = await browser.newContext();
  const ctxB = await browser.newContext();
  const a = await ctxA.newPage();
  const b = await ctxB.newPage();
  const send  = a.getByRole('button', { name: 'Send' }).or(a.locator('button').first());
  await Promise.all([a.goto('/'), b.goto('/')]);

  // make sure user B is at bottom now
  await list(b).evaluate((el:HTMLElement) => el.scrollTop = el.scrollHeight);
  expect(await atBottom(list(b))).toBeTruthy();

  const msg = uniq('auto-bottom');
  await input(a).fill(msg);
  await send.click();

  await expect(list(b)).toContainText(msg, { timeout: 10000 });
  expect(await atBottom(list(b))).toBeTruthy();

  await Promise.all([ctxA.close(), ctxB.close()]);
});

// AT-02: Viewer scrolled up, do not force-scroll 
test('AT-02: No jump when viewer scrolled up', async ({ browser }) => {
  const ctxA = await browser.newContext();
  const ctxB = await browser.newContext();
  const a = await ctxA.newPage();
  const b = await ctxB.newPage();
  const send  = a.getByRole('button', { name: 'Send' }).or(a.locator('button').first());
  await Promise.all([a.goto('/'), b.goto('/')]);

  // seed some history so we can scroll
  for (let i = 0; i < 6; i++) {
    await input(a).fill(uniq('seed'));
    await send.click();
  }
  await expect(list(b)).toContainText('seed', { timeout: 10000 });

  // scroll B to the top (not at bottom)
  await list(b).evaluate((el:HTMLElement) => el.scrollTop = 0);
  expect(await atBottom(list(b))).toBeFalsy();

  const msg = uniq('no-jump');
  await input(a).fill(msg);
  await send.click();

  await expect(list(b)).toContainText(msg, { timeout: 10000 });
  expect(await atBottom(list(b))).toBeFalsy(); // still not at bottom

  await Promise.all([ctxA.close(), ctxB.close()]);
});

// AT-03: Auto-scroll resumes after viewer returns to bottom
test('AT-03: Auto-scroll resumes after viewer returns to bottom', async ({ browser }) => {
  const ctxA = await browser.newContext();
  const ctxB = await browser.newContext();
  const a = await ctxA.newPage();
  const b = await ctxB.newPage();
  const send  = a.getByRole('button', { name: 'Send' }).or(a.locator('button').first());
  await Promise.all([a.goto('/'), b.goto('/')]);

  const listB = b.locator('.messages-container');

  // Seed enough history so the list can scroll
  for (let i = 0; i < 15; i++) {
    await a.getByPlaceholder('Type a message...').fill(`seed ${i}`);
    await send.click();
  }
  await expect(listB).toContainText('seed 0', { timeout: 10_000 });

  // Scroll up, don't assert here to avoid flakiness
  await listB.evaluate(el => (el as HTMLElement).scrollTop = 0);
  await b.waitForTimeout(150);

  // Now explicitly return to bottom by scrolling the last item into view
  const lastItem = listB.locator(':scope > *').last();
  await lastItem.scrollIntoViewIfNeeded();

  // Confirm we're at/near bottom
  await expect.poll(async () => {
    return await listB.evaluate((el: HTMLElement) => {
      const delta = Math.abs(el.scrollHeight - el.scrollTop - el.clientHeight);
      return delta <= 20;
    });
  }, { timeout: 2000 }).toBeTruthy();

  // New message arrives, should still be at bottom
  const msg = `resume ${Date.now()}`;
  await a.getByPlaceholder('Type a message...').fill(msg);
  await send.click();

  await expect(listB).toContainText(msg, { timeout: 10_000 });
  await expect.poll(async () => {
    return await listB.evaluate((el: HTMLElement) => {
      const delta = Math.abs(el.scrollHeight - el.scrollTop - el.clientHeight);
      return delta <= 20;
    });
  }, { timeout: 2000 }).toBeTruthy();

  await Promise.all([ctxA.close(), ctxB.close()]);
});

// AT-04: Sending your own message keeps you at bottom 
test('AT-04: Sender stays at bottom after sending', async ({ page }) => {
  await page.goto('/');
  await list(page).evaluate((el:HTMLElement) => el.scrollTop = el.scrollHeight);
  const send  = page.getByRole('button', { name: 'Send' }).or(page.locator('button').first());
  expect(await atBottom(list(page))).toBeTruthy();

  const msg = uniq('self');
  await input(page).fill(msg);
  await send.click();

  await expect(list(page)).toContainText(msg, { timeout: 5000 });
  expect(await atBottom(list(page))).toBeTruthy();
});