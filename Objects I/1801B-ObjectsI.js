const chalk = require('chalk');

console.log(chalk.red('------------------------------'));

// Very basic form of a dictionary
var monthDictionary = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

var month = monthDictionary[1];
// console.log(month);

// Dictionary - The ultimate performance tool, at the extreme cost of convenience.
// Arrays - The ultimate convenience collection.
// Why do I say that? Arrays have methods, order, properties like length -> pretty much everything we could ever need to have to interact with a collection.
// Dictionaries have none of that - unless - you build it.
// The discussion we have to have to prove this - is called Big O Notation.

// Example

var monthArray = ['April', 'May', 'January', 'February', 'November', 'December', 'August', 'June', 'July', 'March', 'September', 'October'];

// The reason I did out of order is to simulate more realistic interaction with an array. This one is maybe not the best example because the keys in the object are numbers - which remind you of indexes. Ill try to do a different example next - but this should start the conversation.

// Find the month value in the array.

function findMonth(monthString) {
  for (var i = 0; i < monthArray.length; ++i) {
    var currentMonth = monthArray[i];

    if (currentMonth === monthString) return { value: currentMonth, index: i };
  }

  return { value: false, index: -1 };
}

// console.log(findMonth('January')); // 12 Iterations
// I used the word 'time', time in programming is hard to represent so in Big O - we discuss time as iterations which we use the letter 'n' to represent;

// O(n) - It takes as long as however many operations they are. This is called logarithmic.
// O(n^2) - Exponential - findMostVowels - for every unit, dive into each unit. (not this problem)
// Arrays time complexity absolutely scales with their size.

function findDictMonth(monthNum) {
  return {
    value: monthDictionary[monthNum],
    index: monthNum,
  }
}

// console.log(findDictMonth(1));

// Whats the worst case scenario for this function?

// O(1) - That no matter the size of the collection we will perform this operation in 1 unit of time.
// Dictionaries time complexity does not scale with their size.

// Complex Use Case

// Logging In
// Challenge: Websites sometimes have hundreds of millions of users and passwords. Do you think that they run a for loop over all of them to get that user? No. They use a dictionary.
// Dictionarys are extremely powerful but rely on a funny funny mechanism to rid themselves of time complexity - they rely on the assumption that the human writing it understands some pattern to how the data can be accessed. I know the mapping between numbers and their month string -> not the computer. That makes ME the thing that solved time complexity, but some would argue that the cost is that I need to build some sort of dictionary in the first place.

// When we deal with logging in, lets think about all the hacks developer make us of.
// 1. They force YOU the user to create the KEY that enables their dictionary to work. THAT KEY IS YOUR USERNAME.
// 2. Most SMART AND RESPONSIBLE tech companies wont store your username and password as they are (raw text) - because (Equifax looking at you) if someone gets access to your DB they now have every users information. So what can we do?

// Hashing

var userDictionary = {};


function ourSecretHash(aStr) {
  var hash = '';

  for (var i = 0; i < aStr.length; ++i) {
    var currentCharacter = aStr[i];
    var secretCharacter = currentCharacter.charCodeAt(0);

    secretCharacter = secretCharacter.toString();

    hash += secretCharacter;
  }

  return hash;
}

function createAccount(username, password) {
  var hashedUsername = ourSecretHash(username);
  
  if (userDictionary[hashedUsername]) {
    console.log('You already exist!');
    return;
  } else {
    userDictionary[hashedUsername] = ourSecretHash(password);
  }
}

createAccount('admin', 'password');

// console.log(userDictionary);

function login(username, password) {
  var hashUser = ourSecretHash(username);
  var hashPass = ourSecretHash(password);

  if (userDictionary[hashUser] === hashPass) {
    console.log('Success you logged in!');
  } else {
    console.log('Failure logging in!');
  }
}

// login('admin', 'password2');

// No matter how many users I put in the system - this always goes at O(1). Size does not matter.

var dumbObj = {};

dumbObj['   space key'] = 'space';

// console.log(dumbObj);

// console.log(dumbObj['   space key']);


// this
// Any function that is a method (a value within an object) will receive as the value of 'this' the object it is placed on.
// Do not take this as the only value of this - this is an extremely complex word with many different ways of obtaining value. BUT why we call functions on an object methods is because of this. Its because a method has context of its object.
























