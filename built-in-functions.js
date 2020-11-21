/*
ARRAY.PROTOTYPE METHODS
*/
let arr = [1, 2, 3, 4, 5];

/*      Array.prototype.reduce() --- non-mutative */
// A function that accepts up to four arguments. Calls the specified callback function 
// once for each element in an array. The return value of the callback function is the 
// accumulated result, and is provided as an argument in the next call to the callback 
// function.
// EX: return sum
console.log(arr.reduce((sum, val) => sum + val)); // should be 10 (1+2+3+4+5)

/*      Array.prototype.map() --- non-mutative */
// A function that accepts up to three arguments. The map method calls the callback
// function one time for each element in the array.  Calls a defined callback function 
// on each element of an array, and returns an array that contains the results.
// EX: sqaure every value
console.log(arr.map(val => val ** 2)); // should be [1, 4, 9, 15, 25]

/*      Array.prototype.every() */
// returns true if every value in an array meets condition specified in callback function
// EX: check if all values are positive
console.log(arr.every(x => x >= 0)); // should return true

/*      Array.prototype.some() */
// returns true if any value in an array meets condition specified in callback function
// EX: check if any value is equal to 1
console.log(arr.some(x => x == 1));

/*
OBJECT.PROTOTYPE METHODS
*/


/*
REGEX METHODS
*/


/*
STRING.PROTOTYPE METHODS
*/


/*
NUMBER.PROTOTYPE METHODS
*/



