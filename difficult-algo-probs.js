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
    return str;
}

//should return "this-is-spinal-tap".
spinalCase('This Is Spinal Tap');