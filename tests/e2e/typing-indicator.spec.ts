/*
AI-generated-code: 15% (tool: Playwright, functions: startTyping, indicatorIsVisible, Used AI to help locate the elements on the app
AI chat link: N/A this was generated before Iteration 1 submission)
Human code: 85% (tool: Playwright, Tests: 1-5)
Framework generated code: 0%
*/
import { test, expect } from '@playwright/test';
import { login } from './helpers';

const selectors = {
  input: (p: any) => p.getByPlaceholder('Type a message...'),
  send:  (p: any) => p.getByTestId('send-button'),
  list:  (p: any) => p.getByTestId('message-list'),
  indicatorEl: (p: any) => p.locator('.typing-indicator'),
  indicatorText: (p: any) => p.getByText(/is typing|users? are typing/i).first(),
};

async function startTyping(page: any, text = 'hello') {
  await page.waitForLoadState('networkidle');
  await selectors.list(page).waitFor({ state: 'visible', timeout: 20000 });
  const input = selectors.input(page);
  await input.fill('');
  await input.type(text, { delay: 50 }); 
}

async function indicatorIsVisible(page: any) {
  const elCount = await selectors.indicatorEl(page).count();
  if (elCount > 0) return await selectors.indicatorEl(page).first().isVisible();
  try {
    return await selectors.indicatorText(page).isVisible();
  } catch {
    return false;
  }
}

// AT-1: Typing indicator appears when other users are typing 
test('AT-1: shows typing indicator to other users when someone starts typing', async ({ browser }) => {
  const [ctxA, ctxB] = [await browser.newContext(), await browser.newContext()];
  const [a, b] = [await ctxA.newPage(), await ctxB.newPage()];
  await login(a);
  await login(b);

  await startTyping(a, 'hi there');
  await expect.poll(() => indicatorIsVisible(b), { timeout: 8000 }).toBeTruthy();

  await ctxA.close();
  await ctxB.close();
});

// AT-2: Disappears after stop or send
test('AT-2: Indicator disappears after stop typing or sending', async ({ browser }) => {
  const [ctxA, ctxB] = [await browser.newContext(), await browser.newContext()];
  const [a, b] = [await ctxA.newPage(), await ctxB.newPage()];
  await login(a);
  await login(b);

  await startTyping(a, 'hello');
  await expect.poll(() => indicatorIsVisible(b), { timeout: 8000 }).toBeTruthy();

  await selectors.send(a).click();
  await expect.poll(() => indicatorIsVisible(b), { timeout: 8000 }).toBeFalsy();

  await ctxA.close();
  await ctxB.close();
});

// AT-3: Multiple typers show a count 
test('AT-3: Shows "X users are typing" when two users type', async ({ browser }) => {
  const [ctxA, ctxB, ctxC] = [await browser.newContext(), await browser.newContext(), await browser.newContext()];
  const [a, b, c] = [await ctxA.newPage(), await ctxB.newPage(), await ctxC.newPage()];
  await login(a);
  await login(b);
  await login(c);

  await Promise.all([startTyping(b, 'hello'), startTyping(c, 'world')]);
  await expect.poll(() => indicatorIsVisible(a), { timeout: 8000 }).toBeTruthy();

  const indText = (await selectors.indicatorText(a).innerText().catch(() => '')) || (await selectors.indicatorEl(a).innerText().catch(() => ''));
  const m = indText.match(/(\d+)\s+users?\s+are\s+typing/i);
  if (m) expect(Number(m[1])).toBeGreaterThanOrEqual(2);

  await ctxA.close();
  await ctxB.close();
  await ctxC.close();
});

// AT-4: Typist should not see their own indicator 
test('AT-4: Typist does not see their own indicator', async ({ page }) => {
  await login(page);
  await startTyping(page, 'self typing');
  await expect.poll(() => indicatorIsVisible(page), { timeout: 3000 }).toBeFalsy();
});

// AT-5: Indicator resets after reload
test('AT-5: Indicator does not persist after reload', async ({ browser }) => {
  const [ctxA, ctxB] = [await browser.newContext(), await browser.newContext()];
  const [a, b] = [await ctxA.newPage(), await ctxB.newPage()];
  await login(a);
  await login(b);

  await startTyping(a, 'before reload');
  await expect.poll(() => indicatorIsVisible(b), { timeout: 8000 }).toBeTruthy();

  await b.reload();
  await expect.poll(() => indicatorIsVisible(b), { timeout: 6000 }).toBeFalsy();

  await ctxA.close();
  await ctxB.close();
});