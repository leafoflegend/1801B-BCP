const chalk = require('chalk');
const axios = require('axios');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

var array = [1, 2, 3, 4, 5];

var someFunction = function(elem) {
  // console.log(elem);
};

// We are passing a function as an argument to another function.
// Higher Order Functions
// Are the fact that functions are just objects - they can be passed into functions, they can be returned from functions and they can be stored anywhere.
array.forEach(someFunction);

// Callback Functions
// The Problem: What do we do when we complete some task that takes an unknown amount of time? And/or never completes.

// setTimeout takes a function (callback), and a number of ms
// We've learned only the opposite of this phenemenon so far.
// We've learned only whats called 'synchronous programming'.
// This is when code executes in order.
// Let me show when it doesnt.
setTimeout(function() {
  // console.log('3 seconds have passed!');
}, 3000);

// console.log('End of file.');

// The reason is because javascript doesn't want to stop executing any code to wait for anything else if it doesnt have to. This phenemenon is called 'asynchronous programming' and this is when events can be happening with indetermininate times of execution.

// We want to get some result from the internet.
// How do I know when I've finished getting this?
// Callback
// A callback is what we call a function that we've explained what to do when something occurs.
// console.log('Getting stuff from google...');

function handleGoogle() {
  console.log('handling google!');
}

function fakeSetTimeout(callback, waitLength) {
  setTimeout(callback, 0); // event loop

  for (var i = 0; i < waitLength; ++i) {
    console.log(i);
  }
}

// fakeSetTimeout(function() {
//   console.log('finished!');
// }, 30000);

// Promises
// Async Await

// CALLBACK HELL = BAD BAD BAD




// We try to think about abstracting a for loop.
// Abstraction: Is when we make any operation in javascript easier to do by writing some kind of utility that gives us all of its abilities in a highly configurable way.

// Some array with content
var dumbArray = [1, 2, 3, 4, 5, 6, 7];

// We need to do something with all that content.
for (var i = 0; i < dumbArray.length; ++i) {
  var currentElement = dumbArray[i];

  // We perform some action with this element? Right??????????
}

// forEach
function myForEach(array, callback) {
  for (var i = 0; i < array.length; ++i) {
    var currentElement = array[i];

    callback(currentElement, i, array);
  }
}

function logger(elem, i) {
  console.log(`at ${i} there is ${elem}`);
}

// The way you see me write these functions where i write them myForEach(array, function (elem, i) { ... })
// has a name - we call them anonymous functions. BECAUSE THEY HAVE NO NAME, AND WILL NEVER BE USED AGAIN!
// So why name them?
// myForEach(dumbArray, logger)

// the important part about callbacks is what we were talking about earlier
// THEY CHOOSE WHEN TO CALL YOU BACK (invoke the function) - THEY ALSO CHOOSE THE CONTENT OF THE PHONE CALL (arguments)

// We are promised two things from any higher order function - some promise about when it will call us e.g. google just responded, or i am looking at a new element in this array, and we are promised some sort of information as an argument e.g. googles response, or the element that the loop is currently at.

// This is a great time to point out - this is not an ability readily available in other languages. This is a superpower of javascript making functions first class citizens of the language. This is arguably whats made javascript as great as it is and take over everything.

// ^^^ Higher Order Functions Part 1 - Passing as an argument
// Now We're at part 2 - returning from a function.
// Its most popular and powerful use case is for 'CLOSURE'. Which we briefly discussed during scope.

function incrementer(aName) {
  // counter is part of incrementers local scope, is not available outside of this.
  var counter = 0;

  // When we made this function in here - it was allowed to look at counter.
  // And im sure we glazed over when i spoke about this, but memory management in JS has one key rule: as long as something maintains a reference to it - it stays alive and does not get thrown away.
  return {
    count: function() {
      // This, is a reference to something. Even though the scope of icrementer should be thrown away, this function we returned out of incrementer is looking at counter. So the garbage collector cannot throw counter away.
      ++counter;
      console.log(`${aName} is now valued at ${counter}`);
    },
    view: function() {
      console.log(counter);
    }
  }
}

