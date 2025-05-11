function setusername(username){
    this.username = username;
    
}
function createuser(username,email,password){
    // setusername(username);                 //ye ese execute ni hoga 
    setusername.call(username)                // Calls a method of an object, substituting another object for the current object.
    setusername.call(this,username)           
    this.email = email;
    this.password = password;

}
const chai = new createuser("chai","chai@gmail.com",123);
console.log(chai);