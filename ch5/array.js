// การสร้างตัวแปร array
var fname = ['John', 'Jane', 'Jim', 'Jill'];

// การเข้าถึงข้อมูลใน array
console.log(fname[0]);
console.log(fname[1]);

// นับจำนวนข้อมูลใน array
console.log(fname.length);

// วนลูปเข้าถึงข้อมูลใน array
for(var i=0; i < fname.length; i++) {
  console.log(fname[i]);
}

// วนลูปแบบใช้ for..in
for(var i in fname) {
  console.log(fname[i]);
}