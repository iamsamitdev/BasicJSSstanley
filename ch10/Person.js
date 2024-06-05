// การสร้าง Class ใน ES6
class Person {

  // Property ของ Class
  name = ''

  // สร้าง Constructor
  constructor(name) {
    this.name = name
  }

  // สร้าง Method
  sayHi() {
    console.log(`Hi, I'm ${this.name}`)
  }

}

// สร้าง Instance ของ Class Person
const p = new Person('Samit')
console.log(p.name) // Samit
p.sayHi() // Hi, I'm Samit

const p2 = new Person('John')
console.log(p2.name) // John
p2.sayHi() // Hi, I'm John