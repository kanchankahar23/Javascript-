const { useContext } = require("react");

// scope 
function greet() {
    var a = 12;

}
console.log(a);
// functional scope 
// /global scope
// block scope

function abcd() {
    var b = 23;
    // funtional scope
}

// execution context- js sbse pehle jaise hi apka function dekhta h sbse pehle js banata hai executiomn context
// ye ek process h jo different phase me chlta h 
// 1.memory phase
// 2.execution phase;

// lexical scope  = ki app kaha pr physically available ho ye poori tareeke se depend krta h ki app ky aaccess karo paoge

function abcd() {
    let a = 23;
    function def() {
        console.log(a);
    }
}
abcd()
// dynamic scoping

let b = 13;
function ok (){
    console.log(b);
}
function okk(){
    ok();
    ok();
}

