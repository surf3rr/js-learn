const myarr = [0,1,2,3,4,5]

let myarr2 = new Array(2,34,21)

//console.log(myarr2)

//array methods

//myarr.push(6,9)

//console.log(myarr)

myarr.unshift(8)
myarr.shift()
//console.log(myarr)

const newarr = myarr.join()
//console.log(newarr)

// slice, splice

console.log("A ",myarr);

const myarr3=myarr.splice(1,3);

console.log(myarr3);
console.log(myarr);

//slice doesnot manipulate the original array
//splice does manipulates the original array