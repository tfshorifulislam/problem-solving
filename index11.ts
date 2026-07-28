

// const sumArray = (arr: number[]): number => {

//     return arr.reduce((sum, num) => sum + num, 0);

// }


// const sumArry = (arr: number[]): number => {
//     return arr.reduce((sum, num) => sum + num, 0)
// }



















const sumArry = (arr:number[]):number => {
    return(
        arr.reduce((a,b) => a + b, 0)
    )
}

console.log(sumArry([1, 2, 3, 4, 5]));
console.log(sumArry([10, 20, 30]));