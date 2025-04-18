import { Given } from '@cucumber/cucumber';
import { FeeliaWorld } from '../world/feelia.world.ts';
import { expect } from '@playwright/test';

Given('the user is authenticated', async function (this: FeeliaWorld) {
    console.log('Authenticating user');
    await this.page.goto('https://stage-ferp.fi/order');
    const isLoggedIn = !(this.page.url().includes('/user/login') || this.page.url().includes('/login'));

    if (!isLoggedIn) {
        await this.feeliaLoginPage.navigateTo();
        await this.feeliaLoginPage.login('example+25@feelia.com', '123456');
        expect(await this.feeliaLoginPage.isLoggedIn()).toBeTruthy();
    }

    console.log('User authenticated successfully');
});
