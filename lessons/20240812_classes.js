/**
 * practicing classes and OOP
 */

const { useSyncExternalStore } = require("react");

class Rectangle {
    #width; // Private field
    #height; // Private field

    constructor(width, height) {
        this.#width = width;
        this.#height = height;
    }

    get width() {
        return this.#width;
    }

    set width(value) {
        if (value <= 0) {
            throw new Error("Width must be a positive number");
        }
        this.#width = value;
    }

    get height() {
        return this.#height;
    }

    set height(value) {
        if (value <= 0) {
            throw new Error("Height must be a positive number");
        }
        this.#height = value;
    }

    get area() {
        return this.#width * this.#height;
    }

    get circumference() {
        return 2 * (this.#width + this.#height);
    }
    
    greet() {
        console.log(`I'm a rectangle with width: ${this.#width} and height: ${this.#height}`);
        if ((this.#width == 2 * this.#height) || (this.#height == 2 * this.#width)) {
            console.log(`and I'm a perfect rectangle!`);
        } else {
            console.log(`and I'm NOT a perfect rectangle!`);
        }
    }
}

let rect = new Rectangle(10, 5);
console.log(rect.width); // Outputs: 10
rect.width = 20;
console.log(rect.width); // Outputs: 20
rect.width = 10;
// console.log(rect.#width); // This will throw an error because #width is truly private
console.log(`area: ${rect.area} circumference: ${rect.circumference}`);
// rect.width = -10;
rect.greet();


class Car {
    #make;
    #model;
    #year;

    constructor(make, model, year) {
        this.#make = make;
        this.#model = model;
        const currentYear = new Date().getFullYear();
        if (Number.isInteger(year) && (year >= 1890) && (year <= (currentYear + 1))) {
            this.#year = year;
        } else {
            throw new Error(`Year must be an integer greater than 1890 and ${currentYear + 1}. Provided value: ${year}`);
        }
    }

    get make() {
        return this.#make;
    }

    set make(value) {
        this.#make = value;
    }

    get model() {
        return this.#model;
    }

    set model(value) {
        this.#model = value;
    }

    get year() {
        return this.#year;
    }

    set year(value) {
        const currentYear = new Date().getFullYear();
        if (Number.isInteger(value) && (value >= 1890) && (value <= (currentYear + 1))) {
            this.#year = value;
        } else {
            throw new Error(`Year must be an integer greater than 1890 and ${currentYear + 1}. Provided value: ${value}`);
        }
    }

    getDetails() {
        return `A ${this.#year} ${this.#make} ${this.#model}`;
    }
}

class ElectricCar extends Car {
    #range;

    constructor(make, model, year, range) {
        super(make, model, year);
        this.#range = range;
    }

    get range() {
        return this.#range;
    }

    set range(value) {
        this.#range = value;
    }

    getDetails() {
        return `${super.getDetails()} with range of ${this.#range}`;
    }

    static isElectric() {
        return true;
    }
}

let camry = new Car('Toyota', 'Camry', 1995);
console.log(camry.getDetails());

let tesla = new ElectricCar('Tesla', 'Model X', 2024, 250);
console.log(tesla.getDetails());
