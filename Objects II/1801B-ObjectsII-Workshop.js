const chalk = require('chalk');

console.log(chalk.red('------------------------------'));

const c = (...args) => console.log(...args);

// Foreign Loops
// Create a function that takes an animal name and iterates over the petSounds array below and logs all the international sounds that animal makes to the console along with the country of origin.

var petSounds =    [
    { "dog": {
        "America" : "Woof! Woof!",
        "Germany" : "Wau Wau!",
        "England" : "Bow wow!",
        "Uruguay" : "Jua jua!",
        "Afrikaans" : "Blaf!",
        "Korea" : "Mong mong!",
        "Iceland" : "Voff voff!",
        "Albania" : "Ham!",
        "Algeria" : "Ouaf ouaf!"
        }
     },
     { "cat": {
        "America" : "Meow",
        "Germany" : "Miauw!",
        "England" : "mew mew",
        "Uruguay" : "Miau Miau!",
        "Afrikaans" : "Purr",
        "Korea" : "Nyaong!",
        "Iceland" : "Kurnau!",
        "Albania" : "Miau",
        "Algeria" : "Miaou!"
        }
     },
     { "chicken": {
        "America" : "Cluck cluck",
        "Germany" : "tock tock tock",
        "England" : "Cluck Cluck",
        "Uruguay" : "gut gut gdak",
        "Afrikaans" : "kukeleku",
        "Korea" : "ko-ko-ko",
        "Iceland" : "Chuck-chuck!",
        "Albania" : "Kotkot",
        "Algeria" : "Cotcotcodet"
        }
  }
]
/*
[
  i: { 
    !!animalType: {
      !country: !sound,
    },
  },
  ...
]
*/

// ES5
function makeNoise(animalType) {
  for (var i = 0; i < petSounds.length; ++i) {
    var currentAnimal = petSounds[i];
    
    var currentAnimalType = Object.keys(currentAnimal)[0];
    var currentAnimalSounds = currentAnimal[currentAnimalType];

    if (currentAnimalType === animalType) {
      for (var country in currentAnimalSounds) {
        var sound = currentAnimalSounds[country];

        console.log(`${currentAnimalType[0].toUpperCase() + currentAnimalType.slice(1)}s in ${country} say ${sound}`);
      }
    }
  }
}

// ES6
const makeNoiseES6 = (animalType) => {
  petSounds.forEach((pet) => {
    const [ breed, sounds ] = Object.entries(pet)[0];

    if (breed === animalType) {
      Object.entries(sounds).forEach(([ country, sound ]) => {
        console.log(`${breed}s in ${country} say ${sound}`);
      })
    }
  });
}

// makeNoiseES6('chicken');
/*
Dogs in America say Woof! Woof!
Dogs in Germany say Wau Wau!
Dogs in England say Bow wow!
Dogs in Uruguay say Jua jua!
Dogs in Afrikaans say Blaf!
Dogs in Korea say Mong mong!
Dogs in Iceland say Voff voff!
Dogs in Albania say Ham!
Dogs in Algeria say Ouaf ouaf!
*/

// Compare Objects
// Consider the following statement.

// { name: 'zeke' } === { name: 'zeke' }
// What do you think the output will be? You might assume true. It is, however, false. This isn't a mistake, it's intentional. Every object is unique from every other object. The usefulness of this will become clear over time. But, it does make it difficult to know if objects contain the same data.

// Right now you're going to write a function that determines if two objects contain the same data.

// In order for the function to return true, ALL the properties that exist in object 1 must exist and be equal to those in object 2. Similarly, ALL the properties in object 2 must exist and be equal to those in object 1.

// SCALED UP SCARINESS
// Objects within objects. (Recursion)
// What if I throw some weird data types in here? Like functions, dates, symbols, some of the other things.
// Even if two things values are the same, we only want to count them the same in the case where they are the same REFERENCE.

// That they have the same amount of keys
// And that those keys have the same values
function compareObjects(objOne, objTwo) {
  var objOneKeys = Object.keys(objOne);
  var objTwoKeys = Object.keys(objTwo);

  if (objOneKeys.length !== objTwoKeys.length) return false;

  return objOneKeys.every(function (key) {
    return objOne[key] === objTwo[key];
  })
}

// ES6

const compareObjectsES6 = (objOne, objTwo) => {
  var objOneKeys = Object.keys(objOne);
  var objTwoKeys = Object.keys(objTwo);

  if (objOneKeys.length !== objTwoKeys.length) return false;

  return objOneKeys.every(key => objOne[key] === objTwo[key])
}

// c(compareObjectsES6({ name: 'nick' }, { name: 'nick' }));
        // -> true

// c(compareObjectsES6({ name: 'zeke' }, { name: 'zeke', age: 12 }));
        // -> false

// Attendance Check
// Create a function that takes a weekday String as an argument. It then iterates over a classRoom array and returns an array of all the students present for class on that weekday.

var classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

/*
[
  {
    studentName: [
      {
        day: boolean,
      }
    ]
  }
]
*/
// Pseudo ES5

function classCheck(aDay) {
  var presentStudents = [];

  for (var i = 0; i < classRoom.length; ++i) {
    var studentObj = classRoom[i];

    var [ name, attendance ] = Object.entries(studentObj)[0];

    var properDay = attendance.find(function(day) {
      var [ dayName ] = Object.keys(day);

      return dayName === aDay;
    })

    if (properDay[aDay]) presentStudents.push(name);
  }

  return presentStudents;
}

// ES6
// Reduce allows us to take any collection and make it into any other thing in the world.
const classCheckES6 = day => classRoom
  .reduce((presentStudents, studentObj) => {
    const [ name, schedule ] = Object.entries(studentObj)[0];

    if (schedule.some(schedDay => Object.keys(schedDay)[0] === day && schedDay[day])) {
      return presentStudents.concat([name]);
    } else return presentStudents;
  }, [])

c(classCheckES6('Monday'));    // => ['Marnie', 'Shoshanna']