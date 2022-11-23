// similar to bubble sort, but instead of first placing large
// values into sorted position, it places small values into sorted position

// es5
function selectionSortOne(arr) {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

// es2015
function selectionSortTwo(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }

    if (i !== lowest) [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
  }
  return arr;
}

console.log(selectionSortOne([6, 8, 4, 9, 2]));
console.log(selectionSortTwo([6, 8, 4, 9, 2]));
