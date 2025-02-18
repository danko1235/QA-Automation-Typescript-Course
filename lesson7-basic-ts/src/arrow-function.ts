import { NumericArray } from './types';

const sumArrayArrow = (arr: NumericArray): number =>
    arr.reduce((sum: number, num: string | number) => sum + Number(num), 0);

const numbersArrow: number[] = [1, 2, 0, 4, 5];
const stringsArrow: string[] = ['10', '0', '30', '40', '50'];

console.log('Сума чисел для чисел:', sumArrayArrow(numbersArrow));
console.log('Сума чисел для рядків:', sumArrayArrow(stringsArrow));
