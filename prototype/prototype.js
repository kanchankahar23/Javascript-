let myname = "kanchan"
let surname = "kahar    "
console.log(myname);
console.log(myname.length)
console.log(surname.length)


let myheros =["spiderman","hulk"];  //array
let heropower = {                   //object
    spiderman:"hammer",
    hulk:"large",
    getspiderpower:function(){
        console.log(`spiderman is ${this.spiderman}`);

    }
}
Object.prototype.kanchan =function(){      //object me inject krna h
    console.log("kanchan is present ");
}
heropower.kanchan();
myheros.kanchan();

Array.prototype.sayhi = function(){   //array me inject kr diya pr ye object ke sath ni apply hoti 
    console.log("hello....")
}
// heropower.sayhi();
myheros.sayhi();


