const chalk = require('chalk');

console.log(chalk.red('------------------------------'));

// var anArray = [1, 2, 3, 4, 5, 6, 7, 8, 5, 9, 10];

// The Most Important (Non-Higher Order) Array Methods To Be The Following:

// Slice
// Def: It makes a shallow copy of an array.
// console.log(anArray.slice());

// Pop, Push
// anArray.pop();
// console.log('After pop: ', anArray);
// anArray.push('new 10');
// console.log('After push: ', anArray);

// indexOf
// Def: indexOf returns the index of the FIRST MATCHING VALUE.
// console.log('indexOf 5: ', anArray.indexOf(5));
// lastIndexOf
// Def lastIndexOf returns the final index of the FINAL MATCHING VALUE.

// splice
// Def: Splice is special in that it does all sorts of things. It can delete, append, both, and return sections of arrays.
// anArray.splice(4, 1, 'new 5');
// console.log('spliced array: ', anArray);

// Shift/Unshift
// Shift removes from the beginning of the array (mirror of pop)
// Unshift inserts at the beginning of the array (mirror of push)
// anArray.shift();
// console.log('After shift: ', anArray);
// anArray.unshift('new 1');
// console.log('After unshift: ', anArray);

// Non-Higher Order
// .map, .forEach, .reduce, .Whatever
// These are all higher order functions - we call them that because each of those takes a function as an argument. One might think of a function that calls functions as a higher order function.
// We are going to talk about these next week. So lets not, today.

// Functional Programming

// We call anything that mutates data - mutative.
// Data is kind of sacred.
// var anArray = [1, 2, 3, 4, 5, 6, 7, 8, 5, 9, 10];

// var lastElem = anArray[anArray.length - 1];

// var newArray = anArray.slice(0, -1);

// console.log(anArray);
// console.log(lastElem);
// console.log(newArray);

// Structured Programming
// We introduced restrictions to how we move around code.

// Object Oriented Programming
// Introduces restrictions to how we create data.

// Functional Programming
// Introduces restrictions to how we handle data.
// If we never mutate data - we can never lose important data.

// Time Travel
// When an error occurs in our code - we actually just step back to the last data that was created with functional code.
// State -> We call all the data in our entire application or codebase its 'state'.
// In functional land, we can save every moment of state -> think of it like a Tivo DVR into your application.
// Anytime something goes wrong, we can just rewind.
// In theory this makes an app - impossible to break.

// Slice's Caveats
// It makes a 'shallow' copy.
// Even though we did make a fresh copy of this array - we did not make fresh copies of the arrays within the array.
// We call this a 'shallow' copy because it can only go to a depth of 1.
// In Javascript - there is NO BUILT IN WAY TO COPY DEEP OBJECTS.
// var anArray = [[0], 1, 2, 3, 4, 5, 6, 7, 8, 5, 9, 10];

// var copyArray = anArray.slice();

// copyArray[0][0] = 'Mutated!';

// console.log('anArray: ', anArray);
// console.log('copyArray: ', copyArray);

// Splice is Cool
// Splice is the most powerful mutative method available in javascript.
// If you use splice properly, it can actually replace shift, unshift, push, pop
// MUTATIVE
// var anArray = [[0], 1, 2, 3, 4, 5, 6, 7, 8, 5, 9, 10];

// anArray.splice(0, 0, 'hi', 'bye', 'hello again!', [], {}, new Date());

// console.log(anArray);

// Console and its inconsistencies

// var crazyObject = {
//   anArray: [
//     {
//       anotherObject: {
//         anotherArray: [
//           {
//             value: 'so many lies',
//           }
//         ]
//       }
//     }
//   ]
// }

// console.log(crazyObject);

// Breakpoints

var anArray = [1, 2, 3];

for (var i = 0; i < anArray.length; ++i) {
  console.log(anArray[i]);
}

