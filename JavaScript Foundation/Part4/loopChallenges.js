// Challenge 1
let sum = 0
let i = 1

while (i <= 5) {
    sum = sum + i
    i++
}

// Challenge 2
let countdown = []
let count = 5

while (count > 0) {
    countdown.push(count)
    count--
}

// Challenge 3
let tea
let teaCollection = new Array()

do {
    tea = prompt(`Enter your favourite tea (type "stop" to finish)`)

    if (tea !== "stop") {
        teaCollection.push(tea)
    }

} while (tea !== "stop")

// Challenge 4

let total = 0
let num = 0

do {
    total += num
    num++
} while (num < 4);

// Challenge 5
let multipliedNumbers = new Array()
let numbers = [2, 4, 6]

for (let index = 0; index < numbers.length; index++) {
    const arrNum = numbers[index]
    const multipliedNum = arrNum * 2

    multipliedNumbers.push(multipliedNum)
}

console.log(multipliedNumbers)

// Challenges 6
const cities = ["Paris", "New York", "Tokyo", "London"]
const cityList = []

for (let index = 0; index < cities.length; index++) {
    const city = cities[index]
    cityList.push(city)
}