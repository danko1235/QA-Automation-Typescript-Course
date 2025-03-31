import { test, expect } from '@playwright/test';
import { DribbblePage } from '../pages/dribbble';

test.describe('dribbble tests', () => {
    let dribbblePage: DribbblePage;

    test.beforeEach(async ({ page }) => {
        dribbblePage = new DribbblePage(page);
        await dribbblePage.goto();
    });

    test('should display design shots on homepage', async () => {
        const shotsCount = await dribbblePage.getShotsCount();
        expect(shotsCount).toBeGreaterThan(0);
    });

    test('should navigate to shot detail page when clicking on a shot', async () => {
        await dribbblePage.clickOnFirstShot();
        await dribbblePage.page.waitForSelector('.shot-header');
        await expect(dribbblePage.page).toHaveURL(/shots/);
    });

    test('should search', async () => {
        await dribbblePage.search('mobile app');
        await expect(dribbblePage.page).toHaveURL(/search/);
        await expect(dribbblePage.page.locator('h1')).toContainText('mobile app');
    });

    test('should load more shots when scrolling to the bottom', async ({ page }) => {
        const initialShotsCount = await dribbblePage.getShotsCount();
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForLoadState('networkidle');
        const newShotsCount = await dribbblePage.getShotsCount();
        expect(newShotsCount).toBeGreaterThanOrEqual(initialShotsCount);
    });
});
