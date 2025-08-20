// function =

// function declarations(statement)
function abcd() {

}

// function expression
let fnc = function () {

}

// Arrow function
let fn = () => {
    console.log("arrow function");
}

fn();

// function with parameter and arguments
function add(v1, v2) {
    console.log(v1 + v2);
}
add(2, 3);  //argument

// default
function add(v1, v2) {
    console.log(v1, v2);
}

add();  //undefined

function add(v1, v2) {
    console.log(v1 + v2);   //NaN
}

add();

// rest and spread parameters = jab argument kai saare ho to humein utne hi parameters bnane padege issey bachne ke liye hum rest ka use krte h
// ...


//  rest = agr ... function ke parameter space me lage to wo rest operator hai 
// agr vo array and object me lge to vo rest bn jata h 

function abcd(...val){
  console.log(val);

}
abcd(1,2,3,4,5,6);
// array bna ke dega
// [1,2,3,4,5,6]

function abcd(a,b,c,...val){
  console.log(val);

}
abcd(1,2,3,4,5,6);

// returns and early ret