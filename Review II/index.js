const chalk = require('chalk');
const axios = require('axios');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

/*
  Dan Gutt:
  mySplice - reverseArray
  PBR

  Sharon Yun:
  enumaribility
  Promises - Express

  Kayleen:
  Stateless vs Stateful - React

  Daniel Kim:
  this & Object.prototypes
  Meta Overview: What the challenge was and what the solution is supposed to be
*/

/*
  Order:
  Dan Gutts questions
  enumarability
  stateless vs stateful - React
  Promises - little server - interact with it
  this & Object.prototypes - crazy vanilla js
*/

// Dan #1 : mySplice
// My Splice
// Write a mySplice function that mirrors the behavior of JavaScript's .splice() array method. However, mySplice should accept the array to operate on as an argument, rather than being invoked as a method on that array.

// Try and mirror the behavior of .splice() as closely as possible, but to start with, assume all arguments will be positive integers. Most importantly, your function should have two observable effects: it should modify the array it receives as an argument and it should return an array containing the deleted elements.

// Do not use the native .splice() method in your own implementation.

var myArray = [1,2,3,4,5];

// function mySplice(arr, startIndex, deleteCount) {
//   // Build array of non-deleted elements.
//   var returnArr = [];
//   // Store deleted elements.
//   var deletedElements = [];

//   for (var i = 0; i < arr.length; ++i) {
//     // Basic for loop stuff
//     var currentElem = arr[i];

//     // If we're within the 'deleted range' then lets push this element into a deleted array.
//     if (i >= startIndex && i < startIndex + deleteCount) {
//       deletedElements.push(currentElem);
//     } else {
//       // Otherwise store this element as something that should continue to be a part of the original array.
//       returnArr.push(currentElem);
//     }
//   }

//   // Then we attempt to reassign the value of the original array to this array with the proper stuff.
//   console.log(returnArr);
//   // The issue is this reassignment - we're not reassigning the array outside of this function due to scope. The parameter (argument) is the closest thing in scope - so were actually only reassigning the argument - not the data that was passed into the function from outside. Lets remember that arguments are in this local scope -> we can't impact the outer scope this way. THIS IS A GOOD THING AND ON PURPOSE. TO PROTECT US FROM HURTING DATA OUTSIDE THE FUNCTION.
//   arr = returnArr;

//   // return the deleted element.
//   return deletedElements;
// }

function mySplice(origArray, startIndex, deleteCount) {
  // We can't use reassignment.
  // We need to maintain a reference to the array outside the function - so if we reassign we break that reference chain.

  var deletedElements = [];
  var preElements = [];
  var postElements = [];

  var curIndex = 0;

  while (origArray.length) {
    var currentElement = origArray[0];

    if (curIndex < startIndex) {
      preElements.push(origArray.shift());
    } else if (curIndex >= startIndex && curIndex < startIndex + deleteCount) {
      deletedElements.push(origArray.shift());
    } else {
      postElements.push(origArray.shift());
    }

    ++curIndex;
  }

  // console.log('preElements: ', preElements);
  // console.log('postElements: ', postElements);
  // console.log('deletedElements: ', deletedElements);
  // console.log('originalArray: ', origArray);

  // From this point forward, we want to start to recreate that originalArray exempting the deleted elements - and maintaining a reference to the array. (so no reassignment.)

  while (preElements.length) {
    origArray.push(preElements.shift());
  }

  while (postElements.length) {
    origArray.push(postElements.shift());
  }

  return deletedElements;
}

// The hardest part by far.
// You cannot use the equals sign.
// Functional vs Imperative i.e. mutative vs immutable -> mutative shit is very confusing to keep track of.
// console.log("returned elements: ", mySplice(myArray, 1, 1))    // [2]
// console.log(myArray)    // [1,3,4,5]

// Reverse Array
var someArray = [1, 2, 3, 4];

function reverseArray(anArr) {
  // The first thing you need to realize is O(n) -> O(Math.floor(n / 2))
  // Semantic terminology: take the last thing and the first thing and flip them -> then move 1 inwards.
  for (var i = 0; i < Math.floor(anArr.length / 2); ++i) {
    // We want to store this number because DRY - Dont repeat yourself, and were gonna need it again.
    var rightIndex = (anArr.length - 1) - i;

    var leftElement = anArr[i]; // storing values
    var rightElement = anArr[rightIndex]; // storing values

    anArr[i] = rightElement; // setting values
    anArr[rightIndex] = leftElement; // setting values

    // Method form of doing this where we unshift(pop())
    // and push(shift())
  }

  return anArr;
}

