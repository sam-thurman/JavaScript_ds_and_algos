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