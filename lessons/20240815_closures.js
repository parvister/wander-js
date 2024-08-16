/**
 * using closures and lexical context
 */

/**
 * EXERCISE
 * 
 * Create a Car object with a method startEngine that logs "Engine started for [car make] [car model]". Use this to refer to the car's make and model.
 * Create a closure function that generates unique IDs. Every time the function is called, it should return a new ID starting from 1 and incrementing by 1.
 * Create a constructor function BankAccount that accepts an initial balance. Implement methods for deposit and withdraw, and use closures to keep the balance private.
 */

class Car {
    #make;
    #model;
    #cardNumber;
    static carId = 0;

    constructor(make, model) {
        this.#make = make;
        this.#model = model;
        this.#cardNumber = ++Car.carId;
    }

    engineStart() {
        console.log(`car ${this.#cardNumber}: ${this.#make} ${this.#model} started`);
    }
}

let toyota = new Car('Toyota', 'Yaris');
let chevy = new Car('Chevy', 'Taho');
toyota.engineStart();
chevy.engineStart();


function sequence(init = 1, step = 1) {
    let currentSeq = init;

    function incr() {
        retValue = currentSeq;
        currentSeq += step;
        return retValue;
    }
    return incr;
}

let id1 = sequence(10, 1);
let id2 = sequence(100, 5);
for (let i = 0; i < 5; i++)
    console.log(`id #1: ${id1()}, id #2: ${id2()}`);


/**
 * BankAccount exercise
 */

function BankAccount(initialBalance = 100) {
    let balance = initialBalance;

    this.deposit = function(amount) {
        if (amount > 0) {
            balance += amount;
            return balance;
        } else {
            throw new Error(`deposit amount must be positive. was provided with: ${amount}`);
        }
    };

    this.withdraw = function(amount) {
        if (amount > 0) {
            balance -= amount;
            return balance;
        } else {
            throw new Error(`withdraw amount must be positive number. was provided with: ${amount}`);
        }
    };

    this.getBalance = function() {
        return balance;
    };
}

let myAccount = new BankAccount(100);
console.log(myAccount.deposit(100)); // Outputs: 150
console.log(myAccount.withdraw(25)); // Outputs: 125
console.log(myAccount.getBalance()); // Outputs: 125
