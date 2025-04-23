import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login-page';

export const test = base.extend({
    page: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo();

        await loginPage.login('dudarxdanko@gmail.com', '12345q!Q');

        await page.waitForTimeout(2000);

        if (!(await loginPage.isLoggedIn())) {
            throw new Error('Failed to authenticate');
        }

        await use(page);
    }
});

export { expect } from '@playwright/test';
