import { Page, Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class IncomesPage extends BasePage {
    private get addButton(): Locator {
        return this.page.getByRole('button').filter({ has: this.page.locator('svg path[d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"]') });
    }

    private get incomeAmountInput(): Locator {
        return this.page.locator('input#Income-New');
    }

    private get incomeDescriptionInput(): Locator {
        return this.page.locator('input#Comment-New');
    }

    private get incomeDateInput(): Locator {
        return this.page.locator('input#Date-New');
    }

    private get saveIncomeButton(): Locator {
        return this.page.locator('button#BtnAdd-New');
    }

    private get cancelButton(): Locator {
        return this.page.locator('button#BtnCancel-New');
    }

    private get incomesList(): Locator {
        return this.page.locator('#test-table tbody tr:not([colspan="6"])');
    }

    public constructor(page: Page) {
        super(page);
    }

    public async navigateTo(): Promise<void> {
        await this.page.goto('https://new.fophelp.pro/incomes');
        await this.waitForPageLoad();
    }

    public async clickAddIncomeButton(): Promise<void> {
        await this.addButton.click();
    }

    public async fillIncomeForm(amount: string, description: string, date: string): Promise<void> {
        await this.incomeAmountInput.fill(amount);
        await this.incomeDescriptionInput.fill(description);
        await this.incomeDateInput.fill(date);
    }

    public async saveIncome(): Promise<void> {
        await this.saveIncomeButton.click();
        await this.waitForPageLoad();
    }

    public async cancelAddIncome(): Promise<void> {
        await this.cancelButton.click();
    }

    public async addNewIncome(amount: string, description: string, date: string): Promise<void> {
        await this.clickAddIncomeButton();
        await this.fillIncomeForm(amount, description, date);
        await this.saveIncome();
    }

    public async getIncomesCount(): Promise<number> {
        return await this.incomesList.count();
    }

    public async isIncomeInList(amount: string, description: string): Promise<boolean> {
        const incomeText = await this.incomesList.allTextContents();
        return incomeText.some((text) => text.includes(amount) && text.includes(description));
    }
}
