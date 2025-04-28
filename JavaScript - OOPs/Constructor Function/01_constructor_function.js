function Person(name, age) {
    this.name = name
    this.age = age
}

function Car(make, model) {
    this.make = make
    this.model = model
}

let myCar = new Car("Toyota", "Camry")
console.log(myCar)

let myNewCar = new Car("Tata", "Safari")
console.log(myNewCar)

function Tea(type) {
    this.type = type
    this.describle = function () {
        return `This is a cup of ${this.type}`
    }
}

let lemonTea = new Tea("lemon tea")
console.log(lemonTea)
console.log(lemonTea.describle())