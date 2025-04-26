function stringToNumber(input) {
    const number = Number(input)

    if (isNaN(number))
        return "Not a number"

    return number
}

function flipBoolean(input) {
    let bool = Boolean(input)
    let flipped = !bool

    return flipped
}

function whatAmI(input) {
    const number = Number(input)

    if (isNaN(number))
        return `I'm a string!`

    return `I'm a number!`
}

function isItTruthy(input) {
    let bool = Boolean(input)

    if (bool)
        return `It's truthy!`

    return `It's falsey!`
}