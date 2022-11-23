// es5
function insertionSortOne(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

// es2015
function insertionSortTwo(arr) {
  for (let i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSortOne([2, 1, 9, 76, 4]));
console.log(insertionSortTwo([2, 1, 9, 76, 4]));
