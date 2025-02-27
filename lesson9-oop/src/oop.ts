import { Movable } from './interfaces';

abstract class Vehicle implements Movable {
    public constructor(protected name: string) {}

    public abstract move(): void;

    public describe(): void {
        console.log(`This is a vehicle: ${this.name}`);
    }
}

class Car extends Vehicle {
    public move(): void {
        console.log(`${this.name} moves using gasoline.`);
    }
}

class ElectricCar extends Vehicle {
    public move(): void {
        console.log(`${this.name} moves using electricity.`);
    }
}

function moveVehicle(vehicle: Movable): void {
    vehicle.move();
}

const gasCar = new Car('Mini Cooper');
const electricCar = new ElectricCar('Tesla Model 3');

moveVehicle(gasCar);
moveVehicle(electricCar);
