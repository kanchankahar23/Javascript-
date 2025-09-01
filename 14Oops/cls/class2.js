class user {
    constructor(name, age, email, role) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.role = role;
    }
    write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name}:  ${text}`;
        document.body.appendChild(h1)


    }
}


// now here we are use classical inheritance
class admin extends user {
    constructor(name,age , email ) {
        super(name,age , email);
        this.role ="admin";
    }
    remove(){
        document.querySelectorAll("h1").forEach(function(e){
            e.remove();
        })
    }
}

let u1 = new user("kanchan", 21, "kanchankaha2@gmail.com", "web developer")
let ad1 = new admin("jonh",21,"jonh@admin.com")
let u2 = new user("hon", 21, "hon@gmail.com", " developer")
let u3 = new user("rose", 21, "rose@gmail.com", "backend developer")