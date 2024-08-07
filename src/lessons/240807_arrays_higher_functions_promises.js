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

// calls a function after 2 second of timeout
function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched");
    }, 2000);
}

// passes an arrow function to `fetchData`
fetchData(data => {
    console.log(data); // Outputs: Data fetched (after 2 seconds)
});

/**
 * Promises
 */

let fetchNumberPromise = new Promise((resolve, reject) => {
    randNumberBetweenOneAndTen = Math.floor(Math.random() * 10) + 1;
    if (randNumberBetweenOneAndTen >= 5)
        resolve(randNumberBetweenOneAndTen);
    else
        reject(`Sorry! Number was ${randNumberBetweenOneAndTen}`);
});

fetchNumberPromise
    .then(retValue => {
        console.log(`Promise successful and return: ${retValue}`);
        return retValue;
    })
    // chained `.then` statements. this one should power up the previous return value
    .then(powerUpNum => {
        console.log(`Powering up: ${powerUpNum} ** 2 = ${powerUpNum ** 2}`);
        return powerUpNum ** 2;
    })
    .catch(reason => {
        console.log(`Promise busted. Reason: ${reason}`);
    })

/**
 * #### 3. Handling Multiple Promises Concurrently

Using `Promise.all`, you can run multiple promises concurrently and wait for all of them to resolve or any of them to reject.

**Example:**

```javascript
let promise1 = fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => response.json());
let promise2 = fetch('https://jsonplaceholder.typicode.com/posts/2').then(response => response.json());
let promise3 = fetch('https://jsonplaceholder.typicode.com/posts/3').then(response => response.json());

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log(results); // Outputs array of results for all promises
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

**Explanation:**
- `Promise.all` takes an array of promises and returns a new promise that resolves when all the promises resolve or rejects when any promise rejects.
- The `then` block processes an array of results.
- The `catch` block handles any errors that occur in any of the promises.
 */

/**
 * Advanced promise example
 */

function placeOrder(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order placed:", order);
            resolve(order.orderId);
        }, 1000);
    });
}

function processPayment(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Payment processed for order:", orderId);
            resolve(orderId);
        }, 2000);
    });
}

function shipOrder(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order shipped:", orderId);
            resolve("Order complete");
        }, 3000);
    });
}

placeOrder({ orderId: 123 })
    .then(orderId => processPayment(orderId))
    .then(orderId => shipOrder(orderId))
    .then(message => {
        console.log(message); // Outputs: Order complete
    })
    .catch(error => {
        console.error('Error:', error);
    });
