// แก้ปัญหาการใช้ var ด้วย let
// 1. การประกาศตัวแปรซ้ำกันไม่ได้
// let fname = 'John'
// let fname = 'Jane'
// console.log(fname); // SyntaxError: Identifier 'fname' has already been declared

// 2. ปัญหาของ Hoisting
// console.log(age) // ReferenceError: Cannot access 'age' before initialization

// 3. Block Scope
// let age = 30
// if (true) {
//   let age = 40
// }

// console.log(age) // 30

// 4. แก้ปัญหาของ Global Scope
var messages = ['Hello', 'JavaScript', 'ES2015']
for (let i = 0; i < messages.length; i++) {
  setTimeout(function() {
    console.log(messages[i])
  }, 1000)
}

// เปลี่ยนค่าตัวแปร
let fullname = 'John Doe'
fullname = 'Jane Doe'