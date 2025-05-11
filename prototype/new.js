function multipleof2(num){
    return num*2;
}
console.log(multipleof2(3));   //6
console.log(multipleof2.power)  //undefined
console.log(multipleof2.prototype)   //{}


function createuser(username,score){
    this.username= username;
    this.score = score;  //for the current situation
}
createuser.prototype.increment = function(){
    this.score++;
}
createuser.prototype.printme = function(){
    console.log(`i love you ${this.username} ${this.score} time`)
}
const love = new createuser("sachin",99);
const me = createuser("kanchan",99)
// love.increment()
love.printme()