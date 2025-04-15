import { After, Before } from '@cucumber/cucumber';
import { FeeliaWorld } from '../world/feelia.world.ts';

export function pageHook(): void {
    Before(async function (this: FeeliaWorld) {
        this.page = await this.context.newPage();
        console.log('Page created in page.hook.ts');
    });

    After(async function (this: FeeliaWorld) {
        if (this.page) {
            await this.page.close();
        }
    });
}
