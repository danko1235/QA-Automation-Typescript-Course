for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}

let j = 0;
while (j < 10) {
    console.log(j);
    j++;
}

do {
    console.log(j);
    j--;
} while (j > 0);

const array = ['a', 'b', 'c', 'd'];
for (const value of array) {
    console.log(value);
}

const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}
