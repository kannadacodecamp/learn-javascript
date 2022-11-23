// O(n log n) time & O(n) space
function merge(arr1, arr2) {
  let result = [...arr1, ...arr2];
  return result.sort((a, b) => a - b);
}

// write a function to merge two sorted arrays
// function merge(x, y) {
//   let results = [];
//   let i = 0;
//   let j = 0;
//   while (i < x.length && j < y.length) {
//     if (y[j] > x[i]) {
//       results.push(x[i]);
//       i++;
//     } else {
//       results.push(y[j]);
//       j++;
//     }
//   }
//   while (i < x.length) {
//     results.push(x[i]);
//     i++;
//   }
//   while (j < y.length) {
//     results.push(y[j]);
//     j++;
//   }
//   return results;
// }

function mergeSort(arr) {
  if (arr.length <= 1) return arr; // base case is importatn
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
console.log(mergeSort([1, 5, 3, 4, 2]));
