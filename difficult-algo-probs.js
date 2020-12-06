/* Make a function that looks through an array of objects (first argument) and returns 
an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present in the object from 
the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return the third object 
from the array (the first argument), because it contains the name and its value, that 
was passed on as the second argument. */

function whatIsInAName(collection, source) {
    var arr = [];
    var sourceKeys = Object.keys(source);
    var sourceValues = Object.values(source)

    for (let i = 0; i < collection.length; i++) {
        var obj = collection[i];
        var keyFlag = 0;

        for (let j = 0; j < sourceKeys.length; j++) {
            let key = sourceKeys[j];
            let value = sourceValues[j]

            if (obj[key] == value) {
                keyFlag++
            }
        }

        if (keyFlag == sourceKeys.length) {
            arr.push(obj)
        }
    }

    return arr;
}

// should return [{ first: "Tybalt", last: "Capulet" }]
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));


/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. */

function spinalCase(str) {
    str = str.toLowerCase();
    let regex = /\s|_/g;

    return str.replace(regex, "-");
}

//should return "this-is-spinal-tap".
console.log(spinalCase('This Is Spinal Tap'));

// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less 
// than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in 
// the sequence is the sum of the two previous numbers. The first six numbers of the 
// Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 
// or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {

    var fib = [1, 1]
    var vals = [1, 1];
    while (vals[1] < num) {
        let sum = vals[0] + vals[1];
        vals.push(sum);
        fib.push(sum);
        vals.shift();
    }
    fib = fib.filter(x => x <= num).filter(x => x % 2 != 0);
    return fib.reduce((x, y) => x + y);
}

console.log(sumFibs(4)); // should return 5
console.log(sumFibs(4000000)); // should return 4613732.

// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.

function binaryAgent(str) {
    return str.split(/\s/).map(function (val) {
        return String.fromCharCode(parseInt(val, 2));
    }).join("");
}
// should return "Aren't bonfires fun!?"
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")


// Create a function that sums two arguments together. If only one argument 
// is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.

function addTogether(first, second) {
    if (typeof first !== "number") {
        return undefined;
    }
    const sum = second =>
        typeof second === "number" ? first + second : undefined;
    return typeof second === "undefined" ? second => sum(second) : sum(second);
}

addTogether(2, 3) // should return 5.
addTogether(23, 30) // should return 53.

// Return a new array that transforms the elements' average altitude into their orbital periods 
// (in seconds). The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
// You can read about orbital periods on Wikipedia.
// The values should be rounded to the nearest whole number. The body being orbited is Earth.
// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var master = [];
  
  
    // get val of avgAlt
    // convert avgAlt to orbital periods
      // rounded to nearest whole
      // body being orbited is earth
    // return new arr
    for (let i in arr){
      let alt = arr[i].avgAlt;
      let a = (earthRadius+alt);
      let t = Math.round((2*Math.PI)*Math.sqrt((a**3)/GM)); 
      master.push({name: arr[i].name, orbitalPeriod: t});
    }
    return master
  }
// should return [{name: "sputnik", orbitalPeriod: 86400}]
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);


// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring 
// punctuation, case, and spacing.
// Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn 
// everything into the same case (lower or upper case) in order to check for palindromes.
// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

function palindrome(str) {
    let reg = /[\W_\s]/g;
    let matches = str.match(reg);
    str = str.toLowerCase().replace(reg, '');
  
    console.log(str.split('').reverse().join(''))
    console.log(str.split('').reverse().join('')===str)
    
    return str.split('').reverse().join('')===str;
  
  }
  
  
// should return true
palindrome("eye"); 
// should return true
palindrome("A man, a plan, a canal. Panama") 
  