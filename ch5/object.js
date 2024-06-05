// การสร้าง Object ใน JavaScript
var person = {
  name: 'John',
  age: 25,
  address: {
    street: '123 1st Ave',
    city: 'New York'
  },
  mobile: ['081-111-1111', '082-222-2222']
}

console.log(person.name);
console.log(person.age);
console.log(person.address.street);
console.log(person.address.city);
console.log(person.mobile[0]);
console.log(person.mobile[1]);
console.log(person.mobile);

console.log(Object.keys(person));
console.log(Object.values(person));

// loop mobile
for (var i = 0; i < person.mobile.length; i++) {
  console.log(person.mobile[i]);
}