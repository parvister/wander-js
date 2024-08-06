/*
functions, loops, and objects
*/

function normalGreet(name) {
    return `my name is ${name}`;
}

// arrow function
let arrowGreet = (name, count = 2) => {
    if (count <= 0) {
        return '';
    } else if (count >= 1) {
        return `my name is ${String(name).repeat(count)}`;
    }
}

let name = 'Sina';
let func_call = normalGreet(normalGreet(name));
console.log(func_call);
name = 'Nima';
console.log(func_call);

console.log(arrowGreet('Parham', 5))


// loops

for (i=0; i < 5; i++) {
    console.log(`i is ${i}`);
}

let obj1 = {name: 'Parham', age: 42};
for (k in obj1) {
    console.log(`obj key: ${k} value is ${obj1[k]}`);
}

// objects w. methods

let person = {
    name: 'Parham',
    age: 42,
    sayHi: function() {
        console.log(`hi my name is ${this.name} and I am ${this.age} years old`);
    },
    jump: function(count) {
        console.log(`hi my name is ${this.name} and I jump ${count} times!`);
    }
};

person.sayHi();
person.jump(5);
person.name = 'Mahsa';
person.sayHi();

/* exercise */

let adder = (x, y) => {
    return x + y;
}

console.log(adder(10, 35));

for (i = 1; i < 11; i++) {
    console.log(`i = ${i}`);
}

let book = {
    title: 'Alice in Wonderland',
    pages: 143,
    summary: function() {
        return `${this.title} is this book with ${this.pages} pages!`
    }
}

console.log(book.summary())

