// datatype = data ka type 
//  there 2 type of datatype in javascript 
// 1.primitive datatype

// string = "kanchan"
// number = integer, float = 23 ,1.4
// boolean = true/false
// null =  null ka mtlab h apne koi value ni di 
let selectedstudents = null;

// undefined = undefined ka matlab  h apne variable bnaya aur use value ni di to jo value by default mili wo hai undefined
 
let a;
// undefined



// symbol = unique immutable(not change) value
let uid = Symbol("uid");     
// let uid = Symbol("uid");

// both are unique
let obj = {
    uid:1,
    name:"kanchan",
    age:12,
    email:"kaharkanchan99@gmail.com"
}

let u1 = Symbol("uid")
console.log(obj[u1] = "001")
console.log(obj)
// bigint = 12345567787n
let b = 349332522342n;
console.log(b);

console.log(typeof b);



// 2.non primitive 

// Array[]
let fruit = ["mango", "apple","kiwi"]

console.log(fruit);
// Object{}

let Object = {
    name:"kanchan",
    age:21

}
console.log(Object);
// function()

function greet(){
    console.log("Namaste world")
}
greet()
console.log(greet())