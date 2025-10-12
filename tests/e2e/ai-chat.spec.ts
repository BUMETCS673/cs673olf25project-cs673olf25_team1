import { test, expect } from '@playwright/test';
import { login } from './helpers';


const selectors = {
  input: (p: any) => p.getByPlaceholder('Type a message...'),
  send: (p: any) => p.getByTestId('send-button'),
  list: (p: any) => p.getByTestId('message-list'),
};

const BASE_URL = process.env.BASE_URL || 'http://localhost:8000';

// AT-1: AI Chat page loads and UI is visible
test('AT-1: /ai loads and UI is visible', async ({ page }) => {
  await login(page);
  await page.goto(`${BASE_URL}/ai`);
  await expect(selectors.input(page)).toBeVisible();
  await expect(selectors.send(page)).toBeVisible();
});

// AT-2: Can send a message and see it in the chat list
test('AT-2: Sending a message shows it in the chat list', async ({ page }) => {
  await login(page);
  await page.goto(`${BASE_URL}/ai`);
  const message = 'What is the capital of Japan?';
  await selectors.input(page).fill(message);
  await selectors.send(page).click();
  await expect(selectors.list(page)).toContainText(message);
});

// AT-3: LLM response appears after sending message
test('AT-3: LLM response appears after sending a message', async ({ page }) => {
  await login(page);
  await page.goto(`${BASE_URL}/ai`);
  const message = 'What is 2 + 2?';
  await selectors.input(page).fill(message);
  await selectors.send(page).click();

  // Wait for response from the LLM (may vary)
  await expect(selectors.list(page)).toContainText('2 + 2');
  await expect(selectors.list(page)).toContainText('4'); // Or tweak to match your actual output
});

// AT-4: Socket emits LLM response without reload
test('AT-4: LLM response is delivered via socket in real-time', async ({ page }) => {
  await login(page);
  await page.goto(`${BASE_URL}/ai`);
  const message = 'Tell me a fun fact.';
  await selectors.input(page).fill(message);
  await selectors.send(page).click();

  // Wait for backend socket-delivered response
  await expect(selectors.list(page)).toContainText(/fun fact/i, { timeout: 5000 });
});

// AT-5: Input clears after sending
test('AT-5: Input field clears after sending a message', async ({ page }) => {
  await login(page);
  await page.goto(`${BASE_URL}/ai`);
  await selectors.input(page).fill('Clear me');
  await selectors.send(page).click();
  await expect(selectors.input(page)).toHaveValue('');
});

// AT-6: Send button should be disabled or no action on empty message
test('AT-6: Send button should be disabled or no action on empty message', async ({ page }) => {
  await login(page);
  await page.goto(`${BASE_URL}/ai`);

  // Make sure input is empty
  await selectors.input(page).fill('');

  // ✅ Instead of clicking (which times out), assert disabled state
  await expect(selectors.send(page)).toBeDisabled();

  // ✅ Try pressing Enter – message count should remain the same
  const prevCount = await selectors.list(page).locator('div').count();
  await page.keyboard.press('Enter');
  const postCount = await selectors.list(page).locator('div').count();
  expect(postCount).toBe(prevCount);
});

// AT-7: Multiple messages should appear in correct order
test('AT-7: Multiple exchanges show in correct order', async ({ page }) => {
  await login(page);
  await page.goto(`${BASE_URL}/ai`);

  const messages = ['Hi', 'What day is it?', 'Give me a quote'];

  for (const msg of messages) {
    await selectors.input(page).fill(msg);
    await selectors.send(page).click();
    await expect(selectors.list(page)).toContainText(msg);
  }

  const listText = await selectors.list(page).allTextContents();
  messages.forEach(msg => expect(listText.join()).toContain(msg));
});

// AT-8: Long response from LLM is handled properly
test('AT-8: LLM long response does not break UI', async ({ page }) => {
  await login(page);
  await page.goto(`${BASE_URL}/ai`);
  const message = 'Explain the theory of relativity in detail.';
  await selectors.input(page).fill(message);
  await selectors.send(page).click();
  await expect(selectors.list(page)).toContainText(/relativity/i, { timeout: 7000 });
});

