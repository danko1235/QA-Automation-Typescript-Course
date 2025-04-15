import { When, Then } from '@cucumber/cucumber';
import { FeeliaWorld } from '../world/feelia.world.ts';
import { expect } from '@playwright/test';

When('the user navigates to Order History page', async function (this: FeeliaWorld) {
    console.log('Navigating to Order History page');

    try {
        await this.page.goto('https://stage-ferp.fi/order-history');
        await this.page.waitForLoadState('networkidle');
    } catch (error) {
        console.error('Error navigating to Order History page:', error);
        throw error;
    }
});

When('the user clicks on the Orders menu item', async function (this: FeeliaWorld) {
    console.log('Clicking on Orders menu item');
    await this.page.click('a[href="/order"]');
    await this.page.waitForLoadState('networkidle');
});

When('the user clicks on the Special Orders menu item', async function (this: FeeliaWorld) {
    console.log('Clicking on Special Orders menu item');
    await this.page.click('a[href="/order-special"]');
    await this.page.waitForLoadState('networkidle');
});

When('the user clicks on the FAQs menu item', async function (this: FeeliaWorld) {
    console.log('Clicking on FAQs menu item');
    await this.page.click('a[href="/faq"]');
    await this.page.waitForLoadState('networkidle');
});

Then('the user should be redirected to the Orders page', async function (this: FeeliaWorld) {
    console.log('Verifying redirection to Orders page');
    const url = this.page.url();
    expect(url).toContain('/order');
});

Then('the user should be redirected to the Special Orders page', async function (this: FeeliaWorld) {
    console.log('Verifying redirection to Special Orders page');
    const url = this.page.url();
    expect(url).toContain('/order-special');
});

Then('the user should be redirected to the FAQs page', async function (this: FeeliaWorld) {
    console.log('Verifying redirection to FAQs page');
    const url = this.page.url();
    expect(url).toContain('/faq');
});
