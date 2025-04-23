import { test, expect } from '../src/setup/test-setup';
import { BasePage } from '../src/pages/base-page';
import { LoginPage } from '../src/pages/login-page';

test.describe('header navigation', () => {
    let basePage: BasePage;
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        basePage = new BasePage(page);
        loginPage = new LoginPage(page);
        await loginPage.navigateTo();
    });

    test('should logout successfully', async ({ page }) => {
        await basePage.logout();
        await page.waitForLoadState('networkidle');

        expect(page.url()).toContain('/auth/logout');
        expect(page.locator('text=Користувач успішно покинув систему')).toBeTruthy();
    });

    test('should navigate to profile page by clicking user profile', async ({ page }) => {
        await basePage.clickUserProfile();
        await basePage.waitForPageLoad();

        expect(page.url()).toMatch('https://new.fophelp.pro/auth/profile');
    });

    test('should navigate to home page by clicking logo', async ({ page }) => {
        await basePage.clickLogo();
        await basePage.waitForPageLoad();

        expect(page.url()).toMatch('https://new.fophelp.pro/');
        expect(page.locator('text=Вітаю!')).toBeTruthy();
    });

    test('should navigate to home page by clicking home', async ({ page }) => {
        await basePage.clickHome();
        await basePage.waitForPageLoad();

        expect(page.url()).toMatch('https://new.fophelp.pro/');
        expect(page.locator('text=Вітаю!')).toBeTruthy();

    });
});