// c(reverseArray(someArray)); // => [4, 3, 2, 1]

// Enumarability has to do with Object.prototypes -> but essentially having an enumarable value means that it was defined as part of the object itself.

// var someArray = [1, 2, 3];

// someArray.forEach((e) => console.log(e));

// forEach is not an enumarable property of Arrays...

// console.log(Array.prototype.forEach)

// function outerScope() {
//   var something = 'blach';

//   function innerScope() {
//     console.log(something);
//   }

//   innerScope();
// }

// outerScope();

// Promises

// We have no idea whats going to happen.
// Theres a 50/50 chance that this never responds.
// Or that it just fails.
// getFBIResponse
//   .then(function (FBIResponse) {
//     console.log('FBIResponse: ', FBIResponse.data);
//     // All code that is reliant on FBIResponse data needs to live in here.
//     console.log(chalk.green('The FBI said: ', FBIResponse.data.message));

//     // What if I needed to send what the FBI said, to the CIA?
//     axios.post('http://localhost:3000/cia')
//       .then(function (CIAResponse) {

//       })
//       .catch(function (CIAError) {

//       })
//   })
//   .catch(function (FBIError) {
//     // We can now display to the end user whatever the heck it is needs to happen.
//     console.log(chalk.red('Error fetching data from the FBI: ', FBIError));
//   });

// What if i want to use the FBIResponse? Where do I use it?
// The second we introduced the first .then and our codebase relied on that .then -> our entire application needs to live within that .then

// This pattern of functions relying on functions relying on functions, relying on callbacks all intermingled is called callback hell. This was originally much worse, Promises solve a large portion of this problem with the .then and .catch syntax. We didnt use to have that.

// Now we have something even fancier than promises.
// Async Await

// Async Await allows us to take asynchronous code (stuff we dont know when its going to end) and make our code run like we always want it to - top to bottom left to right.

// Await doesn't come with something like .catch

// async function handleFBIResponse() {
//   const FBIResponse = await axios.get('http://localhost:3000/');

//   console.log(FBIResponse.data);
// };

// handleFBIResponse();

// INFO: View the StatefulnessExample folder for the portion on State vs Stateless

// this & Object.prototypes

// Java is the father (maybe not grandfather or great grandfather, but definitely father) of OOP (Object Oriented Programming)

// OOP Has Three Primary Things: Encapsulation, Inheritance, and Polymorphism
// Encapsulation: Can I have entities that contain their own data and behaviors (think State), think (Closure) -> that are private to the entity.
// Inheritance: If I am a rectangle can I know about squares?
// Polymorphism: Can I change to adapt to circumstance.

// Javascript has encapsulation to some degree. Generally in JS we do encapsulation using closure and functions.
// Polymorphism - everything is an object in javascript and everything can be changed (so yes)
// Inheritance: no.

// Java people LOVE INHERITANCE.

// In JS we came up with a hack to satiate OOP demands for Inheritance and its called prototypal inheritance.
// Prototypal inheritance runs on a simple concept -> every object in javascript secretely references other objects in javascript. It does this through something called a prototype chain.

// A semantic way to explain this is if all Mammals can live -> then two legged animals can walk -> then two legged animals with eyes can see -> then we might be able to say that two legged animals with eyes know about two legged animals with legs, who know about mammals.
// We can firmly say that two legged animals with eyes and legs can do three things: live, see, and walk. Even though we did not explictly define 'living' as a property of two legged animals - it is inferred by where they come from.

// ES5 is terrifying syntax.
// Functions that use the word this and start with a capital letter are called 'constructor functios'. Think of this like a blueprint for all Animals. I am defining its properties within this function.
// function Animal() {
//   // I used the word 'this'
//   this.alive = true;
// }

// // The prototype is the inheritance chain of all animals. Every animal every created has access to the same prototype. Any function I put here any Animal (or its descendants) can use and access.
// // I used the word prototype.
// Animal.prototype.die = function() {
//   this.alive = false;
// }

// 'new' Is how we invoke a constructor function. New is stating that I want an instance of this constructor be created.
// I used the word 'new'
// var ourFirstAnimal = new Animal();

// // Starting from here:

// function Mammal() {
//   // Call is weird -> call is a method on all objects that you can use to change the context of this. What we are saying below is take Mammals constructor body and change 'this' to mean 'Animal.this' for a moment.
//   Animal.call(this);
//   this.milk = true;
// }

