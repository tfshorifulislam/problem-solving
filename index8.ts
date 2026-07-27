

const isPalindrome = (str: string): boolean => {

    const reversed = str.toLocaleLowerCase().split('').reverse().join('')
    return reversed === str
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));   
console.log(isPalindrome("madam"));
console.log(isPalindrome("level"));