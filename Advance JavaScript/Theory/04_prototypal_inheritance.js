function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
}

let dharamveer = new Person("Dharamveer");
dharamveer.greet();
console.log(Object.getPrototypeOf(dharamveer));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(dharamveer)));