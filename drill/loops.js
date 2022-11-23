// ###################### for ################################
// example 1
for (let a = 0; a < 5; a++) {
  console.log(a); // 0, 1, 2, 3, 4
}

// example 2
let myArr = [1, 2, 3];
for (let b = 0; b <= myArr.length; b++) {
  console.log(b); // 0, 1, 2, 3
}

// example 3
var c = 5;
for (var c = 0; c < 6; c++) {
  console.log(c); // 0, 1, 2, 3, 4
}
console.log(c); // 6 <---

// example 4
var d = 5;
for (let d = 0; d < 6; d++) {
  console.log(d); // 0, 1, 2, 3, 4, 5
}
console.log(d); // 5 <---

// ###### for/in - loops through the properties of an object #######
// NOTE: use this if index order is not important

const numbers = [10, 20, 30];
for (let num in numbers) {
  console.log(`index : ${num} , value : ${numbers[num]}`);
}

// ###### for/of - loops through the values of an iterable object #######
const cars = ["BMW", "Volvo", "Mini"];
for (let car of cars) {
  console.log(car); // BMW, Volvo, Mini
}

for (let x of "maruthi") {
  console.log(x); // m, a, r, u, t, h, i
}

// ###################### while ################################
let i = 0;
while (i < 3) {
  console.log(i); // 0, 1, 2
  i++;
}

// ###################### do/while ################################
let j = 0;
do {
  console.log(j); // 0, 1, 2
  j++;
} while (j < 3);

// +++++++++++++++++++ BREAK and CONTINUE [ START ] ++++++++++++++++++++++++
for (let i = 0; i <= 4; i++) {
  if (i === 3) break;
  console.log(i); // 0, 1, 2
}

for (let i = 0; i <= 4; i++) {
  if (i === 3) continue;
  console.log(i); // 0, 1, 2, 4
}
// +++++++++++++++++++ BREAK and CONTINUE [ END ] ++++++++++++++++++++++++
