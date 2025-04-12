import { Locator } from '@playwright/test';

export class FeeliaHeaderElement {

    private get userProfileMoreButton(): Locator {
        return this.baseLocator.locator('.button.ui-button.size-48.btn-nav.square[type="button"]');
    }

    private get notificationsButton(): Locator {
        return this.baseLocator.locator('button.ui-button.size-48.secondary.round[data-count="0"]');
    }

    private get guideButton(): Locator {
        return this.baseLocator.locator('a.ui-button.size-48.guide.primary.icon-l');
    }

    public constructor(private baseLocator: Locator) {}

    public async clickUserProfile(): Promise<void> {
        await this.userProfileMoreButton.click();
    }

    public async clickNotifications(): Promise<void> {
        await this.notificationsButton.click();
    }


    public async clickGuide(): Promise<void> {
        await this.guideButton.click();
    }

    public async isVisible(): Promise<boolean> {
        return await this.baseLocator.isVisible();
    }
}
