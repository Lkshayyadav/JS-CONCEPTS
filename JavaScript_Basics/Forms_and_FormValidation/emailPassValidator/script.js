let email = document.querySelector("#email");
let pass = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailans = emailRegex.test(email.value);
    let passans = passwordRegex.test(pass.value);
    let isValid=true

    if (!emailans) {
        document.querySelector("#email-msg").textContent = "Email is incorrect";
        isValid=false
    } else {
        document.querySelector("#email-msg").textContent = ""; // clear msg if correct
    }

    if (!passans) {
        document.querySelector("#password-msg").textContent = "Password is incorrect";
        isValid=false
       
    } else {
        document.querySelector("#password-msg").textContent = ""; // clear msg if correct
    }
    if(isValid){
        document.querySelector("#resultMessage").textContent="Everything is correct"
        document.querySelector("#resultMessage").style.color="green"
    }
    else{
        document.querySelector("#resultMessage").textContent="There is an error"
        document.querySelector("#resultMessage").style.color="red"


    }
});
