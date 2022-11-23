// concat() - merge two or more arrays
console.log([1, 2].concat([3, 4], [5])); // [1, 2, 3, 4, 5]

// some() - tests whether at least one element in array passes the test
console.log([1, 2, 3, 4].some((val) => val > 2)); // true

// every() - test if all elements pass the test
console.log([1, 2].every((val) => val > 0)); // true

// filter() - create new array with elements that pass test
console.log([1, 2, 3, 4, 5].filter((val) => val > 3)); // [4, 5]

// find() - returns the first element that matches test
console.log([1, 2, 3, 4, 5].find((val) => val > 3)); // 4

// flat() - new array with sub-array elements flattened by specified depth
console.log([1, [2, [3]]].flat(2)); // [1, 2, 3]

// forEach() - executes function once for each array element
console.log([10, 20, 30].forEach((val) => console.log(val))); // 10 // 20 // 30

// includes() - determines if array includes a certain value
console.log([1, 2, 3].includes(3)); // true

// join() - returns string by concatenating all elements in array
console.log(["m", "a", "r", "u", "t", "h", "i"].join("")); // maruthi
console.log(["m", "a", "r", "u", "t", "h", "i"].join("-")); // m-a-r-u-t-h-i

// lastIndexOf() - returns last index at which given element can be found
console.log([1, 2, 3, 1, 2, 3].lastIndexOf(1)); // 3

// map() - create new array with results of provided function
console.log([1, 2, 3].map((val) => val * 2)); // [2, 4, 6]

// reduce() - resulting in single output value [left to right]
console.log([1, 2, 3].reduce((x, y) => x + y)); // 6
console.log([1, 2, 3].reduce((x, y) => x + y, 100)); // 106
console.log([1, 2, 3].reduce((x, y) => x + y, "$")); // $123
console.log(["m", "a", "r", "u", "t", "h", "i"].reduce((x, y) => x + y)); // maruthi
console.log(["m", "a", "r", "u", "t", "h", "i"].reduce((x, y) => x + y, "$")); // ~maruthi

// reduceRight() - resulting in single output value [right to left]
console.log([1, 2, 3].reduceRight((x, y) => x + y)); // 6
console.log([1, 2, 3].reduceRight((x, y) => x + y, 100)); // 106
console.log([1, 2, 3].reduceRight((x, y) => x + y, "$")); // $123
console.log(["m", "a", "r", "u", "t", "h", "i"].reduceRight((x, y) => x + y)); // maruthi
console.log(["m", "a", "r", "u", "t", "h", "i"].reduceRight((x, y) => x + y, "$")); // ~maruthi

// reverse() - reverses an array
console.log([1, 2, 3].reverse()); // [3, 2, 1]

// sort() - sorts the elements of array in place
console.log([1, 2, 3, 4].sort((a, b) => b - a)); // [4, 3, 2, 1]

// toString() - returns a string representing the specified array
console.log(["a", 1, { id: 1 }].toString()); // a,1,[object, Object]
console.log(["a", 1, JSON.stringify({ id: 1 })].toString()); // a,1,{"id":1}

// ITERATORS
console.log(["a", "b", "c"].entries().next()); // { value: [0, 'a'], done: false }
console.log(["a", "b", "c"].keys().next()); // { value: 0, done: false }
console.log(["a", "b", "c"].values().next()); // { value: 'a', done: false }

// shift() - removes the first array item
console.log([1, 2, 3].shift()); // 1

// pop() - removes the last array item
console.log([1, 2, 3].pop()); // 3

// unshift() - adds one or more elements to beginning of array and returns new length
console.log([2, 3].unshift(1)); // 4

// push() - adds one or more elements to the end of array and returns new length
console.log([2, 3].push(4)); // 3

// slice() - returns the array containing removed items and does not alter original array
let s1 = [1, 2, 3, 4, 5];
console.log(s1.slice(1, 3)); // [2, 3]
console.log(s1); // [1, 2, 3, 4, 5]

// splice() - returns the array containing removed items and alters original array
let s2 = [1, 2, 3, 4, 5];
console.log(s2.splice(1, 3)); // [2, 3, 4]
console.log(s2); // [1, 5]

// Math.max(..arr) - returns the largest number
console.log(Math.min.apply(Math, [1, 2, 3])); // 1
console.log(Math.max(...[1, 2, 3])); // 3 [recommended]
console.log([1, 2, 3].reduce((a, b) => Math.max(a, b))); // 3

// Math.min(...arr) - returns the smallest number
console.log(Math.max.apply(Math, [1, 2, 3])); // 3
console.log(Math.min(...[1, 2, 3])); // 1 [recommended]
console.log([1, 2, 3].reduce((a, b) => Math.min(a, b))); // 1

// Multidimentional array
let m = [
  [1, 3],
  [2, 3, 5],
  [3, 9, 5],
];

for (let i = 0; i < m.length; i++) {
  for (let j = 0; j < m[i].length; j++) {
    console.log(m[i][j]); // 1, 3, 2, 3, 5, 3, 9, 5
  }
}

m.forEach((n) => {
  n.forEach((o) => {
    console.log(o); // 1, 3, 2, 3, 5, 3, 9, 5
  });
});
