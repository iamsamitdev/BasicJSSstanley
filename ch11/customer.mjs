export default class Customer {
  
  name = ''
  constructor(name) {
    this.name = name
  }

  showInfo() {
    console.log(`Customer: ${this.name}`)
  }

}