// classiacal inheritance 
// classes  banana and unhe extend kr dena 

// inheritance = class-> class

// prototypal inheritance - object -> object

let coffee = {
    color: "black",
    drink : function(){
        console.log("heyyyyyyyyyyyy coffee is tasty")
    }
}
let coldcoffee = Object.create(coffee);
coldcoffee.drink()
console.log(coldcoffee)
// ek object jiski sari props/method ko inherit kara dete ho dusre object me 
let a = {}
let b = Object.create(a);

