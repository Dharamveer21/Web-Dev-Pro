function Animal(species) {
    this.species = species
}

Animal.prototype.sound = function () {
    return `${this.species} make a sound`
}

let dog = new Animal("Dog")
console.log(dog)
console.log(dog.species)
console.log(dog.sound())

console.log(dog.hasOwnProperty('species'))
console.log(dog.hasOwnProperty('sound'))

function Drink(name) {
    if (!new.target) {
        throw new Error("Drink must be called with new keyword")
    }

    this.name = name
}

let tea = new Drink("tea")
let coffee = Drink("coffee")