// // We are reassigning our prototype chain to point at a reference of Animals prototype chain.
// // The reason we need to use Object.create is because it make sure the animals prototype chain comes along with it. And so that we dont just get Animal's prototype but anything above it as well.
// Mammal.prototype = Object.create(Animal.prototype);

// // This is an annoying hack -> when we use Object.create we are overwriting the constructor of Mammals prototype. This should generally not have an impact on your code if you dont do it - the only time you want this is for logging (look at the terminal it says Mammal next to the object now.) and for a special method called .instanceOf() which lets us check if something has the same constructor as another thing. Its a fancy way to check that things are made of the same blueprint.
// Mammal.prototype.constructor = Mammal;

// // After we have finally recreated the prototype chain - we can start making methods unique to Mammal - these wont get carried up to animal, instead these are for instances of Mammal only.
// Mammal.prototype.milkChild = function() {
//   console.log('I am a mammal and I am milking a child.');
// }

// // Then we create the first instance of a mammal.
// var ourFirstMammal = new Mammal();

// ourFirstMammal.die();

// c(ourFirstMammal);

// ourFirstMammal.milkChild();

// And rinse and repeat. There is no limit to how far this can go.

// function Dog(name) {
//   Mammal.call(this);

//   this.name = name;
// }

// Dog.prototype = Object.create(Mammal.prototype);

// Dog.prototype.constructor = Dog;

// Dog.prototype.bark = function() {
//   console.log(`Woof I am ${this.name} and I am ${this.alive ? 'alive' : 'dead'}`);
// }

// var CiscoTheDog = new Dog('Cisco');

// CiscoTheDog.bark();

// In all of this I have yet to answer what 'this' means. Thats because 'this' has a really arbitrary meaning, just like we saw when I used 'call'. We can AND DO make 'this' mean different things at different times. The most succint way to think of this is the following:

// 'this' should refer to the properties of any instance of any constructor. So when we first say 'this' on CiscoTheDog -> 'this' refers to the dogs constructor. i.e. this.name = name; But because we also used 'call' in there we have this.milk and this.alive. But heres where 'this' gets interesting... After this has looked at the constructor, it then goes through the entire prototype chain until it hits prototype bedrock (theres no more references to any more prototypes) it will be able to use any property on any prototype above it. 'this' is how the Array class calls methods on its prototype. It is under the hood saying this.forEach whenever we call [].forEach -> this is able to traverse the entire prototype chain looking for a method named forEach

// There are some confusing moments with 'this' however.

// var anObj = {
//   value: 'hi',
//   method: function() {
//     console.log(this.value);
//   }
// }

// anObj.method();

// It doesnt seem like we wrote a constructor here - but we do see 'hi'. Thats because the second you wrote a method on this object -> javascript implicitly made anObj a constructor. value became this.value. We might even think abou 'this' in this context meaning the object as a whole. Any method we attach to any object will automatically make that entire object the constructor.

// Is this used in a professional capacity?

// Yes. You need to understand OOP. Which isnt neccessarily all this ^^^ stuff. Its the concept of this stuff. How does data move from an abstract layer like 'Animal' down to a business/behavior specific layer that we can use like 'Dog'.

// On an everyday coding basis - prototypal inheritance is generally reserved for writing something called a 'module' which is when we write a larger piece of an application. We can think of one module perhaps as a comment box on facebook. The ability to write text, and edit text, and delete text -> doesnt belong to any individual comment. We can think of that whole process of behavior being defined as a module -> because we can bring that module into any applicaiton not just facebook but also google, or a blog, or wherever because we defined behaviors starting at an abstract layer (how do i enter a word) -> down to a business specific layer -> liking comments on facebook (not every site believes in liking comments), but every site believes in entering words.

// That being said -> ES6 has made this sooooooo much easier.

// ES6 introduced the syntactic sugar for this. That means that the process is exactly the same code we wrote above. But we no longer write that code. Javascript abstracts a new form of writing that code into that shitty code we saw above. It doesnt introduce anything new to Javascript, its just a prettier version of it.

// Class is what traditional OOP languages call every major inheritable object.

class Animal {
  constructor() {
    this.alive = true;
  }

  die() {
    this.alive = false;
  }
}

class Mammal extends Animal {
  constructor() {
    super();
    this.milk = true;
  }

  milkChild() {
    console.log('I am milking my child.');
  }
}

class Dog extends Mammal {
  constructor(name) {
    super();
    this.name = name;
  }

  bark() {
    console.log(`Woof, my name is ${this.name} and I am ${this.alive ? 'alive' : 'dead'}`);
  }
}

const Jeffrey = new Dog('Jeffrey');

Jeffrey.bark();

// webpack
// babel















































