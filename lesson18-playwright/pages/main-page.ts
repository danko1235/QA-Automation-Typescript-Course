import { Page, Locator } from '@playwright/test';

export class MainPage {
    private page: Page;

    public constructor(page: Page) {
        this.page = page;
    }

    public async goto(): Promise<void> {
        await this.page.goto('https://dribbble.com');
    }

    public get searchInput(): Locator {
        return this.page.locator('#wrap input.site-nav-search__input');
    }

    public async search(query: string): Promise<void> {
        await this.searchInput.fill(query);
        await this.searchInput.press('Enter');
    }
}
