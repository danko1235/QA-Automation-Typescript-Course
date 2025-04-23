import { test, expect } from '../src/setup/test-setup';
import { BasePage } from '../src/pages/base-page';


test.describe('Navigation Tests', () => {
    let basePage: BasePage;

    test.beforeEach(async ({ page }) => {
        basePage = new BasePage(page);
    });

    test('should navigate to profits page from sidebar', async ({ page }) => {
        await basePage.navigateToProfits();
        await basePage.waitForPageLoad();

        expect(page.url()).toMatch('https://new.fophelp.pro/incomes');
    });

    test('should navigate to expenses page from sidebar', async ({ page }) => {
        await basePage.navigateToExpenses();
        await basePage.waitForPageLoad();

        expect(page.url()).toMatch('https://new.fophelp.pro/expenses');
    });

    test('should navigate to current taxes page from sidebar', async ({ page }) => {
        await basePage.expandTaxesMenu();
        await basePage.navigateToTaxesCurrent();
        await basePage.waitForPageLoad();

        expect(page.url()).toMatch('https://new.fophelp.pro/taxes/pending');
    });

    test('should navigate to paid taxes page from sidebar', async ({ page }) => {
        await basePage.expandTaxesMenu();
        await basePage.navigateToTaxesPaid();
        await basePage.waitForPageLoad();

        expect(page.url()).toMatch('https://new.fophelp.pro/taxes/payed');
    });

    test('should navigate to All reports page from sidebar', async ({ page }) => {
        await basePage.expandReportsMenu();
        await basePage.navigateToReportsAll();
        await basePage.waitForPageLoad();

        expect(page.url()).toMatch('https://new.fophelp.pro/reports/all');
    });

    test('should navigate to submitted reports page from sidebar', async ({ page }) => {
        await basePage.expandReportsMenu();
        await basePage.navigateToReportsSubmitted();
        await basePage.waitForPageLoad();

        expect(page.url()).toMatch('https://new.fophelp.pro/reports/done');
    });

    test('should navigate to basic calculation page from sidebar', async ({ page }) => {
        await basePage.navigateToBasicCalculation();
        await basePage.waitForPageLoad();

        expect(page.url()).toMatch('https://new.fophelp.pro/GovSums');
    });

});
