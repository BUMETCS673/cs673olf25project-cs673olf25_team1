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
    await page.goto(BASE_URL + '/login');
    // Click the register text 
    await page.getByText("Don't have an account? Register here").click();
    await page.getByPlaceholder('Full Name').fill('Test User');
    await page.getByPlaceholder('Username').fill(user);
    await page.getByPlaceholder('Password').fill('password123');
    await page.getByRole('button', { name: 'Register' }).click();

    await expect(page).toHaveURL(/\/community|\/login|\/dashboard/i);
  });

  // AT-2: Register with an existing username
  test('AT-2: Registration fails when username already exists', async ({ page }) => {
    const user = `user${Date.now()}`;
    await page.goto(BASE_URL + '/login');
    // Click the register text 
    await page.getByText("Don't have an account? Register here").click();
    await page.getByPlaceholder('Full Name').fill('Test User');
    await page.getByPlaceholder('Username').fill(user);
    await page.getByPlaceholder('Password').fill('password123');
    await page.getByRole('button', { name: 'Register' }).click();

    await page.goto(BASE_URL + '/login');
    // Click the register text 
    await page.getByText("Don't have an account? Register here").click();
    await page.getByPlaceholder('Full Name').fill('Test User');
    await page.getByPlaceholder('Username').fill(user);
    await page.getByPlaceholder('Password').fill('password123');
    await page.getByRole('button', { name: 'Register' }).click();

    const errorMsg = page.locator('.error');
    await expect(errorMsg).toBeVisible({ timeout: 5000 });
    await expect(errorMsg).toHaveText(/already exists|username taken|duplicate/i);
  });

  // AT-3: Registration with empty fields
  test('AT-3: Registration fails when fields are empty', async ({ page }) => {
    await page.goto(BASE_URL + '/login');
    // Click the register text
    await page.getByText("Don't have an account? Register here").click();
    await page.getByRole('button', { name: 'Register' }).click();

    // Expect required validation
    await expect(page.locator('input[placeholder="Full Name"]:invalid')).toBeVisible();
    await expect(page.locator('input[placeholder="Username"]:invalid')).toBeVisible();
    await expect(page.locator('input[placeholder="Password"]:invalid')).toBeVisible();
  });

  // AT-4: Password too short
  test('AT-4: Registration fails when password is too short', async ({ page }) => {
    const user = `shortpass${Date.now()}`;
    await page.goto(BASE_URL + '/login');
    // Click the register text
    await page.getByText("Don't have an account? Register here").click();
    await page.getByPlaceholder('Full Name').fill('Short Pass');
    await page.getByPlaceholder('Username').fill(user);
    await page.getByPlaceholder('Password').fill('123');
    await page.getByRole('button', { name: 'Register' }).click();

    const errorMsg = page.locator('.error');
    await expect(errorMsg).toBeVisible({ timeout: 5000 });
    await expect(errorMsg).toContainText(/password.*too short|minimum/i);
  });

  // AT-5: Successful login with valid credentials
  test('AT-5: Login with valid credentials redirects to community', async ({ page }) => {
    await page.goto(BASE_URL + '/login');
    await page.getByPlaceholder('Username').fill('AT');
    await page.getByPlaceholder('Password').fill('automatedtests');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/\/community|\/dashboard/i);
    await expect(page.locator('text=Talk to the Community')).toBeVisible({ timeout: 10000 });
  });

  // AT-6: Invalid login (wrong password)
  test('AT-06: Login fails with invalid password', async ({ page }) => {
    await page.goto(BASE_URL + '/login');
    await page.getByPlaceholder('Username').fill('AT');
    await page.getByPlaceholder('Password').fill('wrong');
    await page.getByRole('button', { name: 'Login' }).click();

    const errorMsg = page.locator('.error');
    await expect(errorMsg).toBeVisible({ timeout: 5000 });
    await expect(errorMsg).toHaveText(/invalid credentials/i);
  });

  // AT-7: Login with empty fields
  test('AT-07: Login fails when username or password is missing', async ({ page }) => {
    await page.goto(BASE_URL + '/login');
    await page.getByPlaceholder('Username').fill('');
    await page.getByPlaceholder('Password').fill('');
    await page.getByRole('button', { name: 'Login' }).click();

    // Expect built-in HTML5 validation to prevent submission
    const usernameValid = await page.getByPlaceholder('Username').evaluate(el => (el as HTMLInputElement).checkValidity());
    const passwordValid = await page.getByPlaceholder('Password').evaluate(el => (el as HTMLInputElement).checkValidity());
    expect(usernameValid).toBeFalsy();
    expect(passwordValid).toBeFalsy();
  });

  // AT-8: Case sensitivity check for login
  test('AT-8: Login fails if username case does not match', async ({ page }) => {
    await page.goto(BASE_URL + '/login');
    await page.getByPlaceholder('Username').fill('at');
    await page.getByPlaceholder('Password').fill('automatedtests');
    await page.getByRole('button', { name: 'Login' }).click();

    const errorMsg = page.locator('.error');
    await expect(errorMsg).toBeVisible({ timeout: 5000 });
    await expect(errorMsg).toHaveText(/invalid credentials/i);
  });

  // AT-9: Navigation between login and register
  test('AT-9: Navigation between login and register pages works', async ({ page }) => {
    await page.goto(BASE_URL + '/login');
    await page.getByText(/register here/i).click();
    await expect(page).toHaveURL(/\/register$/);

    await page.getByText(/login here/i).click();
    await expect(page).toHaveURL(/\/login$/);
  });
