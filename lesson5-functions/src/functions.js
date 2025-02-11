function sumArray(arr) {
    return arr.reduce((sum, current) => sum + Number(current), 0);
}

const numbers = [1, 2, 3, 4, 5];
const strings = ["10", "20", "30", "40", "50"];

console.log("Сума чисел для чисел:", sumArray(numbers));
console.log("Сума чисел для рядків:", sumArray(strings));

