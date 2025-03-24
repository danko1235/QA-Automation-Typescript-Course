import { Browser, Page } from 'puppeteer';
import puppeteer from 'puppeteer';
import { expect } from 'chai';

describe('Login and Navigation Tests', function () {
    this.timeout(30000);

    let browser: Browser;
    let page: Page;

    before(async () => {
        browser = await puppeteer.launch({
            headless: false
        });
    });

    after(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        page = await browser.newPage();
        await page.goto('https://stage-ferp.fi/user/login');

        const emailSelector = 'input.ui-input__element[type="email"]';
        await page.waitForSelector(emailSelector, { timeout: 10000 });
        await page.type(emailSelector, 'example+25@feelia.com');

        const passwordSelector = 'input.ui-input__element[type="password"]';
        await page.waitForSelector(passwordSelector, { timeout: 10000 });
        await page.type(passwordSelector, '123456');

        const loginButtonSelector = 'button.ui-button.size-56.primary.form-btn[type="submit"]';
        await page.click(loginButtonSelector);
    });

    afterEach(async () => {
        await page.close();
    });

    it('Login', async () => {
        await page.waitForFunction(() => window.location.href.includes('/order'), { timeout: 10000 });

        const currentUrl = page.url();
        expect(currentUrl).to.include('/order');
    });

    it('Navigate to Order history', async () => {
        const orderHistorySelector = 'a[href="/order-history"]';
        await page.waitForSelector(orderHistorySelector, { timeout: 10000 });
        await page.click(orderHistorySelector);

        await page.waitForFunction(() => window.location.href.includes('/order-history'), { timeout: 10000 });

        const currentUrl = page.url();
        expect(currentUrl).to.include('/order-history');
    });

    it('Navigate to Diet and allergies', async () => {
        const allergicSelector = 'a[href="/allergic"]';
        await page.waitForSelector(allergicSelector, { timeout: 10000 });
        await page.click(allergicSelector);

        await page.waitForFunction(() => window.location.href.includes('/allergic'), { timeout: 10000 });

        const currentUrl = page.url();
        expect(currentUrl).to.include('/allergic');
    });
});
