import { Page, Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class LoginPage extends BasePage {
    private get emailInput(): Locator {
        return this.page.locator('#email, input[type="email"]');
    }

    private get passwordInput(): Locator {
        return this.page.locator('#password, input[type="password"]');
    }

    private get loginButton(): Locator {
        return this.page.locator('button[type="submit"]');
    }

    private get errorMessageText(): Locator {
        return this.page.locator('//label[@class="form-label" and contains(@style, "color: red") and text()="Помилка авторизації. Неправильний логін чи пароль"]');
    }

    public constructor(page: Page) {
        super(page);
    }

    public async navigateTo(): Promise<void> {
        await this.page.goto('https://new.fophelp.pro/auth/login');
        await this.waitForPageLoad();
    }

    public async login(email = 'dudarxdanko@gmail.com', password = '12345q!Q'): Promise<void> {
        await this.fillLoginForm(email, password);
        await this.submitLoginForm();
    }

    public async fillLoginForm(email: string, password: string): Promise<void> {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
    }

    public async submitLoginForm(): Promise<void> {
        await this.loginButton.click();
        await this.waitForPageLoad();
    }

    public async getErrorMessageText(): Promise<string | null> {
        if (await this.errorMessageText.isVisible()) {
            return await this.errorMessageText.innerText();
        }
        return null;
    }

    public async isLoggedIn(): Promise<boolean> {
        await this.page.waitForTimeout(1000);
        const currentUrl = this.page.url();
        return !currentUrl.includes('/login');
    }
}
