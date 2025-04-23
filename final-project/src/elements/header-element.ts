import { Locator } from '@playwright/test';

export class HeaderElement {
    private get homeNavigationButton(): Locator {
        return this.baseLocator.locator('a.text-dark.nav-link[href="/"]');
    }

    private get userProfileButton(): Locator {
        return this.baseLocator.locator('a.text-dark.nav-link[href="/auth/profile"]');
    }

    private get logoutButton(): Locator {
        return this.baseLocator.locator('a.text-dark.nav-link[href="/auth/logout"]');
    }

    private get logoButton(): Locator {
        return this.baseLocator.locator('//a[@class="navbar-brand" and text()="FOP.help(new)"]');
    }

    public constructor(private readonly baseLocator: Locator) {}

    public async clickUserProfile(): Promise<void> {
        await this.userProfileButton.click();
    }

    public async clickHome(): Promise<void> {
        await this.homeNavigationButton.click();
    }

    public async clickLogout(): Promise<void> {
        await this.logoutButton.click();
    }

    public async clickLogo(): Promise<void> {
        await this.logoButton.click();
    }

    public async isVisible(): Promise<boolean> {
        return await this.baseLocator.isVisible();
    }
}
