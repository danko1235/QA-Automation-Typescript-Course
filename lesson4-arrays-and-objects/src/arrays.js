const stringArray = ['hello', 'Danko', 'JavaScript'];
const numberArray = [1, 2, 3, 4, 5];
const booleanArray = [true, false, true, false];
const mixedArray = [1, 'text', true, null];

stringArray.forEach(item => console.log(item));
numberArray.map(num => num * 2).forEach(num => console.log(num));

stringArray.push('newString');
console.log(stringArray.at(1));
console.log(stringArray.includes('Danko1'));
console.log(numberArray.filter(num => num > 2));
console.log(numberArray.find(num => num === 3));
console.log(numberArray.concat([6, 7, 8]));
console.log(numberArray.reduce((acc, num) => acc + num, 0));
console.log(stringArray.join('-'));

booleanArray.push(false);
console.log(booleanArray.includes(true));
console.log(booleanArray.filter(val => val === true));

mixedArray.push({ key: 'value' });
console.log(mixedArray.find(item => typeof item === 'string'));
console.log(mixedArray.join(', '));
