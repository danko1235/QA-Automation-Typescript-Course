import { When, Then } from '@cucumber/cucumber';
import { FeeliaWorld } from '../world/feelia.world.ts';
import { expect } from '@playwright/test';

Then('the user should see the Order History page', async function (this: FeeliaWorld) {
    console.log('Verifying Order History page is visible');
    await this.page.waitForLoadState('networkidle');
    const isVisible = await this.page.locator('h1').first().isVisible();
    expect(isVisible).toBeTruthy();
});

Then('the Order History page should display orders', async function (this: FeeliaWorld) {
    console.log('Verifying orders are displayed');
    const tableVisible = await this.page.locator('div.ui-table, div.table').isVisible();
    const rowCount = await this.page.locator('div.t-row, tr').count();
    expect(tableVisible).toBeTruthy();
    expect(rowCount).toBeGreaterThan(0);
});

When('the user opens the first order details', async function (this: FeeliaWorld) {
    console.log('Opening first order details');
    await this.page.locator('div.t-row, tr').first().click();
    await this.page.waitForLoadState('networkidle');
});

Then('the order details should be displayed', async function (this: FeeliaWorld) {
    console.log('Verifying order details are displayed');
    await this.page.waitForLoadState('networkidle');
    const isVisible = await this.page.locator('h1, .order-details, .details-header').first().isVisible();
    expect(isVisible).toBeTruthy();
});
