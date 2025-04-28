let computer = {
    cpu: 12,
    memory: 500,
};

let lenovo = {
    screen: "HD",
    __proto__: computer
};

let tomHardware = {
    heat: 12,
    core: 19
};

console.log(`computer`, computer.__proto__);
console.log(`lenovo`, lenovo.__proto__);


let genericCar = {
    tyres: 4
}

let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla, genericCar)
console.log(`tesla`, Object.getPrototypeOf(tesla))