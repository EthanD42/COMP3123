// exercise 1 original code

function gretter(myArray, counter){
    var greetText = 'Hello'

    for (var index = 0; index < myArray.length; index++) {
        console.log(greetText + myArray[index]);
    }
}

gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

// exericse 1 new code

const greeter = (myArray, counter) => {
    const greetText = 'Hello'

    for (const name of myArray) {
        console.log(`${greetText} ${name}`);
    }
};

gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);



// exercise 2

const capitalize = (str) => {
    const  [first, ...rest] =  str;
    return first.toUpperCase() + rest.join('');

};

console.log(capitalize('greeetings'));



// exercise 3

const colors = ['red', 'green', 'blue'];
const capitalizeColors = colors.map(color => capitalize(color));
console.log(capitalizeColors);



// exercise 4
var values = [1, 60, 34, 30, 20, 5];
const filterLessThan20 = values.filter(value => value > 20);
console.log(filterLessThan20);


// exercise 5

var array = [1, 2, 3, 4, 5];
const sum = array.reduce((total, current) => total + current, 0);
const product = array.reduce((total, current) => total * current, 1);

console.log(sum);
console.log(product);




// exercise 6


class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    details() {
        return `${this.model} (${this.year})`;
    }
}
const car2 = new Car('Pontiac Firebird', 1976);

console.log(car2.details());


class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }
    info() {
        return `${this.model} (${this.year}) - Balance: ${this.balance}`;
    }
}
    const sedan = new Sedan('Volvo SD', 2018, 30000);
    console.log(sedan.info());
