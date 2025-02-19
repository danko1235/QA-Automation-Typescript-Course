import { mixedArray } from './updated-types';

const sumArrayArrow = (arr: (number | string)[]): number =>
    arr.reduce((sum: number, num: string | number) => {
        const parsed = Number(num);
        return isNaN(parsed) ? sum : sum + parsed;
    }, 0);

const numbersArrow = [1, 2, 0, 4, 5];
const stringsArrow = ['10', '0', '30', '40', '50'];
const mixedArray = [5, 'Not ', 2, 'a ', 3, 'number!'];

console.log('Сума чисел для чисел:', sumArrayArrow(numbersArrow));
console.log('Сума чисел для рядків:', sumArrayArrow(stringsArrow));
console.log('Сума чисел для масиву як в коментарі:', sumArrayArrow(mixedArray));
