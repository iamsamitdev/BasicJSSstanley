// การสร้างตัวแปรด้วย const 
// 1. ต้องกำหนดค่าให้กับตัวแปรทันที
// const firstname
// console.log(firstname) // จะเกิด error เนื่องจากไม่ได้กำหนดค่าให้กับตัวแปร firstname

// 2. ไม่สามารถเปลี่ยนค่าได้
// const lastname = 'Doe'
// lastname = 'Smith' // TypeError: Assignment to constant variable.

// 3. ตัวอย่างการใช้งาน const กับ object สามารถเปลี่ยนค่าได้
// const person = {}
// person.firstname = 'John'
// person.lastname = 'Doe'
// person.email = 'john@email.com'
// console.log(person)

// person.firstname = 'Jane'
// person.lastname = 'Smith'
// person.email = 'jane@email.com'
// console.log(person)

// 4. ตัวอย่างการใช้งาน const กับ array สามารถเปลี่ยนค่าได้
const fruits = ['apple', 'banana', 'orange']
console.log(fruits)

fruits.push('grape')
console.log(fruits)
