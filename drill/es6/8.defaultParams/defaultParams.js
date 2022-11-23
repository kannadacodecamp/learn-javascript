// Its better to provide default parameters to avoid errors
// const add = (numArray) => {
//   let total = 0;
//   numArray.forEach((e) => {
//     total += e;
//   });
//   console.log(total);
// };
// add();

// Below code the same as above with default parameter as empty array
const add = (numArray = []) => {
  let total = 0;
  numArray.forEach((e) => {
    total += e;
  });
  console.log(total);
};

add();
