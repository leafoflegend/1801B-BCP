const chalk = require('chalk');

console.log(chalk.red('------------------------------'));

const c = (...args) => console.log(...args);

// Prompt
// Very Odd
// Write a function, veryOdd. The function accepts an array of numbers, allTheNums. It should return a new array that contains only the odd numbers from allTheNums. veryOdd must not mutate allTheNums.

var allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];

function veryOdd(arrOfNums) {
  return arrOfNums.filter(function(elem) {
    return elem % 2;
  })
}

var oddNums = veryOdd(allTheNums);

// console.log('oddNums:', oddNums); // [1, 3, 5, 7];
// console.log('allTheNums:', allTheNums); // [1, 2, 3, 4, 5, 6, 7, 8]

// Very Odd - Mutant Version!
// Write a function, veryOddMutant. The function accepts an array of numbers, allTheNums. The function should mutate allTheNums by replacing every even number in the array with the string 'normie'. veryOddMutant should return a count of the number of even numbers it replaced.

var allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];

function veryOddMutant(arrOfNums) {
  for (var i = 0; i < arrOfNums.length; ++i) {
    var currentNum = arrOfNums[i];
    
    if (!(currentNum % 2)) {
      arrOfNums[i] = 'normie';
    }
  }
}

var countRemoved = veryOddMutant(allTheNums);

// console.log('allTheNums:', allTheNums);
// [1, 'normie', 3, 'normie', 5, 'normie', 7, 'normie'];

// console.log('countRemoved:', countRemoved);
// 4

// Clone Machine
// You have a machine that can "clone" animals. Each animal is represented by a simple array: the first element is the animal's name, the second is the animal's species, and the third is an array with the names of all the animal's offspring.

// For example, the sheep Dolly would be represented by this array below. In this example, Dolly has no offspring.

// var dolly = ["Dolly", "sheep", []];
// Write a cloneAnimal function that takes an animal and returns a "clone" of that animal. The clone should be of the same species, but should have no offspring. The clone's name should be the parent's name, with "Clone" appended to the end.

// Your cloneAnimal function should also add the clone's name to the parent's offspring array.

var dolly = ["Dolly", "sheep", []];

function cloneAnimal(anAnimal) {
  var offSpringName = `${anAnimal[0]}Clone`;

  var offSpring = [offSpringName, anAnimal[1], []];

  anAnimal[2].push(offSpringName);

  return offSpring;
}

var dollyClone = cloneAnimal(dolly);

// The clone is of same species, with new name and no offspring
// console.log(dollyClone)    // ["DollyClone", "sheep", []]

// The parent animal now has an offspring in its array
// console.log(dolly)    // ["Dolly", "sheep", ["DollyClone"]]

// My Splice
// Write a mySplice function that mirrors the behavior of JavaScript's .splice() array method. However, mySplice should accept the array to operate on as an argument, rather than being invoked as a method on that array.

// Try and mirror the behavior of .splice() as closely as possible, but to start with, assume all arguments will be positive integers. Most importantly, your function should have two observable effects: it should modify the array it receives as an argument and it should return an array containing the deleted elements.

// Do not use the native .splice() method in your own implementation.

var myArray = [1,2,3];

function mySplice(anArray, startIndex, deleteCount) {
  if (typeof startIndex === 'undefined') startIndex = 0;

  var firstHalf = [];
  var secondHalf = [];
  var deletedElements = [];
  var endIndex = startIndex + deleteCount;

  var originalLength = anArray.length;

  for (var i = 0; i < originalLength; ++i) {
    var currentElement = anArray[0];

    if (i >= startIndex && i < endIndex) {
      deletedElements.push(anArray.shift());
    } else if (i < startIndex) {
      firstHalf.push(anArray.shift());
    } else {
      secondHalf.push(anArray.shift());
    }
  }

  while (firstHalf.length) {
    anArray.push(firstHalf.shift());
  }

  while (secondHalf.length) {
    anArray.push(secondHalf.shift());
  }

  return deletedElements;
}

// console.log("returned elements: ", mySplice(myArray, 1, 1))    // [2]
// console.log(myArray)    // [1,3]

// Reverse Array
// Write a function that accepts an array and reverses that array in place. The behavior should mimic the behavior of the native .reverse() array method. However, your reverse function should accept the array to operate on as an argument, rather than being invoked as a method on that array.

// Do not use the native .reverse() method in your own implementation.

var myArray = [1, 2, 3, 4];

function reverse(anArray) {
  for (var i = 0; i < Math.floor(anArray.length / 2); ++i) {
    var leftElement = anArray[i];
    var rightElement = anArray[(anArray.length - 1) - i];

    anArray[(anArray.length - 1) - i] = leftElement;
    anArray[i] = rightElement;
  }

  return anArray;
}

reverse(myArray);
// console.log(myArray)    // [4, 3, 2, 1]

// Deeper Copy

var arr = [1,[2,3]];

// Iterative
function copy(anArray) {
  var returnArray = [];

  for (var i = 0; i < anArray.length; ++i) {
    var currentElem = anArray[i];

    if (Array.isArray(currentElem)) {
      var innerArray = [];

      for (var j = 0; j < currentElem.length; ++j) {
        var currentInnerElem = currentElem[j];

        innerArray.push(currentInnerElem);
      }

      returnArray.push(innerArray);
    } else {
      returnArray.push(currentElem);
    }
  }

  return returnArray;
}

// What we should notice about the above solution is that if I asked you to go one deeper we run into trouble! e.g. [1, [2, 3, [4, 5]]]. Uh oh! But we should also notice that we are following a pattern:
/*
create empty array
loop through original array
check if element is array
if not - push in primitive
if it is:
  create empty array
  loop through original array
  check if element is array
  if not - push in primitive
  if it is:
    create empty array
    loop through original array
    check if element is array
    if not - push in primitive
    if it is:
      create empty array
      loop through original array
      check if element is array
      if not - push in primitive
      if it is:
      return array
    return array
  return array
return array

Anytime you see this pattern - you are seeing something that recursion deals with!
*/

function recursiveCopy(anArray) {
  var returnArray = [];

  for (var i = 0; i < anArray.length; ++i) {
    var currentElem = anArray[i];

    if (Array.isArray(currentElem)) {
      returnArray.push(recursiveCopy(currentElem));
    } else {
      returnArray.push(currentElem);
    }
  }

  return returnArray;
}

// var arrCopy = copy(arr);
var arrCopy = recursiveCopy(arr);
// Wow!

arr[1].push(4);
console.log(arrCopy)    // [1,[2,3]] Copy is not affected!