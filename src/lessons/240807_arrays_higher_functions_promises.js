/**
 * - array methods
 * - higher order functions
 * - promises and async javascript calling
 */

let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // Outputs: apple
console.log(fruits.length); // Outputs: 3

fruits.push('water melon');
fruits = fruits.concat(['orange', 'peach']);    // array concat
console.log(fruits);

console.log(fruits.shift());
fruits.unshift('kiwi', 'melon')         // inserting more than one item at the same time
console.log(fruits);

fruits.forEach((fruit, index, wholeArray) => {
    if (fruit.split(' ').length >= 2)
        console.log(`fruit: ${fruit} at index: ${index} has two or more words`);
    else 
        console.log(`fruit: ${fruit} has only one word`);
});

/**
 * map exmaple
 */

let fruitsCharLength = fruits.map((fruit, index) => {
    return `fruit: ${fruit} at index: ${index} has ${fruit.length} characters`;
});
console.log(fruitsCharLength)

/**
 * promises and async functions
 */
