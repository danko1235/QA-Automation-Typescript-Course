import { Page, Locator } from '@playwright/test';
import { FeeliaBasePage } from './feelia-base-page.ts';

export class FeeliaOrderHistoryPage extends FeeliaBasePage {
    private get orderHistoryContent(): Locator {
        return this.page.locator('h1.ui-page-title[data-count="6"]');
    }

    private get orderHistoryList(): Locator {
        return this.page.locator('div.ui-table.table');
    }

    private get orderItems(): Locator {
        return this.orderHistoryList.locator('div.t-row.tr-b');
    }

    public constructor(page: Page) {
        super(page);
    }

    public async navigateTo(): Promise<void> {
        await this.page.goto('https://stage-ferp.fi/order-history');
        await this.waitForPageLoad();
    }

    public async getOrderCount(): Promise<number> {
        return await this.orderItems.count();
    }

    public async openOrderDetails(index: number): Promise<void> {
        await this.orderItems.nth(index).click();
        await this.page.locator('h1:has-text("Tilaus №")').waitFor({ state: 'visible' });
    }

    public async isOrderDetailsVisible(): Promise<boolean> {
        return await this.page.locator('h1:has-text("Tilaus №")').isVisible();
    }

    public async isPageLoaded(): Promise<boolean> {
        return await this.orderHistoryContent.isVisible();
    }
}
