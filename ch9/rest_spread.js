// Spread Operator in ES6
const arr = [4, 5, 6]

// ไม่ใช้ Spread Operator
const append1 = [1, 2, 3, arr] 
console.log(append1) // [1, 2, 3, [4, 5, 6]]

// มีการใช้ Spread Operator
const append2 = [1, 2, 3, ...arr]
console.log(append2) // [1, 2, 3, 4, 5, 6]

// Rest Parameter in ES6
function howManyAgrs(...args) {
  console.log(args.length)
  console.log(args)
}

howManyAgrs() // 0 []
howManyAgrs(4) // 1 [4]
howManyAgrs(4, 5, 6) // 3 [4, 5, 6]

// Example Rest Operator
function multiply(multiplier, ...array){
  return array.map(element => multiplier * element)
}

console.log(multiply(2, 1, 2, 3, 4)) // [2, 4, 6, 8]