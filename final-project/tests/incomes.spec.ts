import { test, expect } from '../src/setup/test-setup';
import { IncomesPage } from '../src/pages/incomes-page';

test.describe('Incomes Page Tests', () => {
    let incomesPage: IncomesPage;

    test.beforeEach(async ({ page }) => {
        incomesPage = new IncomesPage(page);
        await incomesPage.navigateTo();
    });

    test('should navigate to incomes page', async ({ page }) => {
        expect(page.url()).toMatch('https://new.fophelp.pro/incomes');
    });

    test('should open add income form when clicking add income button', async ({ page }) => {
        await incomesPage.clickAddIncomeButton();
        expect(await page.locator('table#add-new-income').isVisible()).toBeTruthy();
    });

    test('should add new income successfully', async ({ page }) => {
        await page.waitForSelector('#test-table table', { state: 'visible' });

        const initialCount = await incomesPage.getIncomesCount();
        const currentDate = new Date();
        const description = `Test Income ${currentDate.toISOString()}`;
        const amount = '1000';
        const date = currentDate.toISOString().split('T')[0];
        await incomesPage.addNewIncome(amount, description, date);
        const newCount = await incomesPage.getIncomesCount();
        console.log(` New count: ${newCount}`);
        expect(newCount).toBeGreaterThanOrEqual(initialCount);
    });

    test('should cancel adding income', async () => {
        const initialCount = await incomesPage.getIncomesCount();

        await incomesPage.clickAddIncomeButton();
        await incomesPage.cancelAddIncome();
        const newCount = await incomesPage.getIncomesCount();
        expect(newCount).toEqual(initialCount);
    });
});
