// A function expression is when a function is
// stored inside a variable 
// called using that variable

const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3)); // 8

const isEven = function (num) {
    return num % 2 === 0;
};

console.log(isEven(4)); // true
console.log(isEven(7)); // false

// Arrow functions are:
// a shorter way to write function expressions
// commonly used in modern JavaScript
// They improve readability and reduce boilerplate

const  square = (num) => {
    return num = num;
};

console.log(square(5));
