// check if array is empty using prototype way

const myArr = [];
const myObj = {};

Array.prototype._isEmptyArr = function () {
  return this?.length == 0;
};

Object.prototype._isEmptyObj = function () {
  return Object.keys(this)?.length == 0;
};

// FAT ARROW FUNCTION DOES NOT WORK AS EXPECTED <--------

console.log(myArr._isEmptyArr()); // true
console.log(myObj._isEmptyObj()); // true
