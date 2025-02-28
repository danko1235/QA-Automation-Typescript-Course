export interface IMovable {
    move(): void;
    getMovementDescription(): string;
}

export interface IFuelable {
    refuel(): void;
}

export interface IChargeable {
    charge(): void;
}
