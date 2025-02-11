const sumArray = arr => arr.reduce((sum, num) => sum + Number(num), 0);

const numbers = [1, 2, 0, 4, 5];
const strings = ["10", "0", "30", "40", "50"];

console.log("Сума чисел для чисел:", sumArray(numbers));
console.log("Сума чисел для рядків:", sumArray(strings));

