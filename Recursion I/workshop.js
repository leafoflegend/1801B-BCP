const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Count Vowels
// Write a function that accepts a string and returns the number of vowels in that string. Use recursion.

function countVowels(aStr) {
  if (!aStr) return 0;

  var VOWELS = 'aeiouAEIOU';
  var currentChar = aStr[0];

  return !!(VOWELS.indexOf(currentChar) !== -1) + countVowels(aStr.slice(1)); 
}

// c(countVowels('Four score and seven years'));    // => 9

// Reverse Array
// Write a function that accepts an array and returns a reversed copy of that array. Use recursion.

var arr = [1,2,3,4]

// When we do this iteratively the operation is to take the first and last thing and flip them, then move inwards by 1 from each end of the array and do the same. Over and Over and Over.
// I think recursively its very hard to track two different collections, and by that I mean to take the end and the beginning (thats two things) and then go and call the function on the remaining content. This would lead to a weird place where we have to recombine the array after the recursive calls, this seems pretty bad to me.
// In my mind how I want to do this is to say the following given array: [n, n1, ...] I think the operation is (arr) => arr[arr.length - 1].concat(reverse(${restOfArray})) - Where reverse is this function itself. This way we are just taking the thing at the end, and passing the rest of the array into this function until there is no length left.

// This isnt perfectly optimized. We dont need a 0 length call, thats 1 extra than neccessary.
function reverseArray(anArr) {
  if (!anArr.length) return [];

  var lastElement = anArr[anArr.length - 1];
  var restOfArray = anArr.slice(0, -1);

  // The reason I need to wrap lastElement in an Array is because, concat is an array method. I can't call it on an element.
  return [lastElement].concat(reverseArray(restOfArray));
}

var reversedArr = reverseArray(arr);

// Lets talk about the CALL STACK
// 0 -> []
// 1 -> [1].concat([])
// 2 -> [2].concat([1])
// 3 -> [3].concat([2, 1])
// 4 -> [4].concat([3, 2, 1])

// console.log(reversedArr)    // [4,3,2,1]
// console.log(arr)    // [1,2,3,4]

// Sum Digits
// Write a function that sums all the digits of a given integer (assume positive). Use recursion.

function sumDigits(aNum) {
  var stringNum = aNum.toString();

  if (stringNum.length === 1) return aNum;

  var firstNumber = parseInt(stringNum[0]);
  var restOfNums = parseInt(stringNum.slice(1));

  return firstNumber + sumDigits(restOfNums);
}

// c(sumDigits(1234));    // => 10

// Fibonacci
// Create a function that takes a number n and returns the nth number in the Fibonacci sequence. The Fibonacci sequence is a series of numbers in which each number is the sum of the two numbers preceding it.

// ex: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55....

function fibonacci(index) {
  if (index <= 1) return index;

  return fibonacci(index - 1) + fibonacci(index - 2);
}

// c(fibonacci(9));    // => 8

// Greatest Common Divisor
// In mathematics, the greatest common divisor (gcd) for a set of numbers is the largest positive integer that divides the numbers without a remainder. For example, the gcd of 8 and 12 is 4.

// Write a function that accepts two positive integers and recursively computes (and returns) the greatest common divisor.

// To solve this problem, it will be helpful to read about Euclid's algorithm. The key observation behind Euclid's algorithm is that the gcd of two numbers also divides their difference.

function gcd(a, b) {
  var remainder = a % b;

  if (!remainder) return b;

  return gcd(b, remainder);
}

c(gcd(8, 12));    // => 4