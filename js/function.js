function add(a,b){
    console.log("sum=",a+b);
}
add(23,44)

function subtraction(a,b){
    return a-b;
}
console.log(subtraction(30,23))

function string(user){
    console.log(`${user} is a nice boy`)
}
string("sachin")

// rest operator ...
function calculate(...num){
    return num;
}
console.log(calculate(200,23,23,33,222));
console.log(calculate(12,34,64,56,78,31))

function calculate(...num){
    return num;
}

console.log(calculate(200,23,23,33,222));

//  function in object 
const obj = {
    name:"kanchan",
    age:21
};
function info(anyobject){
    console.log(`${obj.name} is a nice girls and her age is ${obj.age}`)
}
info(obj)

const arr = ["apple","mango","papaya","soyabean"];
function nutrient(getarray){
    console.log(arr);
}
nutrient(arr);