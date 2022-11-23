// +++++++++++++++ SETS ++++++++++++++++++++++++++++++++++
// 1 -> A JavaScript Set is a collection of unique values.
// 2 -> Each value can only occur once in a Set.

// new Set()  - Creates a new Set
// add()	  - Adds a new element to the Set
// delete()	  - Removes an element from a Set
// has()	  - Returns true if a value exists in the Set
// forEach()  - Invokes a callback for each element in the Set
// values()	  - Returns an iterator with all the values in a Set
// size	      - Returns the number of elements in a Set

const letters = new Set(["a", "b", "c"]);

console.log(letters.add("d")); // Set {'a', 'b', 'c', 'd'}

letters.forEach((letter) => console.log(letter)); //a //b //c //d

console.log(letters.has("b")); // true

console.log(letters.values().next()); // iterator object to access the elements

console.log(letters.delete("d")); // true [returns the boolean]
console.log(letters);

console.log(letters.size); // 3
