import { test, expect } from '@playwright/test';

test.describe('Expense Tracker App Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
    });

    test('should have the correct title', async ({ page }) => {
        await expect(page.locator('//h2[text()="Expense Tracker App"]')).toBeVisible();
    });

    test('should have 2 filed and button', async ({ page }) => {
        await expect(page.locator('input[type="text"]')).toBeVisible();
        await expect(page.locator('input[type="number"]')).toBeVisible();
        await expect(page.locator('input[type="number"]')).toBeVisible();
    });
});
