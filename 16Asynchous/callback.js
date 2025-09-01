// ek function ko agr ap ek aur function bhej de rhe ho parameter me to vo function callback function kehlata h '
function profile(username ,cb){
    console.log("fetching profile data....");
    setTimeout(() =>{
        cb({_id:121212,username})
    })
}
