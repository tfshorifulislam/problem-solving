// Variables, Data Types & Operators

// const A: number = 5;
// const B: number = 10;

// let x: number = A;
// const b: number = x;
// const a: number = B

// console.log(a, b)


// const A: number = 5;
// const B: number = 10;

// const a: number = B;
// const b: number = A;

// console.log(a, b); // 10 5






// Problem 1: Swap Two Variables  [Easy]
// Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10Output: a = 10, b = 5
// Hint: Try using destructuring or arithmetic operators.


const sawp = (a, b) => [b, a];
const [a, b] = sawp(5, 10);
console.log(a, b); // Output: 10 5