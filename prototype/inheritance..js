const user = {
    name:"chai",
    lover:"large amount"
}
const teacher={
    makevideo:true,
}
const teachingsupport={
    isavailable:false
}
const TAsupport = {
    makeassign:"js assignment",
    fulltime:true,
    __proto__:teachingsupport,
}
teacher.__proto__= user
