const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// We're going to take a number and count from it to 0.
// start === argument
function recursiveCountdown(start) {
  // base case === start === 0
  if (start === 0) c('Liftoff!');
  // This is an end for an obvious reason - WE DONT CALL THE FUNCTION AGAIN!
  else {
    // recursive case === recursiveCountdown(start - 1)
    // The update is us calling the function with a new start that is decremented by 1
    recursiveCountdown(start - 1);
    // The reason we see it in reverse when we move the console.log is because of the thing we just discussed. Because everytime we call 'recursiveCountdown' - no code can run until its finished running. We agreed we couldn't say goodbye until wed had three beers. This is that same principle.
    c(start);    
  }
}

// Recursive Construction
// argument: "Where do I start?"
// base case: "Where do I end?"
// recursive case: "What do I do after each moment?"

function iterativeCountdown(start) {
  for (var i = start; i > 0; --i) {
    c(i);
  }

  c('Liftoff!');
}

// For Loop Construction
// for (initialization, condition, update) {
// init: "Where does this begin?"
// condition: "Where does this end?"
// update: "What do I do after each moment?"

// recursiveCountdown(10);

// Synchronicity
// Synchronous in coding is the process by which things happen in ORDER. It is important to us that things happen in order because that represents logic. When things move in any given order, we call that 'asynchronous' which is something we began to make sense of with Promises. Thats not for today.

function arrive() {
  console.log('Hello!'); // 1
  hangout(); // --- 1
  goodBye(); // --- 4
}

function hangout() {
  console.log('You got time for a show?'); // 2
  haveADrink(); // --- 2
  haveADrink(); // --- 3
  haveADrink(); // --- 4
}

function haveADrink() {
  console.log('Wow that beer was delicious.'); // 3, 4, 5
}

function goodBye() {
  console.log('Goodbye!'); // 5
}

// arrive();

// We see wow that beer was delicious and you got time for a show before Goodbye! for one very simple reason that we as developers believe. That functions BLOCK the exeuction of any other code until they are complete.

// Synchronous actions. Blocking. Interrupting.

// Watch the function calls

// function recursiveCountdown(start) { // 3
//   if (start === 0) c('Liftoff!'); // fail
//   else { // we go into the else
//     // recursiveCountdown(start - 1); // We call this function with 2
//     if (2 === 0) c('Liftoff!')
//     else {
//       // recursiveCountdown(2 - 1);
//       if (1 === 0) c('Liftoff!');
//       else {
//         if (0 === 0) c('Liftoff!'); // Our first executable moment.
//         c(1);
//       }
//       c(2);
//     }
//     c(start);    
//   }
// }

// What you are seeing above is called the 'Call Stack'.

// Recursion and the call stack use memory, whereas iteration uses processing power. This is why when we get an infinite loop that is recursive - the error is different. We see an error that will say 'Maximum call stack size exceeded.' because your computer has run out of memory for this operation.

// recursiveCountdown(3);

// Stacks vs Queues - Comp Sci Data Structures

// Stacks are what we call a FILO structure. What that means is First in Last Out.

// Queues are what we call a FIFO structure. You're used to these because of real life. This is first in first out.

// A stack of pancakes is a FILO structure. Thats because when we cook pancakes the first pancake we finish cooking is the first pancake on the plate that stores the pancakes. Ther second pancake we finish cooking goes on top of the first, the third on top of the second, and so on and so forth. When you finally get to eating the pancakes, the first pancake you eat was the FINAL PANCAKE COOKED.

// Recursion is a FILO structure. The first function we call is the last functiomn to finish. The last function we call is the first function to finish.

// The argument values get stored in scope. This scope and our stacking of the function calls as they get executed is exactly why we call this process the 'Call Stack' it is a bunch of intertwiing scopes layered on top of each other. If we remember back to scope and the many lessons on it - the closest scope is the used scope. When you are the last function call, the closest scope is yours, when you are the first functiomn call, the closest scope is still yours. We arent modifying other functions scopes, were just always looking at the closest one.

// We write a recursive function the same way we write a for loop (lol)

// We need to init it, condition it, and update it. But in recursion we say:
// We need an initial argument, we need a base case, and we need a recursive case.

// Factorial: 5! === 5 * 4 * 3 * 2 * 1

function factorial(factNum) {
  if (factNum === 1) return 1;

  return factNum * factorial(factNum - 1);
} 

c(factorial(6));

/*
f(5)
: 5 * f(4)
  f(4)
  : 4 * f(3)
    f(3)
    : 3 * f(2)
      f(2)
      : 2 * f(1)
        f(1)
        : 1
      : 2 * 1 === 2
    : 3 * 2 === 6
  : 4 * 6 === 24
: 5 * 24 === 120
*/

// Recursion tends to solve three very difficult problems:
// Infinity (yes chunking might be involved), so lets more broadly think of this as unknown size. For loops require us to know exactly when they end. What happens when we dont know that?
// Iterative Branching: Attempting every possible path - and determing the most optimized one. Think enemies in a video game. How do they find the shortest route to you? The easy answer is they would just take the pythagorean theorem calculate the hypotenuse and come at you - but the second we introduce a single wall that option is ruined. We need to calculate around which side of the wall is faster. Then introduce twenty more walls. And your charcater shooting bullets. We need to do a lot of different possibilites and see which one performs best. Chess AI.
// Complex Data Structures. Binary Search Trees, Complicated Hash Tables, Linked List, all of these have to be traversed with recursion because of a simple reason: we dont know their size.









