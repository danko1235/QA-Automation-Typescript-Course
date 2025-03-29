import LoginPage from '../src/login-page';
import OrderHistoryPage from '../src/order-history-page';
import AllergicPage from '../src/allergic-page';
import { expect } from 'chai';
import { browser } from '@wdio/globals';

describe('Login and Navigation Tests', () => {
    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login('example+25@feelia.com', '123456');
    });

    it('Login', async () => {
        expect(await browser.getUrl()).to.include('/order');
    });

    it('Order history', async () => {
        await OrderHistoryPage.navigate();
        expect(await browser.getUrl()).to.include('/order-history');
    });

    it('Diet and allergies', async () => {
        await AllergicPage.navigate();
        expect(await browser.getUrl()).to.include('/allergic');
    });
});
