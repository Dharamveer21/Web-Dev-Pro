// Checking if a number is greater than another number:

let num1 = 5
let num2 = 8

if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`)
} else {
    console.log(`Nope,${num1} is not greater`)
}

console.log("I am regular bottom code")

// Checking if a string is equal to another string:

let userName = "chai"
let anotherUserName = "Chai"

if ((userName == anotherUserName)) {
    console.log("Pick another UserName")
}
else {
    console.log("You can pick this userName")
}

// Checking if a variable is a number or not:

let score = 10

if (typeof (score) === 'number') {
    console.log("Yep, this is a number")
}
else {
    console.log("This is not a number")
}

// Checking if a boolean value is true or false

let isTeaReady = false

if (isTeaReady) {
    console.log("Tea is Ready")
} else {
    console.log("Tea is not Ready")
}

// Checking if an array is empty or not

let items = []
console.log(items.length)

if (items.length == 0) {
    console.log(`Array is Empty`)
}
else {
    console.log(`Array is not Empty`)
}