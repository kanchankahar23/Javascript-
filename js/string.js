
//template laterals
age = 21;
string = "kanchan kahar";
console.log(`     hello i am ${string} and i am ${age} year old `);


//method
// 1. trim()
string1 = "   knowledge    ";
console.log(string1.trim())

// 2.replace() = ye sirf 1st wali value ko change krta h 
let str = "who are you and where you are";
console.log(str.replace("you","me"));
console.log(str.replace("who","say"))

// 3.replaceAll() = ye sari ki sari value ko replace kr deta h 
let table = "you can sit on me and you can also stand on me "
console.log(table.replaceAll("you","i"))

// 4.includes()
let computer = "computer is very useful device in todays gereration";
console.log(computer.includes("very"))
console.log(computer.includes("happy"))

// 5.charAt()
let bottle = "tHis "
console.log(bottle.charAt(0))

// 6.touppercase()
//7.tolowercase()
console.log(bottle.toUpperCase())
console.log(bottle.toLowerCase())


// 8. slice()
console.log(bottle.slice(0,2))

// 9. splice() = array method
let arr = ["hello","kese","ho"]
console.log(arr.splice(0,2))


