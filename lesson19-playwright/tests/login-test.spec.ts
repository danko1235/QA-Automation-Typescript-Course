import { test, expect } from '@playwright/test';
import { FeeliaLoginPage } from '../src/pages/feelia-login-page';

test.describe('Feelia Login Page Tests', () => {
    let loginPage: FeeliaLoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new FeeliaLoginPage(page);
        await loginPage.navigateTo();
    });

    test('should login with valid credentials', async () => {
        await loginPage.login('example+25@feelia.com', '123456');
        expect(await loginPage.isLoggedIn()).toBeTruthy();
    });
});
