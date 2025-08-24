// Q1 select the heading of a page by id and change its text to "welcome to SRIT"

let h1 = document.querySelector("h1");
h1.textContent = "welcome to SRIT";

// use querySelectorAll to select all buttons with class "buy-now"

let buttons = document.querySelectorAll(".buy-now");

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        console.log("hiii");
    })
})

// select all <li> element and print their text using a loop 
let lis = document.querySelectorAll("li");
for(let i = 0;i < lis.length; i++){
    console.log(lis[i].textContent);
}


// another method
let list = document.querySelectorAll("li");
list.forEach(function(val){
console.log(val);
})

// text print krna h
let lists = document.querySelectorAll("li");
lists.forEach(function(val){
    console.log(val.textContent);
})

// select a paragraph and replace its content with:
// <b>updated</b>by javascript
let p = document.querySelector("p");
p.innerHTML = "<b>updated</b>by javascript";
console.log(p);
