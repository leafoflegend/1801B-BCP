const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

var someArray = [1, 2, 3, 4, 5];

// Find 3.

function findThree(array) {
  return someArray.forEach(function (elem) {
    if (elem === 3) return true;
    return false;
  })
}

// c(findThree(someArray));

// forEach
// forEach takes a callback as its only argument - thats it.
// The callbacks signature is (elem: element its currently at, index: the index its currently at, array: the array in its entirety).
// A 'signature' is what we call the arguments this function promises to pass to your callback.
// These three things: elem, i, array - are generally the three you get in every higher order array method.

// forEach is the most basic of all the HOAM's. Its just a loop. It returns undefined every time, all the time.

someArray.forEach(function(elem, i, arr,) {
  // console.log(elem);
  // console.log(i);
  // console.log(arr);
});

// map
// Why is map so cool?
// map has one purpose in life -> to make a new array based on some other array.
// This is a functional programming compliant function.
// Whatever you return at each index -> is what is placed in the new array being created at that same index.

// c(someArray.map(function(elem) {
//   return elem + ' Daniel';
// }))
// c(someArray);

// filter
// Filter is also functional, in that it returns an entirely new array. So the original array remains unharmed.
// Filters purpose is to build a new array of (hopefully) less items. Better said -> it takes a collection, tests every element in that collection, and if you pass the test you are in the new array being created, if you fail the test, you do not get pushed into the new array.
// c(someArray.filter(function(elem) {
//   return elem > 4;
// }));

// c(someArray.filter(elem => elem > 4));

// reduce
// Reduce is the most powerful HOAM, and it is functional.
// Reduce takes a collection, and 'reduces' it into a singular value. People sometimes get confused that we can in fact reduce a collection into a larger collection, or a smaller one, or not one, or a function, really anything. This is part of the power of reduce - that we can take any collection and form any value out of it without restriction.

// Reduce is one of the only array methods that takes two arguments. Every other one we've taught takes one: callback.
// Reduce takes both: callback, and initialReduction. What initialReduction represents can be summed up in the following example:

// Sum all numbers

function sumAllNumbers(array) {
  // 'sum' is the initialReduction! You do this all the time. We need a place to store the value that we eventually want to return.
  var sum = 0;

  for (var i = 0; i < array.length; ++i) {
    sum += array[i];
  }

  return sum;
}

// Reduce is saying you can customize my 'sum'.
// Then, every iteration whatever we return becomes the new value of sum.
// If we forget to include an intialReduction value to reduce, reduce assumes that the initialReduction is the value of the 0th index of the array, it will then skip that index.
function myReduce(array, callback, initialReduction) {
  // Figure out if initialReduction is included if so - use it - if not - set to 0th element of array.
  var currentReduction = initialReduction ? initialReduction : array[0];

  // Start a for loop, it either starts at 0 or 1. This depends on whether we used an initialReduction value or not.
  for (var i = initialReduction ? 0 : 1; i < array.length; ++i) {
    // Grab the current element (duh)
    var currentElem = array[i];

    // This may seem like the strangest part - but we pass the current sum, the current element, the index, and the array to the callback. Whatever it returns becomes the new sum. Rinse and repeat.
    currentReduction = callback(currentReduction, currentElem, i, array);
  }

  // return the final sum.
  return currentReduction;
}

// c(myReduce(someArray, function(sum, nextNum) {
//   return sum + nextNum;
// }))

var stringArray = ['a', 'b', 'a', 'c', 'd', 'd', 'd'];

// I want to know the count of each letter.
// c(myReduce(stringArray, function(countDict, nextChar) {
//   if (countDict[nextChar]) {
//     return {
//       ...countDict,
//       [nextChar]: countDict[nextChar] + 1,
//     }
//   } else {
//     return {
//       ...countDict,
//       [nextChar]: 1,
//     }
//   }
// }, {}))

// Merge a ton of objects.

var objArray = [
  {
    a: '1',
  },
  {
    b: 2,
    c: 3,
    d: 4,
  },
  {
    Daniel: 'Kim',
    Dan: 'Gutt',
    Natalie: '',
  },
  {
    a: 'not 1',
  },
];

// c(myReduce(objArray, function(objDict, nextObj) {
//   return {
//     ...objDict,
//     ...nextObj,
//   };
// }))

var someString = 'hi im a string';

// c(someString
//   .split('')
//   .map(function(char) {
//     return char.charCodeAt(0);
//   })
//   .reduce(function(sum, num) {
//     return sum + num;
//   })
//   .forEach(function(){}));

// This breaks ^^^ from the last forEach being applied to a number.
// Method chaining works off a not too magical system - we've learned all about objects right?

// As long as we return another array, we can assum that it TOO has prototype.forEach -> thats why we can chain. A quick demonstration...

function generateFakeArray() {
  var array = [];
  var myname = `${Math.random() * 1234} unique array`;

  array.map = function() {
    console.log(myname);
    return generateFakeArray();
  }

  return array;
}

var firstArray = generateFakeArray();

// Theres no magic! Chaining works because were always returning an object with a method of the same name!
// firstArray.map().map().map().map().map();

var firstObj = {
  a: 1,
  b: 2,
};

var secondObj = {
  c: 3,
  d: 4,
};

var mergedObject = {
  ...firstObj,
  // { a: 1, b: 2 }
  // and get rid of the curly braces.
  // a: 1, b: 2,
  ...secondObj,
  // { c: 3, d: 4 }
  // c: 3, d: 4
  /*
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  */
}

// It works on both arrays and objects - destructuring is not specific to object type -> it works on all objects.

var firstArr = [1, 2];
var secondArr = [3, 4];

var mergedArr = [...firstArr, ...secondArr];

c(mergedArr);
c(mergedObject);

function doSomething() {
  console.log('hi');
}

var anotherThing = { ...doSomething };

c(anotherThing);
