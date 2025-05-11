const furniture ={
    inside:"chair",
    outside:"tree",
    both:"bed"
}

furniture.get = function(){
    console.log(`hello ${this.inside} i am ${this.outside}`)
}
console.log(furniture.get())


furniture.sell = function(){
    console.log
}