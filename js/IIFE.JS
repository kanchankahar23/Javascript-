// function greet(){
//     console.log("hey everyone")
// }
// greet ()

// using iife(named iife)
(function greet(){
    console.log("hey everyone i am kanchan")
})();

// using arrow function
(() =>{
    console.log("kese h ap sab")
})();

// parameter 
((name) =>{
    console.log(`my name is ${name}`)
})("kanchan")