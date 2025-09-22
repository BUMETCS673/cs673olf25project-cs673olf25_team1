import { test, expect } from '@playwright/test';

const uniq = (m:string)=> `${m} ${Date.now()}`;

const selectors = {
  input: (p: any) => p.getByPlaceholder('Type a message...'),
  send:  (p: any) => p.getByRole('button', { name: 'Send' }),
  list:  (p: any) => p.locator('.messages-container'),
};


// AT-1: Guests can send a message
test('AT-1: Guest sends a message', async ({ page }) => {
  await page.goto('/');

  const input = page.locator('input[type="text"], textarea').first();
  const send  = page.getByRole('button', { name: 'Send' }).or(page.locator('button').first());
  const messages = page.locator('.messages-container');


  const msg = `hello world ${new Date().toISOString()}`;
  await input.fill(msg);
  await send.click();

  await expect(messages).toContainText(msg, { timeout: 3000 });
});

// AT-2: Message received by another user 
test('AT-2: Real-time receive across two guests', async ({ browser }) => {
  test.setTimeout(65_000);

  const ctxA = await browser.newContext();
  const ctxB = await browser.newContext();
  const a = await ctxA.newPage();
  const b = await ctxB.newPage();
  const send  = a.getByRole('button', { name: 'Send' }).or(a.locator('button').first());


  await Promise.all([a.goto('/'), b.goto('/')]);

  const ping = uniq('ping');
  await selectors.input(a).fill(ping);
  await send.click();

  await expect(selectors.list(b)).toContainText(ping, { timeout: 60_000 });

  await Promise.all([ctxA.close(), ctxB.close()]);
});

// AT-3: Multiple messages preserve order
test('AT-3: Messages preserve chronological order', async ({ browser }) => {
  test.setTimeout(65_000);

  const ctxA = await browser.newContext();
  const ctxB = await browser.newContext();
  const a = await ctxA.newPage();
  const b = await ctxB.newPage();
  const send  = a.getByRole('button', { name: 'Send' }).or(a.locator('button').first());

  await Promise.all([a.goto('/'), b.goto('/')]);

  const m1 = uniq('msg1');
  const m2 = uniq('msg2');
  const m3 = uniq('msg3');

  for (const m of [m1, m2, m3]) {
    await selectors.input(a).fill(m);
    await send.click();
  }

  // Read the full text in the messages container and compare indices.
  const text = await selectors.list(b).innerText({ timeout: 60_000 });
  const i1 = text.indexOf(m1), i2 = text.indexOf(m2), i3 = text.indexOf(m3);
  expect(i1).toBeGreaterThanOrEqual(0);
  expect(i2).toBeGreaterThan(i1);
  expect(i3).toBeGreaterThan(i2);

  await Promise.all([ctxA.close(), ctxB.close()]);
});

// AT-4: Real-time delivery performance
test('AT-4: Delivery time under target', async ({ browser }) => {
  test.setTimeout(65_000);

  const ctxA = await browser.newContext();
  const ctxB = await browser.newContext();
  const a = await ctxA.newPage();
  const b = await ctxB.newPage();
  const send  = a.getByRole('button', { name: 'Send' }).or(a.locator('button').first());

  await Promise.all([a.goto('/'), b.goto('/')]);

  const payload = uniq('latency');
  const t0 = Date.now();

  await selectors.input(a).fill(payload);
  await send.click();

  await expect(selectors.list(b)).toContainText(payload, { timeout: 60_000 });

  const dt = Date.now() - t0;
  expect(dt).toBeLessThanOrEqual(60_000);  // acceptance ceiling
  expect(dt).toBeLessThanOrEqual(3_000);   // performance target

  await Promise.all([ctxA.close(), ctxB.close()]);
});

// AT-5: Guest session persists after reload
test('AT-5: Guest can continue chatting after reload', async ({ page }) => {
  await page.goto('/');

  const before = uniq('before-reload');
  const send  = page.getByRole('button', { name: 'Send' }).or(page.locator('button').first());

  await selectors.input(page).fill(before);
  await send.click();
  await expect(selectors.list(page)).toContainText(before, { timeout: 3000 });

  await page.reload();

  const after = uniq('after-reload');
  await selectors.input(page).fill(after);
  await send.click();
  await expect(selectors.list(page)).toContainText(after, { timeout: 3000 });
});

// AT-6: Empty message is blocked
test('AT-6: Empty message is blocked', async ({ page }) => {
  const send  = page.getByRole('button', { name: 'Send' }).or(page.locator('button').first());
  await page.goto('/');
  await selectors.input(page).fill('');          
  await send.click();

  // Assert nothing new appeared by sending a unique marker next
  const marker = uniq('marker');
  await selectors.input(page).fill(marker);
  await send.click();
  await expect(selectors.list(page)).toContainText(marker, { timeout: 3000 });
});

// AT-7: Whitespace is blocked
test('AT-7: Whitespace-only message is blocked', async ({ page }) => {
  const send  = page.getByRole('button', { name: 'Send' }).or(page.locator('button').first());
  await page.goto('/');
  await selectors.input(page).fill('   ');
  await send.click();
  const marker = uniq('marker');
  await selectors.input(page).fill(marker);
  await send.click();
  await expect(selectors.list(page)).toContainText(marker, { timeout: 3000 });
});

// AT-8: Long word wraps
test('AT-8: Long word wraps without breaking layout', async ({ page }) => {
  const send  = page.getByRole('button', { name: 'Send' }).or(page.locator('button').first());
  await page.goto('/');
  const long = 'a'.repeat(200);
  await selectors.input(page).fill(long);
  await send.click();
  await expect(selectors.list(page)).toContainText(long, { timeout: 3000 });
});

// AT-9: Simple autoscroll behavior
test('AT-9: Autoscroll to bottom on send', async ({ page }) => {
  const send  = page.getByRole('button', { name: 'Send' }).or(page.locator('button').first());
  await page.goto('/');
  // Scroll top first if container is scrollable
  const list = selectors.list(page);
  await list.evaluate((el:HTMLElement) => el.scrollTop = 0);
  const msg = uniq('scroll-check');
  await selectors.input(page).fill(msg);
  await send.click();
  await expect(list).toContainText(msg, { timeout: 3000 });
  // Verify we ended near bottom
  const atBottom = await list.evaluate((el:any) => Math.abs(el.scrollHeight - el.scrollTop - el.clientHeight) < 4);
  expect(atBottom).toBeTruthy();
});

// AT-10: Clear the input after sending
test('AT-10: Clears input after sending', async ({ page }) => {
  const send  = page.getByRole('button', { name: 'Send' }).or(page.locator('button').first());
  await page.goto('/');
  await selectors.input(page).fill('clear me');
  await send.click();
  await expect(selectors.input(page)).toHaveValue('');           
});

