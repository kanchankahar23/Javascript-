// closures = ek function jo return kre ek aur function aur return hone wala function hamesha use krega parent function ka koi variable

function adcd(){

    let a=12;
    return function(){
         console.log(a);
    }
}