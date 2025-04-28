let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function () {
        return `${this.make} car got started in ${this.year}`
    },
}

console.log(car.start())

// constructor function
function Person(name, age) {
    this.name = name
    this.age = age
}

let john = new Person("John Doe", 20)
console.log(john.name)

// constructor function prototype
function Animal(type) {
    this.type = type
}

Animal.prototype.speak = function () {
    return `${this.type} makes a sound`
}

Array.prototype.hitesh = function () {
    return `Custom method ${this}`
}

let myArray = [1, 2, 3]
console.log(myArray.hitesh())


// -------------------------------------------------------------------------------------------------------

// inheritance
class Vehicle {
    constructor(make, model) {
        this.make = make
        this.model = model
    }

    start() {
        return `${this.model} is a car from ${this.make}`
    }
}

class Car extends Vehicle {
    drive() {
        return `${this.make} : This is an inheritance example`
    }
}

let myCar = new Car("Toyota", "Corolla")
console.log(myCar.start())
console.log(myCar.drive())


// encapsulation
class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }

    getBalance() {
        return `$ ${this.#balance}`;
    }
};

let account = new BankAccount();
console.log(account.getBalance());

// Abstraction
class coffeeMachine {
    start() {
        // call DB
        // filter value
        return `Starting the machine...`;
    }

    brewCoffee() {
        // complex calculation
        return `Brewing coffee`;
    }

    pressStartButton() {
        let msg1 = this.start();
        let msg2 = this.brewCoffee();

        return `${msg1} then ${msg2}`
    }
};

let myMachine = new coffeeMachine();
console.log(myMachine.start());
console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());

// Polymorphism
class Bird {
    fly() {
        return `Flying....`;
    }
};

class Penguin extends Bird {
    fly() {
        return `Penguins can't fly`;
    }
};

let bird = new Bird();
let penguin = new Penguin();

console.log(bird.fly());
console.log(penguin.fly());

// Static method
class Calculator {
    static add(a, b) {
        return (a + b);
    }
}

console.log(Calculator.add(2, 3));

// Getters and Setters
class Employee {
    #salary;

    constructor(name, salary) {

        if (salary < 0) {
            throw new Error("Salary cannot be negative");
        }

        this.name = name
        this.#salary = salary
    }

    get salary() {
        return `Salary is $ ${this.#salary}`;
    }

    set salary(value) {
        if (value < 0) {
            console.error("Invaid Salary");
        }

        else {
            this.#salary = value;
        }
    }
};

let employee = new Employee("Alice", 30000);
console.log(employee.salary);
employee.salary = 50000;
console.log(employee.salary)

