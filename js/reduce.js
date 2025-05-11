// by using arrow function 
const mynumber = [1,2,3,4,5,6,7,8,9,10]
const total = mynumber.reduce((acc,curr) => acc + curr,0 )
console.log(total)

// by using normal function

const even = [2,4,6,8,10]
const sum = even.reduce(function (acc, curr) {
    return acc + curr
} ,0 )
console.log(sum)


// in object
const shop = [
    {
        item:"dark chocolate",
        price:3000
    },
    {
      item:"maggie",
      price:23
    },
    {
        item:"momoes",
        price:2000
    },
    {
        item:"vegetable",
        price:1000
    },
    {
        item:"onion",
        price:200
    },
    {
        item:"choco-pie",
        price:500
    }
]
const calculate = shop.reduce((acc,item) => acc + item.price,0)
console.log(calculate)