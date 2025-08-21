// write  a BMI calculator
 function BMI (weight, height){
    return weight / (height * height);

 }
 console.log(BMI(56,1.5).toFixed(2));


//  craete a reusable discount calculator (hof)

function discountcalculotor(discount){
    return function(price){
return price - (price * (discount/ 100));
    }
}
let discounter = discountcalculotor(10);
console.log(discounter(2000));

/////////////////////////////////////////
// build a counter using closure


function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}
let c = counter();
console.log(counter)        //function:counter
console.log(c());  //1
console.log(c());
console.log(c());
console.log(c());

// create a pure function to transform a value
function double(val){
    return val*2;
}
console.log(double(20));

function square(v){
    return v * v;

}
console.log(square(14));

