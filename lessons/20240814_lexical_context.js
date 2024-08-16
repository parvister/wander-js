/**
 * random exercises with method context and closures
 */

/* this does NOT work! */
let person = {
    name: 'parham',
    greet: (toPerson) => {
        console.log(`hi! i'm ${this.name} and you are ${toPerson}`);
    }
};
person.greet('joe');

/* this DOES work! */
person = {
    name: 'parham',
    greet: function(toPerson) {
        console.log(`hi! i'm ${this.name} and you are ${toPerson}`);
    }
};
person.greet('joe');


/**
 * 
 * lexical closures for store private variables
 */
function outerCounter(incrementFactor = 1, seed = 0) {
    let count = seed;
    function innerCounter() {
        count += incrementFactor;
        return count;
    }
    return innerCounter;
}

let counter = outerCounter(2, 10);
console.log(`counter: ${counter()}`);
console.log(`counter: ${counter()}`);
console.log(`counter: ${counter()}`);

let counter2 = outerCounter();
console.log(`counter: ${counter2()}`);
console.log(`counter: ${counter2()}`);
console.log(`counter: ${counter2()}`);

console.log(`counter: ${counter()}`);
