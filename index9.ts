
const titleCase = (str: string): string => {

    const letter = str.split(' ');
    const upperCase = letter.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    const outPut = upperCase.join(' ');

    return outPut;
}


console.log(titleCase("hello world"));
console.log(titleCase("typescript is awesome"))


const upperCase = (srt: string):void[] => {

    return(
        srt.split(' ').map(letter =>{
            letter.charAt(0).toUpperCase + letter.slice(1)
        })
    )

}

console.log(upperCase("tofa"));
console.log(upperCase("tf shoriful islam"))