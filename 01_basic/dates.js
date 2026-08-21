let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())

console.log(typeof myDate)


let myDate2 = new Date(2007,0,21);

console.log(myDate2.toDateString())

let myTimeStamp = Date.now();
console.log(myTimeStamp);