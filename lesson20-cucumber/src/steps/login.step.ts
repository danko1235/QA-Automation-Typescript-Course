import { Given } from '@cucumber/cucumber';
import { FeeliaWorld } from '../world/feelia.world.ts';

Given('the user is authenticated', async function (this: FeeliaWorld) {
    console.log('Authenticating user');
    try {
        await this.page.goto('https://stage-ferp.fi/user/login');
        console.log('Navigated to login page directly, URL:', this.page.url());

        await this.page.fill('input[type="email"]', 'example+25@feelia.com');
        await this.page.fill('input[type="password"]', '123456');
        await this.page.click('button[type="submit"]');

        await this.page.waitForTimeout(2000);
        await this.page.waitForLoadState('networkidle');

        const currentUrl = this.page.url();
        const isLoggedIn = !currentUrl.includes('/user/login') && !currentUrl.includes('/login');

        if (!isLoggedIn) {
            throw new Error('Failed to authenticate user');
        }

        console.log('User authenticated successfully');
    } catch (error) {
        console.error('Error during user authentication:', error);
        throw error;
    }
});
