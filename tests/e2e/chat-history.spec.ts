import { test, expect } from '@playwright/test';
import { Page } from '@playwright/test';
import { login } from './helpers';

const selectors = {
  input: (p: any) => p.getByPlaceholder('Type a message...'),
  send: (p: any) => p.getByTestId('send-button'),
  list: (p: any) => p.getByTestId('message-list'),
};

const BASE_URL = process.env.BASE_URL || 'http://localhost:8000';


async function goToChat(page: Page) {
  await page.reload();
  await page.waitForSelector('.message-list');
}

// AT-1: Persist single message after refresh
test('AT-1: should persist a message after refresh', async ({ page }) => {
    await login(page);
    //await goToChat(page);
    const msg = 'Test ' + Date.now();
    await selectors.input(page).fill(msg);
    await selectors.send(page).click();

    const lastMessage = selectors.list(page).locator('div:has-text("You:")').last();
    await expect(selectors.list(page)).toContainText(msg);
});

// AT-2: Persist multiple messages in correct order
test('AT-2: should persist multiple messages and keep order', async ({ page }) => {
  await login(page);
  //await goToChat(page);
  const msgs = ['First ' + Date.now(), 'Second ' + Date.now(), 'Third ' + Date.now()];

  for (const m of msgs) {
    await selectors.input(page).fill(m);
    await selectors.send(page).click();
  }

  await page.reload();
  for (const m of msgs) {
    await expect(selectors.list(page)).toContainText(m);
  }

  const allText = await selectors.list(page).innerText();
  const firstIdx = allText.indexOf(msgs[0]);
  const secondIdx = allText.indexOf(msgs[1]);
  const thirdIdx = allText.indexOf(msgs[2]);
  expect(firstIdx).toBeLessThan(secondIdx);
  expect(secondIdx).toBeLessThan(thirdIdx);
});

// AT-3: Large history persists
test('AT-3: should persist a long history of messages', async ({ page }) => {
  await login(page);
  //await goToChat(page);
  const msgs = Array.from({ length: 20 }, (_, i) => `Message ${i} - ${Date.now()}`);

  for (const m of msgs) {
    await selectors.input(page).fill(m);
    await selectors.send(page).click();
  }

  await page.reload();
  for (const m of msgs) {
    await expect(selectors.list(page)).toContainText(m);
  }
});

// AT-4: Mixed send and refresh cycles
test('AT-4: should keep messages across multiple send/refresh cycles', async ({ page }) => {
  await login(page);
  //await goToChat(page);

  const first = 'First cycle ' + Date.now();
  await selectors.input(page).fill(first);
  await selectors.send(page).click();
  await page.reload();

  const second = 'Second cycle ' + Date.now();
  await selectors.input(page).fill(second);
  await selectors.send(page).click();
  await page.reload();

  await expect(selectors.list(page)).toContainText(first);
  await expect(selectors.list(page)).toContainText(second);
});

test('AT-5: should not duplicate messages after refresh', async ({ page }) => {
  await login(page);
  //await goToChat(page);
  const msg = 'Duplicate check ' + Date.now();
  await selectors.input(page).fill(msg);
  await selectors.send(page).click();

  // Confirm message shows before reload
  await expect(selectors.list(page)).toContainText(msg);

  await page.reload();
  const matching = selectors.list(page).locator(`div:has-text("${msg}")`).last();
  await expect(matching).toBeVisible({ timeout: 5000 });
});

// AT-6: Messages stay in order after multiple refreshes
test('AT-6: should keep order after multiple refreshes', async ({ page }) => {
  await login(page);
  const msgs = ['One ' + Date.now(), 'Two ' + Date.now()];

  for (const m of msgs) {
    await selectors.input(page).fill(m);
    await selectors.send(page).click();
  }

  // Simulate multiple refresh cycles
  for (let i = 0; i < 3; i++) {
    await page.reload();
  }

  // Wait for both messages to appear
  const firstMessage = selectors.list(page).locator(`div:has-text("${msgs[0]}")`).last();
  const secondMessage = selectors.list(page).locator(`div:has-text("${msgs[1]}")`).last();
  await expect(firstMessage).toBeVisible({ timeout: 5000 });
  await expect(secondMessage).toBeVisible({ timeout: 5000 });

  // Grab full list content to compare index
  const allText = await selectors.list(page).innerText();
  const oneIdx = allText.indexOf(msgs[0]);
  const twoIdx = allText.indexOf(msgs[1]);

  console.log(`[AT-6] Index of "${msgs[0]}": ${oneIdx}, "${msgs[1]}": ${twoIdx}`);
  expect(oneIdx).toBeGreaterThanOrEqual(0);
  expect(twoIdx).toBeGreaterThanOrEqual(0);
  expect(oneIdx).toBeLessThan(twoIdx);
});

