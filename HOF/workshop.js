const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Function Logger
// It's important to remember that functions can accept arguments of any type. Thus far, the functions we've written expect numbers, strings, or booleans as arguments, but functions can also accept the higher order data types, including other functions.

// Write a function functionLogger that accepts a function to run and an argument to pass to that function. Your functionLogger should log the message "Function starting", run the function, log "Function complete", and return the result of the function call.

function squareNum(x) { return x * x }

function functionLogger(callback, arg) {
  c('Function starting!');

  var result = callback(arg);

  c('Function complete!');

  return result;
}

// var squareOfFour = functionLogger(squareNum, 4);
// Function starting
// Function complete

// console.log(squareOfFour)    // 16

// Finder Function

var numbers = [1, 3, 5, 64, 7, 12];
var odds = [9, 13, 15, 17];

function isEven(num) { return !(num % 2); };

function finderFunction(collection, callback) {
  for (var i = 0; i < collection.length; ++i) {
    var currentElem = collection[i];

    if (callback(currentElem)) return i;
  }

  return -1;
}

// This isnt me showing you ES6. This is me reminding you to read the docs.
// const finderFunction = (collection, cb) => collection.findIndex(cb);

// console.log(finderFunction(numbers, isEven)) // 3
// console.log(finderFunction(odds, isEven))   // -1
// If you write this utility function, congrats! You just implemented part of the functionality provided by the widely used lodash library.

// BONUS CHALLENGE

// Refactor your solution so that finderFunction returns an array of all elements that pass the test, rather than the index of the first element that passes the test.

function finderFunctionBonus(collection, callback) {
  var foundElements = [];

  for (var i = 0; i < collection.length; ++i) {
    var currentElem = collection[i];

    if (callback(currentElem)) foundElements.push(currentElem);
  }

  return foundElements;
}


// var evens = finderFunctionBonus(numbers, isEven);
// console.log(evens);    // [64, 12]

// Times Tables
// Write a function that generates a "Times Tables" function for any number passed in. The function should accept a single parameter (a number) and return a function that itself returns the product of that number and any number passed in.

// ES5
function timesTable(multiplier) {
  // Closure
  // Any variable within this scope will be available to any function within this scope. Multiplier is in this scope.

  return function(num) {
    // We are 'closing over' a reference to multiplier permanently.
    return multiplier * num;
  }
}

// ES6
// const timesTable = multiplier => num => multiplier * num;

// var ninesTable = timesTable(9);
// c(ninesTable(8));    // => 72

// var twelvesTable = timesTable(12);
// c(twelvesTable(100));    // => 1200

// Biller Builder

// In New York, the final bill is calculated as the price of the item, plus a 3% shipping fee, plus a 9% sales tax assessed on the price of the item together with shipping costs.
// In New Jersey, the final bill is calculated as the price of an item, plus a 5% shipping fee, plus a 7% sales tax assessed on the price of the item together with shipping costs.
// So the final bill for a $100 item in New York would be: (100*1.03)*1.09 = 112.27 And in New Jersey: (100*1.05)*1.07 = 112.35

function biller(state) {
  function generateBiller(shipping, sales) {
    return function(amount) {
      return ((amount * shipping) * sales).toFixed(2);
    }
  }

  switch (state) {
    case 'NY':
      return generateBiller(1.03, 1.09);
    case 'NJ':
      return generateBiller(1.05, 1.07);
    default:
      return generateBiller(1, 1);
  }
}

// var newYorkBiller = biller('NY');
// c(newYorkBiller(100));   // => 112.27

// var newJersBiller = biller('NJ');
// c(newJersBiller(100));    // => 112.35

// Partial

// Our partial function will accept functions that expect two arguments and return functions that expect one. The other argument will be defaulted to the value passed in as the second argument to our partial function.

var summer = function(a, b) { return a + b };

// Currying

// ES5
// function partial(callback, firstArg) {
//   return function(secondArg) {
//     return callback(firstArg, secondArg);
//   }
// }

// ES6
// If theres only one arg you do not need to wrap the args in parenthesis
const partial = (cb, firstArg) => secondArg => cb(firstArg, secondArg);

sumFive = partial(summer, 5);
// c(sumFive(10));    // => 15;

// Logger Array
// There is a big problem trying to solve this very traditionally.

// function genLoggers(aNum) {
//   var functionArray = [];

//   for (var i = 0; i < aNum; ++i) {
//     functionArray.push(function () {
//       console.log(i);
//     })
//   }

//   return functionArray;
// }
// Problem One ^^^
// Here youre seeing scope come back to bite you.
// Lets talk about 'i'.

// ES5 Solution
// function genLoggers(aNum) {
//   var functionArray = [];

//   for (var i = 0; i < aNum; ++i) {
//     functionArray.push(createLogger(i));
//   }

//   // We have to create a new scope - to close over something that cannot be referenced by the other functions.
//   function createLogger(theIndex) {
//     return function() {
//       console.log(theIndex);
//     }
//   }

//   return functionArray;
// }
// ^^^ Is well known as a pretty aggravating thing in ES5.

// So... you've heard of let eh?
// ES6
function genLoggers(aNum) {
  var functionArray = [];

  // let introduces 'block scope' which means that the curly brace after the for () is its own scope. Its the same as creating a new function with its own scope. Were closing over i just by using the for loops brackets, with no need for a new function.
  for (let i = 0; i < aNum; ++i) {
    functionArray.push(function() {
      console.log(i);
    });
  }

  return functionArray;
}

// Maybe the lazy programmer would remember a simple thing: always use let for for loops. Theres no downside and it will ensure that each iteration of a for loop has its own scope without the need for a function call within the for loop.

// var loggerArray = genLoggers(5);
// loggerArray[0]();    // 0
// loggerArray[4]();    // 4