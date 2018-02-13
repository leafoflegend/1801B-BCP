const chalk = require('chalk');

console.log(chalk.red('------------------------------'));

const c = (args) => {
  console.log(args);
}

// Last Friday Night
// According to the song, Katy Perry "maxed our credit cards". Write a function that takes an array of transactions like the one below, and return the total amount of what she spent last Friday night.

var transactions = [
  {
    name: "Tons of glitter",
    amount: 70
  },
  {
    name: "Porcelain Pink Flamingos",
    amount: 92
  },
  {
    name: "Chandelier replacement",
    amount: 10000,
  },
  {
    name: "Dinner at TGIF x6",
    amount: 350
  }
]

// ES5
function sumTransactions(listOfTrans) {
  var sum = 0;

  for (var i = 0; i < listOfTrans.length; ++i) {
    var currentTransaction = listOfTrans[i];

    sum += currentTransaction.amount;
  }

  return sum;
}

// console.log(sumTransactions(transactions)); // => 10512

// ES6
// Object Destructuring
var someObj = {
  someKey: 'someValue',
};

// Somewhere else all I want is someKey...

var { someKey } = someObj;
// console.log(someKey);

// The problem...
const sumTrans = listOfTrans => listOfTrans.reduce((sum, { amount }) => sum + amount, 0);

// (sum, { amount }) => sum + amount // => Higher Order Function (when a function takes a function as an argument)

// console.log(sumTrans(transactions)); // => 10512

// Frequency Analysis
// Write a function that takes a string of text (containing ONLY lowercase letters) and returns an object containing the count for each letter in the string.

// ES5
function frequencyAnalysis(aStr) {
  var frequencyDictionary = {};

  for (var i = 0; i < aStr.length; ++i) {
    var currentLetter = aStr[i];

    if (frequencyDictionary[currentLetter]) {
      frequencyDictionary[currentLetter] += 1; 
    } else {
      frequencyDictionary[currentLetter] = 1;
    }
  }

  return frequencyDictionary;
}

// ES6
// REST Operator -> ... -> Spreads out all values within an object into a new containing object.
const freqAnaly = aStr => aStr.split('').reduce((freqDict, char) => ({
  ...freqDict,
  [char]: freqDict[char] ? freqDict[char] + 1 : 1,
}), {});

// c(freqAnaly('abca'));
// => {a: 2, b: 1, c: 1}

// Bonus: Write a second function normalizedFrequency that uses your first function but returns the normalized frequency of each letter.

// Bonus:
function normalizedFrequency(aStr) {
  var frequencyDictionary = {};

  var normalizedAdditive = 1 / aStr.length;

  for (var i = 0; i < aStr.length; ++i) {
    var currentLetter = aStr[i];

    if (frequencyDictionary[currentLetter]) {
      frequencyDictionary[currentLetter] += normalizedAdditive; 
    } else {
      frequencyDictionary[currentLetter] = normalizedAdditive;
    }
  }

  return frequencyDictionary;
}

// c(normalizedFrequency('abca'));
// => {a: 0.5, b: 0.25, c: 0.25}

// Sum Cart
// Write a function that accepts a "shopping cart" array and returns the total bill for all the items. Each item is represented by an array, where the first element is the item name, and the second element is an object with two properties: quantity and price.

var cart = [
    ["tofu", {"quantity" : 3,"price" : 4.5} ],
    ["sriracha", {"quantity" : 1,"price" : 5} ],
    ["toilet paper", {"quantity" : 12,"price" : 1.75} ],
    ["Drano", {"quantity" : 1,"price" : 13} ],
    ["orichette", {"quantity" : 2,"price" : 7.5} ],
    ["hummus", {"quantity" : 2,"price" : 5.99} ],
    ["bison meat", {"quantity" : 3,"price" : 20.99} ],
    ["vegan bison meat", {"quantity" : 3,"price" : 24.99} ]
];

function sumCart(aCart) {
  var sum = 0;

  for (var i = 0; i < aCart.length; ++i) {
    var pricingObject = aCart[i][1];
    // var { quantity, price } = aCart[i][1];

    var currentSum = pricingObject.quantity * pricingObject.price;

    sum += currentSum;
  }

  return sum.toFixed(2);
}

// c(sumCart(cart));    // => 217.42

// Leet Translator
// "Leet" or 1337 is a popular alternative alphabet used by internet "hackers".

// Create a translator function that takes a string and outputs that string translated to leet.

// The leet codex is below, along with an array of english letters and an array of the corresponding leet characters. Use the two arrays to create a leetCodex object to use in making the translations.

/*
Leet Codex:
        A -> @
        B -> 8
        C -> (
        D -> |)
        E -> 3
        F -> ph
        G -> g
        H -> #
        I -> l
        J -> _|
        K -> |<
        L -> 1
        M -> |'|'|
        N -> /\/
        O -> 0
        P -> |D
        Q -> (,)
        R -> |2
        S -> 5
        T -> +
        U -> |_|
        V -> |/
        W -> |/|/'
        X -> ><
        Y -> j
        Z -> 2
*/

var letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
var leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

var ourDict = {};

for (var i = 0; i < letters.length; ++i) {
  var currentLetter = letters[i];

  ourDict[currentLetter] = leetChars[i];
}

c(ourDict);

function translate(aStr) {
  var ourTranslation = '';

  for (var i = 0; i < aStr.length; ++i) {
    var currentLetter = aStr[i].toLowerCase();
    ourTranslation += ourDict[currentLetter];
  }

  return ourTranslation;
}

// c(translate('Fullstack'));    // => 'ph|_|115+@(|<'

// Default Values
// As a breeder, deciding upon the dogs' names is tough! So unless someone names my dog, I always name it Steve.

// Write a function called dogBreeder that takes a name and an age and returns a dog object with those properties attached to it. If someone fails to put a name in, default to Steve. If someone fails to put an age in, default to 0.

// Be careful though, sometimes the people using our function might not have nice input! (you guys asked for it!).

// YOU THE PROGRAMMER CONTROL THE API - THE PROGRAMMING INTERFACE. YOU GET TO CHOOSE HOW PEOPLE INTERACT WITH YOUR CODE. DONT LET THEM TELL YOU HOW THEYRE GOING TO INTERACT WITH YOUR CODE.

function dogBreeder(arg1, arg2) {
  var defaultAge = 0;
  var defaultName = 'Steve';

  if (typeof arg1 === 'string') {
    defaultName = arg1;
  } else if (typeof arg1 === 'number') {
    defaultAge = arg1;
  }

  if (typeof arg2 === 'string') {
    defaultName = arg2;
  } else if (typeof arg2 === 'number') {
    defaultAge = arg2;
  }

  return {
    name: defaultName,
    age: defaultAge,
  };
}

c(dogBreeder("Sam", 12));    // => {name: 'Sam', age: 12}
c(dogBreeder(15));    // => {name:'Steve', age: 15}