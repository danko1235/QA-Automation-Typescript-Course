import { Page, Locator } from '@playwright/test';
import { FeeliaBasePage } from './feelia-base-page.ts';

export class FeeliaLoginPage extends FeeliaBasePage {
    private get usernameInput(): Locator {
        return this.page.locator('input[type="email"], input[name="username"], input[placeholder*="email"], input.ui-input__element');
    }
    private get passwordInput(): Locator {
        return this.page.locator('input[type="password"], input[name="password"], input.ui-input__element[type="password"]');
    }
    private get loginButton(): Locator {
        return this.page.locator('button[type="submit"], button.ui-button[type="submit"], button.form-btn');
    }
    public constructor(page: Page) {
        super(page);
    }

    public async navigateTo(): Promise<void> {
        await this.page.goto('https://stage-ferp.fi/user/login');
        console.log('Navigated to login page, URL:', this.page.url());
        await this.waitForPageLoad();
        await this.page.screenshot({ path: 'login-page.png' });
    }

    public async login(username = 'example+25@feelia.com', password = '123456'): Promise<void> {
        console.log('Login with:', username, password);
        await this.fillLoginForm(username, password);
        await this.submitLoginForm();
        const isLoggedIn = await this.isLoggedIn();
        console.log('Login successful:', isLoggedIn);
        if (!isLoggedIn) {
            await this.page.screenshot({ path: 'login-failed.png' });
        }
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
