import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Vehicle, GasolineCar, ElectricCar, HybridCar, getVehicleInfo } from '../src/oop';

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
        let car: GasolineCar;

        beforeEach(() => {
            car = new GasolineCar('Petrol Car');
            vi.spyOn(car, 'move').mockImplementation(() => {
                console.log('Car is moving');
            });
            vi.spyOn(car, 'refuel').mockImplementation(() => {
                console.log('Car is refueling');
            });
            vi.spyOn(car, 'getMovementDescription').mockReturnValue('Mock gasoline movement');
        });

        it('should create a gasoline car and call methods', () => {
            expect(car.getName()).toBe('Petrol Car');
            expect(car.describe()).toBe('This is a vehicle: Petrol Car');

            car.move();
            car.refuel();
            expect(car.move).toHaveBeenCalledOnce();
            expect(car.refuel).toHaveBeenCalledOnce();
        });

        it('should return mock movement description', () => {
            expect(car.getMovementDescription()).toBe('Mock gasoline movement');
        });
    });

    describe('ElectricCar', () => {
        let car: ElectricCar;

        beforeEach(() => {
            car = new ElectricCar('Electric Car');
            vi.spyOn(car, 'move').mockImplementation(() => {
                console.log('Electric car is moving');
            });
            vi.spyOn(car, 'charge').mockImplementation(() => {
                console.log('Electric car is charging');
            });
            vi.spyOn(car, 'getMovementDescription').mockReturnValue('Mock electric movement');
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
        let car: HybridCar;

        beforeEach(() => {
            car = new HybridCar('Hybrid Car');
            vi.spyOn(car, 'move').mockImplementation(() => {
                console.log('Hybrid car is moving');
            });
            vi.spyOn(car, 'refuel').mockImplementation(() => {
                console.log('Hybrid car is refueling');
            });
            vi.spyOn(car, 'charge').mockImplementation(() => {
                console.log('Hybrid car is charging');
            });
            vi.spyOn(car, 'getMovementDescription').mockReturnValue('Mock hybrid movement');
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
            const vehicle = new GasolineCar('Info Car');
            vi.spyOn(vehicle, 'getName').mockReturnValue('Info Car');
            vi.spyOn(vehicle, 'describe').mockReturnValue('Mock description');
            vi.spyOn(vehicle, 'getMovementDescription').mockReturnValue('Mock movement');

            const info = getVehicleInfo(vehicle);

            expect(info).toEqual({
                name: 'Info Car',
                description: 'Mock description',
                movement: 'Mock movement'
            });

            expect(vehicle.getName).toHaveBeenCalled();
            expect(vehicle.describe).toHaveBeenCalled();
            expect(vehicle.getMovementDescription).toHaveBeenCalled();
        });
    });
});
