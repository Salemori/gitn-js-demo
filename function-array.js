// JavaScript Functions and Arrays Assignment

// Part 1: Basic Functions
function convertToCelsius(value)
{
    return ((value - 32) * (5 / 9)).toFixed(2);    
}

console.log(convertToCelsius(100));

//Part 2: Advanced Functions
function createGreeting(name, age)
{
    return `Hello, my name is ${name} and I am ${age} years old.`;
}

console.log(createGreeting("Roni", 21));

//Part 3: Basic Array Methods
let numbers = [1, 2, 3, 4, 5];

numbers.push(6);
console.log(numbers.toString());

numbers.shift(numbers[0]);
console.log(numbers.toString());

numbers.unshift(0);
console.log(numbers.toString());

let joinNumber = numbers.join('-');
console.log(joinNumber);

// Part 4: Advanced Array Methods (Map and Filter)
let doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers.join(', '));

let evenNumbers = numbers.filter(number => (number % 2) === 0);
console.log(evenNumbers.join(', '));

// Part 5: Loop (Bonus)
function sumArray(array)
{
    let sum = 0;
    for(let i = 0; i < array.length; i++)
    {
        sum += array[i];
    }
    return sum;
}

let result = sumArray([1, 2, 3, 4, 5]);
console.log(result);