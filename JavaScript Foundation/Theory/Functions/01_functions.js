// Funtion 1
function makeTea(typeofTea) {
    return `Making ${typeofTea}`
}

let teaOrder = makeTea("lemon tea")

// Function 2
function orderTea(teaType) {
    function confirmOrder() {
        return (`Order confirmed for chai`)
    }

    return confirmOrder()
}

let orderConfirmation = orderTea("chai")
console.log(orderConfirmation)

// Function 3
const calculateTotal = (price, quantity) => (price * quantity)
let totalCost = calculateTotal(499, 100)
console.log(totalCost)

// Function 4
function makeTea(typeOfTea) {
    return (`makeTea : ${typeOfTea}`)
}

function processTeaOrder(teaFunction) {
    return teaFunction('earl grey')
}

let order = processTeaOrder(makeTea)
console.log(order)

// Function 5
function createTeaMaker() {
    let price = 100
    return (function (teaType) {
        return (`Making ${teaType} with price = ${price}`)
    })
}

let teaMaker = createTeaMaker()
let result = teaMaker("green tea")
console.log(result) 