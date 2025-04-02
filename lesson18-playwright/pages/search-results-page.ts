import { Page, Locator } from '@playwright/test';

export class SearchResultsPage {
    private page: Page;

    public constructor(page: Page) {
        this.page = page;
    }

    public get shotCards(): Locator {
        return this.page.locator('.shot-thumbnail');
    }

    public get shotHeader(): Locator {
        return this.page.locator('.shot-header');
    }

    public get searchInput(): Locator {
        return this.page.locator('.site-nav-search__input');
    }

    public async getShotsCount(): Promise<number> {
        return await this.shotCards.count();
    }

    public async clickOnFirstShot(): Promise<void> {
        await this.shotCards.first().click();
    }
}
