// truthy value = maan lete h ki ye value already true h 
// truthy value in js
// 1."0"
// 2.'false'
// 3." "
// 4.[]
// 5.{}
// 6.function name(params){}


const useremail =[];
if (useremail) {
    console.log("valid username")
}
else{
    console.log("invalid")
}

// if we  check that is it array or not we use
const email = []
if (email.length === 0) {
    console.log("empty array"); 
}
else{
    console.log("full array")
}

// if we want check that is it object or not we use

const user = {}
if (Object.keys(user).length === 0) {
    console.log("it is object");
}


// nullish coelescing operator??
let val ;
val = 10 ?? 9;
val = null ?? 23;
val = null ?? 24 ??89
val = null ?? undefined
val = undefined ?? null
val = undefined ?? 3



console.log(val)


// ternary operator 
let b = 3;
let a = 2;
b > a ? console.log("b is big"):console.log("a is big");


const price = 145;
price >= 300 ? console.log("buy") : console.log("nope")