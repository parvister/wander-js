/**
 * practicing classes and OOP
 */

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
}

let rect = new Rectangle(10, 5);
console.log(rect.width); // Outputs: 10
rect.width = 20;
console.log(rect.width); // Outputs: 20
// console.log(rect.#width); // This will throw an error because #width is truly private
console.log(`area: ${rect.area}`);
