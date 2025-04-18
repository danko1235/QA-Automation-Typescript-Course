import { IWorldOptions, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from 'playwright';
import { FeeliaBasePage } from '../pages/feelia-base-page.ts';
import { FeeliaLoginPage } from '../pages/feelia-login-page.ts';
import { FeeliaOrderHistoryPage } from '../pages/feelia-order-history-page.ts';

export class FeeliaWorld extends World {
    public static globalContext: Map<string, unknown> = new Map<string, unknown>();
    public scenarioContext: Map<string, unknown>;

    public static browser: Browser;
    public context: BrowserContext;
    public page: Page;

    private _feeliaBasePage?: FeeliaBasePage;
    private _feeliaLoginPage?: FeeliaLoginPage;
    private _feeliaOrderHistoryPage?: FeeliaOrderHistoryPage;

    public get browser(): Browser {
        return FeeliaWorld.browser;
    }

    public get globalContext(): Map<string, unknown> {
        return FeeliaWorld.globalContext;
    }

    public get feeliaBasePage(): FeeliaBasePage {
        if (!this._feeliaBasePage && this.page) {
            this._feeliaBasePage = new FeeliaBasePage(this.page);
        }
        return this._feeliaBasePage!;
    }

    public get feeliaLoginPage(): FeeliaLoginPage {
        if (!this._feeliaLoginPage && this.page) {
            this._feeliaLoginPage = new FeeliaLoginPage(this.page);
        }
        return this._feeliaLoginPage!;
    }

    public get feeliaOrderHistoryPage(): FeeliaOrderHistoryPage {
        if (!this._feeliaOrderHistoryPage && this.page) {
            this._feeliaOrderHistoryPage = new FeeliaOrderHistoryPage(this.page);
        }
        return this._feeliaOrderHistoryPage!;
    }

    public constructor(options: IWorldOptions) {
        super(options);
        this.scenarioContext = new Map<string, unknown>();
    }
}
