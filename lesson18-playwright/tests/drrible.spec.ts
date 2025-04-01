import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main-page';
import { SearchResultsPage } from '../pages/search-results-page';

test.describe('Dribbble tests', () => {
    let mainPage: MainPage;
    let searchResultsPage: SearchResultsPage;

    test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page);
        searchResultsPage = new SearchResultsPage(page);
        await mainPage.goto();
    });

    test('should display design shots on homepage', async () => {
        const shotsCount = await searchResultsPage.getShotsCount();
        expect(shotsCount).toBeGreaterThan(0);
    });

    test('should navigate to shot detail page when clicking on a shot', async () => {
        await searchResultsPage.clickOnFirstShot();
        await searchResultsPage.shotHeader.waitFor();
        await expect(searchResultsPage.shotHeader).toBeVisible();
    });

    test('should search', async () => {
        await mainPage.search('mobile app');
        await expect(searchResultsPage.searchInput).toHaveValue('mobile app');
    });

    test('should load more shots when scrolling to the bottom', async ({ page }) => {
        const initialShotsCount = await searchResultsPage.getShotsCount();
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForLoadState('networkidle');
        const newShotsCount = await searchResultsPage.getShotsCount();
        expect(newShotsCount).toBeGreaterThanOrEqual(initialShotsCount);
    });
});
