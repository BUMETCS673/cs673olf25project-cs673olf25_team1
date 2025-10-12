/*
AI-generated-code: 15% (tool: Playwright)
Human code: 85% (Tests AT-01–AT-09, format consistent with prior test suites)
Framework generated code: 0%
*/

import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://localhost:8000';

// AT-1: Successful registration
test('AT-1: Register new user successfully', async ({ page }) => {
  const user = `user${Date.now()}`;
  await page.goto(`${BASE_URL}/login`);
  await page.getByText(/register here/i).click();
  
  await page.getByTestId('login-username').locator('input').fill(user);
  await page.getByTestId('login-password').locator('input').fill('password123');
  await page.getByTestId('register-button').click();

  await expect(page).toHaveURL(/\/community|\/login|\/dashboard/i);
});

// AT-2: Register with an existing username
test('AT-2: Registration fails when username already exists', async ({ page }) => {
  const user = `user${Date.now()}`;
  await page.goto(`${BASE_URL}/login`);
  await page.getByText(/register here/i).click();

  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Test User');
  await page.getByRole('textbox', { name: 'Full Name' }).press('Enter');
  await page.getByTestId('login-username').locator('input').fill(user);
  await page.getByTestId('login-password').locator('input').fill('password123');
  await page.getByTestId('register-button').click();

  // Try to register same user again
  await page.goto(`${BASE_URL}/login`);
  await page.getByText(/register here/i).click();

  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Test User');
  await page.getByRole('textbox', { name: 'Full Name' }).press('Enter');
  await page.getByTestId('login-username').locator('input').fill(user);
  await page.getByTestId('login-password').locator('input').fill('password123');
  await page.getByTestId('register-button').click();

  // Assert error message appears
  const errorMsg = page.locator('[data-testid="auth-error"]');
  await expect(errorMsg).toBeVisible();
  await expect(errorMsg).toHaveText(/invalid credentials/i);
});

// AT-3: Registration with empty fields
test('AT-3: Registration fails when fields are empty', async ({ page }) => {
  await page.goto(`${BASE_URL}/login`);
  await page.getByText(/register here/i).click();
  await page.getByTestId('register-button').click();

  // HTML5 validation may block this automatically
  const usernameValid = await page.getByTestId('login-username').locator('input').evaluate(
    el => (el as HTMLInputElement).checkValidity()
  );
  const passwordValid = await page.getByTestId('login-password').locator('input').evaluate(
    el => (el as HTMLInputElement).checkValidity()
  );

  expect(usernameValid).toBeFalsy();
  expect(passwordValid).toBeFalsy();
});

// AT-4: Password too short
test('AT-4: Registration fails when password is too short', async ({ page }) => {
  const user = `short${Date.now()}`;
  await page.goto(`${BASE_URL}/login`);
  await page.getByText(/register here/i).click();

  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Test User');
  await page.getByRole('textbox', { name: 'Full Name' }).press('Enter');
  await page.getByTestId('login-username').locator('input').fill(user);
  await page.getByTestId('login-password').locator('input').fill('123'); // too short
  await page.getByTestId('register-button').click();

  const errorMsg = page.locator('.error');
  await expect(errorMsg).toBeVisible({ timeout: 5000 });
  await expect(errorMsg).toContainText(/password.*too short|minimum/i);
});

// AT-5: Valid login
test('AT-5: Login with valid credentials redirects to community', async ({ page }) => {
  await page.goto(`${BASE_URL}/login`);
  await page.getByTestId('login-username').locator('input').fill('AT');
  await page.getByTestId('login-password').locator('input').fill('automatedtests');
  await page.getByTestId('login-button').click();

  await expect(page).toHaveURL(/\/community|\/dashboard/i);
  await expect(page.locator('text=Talk to the Community')).toBeVisible({ timeout: 10000 });
});

// AT-6: Invalid password
test('AT-6: Login fails with invalid password', async ({ page }) => {
  await page.goto(`${BASE_URL}/login`);
  await page.getByTestId('login-username').locator('input').fill('AT');
  await page.getByTestId('login-password').locator('input').fill('wrong');
  await page.getByTestId('login-button').click();

  // Assert error message appears
  const errorMsg = page.locator('[data-testid="auth-error"]');
  await expect(errorMsg).toBeVisible();
  await expect(errorMsg).toHaveText(/invalid credentials/i);
});

// AT-7: Empty login fields
test('AT-7: Login fails when fields are empty', async ({ page }) => {
  await page.goto(`${BASE_URL}/login`);
  await page.getByTestId('login-button').click();

  const usernameValid = await page.getByTestId('login-username').locator('input').evaluate(
    el => (el as HTMLInputElement).checkValidity()
  );
  const passwordValid = await page.getByTestId('login-password').locator('input').evaluate(
    el => (el as HTMLInputElement).checkValidity()
  );

  expect(usernameValid).toBeFalsy();
  expect(passwordValid).toBeFalsy();
});

// AT-8: Username case sensitivity
test('AT-8: Login fails if username case does not match', async ({ page }) => {
  await page.goto(`${BASE_URL}/login`);
  await page.getByTestId('login-username').locator('input').fill('at'); // lowercase
  await page.getByTestId('login-password').locator('input').fill('automatedtests');
  await page.getByTestId('login-button').click();

  // Assert error message appears
  const errorMsg = page.locator('[data-testid="auth-error"]');
  await expect(errorMsg).toBeVisible();
  await expect(errorMsg).toHaveText(/invalid credentials/i);
});

// AT-9: Register ↔ Login navigation works
test('AT-9: Navigation between login and register pages works', async ({ page }) => {
  await page.goto(`${BASE_URL}/login`);
  await page.getByText(/register here/i).click();
  await expect(page).toHaveURL(/\/register$/);

  await page.getByText(/login here/i).click();
  await expect(page).toHaveURL(/\/login$/);
});