import { test, expect } from '@playwright/test';
import { Page } from '@playwright/test';
import { login } from './helpers';


async function goToChat(page: Page) {
  //await page.goto('/');
  await page.reload();
  await page.waitForSelector('.messages-container');
}

// AT-1: Persist single message after refresh
test('AT-1: should persist a message after refresh', async ({ page }) => {
    await login(page);
    await goToChat(page);
    const msg = 'Test ' + Date.now();
    await page.fill('input[placeholder="Type a message..."]', msg);
    await page.keyboard.press('Enter');

    //await page.reload();
    await page.waitForSelector('.messages-container');
    await expect(page.locator('.messages-container')).toContainText(msg);
});

// AT-2: Persist multiple messages in correct order
test('AT-2: should persist multiple messages and keep order', async ({ page }) => {
    await login(page);
    await goToChat(page);
    const msgs = ['First ' + Date.now(), 'Second ' + Date.now(), 'Third ' + Date.now()];

    for (const m of msgs) {
        await page.fill('input[placeholder="Type a message..."]', m);
        await page.keyboard.press('Enter');
    }

    await page.reload();
    await page.waitForSelector('.messages-container');
    for (const m of msgs) {
        await expect(page.locator('.messages-container')).toContainText(m);
    }
    // verify order
    const allText = await page.locator('.messages-container').innerText();
    const firstIdx = allText.indexOf(msgs[0]);
    const secondIdx = allText.indexOf(msgs[1]);
    const thirdIdx = allText.indexOf(msgs[2]);
    expect(firstIdx).toBeLessThan(secondIdx);
    expect(secondIdx).toBeLessThan(thirdIdx);
});

// AT-3: Large history persists
test('AT-3: should persist a long history of messages', async ({ page }) => {
    await login(page);
    await goToChat(page);
    const msgs = Array.from({ length: 20 }, (_, i) => `Message ${i} - ${Date.now()}`);
    for (const m of msgs) {
        await page.fill('input[placeholder="Type a message..."]', m);
        await page.keyboard.press('Enter');
    }

    await page.reload();
    for (const m of msgs) {
        await expect(page.locator('.messages-container')).toContainText(m);
    }
});

// AT-4: Mixed send and refresh cycles
test('AT-4: should keep messages across multiple send/refresh cycles', async ({ page }) => {
    await login(page);
    await goToChat(page);
    const first = 'First cycle ' + Date.now();
    await page.fill('input[placeholder="Type a message..."]', first);
    await page.keyboard.press('Enter');
    await page.reload();

    const second = 'Second cycle ' + Date.now();
    await page.fill('input[placeholder="Type a message..."]', second);
    await page.keyboard.press('Enter');
    await page.reload();

    await expect(page.locator('.messages-container')).toContainText(first);
    await expect(page.locator('.messages-container')).toContainText(second);
});

// AT-5: No duplicates after refresh
test('AT-5: should not duplicate messages after refresh', async ({ page }) => {
    await login(page);
    await goToChat(page);
    const msg = 'Duplicate check ' + Date.now();
    await page.fill('input[placeholder="Type a message..."]', msg);
    await page.keyboard.press('Enter');

    await page.reload();
    const occurrences = await page.locator('.messages-container', { hasText: msg }).count();
    expect(occurrences).toBe(1);
});

// AT-6: Messages stay in order after multiple refreshes
test('AT-6: should keep order after multiple refreshes', async ({ page }) => {
    await login(page);
    await goToChat(page);
    const msgs = ['One ' + Date.now(), 'Two ' + Date.now()];

    for (const m of msgs) {
        await page.fill('input[placeholder="Type a message..."]', m);
        await page.keyboard.press('Enter');
    }

    for (let i = 0; i < 3; i++) {
        await page.reload();
    }

    const allText = await page.locator('.messages-container').innerText();
    const oneIdx = allText.indexOf(msgs[0]);
    const twoIdx = allText.indexOf(msgs[1]);
    expect(oneIdx).toBeLessThan(twoIdx);
});

// AT-7: Ghost messages should not appear
test('AT-7: refresh should not create ghost messages', async ({ page }) => {
    await login(page);
    await goToChat(page);
    await page.reload();
    const ghostCount = await page.locator('.messages-container .message').count();
    expect(ghostCount).toBe(0);
});

// AT-8: New browser context starts clean
test('AT-8: new session should start with empty history', async ({ browser }) => {
    const context = await browser.newContext(); // fresh context = no storage
    const page = await context.newPage();
    await login(page);
    await goToChat(page);
    const count = await page.locator('.messages-container .message').count();
    expect(count).toBe(0);
    await context.close();
});

// AT-9: Multiple tabs share history (if local storage is shared)
test('AT-9: multiple tabs should show same history', async ({ context }) => {
    const page1 = await context.newPage();
    await login(page1);
    await goToChat(page1);
    const msg = 'Multi-tab ' + Date.now();
    await page1.fill('input[placeholder="Type a message..."]', msg);
    await page1.keyboard.press('Enter');

    const page2 = await context.newPage();
    await login(page2);
    await goToChat(page2);
    await expect(page2.locator('.messages-container')).toContainText(msg);
});

// AT-10: Empty history stays empty after refresh
test('AT-10: empty history stays empty after refresh', async ({ page }) => {
    await login(page);
    await goToChat(page);
    await page.reload();
    const count = await page.locator('.messages-container .message').count();
    expect(count).toBe(0);
});


