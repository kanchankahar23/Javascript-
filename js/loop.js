for(let i = 0; i<= 10; i++){
    if(i == 5){
        // console.log("5 is best");
    }
    // console.log(i)
}
for(let i = 0; i<= 10; i++){
    if(i == 5){
        // console.log("5 is best");
        break;
    }
    // console.log(i)
}

for(let i = 0; i<= 10; i++){
    if(i == 5){
        // console.log("5 is best");
        // continue;
    }
    // console.log(i)
}

// while loop 
let i = 2;
while(i<= 20){
    if(i % 2 == 0){
         console.log(i)
    }
    i++;
}

 let myarray = ["a","b","c","d","e"];
 let j = 0;
 while(j < myarray.length){
    console.log(myarray[j])
    console.log(`value is ${myarray[j]}`);
    j++;
 }

//  do while
let k = 1
do {
    // console.log(`even is ${k}`)
    k++;
    } while (k <= 10)

// for of
let arr = ["kanchan", "sachin","nannni"]
for(let name of arr){
    // console.log(name)
}

//for in loop
let obj = {nam :"sachin",age:21,city:"jabalpur"};
for(let i in obj){
    // console.log("key = ",obj[i])
}

const shortcuts = {
    js:"javascript",
    cpp:"c++",
    c:"c",
    py:"python",
    java:"java"
}
for (const key in shortcuts) {
   console.log(`${key} is the shortcut of ${shortcuts[key]}`)
    }
// map = object hai iska use array, map ke liye use hota h 
const map = new Map()
map.set('nam',"kanchan");
map.set('class',"MCA"),
map.set('age',21)
for (let [key,value] of map){
    console.log(key, ':' , value);
}