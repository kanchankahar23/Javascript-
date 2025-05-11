// json stands for javascript object notation
// json is nothing but an object which far readble than an object 
// it exchange the data between web app and server
// how to represent json

const classroom = { 
  name1:"sachin",
  name2:"akhilesh",
}
const jsonstring = JSON.stringify(classroom)
console.log(jsonstring)
// stringify = it convets object into string

// parsing = read a data
// convert JSON to JS object (access krne ka medium)
const jsondata = `{
    "name":"kanchan",
    "best_friend":"shreya "            
}`;
const jsonObject = JSON.parse(jsondata);
console.log(jsonObject);
