

// const flattenArray = (arr:number[]):number[] => {
//     return arr.flat()
// }








// const flattenArray = (array:number[]):number[] => {
//     return array.flat()
// }


const flattenArray = (array: number[][]): number[] => {
    return array.reduce((result, current) => {
        return result.concat(current);
    }, []);
};

console.log(flattenArray([[1, 2], [3, 4], [5, 6]]));
// [1, 2, 3, 4, 5, 6]

console.log(flattenArray([1, [2, 3], [4, 5]]));