// closures hote h functiona jo ki kisi parents function ke andar ho aur andar wala function returm ho rh aho and returning function use kare  parent function ka variable 
function abcd (){
    let a = 78;
    return function(){
        console.log(a)
    };
}

// use
// private variable
// global pollution

function rnd (){
    let a = 78;
    return function(){
        console.log(a)
    };
}
rnd();


// ye sach hai funtion ke khatm hone pe apka fnc and uske variales khtm ho jate h pr jb bhi closures banta h to apka variable khat, ho jate h pr jb bhi closure bnta h to apka fnc aur uske variables ka ek backlinkbnya jaata h auruska naam hota h [enviroment]
//counter

function countme(){
    let c = 0 ;
    return function(){
        c++;
        console.log(c);
    }
}
countme();
// exexute ni hoga

let fnc = countme();
fnc();
fnc();
fnc();

// encapsulation = only important data dena baki ho hide kr lwena h 

function clickLimitr(){
    let click = 0;                 // private value
    return function(){
        if(click <  5){
            click++;
            console.log(`clickded = ${click}`);
        }
        else{
            console.log("limit in over")
        }
    }
}

let fun = clickLimitr();
fun();fun();
fun();
fun();
fun();
fun();
