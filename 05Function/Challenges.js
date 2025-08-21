// use rest parameter to accept any number of scores and return the total
function getscore(...scores){
console.log(scores);
let total = 0;
scores.forEach(function(val){
    total= total + val;
})
return total;
}
console.log(getscore(10,20,30,40,50));


///////////////////
function checkAge(age){
    if(age < 18 ) return "too young";
    return "allowed";
}

console.log(checkAge(24));

console.log(checkAge(14));

// pass  a function into another function and execute it inside
function abcd(val){
    val();
}

abcd(function(){
    console.log("hey");
}
);

// closures
function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}

const counter = outer();
counter();
counter();