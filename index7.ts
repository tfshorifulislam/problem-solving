

// const countVowels = (str: string): any => {
//     let count = 0;

//     for (const char of str.toLocaleLowerCase()) {
//         if ('aeiou'.includes(char)) {

//             count++
//         }
//     }
//     return count
// }



// const countVowels = (str: string): number  => {
//     let count = 0;

//     for (const char of str.toLocaleLowerCase()) {
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//             count++
//         }
//     }

//     return count
// }



const countVowels = (str: string): number => {

    let count = 0

    for (const char of str.toLocaleLowerCase()) {
        if ('a,e,i,o,u'.includes(char)) {
            count++
        }
    }

    return count;
}

console.log(countVowels("hello"));
console.log(countVowels("TypeScript"));
console.log(countVowels("AEIOU")); 