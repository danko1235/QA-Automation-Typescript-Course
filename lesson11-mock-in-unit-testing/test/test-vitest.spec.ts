import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Vehicle, GasolineCar, ElectricCar, HybridCar, getVehicleInfo } from '../src/oop';

class MockGasolineCar extends GasolineCar {
    public move = vi.fn();
    public refuel = vi.fn();
    public getMovementDescription = vi.fn().mockReturnValue('Mock gasoline movement');
}

class MockElectricCar extends ElectricCar {
    public move = vi.fn();
    public charge = vi.fn();
    public getMovementDescription = vi.fn().mockReturnValue('Mock electric movement');
}

class MockHybridCar extends HybridCar {
    public move = vi.fn();
    public refuel = vi.fn();
    public charge = vi.fn();
    public getMovementDescription = vi.fn().mockReturnValue('Mock hybrid movement');
}

describe('Vehicle Classes', () => {
    describe('Base Vehicle', () => {
        class TestVehicle extends Vehicle {
            public move = vi.fn();
            public getMovementDescription = vi.fn().mockReturnValue('Test movement');
        }

        let vehicle: TestVehicle;

        beforeEach(() => {
            vehicle = new TestVehicle('Test Vehicle');
        });

        it('should create a vehicle with a name', () => {
            expect(vehicle.getName()).toBe('Test Vehicle');
        });

        it('should generate a description', () => {
            expect(vehicle.describe()).toBe('This is a vehicle: Test Vehicle');
        });
    });

    describe('GasolineCar', () => {
        let car: MockGasolineCar;

        beforeEach(() => {
            car = new MockGasolineCar('Petrol Car');
        });

        it('should create a gasoline car and call methods', () => {
            expect(car.getName()).toBe('Petrol Car');
            expect(car.describe()).toBe('This is a vehicle: Petrol Car');

            // Fail test to see the error message for me (uncomment "car.refuel()" to pass the test)
            //car.refuel();
            car.move();
            expect(car.move).toHaveBeenCalledOnce();
            expect(car.refuel).toHaveBeenCalledOnce();
        });

        it('should return mock movement description', () => {
            expect(car.getMovementDescription()).toBe('Mock gasoline movement');
        });
    });

    describe('ElectricCar', () => {
        let car: MockElectricCar;

        beforeEach(() => {
            car = new MockElectricCar('Electric Car');
        });

        it('should create an electric car and call methods', () => {
            expect(car.getName()).toBe('Electric Car');
            expect(car.describe()).toBe('This is a vehicle: Electric Car');

            car.move();
            car.charge();
            expect(car.move).toHaveBeenCalledOnce();
            expect(car.charge).toHaveBeenCalledOnce();
        });
    });

    describe('HybridCar', () => {
        let car: MockHybridCar;

        beforeEach(() => {
            car = new MockHybridCar('Hybrid Car');
        });

        it('should create a hybrid car and call all methods', () => {
            expect(car.getName()).toBe('Hybrid Car');
            expect(car.describe()).toBe('This is a vehicle: Hybrid Car');

            car.move();
            car.refuel();
            car.charge();
            expect(car.move).toHaveBeenCalledOnce();
            expect(car.refuel).toHaveBeenCalledOnce();
            expect(car.charge).toHaveBeenCalledOnce();
        });
    });

    describe('getVehicleInfo', () => {
        it('should return correct vehicle information', () => {
            const mockVehicle = new MockGasolineCar('Info Car');
            mockVehicle.describe = vi.fn().mockReturnValue('Mock description');
            mockVehicle.getMovementDescription = vi.fn().mockReturnValue('Mock movement');

            const info = getVehicleInfo(mockVehicle);

            expect(info).toEqual({
                name: 'Info Car',
                description: 'Mock description',
                movement: 'Mock movement'
            });
        });
    });
});
