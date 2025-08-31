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
