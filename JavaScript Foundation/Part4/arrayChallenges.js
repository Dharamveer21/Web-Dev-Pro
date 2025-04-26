// Challenge 1
let teaFlavours = ["green tea", "black tea", "oolong tea"]

let teaFl = new Array("green tea", "black tea", "oolong tea")

const firstTea = teaFlavours[0]

// Challenge 2
let cities = new Array("London", "Tokyo", "Paris", "New York")

const favouriteCity = cities[2]

// Challenge 3
let teatypes = new Array("herbal tea", "white tea", "masala chai")

teatypes[1] = "jasmine"

// Challenge 4
let citiesVisited = ["Mumbai", "Sydney"]
citiesVisited.push("berlin")

// Challenge 5
let teaOrders = ["chai", "iced tea", "matcha", "earl grey"]
const lastOrder = teaOrders.pop()

// Challenge 6
let popularTeas = ["green tea", "oolong tea", "chai"]
let softCopyTeas = popularTeas

// Challenge 7
let topCities = ["Berlin", "Singaopre", "New York"]
let hardCopyCities1 = [...topCities]
let hardCopyCities2 = topCities.slice()

// Challenge 8
let europeanCities = ["Paris", "Rome"]
let asianCities = ["Tokyo", "Bangkok"]
let worldCities1 = [...europeanCities, ...asianCities]
let worldCities2 = europeanCities.concat(asianCities)

// Challenge 9
let teaMenu = ["Masala chai", "oolong tea", "green tea", "earl grey"]
let menuLength = teaMenu.length

// Challenge 10
let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"]

let isLondonInList = (cityBucketList.includes("London"))