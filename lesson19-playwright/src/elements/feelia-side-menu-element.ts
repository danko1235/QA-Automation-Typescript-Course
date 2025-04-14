import { Locator } from '@playwright/test';

export class FeeliaSideMenuElement {
    private get sideMenuElements(): Locator {
        return this.baseLocator.locator('.nav.navigation');
    }

    private get orderMenuItem(): Locator {
        return this.sideMenuElements.locator('a.ui-button.size-48.menu[href="/order"]');
    }

    private get specialMenuItem(): Locator {
        return this.sideMenuElements.locator('a.ui-button.size-48.menu[href="/order-special"]');
    }

    private get orderHistoryMenuItem(): Locator {
        return this.sideMenuElements.locator('[href="/order-history"]');
    }

    private get dietsMenuItem(): Locator {
        return this.sideMenuElements.locator('[href="/allergic"]');
    }

    private get faqsMenuItem(): Locator {
        return this.sideMenuElements.locator('[href="/faq"]');
    }

    private get contactUsMenuItem(): Locator {
        return this.sideMenuElements.locator('[href="/contact-us"]');
    }

    private get collapseButton(): Locator {
        return this.baseLocator.locator('button.show-nav.flex-center[type="button"]');
    }

    public constructor(private readonly baseLocator: Locator) {}

    public async navigateToOrders(): Promise<void> {
        await this.orderMenuItem.click();
    }

    public async navigateToSpecial(): Promise<void> {
        await this.specialMenuItem.click();
    }

    public async navigateToHistory(): Promise<void> {
        await this.orderHistoryMenuItem.click();
    }

    public async navigateToDiets(): Promise<void> {
        await this.dietsMenuItem.click();
    }

    public async navigateToFaqs(): Promise<void> {
        await this.faqsMenuItem.click();
    }

    public async navigateToContactUs(): Promise<void> {
        await this.contactUsMenuItem.click();
    }

    public async collapseSidebar(): Promise<void> {
        await this.collapseButton.click();
    }

    public async isVisible(): Promise<boolean> {
        return await this.baseLocator.isVisible();
    }

    public async getMenuItemCount(): Promise<number> {
        return await this.sideMenuElements.locator('a').count();
    }
}
