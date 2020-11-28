// USING FUNCTION ARGUMENTS OBJECT TO WRITE FUCNTIONS W VARIABLE LENGTH ARGUMENTS
// you can write functions for variable lenth input using the built-in 
// arguments object in any function.  It is an array containing every input,
// it has a length and you can loop through it etc.

function makeUniqueArray() {
    var arr = [];
    for (let i in arguments) {
        for (x in arguments[i]) {
            if (!arr.includes(arguments[i][x])) {
                arr.push(arguments[i][x])
            }
        }
    }
    return arr;
};
// should return [1,2,3,4,5,6,7,8,9]
console.log(makeUniqueArray([1, 2, 3, 4], [3, 4, 5, 6, 7], [1, 2, 3, 7, 8, 9]))

//      CURRYING FUNCTIONS / PARTIAL FUNCTIONS
// useful when you can't require multiple arguments for your function

function add(x, y, z) {
    return x + y + z;
};

function curryAdd(x) {
    // Only change code below this line
    return y => {
        return z => {
            return x + y + z;
        }
    }
    // Only change code above this line
};

// both return the same thing
console.log(add(10, 20, 30));
console.log(curryAdd(10)(20)(30));

