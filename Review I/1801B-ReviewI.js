const chalk = require('chalk');
const Immutable = require('immutable');

console.log(chalk.red('------------------------------'));

// From the interwebs:

/*
Sharon:
Hi Eliot! Unfortunately I can’t make this review session .. but I was hoping you can kind of go over how to use VSCode as well as GitHub.
Can you also go over template laterals?
And sorry if I missed this but - how do you determine whether or not some variable is an immutable value..?
*/

/*
Kayleen:
Scope - Kyle Simpson
*/

// How to use VSCode and GitHub
// I left instructions on how to use VSCode on Github.
// Git is used to allow many programmers to work on the same codebase without having to manually merge their code together.

// Template Literals
var myName = 'Eliot';

var someString = `${myName} Szwajkowski`;

// console.log(someString);

// Immutable Values
// how do you determine whether or not some variable is an immutable value..?
// Variables are never immutable, thats the point of variables.
// Variables store references to values. We use them like you use a street address in real life. The thing at that address may change in time,
// but some things at some addresses we can say wont. Washington Monument. Whatever its address is doesn't represent the finality of permanance that is a national monument.
// The address itself may change over time - but the monument probably never will.

// Variables are just addresses. The thing they point to can and does change frequently.

// Determine an immutable value?
// No.
// All primitives are immutable.
// All non-primitives are not immutable.

// There are exceptions, like the immutable js library built by Facebook.
// https://facebook.github.io/immutable-js/

const immutableMap = Immutable.Map({ someValue: 'a', anotherValue: 'b' });

immutableMap.someValue = 6;

// You can see that this value did not change at all.

// The general advantages to immutable js are that it is blazing fast and that all your datas are safe.
// The downside is that its much harder to manage these objects, a quick example:

const nextMap = immutableMap.set('someValue', 'new value');
// console.log('immutableMap: ', immutableMap);
// console.log('nextMap: ', nextMap);

// I didnt change anything.
// True functional programming - we never change data. We simply create more data.

// Engine vs Compiler vs Scope
// A very language specific conversation.
// Different languages deal with this abstraction in many different ways.

// Engine - Something that RUNS our code.
// It is the thing that will actually execute the stuff you wrote.

// Compiler - What takes our human readable code - and makes it machine readable code.
// Quantum Computing - We want the same language to work here as well.

// The engine and how our code is run - doesnt change even when the machines desired code does.
// Compilers are often built into the machine itself.

// The issue with Javascript is that traditionally, javascript isn't run by the machine - its run by the browser.

// In JS world we can often think about the compiler as the actual browser.
// It is dissecting our code into something it can read.

// The other weird thing is that while we could have a standard javascript engine - that all browsers used (and we did once upon a time)
// Something called the 'Browser Wars' occured in the 2000's and what i really mean, is that people figured out that if they could get
// us to use their browser they got our data, they could sell our data, they could make money.
// The faster a browser runs, the more likely you are to use it. Google makes a darn fast browser and they way they do that is by writing
// their own non-standard javascript engine. Its name is V8. V8 made Node possible.
// Both are actually the browser most of the time.
// Node does not do this, node actually compiles our Javascript into C++ which is then compiled into Assembly Language -> fed to the machine
// Engine that reads that compiled code - lol - is V8.

// Google believes heavily in OSS. Open Source Software.
// Apple is notoriously not OSS.

// JIT

// Java
// Write Java Source Code
// Run a Compilation Process over it that turns it into whats called bytecode
// Then install something called a JVM (Java Virtual Machine)
// Tell the jvm to run your bytecode.

// We kind of just want to run our code right away.
// We dont have a two step process in JS - i.e. we dont compile, then run, we COMPILERUN.
// We kind of just barely finish compilation right as the engine gets to the code it needs to run.
// This doesnt mean we dont take that weird first pass that creates hoisting.

// root is the highest level available in your file or repo (many files). - You create root scope
// Global is the highest level available in your environment. - The machine creates global scope

// Closure & Recursion

// Closure is generally not part of the interview process to my knowledge.
// Closure is the most or one of the most powerful tools in JS, and is used extensively in a professional capacity.
// We spend no days on closure during this course.

// Recursion is definitely part of the interview process.
// Recursion is a powerful tool in all programming languages, and is rarely used in a professional capacity.
// We do spend two days on recursion at the very end of this course.

// Closure is a tool to maintain access to a certain scope after defintion of said scope.

function makeIncrementer() {
  // Local Scope
  var counter = 0;

  return {
    increment: function() {
      // In here we all agree we had access to the local scope.
      ++counter;
    },
    view: function() {
      console.log(`Counter is now at: ${counter}`);
    },
    reset: function() {
      counter = 0;
    },
  }
}

var ourFirstIncrementer = makeIncrementer();
var ourSecondIncrementer = makeIncrementer();
ourFirstIncrementer.increment();
ourFirstIncrementer.increment();
// ourFirstIncrementer.view();

ourSecondIncrementer.increment();
// ourSecondIncrementer.view();

// Closure - Closure allows us to define behaviors against data.
// Classes - Fake Exist in ES6+
// Classes can be 'written' in ES6 but whats really happening is that they get compiled down to ES5 syntax because classes dont actually exist.
// This phenemenon is often called across all languages: Syntactic Sugar
// this & Object.prototypes

// Recursion
// Recursion is when a function calls itself.
// Recursion is an alternative to iteration. e.g. for loops
// Recursion consumes memory, iteration consumes processors.
// Call Stack

function recursiveCountdown(aNum) {
  if (aNum <= 0) console.log('Liftoff!');
  else {
    console.log(aNum);
    recursiveCountdown(aNum - 1);
  }
}

// We go to a depth of 10. That means that there are 10 nested local scopes. We can think of each scope as a 'stack'.
// Infinite Recursion is not called an infinite loop - it is called 'Maximum Call Stack Size'
// recursiveCountdown(10);

// Iteration tends to be better at linear collections
// Recursion tends to be better at deep collections.

// Cloning Deep Objects
// Iteration would take 6 for loops below.
// The other thing to think about is how does it scale? What about when we get an object that needs 7 for loops. Will we write a new function? Modify the old one? Or do we want one function that deals with everything.

var deepObject = {
  something: {
    anotherThing: {
      anArray: [{ bye: { anotherStuff: 'bye' } }],
      aString: 'hi'
    }
  }
}

function cloneObject(anObj) {
  var currentClone = null;

  if (Array.isArray(anObj)) {
    currentClone = [];

    anObj.forEach(function(elem) {
      if (typeof elem === 'object') {
        // Recursion
        currentClone.push(cloneObject(elem));
      } else {
        // Not recursion
        currentClone.push(elem);
      }
    })
  } else {
    var currentClone = {};

    Object.entries(anObj).forEach(function([key, value]) {
      if (typeof value === 'object') {
        // Recursion
        currentClone[key] = cloneObject(value);
      } else {
        // Not Recursion
        currentClone[key] = value;
      }
    })
  }

  return currentClone;
}

var newObj = cloneObject(deepObject);

console.log(Object.entries(newObj));




























