// Promises JavaScript ka ek feature hai jo asynchronous operations ko handle karne ke liye use hota hai. Jab koi kaam turant complete nahi hota — jaise ki data fetch karna ya file read karna — tab Promise future mein uska result dene ka vaada karta hai.
// asynchronous = kaam chlta rhega bina kisi dusre kam ko roke huye for example ham koi
// kam krna shuru krte h jab tk vo kam ho rha tb hm dusra kam kr lete h bina pehle kam ko roke huye 

// how to create promises
const promises = new Promise(function(resolve , reject){
    // do some async work
        setTimeout(() => {
        console.log("async task is completed");
        resolve()
    }, 1000);
})
promises.then(function(){
    console.log("promise consumed")
})


// we can also do
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("async 2")
        resolve()
    }, 1000);
}).then(function(){
    console.log("consumed 2")
})

// Data consumption by object
new Promise(function(resolve,reject){
    setTimeout(()=>{
     resolve({username:"kanchan", email:"kaharkanchan884@gmail.com"})
    },1000)
}).then(function(user){
    console.log(user)
})

// uses of resolve and reject
const promiseOne = new Promise(function(resolve,reject){
    setTimeout(()=>{
    let error = true;
    if(!error){
        resolve({user:"kanchan", password:"1234"})
    }
    else{
        reject('ERROR: somthing went wrong')
    }
    },1000)
})
promiseOne
.then((user)=>{
 console.log(user);
 return user.user
})
.then(function(user){
    console.log(user)
})
.catch(function(error){
    console.log(error)
})
.finally(()=>{
    console.log("the promises is resolve either rejected")
})

// promiseTwo - method one
const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({user:"kanchan", password:"1234"})
        }
        else{
            reject('ERROR: somthing went wrong')
        }
        },1000) 
});

// async and await - method two
async function consumetwo() {
    // try is for something true
    try {
        const response = await promiseTwo
    console.log(response)
    } 
    // catch is for something false
    catch (error) {
        console.log(error)
    }
    
}
consumetwo()


// promise3
async function getAllusers() {
    try {
        const response = await fetch('https://api.github.com/users/kanchankahar23');
        const data=await response.json();
        console.log(data)
        // console.log(response)
    } catch (error) {
        console.log('E:',error)
    }
   
}
getAllusers();
// we have to write await to get the whole data 


// same function in .then.catch method
fetch('https://api.github.com/users/kanchankahar23')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})

    