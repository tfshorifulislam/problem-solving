

const checkSign = (n: number): any => {
    return (
        n < 0 ? 'nagative' : n === 0 ? 'Zero' : 'positive'
    )
}

console.log(checkSign(-5))
console.log(checkSign(0))
console.log(checkSign(15))