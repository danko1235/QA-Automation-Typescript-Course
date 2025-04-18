import { Page, Locator } from '@playwright/test';
import { FeeliaBasePage } from './feelia-base-page.ts';

export class FeeliaLoginPage extends FeeliaBasePage {
    private get usernameInput(): Locator {
        return this.page.locator('input[type="email"]');
    }
    private get passwordInput(): Locator {
        return this.page.locator('input[type="password"]');
    }
    private get loginButton(): Locator {
        return this.page.locator('button[type="submit"]');
    }
    public constructor(page: Page) {
        super(page);
    }

    public async navigateTo(): Promise<void> {
        await this.page.goto('https://stage-ferp.fi/order');
        if (await this.isLoggedIn()) {
            console.log('Already logged in, skipping navigation to login page');
            return;
        }

        await this.page.goto('https://stage-ferp.fi/user/login');
        console.log('Navigated to login page, URL:', this.page.url());
        await this.waitForPageLoad();
    }

    public async login(username = 'example+25@feelia.com', password = '123456'): Promise<void> {
        if (await this.isLoggedIn()) {
            console.log('Already logged in, skipping login form submission');
            return;
        }

        console.log('Login with:', username, password);
        await this.fillLoginForm(username, password);
        await this.submitLoginForm();
        const isLoggedIn = await this.isLoggedIn();
        console.log('Login successful:', isLoggedIn);
    }

    public async fillLoginForm(username: string, password: string): Promise<void> {
        const usernameVisible = await this.usernameInput.isVisible();
        const passwordVisible = await this.passwordInput.isVisible();

        if (!usernameVisible || !passwordVisible) {
            console.log('Login form elements not visible. Username visible:', usernameVisible, 'Password visible:', passwordVisible);
            return;
        }

        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
    }

    public async submitLoginForm(): Promise<void> {
        if (!(await this.loginButton.isVisible())) {
            console.log('Login button not visible, skipping form submission');
            return;
        }

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
