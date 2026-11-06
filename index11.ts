const sumArray = (array: number[]): number => {
    let sum = 0;

    array.forEach((number) => {
        sum += number;
    });

    return sum;
};

console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([10, 20, 30]));    // 60