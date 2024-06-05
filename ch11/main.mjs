import { User }  from './user.mjs'
import abc from './customer.mjs'

const user = new User('John')
console.log(user.name) // John
user.sayHi() // Hi! John

const customer = new abc('Jane')
console.log(customer.name) // Jane
customer.showInfo() // Customer: Jane