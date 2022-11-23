var a1;
let a2;

var b1 = "b1";
let b2 = 2;

(function () {
  // variable declared with no value
  console.log(a1); // undefined
  console.log(a2); // undefined

  // variable declared with value
  console.log(b1); // b1
  console.log(b2); // 2

  //what happens if we redeclare variables
  var b1 = "b1 - new";
  let b2 = 3;
  console.log(b1); // b1 is replaced by 'b1-new'
  console.log(b2); // 'b2' has already been declared

  // accessing variable before its declaration
  console.log(c1); // undefined due to hoisting
  console.log(c2); // ReferenceError: c2 is not defined
  var c1 = 2;
  let c2 = 3;
})();
