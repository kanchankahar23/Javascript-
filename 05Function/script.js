// function =

// function declarations(statement)
function abcd(){

}

// function expression
let fnc = function(){

}

// Arrow function
let fn = () =>{
 console.log("arrow function");
}

fn();

// function with parameter and arguments
function add(v1,v2){
    console.log(v1+v2);
}
add(2,3);  //argument

// default
function add(v1,v2){
    console.log(v1 ,v2);
}

add();  //undefined

function add(v1,v2){
    console.log(v1+v2);   //NaN
}

add(); 