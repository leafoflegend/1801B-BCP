const chalk = require('chalk');

console.log(chalk.red('------------------------------'));

const c = args => console.log(args);

// Arrays are just objects that promise us an order.
// We know as computer scientists the way I can find every element in an array is by starting at key 0 -> key length - 1.

var fakeArray = {
  0: 'hi',
  1: 'bye',
  2: 'fly',
  3: 'shy',
  length: 4,
};

// for (var i = 0; i < fakeArray.length; ++i) {
//   var currentElement = fakeArray[i];

//   console.log(currentElement);
// }

// The purpose of this was to demonstrate that all we need to go through any collection is some sort of universal truth about the elements within it. Most of the time, a pattern to how we name the keys.

var youGuys = {
  Kayleen: '1 or 2?',
  Daniel: 'is my mic muted?',
  Anthony: 'still havent figured out what that picture behind you is',
};

// in: in when used as a singular operator returns either true or false
// console.log('Kayleen2' in youGuys);
// c(youGuys.hasOwnProperty('Kayleen'));

// in has two different ways javascript knows how to use it - on a singular key: value or against a collection of key:values
// for in loops will go through every key in an object.
// The order -> you can't trust it. It looks fine right now, because we wrote the object and its in the same file.
// The second that this object is transferred from one file to another or over the wire - the order of the key: value pairs is not something you can believe in.
// var key -> you can name it whatever you want, just like i is convention, key is just a convention.

// For In Loop is like the golden standard of this functionality across programming languages. Almost every programming language has something very syntactically similar to this.
// console.log('{');
// for (var key in youGuys) {
//   var value = youGuys[key];
//   console.log(`  ${key}: ${value},`);
// }
// console.log('}');

// Object.keys -> ES5
// Object.keys is an object method that enables you to transform an object into a new array populated with only its key values.
// var namesArray = Object.keys(youGuys);
// console.log(namesArray);
// // Because you guys are somewhat familiar with arrays - you'll get to leverage all the array methods and knowledge you have if you use the Object methods.

// namesArray.forEach(function(name) {
//   console.log(youGuys[name]);
// })

// Object.values -> ES6
// Developers are lazy, and sometimes, we dont even want to deal with looping through the keys to get the values, so we made a method that returns an array of all the values.
// var nameVals = Object.values(youGuys);
// c(nameVals);


// Object.entries -> ES6
// Sometimes when we use objects we want to know what keys the values were associated with. Right? So, we had our cake and ate it too.
// Object.entries converts an object into an array of arrays that are key:value pairs.
// var nameEntries = Object.entries(youGuys);
// c(nameEntries);
// for (var i = 0; i < nameEntries.length; ++i) {
//   var [key, value] = nameEntries[i];
//   console.log(`key: ${key}`);
//   console.log(`value: ${value}`);
//   console.log(chalk.magenta('-----------'));
// }

// Whats an iterable -> MDN -> ES7
// for of -> MDN -> ES7
// Id say this is a fun research topic, but maybe not good for tonights workshop.

// try to use Object.keys, Object.values, and of course, atleast one time, use a for in loop.








