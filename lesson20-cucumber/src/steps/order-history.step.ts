import { When, Then } from '@cucumber/cucumber';
import { FeeliaWorld } from '../world/feelia.world.ts';
import { expect } from '@playwright/test';

Then('the user should see the Order History page', async function (this: FeeliaWorld) {
    console.log('Verifying Order History page is visible');
    await this.page.waitForLoadState('networkidle');
    expect(await this.feeliaOrderHistoryPage.isPageLoaded()).toBeTruthy();
});

Then('the Order History page should display orders', async function (this: FeeliaWorld) {
    console.log('Verifying orders are displayed');
    const orderCount = await this.feeliaOrderHistoryPage.getOrderCount();
    expect(orderCount).toBeGreaterThan(0);
});

When('the user opens the first order details', async function (this: FeeliaWorld) {
    console.log('Opening first order details');
    await this.feeliaOrderHistoryPage.openOrderDetails(0);
});

Then('the order details should be displayed', async function (this: FeeliaWorld) {
    console.log('Verifying order details are displayed');
    expect(await this.feeliaOrderHistoryPage.isOrderDetailsVisible()).toBeTruthy();
});
