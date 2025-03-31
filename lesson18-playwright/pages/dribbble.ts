import { Page, Locator } from '@playwright/test';

export class DribbblePage {
    private page: Page;

    private shotCards: Locator;
    private searchInput: Locator;

    public constructor(page: Page) {
        this.page = page;

        this.searchInput = page.locator('#wrap input.site-nav-search__input');
        this.shotCards = page.locator('.shot-thumbnail');
    }

    public async goto(): Promise<void> {
        await this.page.goto('https://dribbble.com/');
    }

    public async search(keyword: string): Promise<void> {
        await this.searchInput.click();
        await this.searchInput.fill(keyword);
        await this.page.keyboard.press('Enter');
        await this.page.waitForURL(/search/);
    }

    public async clickOnFirstShot(): Promise<void> {
        await this.shotCards.first().click();
        await this.page.waitForSelector('.shot-header');
    }

    public async getShotsCount(): Promise<number> {
        return await this.shotCards.count();
    }
}
