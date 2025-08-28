// this call bind apply

// function ko call krte time ap set kr skte ho ki uski this ki value kya hogi


let obj = {
    name : "kanchan",
    age:45,

};
function go(){
    console.log(this);
    console.log(this.name);
      console.log(this,1,2,3);
    // window
}
// go();

go.call(obj,1,2,3);    //call

// Apply
go.apply(obj,[1,2,3]);  


// bind
go.bind(obj,1,2,3);  

// function hi new copy bnata  h 
let dummy = go.bind(obj,1,2,3);  
dummy()
