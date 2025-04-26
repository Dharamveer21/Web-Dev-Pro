// Objects
let userName = {
    firstName: "Dharamveer",
    isLoggedIn: true,
}

console.log(userName)
console.log(typeof userName)

const userName1 = {
    firstName: "Dharamveer",
    isLoggedIn: true,
}

userName1.firstName = "Mr. D"
userName1.lastName = "Chauhan"

console.log(userName1)

console.log(userName1['firstName'])
console.log(userName1.firstName)

console.log(userName1['lastName'])
console.log(userName1.lastName)

let today = new Date()
console.log(today)
console.log(today.getDate())

// Array
let anotherUser1 = ["hitesh", true]
let anotherUser2 = [true, "hitesh"]

console.log(anotherUser1[0])
console.log(anotherUser2[0])

console.log(anotherUser1[1])
console.log(anotherUser2[1])

// Type Conversion (Implicit)
console.log("1" + 1)
console.log(1 + "1")

let isValue = true
console.log(typeof Number(isValue))
console.log(Number(isValue) + 1)

let value = "2abc"
console.log(Number(value))