import Page from '../src/Page';

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

    public async login(email: string, password: string) {
        await this.emailInput.waitForDisplayed();
        await this.emailInput.setValue(email);
        await this.passwordInput.waitForDisplayed();
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    public open() {
        return super.open('/user/login');
    }
}

export default new LoginPage();
