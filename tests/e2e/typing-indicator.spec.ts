/*
AI-generated-code: 15% (tool: Playwright, functions: startTyping, indicatorIsVisible, Used AI to help locate the elements on the app
AI chat link: N/A this was generated before Iteration 1 submission)
Human code: 85% (tool: Playwright, Tests: 1-5)
Framework generated code: 0%
*/
import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://localhost:8000';
const S = {
  input: (p: any) => p.getByPlaceholder('Type a message...'),
  send:  (p: any) => p.getByRole('button', { name: 'Send' }),

  indicatorEl: (p: any) => p.locator('.typing-indicator'),
  indicatorText: (p: any) => p.getByText(/is typing|users? are typing/i).first(),
};

async function startTyping(page: any, text = 'hello') {
  const input = S.input(page);
  await input.fill('');
  await input.type(text, { delay: 50 }); 
}

async function indicatorIsVisible(page: any) {
  const elCount = await S.indicatorEl(page).count();
  if (elCount > 0) return await S.indicatorEl(page).first().isVisible();
  try { return await S.indicatorText(page).isVisible(); } catch { return false; }
}

// AT-1: Typing indicator appears when other users are typing 
test('AT-1: hows typing indicator to other users when someone starts typing', async ({ browser }) => {
  const [ctxA, ctxB] = [await browser.newContext(), await browser.newContext()];
  const [a, b] = [await ctxA.newPage(), await ctxB.newPage()];
  await Promise.all([a.goto(BASE_URL + '/'), b.goto(BASE_URL + '/')]);

  await startTyping(a, 'hi there');
  await expect.poll(() => indicatorIsVisible(b), { timeout: 8000 }).toBeTruthy();

  await Promise.all([ctxA.close(), ctxB.close()]);
});

// AT-2: Disappears after stop or send (spec: within a few seconds)
test('AT-2: Indicator disappears after stop typing or sending', async ({ browser }) => {
  const [ctxA, ctxB] = [await browser.newContext(), await browser.newContext()];
  const [a, b] = [await ctxA.newPage(), await ctxB.newPage()];
  const send  = a.getByRole('button', { name: 'Send' }).or(a.locator('button').first());
  await Promise.all([a.goto(BASE_URL + '/'), b.goto(BASE_URL + '/')]);

  await startTyping(a, 'hello');
  await expect.poll(() => indicatorIsVisible(b), { timeout: 8000 }).toBeTruthy();

  await send.click();

  await expect.poll(() => indicatorIsVisible(b), { timeout: 8000 }).toBeFalsy();

  await Promise.all([ctxA.close(), ctxB.close()]);
});

// AT-3: Multiple typers show a count 
test('AT-3: Shows "X users are typing" when two users type', async ({ browser }) => {
  const [ctxA, ctxB, ctxC] = [await browser.newContext(), await browser.newContext(), await browser.newContext()];
  const [a, b, c] = [await ctxA.newPage(), await ctxB.newPage(), await ctxC.newPage()];
  await Promise.all([a.goto(BASE_URL + '/'), b.goto(BASE_URL + '/'), c.goto(BASE_URL + '/')]);

  await Promise.all([startTyping(b, 'hey'), startTyping(c, 'yo')]);
  await expect.poll(() => indicatorIsVisible(a), { timeout: 8000 }).toBeTruthy();

  const indText = (await S.indicatorText(a).innerText().catch(() => '')) || (await S.indicatorEl(a).innerText().catch(() => ''));
  const m = indText.match(/(\d+)\s+users?\s+are\s+typing/i);
  if (m) expect(Number(m[1])).toBeGreaterThanOrEqual(2);

  await Promise.all([ctxA.close(), ctxB.close(), ctxC.close()]);
});

// AT-4: Typist should not see their own indicator 
test('AT-4: Typist does not see their own indicator', async ({ page }) => {
  await page.goto(BASE_URL + '/');
  await startTyping(page, 'self typing');

  // Indicator should not be shown to the typist
  await expect.poll(() => indicatorIsVisible(page), { timeout: 3000 }).toBeFalsy();
});

// AT-5: Indicator resets after reload
test('AT-5: Indicator does not persist after reload', async ({ browser }) => {
  const [ctxA, ctxB] = [await browser.newContext(), await browser.newContext()];
  const [a, b] = [await ctxA.newPage(), await ctxB.newPage()];
  await Promise.all([a.goto(BASE_URL + '/'), b.goto(BASE_URL + '/')]);

  await startTyping(a, 'before reload');
  await expect.poll(() => indicatorIsVisible(b), { timeout: 8000 }).toBeTruthy();

  await b.reload();
  await expect.poll(() => indicatorIsVisible(b), { timeout: 6000 }).toBeFalsy();

  await Promise.all([ctxA.close(), ctxB.close()]);
});