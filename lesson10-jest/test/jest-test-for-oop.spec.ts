import { GasolineCar, ElectricCar, HybridCar, getVehicleInfo } from '../src/oop';
import { expect } from 'chai';

describe('Vehicle tests', () => {
    let gasCar: GasolineCar;
    let electricCar: ElectricCar;
    let hybridCar: HybridCar;

    beforeEach(() => {
        gasCar = new GasolineCar('Mini Cooper');
        electricCar = new ElectricCar('Tesla Model 3');
        hybridCar = new HybridCar('Toyota Prius');
    });

    test('should describe the vehicles correctly', () => {
        expect(gasCar.describe()).to.equal('This is a vehicle: Mini Cooper');
        expect(electricCar.describe()).to.equal('This is a vehicle: Tesla Model 3');
        expect(hybridCar.describe()).to.equal('This is a vehicle: Toyota Prius');
    });

    test('should get movement descriptions correctly', () => {
        expect(gasCar.getMovementDescription()).to.equal('Mini Cooper moves using gasoline.');
        expect(electricCar.getMovementDescription()).to.equal('Tesla Model 3 moves using electricity.');
        expect(hybridCar.getMovementDescription()).to.equal('Toyota Prius moves using a hybrid system.');
    });

    test('should return vehicle info correctly', () => {
        const gasCarInfo = getVehicleInfo(gasCar);
        const electricCarInfo = getVehicleInfo(electricCar);
        const hybridCarInfo = getVehicleInfo(hybridCar);

        // Make incorrect name for Mini cooper (to have fail test for check how it works)

        expect(gasCarInfo).to.deep.equal({
            name: 'Mini Cooper One',
            description: 'This is a vehicle: Mini Cooper',
            movement: 'Mini Cooper moves using gasoline.'
        });

        expect(electricCarInfo).to.deep.equal({
            name: 'Tesla Model 3',
            description: 'This is a vehicle: Tesla Model 3',
            movement: 'Tesla Model 3 moves using electricity.'
        });

        expect(hybridCarInfo).to.deep.equal({
            name: 'Toyota Prius',
            description: 'This is a vehicle: Toyota Prius',
            movement: 'Toyota Prius moves using a hybrid system.'
        });
    });

    test('should refuel and charge hybrid car correctly', () => {
        expect(() => hybridCar.refuel()).to.not.throw();
        expect(() => hybridCar.charge()).to.not.throw();
    });
});