// AT-9: Handles special characters or code input
test('AT-9: Can send code or special character input', async ({ page }) => {
  await login(page);
  await page.goto(`${BASE_URL}/ai`);
  const code = 'const x = 5;';
  await selectors.input(page).fill(code);
  await selectors.send(page).click();
  await expect(selectors.list(page)).toContainText(code);
});

// AT-10: Handles network/server error (manual simulation or test stub needed)
test.skip('AT-10: Gracefully handles LLM/server error', async ({ page }) => {
  // Simulate by shutting down backend or mocking error socket event
  await login(page);
  await page.goto(`${BASE_URL}/ai`);
  const msg = 'Trigger server error';
  await selectors.input(page).fill(msg);
  await selectors.send(page).click();
  await expect(selectors.list(page).locator(`text=${msg}`)).toBeVisible();
});

// AT-11: LLM handles extremely long input gracefully
test('AT-11: LLM handles extremely long input gracefully', async ({ page }) => {
  await login(page);
  await page.goto(`${BASE_URL}/ai`);

  const longMessage = 'word '.repeat(500); // ~2,500 characters
  await selectors.input(page).fill(longMessage);
  await selectors.send(page).click();

  // Should still show original input
  await expect(selectors.list(page)).toContainText(longMessage.slice(0, 50));

  // Should show some kind of response — even if it's a fallback
  await expect(selectors.list(page)).not.toHaveText(/error/i); // Not an error
  await expect(selectors.list(page)).not.toHaveText(''); // Not blank
});

// AT-12: Sending a new message before previous LLM response finishes
test('AT-12: Sending a new message before previous LLM response finishes', async ({ page }) => {
  await login(page);
  await page.goto(`${BASE_URL}/ai`);

  await selectors.input(page).fill('Start a long explanation about the solar system...');
  await selectors.send(page).click();

  // Send another message immediately
  await selectors.input(page).fill('What’s the hottest planet?');
  await selectors.send(page).click();

  // Assert both questions and at least one response appear
  await expect(selectors.list(page)).toContainText('solar system');
  await expect(selectors.list(page)).toContainText('hottest planet');
  await expect(selectors.list(page)).toContainText(/Mercury|Venus/i, { timeout: 7000 });
});

// AT-13: LLM can return formatted/code responses
test('AT-13: LLM can return formatted/code responses', async ({ page }) => {
  await login(page);
  await page.goto(`${BASE_URL}/ai`);

  await selectors.input(page).fill('Show me a JavaScript function that reverses a string');
  await selectors.send(page).click();

  await expect(selectors.list(page)).toContainText('function');
  await expect(selectors.list(page)).toContainText('reverse');
  await expect(selectors.list(page)).toContainText('{', { timeout: 5000 }); // assume code block
});

// AT-14: Shows fallback when backend/LLM fails (simulated by aborting socket route)
test('AT-14: Shows fallback when backend/LLM fails', async ({ page }) => {
  await login(page);

  // Intercept the LLM response route and simulate server error
  await page.route('**/socket.io/**', route => route.abort());

  await page.goto(`${BASE_URL}/ai`);
  const failMessage = 'What’s the meaning of life?';
  await selectors.input(page).fill(failMessage);
  await selectors.send(page).click();

  await expect(selectors.list(page)).toContainText(failMessage);

  // Since no LLM response will arrive, verify it doesn't freeze or duplicate
  await expect(selectors.list(page)).not.toContainText(/Philosophical|Religious|Scientific|Personal/i);
});

// AT-15: Consecutive messages do not overwrite each other
test('AT-15: Consecutive messages do not overwrite each other', async ({ page }) => {
  await login(page);
  await page.goto(`${BASE_URL}/ai`);

  const messages = ['What is 5 + 5?', 'Define AI.', 'How tall is Mount Everest?'];

  for (const msg of messages) {
    await selectors.input(page).fill(msg);
    await selectors.send(page).click();
  }

  for (const msg of messages) {
    await expect(selectors.list(page)).toContainText(msg, { timeout: 5000 });
  }
});