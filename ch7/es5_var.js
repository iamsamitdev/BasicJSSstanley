// ปัญหาของการใช้ var
// 1. การประกาศตัวแปรซ้ำกัน
// var fname = 'John'
// var fname = 'Jane'
// console.log(fname); // Jane

// 2. ปัญหาของ Hoisting
// console.log(age) // undefined

// 3. Block Scope
// var age = 30
// if (true) {
//   var age = 40
// }

// console.log(age) // 40

// 4. ปัญหาของ Global Scope
var messages = ['Hello', 'JavaScript', 'ES2015']
for (var i = 0; i < messages.length; i++) {
  setTimeout(function() {
    console.log(messages[i])
  }, 1000)
}
