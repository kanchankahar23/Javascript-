const info ={
    naam:"kanchan",
    age:21,
    dost:"sachin",
    book:"the secret"
}
 
//access ways
//1. dot notation
//2. brackets []
// console.log(info.naam);
// console.log(info.age);

// // perfect notation
// console.log(info["dost"])

//we can define object in 2 form (method)
//1. litral method
// const obj = {}
const college = {
    name:"karan",
    qualilty:"sweet",
    fitness:"10/10",
    city:"umaria"
}
// console.log(college.name)
// console.log(college["fitness"])

//2. constructor

//modifying and adding 

college.city = "jabalpur"
console.log(college.city)


//nested object
const student={
    sname:"ria",
    sage:21,
    scity:"jabalpur",
    sschool:"mlb",
    sfav:{
        fruit:"mango",
        vegetable:"potato"
    }
}
//access
console.log(student.sfav.fruit);
console.log(student.sage);
console.log(student.sfav.vegetable);

//method = when we define function in a object is called method 

let person  = {
    sub1:55,
    sub2:88,
    greet(){
        console.log("hello kanchan!!");  
    },
    sub3:"hindi",
    sub4:"history",
    sub5:"chemistry",
    sub6:"civics",
    marks(){
   console.log(sub1+sub2);
    },
};
// console.log(person["sub1"]);
// console.log(person.marks);
console.log(person.sub1)
//  console.log(person.marks());
console.log(person.greet());

// function in object 
person.greeting = function(){
  console.log("hello how are you...");

}

console.log(person.greeting())

// concat an object 
const sachin = {
  city : "umaria",
  looks : "handsome",
  mind : "intelligent",
  nature : "sweet"
}
const kanchan ={
    city:"jabalpur",
    looks:"beautiful",
    mind:"average",
    nature:"loving and calm"
}

const obj3 = Object.assign(kanchan,sachin)
console.log(obj3)

const marks ={
    s1:23,
    s2:99,
    s3:32,
    s4:89,
    s5:77
}
const marks2={
    s1:1,
    s2:2,
    s3:3,
    s4:4,
    s5:5
}
const m = Object.assign(marks,marks2);
console.log(m);
let m3 = {...marks,...marks2}
console.log(m3)

// to get the key/value

const array = [
    {
        id:1,
        nam:"krishna"
    },
    {
        id:2,
        nam:"shiv"

    },
    {
        id:3,
        nam:"ganesh"
    },
    {
        id:4,
        nam:"vishnu"
    },
    {
        id:5,
        nam:"ram"
    }
];
// it returns all keys 
console.log(Object.keys(array))   
// it returns all values
console.log(Object.values(array))

// it returns convert array into object 
console.log(Object.entries(array))




















