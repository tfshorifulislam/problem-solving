
const flattenArray = (array: number[][]): number[] => {
    const result: number[] = [];

    for (const item of array) {
        for (const num of item) {
            result.push(num);
        }
    }

    return result;
};

console.log(flattenArray([[1, 2], [3, 4], [5, 6]]));