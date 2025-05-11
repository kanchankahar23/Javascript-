// array method 
// 1.push = last me element add krna 
let arr = ["chair","table","bottle","bag","tubelight","laptop"];
arr.push("computer");
console.log(arr)


// 2.pop = last se element delete krna 
arr.pop("computer")
console.log(arr);

// 3.unshift = 1st element add krta h 
arr.unshift("copy")
console.log(arr)

// 4.shift = 1st element delete krna h 
arr.shift("chair")
console.log(arr)

// 5.splice = beech me add / remove krta h 
arr.splice(0,2)
console.log(arr)

// 6.slice = naya array return krega..it returns a part of array 
arr.slice(0,3)
console.log(arr)

//spread operator = (...) ye object or array ke element ko faila deta h 
let arr1 = ["koi","computer","le","aao"]
let arr2 = ["ham","tumse","bahut","pyar","krte","hai"]
console.log(...arr1,...arr2)

// flat = ye nested array ko faila detaa h agr kahi array ke andar array h to vo usko faila dega 
let arr3 = ["ham","tumse","bahut",["pyar","krte",["hai"]]]
console.log(arr3)
console.log(arr3.flat(Infinity))


// isArray = check krta h ki given value array h ya ni 
console.log(Array.isArray(["bahut","acha"]));

// from = iska use hm string  ya array ko spread krne ke liye krte h 
console.log(Array.from("kanchan"))


