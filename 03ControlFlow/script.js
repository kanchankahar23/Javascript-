// if 
// if else
// else if
// switch case
// early return pattern

if (65 > 12) {
    console.log(65)
}
else {
    console.log("not")
}
/////////////////////

// if (loggin && admin) {

// }
// else if (loggedin) {

// }
// else {

// }
//////////////
// switch
let v;
switch (v) {
    case 1:
        console.log("hey")
        break;
    case 2:
        console.log("hello")
        break;
    case 3:
        console.log("namaste")
        break;
    default:
}

/////////////////
let val = 2;
function getval( val) {
    if (val < 100)  return 'A';
    else if( val < 75) return "B";
    else if(val < 50 ) return "C";
    else return "D";
}


getval(89);
console.log(getval(89))


// ////////////////////////////////////////////////
// write a function  getgrade(score) that:
// Takes a student 's marks (0 to 100)
// returns the grade based on this logic 

// 90-100 A+
// 80-89 A
// 70- 79 B
// 60 - 69  C 
// 33-59 D
// 0-32 fail 
// Anything else


    let score = 7;
    function getgrade(score){
        if(score >= 90 && score <= 100){
            console.log("A+")
        }
       else if(score >= 80 && score <= 89){
            console.log("A")
        }
        else   if(score => 70 && score <= 79){
            console.log("B")
        }
        
       else    if(score => 60 && score <= 69){
            console.log("C")
        }
        else   if(score => 33 && score <= 59){
            console.log("D")
        }
        else if(score => 0 && score <= 32){
            console.log("fail")
        }
         else{
            console.log("invalid")
         }

    }
    getgrade(7);
    getgrade(90)