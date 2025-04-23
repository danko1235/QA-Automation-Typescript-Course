import { Locator } from '@playwright/test';

export class SideMenuElement {
    private get menuItems(): Locator {
        return this.baseLocator.locator('nav[aria-label="side-navigation"]');
    }

    private get profitsMenuItem(): Locator {
        return this.baseLocator.page().getByText('Прибутки');
    }

    private get expensesMenuItem(): Locator {
        return this.baseLocator.page().getByText('Витрати');
    }

    private get taxesMenuItem(): Locator {
        return this.baseLocator.page().getByText('Податки');
    }

    private get taxesCurrentSubItem(): Locator {
        return this.baseLocator.page().locator('nav ul:nth-child(3) ul li:nth-child(1) div');
    }

    private get taxesPaidSubItem(): Locator {
        return this.baseLocator.page().locator('ul:nth-child(3) li:nth-child(2)');
    }

    private get reportsMenuItem(): Locator {
        return this.baseLocator.page().getByText('Звіти');
    }

    private get reportsAllSubItem(): Locator {
        return this.baseLocator.page().locator('nav ul:nth-child(4) ul li:nth-child(1)');
    }

    private get reportsSubmittedSubItem(): Locator {
        return this.baseLocator.page().locator('nav ul:nth-child(4) ul li:nth-child(2)');
    }

    private get basicCalculationMenuItem(): Locator {
        return this.baseLocator.page().getByText('Основи для розрахунку');
    }

    public constructor(private readonly baseLocator: Locator) {}

    public async navigateToProfits(): Promise<void> {
        await this.profitsMenuItem.click();
    }

    public async navigateToExpenses(): Promise<void> {
        await this.expensesMenuItem.click();
    }

    public async navigateToTaxes(): Promise<void> {
        await this.taxesMenuItem.click();
    }

    public async expandTaxesMenu(): Promise<void> {
        const isTaxesSubmenuVisible = (await this.taxesCurrentSubItem.isVisible()) || (await this.taxesPaidSubItem.isVisible());

        if (!isTaxesSubmenuVisible) {
            await this.taxesMenuItem.click();
            await this.baseLocator.page().waitForTimeout(500);
        }
    }

    public async navigateToTaxesCurrent(): Promise<void> {
        await this.expandTaxesMenu();
        await this.taxesCurrentSubItem.click();
    }

    public async navigateToTaxesPaid(): Promise<void> {
        await this.expandTaxesMenu();
        await this.taxesPaidSubItem.click();
    }

    public async navigateToReports(): Promise<void> {
        await this.reportsMenuItem.click();
    }

    public async expandReportsMenu(): Promise<void> {
        const isReportsSubmenuVisible = (await this.reportsAllSubItem.isVisible()) || (await this.reportsSubmittedSubItem.isVisible());

        if (!isReportsSubmenuVisible) {
            await this.reportsMenuItem.click();
            await this.baseLocator.page().waitForTimeout(500);
        }
    }

    public async navigateToReportsAll(): Promise<void> {
        await this.expandReportsMenu();
        await this.reportsAllSubItem.click();
    }

    public async navigateToReportsSubmitted(): Promise<void> {
        await this.expandReportsMenu();
        await this.reportsSubmittedSubItem.click();
    }

    public async isVisible(): Promise<boolean> {
        return await this.baseLocator.isVisible();
    }

    public async getMenuItemCount(): Promise<number> {
        return await this.menuItems.count();
    }

    public async isTaxesSubmenuExpanded(): Promise<boolean> {
        return (await this.taxesCurrentSubItem.isVisible()) || (await this.taxesPaidSubItem.isVisible());
    }

    public async navigateToBasicCalculation(): Promise<void> {
        await this.basicCalculationMenuItem.click();
    }
}
