export class User {
  name = ''
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi! ${this.name}`);
  }
}