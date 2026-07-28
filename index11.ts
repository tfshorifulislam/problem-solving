

const sumArray = (arr: number[]): number => {

    return arr.reduce((sum, num) => sum + num, 0);

}

console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([10, 20, 30]));    // 60