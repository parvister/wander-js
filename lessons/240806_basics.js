/* learning fundamentals */

let undefinedVar;
console.log(undefinedVar);

// define an object
let obj1 = {name: "Parham", age: 42};
console.log(obj1);

// comparisons
console.log(5 == "5"); // true (equality, type coercion)
console.log(5 === "5"); // false (strict equality, no type coercion)
console.log(5 != "5"); // false (inequality, type coercion)
console.log(5 !== "5"); // true (strict inequality, no type coercion)

// logical
console.log(true && false);

let [name, age, student] = ['Parham', 42, false];
console.log(name, age, student);

let a = 3, b = 5;
console.log(`a + b = ${a + b}`);
console.log(`a == b is ${a == b}\na === b is ${a === b}`);
