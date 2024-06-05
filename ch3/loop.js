// Loop for in javascript
for (var a=1; a<=10; a++) {
  console.log(a)
}

// Loop while in javascript
var b = 1
while(b <= 10) {
  if(b == 5) {
    break
  }
  console.log(b)
  b++
}

// Loop do while in javascript
var c = 1
do {
  console.log(c)
  c++
} while(c <= 10)

// Loop for in array
var scores = [90, 80, 70, 60, 50]
for (var i in scores) {
  console.log(scores[i])
}