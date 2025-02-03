const bool1 = true;
const bool2 = false;
const num1 = 5;
const num2 = 10;
const str1 = "Hello";
const obj1 = { key: "value" };

console.log("AND Operator:", bool1 && bool2);
console.log("OR Operator:", bool1 || bool2);
console.log("NOT Operator:", !bool1);
console.log("Double NOT:", !!num1);
console.log("Comparison ==:", num1 == "5");
console.log("Comparison ===:", num1 === "5");
console.log("Greater than:", num1 > num2);
console.log("Less than:", num1 < num2);
console.log("Typeof check:", typeof str1 === "string");
console.log("Object check:", typeof obj1 === "object");
