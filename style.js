var eye = document.getElementById("eye");
var passwordInput = document.getElementById("floatingPassword");
var signUp = document.getElementById("signUp");

eye.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";  // Show password
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");  // Change icon
    } else {
        passwordInput.type = "password";  // Hide password
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");  // Change icon back
    }
});

signUp.addEventListener("click",()=>{
    window.open("index1.html", "_blank");
})

