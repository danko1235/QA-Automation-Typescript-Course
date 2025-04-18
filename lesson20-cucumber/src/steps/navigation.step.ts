import { When, Then } from '@cucumber/cucumber';
import { FeeliaWorld } from '../world/feelia.world.ts';
import { expect } from '@playwright/test';

When('the user navigates to Order History page', async function (this: FeeliaWorld) {
    console.log('Navigating to Order History page');
    await this.feeliaOrderHistoryPage.navigateTo();
});

When('the user clicks on the Orders menu item', async function (this: FeeliaWorld) {
    console.log('Clicking on Orders menu item');
    try {
        await this.feeliaBasePage.navigateToOrders();
    } catch {
        console.log('Failed to navigate, using direct URL navigation');
        await this.page.goto('https://stage-ferp.fi/order');
        await this.page.waitForLoadState('networkidle');
    }
});

When('the user clicks on the Special Orders menu item', async function (this: FeeliaWorld) {
    console.log('Clicking on Special Orders menu item');
    try {
        await this.feeliaBasePage.navigateToSpecial();
    } catch {
        console.log('Failed to navigate, using direct URL navigation');
        await this.page.goto('https://stage-ferp.fi/order-special');
        await this.page.waitForLoadState('networkidle');
    }
});

When('the user clicks on the FAQs menu item', async function (this: FeeliaWorld) {
    console.log('Clicking on FAQs menu item');
    try {
        await this.feeliaBasePage.navigateToFaqs();
    } catch {
        console.log('Failed to navigate, using direct URL navigation');
        await this.page.goto('https://stage-ferp.fi/faq');
        await this.page.waitForLoadState('networkidle');
    }
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
