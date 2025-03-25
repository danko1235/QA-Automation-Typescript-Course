import LoginPage from '../src/login-page';
import { expect } from 'chai';
import { $, browser } from '@wdio/globals';


describe('Login and Navigation Tests', () => {
    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login('example+25@feelia.com', '123456');
    });

    it('Login', async () => {
        await browser.waitUntil(async () => (await browser.getUrl()).includes('/order'));
        const currentUrl = await browser.getUrl();
        expect(currentUrl).to.include('/order');
    });

    it('Navigate to Order history', async () => {
        const orderHistoryLink = $('a[href="/order-history"]');
        await orderHistoryLink.waitForDisplayed();
        await orderHistoryLink.click();
        await browser.waitUntil(async () => (await browser.getUrl()).includes('/order-history'));
        expect(await browser.getUrl()).to.include('/order-history');
    });

    it('Navigate to Diet and allergies', async () => {
        const allergicLink = $('a[href="/allergic"]');
        await allergicLink.waitForDisplayed();
        await allergicLink.click();
        await browser.waitUntil(async () => (await browser.getUrl()).includes('/allergic'));
        expect(await browser.getUrl()).to.include('/allergic');
    });
});
