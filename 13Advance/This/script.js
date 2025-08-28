//This keyword
// current context


// global scope
console.log(this);
// window = window supreme hai 


function abcd() {
    console.log(this);
    // window 

}
// abcd();

let obj = {
    name: "kanchan",
    sayname: function () {    //method
        console.log(this);
        console.log(this.name);
    }
}
console.log(obj);
console.log(obj.sayname())
// obj
let obj2 = {
    name: "kanchan",
    sayname: () => {    //method
        console.log(this);
    }
}
console.log(obj2.sayname());
// window ho jayega agr arrow function use krege to 
// method = esa funtion jo object ke andar ho use hm use method kehte h 


// event handler
document.querySelector("h1").addEventListener("click", function () {
    console.log(this);
    console.log(this.style.color = "blue")

    // event handler pr this vhi h jis pr event handler lga hua h 
});


// class
// isme this ki value blank object hoti h 
class Abcd {
    a = 12;
    constructor() {
        console.log("hello");
        console.log(this.a);
    }
}
let val = new Abcd();
________________________________________________________

//IN SHORT value of this

// global = window 
// function = window
// method with es5 fnc =  object
// method with es6 arrow function - window
// es5 function inside es5 method - window 
// arrow function inside es5  method - object 
// event handler = element 
// class - blank object


// Arrow function 
let info 