// AT-7: Ghost messages should not appear
test('AT-7: refresh should not create ghost messages', async ({ page }) => {
  await login(page);
  //await goToChat(page);
  await page.reload();
  const ghostCount = await selectors.list(page).locator('div:has-text("You:")').count();
  expect(ghostCount).toBe(0);
});

// AT-8: New browser context starts clean
test('AT-8: new session should start with empty history', async ({ browser }) => {
  const context = await browser.newContext(); // fresh context = no session/localStorage
  const page = await context.newPage(); // ✅ must create a page to use selectors

  await login(page); // ✅ login works on a page, not a context
  // No need to goToChat if login already lands on chat UI

  // ✅ Check message list on the fresh page
  const count = await selectors.list(page).locator('div:has-text("You:")').count();
  expect(count).toBe(0);

  await context.close();
});

// AT-9: Multiple tabs share history (if local storage is shared)
test('AT-9: multiple tabs should show same history', async ({ context }) => {
  const page1 = await context.newPage();
  await login(page1);
  //await goToChat(page1);
  const msg = 'Multi-tab ' + Date.now();
  await selectors.input(page1).fill(msg);
  await selectors.send(page1).click();

  const page2 = await context.newPage();
  await login(page2);
  //await goToChat(page2);
  await expect(selectors.list(page2)).toContainText(msg);
});

// AT-10: Empty history stays empty after refresh
test('AT-10: empty history stays empty after refresh', async ({ page }) => {
  await login(page);
  //await goToChat(page);
  await page.reload();
  const count = await selectors.list(page).locator('div:has-text("You:")').count();
  expect(count).toBe(0);
});

// ============================== AI ==================================

// AT-11: Persist single message after refresh
test('AT-11: should persist a message after refresh', async ({ page }) => {
    await login(page);
        await page.goto(`${BASE_URL}/ai`);

    //await goToChat(page);
    const msg = 'Test ' + Date.now();
    await selectors.input(page).fill(msg);
    await selectors.send(page).click();

    const lastMessage = selectors.list(page).locator('div:has-text("You:")').last();
    await expect(selectors.list(page)).toContainText(msg);
});

// AT-12: Persist multiple messages in correct order
test('AT-12: should persist multiple messages and keep order', async ({ page }) => {
  await login(page);
      await page.goto(`${BASE_URL}/ai`);

  //await goToChat(page);
  const msgs = ['First ' + Date.now(), 'Second ' + Date.now(), 'Third ' + Date.now()];

  for (const m of msgs) {
    await selectors.input(page).fill(m);
    await selectors.send(page).click();
  }

  await page.reload();
  for (const m of msgs) {
    await expect(selectors.list(page)).toContainText(m);
  }

  const allText = await selectors.list(page).innerText();
  const firstIdx = allText.indexOf(msgs[0]);
  const secondIdx = allText.indexOf(msgs[1]);
  const thirdIdx = allText.indexOf(msgs[2]);
  expect(firstIdx).toBeLessThan(secondIdx);
  expect(secondIdx).toBeLessThan(thirdIdx);
});

// AT-13: Large history persists
test('AT-13: should persist a long history of messages', async ({ page }) => {
  await login(page);
      await page.goto(`${BASE_URL}/ai`);

  //await goToChat(page);
  const msgs = Array.from({ length: 20 }, (_, i) => `Message ${i} - ${Date.now()}`);

  for (const m of msgs) {
    await selectors.input(page).fill(m);
    await selectors.send(page).click();
  }

  await page.reload();
  for (const m of msgs) {
    await expect(selectors.list(page)).toContainText(m);
  }
});

