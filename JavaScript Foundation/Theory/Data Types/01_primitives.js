// Number
let balance = 120
let anotherBalance = new Number(120)

console.log(balance)
console.log(anotherBalance.valueOf())

console.log(typeof balance)
console.log(typeof anotherBalance)

// boolean
let isActive = true
let isReallyActive = new Boolean(true) // not recommended 

console.log(isActive)
console.log(isReallyActive.valueOf())

console.log(typeof isActive)


// null and undefined
let firstName = undefined
console.log(firstName)

let lastName = null
console.log(lastName)

// string
let myString0 = "Hello"
let myString1 = 'Hola'
let userName = 'hitesh'


let oldGreet = myString0 + " " + "hitesh"
console.log(oldGreet)

let greetMessage = `Hello ${userName} !`
console.log(greetMessage)

let demoOne = `Value is ${2 * 2}`

// Symbol - its guarentte uniqueness
let sm1 = Symbol()
let sm2 = Symbol()

console.log(sm1 == sm2) // false