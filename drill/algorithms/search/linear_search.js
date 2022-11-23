// linear search
function linearSearch(arr, elem) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === elem) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch([0, 2, 4, 5, 3, 1, 6], 4));
