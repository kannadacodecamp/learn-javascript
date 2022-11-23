// typeof opertor [start] ----------------
console.log(typeof "John");
console.log(typeof 3.14);
console.log(typeof NaN); // number <--
console.log(typeof false);
console.log(typeof [1, 2, 3, 4]); // object <--
console.log(typeof { name: "John", age: 34 });
console.log(typeof new Date());
console.log(typeof function () {});
console.log(typeof myCar);
console.log(typeof null); // object <--
// typeof opertor [end] ----------------

// instanceof Operator [start] --------------
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars instanceof Array); // true
console.log(cars instanceof Object); // true
console.log(cars instanceof String); // false
console.log(cars instanceof Number); // false
// The instanceof Operator [end] ----------------

// type converstion [start]-----------------------

// %%%%%%%%%%%%%%%%% To Number %%%%%%%%%%%%%%%%%%%
// 1. Number()	    - Returns a number, converted from its argument
// 2. parseFloat()	- Parses a string and returns a floating point number
// 3. parseInt()	- Parses a string and returns an integer
console.log(Number("3.14"));
console.log(Number(Math.PI));
console.log(Number(" "));
console.log(Number(""));
console.log(Number("99 88"));
console.log(Number("John"));
console.log(Number(true));
console.log(Number(false));

// %%%%%%%%%%%%%%%%% To String %%%%%%%%%%%%%%%%%%%
console.log(String(123));
console.log(String(100 + 23));
console.log(String(Date()));
console.log(String(true));
console.log(String(false));
// type converstion [end]-----------------------
