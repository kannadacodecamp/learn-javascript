// Find the sequence of an array , lets say Arithmetic, Geometric or No Pattern
// no negetive numbers
function mathSequence(arr) {
  let arith = new Set()
  let geo = new Set()

  for (let i = 1; i < arr.length; i++) {
    let num1 = arr[i] - arr[i - 1]
    arith.add(num1)

    let num2 = arr[i] / arr[i - 1]
    geo.add(num2)
  }
  if (arith.size === 1) return "Arithmetic"
  if (geo.size === 1) return "Geometric"
  return -1
}

console.log(mathSequence([2, 4, 6, 8]))
console.log(mathSequence([3, 9, 27]))
console.log(mathSequence([2, 5, 14, 89]))
