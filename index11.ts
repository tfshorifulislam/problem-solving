

// const sumArray = (arr: number[]): number => {

//     return arr.reduce((sum, num) => sum + num, 0);

// }


// const sumArry = (arr: number[]): number => {
//     return arr.reduce((sum, num) => sum + num, 0)
// }



















// const sumArry = (arr:number[]):number => {
//     return(
//         arr.reduce((a,b) => a + b, 0)
//     )
// }






// const sumArray = (array:number[]):number => {
//     return(
//         array.reduce((a,b) => a + b, 0)
//     )
// }

// console.log(sumArray([1, 2, 3, 4, 5]));
// console.log(sumArray([10, 20, 30]));


// const sumArray = (array: number[]): number => {
//     let sum = 0;

//     for (const number of array) {
//         sum += number;
//     }

//     return sum;
// };


// const sumArray = (array: number[]): number => {
//     let sum = 0;

//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }

//     return sum;
// };




const sumArray = (array: number[]): number => {
    let sum = 0;

    array.forEach((number) => {
        sum += number;
    });

    return sum;
};

console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([10, 20, 30]));    // 60