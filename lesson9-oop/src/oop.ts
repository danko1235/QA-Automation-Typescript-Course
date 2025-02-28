import { IFuelable, IChargeable } from './interfaces';

abstract class Vehicle {
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

class GasolineCar extends Vehicle implements IFuelable {
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

class ElectricCar extends Vehicle implements IChargeable {
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

class HybridCar extends Vehicle implements IFuelable, IChargeable {
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

interface VehicleInfo {
    name: string;
    description: string;
    movement: string;
}

function getVehicleInfo(vehicle: Vehicle): VehicleInfo {
    return {
        name: vehicle.getName(),
        description: vehicle.describe(),
        movement: vehicle.getMovementDescription()
    };
}

const gasCar = new GasolineCar('Mini Cooper');
const electricCar = new ElectricCar('Tesla Model 3');
const hybridCar = new HybridCar('Toyota Prius');

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
