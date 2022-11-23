// +++++++++++++++ MAPS ++++++++++++++++++++++++++++++++++
// 1 -> A Map holds key-value pairs where the keys can be any datatype.
// 2 -> A Map remembers the original insertion order of the keys.

// new Map()  - Creates a new Map
// set()	  - Sets the value for a key in a Map
// get()	  - Gets the value for a key in a Map
// delete()	  - Removes a Map element specified by the key
// has()	  - Returns true if a key exists in a Map
// forEach()  -	Calls a function for each key/value pair in a Map
// entries()  -	Returns an iterator with the [key, value] pairs in a Map
// size	      - Returns the number of elements in a Map

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

console.log(fruits.set("mango", 100));

console.log(fruits.get("apples")); // 500

console.log(fruits.delete("apples")); // true [returns boolean]

console.log(fruits.size); // 3

console.log(fruits.has("apples")); // false

fruits.forEach((e) => console.log(e)); // 300 // 200 // 100

console.log(fruits.entries().next());
