const user= {
    name:"kanchan",
    price:999,
    message:function(){
        console.log(`${this.name} , is a powergirl`);
        // console.log(this)
    }
}
// console.log(user.message())
// user.name = "sam";
// console.log(user.message());
console.log(this)


function hello(){
    let user = "kanchan";
    console.log(this);
    console.log(this.user)
}
hello()
// mtlb this only function ke andar kam ni krta pr object ke andar koi function h to vo use kam karega

// arrow function (hold value in variable)
const hey= () =>{
    console.log("hello")
}
hey()
const print = () =>{
    console.log("tu kr legi sab ")
}
print()
//we can also without using variable
// = () =>{
//     console.log("hey baby");
// }

// implicit arrow function
const mul = (n1,n2) => n1*n2
console.log(mul(2,4))  

// {} brases lgayege to return likhna padega 
const div =(a1,b1)=> (a1/b1)
console.log(div(25,5))

const display = ()=>({name:"kanchan"})
console.log(display())