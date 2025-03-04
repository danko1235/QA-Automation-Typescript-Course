import { IFuelable, IChargeable } from './interfaces';

export abstract class Vehicle {
    public constructor(protected name: string) {}

    public abstract move(): void;
    public abstract getMovementDescription(): string;

    public describe(): string {
        return `This is a vehicle: ${this.name}`;
    }

    public getName(): string {
        return this.name;
    }
}

export class GasolineCar extends Vehicle implements IFuelable {
    public move(): void {
        console.log(`${this.name} moves using gasoline.`);
    }

    public getMovementDescription(): string {
        return `${this.name} moves using gasoline.`;
    }

    public refuel(): void {
        console.log(`${this.name} is refueled with gasoline.`);
    }
}

export class ElectricCar extends Vehicle implements IChargeable {
    public move(): void {
        console.log(`${this.name} moves using electricity.`);
    }

    public getMovementDescription(): string {
        return `${this.name} moves using electricity.`;
    }

    public charge(): void {
        console.log(`${this.name} is charging.`);
    }
}

export class HybridCar extends Vehicle implements IFuelable, IChargeable {
    public move(): void {
        console.log(`${this.name} moves using a hybrid system.`);
    }

    public getMovementDescription(): string {
        return `${this.name} moves using a hybrid system.`;
    }

    public refuel(): void {
        console.log(`${this.name} is refueled with gasoline.`);
    }

    public charge(): void {
        console.log(`${this.name} is charging its battery.`);
    }
}

export interface VehicleInfo {
    name: string;
    description: string;
    movement: string;
}

export function getVehicleInfo(vehicle: Vehicle): VehicleInfo {
    return {
        name: vehicle.getName(),
        description: vehicle.describe(),
        movement: vehicle.getMovementDescription()
    };
}

export const gasCar = new GasolineCar('Mini Cooper');
export const electricCar = new ElectricCar('Tesla Model 3');
export const hybridCar = new HybridCar('Toyota Prius');

console.log(gasCar.describe());
gasCar.move();
gasCar.refuel();

console.log(electricCar.describe());
electricCar.move();
electricCar.charge();

console.log(hybridCar.describe());
hybridCar.move();
hybridCar.refuel();
hybridCar.charge();

console.log('--- getVehicleInfo ---');
console.log(getVehicleInfo(gasCar));
console.log(getVehicleInfo(electricCar));
console.log(getVehicleInfo(hybridCar));
