const chalk = require('chalk');

console.log(chalk.red('------------------------------'));

const c = (...args) => console.log(...args);

var firstArr = [1, 2, 3];
var secondArr = firstArr; // Worth nothing is that im not saying .slice

// when i said `secondArr = firstArr` that Im really saying make one thing look at the other thing.

secondArr.push(4);

// c(firstArr);
// c(secondArr);

// pointing

// In lower-level programming languages the concept we are covering today is often viewed as something called 'pointers'
// The reason why is because of how memory works on computers - and we've kind of covered this before.

// When I declare
var someMemory = 'a thing';

// We know that javascript does something called 'hoisting' - every language does a similar process - obviously each, with nuances.
// The key thing here is that 'someMemory' on the left hand side actually gets space reserved for it -> before we ever know what goes in it.

// We might think about variables in this regard like this
// var someMemory = 'a thing';
// var someMemory =  (thats what memory looks like on a computer)
// ... later
// someMemory = 'a thing';
// We've only been dealing with really 'primitive values so far' and primitive values already have memory addresses
// so when we say '= "a thing"' -> what javascript sees is (and as we learned from our hash)
// something like '01101111010111010101110101';
// each sequence of three is already residing in memory somewhere - e.g. 011: 0x123678, 110: 0x657894
// someMemory = [0x1236768, 0x657894, ...] (a collection of memory addresses representing the string - what is a string but a collection of characters?)
// The final final version of this is:
// 0x123456 (someMemory) = [0x1236768, 0x657894, ...] (collection of characters)
// This thing you're looking at above is:
// 1. We declare we need memory
// 2. We define the thing at that memory
// 3. That thing at memory POINTS to the memory address that represents it
// Pointers then, are things that forward variables to places in memory with certain values. In early languages 'pointers' is === 'variables'

// When we escape the world of primitives -> we are building things (objects) that don't already exist in memory. This is no longer a char code built into javascript, or a number that our computer knows about, or true or false, or anything else that came with the language. The second you start writing an object - you are creating something entirely new into memory.

// With objects its a strange thing to think about but...

// var someObject = { a: 'a' };
// So lets breakdown what the computer sees...

// It sees, I need memory that i can refer to later as 'someObject'
// OK!
// someObject = 0x123456;
// Cool thanks!
// I need an object with a key named...
// Slow down!
// You need an object? Okay, one second.
// someObject = 0x123456 -> (your object) 0x123457.
// Okay, made an object, now im ready to talk about whats in it.
// Okay, so I have a, and its equal to 'a'.
// someObject = 0x123456 -> 0x123457 -> (a) => 0x123458 -> (a primitive value that already exists) 011: 0x469812

// What happens when I say: var anotherObject = someObject?
// We say okay, i need 'anotherObject' to be equal to 'someObject'.
// Ok! Ill have 'anotherObject' point to the same thing as someObject.
// anotherObject: 0x871236
// 0x871236 = 0x123457 -> 0x123458 ->  0x469812

// Comparison!
// 0x123456 -> 0x123457 -> 0x123458 -> 0x469812
// 0x871236 -> 0x123457 -> 0x123458 -> 0x469812

var someObject = {
  a: 'a',
};

var anotherObject = someObject;

anotherObject.b = 'b';

// c(anotherObject);
// c(someObject);

// When I say anotherObject.b = 'b' - lets look where the engine looks.
// 0x871236 -> !!!0x123457 -> 0x123458 -> 0x469812
// Hey 0x123457 ! I need you to add a reference to b!

// Every single object in javascript is a reference to references. Thats all it is.

function mySlice(anArray) {
  var newReference = [];

  for (var i = 0; i < anArray.length; ++i) {
    var primitiveValue = anArray[i];

    newReference.push(primitiveValue);
  }

  return newReference;
}
// But! Importantly, its only breaking the reference chain one layer deep. Its only pushing in elements, its not making sure those elements themselves are not references.

var theObj = { reference: true };

var ourArr = [1, 2, 3, theObj];
var newArr = mySlice(ourArr);

newArr.push(4);
theObj.ha = 'hahahahahahaha';

// c(ourArr);
// c(newArr);

// Linked List (this is what came before arrays)

// function generateNode (num) {
//   return {
//     name: num,
//     prev: null,
//     next: null,
//     add: function (anotherNode) {
//       anotherNode.prev = this;
//       anotherNode.name = num + 1;
//       this.next = anotherNode;
//       return anotherNode;
//     },
//     show: function () {
//       return {
//         prev: this.prev,
//         next: this.next,
//       }
//     }
//   }
// }

// var head = generateNode(0);

// var next = head.add(generateNode());

// var tail = next.add(generateNode());

// delete next;

// c(head.next.next);

// Worth checking out above!













