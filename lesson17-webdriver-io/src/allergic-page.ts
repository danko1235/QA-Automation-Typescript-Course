import Page from './Page';
import { $ } from '@wdio/globals';

class AllergicPage extends Page {
    public get allergicLink() {
        return $('a[href="/allergic"]');
    }

    public async navigate() {
        await this.allergicLink.waitForDisplayed();
        await this.allergicLink.click();
        await browser.waitUntil(async () => (await browser.getUrl()).includes('/allergic'));
    }

    public async open() {
        await super.open('/allergic');
    }
}

export default new AllergicPage();
