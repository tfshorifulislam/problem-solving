

const toFahrenheit = (celsius: number): number => {
    return (
        celsius * 9 / 5 + 32
    )
}

console.log(toFahrenheit(0))
console.log(toFahrenheit(100))