const name = "Utkarsh"
const age = 19

//console.log(`Hi my name is ${name} and my age is ${age}`)

const gameName = new String("surf3r-gg-hi");

console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())

const subString = gameName.substring(0,4);
console.log(subString)

const url = "https://github.com/surf3r%20gg"

console.log(url.replace("%20","-"));

console.log(url.includes('surf3r'));

console.log(gameName.split('-'));