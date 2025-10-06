import { test, expect } from '@playwright/test';
import { login } from './helpers';
import { log } from 'console';

// AT-1: Send valid message with Enter
test('AT-1: should send a message when Enter is pressed', async ({ page }) => {
    await login(page);
    //await page.goto('/');
    await page.fill('input[placeholder="Type a message..."]', 'Test ' + Date.now());
    await page.keyboard.press('Enter');
    await expect(page.locator('.messages-container')).toContainText('Test');
});

// AT-2: Send valid message with Send button
test('AT-2:should send a message with Send button', async ({ page }) => {
    await login(page);
    //await page.goto('/');
    await page.fill('input[placeholder="Type a message..."]', 'Test ' + Date.now());
    await page.click('button:has-text("Send")');
    await expect(page.locator('.messages-container')).toContainText('Test');
});

// AT-3: Leading/trailing spaces
test('AT-3: should trim leading/trailing spaces', async ({ page }) => {
    await login(page);
    //await page.goto('/');
    await page.fill('input[placeholder="Type a message..."]', '   Test   ');
    await page.keyboard.press('Enter');
    await expect(page.locator('.messages-container')).toContainText('Test');
});

// AT-4: Long message
test('AT-4: should send a long message up to limit', async ({ page }) => {
    const longMessage = 'x'.repeat(500);
    await login(page);
    //await page.goto('/');
    await page.fill('input[placeholder="Type a message..."]', longMessage);
    await page.keyboard.press('Enter');
    await expect(page.locator('.messages-container')).toContainText(longMessage);
});

// AT-5: Special characters
test('AT-5: should support special characters', async ({ page }) => {
    const msg = 'Test #@$%^&* ' + Date.now();
    await login(page);
    //await page.goto('/');
    await page.fill('input[placeholder="Type a message..."]', msg);
    await page.keyboard.press('Enter');
    await expect(page.locator('.messages-container')).toContainText('Test #@$%^&*');
});

// AT-6: Empty input
test('AT-6: should not send an empty message', async ({ page }) => {
    await login(page);
    //await page.goto('/');
    await page.reload();
    await page.waitForSelector('.messages-container');
    const countBefore = await page.locator('.messages-container > *').count();

    await page.focus('input[placeholder="Type a message..."]');
    await page.keyboard.press('Enter');

    const countAfter = await page.locator('.messages-container > *').count();
    expect(countAfter).toBe(countBefore);
});

// AT-7: Whitespace-only input
test('AT-7: should not send whitespace-only message', async ({ page }) => {
    await login(page);
    //await page.goto('/');
    await page.reload();
    await page.waitForSelector('.messages-container');
    const countBefore = await page.locator('.messages-container > *').count();

    await page.fill('input[placeholder="Type a message..."]', '     ');
    await page.keyboard.press('Enter');

    const countAfter = await page.locator('.messages-container > *').count();
    expect(countAfter).toBe(countBefore);
});

// AT-8: Rapid Enter presses
test('AT-8: should not duplicate message on rapid Enter presses', async ({ page }) => {
    const msg = 'Test ' + Date.now();
    await login(page);
    //await page.goto('/');
    await page.reload();
    await page.waitForSelector('.messages-container');      
    await page.fill('input[placeholder="Type a message..."]', msg);
    await page.keyboard.press('Enter');
    await page.keyboard.press('Enter');
    await page.keyboard.press('Enter');
    const occurrences = await page.locator('.messages-container', { hasText: msg }).count();
    expect(occurrences).toBe(1);
});

// AT-9: Shift+Enter creates newline (not send)
  test('AT-9: pressing Shift+Enter creates newline in input', async ({ page }) => {
    await login(page);
    //await page.goto('/');
    await page.fill('input[placeholder="Type a message..."]', 'Line1');
    await page.keyboard.press('Shift+Enter');
    await page.keyboard.type('Line2');
    const value = await page.inputValue('input[placeholder="Type a message..."]');
    expect(value).toContain('Line1');
    expect(value).toContain('Line2');
  });


  // AT-10: Enter pressed when input not focused
  test('AT-10: pressing Enter outside input does nothing', async ({ page }) => {
    await login(page);
    //await page.goto('/');
    await page.reload();
    await page.waitForSelector('.messages-container');
    const countBefore = await page.locator('.messages-container > *').count();
    await page.click('body'); // click outside input
    await page.keyboard.press('Enter');
    const countAfter = await page.locator('.messages-container > *').count();
    expect(countAfter).toBe(countBefore);
  });

  // AT-11: Send, then Enter again with empty input
  test('AT-11: pressing Enter again immediately does nothing', async ({ page }) => {
    await login(page);
    //await page.goto('/');
    await page.reload();
    await page.waitForSelector('.messages-container');
    const msg = 'Test ' + Date.now();
    await page.fill('input[placeholder="Type a message..."]', msg);
    await page.keyboard.press('Enter');
    const countAfterFirst = await page.locator('.messages-container > *').count();
    await page.keyboard.press('Enter'); // input now empty
    const countAfterSecond = await page.locator('.messages-container > *').count();
    expect(countAfterSecond).toBe(countAfterFirst);
  });


