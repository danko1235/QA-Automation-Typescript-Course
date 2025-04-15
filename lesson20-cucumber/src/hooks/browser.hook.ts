import { AfterAll, BeforeAll } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { FeeliaWorld } from '../world/feelia.world.ts';

export function browserHook():void {
    BeforeAll(async function() {
        FeeliaWorld.browser = await chromium.launch({ headless: false });
    });


    AfterAll(async function() {
        await FeeliaWorld.browser.close();
    });
}
