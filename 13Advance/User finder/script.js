let form = document.querySelector("form");




const userManager = {
    users : [],
    init : function(){
        form.addEventListener("submit", function(){
            console.log(this);
        })
         
    },
    addUser : function(){},
    removeUser : function(){},
}

userManager.init();