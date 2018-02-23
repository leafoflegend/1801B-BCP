const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// sumEvensOnly
// Write a function sumEvensOnly that, given a starting and ending number, returns the sum of the range of numbers between the given starting and ending numbers.

function sumEvensOnly(min, max) {
  var sum = 0;

  for (var i = min; i <= max; ++i) {
    if (!(i % 2)) sum += i;
  }

  return sum;
}

// c(sumEvensOnly(1, 5)); // => 6

/*
Range is [1, 2, 3, 4, 5].
Even numbers in that range are 2 and 4.
The sum of 2 and 4 is 6.
*/

// findLargestThreeDigitNum
// Write a function findLargestThreeDigitNum that, given a string of digits between 1 and 9, will return the largest three-digit number from the given string.

function getLargestThreeDigitNum(aStrOfNums) {
  if (!aStrOfNums) return 0;

  var firstThree = parseInt(aStrOfNums.slice(0, 3));
  var maxNum = firstThree;

  for (var i = 1; i < aStrOfNums.length - 2; ++i) {
    var currentNum = parseInt(aStrOfNums.slice(i, i + 3));

    if (currentNum > maxNum) maxNum = currentNum;
  }

  return maxNum;
}

var largestNum = getLargestThreeDigitNum('231998132');
// console.log(largestNum); // 998
// console.log(typeof largestNum); // 'number'

// madLibs
// Write a function madLibs that, given a string and an array of words, replaces the asterisks in the string with a word from the words array.

function madLibs(aStr, libs) {
  var libReadyArray = aStr.trim().split('*');

  var libbedString = '';

  libReadyArray.forEach(function (pieceOfString, i, arr) {
    libbedString += pieceOfString;

    var currentLib = libs[i % libs.length];

    if (i !== arr.length - 1) {
      libbedString += currentLib;
    }
  })

  return libbedString;
}

// c(madLibs('My name is * and I am a *.', ['Sean', 'potato']));
// => 'My name is Sean and I am a potato.'
// If there are more words in the words array than there are asterisks in the sentence, that's ok! Just ignore the extra words.

// c(madLibs('My name is * and I am a *.', ['Sean', 'potato', 'extra', 'words']));
// => 'My name is Sean and I am a potato.'
// If there are fewer words in the words array than there are asterisks in the sentence, start replacing asterisks with words from the front of the array again.

// c(madLibs('Marching is fun: *, *, *, *!', ['left', 'right']));
// => 'Marching is fun: left, right, left, right!'

// isPrime
// Write a function isPrime that, given a number num, returns true if the number is a prime number; otherwise returns false. A prime number is a number that is greater than 1 and is only divisible by itself and the number 1.

// Assume your function will only receive whole numbers greater than 1 as inputs.

function isPrime(aNum) {
  for (var i = Math.ceil(Math.sqrt(aNum)); i > 1; --i) {
    if (aNum % i === 0) return false;
  }

  return true;
}

// console.time('prime');
// c(isPrime(179426549));
// console.timeEnd('prime');

// nestingBird
// Write a function nestingBird that, given an array of characters and nested sub-arrays, concatenates the characters and returns the name of the bird in the nest.

function nestingBird (deepArr) {
  return deepArr.reduce(function (robinStr, charOrArr) {
    if (Array.isArray(charOrArr)) {
      return robinStr + nestingBird(charOrArr);
    } else {
      return robinStr + charOrArr;
    }
  }, '');
}

c(nestingBird(['r', 'o', ['b', ['i'], 'n']])); // => 'robin'