// oops(object oriented programming language )
// It is a programming paradigm based on the concept of objects which contains data(propertie)
// and method(function) 

// Object = object is a collection of key - value pairs. jisme hm multiple datatype ka datastore kr 
// store kr skte h

const user ={
    username:"kanchan",
    loginID :1123,
    email:"kk@gmail.com",
    getyoursurname :function(){
        // console.log("kahar");
        // console.log(this)
        // console.log(`username:${this.username}`)
    }
}
// to access the data there are two method 
// 1.dot notation
// 2.square brackets
// console.log(user.username);
// console.log(user["username"])

// console.log(user.getyoursurname())


// CONSTRUCTOR
// special function used to create an object 
const date = new Date();


function data(username,age,islogin){
    this.username = username;
    this.age = age;
    this.islogin = islogin;
    return this
}
// left = variable 
// right = parameter

const userOne = new data("kanchan",21,true)
console.log(userOne)
const usertwo = new data("sachin",22,false)
console.log(usertwo)

// new keyword is a constructor
// 1.sbse pehle empty object crete hota h (multiple intense)
// 2.constructor function call hota h new keyword ke karan
// (argument collect krke hme de deta h)
// 3.this keyword se vo sb argument function me inject ho jate h 
// 4.created
 
console.log(userOne.constructor)
