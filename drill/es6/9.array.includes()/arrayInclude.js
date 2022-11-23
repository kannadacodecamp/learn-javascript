let numArray = [1, 52, 14, 26, 87];

console.log(numArray); // let print array first
console.log(`IndexOf(0) = ${numArray.indexOf(0)}`); // returns -1
console.log(`IndexOf(14) = ${numArray.indexOf(14)}`); // returns 2

// Not support by internet explorer
console.log(`numArray.includes(2) = ${numArray.includes(2)}`); // return true
