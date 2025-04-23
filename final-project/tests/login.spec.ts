import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/login-page';

test.describe('Login Page Tests', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigateTo();
    });

    test('should login with valid credentials', async () => {
        await loginPage.login('dudarxdanko@gmail.com', '12345q!Q');
        expect(await loginPage.isLoggedIn()).toBeTruthy();
    });

    test('should not login with invalid credentials', async () => {
        await loginPage.login('dudarxdanko@gmail.com', 'wrong-password');
        expect(await loginPage.isLoggedIn()).toBeFalsy();
        expect(await loginPage.getErrorMessageText()).toBeTruthy();
    });
});
