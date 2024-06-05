// การเขียนเงื่อนไข if else ... else if ใน JavaScript
var time = 22

if(time < 10) {
  console.log('Good morning')
} else if(time < 20) {
  console.log('Good day')
} else {
  console.log('Good night')
}

// การเขียนเงื่อนไข switch case ใน JavaScript
var day = new Date().getDay()
console.log(day)

var day = 0

switch(day) {
  case 0:
    console.log('Sunday')
    break;
  case 1:
    console.log('Monday')
    break;
  case 2:
    console.log('Tuesday')
    break;
  case 3:
    console.log('Wednesday')
    break;
  case 4:
    console.log('Thursday')
    break;
  case 5:
    console.log('Friday')
    break;
  case 6:
    console.log('Saturday')
    break;
  default:
    console.log('Unknown')
}