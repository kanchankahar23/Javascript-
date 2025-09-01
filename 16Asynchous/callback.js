// ek function ko agr ap ek aur function bhej de rhe ho parameter me to vo function callback function kehlata h '
function profile(username ,cb){
    // console.log("fetching profile data....");
    setTimeout(() =>{
        console.log("fetching the data...")
        cb({_id:121212,username ,age:26, email:"kanchan@gmail.com"})
    },3000)
}

function post(id,cb){
    // console.log("fetching the post....")
    setTimeout(()=>{
        console.log("fetching the post....");
        cb({id:id,post:["kanchhan,hey,hello"]});
    },2000);
}


profile("qaran",function(e){
console.log(e);
post(12,function(ele){
    console.log(ele)
})
})

// that is called callbackhell