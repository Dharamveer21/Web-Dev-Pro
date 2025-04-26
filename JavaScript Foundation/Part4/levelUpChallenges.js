// Challenge 1

const teas = ["green tea", "black tea", "chai", "oolong tea"]
const selectedTeas = []

for (let index = 0; index < teas.length; index++) {
    const tea = teas[index]

    if (tea === "chai")
        break

    selectedTeas.push(tea)
}

// Challenges 2
let cities = ["London", "New York", "Paris", "Berlin"]
let visitedCities = []

for (let index = 0; index < cities.length; index++) {
    let city = cities[index]

    if (city === "Paris" || city === "paris")
        continue

    visitedCities.push(city)
}

// Challenge 3
let numbers = [1, 2, 3, 4, 5]
let smallNumbers = []

for (const num of numbers) {
    if (num === 4)
        break

    smallNumbers.push(num)
}

// Challenge 4
let teaTypes = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const tea of teaTypes) {
    if (tea === "herbal tea")
        continue;

    preferredTeas.push(tea)
}

// Challenge 5
let citiesPopulation = {
    London: 8900000,
    "New York": 8400000,
    Paris: 2200000,
    Berlin: 3500000
}

// console.log(Object.keys(citiesPopulation))
// console.log(Object.values(citiesPopulation))

let cityNewPopulation = {}

for (const city in citiesPopulation) {
    const key = city
    const value = citiesPopulation[key]

    if (city === "Berlin")
        break

    cityNewPopulation[key] = value
}

// Challenge 6
let worldCities = {
    Sydney: 5000000,
    Tokyo: 9000000,
    Berlin: 3500000,
    Paris: 2200000,
}

let largeCities = {}

for (const city in worldCities) {
    const population = worldCities[city]

    if (population < 3000000)
        continue

    largeCities[city] = population
}

// Challenge 7
let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"]
let availableTeas = []

teaCollection.forEach(function (tea) {
    if (tea === "chai")
        return

    availableTeas.push(tea)
});

// Challenge 8
let myWorldCities = ["Berlin", "Tokyo", "Sydney", "Paris"]
let traveledCities = []

myWorldCities.forEach((city) => {
    if (city === "Sydney")
        return

    traveledCities.push(city)
})

// Challenge 9
let myNumbers = [2, 5, 7, 9]
let doubledNumbers = []

for (let index = 0; index < myNumbers.length; index++) {
    let num = myNumbers[index]

    if (num === 7)
        continue

    doubledNumbers.push(num * 2)
}

// Challenge 10
let myTeas = ["chai", "green tea", "black tea", "jasmine tea"]
let shortTeas = []

for (const tea of myTeas) {
    const teaLength = tea.length

    if (teaLength > 10)
        break

    shortTeas.push(tea)
}

console.log(shortTeas)