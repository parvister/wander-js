// index.js
console.log('Hello, JS World!');

function add(a, b) {
  return a + b;
}

const result = add(5, 3);
console.log('The result is:', result);
// f-string type
let [a, b] = [2, 5];
console.log(`variable a = ${a} and b = ${b} and their add = ${a + b}`)

module.exports = add;
