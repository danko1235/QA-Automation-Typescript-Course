import { NumericArray } from './types';

function sumArray(arr: NumericArray): number {
    return arr.reduce((sum: number, current: string | number) => sum + Number(current), 0);
}

const numbers: number[] = [1, 2, 3, 4, 5];
const strings: string[] = ['10', '20', '30', '40', '50'];

console.log('Сума чисел для чисел:', sumArray(numbers));
console.log('Сума чисел для рядків:', sumArray(strings));
