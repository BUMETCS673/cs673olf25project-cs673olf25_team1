import { test, expect } from '@playwright/test';
import { login } from './helpers';


test('AT-1: Profile page loads and customization UI is visible', async ({ page }) => {
    await login(page);
    await page.getByRole('link', { name: 'Profile' }).click();
    await expect(page).toHaveURL(/\/profile(?:$|[?#])/);
    await expect(page.getByText(/Theme Color/i)).toBeVisible();
    await expect(page.getByText(/Avatar/i)).toBeVisible();
});

test('AT-2: Selecting avatar and saving updates profile', async ({ page }) => {
    await login(page);
    await page.getByRole('link', { name: 'Profile' }).click();
    await expect(page).toHaveURL(/\/profile(?:$|[?#])/);

    const avatars = page.locator('[aria-label="Click to select"]');
    await avatars.nth(1).click();

    await page.getByRole('button', { name: /save/i }).click();

    // TODO: Replace with success toast or dialog once implemented
    await expect(page.locator('text=Profile updated successfully')).toBeVisible();
});

test('AT-3: Selecting theme color and saving updates profile', async ({ page }) => {
    await login(page);
    await page.getByRole('link', { name: 'Profile' }).click();
    await expect(page).toHaveURL(/\/profile(?:$|[?#])/);

    const color = page.locator('[class*="MuiBox-root"]').nth(2);
    await color.click();

    await page.getByRole('button', { name: /save/i }).click();

    // TODO: Assert on visible change or success message
    await expect(page.locator('text=Profile updated successfully')).toBeVisible();
});

test('AT-4: Profile settings persist after reload', async ({ page }) => {
    await login(page);
    await page.getByRole('link', { name: 'Profile' }).click();
    await expect(page).toHaveURL(/\/profile(?:$|[?#])/);

    const avatars = page.locator('[aria-label="Click to select"]');
    await avatars.nth(1).click();

    await page.getByRole('button', { name: /save/i }).click();

    await page.reload();
    await expect(avatars.nth(1)).toHaveAttribute('aria-selected', 'true');
});

test('AT-5: Unauthorized user cannot access profile page', async ({ page }) => {
    await page.goto('http://localhost:8000/profile');
    await expect(page.locator('text=Not authorized')).toBeVisible();
});

