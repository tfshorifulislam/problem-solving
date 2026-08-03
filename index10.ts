

// const countChar = (str: string, char: string): number => {
//     let count = 0;

//     for (const letter of str) {
//         if (letter === char) {
//             count++
//         }
//     }

//     return count;
// }




const countChar = (string: string, char: string): number => {
    let count = 0;

    for (const letter of string) {
        if (letter === char) {
            count++
        }
    }

    return count;
}

console.log(countChar("banana", "a"));
console.log(countChar("banana", "n"));
console.log(countChar("hello", "l"));