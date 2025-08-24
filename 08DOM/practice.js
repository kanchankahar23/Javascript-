// add highlight class to every even item in list

let ul = document.querySelector("ul")
let li = document.querySelectorAll('ul li:nth-child(2n)');
console.log(li);

li.forEach(function(e){
e.classList.add("highlight")
})