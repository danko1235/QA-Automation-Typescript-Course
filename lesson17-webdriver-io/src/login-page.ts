import Page from './page';
import { $ } from '@wdio/globals';

class LoginPage extends Page {
    public get emailInput() {
        return $('input.ui-input__element[type="email"]');
    }
    public get passwordInput() {
        return $('input.ui-input__element[type="password"]');
    }
    public get loginButton() {
        return $('button.ui-button.size-56.primary.form-btn[type="submit"]');
    }

    public async open() {
        await super.open('/user/login');
    }

    public async login(email: string, password: string) {
        await this.emailInput.waitForDisplayed();
        await this.emailInput.setValue(email);
        await this.passwordInput.waitForDisplayed();
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
        await this.waitForLogin();
    }

    private async waitForLogin() {
        await browser.waitUntil(async () => (await browser.getUrl()).includes('/order'), {
            timeout: 10000,
            timeoutMsg: 'Expected to be redirected to /order after login'
        });
    }
}

export default new LoginPage();
