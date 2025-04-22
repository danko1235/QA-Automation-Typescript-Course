import Page from './page';
import { $ } from '@wdio/globals';

class OrderHistoryPage extends Page {
    public get orderHistoryLink() {
        return $('a[href="/order-history"]');
    }

    public async navigate() {
        await this.orderHistoryLink.waitForDisplayed();
        await this.orderHistoryLink.click();
        await browser.waitUntil(async () => (await browser.getUrl()).includes('/order-history'));
    }

    public async open() {
        await super.open('/order-history');
    }
}

export default new OrderHistoryPage();
