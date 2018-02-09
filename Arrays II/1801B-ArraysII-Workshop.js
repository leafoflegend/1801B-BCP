const chalk = require('chalk');

console.log(chalk.red('------------------------------'));

 // Debug Hunt

//  var debugHunt = function() {
//   var hello1 = function() {
//       return console.log('step 1')
//   }

//   var hello2 = function() {
//       return console.log("Hello" + msg);
//   }

//   hello2();

//   function hello3(a,b) {
//       return console.log(a + b);
//   }

//   hello3(getting, better);


//   var hello4 = function(first, last) {
//       return console.log(fir + ' ' + last);
//   }

//   hello4("Debugging is", "simple");

//   function hello4() {
//       return console.log("So far so good");
//   }

//   hello4

//   var hello5 = function(num) {
//       return console.log('!!')
//   }

//   hello5();
// }

// Even and Odd

// Write a function that accepts an array of numbers and returns an array of arrays. The first array in the return array should include all even numbers. The second array in the return array should include all odd numbers.

// Write two solutions for this problem. In the first, use only array methods from the following list:

// .pop()
// .push()
// .shift()
// .unshift()

// In the second, avoid using those methods and incorporate .slice() (you may use the .length property in both).
 
// function evenOdd(anArr) {
//   var evens = [];
//   var odds = [];

//   while (anArr.length) {
//     var currentElem = anArr[0];

//     if (currentElem % 2) {
//       odds.push(anArr.shift());
//     } else {
//       evens.push(anArr.shift());
//     }
//   }

//   return [evens, odds];
// }

// function evenOdd(anArr) {
//   var evens = [];
//   var odds = [];

//   for (var i = 0; i < anArr.length; ++i) {
//     var currentElem = anArr[i];

//     if (currentElem % 2) {
//       odds = odds.concat(anArr.slice(i, i + 1));
//     } else {
//       evens = evens.concat(anArr.slice(i, i + 1));
//     }
//   }

//   return [evens, odds];
// }

// var myArray = evenOdd([1,2,3,4,5,6]);
// console.log(myArray)
// [ [ 2 ,4, 6 ], [ 1, 3, 5 ] ]

// myUnshift

// One of the best ways to learn a concept is to go through the process of implementing it yourself. In this section, we'll implement our own versions of several key array methods.

// To start, write a myUnshift function that mirrors the behavior of JavaScript's .unshift() array method. However, myUnshift should accept the array to operate on as an argument and return the new array with the added element.

// For now, assume that myUnshift will receive only two arguments: the array, and a single value to be added to the start of the array.

// Do not use the native .unshift() method in your own implementation.

// var origArr = [1, 2, 3];

// function myUnshift(anArr, elem) {
//   anArr.splice(0, 0, elem);

//   return anArr;
// }

// console.log(myUnshift(origArr, 0));    // => [0,1,2,3]

// console.log('origArr: ', origArr);

// myJoin

// Write a function myJoin that mirrors the behavior of JavaScript's .join() array method. However, myJoin will accept the array to operate on as its first parameter, rather than being invoked as a method on that array.

// Try and mirror the behavior of the native .join() method exactly. Note that if an element is undefined or null it should be converted to the empty string. Do not use the native .join() method in your own implementation.

// function myJoin(anArr, joiner = ',') {
//   var joinedString = anArr[0];

//   for (var i = 1; i < anArr.length; ++i) {
//     var currentElem = anArr[i];

//     if (currentElem === undefined || currentElem === null) currentElem = '';
//     else currentElem = currentElem.toString();

//     joinedString += `${joiner}${currentElem}`;
//   }

//   return joinedString;
// }

// console.log(myJoin(['hello', undefined, 'world'], ' '));
// // => 'hello  world'
// console.log(myJoin([2, "be", false]));
// // => '2,be,false`

// myLastIndexOf

// Write a myLastIndexOf function that mirrors the behavior of JavaScript's .lastIndexOf() array method. However, myLastIndexOf will accept the array to operate on as an argument, instead of being invoked as a method on that array.

// Try and mirror the behavior of the native .lastIndexOf() method as closely as possible. Note that .lastIndexOf() accepts an optional parameter representing the index at which to start searching backwards.

// Do not use the native .lastIndexOf() method in your own implementation.

// function myLastIndexOf(anArr, searchTerm, startIndex) {
//   if (startIndex === undefined) startIndex = anArr.length - 1;

//   for (var i = startIndex; i >= 0; --i) {
//     var currentElem = anArr[i];

//     if (currentElem === searchTerm) return i;
//   }

//   return -1;
// }

// console.log(myLastIndexOf([1,2,1], 1));    // => 2
// console.log(myLastIndexOf([1,2,1], 1, 1));    // => 0

// mySlice

// Write a mySlice function that mirrors the behavior of JavaScript's .slice() array method. However, mySlice will accept the array to operate on as an argument, rather than being invoked as a method on that array.

// Try and mirror the behavior of the native .slice() method exactly. If your function is passed a negative index value, that value should become an offset from the end of the sequence.

// Do not use the native .slice() method in your own implementation.

// function mySlice(anArr, startIndex = 0, endIndex) {
//   if (endIndex === undefined) endIndex = anArr.length;

//   if (startIndex < 0) startIndex = anArr.length + startIndex;
//   if (endIndex < 0) endIndex = anArr.length + endIndex;

//   var copyArr = [];

//   for (var i = startIndex; i < endIndex; ++i) {
//     var currentElem = anArr[i];

//     copyArr.push(currentElem);
//   }

//   return copyArr;
// }

// console.log(mySlice([1,2,3]));    // => [1,2,3]
// console.log(mySlice([1,2,3], 1));    // => [2,3]
// console.log(mySlice([1,2,3], 1, 2));    // => [2]
// console.log(mySlice([1,2,3], -1));    // => [3]

// Rotate Array

// Write a function rotate that accepts an array and a number n and returns a new array with the elements "rotated" n spaces.

// If n is greater than 0 it should rotate the array to the right. If n is less than 0 it should rotate the array to the left. If n is 0, then it should return the array unchanged.

// Dont fall for the curse of pre-optimization.

var myArray = [1, 2, 3, 4, 5];

function rotate(anArr, numOfRotations) {
  // Take something from one side and put it at the other.
  var rotatedArray = anArr.slice();
  var finalizedRotations = Math.abs(numOfRotations) % anArr.length;

  var direction = numOfRotations >= 0 ? 'right' : 'left';

  for (var i = 0; i < finalizedRotations; ++i) {
    if (direction === 'right') {
      rotatedArray.unshift(rotatedArray.pop());
    } else {
      rotatedArray.push(rotatedArray.shift());
    }
  }

  return rotatedArray;
}

// There are greedy and elegant solutions to many problems in programming.
// ALWAYS DO THE GREEDY ONE FIRST, DO NOT TRY TO WRITE ELEGANT CODE BEFORE HAVING A GREEDY SOLUTION.
// Elegance comes after the rest.

console.log(rotate(myArray, 1));     // => [5, 1, 2, 3, 4]
console.log(rotate(myArray, -100000000000000007612836192837912531));    // => [2, 3, 4, 5, 1]
console.log(rotate(myArray, 0));    // => [1, 2, 3, 4, 5]

