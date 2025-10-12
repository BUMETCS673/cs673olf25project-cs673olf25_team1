import { Page, BrowserContext, expect } from '@playwright/test';
import { E } from './playwright-report/trace/assets/defaultSettingsView-BA25Usqk';


export async function login(target: Page | BrowserContext) {
  let page: Page;

  // Detect whether we're passed a Page or BrowserContext
  if (typeof (target as Page).goto === 'function') {
    page = target as Page;
  } else {
    page = await (target as BrowserContext).newPage();
  }

  const base = process.env.BASE_URL || 'http://localhost:8000';
  // Go to login page
  await page.goto(`${base}/login`); 

  // If already logged in, skip
  const currentUrl = page.url();
  if (currentUrl.includes('/community') || currentUrl.includes('/ai')) {
    return page;
  }

  // Perform login
  await page.getByTestId('login-username').locator('input').fill('testuser');      
  await page.getByTestId('login-password').locator('input').fill('password123');   
  await page.getByTestId('login-button').click();

  // Wait until redirected to the main page
  await page.waitForURL('**/community', { timeout: 10000 });

  return page;
}