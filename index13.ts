

// const removeDuplicates = (arr: number[]): number[] => {

//     return (
//         [...new Set(arr)]
//     )
// }



const removeDuplicates = (arr: number[]): number[] => {
    return (
        arr.filter((item, index) => arr.indexOf(item) === index)
    )
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));
// Output: [1, 2, 3, 4]