// The difference between 1 and smallest floating point number in js
console.log(Number.EPSILON); // 2.220446049250313e-16

// Is the number is finite ?
console.log(Number.isFinite(120)); // true
console.log(Number.isFinite(2 / 0)); // false

// Is it integer ?
console.log(Number.isInteger(123)); // true
console.log(Number.isInteger("123")); // false

// Check whether the value is NaN
console.log(Number.isNaN(123)); // false
console.log(Number.isNaN(-12)); // false
console.log(Number.isNaN("maruthi")); // false
console.log(Number.isNaN(0 / 0)); // true

// Number.isSafeInteger() - returns true if a value is a safe integer and of datatype Number
console.log(Number.isSafeInteger(123)); // true
console.log(Number.isSafeInteger(-123)); // true
console.log(Number.isSafeInteger("123")); // false

// maximum safe integer in javascript
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// minimum safe integer in javscript
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// largest number possible in javascript
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

// smallest number possible in javascipt
console.log(Number.MIN_VALUE); // 5e-324

// string to float
console.log(parseFloat("12.2")); // 12.2

// string to int
console.log(parseInt("23")); // 23

// toFixed() - controll digits after the decimal point
console.log((23.222222222).toFixed(0)); // 23
console.log((23.222222222).toFixed(1)); // 23.2
console.log((23.222222222).toFixed(2)); // 23.22

// toPrecision() - formats a number to a specified length
console.log((23.2).toPrecision(1)); // 2e+1
console.log((23.2).toPrecision(2)); // 23
console.log((23.2).toPrecision(3)); // 23.2
console.log((23.2).toPrecision(4)); // 23.20
console.log((23.2).toPrecision(5)); // 23.200

