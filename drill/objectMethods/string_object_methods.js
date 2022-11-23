// charAt() - returns the character at the specified index
console.log("maruthi".charAt(1)); // a

// concat() - returns a copy of the joined strings
console.log("maruthi".concat("mb")); // maruthimb

// indexOf() - returns the position of the first found occurence of specified value in a string
console.log("maruthir".indexOf("r")); // 2

// lastIndexOf() - returns the position of the last found occurence of specified value in a string
console.log("maruthir".lastIndexOf("r")); // 7

// replace() - replaces the matched substring with a new substring
console.log("maruthi".replace("m", "n")); // naruthi

// search() - searches for a match between a regex and a string, and returns the position of the match
console.log("maruthi".search("i")); // 6
console.log("Mr. Blue has a blue house".search(/blue/i)); // 4

// slice() - extracts a part of a string and returns a new string
console.log("maruthi".slice(0, 1)); // m [only the first charecter]
console.log("maruthi".slice(-1)); // i [only the last charecter]
console.log("maruthi".slice(0)); // maruthi [whole string]
console.log("maruthi".slice(2, 4)); // ru [slice(start, end)]

// split() - splits the string into a array of substrings
console.log("hi,how,are,you".split(",")); // [ 'hi', 'how', 'are', 'you' ]
console.log("hi,how,are,you".split(",", 2)); // [ 'hi', 'how' ]

// substr() - extracts the characters from a string, beginning at a specified start position, and through the specified number of character
console.log("maruthi".substring(0, 3)); // mar

// toLowerCase() - converts a string to lowercase letters
console.log("MaruThi".toLowerCase()); // maruthi

// toUpperCase() - converts a string to lowercase letters
console.log("MaruThi".toUpperCase()); // MARUTHI

// trim() - removes whitespace from both ends of a string
console.log(" maruthi ".trim()); // maruthi