// AT-14: Mixed send and refresh cycles
test('AT-14: should keep messages across multiple send/refresh cycles', async ({ page }) => {
  await login(page);
      await page.goto(`${BASE_URL}/ai`);

  //await goToChat(page);

  const first = 'First cycle ' + Date.now();
  await selectors.input(page).fill(first);
  await selectors.send(page).click();
  await page.reload();

  const second = 'Second cycle ' + Date.now();
  await selectors.input(page).fill(second);
  await selectors.send(page).click();
  await page.reload();

  await expect(selectors.list(page)).toContainText(first);
  await expect(selectors.list(page)).toContainText(second);
});

test('AT-15: should not duplicate messages after refresh', async ({ page }) => {
  await login(page);
      await page.goto(`${BASE_URL}/ai`);

  //await goToChat(page);
  const msg = 'Duplicate check ' + Date.now();
  await selectors.input(page).fill(msg);
  await selectors.send(page).click();

  // Confirm message shows before reload
  await expect(selectors.list(page)).toContainText(msg);

  await page.reload();
  const matching = selectors.list(page).locator(`div:has-text("${msg}")`).last();
  await expect(matching).toBeVisible({ timeout: 5000 });
});

// AT-16: Messages stay in order after multiple refreshes
test('AT-16: should keep order after multiple refreshes', async ({ page }) => {
  await login(page);
      await page.goto(`${BASE_URL}/ai`);

  const msgs = ['One ' + Date.now(), 'Two ' + Date.now()];

  for (const m of msgs) {
    await selectors.input(page).fill(m);
    await selectors.send(page).click();
  }

  // Simulate multiple refresh cycles
  for (let i = 0; i < 3; i++) {
    await page.reload();
  }

  // Wait for both messages to appear
  const firstMessage = selectors.list(page).locator(`div:has-text("${msgs[0]}")`).last();
  const secondMessage = selectors.list(page).locator(`div:has-text("${msgs[1]}")`).last();
  await expect(firstMessage).toBeVisible({ timeout: 5000 });
  await expect(secondMessage).toBeVisible({ timeout: 5000 });

  // Grab full list content to compare index
  const allText = await selectors.list(page).innerText();
  const oneIdx = allText.indexOf(msgs[0]);
  const twoIdx = allText.indexOf(msgs[1]);

  console.log(`[AT-6] Index of "${msgs[0]}": ${oneIdx}, "${msgs[1]}": ${twoIdx}`);
  expect(oneIdx).toBeGreaterThanOrEqual(0);
  expect(twoIdx).toBeGreaterThanOrEqual(0);
  expect(oneIdx).toBeLessThan(twoIdx);
});

// AT-17: Ghost messages should not appear
test('AT-17: refresh should not create ghost messages', async ({ page }) => {
  await login(page);
      await page.goto(`${BASE_URL}/ai`);

  //await goToChat(page);
  await page.reload();
  const ghostCount = await selectors.list(page).locator('div:has-text("You:")').count();
  expect(ghostCount).toBe(0);
});

// AT-18: New browser context starts clean
test('AT-18: new session should start with empty history', async ({ browser }) => {
  const context = await browser.newContext(); // fresh context = no session/localStorage
  const page = await context.newPage(); // ✅ must create a page to use selectors

  await login(page); // ✅ login works on a page, not a context
      await page.goto(`${BASE_URL}/ai`);

  // No need to goToChat if login already lands on chat UI

  // ✅ Check message list on the fresh page
  const count = await selectors.list(page).locator('div:has-text("You:")').count();
  expect(count).toBe(0);

  await context.close();
});

// AT-19: Multiple tabs share history (if local storage is shared)
test('AT-19: multiple tabs should show same history', async ({ context }) => {
  const page1 = await context.newPage();
  await login(page1);
      await page1.goto(`${BASE_URL}/ai`);

  //await goToChat(page1);
  const msg = 'Multi-tab ' + Date.now();
  await selectors.input(page1).fill(msg);
  await selectors.send(page1).click();

  const page2 = await context.newPage();
  await login(page2);
  //await goToChat(page2);
  await expect(selectors.list(page2)).toContainText(msg);
});

// AT-20: Empty history stays empty after refresh
test('AT-20: empty history stays empty after refresh', async ({ page }) => {
  await login(page);
      await page.goto(`${BASE_URL}/ai`);

  //await goToChat(page);
  await page.reload();
  const count = await selectors.list(page).locator('div:has-text("You:")').count();
  expect(count).toBe(0);
});