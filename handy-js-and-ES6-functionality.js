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

