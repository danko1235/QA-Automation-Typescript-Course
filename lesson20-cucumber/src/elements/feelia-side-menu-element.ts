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
        const isVisible = await this.orderMenuItem.isVisible();
        console.log('Orders menu item visible:', isVisible);

        if (!isVisible) {
            console.log('Direct page locator');
            await this.baseLocator.page().locator('a[href="/order"]').click();
            return;
        }

        await this.orderMenuItem
            .waitFor({ state: 'visible', timeout: 5000 })
            .catch(() => console.log('Menu item not visible after waiting'));
        await this.orderMenuItem.click();
    }

    public async navigateToSpecial(): Promise<void> {
        const isVisible = await this.specialMenuItem.isVisible();
        console.log('Special menu item visible:', isVisible);

        if (!isVisible) {
            console.log('Direct page locator');
            await this.baseLocator.page().locator('a[href="/order-special"]').click();
            return;
        }

        await this.specialMenuItem.waitFor({ state: 'visible', timeout: 5000 }).catch((error) => {
            console.error('Error waiting for special menu item to become visible:', error);
        });
        await this.specialMenuItem.click();
    }

    public async navigateToHistory(): Promise<void> {
        const isVisible = await this.orderHistoryMenuItem.isVisible();
        console.log('History menu item visible:', isVisible);

        if (!isVisible) {
            console.log('Direct page locator');
            await this.baseLocator.page().locator('a[href="/order-history"]').click();
            return;
        }

        await this.orderHistoryMenuItem.waitFor({ state: 'visible', timeout: 5000 }).catch((error) => {
            console.error('Error waiting for order history menu item to become visible:', error);
        });
        await this.orderHistoryMenuItem.click();
    }

    public async navigateToDiets(): Promise<void> {
        const isVisible = await this.dietsMenuItem.isVisible();

        if (!isVisible) {
            await this.baseLocator.page().locator('a[href="/allergic"]').click();
            return;
        }

        await this.dietsMenuItem.waitFor({ state: 'visible', timeout: 5000 }).catch((error) => {
            console.error('Error waiting for diets menu item to become visible:', error);
        });
        await this.dietsMenuItem.click();
    }

    public async navigateToFaqs(): Promise<void> {
        const isVisible = await this.faqsMenuItem.isVisible();
        console.log('FAQs menu item visible:', isVisible);

        if (!isVisible) {
            console.log('Direct page locator');
            await this.baseLocator.page().locator('a[href="/faq"]').click();
            return;
        }

        await this.faqsMenuItem.waitFor({ state: 'visible', timeout: 5000 }).catch((error) => {
            console.error('Error waiting for FAQs menu item to become visible:', error);
        });
        await this.faqsMenuItem.click();
    }

    public async navigateToContactUs(): Promise<void> {
        const isVisible = await this.contactUsMenuItem.isVisible();

        if (!isVisible) {
            await this.baseLocator.page().locator('a[href="/contact-us"]').click();
            return;
        }

        await this.contactUsMenuItem.waitFor({ state: 'visible', timeout: 5000 }).catch((error) => {
            console.error('Error waiting for Contact Us menu item to become visible:', error);
        });
        await this.contactUsMenuItem.click();
    }

    public async collapseSidebar(): Promise<void> {
        const isVisible = await this.collapseButton.isVisible();

        if (!isVisible) {
            console.log('Collapse button not visible, skipping');
            return;
        }

        await this.collapseButton.click();
    }

    public async isVisible(): Promise<boolean> {
        return await this.baseLocator.isVisible();
    }

    public async getMenuItemCount(): Promise<number> {
        return await this.sideMenuElements.locator('a').count();
    }
}
