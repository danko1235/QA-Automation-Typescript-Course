import { test as base } from '@playwright/test';
import { FeeliaLoginPage } from '../pages/feelia-login-page.ts';

export const test = base.extend({
    page: async ({ page }, use) => {
        const loginPage = new FeeliaLoginPage(page);

        await loginPage.navigateTo();
        await loginPage.login('example+25@feelia.com', '123456');

        if (!(await loginPage.isLoggedIn())) {
            throw new Error('Не вдалося авторизуватися');
        }

        await use(page);
    }
});

export { expect } from '@playwright/test';
