// OOPS
// 

function createbiscuits(name,price, qty,company,category){
    this.name = name;
    this.price = price;
    this.qty = qty;
    this.company = company;
    this.category  = category;

}

let b1 = new createbiscuits("mongo", 5,80,"parle" , "salt");
console.log(b1);


function createpencil(name,price,color){
    this.name = name;
    this.price = price;
    this.write = function(){
        let h1 = document.createElement("h1");
        h1.textContent = "hello how are you";
        h1.style.color = color;
        document.body.append(h1);
    }
    
}


let pencil = new createpencil("apsara",12,"red");
pencil.write();
let pencil2 = new createpencil("doms",15,"blue");
pencil2.write();
console.log(pencil2);
let pencil3 = new createpencil("doms",15,"yellow");
pencil3.write()
console.log(pencil3);
let pencil4 = new createpencil("doms",15,"brown");
console.log(pencil3);
pencil4.write()
