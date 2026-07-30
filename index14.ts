

const flattenArray = (arr:number[]):number[] => {
    return arr.flat()
}

console.log(flattenArray([1, [2, 3], [4, 5]]));