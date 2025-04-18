import { BeforeAll } from '@cucumber/cucumber';
import { FeeliaWorld } from '../world/feelia.world.ts';

export function globalContextHook(): void {
    BeforeAll(async function() {
        FeeliaWorld.globalContext = new Map();
    });
}
