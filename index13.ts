const removeDuplicates = (array: number[]): number[] => {
    const result: number[] = [];

    for (const item of array) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }

    return result;
};

console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));