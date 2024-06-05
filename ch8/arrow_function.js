// ตัวอย่างการสร้างฟังก์ชันแบบ Arrow Function
// const greet = (name, message) => {
//   return message + ' ' + name
// }

// console.log(greet('John', 'Hello')) // ผลลัพธ์ "Hello John"

// ถ้าฟังก์ชันมีการ return ค่าเดียว สามารถเขียนแบบย่อได้ดังนี้
// const greet = (name, message) => message + ' ' + name

// console.log(greet('John', 'Hello')) // ผลลัพธ์ "Hello John"

// ถ้าฟังก์ชันมีการ return เพียงอย่างเดียว และมี parameter เดียว
// สามารถเขียนแบบย่อได้ดังนี้
// const greet = name => 'Hello ' + name
// console.log(greet('John')) // ผลลัพธ์ "Hello John"

// ถ้าฟังก์ชันไม่มีการ return ค่า สามารถเขียนแบบย่อได้ดังนี้
const square = x => x * x
console.log(square(5)) // ผลลัพธ์ 25

// Exercies Arrow Function
// 1. แปลงฟังก์ชันข้างล่างให้อยู่ในรูปของ Arrow Function
// function sayHi(name) {
//   return 'Hi ' + name
// }

// Answer
const sayHi = (name='John') => 'Hi ' + name
console.log(sayHi()) // ผลลัพธ์ "Hi John"

const sum = (a=0, b=0) => a + b
console.log(sum()) // ผลลัพธ์ 0
console.log(sum(10, 20)) // ผลลัพธ์ 30

// การต่อ string แบบเดิม
const tabledata1 = 
'<table>' +
'<tr>' +
'<td>'+ sum(10,20) + '</td>' +
'</tr>' +
'</table>'
console.log(tabledata1)

// Template String ใน ES6 ใช้เครื่องหมาย ` (backtick)
const tabaledata2 = 
`
<table>
<tr>
<td>${sum(10,20)}</td>
</tr>
</table>
`
console.log(tabaledata2)


// การเข้าถึงสมาชิกใน Array แบบเดิม
const scores_old = [55, 65, 82]
const s1_old = scores_old[0]
const s2_old = scores_old[1]
const s3_old = scores_old[2]

console.log(s1_old, s2_old, s3_old)

// Desctructuring
const scores_new = [55, 65, 82]
const [s1_new, s2_new, s3_new] = scores_new

console.log(s1_new, s2_new, s3_new)