// var firstCounter = incrementer('firstCounter');
// firstCounter();
// firstCounter();
// firstCounter();

// We're seeing us return a function out of another function.
// But the more powerful and crazy thing is that that function closed over the scope it was created in. So we maintain access to the scope in which incrementer created this function.

// Theres a third thing - HOF enables us to store functions in data structures.
// We know about that in objects - because we have a name for it: METHODS.
// Methods are functions stored in other objects who get that object as their 'this' context.

// But, we can also store functions anywhere we please.

// Composition -> composition is when we have an array of functions and we 'compose' a value by moving it left to right through those functions.

var funcArray = [
  function(a) {
    return a + 10;
  },
  function(a) {
    return a.toString() + ' Pancakes were made.';
  },
  function(a) {
    return a.toUpperCase();
  },
];

function compose(aVal, composeArray) {
  var currentVal = aVal;

  for (var i = 0; i < composeArray.length; ++i) {
    currentVal = composeArray[i](currentVal);
  }

  return currentVal;
}

// c('This starts at 1 the number');
// c(compose(1, funcArray));

// Composition and Piping (compose is left to right, pipe is right to left) are very very very powerful and common tools in the functional programming world. You will see much more of this if you like math and functional programming.

// That functions really are just objects.

function eliotIsCrazy() {
  console.log('Maybe, but JS functions are worse.');
}

// eliotIsCrazy();

// eliotIsCrazy.functionsAreCrazy = function() {
//   console.log('Yeah, functions are crazy.');
// }

// c(eliotIsCrazy);

// eliotIsCrazy.functionsAreCrazy();

// eliotIsCrazy.myName = 'Function Eliot';

// c(eliotIsCrazy);

// Functions really can just be thought of as objects. They have one and only one special ability and that is that they can be invoked with (). Thats it. Otherwise they are just an object, we can pass them anywhere, we can assign keys and values to them, we can delete keys and values from them, we can modify anything about them, return them, store them, etc.

// Everything is a lie everything is an object.

// Can I make a number an object?

var three = new Number(3);

// c(three + 5);

// three.name = 'Im not three';

// c(three);

// Im not going to explain this, because its a maddening alice in wonderland type situation. But you can generally do anything you want in javascript because everything is secretely an object somewhere.

// Bonus
// An intro to promises.

// setTimeout(function () {
//   console.log('done');
// }, 3000);

// So lets remember a couple things here:
// setTimeout isnt really the point - lets pretend this is a request to Google for sake of learning.
// Do I always know this is going to succeed?

// No.
// What if im on my cell phone and lose service?
// What if google is down?
// What if theyve blocked me?
// How do I stop this request from going on forever?
// How do I handle an error?
// Does it all happen in that function?
// Will that function ever get called?

// That list ^^^ is why people dont like callback functions FOR SPECIFICALLY ASYNCHRONOUS STUFF ANYMORE.

// We have a new way of dealing with this, and they're called promises.

// var ourFirstPromise = new Promise(function(resolve, reject) {
//   // resolve means - we are done with whatever - and it was a success
//   // reject means - we are done with whatever... and or it timed out - and it was a failure.

//   setTimeout(function() {
//     resolve('Success!');
//   }, 3000);

//   if (Math.random() * 10 > 5) {
//     reject(new Error('Failure to connect!'));
//   }
// });

// ourFirstPromise
//   .then(function(success) {
//     console.log(success);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })

// console.log(Array.prototype.forEach.toString());

// TLDR: Is that each of the major object types that you use in Javascript come included as a giant object with all their methods attached to them.

// var array = {
//   prototype: {
//     forEach: function() {
//       this
//     }
//   }
// }


























