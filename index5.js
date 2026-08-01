

// const checkSign = (n: number): any => {
//     return (
//         n < 0 ? 'nagative' : n === 0 ? 'Zero' : 'positive'
//     )
// }










const checkSign = (n) => {
    if (n < 0) {
        return 'negative';
    }
    else if (n === 0) {
        return 'Zero';
    }
    else {
        return 'Positive';
    }
}

console.log(checkSign(-5))
console.log(checkSign(0))
console.log(checkSign(15))