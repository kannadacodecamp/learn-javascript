// find the length of largest string in a sentence
function longestWord(str) {
  let result = ""

  // ES5
  //   for (let word of words) {
  //     if (word.length > result.length) {
  //       result = word
  //     }
  //   }

  // ES2015
  str.split(" ").forEach((word) => (word.length > result.length ? (result = word) : ""))

  return result
}

console.log(longestWord("I love you"))

//////////////////////////////////////////////////////////////////////////////////////////////
