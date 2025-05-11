// data aur function ko object ke andar rkhta h 
console.log("encapsulation")
class person{
    constructor(name,age){
        this.username=name ,
        this.age = age
    
    }
    showInfo(){
        console.log(`name:${this.username} , age:${this.age}`)
    }
}
const person1 = new person("kanchan",21);
person1.showInfo();

