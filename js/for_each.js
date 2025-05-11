// using arrow function
const cousin = ["pratiksha","rohit","arpit","subhu","siddi","sakshi"]
cousin.forEach((item) => {
    // console.log(item)
});

// using callback function 
cousin.forEach(function(item){
    // console.log(item)
});


// normal function
function printme(items){
    // console.log(items);
}
cousin.forEach(printme);


// access object inside an array 
const arr =[
    {
        languagename:"javascript",
        extension:"js"
    },
    {
        languagename:"python",
        extension:"py"
    },
    {
        languagename:"java",
        extension:"java"
    },
]

arr.forEach((item) => {
    console.log(item.languagename)
    console.log(item.extension)
});