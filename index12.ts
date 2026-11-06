const findMax = (array: number[]): number => {

    return array.reduce((max, num) => {
        return num > max ? num : max;
    }, array[0])

};

console.log(findMax([10, 5, 20, 8, 15])); // 20
console.log(findMax([3, 1, 7, 2, 9])); // 9
console.log(findMax([10, 5, 20, 8]));  // 20