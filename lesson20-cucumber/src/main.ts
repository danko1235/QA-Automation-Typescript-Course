import { setDefaultTimeout, setWorldConstructor } from '@cucumber/cucumber';
import { FeeliaWorld } from './world/feelia.world.ts';

setDefaultTimeout(999999999);
setWorldConstructor(FeeliaWorld);
