let form = document.querySelector('form');
let email = document.querySelector("#email");
let password = document.querySelector("#password");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const emailregex = " ^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}";
    const passwordregex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}";



    let emailans = emailregex.test(email.value);
    let passwordans = passwordregex.test(password.value);
    if (!emailans) {
        // error.style.display = "initial";
        let error = document.querySelector("#result-msg");
        error.textContent = "YOU TYPE WRONG TEXT"
    }
})

