import { Page, Locator } from '@playwright/test';
import { FeeliaBasePage } from './feelia-base-page';

export class FeeliaLoginPage extends FeeliaBasePage {
    private get usernameInput(): Locator {
        return this.page.locator('input.ui-input__element[type="email"]');
    }

    private get passwordInput(): Locator {
        return this.page.locator('input.ui-input__element[type="password"]');
    }

    private get loginButton(): Locator {
        return this.page.locator('button.ui-button.size-56.primary.form-btn[type="submit"]');
    }

    public constructor(page: Page) {
        super(page);
    }

    public async navigateTo(): Promise<void> {
        await this.page.goto('https://stage-ferp.fi/user/login');
        await this.waitForPageLoad();
    }

    public async login(username = 'example+25@feelia.com', password = '123456'): Promise<void> {
        await this.fillLoginForm(username, password);
        await this.submitLoginForm();
    }

    public async fillLoginForm(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
    }

    public async submitLoginForm(): Promise<void> {
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    private get loginForm(): Locator {
        return this.page.locator('form[data-v-d2d4b594]');
    }

    public async isLoggedIn(): Promise<boolean> {
        await this.page.waitForTimeout(1000);
        const currentUrl = this.page.url();
        return !currentUrl.includes('/user/login') && !currentUrl.includes('/login');
    }
}
