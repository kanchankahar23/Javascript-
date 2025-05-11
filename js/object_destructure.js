// why we use destructure
// we use destructure because if we want to access the properties inside the object and store the property in variable we use 
// destructuring.....

const classroom ={
    students:"akhilesh",
    grades:"A",
    best_friend:"sachin",
}
// access the any key
console.log(classroom.best_friend)


// destructure
const {grades} = classroom
console.log(grades)

// if i change the value of grade it would be
// rename
const {grades: percent} =classroom
console.log(percent)

const student = {
    name:"aman",
    class:"10th",
    roll_no:13,
    fav_subject:{
        sub1:"hindi",
        sub2:"maths",
        sub3:"english"
    }
}
const {name:naam} = student;
console.log(naam)

const {roll_no}= student;
console.log(roll_no)

// destructure object inside the object 
const{fav_subject:{sub2}} =student
console.log(sub2)

const user = {
    name:"kanchan",
    fav:"teaching",
    drink:"chai",
    festival:"holi"
}
console.log(user)
const {drink} = user;
console.log(drink)

const {drink:pey} = user;
console.log(pey)