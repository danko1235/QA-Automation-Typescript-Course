function sumArray(arr: (number | string)[]): number {
    return arr.reduce((sum: number, current: string | number) => {
        const parsed = Number(current);
        return isNaN(parsed) ? sum : sum + parsed;
    }, 0);
}

const numbers = [1, 2, 3, 4, 5];
const strings = ['10', '20', '30', '40', '50'];
const mixedArray = [5, 'Not ', 2, 'b ', 6, 'number!'];

console.log('Сума чисел для чисел:', sumArray(numbers));
console.log('Сума чисел для рядків:', sumArray(strings));
console.log('Сума чисел для масиву як в коментарі:', sumArray(mixedArray));
