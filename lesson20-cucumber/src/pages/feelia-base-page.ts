import { FeeliaSideMenuElement } from '../elements/feelia-side-menu-element.ts';
import { Page } from '@playwright/test';
import { FeeliaHeaderElement } from '../elements/feelia-header-element.ts';

export class FeeliaBasePage {
    private readonly sideBar: FeeliaSideMenuElement;
    private readonly header: FeeliaHeaderElement;

    public constructor(protected readonly page: Page) {
        this.page = page;
        this.sideBar = new FeeliaSideMenuElement(this.page.locator('[role="complementary"]'));
        this.header = new FeeliaHeaderElement(this.page.locator('[role="banner"]'));
    }

    public async login(username: string, password: string): Promise<void> {
        await this.page.goto('https://stage-ferp.fi/user/login');
        await this.page.fill('input[name="username"]', username);
        await this.page.fill('input[name="password"]', password);
        await this.page.click('button[type="submit"]');
        await this.page.waitForLoadState('networkidle');
    }

    // Header interactions
    public async openUserProfileModal(): Promise<void> {
        await this.header.clickUserProfile();
    }

    public async openNotificationsModal(): Promise<void> {
        await this.header.clickNotifications();
    }

    public async openGuide(): Promise<void> {
        await this.header.clickGuide();
    }

    // Side menu interactions
    public async navigateToOrders(): Promise<void> {
        await this.sideBar.navigateToOrders();
    }

    public async navigateToSpecial(): Promise<void> {
        await this.sideBar.navigateToSpecial();
    }

    public async navigateToHistory(): Promise<void> {
        await this.sideBar.navigateToHistory();
    }

    public async navigateToDiets(): Promise<void> {
        await this.sideBar.navigateToDiets();
    }

    public async navigateToFaqs(): Promise<void> {
        await this.sideBar.navigateToFaqs();
    }

    public async navigateToContactUs(): Promise<void> {
        await this.sideBar.navigateToContactUs();
    }

    public async toggleSidebar(): Promise<void> {
        await this.sideBar.collapseSidebar();
    }

    // Page navigation and loading
    public async navigateTo(): Promise<void> {
        await this.page.goto('https://stage-ferp.fi/order');
    }

    public async waitForPageLoad(): Promise<void> {
        await this.page.waitForLoadState('networkidle');
    }

    public async getPageTitle(): Promise<string> {
        return await this.page.title();
    }

    public async isHeaderVisible(): Promise<boolean> {
        return this.page.getByRole('heading', { level: 1, name: /Tilaushistoria/i }).isVisible();
    }

    public async isSideBarVisible(): Promise<boolean> {
        return this.page.getByRole('navigation').isVisible();
    }
}
