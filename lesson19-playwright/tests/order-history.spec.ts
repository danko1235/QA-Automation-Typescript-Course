import { test, expect } from '../src/setup/setup';
import { FeeliaOrderHistoryPage } from '../src/pages/feelia-order-history-page';

test.describe('Feelia Order History Page Tests', () => {
    let orderHistoryPage: FeeliaOrderHistoryPage;

    test.beforeEach(async ({ page }) => {
        orderHistoryPage = new FeeliaOrderHistoryPage(page);
        await orderHistoryPage.navigateTo();
    });

    test('should display order history page with header and sidebar', async () => {
        expect(await orderHistoryPage.isPageLoaded()).toBeTruthy();
        expect(await orderHistoryPage.isHeaderVisible()).toBeTruthy();
        expect(await orderHistoryPage.isSideBarVisible()).toBeTruthy();
    });

    test('should open order details when clicking an order item', async () => {
        const orderCount = await orderHistoryPage.getOrderCount();

        expect(orderCount).toBeGreaterThan(0);

        await orderHistoryPage.openOrderDetails(0);

        const orderDetailsVisible = await orderHistoryPage.isOrderDetailsVisible();
        expect(orderDetailsVisible).toBeTruthy();
    });

    test('should have at least one order in the list', async () => {
        const orderCount = await orderHistoryPage.getOrderCount();
        expect(orderCount).toBeGreaterThan(0);
    });
});
