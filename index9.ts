

// const titleCase = (str: string): string => {

//     return (
//         str.split(' ')
//             .map(letter => letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase())
//             .join(' ')
//     )

// }


const titleCase = (str: string): string => {

    const letter = str.split(' ');
    const upperCase = letter.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    const outPut = upperCase.join(' ');

    return outPut;
}


console.log(titleCase("hello world"));
console.log(titleCase("typescript is awesome"))