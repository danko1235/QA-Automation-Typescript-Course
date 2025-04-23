import { Page } from '@playwright/test';
import { HeaderElement } from '../elements/header-element';
import { SideMenuElement } from '../elements/side-menu-element';

export class BasePage {
    protected readonly header: HeaderElement;
    protected readonly sideMenu: SideMenuElement;

    public constructor(protected readonly page: Page) {
        this.page = page;
        this.header = new HeaderElement(this.page.locator('nav.navbar'));
        this.sideMenu = new SideMenuElement(this.page.locator('[role="navigation"]'));
    }

    public async login(username: string, password: string): Promise<void> {
        await this.page.goto('https://new.fophelp.pro/auth/login');
        await this.page.fill('#email, input[type="email"]', username);
        await this.page.fill('#password, input[type="password"]', password);
        await this.page.click('button[type="submit"]');
        await this.page.waitForLoadState('networkidle');
    }

    // Header interactions
    public async clickUserProfile(): Promise<void> {
        await this.header.clickUserProfile();
    }

    public async clickHome(): Promise<void> {
        await this.header.clickHome();
    }

    public async logout(): Promise<void> {
        await this.header.clickLogout();
    }

    public async clickLogo(): Promise<void> {
        await this.header.clickLogo();
    }

    // Side menu interactions
    public async navigateToProfits(): Promise<void> {
        await this.sideMenu.navigateToProfits();
    }

    public async navigateToExpenses(): Promise<void> {
        await this.sideMenu.navigateToExpenses();
    }

    public async navigateToTaxes(): Promise<void> {
        await this.sideMenu.navigateToTaxes();
    }

    public async expandTaxesMenu(): Promise<void> {
        await this.sideMenu.expandTaxesMenu();
    }

    public async navigateToTaxesCurrent(): Promise<void> {
        await this.sideMenu.navigateToTaxesCurrent();
    }

    public async navigateToTaxesPaid(): Promise<void> {
        await this.sideMenu.navigateToTaxesPaid();
    }

    public async navigateToReports(): Promise<void> {
        await this.sideMenu.navigateToReports();
    }

    public async expandReportsMenu(): Promise<void> {
        await this.sideMenu.expandReportsMenu();
    }

    public async navigateToReportsAll(): Promise<void> {
        await this.sideMenu.navigateToReportsAll();
    }

    public async navigateToReportsSubmitted(): Promise<void> {
        await this.sideMenu.navigateToReportsSubmitted();
    }

    public async navigateToBasicCalculation(): Promise<void> {
        await this.sideMenu.navigateToBasicCalculation();
    }

    // Page navigation and loading
    public async navigateTo(): Promise<void> {
        await this.page.goto('https://new.fophelp.pro/');
    }

    public async waitForPageLoad(): Promise<void> {
        await this.page.waitForLoadState('networkidle');
    }

    public async getPageTitle(): Promise<string> {
        return await this.page.title();
    }

    public async isHeaderVisible(): Promise<boolean> {
        return await this.header.isVisible();
    }

    public async isSideMenuVisible(): Promise<boolean> {
        return await this.sideMenu.isVisible();
    }
}
