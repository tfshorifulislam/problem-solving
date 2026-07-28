

// const findMax = (arr: number[]): number => {

//     let max = arr[0]

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }

//     return max;

// }



const findMax = (arr: number[]): number => {
    let max = arr[0]

    for (let num of arr) {
        if (num > max) {
            max = num
        }
    }

    return max
}


console.log(findMax([3, 1, 7, 2, 9])); // 9
console.log(findMax([10, 5, 20, 8]));  // 20