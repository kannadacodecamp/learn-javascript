// write a function to swap two numbers

// ES5
function swap(arr, x, y) {
  var temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

// ES2015
const swap = (arr, x, y) => {
  [arr[x], arr[y]] = [arr[y], arr[x]];
};
